import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const GET = async () => {
  const currentDate = (/* @__PURE__ */ new Date()).toISOString();
  const alarmActiveEvent = await authorizedPrismaClient.event.findFirst({
    where: {
      alarmActive: true,
      startDatetime: {
        lte: currentDate
      },
      endDatetime: {
        gt: currentDate
      }
    }
  });
  const alarmOn = alarmActiveEvent == null ? "false" : "true";
  return new Response(alarmOn);
};

export { GET };
//# sourceMappingURL=_server.ts-CTLZSjG7.js.map
