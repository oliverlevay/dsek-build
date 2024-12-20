import { N as NOLLNING_TAG_PREFIX, P as POST_REVEAL_PREFIX } from './types2-CXiSJ5rH.js';
import { a as getArticle } from './getArticles-Cz_mQFbE.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized, a as authorize } from './authorization-DvGst16H.js';
import { g as getAllTaggedMembers, c as commentSchema, r as removeCommentSchema, a as commentAction, b as removeCommentAction } from './comments-DaxFEw57.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { aj as news_errors_articleNotFound, ak as news_articleDeleted } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { l as likeSchema, a as likesAction } from './likes-mcpuaRnB.js';
import './articles-Ot_X93Lk.js';
import './member2-BtEDLQG7.js';
import './types3-D4jKTO0f.js';
import './nollning-BGFMzAAg.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './index-CuABlRvJ.js';
import 'isomorphic-dompurify';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './constants-BTUpIS8C.js';
import './member-DajX-teH.js';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const article = await getArticle(prisma, params.slug);
  if (article == void 0) {
    throw error(404, {
      message: news_errors_articleNotFound()
    });
  }
  if (article.tags.some((t) => t.name.startsWith(NOLLNING_TAG_PREFIX))) {
    throw redirect(302, `${POST_REVEAL_PREFIX}/messages`);
  }
  const allTaggedMembers = await getAllTaggedMembers(prisma, article.comments);
  const canEdit = isAuthorized(apiNames.NEWS.MANAGE, user) && isAuthorized(apiNames.NEWS.UPDATE, user) || article.author.memberId === user.memberId;
  const canDelete = isAuthorized(apiNames.NEWS.DELETE, user);
  return {
    article,
    allTaggedMembers,
    canEdit,
    canDelete,
    likeForm: await superValidate(zod(likeSchema)),
    commentForm: await superValidate(zod(commentSchema)),
    removeCommentForm: await superValidate(zod(removeCommentSchema))
  };
};
const actions = {
  like: likesAction(true),
  dislike: likesAction(false),
  comment: commentAction("NEWS"),
  removeComment: removeCommentAction("NEWS"),
  removeArticle: async (event) => {
    const { locals, params } = event;
    const { prisma, user } = locals;
    authorize(apiNames.NEWS.DELETE, user);
    const existingArticle = prisma.article.findUnique({
      where: {
        slug: params.slug
      }
    });
    if (!existingArticle) return error(404, news_errors_articleNotFound());
    await prisma.article.update({
      where: {
        slug: params.slug
      },
      data: {
        removedAt: /* @__PURE__ */ new Date()
      }
    });
    throw redirect(
      "/news",
      {
        message: news_articleDeleted(),
        type: "success"
      },
      event
    );
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 79;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DgIpq3cM.js')).default;
const server_id = "src/routes/(app)/news/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/79.DKHIli1d.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/CommentSection.BdNojWkP.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/MemberSearch.DfsD4fsq.js","_app/immutable/chunks/EntitySearch.C78MTpyq.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/Article.BBb4dy5M.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/MembersList.D_3QXvAN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=79-C64eeiUT.js.map
