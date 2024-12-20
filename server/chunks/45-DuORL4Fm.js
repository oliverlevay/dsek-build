import './client-yexbOeKf.js';
import { s as superValidate, z as zod, l as fail } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { b as bookingSchema } from './schema2-6iq8K_hf.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { A as booking_requestSent } from './messages-D8OfyZiq.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { g as getBookingRequestOrThrow, a as getSuperValidatedForm } from './utils3-fgvf9FPc.js';
import './exports-BGi7-Rnc.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index2-Bcb5RUHj.js';
import './lifecycle-DkuQBIPN.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import 'dayjs';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index3-CPnAgoK8.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';

const load = async ({ locals, params }) => {
  const { prisma } = locals;
  const bookables = await prisma.bookable.findMany();
  const bookingRequest = await getBookingRequestOrThrow(prisma, params.id);
  const form = await getSuperValidatedForm(bookingRequest);
  return { bookables, form, booking: bookingRequest };
};
const actions = {
  default: async (event) => {
    const { request, locals } = event;
    const { prisma, user } = locals;
    const isAdmin = isAuthorized(apiNames.BOOKABLES.UPDATE, user);
    const form = await superValidate(request, zod(bookingSchema));
    if (!form.valid) return fail(400, { form });
    const { start, end, name, bookables } = form.data;
    await prisma.bookingRequest.update({
      where: {
        id: event.params.id
      },
      data: {
        start: new Date(start),
        end: new Date(end),
        event: name,
        bookables: {
          set: bookables.map((bookable) => ({
            id: bookable
          }))
        },
        // Require new approval of booking after edit (if the user is not an admin)
        ...!isAdmin && { status: "PENDING" }
      }
    });
    throw redirect(
      `/booking`,
      {
        message: booking_requestSent(),
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

const index = 45;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DSd0n5yI.js')).default;
const server_id = "src/routes/(app)/booking/[id]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/45.DvWg90uE.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/BookingEditor.DM32gR4n.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/StatusComponent.CudnW4VH.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/apiNames.G3FqMHey.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=45-DuORL4Fm.js.map
