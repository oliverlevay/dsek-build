import { b as getArticleAuthorOptions } from './getArticles-Cz_mQFbE.js';
import { c as createSchema, b as createArticle } from './actions2-BSfd5e_B.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { ao as news_errors_memberNotFound } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { g as getAllTags } from './tags-SHR1oaXg.js';
import './articles-Ot_X93Lk.js';
import './types2-CXiSJ5rH.js';
import './member2-BtEDLQG7.js';
import './types3-D4jKTO0f.js';
import './nollning-BGFMzAAg.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './client3-CIDcnctW.js';
import './uploadFiles-C03MzR76.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import 'path';
import 'sharp';
import './utils2-CdAbGRJv.js';
import './schemas-CKip5ia7.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';
import './redirect-A1ZqWr7F.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './slugify-DXeN2Lma.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import 'isomorphic-dompurify';
import 'markdown-to-txt';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.NEWS.CREATE, user);
  const allTags = await getAllTags(prisma, true);
  const currentMemberWithMandates = await prisma.member.findUnique({
    where: {
      studentId: user?.studentId
    },
    include: {
      mandates: {
        where: {
          startDate: {
            lte: /* @__PURE__ */ new Date()
          },
          endDate: {
            gte: /* @__PURE__ */ new Date()
          }
        },
        include: {
          position: true
        }
      }
    }
  });
  if (!currentMemberWithMandates)
    throw error(500, news_errors_memberNotFound());
  const authorOptions = await getArticleAuthorOptions(
    prisma,
    currentMemberWithMandates
  );
  return {
    allTags,
    authorOptions,
    form: await superValidate(
      {
        sendNotification: true,
        author: authorOptions[0]
      },
      zod(createSchema),
      {
        errors: false
      }
    )
  };
};
const actions = {
  default: createArticle
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 81;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@(app).svelte-DFDE7AU3.js')).default;
const server_id = "src/routes/(app)/news/create/+page.server.ts";
const imports = ["_app/immutable/nodes/81.CWD8lvWw.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/FormCheckbox.BoNvyo-t.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/FormInput.DvRHd4up.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/ArticleEditor.8bem2mp5.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/Article.BBb4dy5M.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/FormFileInput.mN0v36sS.js","_app/immutable/chunks/LangTabs.D_AYhfI9.js","_app/immutable/chunks/FormSubmitButton.zmtSKK1O.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/TagSelector.BFldg1VB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=81-DaApW_FU.js.map
