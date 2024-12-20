import { a as phadderMandateFilter } from './types-jvq07wik.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { e as error } from './index-BHX467Gw.js';

const loadTicketData = async (prisma, user, ticketId) => {
  const ticket = await prisma.ticket.findUnique({
    where: {
      id: ticketId
    },
    include: {
      shoppable: {
        include: {
          questions: true,
          // including questions where removedAt is not null, because we want to show them as well
          consumables: {
            include: {
              member: true,
              questionResponses: true
            }
          },
          reservations: {
            include: {
              member: true
            }
          }
        }
      },
      event: true
    }
  });
  if (!ticket) throw error(404, "Ticket not found");
  if (ticket.shoppable.authorId !== user.memberId) {
    authorize(apiNames.WEBSHOP.MANAGE, user);
  }
  const ticketYear = ticket.event.startDatetime.getFullYear();
  const memberWithPhadderGroups = await prisma.member.findMany({
    where: {
      id: {
        in: ticket.shoppable.consumables.map((c) => c.member?.id).filter(Boolean)
      }
    },
    include: {
      nollaIn: true,
      mandates: {
        where: {
          ...phadderMandateFilter(ticketYear),
          NOT: {
            phadderIn: null
          }
        },
        include: {
          phadderIn: true
        }
      }
    }
  });
  const consumables = ticket.shoppable.consumables.map((c) => {
    const member = memberWithPhadderGroups.find((m) => m.id === c.member?.id);
    const phadderIn = member?.mandates[0]?.phadderIn ?? null;
    const nollaIn = member?.nollaIn?.year === ticketYear ? member.nollaIn : null;
    return {
      ...c,
      member: c.member ? {
        ...c.member,
        phadderGroup: phadderIn ?? nollaIn
      } : c.member
    };
  });
  return {
    consumables,
    ticket
  };
};

export { loadTicketData as l };
//# sourceMappingURL=loadTicketData-BaPG4Us_.js.map
