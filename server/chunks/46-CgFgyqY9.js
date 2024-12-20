import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { b as getUpcomingBookingRequests, c as actions } from './utils3-fgvf9FPc.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './index3-CPnAgoK8.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';
import 'dayjs';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './schema2-6iq8K_hf.js';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.BOOKINGS.UPDATE, user);
  const bookingRequests = await getUpcomingBookingRequests(prisma);
  return { bookingRequests };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 46;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BPU6n6Zo.js')).default;
const server_id = "src/routes/(app)/booking/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/46.0AO3ur5_.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/StatusComponent.CudnW4VH.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/ConfirmDialog.D50Qb-7A.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=46-CgFgyqY9.js.map
