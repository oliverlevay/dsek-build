import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, k as setError, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import './constants-BTUpIS8C.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const createSchema = z.object({
  role: z.string().nullable(),
  studentId: z.string().nullable()
}).refine(
  (data) => data.role !== null && data.studentId === null || data.role === null && data.studentId !== null,
  {
    path: ["role"],
    message: "Either 'role' or 'studentId' must be defined"
  }
);
const deleteSchema = z.object({
  id: z.string().uuid()
});
const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  authorize(apiNames.ACCESS_POLICY.READ, user);
  const policies = await prisma.accessPolicy.findMany({
    where: {
      apiName: params.apiName
    },
    include: {
      member: true
    }
  });
  const createForm = await superValidate(zod(createSchema));
  const deleteForm = await superValidate(zod(deleteSchema));
  return {
    policies,
    createForm,
    deleteForm
  };
};
const actions = {
  create: async ({ params, request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form.valid) return fail(400, { form });
    if (form.data.studentId && await prisma.member.count({
      where: { studentId: form.data.studentId }
    }) === 0) {
      return setError(form, "studentId", "Medlem hittades inte");
    }
    await prisma.accessPolicy.create({
      data: {
        apiName: params.apiName,
        role: form.data.role,
        studentId: form.data.studentId
      }
    });
    return message(form, {
      message: "Access policy skapad",
      type: "success"
    });
  },
  delete: async ({ request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.accessPolicy.delete({
      where: {
        id: form.data.id
      }
    });
    return message(form, {
      message: "Policy borttagen",
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 31;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CsoecDez.js')).default;
const server_id = "src/routes/(app)/admin/access/[apiName]/+page.server.ts";
const imports = ["_app/immutable/nodes/31.BwlM44-R.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=31-Lbpap-sh.js.map
