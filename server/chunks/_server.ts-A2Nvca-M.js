import { R as REVEAL_LAUNCH_DATE } from './types2-CXiSJ5rH.js';
import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import { g as generateICS } from './calendar-BEh3uvWG.js';
import dayjs from 'dayjs';
import './index-BHX467Gw.js';
import 'ics';

const GET = async ({ locals, setHeaders }) => {
  const { prisma } = locals;
  const revealTheme = REVEAL_LAUNCH_DATE <= /* @__PURE__ */ new Date();
  const events = await prisma.event.findMany({
    where: {
      ...BASIC_EVENT_FILTER(revealTheme),
      startDatetime: {
        gte: dayjs().subtract(1, "month").toDate()
      },
      endDatetime: {
        lte: dayjs().add(3, "months").toDate()
      }
    }
  });
  return generateICS(events, setHeaders);
};

export { GET };
//# sourceMappingURL=_server.ts-A2Nvca-M.js.map
