import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const load = async (event) => {
  const { user } = event.locals;
  authorize(apiNames.EMAIL_ALIAS.READ, user);
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-DSZi2gix.js')).default;
const server_id = "src/routes/(app)/admin/email-alias/+layout.server.ts";
const imports = ["_app/immutable/nodes/4.Bv1hflUC.js","_app/immutable/chunks/21.eyQct81Z.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Dzkjwrdq.js.map
