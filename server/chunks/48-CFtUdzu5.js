import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { A as booking_requestSent } from './messages-D8OfyZiq.js';
import { b as bookingSchema } from './schema2-6iq8K_hf.js';
import dayjs from 'dayjs';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'expo-server-sdk';

const load = async ({ locals }) => {
  const { prisma } = locals;
  const bookables = await prisma.bookable.findMany();
  const bookingRequests = await prisma.bookingRequest.findMany({
    where: {
      end: {
        gte: dayjs().subtract(1, "week").toDate()
      }
    },
    orderBy: [{ start: "asc" }, { end: "asc" }, { status: "asc" }],
    include: {
      bookables: true,
      booker: true
    }
  });
  const form = await superValidate(zod(bookingSchema));
  return { bookables, bookingRequests, form };
};
const sendNotificationToKM = async (bookingRequest, prisma) => {
  const kallarMastare = await prisma.member.findFirstOrThrow({
    where: {
      mandates: {
        some: {
          positionId: "dsek.km.mastare",
          startDate: { lte: /* @__PURE__ */ new Date() },
          endDate: { gte: /* @__PURE__ */ new Date() }
        }
      }
    }
  });
  const booker = await prisma.member.findUnique({
    where: {
      id: bookingRequest.bookerId ?? void 0
    }
  }) ?? { firstName: "Unknown", lastName: "" };
  const bookablesString = bookingRequest.bookables.map((bookable) => bookable.nameEn).join(", ");
  await sendNotification({
    title: `New booking request: ${bookingRequest.event}`,
    message: `${booker.firstName} ${booker.lastName} wants to book '${bookablesString}' from ${dayjs(bookingRequest.start).format("DD/MM HH:mm")} until ${dayjs(bookingRequest.end).format("DD/MM HH:mm")}.`,
    type: NotificationType.BOOKING_REQUEST,
    link: `/booking/admin/${bookingRequest.id}`,
    memberIds: [kallarMastare.id]
  });
};
const actions = {
  default: async (event) => {
    const { request, locals } = event;
    const { prisma, user } = locals;
    const form = await superValidate(request, zod(bookingSchema));
    if (!form.valid) return fail(400, { form });
    const { start, end, name, bookables } = form.data;
    const createdRequest = await prisma.bookingRequest.create({
      data: {
        bookerId: user?.memberId,
        start: new Date(start),
        end: new Date(end),
        event: name,
        bookables: {
          connect: bookables.map((bookable) => ({
            id: bookable
          }))
        },
        status: "PENDING"
      },
      include: { bookables: true }
    });
    await sendNotificationToKM(createdRequest, prisma).catch((e) => {
      console.log("Failed sending notifications to KM: ", e);
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

const index = 48;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-fWrKpKSc.js')).default;
const server_id = "src/routes/(app)/booking/create/+page.server.ts";
const imports = ["_app/immutable/nodes/48.S7LBxDLI.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/BookingEditor.DM32gR4n.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/StatusComponent.CudnW4VH.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/BookingCalendar.BYMDIjXT.js","_app/immutable/chunks/member.Deknk2Gk.js"];
const stylesheets = ["_app/immutable/assets/BookingCalendar.HXZv8JSo.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=48-CFtUdzu5.js.map
