import { A as APP_PREFERRED_PAGE_COOKIE } from './types2-CXiSJ5rH.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index-BHX467Gw.js';

const load = async ({ locals, cookies }) => {
  if (!locals.isApp) {
    redirect(302, "/");
  }
  if (cookies.get(APP_PREFERRED_PAGE_COOKIE) === "nollning") {
    return {
      redirect: "/nollning"
    };
  } else
    return {
      redirect: "/app/home"
    };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 133;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cdid1LkK.js')).default;
const server_id = "src/routes/native-app-router/+page.server.ts";
const imports = ["_app/immutable/nodes/133.sOLNrlhz.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/types.CTZXezes.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/index.Cq-ibvhb.js","_app/immutable/chunks/swirl.CmvtxJbZ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=133-D2m020au.js.map
