import { a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import dayjs from 'dayjs';
import { g as getBookingRequestOrThrow, a as getSuperValidatedForm, b as getUpcomingBookingRequests, c as actions } from './utils3-fgvf9FPc.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './index3-CPnAgoK8.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './schema2-6iq8K_hf.js';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  authorize(apiNames.BOOKINGS.UPDATE, user);
  const bookables = await prisma.bookable.findMany();
  const allBookingRequests = await prisma.bookingRequest.findMany({
    where: {
      start: {
        gte: dayjs().subtract(1, "week").toDate()
      }
    },
    orderBy: [{ start: "asc" }, { end: "asc" }, { status: "asc" }],
    include: {
      bookables: true
    }
  });
  const bookingRequest = await getBookingRequestOrThrow(prisma, params.id);
  const form = await getSuperValidatedForm(bookingRequest);
  return {
    bookables,
    form,
    booking: bookingRequest,
    allBookingRequests,
    bookingRequests: await getUpcomingBookingRequests(prisma)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 47;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DThmV7Cx.js')).default;
const server_id = "src/routes/(app)/booking/admin/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/47.B3U65V7Z.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/BookingCalendar.BYMDIjXT.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/BookingEditor.DM32gR4n.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/StatusComponent.CudnW4VH.js"];
const stylesheets = ["_app/immutable/assets/BookingCalendar.HXZv8JSo.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=47-BXbXfIco.js.map
