import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { e as ensurePaymentIntentState, r as removePaymentIntent } from './stripeWebhooks-CY0PR9jX.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { aX as tickets_errors_ticketNotFound } from './messages-D8OfyZiq.js';
import { T as TIME_TO_BUY, G as GRACE_PERIOD_WINDOW } from './types4-Dn0vT04J.js';

const ensureState = async (prisma, now, shoppableId) => {
  const { modifiedTickets, queuedNotifications } = await removeExpiredConsumables(prisma, now);
  const queuedNotifications2 = await performLotteryIfNecessary(
    prisma,
    now,
    shoppableId
  );
  return {
    modifiedTickets,
    queuedNotifications: queuedNotifications.concat(queuedNotifications2)
  };
};
const removeExpiredConsumables = async (prisma, now) => {
  const expiredWithIntent = await prisma.consumable.findMany({
    where: {
      expiresAt: {
        not: null,
        lte: now
      },
      purchasedAt: null,
      stripeIntentId: {
        not: null
      }
    }
  });
  if (expiredWithIntent.length > 0) {
    const intentIds = new Set(expiredWithIntent.map((e) => e.stripeIntentId));
    for (const intentId of intentIds) {
      try {
        const [, canTryAgain] = await ensurePaymentIntentState(intentId);
        if (canTryAgain) {
          await removePaymentIntent(intentId);
        } else {
        }
      } catch {
      }
    }
  }
  const toBeRemoved = await prisma.consumable.findMany({
    where: {
      expiresAt: {
        not: null,
        lte: now
      },
      purchasedAt: null,
      stripeIntentId: null
    }
  });
  let queuedNotifications = [];
  if (toBeRemoved.length > 0) {
    queuedNotifications.push({
      title: "Produkt i kundvagnen har löpt ut",
      message: `Den reserverade tiden du hade för att skaffa produkten har löpt ut, om det finns lager kvar kan du försöka skaffa den igen här.`,
      link: "/shop/tickets",
      memberIds: toBeRemoved.map((item) => item.memberId).filter(Boolean),
      type: NotificationType.PURCHASE_CONSUMABLE_EXPIRED
    });
    await prisma.consumable.deleteMany({
      where: {
        expiresAt: {
          not: null,
          lte: now
        },
        purchasedAt: null,
        stripeIntentId: null
      }
    });
  }
  const { modifiedTickets, queuedNotifications: newQueuedNotifications } = await updateAllNecessaryQueues(prisma);
  queuedNotifications = queuedNotifications.concat(newQueuedNotifications);
  return {
    modifiedTickets,
    queuedNotifications
  };
};
let pruneTimeout = null;
const queueNextExpiredConsumablesPruning = async () => {
  if (pruneTimeout) return;
  const nextConsumableToExpire = await authorizedPrismaClient.consumable.findFirst({
    where: {
      expiresAt: {
        not: null,
        gt: /* @__PURE__ */ new Date()
      }
    },
    orderBy: {
      expiresAt: "asc"
    }
  });
  if (nextConsumableToExpire == null || !nextConsumableToExpire.expiresAt)
    return;
  pruneTimeout = setTimeout(async () => {
    const now = /* @__PURE__ */ new Date();
    await withHandledNotificationQueue(
      removeExpiredConsumables(authorizedPrismaClient, now).then(
        (r) => r.queuedNotifications
      )
    );
    if (pruneTimeout) clearTimeout(pruneTimeout);
    await queueNextExpiredConsumablesPruning();
  }, nextConsumableToExpire.expiresAt.valueOf() - Date.now());
};
const updateAllNecessaryQueues = async (prisma) => {
  const ticketsWithReservations = await prisma.ticket.findMany({
    where: {
      shoppable: {
        reservations: {
          some: {},
          // 'some' ensures that there is at least one reservation
          every: {
            order: {
              not: null
              // if there is a null order, lotter should have been performed or should be performed
            }
          }
        },
        availableFrom: {
          lte: new Date(Date.now() - GRACE_PERIOD_WINDOW)
        }
      }
    },
    include: {
      shoppable: {
        include: {
          reservations: true,
          consumables: true
        }
      }
    }
  });
  const queuedNotifications = (await Promise.all(
    ticketsWithReservations.map(
      (ticket) => updateQueue(
        prisma,
        ticket,
        ticket.shoppable.reservations.map((reservation) => ({
          ...reservation,
          shoppable: ticket.shoppable
        })),
        ticket.shoppable.consumables
      )
    )
  )).flatMap((notifications) => notifications);
  return {
    modifiedTickets: ticketsWithReservations.map((t) => t.id),
    queuedNotifications
  };
};
const updateQueue = async (prisma, ticket, reservations, consumables) => {
  const purchasedConsumablesCount = consumables.filter(
    (con) => con.purchasedAt != null
  ).length;
  if (purchasedConsumablesCount >= ticket.stock) {
    const soldOutReservations = await prisma.consumableReservation.findMany({
      where: {
        shoppableId: ticket.id
      },
      include: {
        shoppable: true
      }
    });
    await prisma.consumableReservation.deleteMany({
      where: {
        shoppableId: ticket.id
      }
    });
    return [
      {
        title: "😢 Slutsålt:(",
        message: `${soldOutReservations[0]?.shoppable?.title ?? "Biljett"} har blivit slutsåld`,
        memberIds: soldOutReservations.map((res) => res.memberId).filter(Boolean),
        type: NotificationType.PURCHASE_SOLD_OUT,
        link: "/shop/cart"
      }
    ];
  } else {
    return (await updateQueueGivenStock(
      prisma,
      ticket.id,
      reservations,
      consumables.length,
      ticket.stock
    )).queuedNotifications;
  }
};
const updateQueueGivenStock = async (prisma, shoppableId, reservations, inCartOrPurchased, stock) => {
  if (reservations.length === 0) {
    return {
      moved: 0,
      spaceLeft: stock - inCartOrPurchased,
      queuedNotifications: []
    };
  }
  if (inCartOrPurchased >= stock) {
    return { moved: 0, spaceLeft: 0, queuedNotifications: [] };
  }
  const toMove = Math.min(stock - inCartOrPurchased, reservations.length);
  const queuedNotifications = await moveReservationsToCart(
    prisma,
    shoppableId,
    reservations.slice(0, toMove)
  );
  return {
    moved: toMove,
    spaceLeft: stock - inCartOrPurchased - toMove,
    queuedNotifications
  };
};
const moveQueueForwardOneStep = async (prisma, shoppableId, fromOrder) => {
  return await prisma.consumableReservation.updateMany({
    where: {
      shoppableId,
      order: {
        not: null,
        gt: fromOrder
      }
    },
    data: {
      order: {
        decrement: 1
      }
    }
  });
};
const moveQueueToCart = async (prisma, shoppableId, amountToMove, updateOrder) => {
  const reservationsToMove = await prisma.consumableReservation.findMany({
    where: {
      shoppableId,
      order: {
        not: null
      }
    },
    orderBy: {
      order: "asc"
    },
    take: amountToMove,
    include: {
      shoppable: true
    }
  });
  return await moveReservationsToCart(
    prisma,
    shoppableId,
    reservationsToMove,
    updateOrder
  );
};
const moveReservationsToCart = async (prisma, shoppableId, reservationsToMove, updateOrder = true, shouldQueueNotifications = true) => {
  if (reservationsToMove.length === 0) return [];
  await prisma.consumable.createMany({
    data: reservationsToMove.map((r) => ({
      shoppableId,
      memberId: r.memberId,
      externalCustomerCode: r.externalCustomerCode,
      externalCustomerEmail: r.externalCustomerEmail,
      expiresAt: new Date(Date.now() + TIME_TO_BUY)
    }))
  });
  await prisma.consumableReservation.deleteMany({
    where: {
      shoppableId,
      id: {
        in: reservationsToMove.map((r) => r.id)
      }
    }
  });
  if (updateOrder)
    await prisma.consumableReservation.updateMany({
      where: {
        shoppableId
      },
      data: {
        order: {
          decrement: reservationsToMove.length
        }
      }
    });
  if (shouldQueueNotifications) {
    return [
      {
        title: "🎉 Din tur!",
        message: `Det är nu din tur att få ${(reservationsToMove[0]?.shoppable.price ?? 1) > 0 ? "köpa" : "skaffa"} ${reservationsToMove[0]?.shoppable?.title ?? "det du köade till"}`,
        memberIds: reservationsToMove.map((res) => res.memberId).filter(Boolean),
        type: NotificationType.PURCHASE_TIME_TO_BUY,
        link: "/shop/cart"
      }
    ];
  }
  return [];
};
const performLotteryIfNecessary = async (prisma, now, shoppableId) => {
  const ticketAfterGracePeriodWithReservations = await prisma.ticket.findUnique(
    {
      where: {
        id: shoppableId,
        shoppable: {
          reservations: {
            some: {
              order: null
            }
          },
          availableFrom: {
            lte: new Date(now.valueOf() - GRACE_PERIOD_WINDOW)
          }
        }
      }
    }
  );
  if (ticketAfterGracePeriodWithReservations !== null) {
    return await performReservationLottery(prisma, shoppableId);
  }
  return [];
};
const performReservationLottery = async (prisma, shoppableId) => {
  const reservations = await prisma.consumableReservation.findMany({
    where: {
      shoppableId,
      order: null
    },
    include: {
      shoppable: true
    }
  });
  if (reservations.length === 0) return [];
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: shoppableId
    }
  });
  if (ticket == null) {
    throw new Error(tickets_errors_ticketNotFound());
  }
  const stock = ticket?.stock ?? 0;
  if (reservations.length <= stock) {
    await moveReservationsToCart(prisma, shoppableId, reservations, false);
    return [
      {
        title: "🎉 Du vann lotteriet!",
        message: `Det är dags att ${(reservations[0]?.shoppable.price ?? 1) > 0 ? "köpa" : "skaffa"} ${reservations[0]?.shoppable?.title ?? "det du reserverade"}`,
        memberIds: reservations.map((res) => res.memberId).filter(Boolean),
        type: NotificationType.PURCHASE_TIME_TO_BUY,
        link: "/shop/cart"
      }
    ];
  }
  const shuffledReservations = shuffle(reservations);
  const winners = shuffledReservations.slice(0, stock);
  const losers = shuffledReservations.slice(stock);
  await moveReservationsToCart(prisma, shoppableId, winners, false, false);
  await Promise.all(
    losers.map(
      (r, i) => prisma.consumableReservation.update({
        where: {
          id: r.id
        },
        data: {
          order: i
        }
      })
    )
  );
  const queuedNotifications = [
    {
      title: "🎉🍀 Du vann lotteriet!",
      message: `Det är dags att ${(reservations[0]?.shoppable.price ?? 1) > 0 ? "köpa" : "skaffa"} ${reservations[0]?.shoppable?.title ?? "det du reserverade"}`,
      memberIds: winners.map((res) => res.memberId).filter(Boolean),
      type: NotificationType.PURCHASE_TIME_TO_BUY,
      link: "/shop/cart"
    },
    {
      title: "😕 Du hamnade tyvärr i kö",
      message: `Många reserverade samma sak som du och du hamnade i kö för ${reservations[0]?.shoppable?.title ?? "det du reserverade"}. Du kan se din köplats här.`,
      memberIds: losers.map((res) => res.memberId).filter(Boolean),
      type: NotificationType.PURCHASE_IN_QUEUE,
      link: "/shop/cart"
    }
  ];
  return queuedNotifications;
};
const shuffle = (array) => {
  const copy = [...array];
  let currentIndex = copy.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    --currentIndex;
    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex],
      copy[currentIndex]
    ];
  }
  return copy;
};
const withHandledNotificationQueue = async (queuedNotificationPromise) => {
  const queuedNotifications = await queuedNotificationPromise;
  sendQueuedNotifications(queuedNotifications);
};
const sendQueuedNotifications = async (queuedNotifications) => {
  if (queuedNotifications.length == 0) return;
  const results = await Promise.allSettled(
    queuedNotifications.map(sendNotification)
  );
  if (results.some((result) => result.status === "rejected")) {
    console.error(
      `${results.filter((results2) => results2.status === "rejected")} out of ${results.length} notification send-outs failed`
    );
    throw new Error(`An error was thrown when trying to send notifications.`);
  }
};

export { moveQueueForwardOneStep as a, ensureState as e, moveQueueToCart as m, performLotteryIfNecessary as p, queueNextExpiredConsumablesPruning as q, removeExpiredConsumables as r, sendQueuedNotifications as s, withHandledNotificationQueue as w };
//# sourceMappingURL=reservations-BalPKyhj.js.map
