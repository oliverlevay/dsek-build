import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import { e as error } from './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { G as GRACE_PERIOD_WINDOW, d as dbIdentification } from './types4-Dn0vT04J.js';

const ticketIncludedFields = (id) => ({
  shoppable: {
    include: {
      // Get the user's consumables and reservations for this ticket
      consumables: {
        where: {
          ...id,
          OR: [
            { purchasedAt: { not: null } },
            { expiresAt: { gt: /* @__PURE__ */ new Date() } },
            { expiresAt: null }
          ]
        }
      },
      reservations: { where: { ...id } },
      _count: {
        select: {
          // Number of bought tickets
          consumables: {
            where: { purchasedAt: { not: null } }
          },
          reservations: {
            where: { order: { not: null } }
          }
        }
      }
    }
  },
  event: { include: { tags: true } }
});
const formatTicket = (ticket) => {
  const base = {
    ...ticket.shoppable,
    ...ticket,
    userItemsInCart: ticket.shoppable.consumables.filter((c) => !c.purchasedAt),
    userReservations: ticket.shoppable.reservations,
    gracePeriodEndsAt: new Date(
      ticket.shoppable.availableFrom.valueOf() + GRACE_PERIOD_WINDOW
    ),
    isInUsersCart: ticket.shoppable.consumables.filter((c) => !c.purchasedAt).length > 0 || ticket.shoppable.reservations.length > 0,
    userAlreadyHasMax: ticket.shoppable.consumables.filter((c) => c.purchasedAt !== null).length >= ticket.maxAmountPerUser,
    ticketsLeft: Math.min(
      ticket.stock - ticket.shoppable._count.consumables,
      10
    ),
    // don't show more resolution to the client than > 10 or the exact number left (so people can't see how many other people buy tickets)
    hasQueue: ticket.shoppable._count.reservations > 0
  };
  delete base.consumables;
  delete base.reservations;
  delete base.shoppable;
  delete base._count;
  return base;
};
const shoppableAccessPolicyFilter = (userRoles, studentId) => ({
  OR: [
    {
      accessPolicies: { none: {} }
      // no access policies exist
    },
    {
      accessPolicies: {
        some: studentId ? {
          OR: [{ role: { in: userRoles } }, { studentId }]
        } : { role: { in: userRoles } }
      }
    }
  ]
});
const getTicket = async (prisma, id, user) => {
  const { memberId, externalCode } = user ?? {};
  if (!memberId && !externalCode) throw error(401);
  const identification = memberId ? {
    memberId
  } : {
    externalCode
  };
  const dbId = dbIdentification(identification);
  const ticket = await prisma.ticket.findFirst({
    where: {
      id,
      shoppable: { ...shoppableAccessPolicyFilter(user.roles, user.studentId) }
    },
    include: ticketIncludedFields(dbId)
  });
  if (!ticket) {
    return null;
  }
  return formatTicket(ticket);
};
const getTickets = async (prisma, user, getAll = false) => {
  const { memberId, externalCode } = user ?? {};
  if (!memberId && !externalCode) throw error(401);
  const identification = memberId ? {
    memberId
  } : {
    externalCode
  };
  const dbId = dbIdentification(identification);
  const tenDaysAgo = dayjs().subtract(10, "days").toDate();
  const tickets = await prisma.ticket.findMany({
    where: getAll ? void 0 : {
      shoppable: {
        AND: [
          { OR: [{ removedAt: null }, { removedAt: { lt: /* @__PURE__ */ new Date() } }] },
          {
            // show items which were available in the last 10 days
            OR: [
              { availableTo: null },
              { availableTo: { gt: tenDaysAgo } }
            ]
          }
        ],
        ...shoppableAccessPolicyFilter(user.roles, user.studentId)
      }
    },
    include: ticketIncludedFields(dbId),
    orderBy: {
      shoppable: { availableFrom: getAll ? "desc" : "asc" }
    }
  });
  return tickets.map(formatTicket);
};
const getEventsWithTickets = async (prisma, user, filters = {}, nollningMode = false) => {
  const { memberId, externalCode } = user ?? {};
  if (!memberId && !externalCode) throw error(401);
  const identification = memberId ? {
    memberId
  } : {
    externalCode
  };
  const dbId = dbIdentification(identification);
  const events = await prisma.event.findMany({
    where: {
      ...BASIC_EVENT_FILTER(nollningMode),
      ...filters
    },
    orderBy: {
      startDatetime: "asc"
    },
    include: {
      tickets: {
        where: {
          shoppable: {
            ...shoppableAccessPolicyFilter(user.roles, user.studentId)
          }
        },
        include: {
          ...ticketIncludedFields(dbId),
          event: false
        }
      },
      tags: true
    }
  });
  return events.map((event) => ({
    ...event,
    tickets: event.tickets.map((ticket) => {
      const { tickets: _, ...eventData } = event;
      return formatTicket({
        ...ticket,
        event: eventData
      });
    })
  }));
};

export { getTicket as a, getEventsWithTickets as b, getTickets as g };
//# sourceMappingURL=getTickets-C0TF3G-c.js.map
