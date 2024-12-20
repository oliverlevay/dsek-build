import { e as error } from './index-BHX467Gw.js';
import { a as getTicket } from './getTickets-C0TF3G-c.js';
import { aX as tickets_errors_ticketNotFound } from './messages-D8OfyZiq.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import 'dayjs';
import './types4-Dn0vT04J.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals, params, depends }) => {
  const { prisma, user } = locals;
  depends("tickets");
  const ticket = await getTicket(prisma, params.slug, user);
  if (!ticket) error(404, tickets_errors_ticketNotFound());
  return { ticket };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 94;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@(app).svelte-BGoBV1LN.js')).default;
const server_id = "src/routes/(app)/shop/tickets/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/94.BknCntMn.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/BuyButton.DFME9dQs.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/ScrollingNumber.DcTi1soJ.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/index.Cq-ibvhb.js","_app/immutable/chunks/date._flR9ob7.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/Price.D6IsZoPs.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=94-D2lo2b84.js.map
