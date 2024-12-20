import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { u as updateMarkdown } from './mutations.server-BasbvG3q.js';
import DOMPurify from 'isomorphic-dompurify';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './server-DiSvHEoN.js';
import './constants-BTUpIS8C.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const markdownPage = await prisma.markdown.findUnique({
    where: {
      name: params.slug
    }
  });
  if (markdownPage == void 0) {
    authorize(apiNames.MARKDOWNS.CREATE, user);
  } else {
    authorize(apiNames.MARKDOWNS.PAGE(params.slug).UPDATE, user);
  }
  return {
    form: await superValidate(
      {
        markdown: markdownPage?.markdown ?? "",
        markdownEn: markdownPage?.markdownEn ?? null
      },
      zod(markdownSchema)
    ),
    isCreating: markdownPage == void 0
  };
};
const markdownSchema = z.object({
  markdown: z.string(),
  markdownEn: z.string().nullable()
});
const actions = {
  create: async (event) => {
    const { request, locals, params } = event;
    const { prisma, user } = locals;
    const form = await superValidate(request, zod(markdownSchema));
    if (!form.valid) return fail(400, { form });
    const name = params.slug;
    form.data.markdown = DOMPurify.sanitize(form.data.markdown);
    form.data.markdownEn = form.data.markdownEn ? DOMPurify.sanitize(form.data.markdownEn) : form.data.markdownEn;
    await prisma.markdown.create({
      data: {
        name,
        ...form.data
      }
    });
    await prisma.accessPolicy.create({
      data: {
        apiName: apiNames.MARKDOWNS.PAGE(name).UPDATE,
        studentId: user?.studentId
      }
    });
    throw redirect(
      `/info/${name}`,
      {
        message: `"${name}"-sida uppdaterad`,
        type: "success"
      },
      event
    );
  },
  update: async (event) => {
    const { request, locals, params } = event;
    const { user, prisma } = locals;
    const form = await superValidate(request, zod(markdownSchema));
    if (!form.valid) return fail(400, { form });
    const name = params.slug;
    await updateMarkdown(user, prisma, { ...form.data, name });
    throw redirect(
      `/info/${name}`,
      {
        message: `"${name}"-sida uppdaterad`,
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

const index = 71;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-oFuEk4jk.js')).default;
const server_id = "src/routes/(app)/info/[slug]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/71.DhM1f1mA.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/LangTabs.D_AYhfI9.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=71-BCVgnDd8.js.map
