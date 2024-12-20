import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { a as admin_access_policyCreated } from './messages-D8OfyZiq.js';
import './constants-BTUpIS8C.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.ACCESS_POLICY.READ, user);
  const accessPolicies = await prisma.accessPolicy.findMany().then(
    (policies) => policies.map((policy) => policy.apiName).filter((value, index, self) => self.indexOf(value) === index).sort()
  );
  const form = await superValidate(zod(createSchema));
  return {
    accessPolicies,
    form
  };
};
const createSchema = z.object({
  apiName: z.string().default("")
});
const actions = {
  create: async ({ locals, request }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.accessPolicy.create({
      data: {
        apiName: form.data.apiName,
        role: "*"
      }
    });
    return message(form, {
      message: admin_access_policyCreated(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 30;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DJahXxaF.js')).default;
const server_id = "src/routes/(app)/admin/access/+page.server.ts";
const imports = ["_app/immutable/nodes/30.BNZ6a7_-.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=30-CWjEOObJ.js.map
