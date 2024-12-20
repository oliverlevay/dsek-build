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

const load = async ({ locals }) => {
  const { user, isApp } = locals;
  if (isApp) {
    redirect(302, "/app/home");
  }
  if (user?.memberId) {
    redirect(302, "/home");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 29;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CYJbvVE0.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/29.DC9w-IlH.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/client.CS5Heius.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/stores.BdoTh84D.js"];
const stylesheets = ["_app/immutable/assets/29.s_Zz9X40.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=29-ARQiVlBH.js.map
