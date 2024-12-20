import { g as getAllEvents } from './getEvents-gKry0X74.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals }) => {
  const { prisma } = locals;
  const [events] = await getAllEvents(prisma);
  return {
    events
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 68;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-DG5hYnZ6.js')).default;
const server_id = "src/routes/(app)/events/tv/+page.server.ts";
const imports = ["_app/immutable/nodes/68.Dt9sThPU.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/InterestedGoingList.DBGhCjvk.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=68-DuXO6eM3.js.map
