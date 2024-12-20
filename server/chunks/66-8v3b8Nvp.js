import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import dayjs from 'dayjs';
import './types2-CXiSJ5rH.js';

const include = {
  author: true,
  comments: {
    include: {
      member: true
    }
  },
  going: true,
  interested: true,
  tags: true
};
const load = async ({ locals, url }) => {
  const { prisma } = locals;
  const view = "month";
  const startDateParam = url.searchParams.get("startDate");
  const endDateParam = url.searchParams.get("endDate");
  const firstDate = startDateParam ? dayjs(startDateParam) : dayjs().startOf(view).subtract(1, "week");
  const lastDate = endDateParam ? dayjs(endDateParam) : dayjs().endOf(view).add(1, "week");
  const events = await prisma.event.findMany({
    where: {
      AND: [
        BASIC_EVENT_FILTER(),
        {
          // capture all events which overlap the range firstDate-lastDate
          OR: [
            {
              startDatetime: {
                gte: firstDate.toDate(),
                lte: lastDate.toDate()
              }
            },
            {
              endDatetime: {
                gte: firstDate.toDate(),
                lte: lastDate.toDate()
              }
            }
          ]
        }
      ]
    },
    include
  });
  return {
    events
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 66;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-EuSvMSwY.js')).default;
const server_id = "src/routes/(app)/events/calendar/+page.server.ts";
const imports = ["_app/immutable/nodes/66.BG4RAqhU.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = ["_app/immutable/assets/66.B3XznNI6.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=66-8v3b8Nvp.js.map
