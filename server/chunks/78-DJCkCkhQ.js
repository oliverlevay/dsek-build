import { g as getAllArticles } from './getArticles-Cz_mQFbE.js';
import { g as getAllTags } from './tags-SHR1oaXg.js';
import { ag as news_errors_invalidPage } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { l as likeSchema, a as likesAction } from './likes-mcpuaRnB.js';
import './articles-Ot_X93Lk.js';
import './types2-CXiSJ5rH.js';
import './member2-BtEDLQG7.js';
import './types3-D4jKTO0f.js';
import './authorization-DvGst16H.js';
import './nollning-BGFMzAAg.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './runtime-BxW51cRH.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './member-DajX-teH.js';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';

const getAndValidatePage = (url) => {
  const page = url.searchParams.get("page");
  if (page && Number.isNaN(Number.parseInt(page))) {
    error(422, news_errors_invalidPage() + ` "${page}"`);
  }
  return page ? Math.max(Number.parseInt(page) - 1, 0) : void 0;
};
const load = async ({ locals, url }) => {
  const { prisma } = locals;
  const [[articles, pageCount], allTags] = await Promise.all([
    getAllArticles(prisma, {
      tags: url.searchParams.getAll("tags"),
      search: url.searchParams.get("search") ?? void 0,
      page: getAndValidatePage(url)
    }),
    getAllTags(prisma)
  ]);
  return {
    articles,
    pageCount,
    allTags,
    likeForm: await superValidate(zod(likeSchema))
  };
};
const actions = {
  like: likesAction(true),
  dislike: likesAction(false)
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 78;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CJG3IEHx.js')).default;
const server_id = "src/routes/(app)/news/+page.server.ts";
const imports = ["_app/immutable/nodes/78.DChAuGij.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/SearchBar.D5otZFyl.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/TagSelector.BFldg1VB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/markdown-to-txt.B8OWY_su.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=78-DJCkCkhQ.js.map
