import { d as dbIdentification } from './types4-Dn0vT04J.js';
import { a_ as inventory_errors_unauthorized, a$ as errors_notImplemented, b0 as inventory_errors_consumableNotFound } from './messages-D8OfyZiq.js';
import { ShoppableType } from '@prisma/client';
import { e as error } from './index-BHX467Gw.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';

const inventoryLoadFunction = async ({
  locals,
  depends
}) => {
  const { prisma, user } = locals;
  const { memberId, externalCode } = user ?? {};
  if (!memberId && !externalCode) {
    error(401, inventory_errors_unauthorized());
  }
  depends("consumables");
  const userId = dbIdentification(
    memberId ? {
      memberId
    } : {
      externalCode
    }
  );
  const consumables = await prisma.consumable.findMany({
    where: {
      ...userId,
      purchasedAt: {
        not: null,
        lte: /* @__PURE__ */ new Date()
      }
    },
    orderBy: {
      purchasedAt: "desc"
    },
    include: {
      shoppable: {
        include: {
          ticket: {
            include: { event: true }
          }
        }
      }
    }
  });
  if (!memberId && consumables) {
    throw error(403, inventory_errors_unauthorized());
  }
  authorize(apiNames.WEBSHOP.PURCHASE, user);
  const consumablesWithMoreInfo = consumables.map(
    (consumable) => {
      if (consumable.shoppable.type !== ShoppableType.TICKET) {
        throw new Error(errors_notImplemented());
      }
      return {
        ...consumable,
        shoppable: {
          ...consumable.shoppable,
          ...consumable.shoppable.ticket,
          event: consumable.shoppable.ticket.event
        }
      };
    }
  );
  return {
    consumables: consumablesWithMoreInfo
  };
};
const inventoryItemLoadFunction = async ({
  locals,
  depends,
  params
}) => {
  const { prisma, user } = locals;
  const { memberId, externalCode } = user ?? {};
  if (!memberId && !externalCode) {
    error(401, inventory_errors_unauthorized());
  }
  const userId = dbIdentification(
    memberId ? {
      memberId
    } : {
      externalCode
    }
  );
  depends("consumables");
  const consumable = await prisma.consumable.findUnique({
    where: {
      ...userId,
      id: params.id,
      purchasedAt: {
        not: null,
        lte: /* @__PURE__ */ new Date()
      }
    },
    include: {
      questionResponses: {
        include: {
          question: true
        }
      },
      shoppable: {
        include: {
          ticket: {
            include: { event: true }
          }
        }
      }
    }
  });
  if (!consumable) {
    error(404, inventory_errors_consumableNotFound());
  }
  return {
    consumable: {
      ...consumable,
      shoppable: {
        ...consumable.shoppable,
        ...consumable.shoppable.ticket,
        event: consumable.shoppable.ticket.event
      }
    }
  };
};

export { inventoryItemLoadFunction as a, inventoryLoadFunction as i };
//# sourceMappingURL=getInventory-C7bbrBql.js.map
