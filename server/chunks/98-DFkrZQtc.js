import { g as getTickets } from './getTickets-C0TF3G-c.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './index-BHX467Gw.js';
import 'dayjs';
import './types4-Dn0vT04J.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals }) => {
  const { user, prisma } = locals;
  authorize(apiNames.WEBSHOP.MANAGE, user);
  const allTickets = await getTickets(prisma, user, true);
  return {
    tickets: allTickets
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 98;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CahWRiws.js')).default;
const server_id = "src/routes/(app)/shop/tickets/manage/+page.server.ts";
const imports = ["_app/immutable/nodes/98.JX-Jo0Y_.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=98-DFkrZQtc.js.map
