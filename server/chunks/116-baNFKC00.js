import { b as getEventsWithTickets } from './getTickets-C0TF3G-c.js';
import { t as ticketPageActions } from './actions3-ByPkkF84.js';
import { e as error } from './index-BHX467Gw.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import 'dayjs';
import './types4-Dn0vT04J.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './reservations-BalPKyhj.js';
import './stripeWebhooks-CY0PR9jX.js';
import 'stripe';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';
import './shared-server-BfUoNEXY.js';
import 'console';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import './redirect-A1ZqWr7F.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './server-DiSvHEoN.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const weekStarts = [
  "2024-08-26",
  "2024-09-02",
  "2024-09-09",
  "2024-09-16",
  "2024-09-23",
  "2024-09-30"
];
const getWeekInterval = (week) => {
  const weekStart = new Date(weekStarts[week]);
  const weekEnd = new Date(weekStart.valueOf() + 7 * 24 * 60 * 60 * 1e3);
  return { weekStart, weekEnd };
};
const getCurrentWeek = () => {
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < weekStarts.length; i++) {
    const { weekStart, weekEnd } = getWeekInterval(i);
    if (now >= weekStart && now < weekEnd) {
      return i;
    }
  }
  return 0;
};
const load = async ({ locals, url, depends, parent }) => {
  const { prisma } = locals;
  const { revealTheme } = await parent();
  const week = Number.parseInt(
    url.searchParams.get("week") ?? getCurrentWeek().toString()
  );
  if (Number.isNaN(week) || week < 0 || week >= weekStarts.length) {
    return error(400, "Invalid week parameter");
  }
  const { weekStart, weekEnd } = getWeekInterval(week);
  depends("tickets");
  const events = await getEventsWithTickets(
    prisma,
    locals.user,
    {
      startDatetime: {
        gte: weekStart
      },
      endDatetime: {
        lte: weekEnd
      }
    },
    revealTheme
  );
  return {
    week,
    events,
    weeks: weekStarts.length
  };
};
const actions = ticketPageActions("shop/");

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 116;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CGVpmORM.js')).default;
const server_id = "src/routes/(nollning)/nollning/events/+page.server.ts";
const imports = ["_app/immutable/nodes/116.Bo-FV5BO.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/types.CTZXezes.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=116-baNFKC00.js.map
