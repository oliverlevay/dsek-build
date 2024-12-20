import { c as countUserShopItems } from './countUserShopItems-CDqHGaTl.js';
import { g as getMyGroupedNotifications } from './myNotifications-BdfeI9d5.js';
import { n as notificationSchema, e as emptySchema } from './schemas-CKip5ia7.js';
import { l as loadFlash } from './server-DiSvHEoN.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import './index-BHX467Gw.js';
import './types4-Dn0vT04J.js';
import './group-B2hVm-1l.js';
import './member-DajX-teH.js';
import './types3-D4jKTO0f.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './constants-BTUpIS8C.js';

const CACHE_TTL = 10 * 60 * 1e3;
const alertsCache = {
  alerts: [],
  lastUpdated: null
};
const hasCacheExpired = (cache) => !cache.lastUpdated || // no cache
Date.now() - cache.lastUpdated > CACHE_TTL;
const load = loadFlash(async ({ locals, depends }) => {
  const { user, prisma } = locals;
  depends("/api/notifications/my");
  const notificationsPromise = user?.memberId ? getMyGroupedNotifications(user, prisma) : null;
  depends("cart");
  const shopItemCounts = countUserShopItems(prisma, user);
  if (hasCacheExpired(alertsCache)) {
    alertsCache.alerts = await prisma.alert.findMany({
      where: {
        removedAt: null
      }
    });
    alertsCache.lastUpdated = Date.now();
  }
  return {
    alerts: alertsCache.alerts,
    notificationsPromise,
    mutateNotificationForm: await superValidate(zod(notificationSchema)),
    readNotificationForm: await superValidate(zod(emptySchema)),
    shopItemCounts
  };
});

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-DooLsfOA.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.COV9zNJK.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/await_block.BvqRVjl_.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/sv.fgqH_iRr.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/NavIcon.DniQ1ciy.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/DsekLogo.TsFLuWRu.js","_app/immutable/chunks/routes.B1IzHJmy.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/AppNotificationTokenHandler.DYcE9Og4.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/types.CTZXezes.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/index.Cq-ibvhb.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/client.CS5Heius.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/DarkLightToggle.DKWD6XPV.js","_app/immutable/chunks/LanguageSwitcher.CExkJGNV.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/Toast.CJbfszJC.js"];
const stylesheets = ["_app/immutable/assets/2.BuogqLRR.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-CMxdyQ8E.js.map
