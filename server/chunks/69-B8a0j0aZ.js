import { r as redirect } from './redirect-A1ZqWr7F.js';
import { l as loadHomeData } from './loadHomeData-CoS3pmTC.js';
import { A as APP_PREFERRED_PAGE_COOKIE } from './types2-CXiSJ5rH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index-BHX467Gw.js';
import './client3-CIDcnctW.js';
import './events-CQw4QAxj.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import './messages-D8OfyZiq.js';
import 'path';
import './articles-Ot_X93Lk.js';

const load = async ({ locals, fetch, cookies }) => {
  if (locals.isApp)
    cookies.set(APP_PREFERRED_PAGE_COOKIE, "dsek", {
      path: "/"
    });
  if (!locals.user?.memberId) {
    redirect(302, "/");
  }
  return await loadHomeData({ locals, fetch });
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 69;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7cgim2zn.js')).default;
const server_id = "src/routes/(app)/home/+page.server.ts";
const imports = ["_app/immutable/nodes/69.BR5iLqZr.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/CodeWithDWWW.CuPXFCIb.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/markdown-to-txt.B8OWY_su.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/DsekLogo.TsFLuWRu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=69-B8a0j0aZ.js.map
