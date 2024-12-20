import { n as notificationSchema } from './schemas-CKip5ia7.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { as as notifications_errors_notLoggedIn, at as notifications_notificationsRead, au as notifications_notificationsRemoved, av as notifications_notificationRemoved, aw as notifications_errors_couldNotRemove } from './messages-D8OfyZiq.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './constants-BTUpIS8C.js';

const load = async ({ request }) => {
  throw redirect(302, request.headers.get("referer") || "/");
};
const actions = {
  // Mark all unread notifications as read
  readNotifications: async ({ locals, request }) => {
    const { user, prisma } = locals;
    if (!user.memberId) {
      error(403, notifications_errors_notLoggedIn());
    }
    const form = await superValidate(request, zod(notificationSchema));
    if (!form.valid) return fail(400, { form });
    const idFilter = form.data.notificationId ?? (form.data.notificationIds !== null ? {
      in: form.data.notificationIds
    } : void 0);
    await prisma.notification.updateMany({
      where: {
        memberId: user?.memberId,
        readAt: null,
        id: idFilter
      },
      data: {
        readAt: /* @__PURE__ */ new Date()
      }
    });
    return message(form, {
      message: notifications_notificationsRead(),
      type: "hidden"
    });
  },
  // Delete single or multiple notifications on database
  deleteNotification: async ({ locals, request }) => {
    const { user, prisma } = locals;
    if (!user.memberId) {
      error(403, notifications_errors_notLoggedIn());
    }
    const form = await superValidate(request, zod(notificationSchema));
    if (!form.valid) return fail(400, { form });
    if (form.data.notificationIds.length > 0) {
      await prisma.notification.deleteMany({
        where: {
          memberId: user.memberId,
          id: {
            in: form.data.notificationIds
          }
        }
      });
      return message(form, {
        message: notifications_notificationsRemoved(),
        type: "hidden"
      });
    } else if (form.data.notificationId) {
      await prisma.notification.delete({
        where: {
          memberId: user.memberId,
          id: form.data.notificationId
        }
      });
      return message(form, {
        message: notifications_notificationRemoved(),
        type: "success"
      });
    }
    return message(form, {
      message: notifications_errors_couldNotRemove(),
      type: "error"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 84;
const server_id = "src/routes/(app)/notifications/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=84-B8C_jfs7.js.map
