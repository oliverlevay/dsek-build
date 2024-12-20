import { b6 as tickets_addToCart_addedToInventory, b7 as tickets_addToCart_unknownResult, b8 as tickets_addToCart_inQueue, aX as tickets_errors_ticketNotFound, b9 as tickets_addToCart_errors_notAllowed, ba as tickets_addToCart_errors_salePeriodEnded, bb as tickets_addToCart_errors_salePeriodNotStarted, bc as tickets_addToCart_errors_ticketSoldOut, bd as tickets_addToCart_errors_alreadyOwned, be as tickets_addToCart_errors_alreadyOwnsMax, bf as tickets_addToCart_errors_alreadyReserved, bg as tickets_addToCart_lotteryReservation, bh as tickets_addToCart_addedToCart } from './messages-D8OfyZiq.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { d as dbIdentification, G as GRACE_PERIOD_WINDOW, T as TIME_TO_BUY } from './types4-Dn0vT04J.js';
import { e as ensureState, s as sendQueuedNotifications, q as queueNextExpiredConsumablesPruning, p as performLotteryIfNecessary } from './reservations-BalPKyhj.js';
import { error } from 'console';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import './client-yexbOeKf.js';
import { s as superValidate, z as zod, l as fail, j as message } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { z } from './index-CuABlRvJ.js';

