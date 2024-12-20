import { g as getAllArticles } from './getArticles-Cz_mQFbE.js';
import './articles-Ot_X93Lk.js';
import './types2-CXiSJ5rH.js';
import './member2-BtEDLQG7.js';
import './types3-D4jKTO0f.js';
import './index-BHX467Gw.js';
import './authorization-DvGst16H.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './nollning-BGFMzAAg.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const { prisma } = locals;
  const [articles] = await getAllArticles(prisma);
  return {
    articles
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 83;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@.svelte-DBAWoUK6.js')).default;
const server_id = "src/routes/(app)/news/tv/+page.server.ts";
const imports = ["_app/immutable/nodes/83.DnIqK-YZ.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=83-CZKRvyHD.js.map
