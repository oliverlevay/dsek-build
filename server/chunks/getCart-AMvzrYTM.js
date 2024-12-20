import { m as moveQueueToCart, s as sendQueuedNotifications, a as moveQueueForwardOneStep, w as withHandledNotificationQueue, r as removeExpiredConsumables } from './reservations-BalPKyhj.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { d as dbIdentification, G as GRACE_PERIOD_WINDOW } from './types4-Dn0vT04J.js';
import { aI as cart_errors_noCart, aJ as cart_errors_itemNotInCart, aK as cart_itemHasBeenRemoved, aL as cart_errors_reservationNotInCart, aM as cart_reservationHasBeenRemoved, aN as tickets_purchase_errors_cartEmpty, aO as tickets_purchase_errors_expiredConsumable, aP as tickets_purchase_errors_soldOutDuringPurchase, aQ as tickets_purchase_alreadyPaidFor, aR as tickets_purchase_errors_missingAnswers, aS as tickets_purchase_freeConsumablesPurchased, aT as tickets_purchase_errors_unableToCreatePaymentIntent, aU as tickets_purchase_errors_multipleActivePayments, aV as tickets_purchase_errors_couldNotSaveIntentID, aW as tickets_purchase_readyToPurchase } from './messages-D8OfyZiq.js';
import { q as questionForm, Q as QuestionType } from './types5-CwL0OX6I.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { f as fail, e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { e as ensurePaymentIntentState, r as removePaymentIntent, c as creteConsumableMetadata, u as updatePaymentIntent, a as createPaymentIntent, s as stripe } from './stripeWebhooks-CY0PR9jX.js';
import { a as getFullName } from './member-DajX-teH.js';
import { ShoppableType } from '@prisma/client';
import { a as NotificationType } from './types3-D4jKTO0f.js';

