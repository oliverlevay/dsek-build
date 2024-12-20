import { f as fail, e as error } from './index-BHX467Gw.js';
import { z } from './index-CuABlRvJ.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { Prisma } from '@prisma/client';
import { a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { b as admin_alerts_alertCreated, c as admin_alerts_alertRemoved } from './messages-D8OfyZiq.js';
import './constants-BTUpIS8C.js';
import './runtime-BxW51cRH.js';

const softDelete = async (deleteFn) => {
  await deleteFn().catch((e) => {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2004" && e?.meta?.["reason"] === "RESULT_NOT_READABLE") {
        return;
      }
    }
    throw error(500, "Failed to delete record");
  });
};
const load = async ({ locals }) => {
  const { prisma } = locals;
  authorize(apiNames.ALERT, locals.user);
  const alert = prisma.alert.findMany({
    where: {
      removedAt: null
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return {
    alert: await alert
  };
};
const addAlertSchema = z.object({
  severity: z.enum(["info", "success", "warning", "error"]),
  message: z.string().min(1),
  messageEn: z.string().min(1)
});
const deleteAlertSchema = z.object({
  id: z.string().uuid()
});
const actions = {
  create: async ({ request, locals }) => {
    const { prisma } = locals;
    authorize(apiNames.ALERT, locals.user);
    const form = await superValidate(request, zod(addAlertSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.alert.create({
      data: {
        severity: form.data.severity,
        message: form.data.message,
        messageEn: form.data.messageEn
      }
    });
    return message(form, {
      message: admin_alerts_alertCreated(),
      type: "success"
    });
  },
  delete: async ({ request, locals }) => {
    const { prisma } = locals;
    authorize(apiNames.ALERT, locals.user);
    const form = await superValidate(request, zod(deleteAlertSchema));
    if (!form.valid) return fail(400, { form });
    softDelete(
      () => prisma.alert.update({
        where: { id: form.data.id },
        data: {
          removedAt: /* @__PURE__ */ new Date()
        }
      })
    );
    return message(form, {
      message: admin_alerts_alertRemoved(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 32;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BF2OGlgd.js')).default;
const server_id = "src/routes/(app)/admin/alerts/+page.server.ts";
const imports = ["_app/immutable/nodes/32.DNT06Gjq.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=32-K8lDe1zx.js.map
