import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';

const NOLLNING_START_KEY = "nollning_start";
const NOLLNING_END_KEY = "nollning_end";
let cache = null;
const CACHE_TIME = 3600 * 1e3;
const isNollningPeriod = async () => {
  const now = /* @__PURE__ */ new Date();
  if (cache !== null && cache.lastFetched.valueOf() + CACHE_TIME > now.valueOf())
    return cache.value;
  const rows = await authorizedPrismaClient.adminSetting.findMany({
    where: {
      OR: [
        {
          key: NOLLNING_START_KEY
        },
        {
          key: NOLLNING_END_KEY
        }
      ]
    }
  });
  const startStr = rows.find((row) => row.key === NOLLNING_START_KEY)?.value;
  const endStr = rows.find((row) => row.key === NOLLNING_END_KEY)?.value;
  if (!startStr || !endStr) return false;
  const start = new Date(startStr);
  const end = new Date(endStr);
  const isNollningPeriod2 = start < now && now < end;
  cache = {
    value: isNollningPeriod2,
    lastFetched: now
  };
  return isNollningPeriod2;
};
const updateNollningPeriod = async (prisma, start, end) => {
  await prisma.adminSetting.upsert({
    where: {
      key: NOLLNING_START_KEY
    },
    update: {
      value: start.toISOString()
    },
    create: {
      key: NOLLNING_START_KEY,
      value: start.toISOString()
    }
  });
  await prisma.adminSetting.upsert({
    where: {
      key: NOLLNING_END_KEY
    },
    update: {
      value: end.toISOString()
    },
    create: {
      key: NOLLNING_END_KEY,
      value: end.toISOString()
    }
  });
  const now = /* @__PURE__ */ new Date();
  const isNollningPeriod2 = start < now && now < end;
  cache = {
    value: isNollningPeriod2,
    lastFetched: now
  };
};

export { NOLLNING_START_KEY as N, NOLLNING_END_KEY as a, isNollningPeriod as i, updateNollningPeriod as u };
//# sourceMappingURL=nollning-BGFMzAAg.js.map
