import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { L as documents_governing_documentDeleted } from './messages-D8OfyZiq.js';
import './constants-BTUpIS8C.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals, url }) => {
  const { prisma } = locals;
  let year = url.searchParams.get("year") || (/* @__PURE__ */ new Date()).getFullYear();
  year = typeof year === "string" ? parseInt(year) : year;
  const governingDocuments = await prisma.document.findMany().then((documents) => {
    const filterDocuments = (type, filterByDate) => documents.filter(
      (document) => document.type === type && (filterByDate ? document.createdAt.getFullYear() == year : true)
    );
    return {
      policies: filterDocuments("POLICY", false),
      guidelines: filterDocuments("GUIDELINE", false),
      plansOfOperations: filterDocuments("PLAN_OF_OPERATIONS", true),
      frameworkBudgets: filterDocuments("FRAMEWORK_BUDGET", true),
      strategicGoals: filterDocuments("STRATEGIC_GOALS", true)
    };
  });
  return {
    policies: governingDocuments.policies,
    plansOfOperations: governingDocuments.plansOfOperations,
    frameworkBudgets: governingDocuments.frameworkBudgets,
    strategicGoals: governingDocuments.strategicGoals,
    guidelines: governingDocuments.guidelines,
    deleteForm: await superValidate(zod(deleteSchema))
  };
};
const deleteSchema = z.object({
  id: z.string()
});
const actions = {
  deleteFile: async ({ request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, { form });
    const { id } = form.data;
    await prisma.document.delete({
      where: {
        id
      }
    });
    return message(form, {
      message: documents_governing_documentDeleted(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 56;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BObZSXB2.js')).default;
const server_id = "src/routes/(app)/documents/governing/+page.server.ts";
const imports = ["_app/immutable/nodes/56.Cju6F49N.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/servePdf.DVfB6ULO.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/Pagination.C3TH-bth.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=56-BTHstso_.js.map