var AddToCartStatus = /* @__PURE__ */ ((AddToCartStatus2) => {
  AddToCartStatus2["AddedToCart"] = "AddedToCart";
  AddToCartStatus2["Reserved"] = "Reserved";
  AddToCartStatus2["PutInQueue"] = "PutInQueue";
  AddToCartStatus2["AddedToInventory"] = "AddedToInventory";
  return AddToCartStatus2;
})(AddToCartStatus || {});
const addTicketToCart = async (prisma, ticketId, user) => {
  const now = /* @__PURE__ */ new Date();
  const queuedNotifications = [];
  if (!user.memberId && !user.externalCode) {
    throw error(401);
  }
  const idPart = dbIdentification(
    user.memberId ? {
      memberId: user.memberId
    } : {
      externalCode: user.externalCode
    }
  );
  await authorizedPrismaClient.$transaction(async (prisma2) => {
    const result = await ensureState(prisma2, now, ticketId);
    queuedNotifications.push(...result.queuedNotifications);
  });
  sendQueuedNotifications(queuedNotifications);
  const res = await prisma.$transaction(async (tx) => {
    const ticket = await tx.ticket.findUnique({
      where: {
        id: ticketId,
        shoppable: {
          // not removed
          OR: [
            {
              removedAt: null
            },
            {
              removedAt: {
                gt: /* @__PURE__ */ new Date()
              }
            }
          ]
        }
      },
      include: {
        shoppable: {
          include: {
            accessPolicies: true,
            consumables: true,
            _count: {
              select: {
                consumables: {
                  where: {
                    purchasedAt: {
                      not: null
                    }
                  }
                },
                reservations: true
              }
            }
          }
        }
      }
    });
    if (!ticket) throw new Error(tickets_errors_ticketNotFound());
    if (ticket.shoppable.accessPolicies.length > 0 && !ticket.shoppable.accessPolicies.some(
      (p) => p.role && user.roles.includes(p.role) || p.studentId && p.studentId === user.studentId
    )) {
      throw new Error(tickets_addToCart_errors_notAllowed());
    }
    if (ticket.shoppable.availableTo && ticket.shoppable.availableTo < now)
      throw new Error(tickets_addToCart_errors_salePeriodEnded());
    if (ticket.shoppable.availableFrom > now)
      throw new Error(tickets_addToCart_errors_salePeriodNotStarted());
    if (ticket.shoppable._count.consumables >= ticket.stock)
      throw new Error(tickets_addToCart_errors_ticketSoldOut());
    await checkUserMaxAmount(tx, idPart, ticket);
    if (now.valueOf() - ticket.shoppable.availableFrom.valueOf() < GRACE_PERIOD_WINDOW) {
      return await addReservationInReserveWindow(
        tx,
        idPart,
        ticket.shoppable.id,
        ticket.shoppable.availableFrom.valueOf() + GRACE_PERIOD_WINDOW - now.valueOf()
      );
    }
    if (ticket.shoppable.consumables.length >= ticket.stock) {
      return addToQueue(tx, idPart, ticket);
    }
    if (ticket.shoppable.price === 0) {
      await tx.consumable.create({
        data: {
          ...idPart,
          shoppableId: ticket.shoppable.id,
          purchasedAt: now,
          priceAtPurchase: 0
        }
      });
      return {
        status: "AddedToInventory"
        /* AddedToInventory */
      };
    }
    await tx.consumable.create({
      data: {
        ...idPart,
        shoppableId: ticket.shoppable.id,
        expiresAt: new Date(now.valueOf() + TIME_TO_BUY)
      }
    });
    return {
      status: "AddedToCart"
      /* AddedToCart */
    };
  });
  await queueNextExpiredConsumablesPruning();
  return res;
};
const checkUserMaxAmount = async (prisma, id, ticket) => {
  const currentlyInCart = await prisma.consumable.count({
    where: {
      ...id,
      shoppableId: ticket.shoppable.id
    }
  });
  if (ticket.maxAmountPerUser == 1 && currentlyInCart > 0)
    throw new Error(tickets_addToCart_errors_alreadyOwned());
  else if (currentlyInCart >= ticket.maxAmountPerUser)
    throw new Error(tickets_addToCart_errors_alreadyOwnsMax());
  const currentlyReserved = await prisma.consumableReservation.count({
    where: {
      ...id,
      shoppableId: ticket.shoppable.id
    }
  });
  if (currentlyReserved > 0)
    throw new Error(tickets_addToCart_errors_alreadyReserved());
};
const addToQueue = async (prisma, id, ticket) => {
  const currentPeopleInQueue = await prisma.consumableReservation.findMany({
    where: {
      shoppableId: ticket.shoppable.id
    },
    orderBy: {
      order: "desc"
    }
  });
  const lastInQueueOrder = currentPeopleInQueue[0]?.order ?? -1;
  await prisma.consumableReservation.create({
    data: {
      ...id,
      shoppableId: ticket.shoppable.id,
      order: lastInQueueOrder + 1
    }
  });
  return {
    status: "PutInQueue",
    queuePosition: lastInQueueOrder + 2
  };
};
const afterGracePeriod = async (shoppableId) => {
  try {
    const queuedNotifications = await authorizedPrismaClient.$transaction(
      async (prisma) => {
        return await performLotteryIfNecessary(prisma, /* @__PURE__ */ new Date(), shoppableId);
      }
    );
    sendQueuedNotifications(queuedNotifications);
  } catch (err) {
    console.error("problem performing reservation lottery:", err);
  }
};
const gracePeriodTimeouts = {};
const addReservationInReserveWindow = async (prisma, id, shoppableId, timeUntilGracePeriod) => {
  const existingReservation = await prisma.consumableReservation.findFirst({
    where: {
      ...id,
      shoppableId
    }
  });
  if (existingReservation)
    throw new Error(tickets_addToCart_errors_alreadyReserved());
  await prisma.consumableReservation.create({
    data: {
      ...id,
      shoppableId,
      order: null
    }
  });
  if (gracePeriodTimeouts[shoppableId] === void 0) {
    gracePeriodTimeouts[shoppableId] = setTimeout(() => {
      afterGracePeriod(shoppableId);
      delete gracePeriodTimeouts[shoppableId];
    }, timeUntilGracePeriod);
  }
  return {
    status: "Reserved"
    /* Reserved */
  };
};
const addToCartSchema = z.object({
  ticketId: z.string().uuid()
});
const ticketPageActions = (prefix = "/shop/") => ({
  addToCart: async (event) => {
    const { locals, request } = event;
    const { prisma, user } = locals;
    authorize(apiNames.WEBSHOP.PURCHASE, user);
    const form = await superValidate(request, zod(addToCartSchema));
    if (!form.valid) return fail(400, { form });
    if (!user?.memberId && !user?.externalCode) {
      return fail(401, { form });
    }
    let result;
    try {
      result = await addTicketToCart(prisma, form.data.ticketId, user);
    } catch (err) {
      let errorMsg;
      if (err instanceof Error) errorMsg = err.message;
      else errorMsg = String(err);
      return message(form, {
        message: errorMsg,
        type: "error"
      });
    }
    if (result.status === AddToCartStatus.AddedToInventory) {
      throw redirect(
        `${prefix}inventory`,
        {
          message: tickets_addToCart_addedToInventory(),
          type: "success"
        },
        event
      );
    }
    let successMessage;
    switch (result.status) {
      case AddToCartStatus.AddedToCart:
        successMessage = tickets_addToCart_addedToCart();
        break;
      case AddToCartStatus.Reserved:
        successMessage = tickets_addToCart_lotteryReservation();
        break;
      case AddToCartStatus.PutInQueue:
        successMessage = tickets_addToCart_inQueue({
          queuePosition: result.queuePosition
        });
        break;
      default:
        return message(form, {
          message: tickets_addToCart_unknownResult(),
          type: "error"
        });
    }
    throw redirect(
      `${prefix}cart`,
      {
        message: successMessage,
        type: "success"
      },
      event
    );
  }
});

export { ticketPageActions as t };
//# sourceMappingURL=actions3-ByPkkF84.js.map
