import { d as dbIdentification } from './types4-Dn0vT04J.js';

const countUserShopItems = (prisma, user) => {
  if (!user) return;
  if (!user.memberId && !user.externalCode) return;
  const identification = dbIdentification(
    user.memberId ? { memberId: user.memberId } : { externalCode: user.externalCode }
  );
  const unconsumed = prisma.consumable.count({
    where: {
      purchasedAt: { not: null },
      consumedAt: null,
      ...identification
    }
  });
  const inCart = prisma.consumable.count({
    where: {
      purchasedAt: null,
      OR: [{ expiresAt: null }, { expiresAt: { gt: /* @__PURE__ */ new Date() } }],
      ...identification
    }
  });
  const reserved = prisma.consumableReservation.count({
    where: {
      ...identification
    }
  });
  return {
    unconsumed,
    inCart,
    reserved
  };
};

export { countUserShopItems as c };
//# sourceMappingURL=countUserShopItems-CDqHGaTl.js.map
