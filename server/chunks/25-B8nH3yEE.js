import { A as APP_PREFERRED_PAGE_COOKIE, P as POST_REVEAL_PREFIX, R as REVEAL_LAUNCH_DATE } from './types2-CXiSJ5rH.js';
import { g as groupNotifications } from './group-B2hVm-1l.js';
import { S as SUBSCRIPTION_SETTINGS_MAP, N as NotificationSettingType, a as NotificationType } from './types3-D4jKTO0f.js';
import { n as notificationSchema } from './schemas-CKip5ia7.js';
import './client-yexbOeKf.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import './member-DajX-teH.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './exports-BGi7-Rnc.js';
import './constants-BTUpIS8C.js';
import './index2-Bcb5RUHj.js';
import './lifecycle-DkuQBIPN.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const getNollaNotifications = (user, prisma) => {
  return prisma.notification.findMany({
    where: {
      createdAt: {
        gt: /* @__PURE__ */ new Date("2024-06-26T00:00:00")
      },
      memberId: user.memberId,
      OR: [
        {
          type: {
            in: SUBSCRIPTION_SETTINGS_MAP[NotificationSettingType.PURCHASES]
          }
        },
        {
          type: NotificationType.NEW_ARTICLE
        },
        {
          link: {
            startsWith: POST_REVEAL_PREFIX
          }
        }
      ]
    },
    orderBy: {
      createdAt: "desc"
      // latest first
    },
    include: {
      fromAuthor: {
        include: {
          member: true,
          mandate: {
            include: {
              position: true
            }
          },
          customAuthor: true
        }
      }
    }
  });
};
const getNollaGroupedNotifications = async (user, prisma) => {
  const myNotifications = await getNollaNotifications(user, prisma);
  return groupNotifications(myNotifications);
};
const afterNollning = /* @__PURE__ */ new Date("2024-10-06");
const load = async ({ locals, cookies }) => {
  const { prisma, user, member } = locals;
  const revealTheme = REVEAL_LAUNCH_DATE <= /* @__PURE__ */ new Date();
  const notificationsPromise = getNollaGroupedNotifications(user, prisma);
  const phadderGroup = member?.classYear == (/* @__PURE__ */ new Date()).getFullYear() && member.nollningGroupId !== null ? prisma.phadderGroup.findUnique({
    where: {
      id: member.nollningGroupId
    },
    select: {
      name: true
    }
  }) : null;
  if (locals.isApp)
    cookies.set(APP_PREFERRED_PAGE_COOKIE, "nollning", {
      path: "/",
      expires: afterNollning
    });
  return {
    revealTheme,
    notificationsPromise,
    mutateNotificationForm: await superValidate(zod(notificationSchema)),
    paths: {
      cart: `${POST_REVEAL_PREFIX}/shop/cart`,
      purchaseRedirect: `${POST_REVEAL_PREFIX}/shop/success`
    },
    phadderGroup,
    theme: revealTheme ? "nollningPostReveal" : "light"
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 25;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-iB5ZUGjv.js')).default;
const server_id = "src/routes/(nollning)/nollning/+layout.server.ts";
const imports = ["_app/immutable/nodes/25.DrUltpLo.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/await_block.BvqRVjl_.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/swirl.CmvtxJbZ.js","_app/immutable/chunks/AppNotificationTokenHandler.DYcE9Og4.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/types.CTZXezes.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/index.Cq-ibvhb.js","_app/immutable/chunks/sv.fgqH_iRr.js","_app/immutable/chunks/Toast.CJbfszJC.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/NavIcon.DniQ1ciy.js","_app/immutable/chunks/DsekLogo.TsFLuWRu.js","_app/immutable/chunks/client.CS5Heius.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/LanguageSwitcher.CExkJGNV.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = ["_app/immutable/assets/25.DNykHOw3.css"];
const fonts = ["_app/immutable/assets/lexend-latin-400-normal.4kmgQazr.woff2","_app/immutable/assets/lexend-latin-500-normal.DSkSKZSA.woff2","_app/immutable/assets/lexend-vietnamese-400-normal.D27_0_wW.woff2","_app/immutable/assets/lexend-vietnamese-400-normal.LQ1gdlNa.woff","_app/immutable/assets/lexend-latin-ext-400-normal.DXn4uafk.woff2","_app/immutable/assets/lexend-latin-ext-400-normal.D2fvEnUG.woff","_app/immutable/assets/lexend-latin-400-normal.DebDW8YA.woff","_app/immutable/assets/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2","_app/immutable/assets/inter-cyrillic-wght-normal.CMZtQduZ.woff2","_app/immutable/assets/inter-greek-ext-wght-normal.CGAr0uHJ.woff2","_app/immutable/assets/inter-greek-wght-normal.CaVNZxsx.woff2","_app/immutable/assets/inter-vietnamese-wght-normal.CBcvBZtf.woff2","_app/immutable/assets/inter-latin-ext-wght-normal.CFHvXkgd.woff2","_app/immutable/assets/inter-latin-wght-normal.C2S99t-D.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-100-normal.CA8l4_DY.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-100-normal.CZrxNwtD.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-100-normal.Dwm9A50R.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-100-normal.G8ygyWpG.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-100-normal.TPsdIGmy.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-100-normal.CWHUvCJ4.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-100-normal.zsXZhFx5.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-100-normal.DP6ljJip.woff","_app/immutable/assets/ibm-plex-mono-latin-100-normal.C44viotf.woff2","_app/immutable/assets/ibm-plex-mono-latin-100-normal.BEFv3vkB.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-200-normal.Id4xB3PX.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-200-normal.fS2DuCbY.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-200-normal.Sn3FdeuN.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-200-normal.DiQC_le2.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-200-normal.dgU5uQqt.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-200-normal.CHb1O_5M.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-200-normal.Bwkz-wRb.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-200-normal.DnneZ839.woff","_app/immutable/assets/ibm-plex-mono-latin-200-normal.Dt5WU_3X.woff2","_app/immutable/assets/ibm-plex-mono-latin-200-normal.BYYb3nFS.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-300-normal.GtJbCdTk.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-300-normal.CZyJ27Jz.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-300-normal.CT5Izk4y.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-300-normal.Bfh9D4sz.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-300-normal.CNyj_Jtm.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-300-normal.CiBJb43l.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-300-normal.DIaTEU43.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-300-normal.DmpYf9Nx.woff","_app/immutable/assets/ibm-plex-mono-latin-300-normal.DlSp0cKi.woff2","_app/immutable/assets/ibm-plex-mono-latin-300-normal.CCCKvP56.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-400-normal.B3hZxag_.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-400-normal.ZyMXPjaT.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-400-normal.DvQQgHTq.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-400-normal.CJUKFyLa.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-400-normal.BFiUPp6R.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-400-normal.DLynVohM.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-400-normal.DxDDqVQb.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-400-normal.uwM7KshN.woff","_app/immutable/assets/ibm-plex-mono-latin-400-normal.Dm_PoFIZ.woff2","_app/immutable/assets/ibm-plex-mono-latin-400-normal.O6-GRVqx.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-500-normal.CmcxpzmF.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-500-normal.yqk7_qG0.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-500-normal.BtGHVI3Q.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-500-normal.N1TV9ACq.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-500-normal.CevHOlzG.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-500-normal.QhwQXayn.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-500-normal.Dn-cqWhb.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-500-normal.BhDX_RLI.woff","_app/immutable/assets/ibm-plex-mono-latin-500-normal.C_OblDzq.woff2","_app/immutable/assets/ibm-plex-mono-latin-500-normal.zoSM89R3.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-600-normal.6-AWF9yE.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-600-normal.BZFL66GJ.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-600-normal.DqTcxLwU.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-600-normal.C8N-B5AP.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-600-normal.D7hk9wLv.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-600-normal.BifMsNUA.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-600-normal.5raxGPWx.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-600-normal.C5zKQMXr.woff","_app/immutable/assets/ibm-plex-mono-latin-600-normal.rgB1DpUr.woff2","_app/immutable/assets/ibm-plex-mono-latin-600-normal.DeXYNBV7.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-700-normal.CcGNpAf3.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-ext-700-normal.zA2EAszW.woff","_app/immutable/assets/ibm-plex-mono-cyrillic-700-normal.p0--0TT5.woff2","_app/immutable/assets/ibm-plex-mono-cyrillic-700-normal.XGhtXPWC.woff","_app/immutable/assets/ibm-plex-mono-vietnamese-700-normal.D7b4BDym.woff2","_app/immutable/assets/ibm-plex-mono-vietnamese-700-normal.bCyYmTho.woff","_app/immutable/assets/ibm-plex-mono-latin-ext-700-normal.ChDdxD0n.woff2","_app/immutable/assets/ibm-plex-mono-latin-ext-700-normal.DCf1kqJT.woff","_app/immutable/assets/ibm-plex-mono-latin-700-normal.QW6cfU13.woff2","_app/immutable/assets/ibm-plex-mono-latin-700-normal.DP9fNao9.woff","_app/immutable/assets/lexend-vietnamese-100-normal.BqZWvwwK.woff2","_app/immutable/assets/lexend-vietnamese-100-normal.DAw8r1NF.woff","_app/immutable/assets/lexend-latin-ext-100-normal.Cjn_TGIj.woff2","_app/immutable/assets/lexend-latin-ext-100-normal.76f_2z0T.woff","_app/immutable/assets/lexend-latin-100-normal.BxLxrCaT.woff2","_app/immutable/assets/lexend-latin-100-normal.C2u-c6Pw.woff","_app/immutable/assets/lexend-vietnamese-200-normal.CjUJYBxe.woff2","_app/immutable/assets/lexend-vietnamese-200-normal.DxC1dVcj.woff","_app/immutable/assets/lexend-latin-ext-200-normal.ChfgP1FW.woff2","_app/immutable/assets/lexend-latin-ext-200-normal.DupUxAgV.woff","_app/immutable/assets/lexend-latin-200-normal.CKXTz4P1.woff2","_app/immutable/assets/lexend-latin-200-normal.DtC66k6Q.woff","_app/immutable/assets/lexend-vietnamese-300-normal.CINyBqF3.woff2","_app/immutable/assets/lexend-vietnamese-300-normal.BWt_TNmT.woff","_app/immutable/assets/lexend-latin-ext-300-normal.CkKZHy9c.woff2","_app/immutable/assets/lexend-latin-ext-300-normal.BRghtAGK.woff","_app/immutable/assets/lexend-latin-300-normal.Bn3bpOZh.woff2","_app/immutable/assets/lexend-latin-300-normal.BKEE2nvK.woff","_app/immutable/assets/lexend-vietnamese-500-normal.Cx1i3XuY.woff2","_app/immutable/assets/lexend-vietnamese-500-normal.Fe17dedB.woff","_app/immutable/assets/lexend-latin-ext-500-normal.CCGaje5d.woff2","_app/immutable/assets/lexend-latin-ext-500-normal.D-IDCW8u.woff","_app/immutable/assets/lexend-latin-500-normal.C_7-3_qV.woff","_app/immutable/assets/lexend-vietnamese-600-normal.P4SI54vy.woff2","_app/immutable/assets/lexend-vietnamese-600-normal.CBuaYXBD.woff","_app/immutable/assets/lexend-latin-ext-600-normal.DEMoRSNc.woff2","_app/immutable/assets/lexend-latin-ext-600-normal.DM57vCC7.woff","_app/immutable/assets/lexend-latin-600-normal.CnenkszJ.woff2","_app/immutable/assets/lexend-latin-600-normal.BvcJOWMa.woff","_app/immutable/assets/lexend-vietnamese-700-normal.28v6onDd.woff2","_app/immutable/assets/lexend-vietnamese-700-normal.DJTHOEI9.woff","_app/immutable/assets/lexend-latin-ext-700-normal.BqyU7xwf.woff2","_app/immutable/assets/lexend-latin-ext-700-normal.DXss2uQ9.woff","_app/immutable/assets/lexend-latin-700-normal.zYJ_wVsA.woff2","_app/immutable/assets/lexend-latin-700-normal.CZ8FNhmg.woff","_app/immutable/assets/lexend-vietnamese-800-normal.Cb6UYy43.woff2","_app/immutable/assets/lexend-vietnamese-800-normal.DwHZC9H0.woff","_app/immutable/assets/lexend-latin-ext-800-normal._m-ZnrYv.woff2","_app/immutable/assets/lexend-latin-ext-800-normal.BLnlwO7T.woff","_app/immutable/assets/lexend-latin-800-normal.CnQOEYd9.woff2","_app/immutable/assets/lexend-latin-800-normal.BZxMUkZj.woff","_app/immutable/assets/lexend-vietnamese-900-normal.CILANjSz.woff2","_app/immutable/assets/lexend-vietnamese-900-normal.BJVBnXJk.woff","_app/immutable/assets/lexend-latin-ext-900-normal.DTpQo6fy.woff2","_app/immutable/assets/lexend-latin-ext-900-normal.Bh-0DoX9.woff","_app/immutable/assets/lexend-latin-900-normal.Cgg66nZ5.woff2","_app/immutable/assets/lexend-latin-900-normal.-5BWHPOM.woff"];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=25-B8nH3yEE.js.map
