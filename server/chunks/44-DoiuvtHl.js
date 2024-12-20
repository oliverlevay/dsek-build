import { e as error } from './index-BHX467Gw.js';
import dayjs from 'dayjs';

const load = async (event) => {
  const { prisma, user } = event.locals;
  const bookables = await prisma.bookable.findMany();
  const bookingRequests = await prisma.bookingRequest.findMany({
    where: {
      bookerId: user.memberId,
      start: {
        gte: dayjs().subtract(1, "week").toDate()
      }
    },
    orderBy: [{ start: "asc" }, { end: "asc" }, { status: "asc" }],
    include: {
      bookables: true
    }
  });
  return { bookingRequests, bookables };
};
const actions = {
  delete: async ({ request, locals }) => {
    const { prisma } = locals;
    const formData = await request.formData();
    const id = formData.get("id");
    if (id && typeof id === "string") {
      await prisma.bookingRequest.delete({
        where: { id }
      });
    } else {
      error(422, "Invalid booking request id");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 44;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BqvEAKHr.js')).default;
const server_id = "src/routes/(app)/booking/+page.server.ts";
const imports = ["_app/immutable/nodes/44.CwS-P4J2.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/StatusComponent.CudnW4VH.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/ConfirmDialog.D50Qb-7A.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/BookingCalendar.BYMDIjXT.js","_app/immutable/chunks/member.Deknk2Gk.js"];
const stylesheets = ["_app/immutable/assets/BookingCalendar.HXZv8JSo.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=44-DoiuvtHl.js.map
