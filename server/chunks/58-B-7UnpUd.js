import { f as fail } from './index-BHX467Gw.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { g as governingDocumentSchema } from './schemas2-Cys93Qki.js';
import { O as documents_governing_documentCreated } from './messages-D8OfyZiq.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';

const load = async () => ({
  form: await superValidate(zod(governingDocumentSchema))
});
const actions = {
  create: async (event) => {
    const { request, locals } = event;
    const { prisma } = locals;
    const form = await superValidate(request, zod(governingDocumentSchema));
    if (!form.valid) return fail(400, { form });
    const { url, title, type } = form.data;
    await prisma.document.create({
      data: {
        url,
        title,
        type
      }
    });
    throw redirect(
      "/documents/governing",
      {
        message: documents_governing_documentCreated(),
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

const index = 58;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CGg9TcW9.js')).default;
const server_id = "src/routes/(app)/documents/governing/new/+page.server.ts";
const imports = ["_app/immutable/nodes/58.Dv0Mti_J.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/GoverningDocumentEditor.BForA9IJ.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=58-B-7UnpUd.js.map
