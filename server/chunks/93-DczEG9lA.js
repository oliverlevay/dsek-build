import { c as countUserShopItems } from './countUserShopItems-CDqHGaTl.js';
import { g as getTickets } from './getTickets-C0TF3G-c.js';
import { t as ticketPageActions } from './actions3-ByPkkF84.js';
import './types4-Dn0vT04J.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './index-BHX467Gw.js';
import 'dayjs';
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

const load = async ({ locals, depends }) => {
  const { user, prisma } = locals;
  depends("tickets");
  const allTickets = await getTickets(prisma, user);
  if (locals.isApp && user.memberId) {
    const shopItemCounts = countUserShopItems(prisma, user);
    return {
      shopItemCounts,
      tickets: allTickets
    };
  }
  return {
    tickets: allTickets
  };
};
const actions = ticketPageActions();

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 93;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-rKt4BdUB.js')).default;
const server_id = "src/routes/(app)/shop/tickets/+page.server.ts";
const imports = ["_app/immutable/nodes/93.bhlescXq.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/await_block.BvqRVjl_.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/ScrollingNumber.DcTi1soJ.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/index.Cq-ibvhb.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/date._flR9ob7.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/NavIcon.DniQ1ciy.js","_app/immutable/chunks/DsekLogo.TsFLuWRu.js","_app/immutable/chunks/Price.D6IsZoPs.js","_app/immutable/chunks/BuyButton.DFME9dQs.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=93-DczEG9lA.js.map
