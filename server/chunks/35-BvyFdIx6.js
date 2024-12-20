import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { z } from './index-CuABlRvJ.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, k as setError, j as message } from './superValidate-C2lU2J3v.js';
import { a as authorize } from './authorization-DvGst16H.js';
import './constants-BTUpIS8C.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  authorize(apiNames.DOOR.READ, user);
  const doorAccessPolicies = await prisma.doorAccessPolicy.findMany({
    where: {
      doorName: params.slug,
      OR: [
        {
          endDatetime: {
            gte: /* @__PURE__ */ new Date()
          }
        },
        {
          endDatetime: null
        }
      ]
    },
    include: {
      member: true
    },
    orderBy: [
      {
        startDatetime: "asc"
      },
      {
        role: "asc"
      },
      {
        studentId: "asc"
      }
    ]
  });
  return {
    doorAccessPolicies,
    createForm: await superValidate(zod(createSchema), { id: "createForm" }),
    banForm: await superValidate(zod(createSchema), { id: "banForm" }),
    deleteForm: await superValidate(zod(deleteSchema))
  };
};
const createSchema = z.object({
  studentId: z.string().min(1).optional(),
  role: z.string().min(1).optional(),
  startDatetime: z.date().optional(),
  endDatetime: z.date().optional(),
  information: z.string().optional()
}).refine((data) => data.studentId != null || data.role != null, {
  message: "Du måste ange roll eller student id"
});
const deleteSchema = z.object({
  id: z.string()
});
const actions = {
  create: async ({ request, locals, params }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form.valid) return fail(400, { form });
    const doorName = params.slug;
    const { studentId } = form.data;
    if (studentId && await prisma.member.count({
      where: { studentId }
    }) <= 0) {
      return setError(form, "studentId", "Medlemmen finns inte");
    }
    await prisma.doorAccessPolicy.create({
      data: {
        doorName,
        ...form.data
      }
    });
    return message(form, {
      message: "Dörrpolicy skapad",
      type: "success"
    });
  },
  ban: async ({ request, locals, params }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form.valid) return fail(400, { form });
    const doorName = params.slug;
    const { studentId } = form.data;
    if (studentId && await prisma.member.count({
      where: { studentId }
    }) <= 0) {
      return setError(form, "studentId", "Medlemmen finns inte");
    }
    await prisma.doorAccessPolicy.create({
      data: {
        doorName,
        isBan: true,
        ...form.data
      }
    });
    return message(form, {
      message: "Dörrpolicy skapad",
      type: "success"
    });
  },
  delete: async ({ request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, { form });
    const { id } = form.data;
    await prisma.doorAccessPolicy.delete({
      where: { id }
    });
    return message(form, {
      message: "Dörrpolicy raderad",
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 35;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-q35QFqVl.js')).default;
const server_id = "src/routes/(app)/admin/doors/edit/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/35.DcE4zynh.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=35-BvyFdIx6.js.map
