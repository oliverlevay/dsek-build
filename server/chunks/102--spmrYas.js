import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { f as fail } from './index-BHX467Gw.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { c as createSongSchema } from './schema-DJRhpSvH.js';
import { s as slugify } from './slugify-DXeN2Lma.js';
import { g as getExistingCategories, a as getExistingMelodies } from './helpers-Cg7T54uV.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { br as songbook_songCreated } from './messages-D8OfyZiq.js';
import DOMPurify from 'isomorphic-dompurify';
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

const slugifySongTitle = async (prisma, title) => {
  const slug = slugify(title);
  const count = await prisma.song.count({
    where: {
      slug: {
        startsWith: slug
      }
    }
  });
  if (count > 0) {
    return `${slug}-${count + 1}`;
  }
  return slug;
};
const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.SONG.CREATE, user);
  const [existingCategories, existingMelodies] = await Promise.all([
    getExistingCategories(prisma),
    getExistingMelodies(prisma)
  ]);
  return {
    form: await superValidate(zod(createSongSchema)),
    existingCategories,
    existingMelodies
  };
};
const actions = {
  create: async (event) => {
    const { request, locals } = event;
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSongSchema));
    if (!form.valid) return fail(400, { form });
    const { title, melody, category, lyrics } = form.data;
    const now = /* @__PURE__ */ new Date();
    const result = await prisma.song.create({
      data: {
        title: DOMPurify.sanitize(title),
        slug: await slugifySongTitle(prisma, title),
        melody,
        category,
        lyrics: DOMPurify.sanitize(lyrics),
        createdAt: now,
        updatedAt: now
      }
    });
    throw redirect(
      `/songbook/${result.slug}`,
      {
        message: songbook_songCreated(),
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

const index = 102;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-T0MYZzu4.js')).default;
const server_id = "src/routes/(app)/songbook/create/+page.server.ts";
const imports = ["_app/immutable/nodes/102.BnhiYfYT.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Autocomplete.DdSuRofk.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=102--spmrYas.js.map
