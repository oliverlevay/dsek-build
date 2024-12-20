import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import { g as generateICS } from './calendar-BEh3uvWG.js';
import dayjs from 'dayjs';
import './types2-CXiSJ5rH.js';
import './index-BHX467Gw.js';
import 'ics';

const GET = async ({ locals, setHeaders }) => {
  const { prisma } = locals;
  const events = await prisma.event.findMany({
    where: {
      ...BASIC_EVENT_FILTER(false),
      startDatetime: {
        gte: dayjs().subtract(1, "month").toDate()
      }
    }
  });
  return generateICS(events, setHeaders);
};

export { GET };
//# sourceMappingURL=_server.ts-BMUvsfm0.js.map