const purchaseForm = z.object({
  idempotencyKey: z.string()
});
const createStripeCustomer = async ({ member }) => {
  const { id, studentId } = member;
  try {
    const customer = await stripe.customers.create({
      name: getFullName({ ...member, nickname: null }),
      description: `D-sek member: ${studentId}`,
      metadata: {
        member: id
      }
    });
    try {
      await authorizedPrismaClient.member.update({
        where: { id },
        data: { stripeCustomerId: customer.id }
      });
      return customer;
    } catch (error2) {
      console.error(
        `Could not save customer stripe info: ${member.id}, ${customer.id}`
      );
      throw new Error(`Could not save customer info: ${error2}`);
    }
  } catch (error2) {
    throw new Error(`Failed to create stripe customer: ${error2}`);
  }
};
const obtainStripeCustomer = async (member) => {
  const { stripeCustomerId } = member;
  if (!stripeCustomerId) {
    return await createStripeCustomer({ member });
  }
  try {
    const customer = await stripe.customers.retrieve(stripeCustomerId);
    if (!customer.deleted) {
      return customer;
    }
    return await createStripeCustomer({ member });
  } catch {
    return await createStripeCustomer({ member });
  }
};
const clearOutConsumablesAfterSellingOut = async (soldOutShoppableIds) => {
  await withHandledNotificationQueue(
    authorizedPrismaClient.$transaction(async (tx) => {
      const soldOutConsumables = await tx.consumable.findMany({
        where: {
          shoppableId: {
            in: soldOutShoppableIds
          },
          purchasedAt: null
        },
        include: {
          shoppable: true
        }
      });
      await tx.consumable.deleteMany({
        where: {
          id: {
            in: soldOutConsumables.map((c) => c.id)
          }
        }
      });
      const soldOutReservations = await tx.consumableReservation.findMany({
        where: {
          shoppableId: {
            in: soldOutShoppableIds
          }
        },
        include: {
          shoppable: true
        }
      });
      await tx.consumableReservation.deleteMany({
        where: {
          id: {
            in: soldOutReservations.map((r) => r.id)
          }
        }
      });
      const memberIds = soldOutConsumables.map((con) => con.memberId).concat(soldOutReservations.map((res) => res.memberId)).filter(Boolean);
      return [
        {
          title: "😢 Slutsålt:(",
          message: `${soldOutReservations[0]?.shoppable?.title ?? "Biljett"} har blivit slutsåld`,
          memberIds,
          type: NotificationType.PURCHASE_SOLD_OUT,
          link: "/shop/cart"
        }
      ];
    })
  );
};
const purchaseCart = async (prisma, identification, idempotencyKey) => {
  const soldOutShoppableIds = [];
  const now = /* @__PURE__ */ new Date();
  const userConsumables = await prisma.consumable.findMany({
    where: {
      ...dbIdentification(identification),
      purchasedAt: null
    },
    include: {
      questionResponses: true,
      shoppable: {
        include: {
          questions: {
            where: {
              removedAt: null
            }
          },
          ticket: true,
          _count: {
            select: {
              consumables: {
                where: {
                  purchasedAt: {
                    not: null
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  if (userConsumables.length === 0) {
    throw new Error(tickets_purchase_errors_cartEmpty());
  }
  for (const consumable of userConsumables) {
    if (consumable.expiresAt && consumable.expiresAt < now) {
      await withHandledNotificationQueue(
        removeExpiredConsumables(prisma, /* @__PURE__ */ new Date()).then(
          (res) => res.queuedNotifications
        )
      );
      throw new Error(tickets_purchase_errors_expiredConsumable());
    }
    if (consumable.shoppable.type === ShoppableType.TICKET && consumable.shoppable._count.consumables >= (consumable.shoppable.ticket?.stock ?? 0)) {
      soldOutShoppableIds.push(consumable.shoppable.id);
    }
  }
  if (soldOutShoppableIds.length > 0) {
    await clearOutConsumablesAfterSellingOut(soldOutShoppableIds);
    throw new Error(tickets_purchase_errors_soldOutDuringPurchase());
  }
  let didUpdateAlreadyPaidFor = false;
  const existingPaymentIntents = {};
  for (const consumable of userConsumables) {
    if (consumable.stripeIntentId) {
      const [intent2, canRetryPayment] = await ensurePaymentIntentState(
        consumable.stripeIntentId
      );
      if (intent2.status === "succeeded") didUpdateAlreadyPaidFor = true;
      else if (!canRetryPayment)
        await removePaymentIntent(consumable.stripeIntentId);
      else existingPaymentIntents[intent2.id] = intent2;
    }
  }
  if (didUpdateAlreadyPaidFor) {
    return {
      message: tickets_purchase_alreadyPaidFor(),
      type: "success",
      redirect: "inventory"
    };
  }
  if (userConsumables.some(
    (consumable) => consumable.questionResponses.length < consumable.shoppable.questions.length || // check if there is an unanswered question
    consumable.shoppable.questions.some(
      (q) => (
        // check if no response exists for this question
        consumable.questionResponses.some((r) => r.questionId === q.id) === false
      )
    )
  )) {
    throw new Error(tickets_purchase_errors_missingAnswers());
  }
  const price = calculateCartPrice(userConsumables);
  if (price <= 0) {
    await authorizedPrismaClient.consumable.updateMany({
      where: {
        id: {
          in: userConsumables.map((c) => c.id)
        },
        shoppable: {
          // in case any price is negative we filter by price=0.
          // A product's price should never be negative, but we check just in case.
          // We do not want to give away another product for free accidentally.
          price: 0
        }
      },
      data: {
        purchasedAt: /* @__PURE__ */ new Date(),
        priceAtPurchase: 0
      }
    });
    return {
      message: tickets_purchase_freeConsumablesPurchased(),
      type: "success",
      redirect: "inventory"
    };
  }
  const member = identification.memberId ? await prisma.member.findUnique({
    where: {
      id: identification.memberId
    }
  }) : null;
  const customer = member ? await obtainStripeCustomer(member) : null;
  let intent;
  const existingIntentIds = Object.keys(existingPaymentIntents);
  const options = {
    amount: price,
    customer: customer?.id ?? void 0,
    metadata: {
      isAnonymousUser: !member ? "true" : "false",
      // metadata can only be string or number
      customerStudentId: member ? member.studentId : null,
      customerName: member ? getFullName({
        ...member,
        nickname: null
      }) : null,
      ...creteConsumableMetadata(userConsumables)
    }
  };
  if (existingIntentIds.length > 0) {
    const intentId = existingIntentIds[0];
    if (existingIntentIds.length > 1) {
      await Promise.all(
        existingIntentIds.filter((id) => id !== intentId).map((id) => removePaymentIntent(id))
      );
    }
    intent = await updatePaymentIntent(intentId, {
      ...options
    });
  } else {
    intent = await createPaymentIntent({
      ...options,
      idempotencyKey
      // makes sure if user presses button twice, only one payment intent is created
    }).catch((err) => {
      console.error(err);
      throw new Error(tickets_purchase_errors_unableToCreatePaymentIntent());
    });
  }
  try {
    await authorizedPrismaClient.$transaction(async (tx) => {
      const consumables = await tx.consumable.findMany({
        where: {
          id: {
            in: userConsumables.map((c) => c.id)
          },
          OR: [
            {
              stripeIntentId: null
            },
            {
              stripeIntentId: {
                equals: intent.id
                // it's fine if its the same (might be due to idempotencyKey)
              }
            }
          ]
        }
      });
      if (consumables.length !== userConsumables.length) {
        throw new Error(tickets_purchase_errors_multipleActivePayments());
      }
      const results = await Promise.allSettled(
        userConsumables.map(
          (consumable) => tx.consumable.update({
            where: {
              id: consumable.id
            },
            data: {
              stripeIntentId: intent.id,
              priceAtPurchase: calculateConsumablePrice(consumable)
            }
          })
        )
      );
      if (results.some((result) => result.status === "rejected")) {
        throw new Error(tickets_purchase_errors_couldNotSaveIntentID());
      }
    });
  } catch (err) {
    await removePaymentIntent(intent.id);
    throw err;
  }
  return {
    clientSecret: intent.client_secret,
    message: tickets_purchase_readyToPurchase(),
    type: "hidden"
  };
};
const calculateConsumablePrice = (consumable) => consumable.shoppable.price + consumable.questionResponses.reduce((a, c) => a + (c.extraPrice ?? 0), 0);
const calculateCartPrice = (consumables) => consumables.reduce(
  (acc, consumable) => acc + calculateConsumablePrice({
    shoppable: consumable.shoppable,
    questionResponses: consumable.questionResponses
  }),
  0
);
const answerQuestion = async (prisma, identification, data) => {
  const consumable = await prisma.consumable.findUnique({
    where: {
      ...dbIdentification(identification),
      id: data.consumableId,
      shoppable: {
        questions: {
          some: {
            removedAt: null,
            id: data.questionId
          }
        }
      }
    },
    include: {
      shoppable: {
        include: {
          questions: {
            include: {
              options: true
            }
          }
        }
      }
    }
  });
  if (!consumable) {
    throw new Error(cart_errors_itemNotInCart());
  }
  const question = consumable.shoppable.questions.find(
    (q) => q.id === data.questionId
  );
  if (!question) throw new Error("Question not found");
  let extraPrice;
  switch (question.type) {
    case QuestionType.MultipleChoice: {
      const answerObj = question.options.find(
        (option) => option.answer === data.answer || option.answerEn === data.answer
      );
      if (!answerObj) throw new Error("Invalid option");
      if (answerObj.answer !== data.answer && answerObj.answerEn !== data.answer)
        throw new Error("Corrupt answer");
      extraPrice = answerObj.extraPrice ?? 0;
      break;
    }
    case QuestionType.Text:
      extraPrice = 0;
      break;
    default:
      throw new Error(`The question type "${question.type}" is not supported.`);
  }
  await prisma.itemQuestionResponse.upsert({
    where: {
      questionId_consumableId: {
        questionId: question.id,
        consumableId: consumable.id
      }
    },
    update: {
      answer: data.answer,
      extraPrice
    },
    create: {
      consumableId: consumable.id,
      questionId: question.id,
      answer: data.answer,
      extraPrice
    }
  });
};
const cartActions = {
  removeItem: async ({ locals, request }) => {
    const { user, prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ id: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    if (!user?.memberId && !user?.externalCode) {
      return message(form, {
        message: cart_errors_noCart(),
        type: "error"
      });
    }
    const consumable = await prisma.consumable.findUnique({
      where: {
        id: form.data.id
      }
    });
    if (!consumable) {
      return message(form, {
        message: cart_errors_itemNotInCart(),
        type: "error"
      });
    }
    const queuedNotifications = await authorizedPrismaClient.$transaction(
      async (tx) => {
        await tx.consumable.delete({
          where: {
            id: consumable.id
          }
        });
        return await moveQueueToCart(tx, consumable.shoppableId, 1);
      }
    );
    sendQueuedNotifications(queuedNotifications);
    return message(form, {
      message: cart_itemHasBeenRemoved(),
      type: "success"
    });
  },
  removeReservation: async ({ locals, request }) => {
    const { user, prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ id: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    if (!user?.memberId && !user?.externalCode) {
      return message(form, {
        message: cart_errors_noCart(),
        type: "error"
      });
    }
    const reservation = await prisma.consumableReservation.findUnique({
      where: {
        id: form.data.id
      }
    });
    if (!reservation) {
      return message(form, {
        message: cart_errors_reservationNotInCart(),
        type: "error"
      });
    }
    await authorizedPrismaClient.$transaction(async (tx) => {
      await tx.consumableReservation.delete({
        where: {
          id: reservation.id
        }
      });
      if (reservation.order !== null)
        await moveQueueForwardOneStep(
          tx,
          reservation.shoppableId,
          reservation.order
        );
    });
    return message(form, {
      message: cart_reservationHasBeenRemoved(),
      type: "success"
    });
  },
  answerQuestion: async ({ locals, request }) => {
    const { user, prisma } = locals;
    const form = await superValidate(request, zod(questionForm));
    if (!form.valid) return fail(400, { form });
    if (!user?.memberId && !user?.externalCode) {
      return message(form, {
        message: cart_errors_noCart(),
        type: "error"
      });
    }
    const { memberId, externalCode } = user;
    try {
      await answerQuestion(
        prisma,
        memberId ? { memberId } : {
          externalCode
        },
        form.data
      );
    } catch (e) {
      return message(form, {
        message: e instanceof Error ? e.message : `${e}`,
        type: "error"
      });
    }
    return message(form, {
      message: "Svaret har sparats.",
      type: "hidden"
    });
  },
  purchase: async (event) => {
    const { locals, request } = event;
    const { user, prisma } = locals;
    authorize(apiNames.WEBSHOP.PURCHASE, user);
    const form = await superValidate(request, zod(purchaseForm));
    if (!form.valid) return fail(400, { form });
    if (!user?.memberId && !user?.externalCode) {
      throw error(401, cart_errors_noCart());
    }
    let redirectUrl = void 0;
    let data;
    try {
      const { redirect: redirect2, ...rest } = await purchaseCart(
        prisma,
        user.memberId ? {
          memberId: user.memberId
        } : {
          externalCode: user.externalCode
        },
        form.data.idempotencyKey
      );
      redirectUrl = redirect2;
      data = rest;
    } catch (err) {
      return message(
        form,
        {
          message: `${"message" in err ? err.message : err}`,
          type: "error"
        },
        {
          status: 500
        }
      );
    }
    if (redirectUrl) {
      throw redirect(redirectUrl, data, event);
    }
    return message(form, data);
  }
};
const getCart = async (prisma, id) => {
  const now = /* @__PURE__ */ new Date();
  await withHandledNotificationQueue(
    removeExpiredConsumables(authorizedPrismaClient, now).then(
      (res) => res.queuedNotifications
    )
  );
  const inCart = await prisma.consumable.findMany({
    where: {
      ...dbIdentification(id),
      OR: [{ expiresAt: { gt: now } }, { expiresAt: null }],
      purchasedAt: null,
      shoppable: { type: ShoppableType.TICKET }
    },
    include: {
      questionResponses: true,
      shoppable: {
        include: {
          questions: { where: { removedAt: null }, include: { options: true } },
          ticket: {
            include: { event: true }
          },
          _count: {
            select: {
              consumables: {
                where: { purchasedAt: { not: null } }
              }
            }
          }
        }
      }
    }
  });
  const reservations = await prisma.consumableReservation.findMany({
    where: {
      ...dbIdentification(id),
      shoppable: { type: ShoppableType.TICKET }
    },
    include: {
      shoppable: {
        include: {
          ticket: { include: { event: true } }
        }
      }
    }
  });
  return {
    inCart: inCart.map((c) => ({
      ...c,
      shoppable: {
        ...c.shoppable.ticket,
        ...c.shoppable,
        ticket: void 0
      }
    })),
    reservations: reservations.map((c) => ({
      ...c,
      shoppable: {
        ...c.shoppable.ticket,
        ...c.shoppable,
        ticket: void 0,
        gracePeriodEndsAt: new Date(
          c.shoppable.availableFrom.valueOf() + GRACE_PERIOD_WINDOW
        )
      }
    }))
  };
};
const getCartWithExtras = async (prisma, identification) => {
  const { inCart, reservations } = await getCart(prisma, identification);
  const cartPrice = calculateCartPrice(inCart);
  const totalPrice = cartPrice;
  const inCartWithQuestionForms = await Promise.all(
    inCart.map(async (item) => {
      const questions = item.shoppable.questions;
      const answers = item.questionResponses;
      return {
        ...item,
        shoppable: {
          ...item.shoppable,
          questions: await Promise.all(
            questions.map(async (question) => {
              const answer = answers.find((a) => a.questionId === question.id);
              return {
                ...question,
                form: await superValidate(
                  {
                    consumableId: item.id,
                    questionId: question.id,
                    answer: answer?.answer
                  },
                  zod(questionForm),
                  {
                    errors: false
                  }
                )
              };
            })
          )
        }
      };
    })
  );
  return {
    inCart: inCartWithQuestionForms,
    reservations,
    purchaseForm: await superValidate(zod(purchaseForm)),
    totalPrice,
    transactionFee: 0
  };
};
const cartLoadFunction = async ({
  locals,
  depends
}) => {
  const { user, prisma } = locals;
  if (!user?.memberId && !user?.externalCode) {
    throw error(401, "Du har ingen kundvagn.");
  }
  depends("cart");
  authorize(apiNames.WEBSHOP.PURCHASE, user);
  return await getCartWithExtras(
    prisma,
    user?.memberId ? {
      memberId: user.memberId
    } : {
      externalCode: user.externalCode
    }
  );
};

export { cartActions as a, cartLoadFunction as c };
//# sourceMappingURL=getCart-AMvzrYTM.js.map
