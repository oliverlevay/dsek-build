import { A as APP_PREFERRED_PAGE_COOKIE } from './types2-CXiSJ5rH.js';
import { l as loadHomeData } from './loadHomeData-CoS3pmTC.js';
import './client3-CIDcnctW.js';
import './events-CQw4QAxj.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import 'path';
import './articles-Ot_X93Lk.js';

const load = async ({ locals, fetch, cookies }) => {
  if (locals.isApp)
    cookies.set(APP_PREFERRED_PAGE_COOKIE, "dsek", {
      path: "/"
    });
  return await loadHomeData({ locals, fetch });
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 42;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BPZTWJA_.js')).default;
const server_id = "src/routes/(app)/app/home/+page.server.ts";
const imports = ["_app/immutable/nodes/42.CcB2LFz3.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/CodeWithDWWW.CuPXFCIb.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/markdown-to-txt.B8OWY_su.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/NavIcon.DniQ1ciy.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/DsekLogo.TsFLuWRu.js","_app/immutable/chunks/routes.B1IzHJmy.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/apiNames.G3FqMHey.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=42-FAdcHyfl.js.map
