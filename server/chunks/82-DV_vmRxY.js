import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { Prisma } from '@prisma/client';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { ap as news_tags_tagCreated, aq as news_errors_tagNotFound, ar as news_tags_tagUpdated } from './messages-D8OfyZiq.js';
import './constants-BTUpIS8C.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.TAGS.READ, user);
  const tags = await prisma.tag.findMany({ orderBy: { name: "asc" } });
  const createForm = await superValidate(zod(createSchema));
  const updateForm = await superValidate(zod(updateSchema));
  return {
    tags,
    createForm,
    updateForm
  };
};
const createSchema = z.object({
  name: z.string().default("")
});
const updateSchema = z.object({
  id: z.string().uuid(),
  name: z.string().optional(),
  nameEn: z.string().nullable().optional(),
  color: z.string().optional()
});
const actions = {
  create: async ({ request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.tag.create({
      data: {
        name: form.data.name
      }
    });
    return message(form, {
      message: news_tags_tagCreated(),
      type: "success"
    });
  },
  update: async ({ request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateSchema));
    if (!form.valid) return fail(400, { form });
    const { id, ...data } = form.data;
    try {
      await prisma.tag.update({
        where: {
          id
        },
        data
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return message(
          form,
          {
            message: news_errors_tagNotFound(),
            type: "error"
          },
          { status: 400 }
        );
      }
      throw error;
    }
    return message(form, {
      message: news_tags_tagUpdated(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 82;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-mI49S11s.js')).default;
const server_id = "src/routes/(app)/news/tags/+page.server.ts";
const imports = ["_app/immutable/nodes/82.DSW5pl9l.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=82-DV_vmRxY.js.map
