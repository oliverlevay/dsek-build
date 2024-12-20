import { N as NOLLNING_START_KEY, a as NOLLNING_END_KEY, u as updateNollningPeriod } from './nollning-BGFMzAAg.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './constants-BTUpIS8C.js';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  authorize(apiNames.ADMIN.SETTINGS.READ, user);
  const settings = await prisma.adminSetting.findMany();
  const nollningStartStr = settings.find(
    (setting) => setting.key === NOLLNING_START_KEY
  )?.value;
  const nollningEndStr = settings.find(
    (setting) => setting.key === NOLLNING_END_KEY
  )?.value;
  return {
    settings,
    nollning: nollningStartStr && nollningEndStr ? {
      start: new Date(nollningStartStr),
      end: new Date(nollningEndStr)
    } : void 0,
    updateForm: await superValidate(zod(updateSchema)),
    updateNollningForm: await superValidate(zod(updateNollningPeriodSchema))
  };
};
const updateSchema = z.object({
  key: z.string().min(1),
  value: z.string().min(1)
});
const removeSchema = z.object({
  key: z.string().min(1)
});
const updateNollningPeriodSchema = z.object({
  start: z.date(),
  end: z.date()
});
const actions = {
  async update({ locals, request }) {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.adminSetting.upsert({
      where: { key: form.data.key },
      update: { value: form.data.value },
      create: { key: form.data.key, value: form.data.value }
    });
    return message(form, {
      message: `Inställning ${form.data.key} uppdaterad`,
      type: "success"
    });
  },
  async remove({ locals, request }) {
    const { prisma } = locals;
    const form = await superValidate(request, zod(removeSchema));
    if (!form.valid) return fail(400, { form });
    await prisma.adminSetting.delete({ where: { key: form.data.key } });
    return message(form, {
      message: `Inställning ${form.data.key} raderad`,
      type: "success"
    });
  },
  async updateNollning({ locals, request }) {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateNollningPeriodSchema));
    if (!form.valid) return fail(400, { form });
    await updateNollningPeriod(prisma, form.data.start, form.data.end);
    return message(form, {
      message: `Nollningsperiod uppdaterad`,
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 40;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D2IyhHXF.js')).default;
const server_id = "src/routes/(app)/admin/settings/+page.server.ts";
const imports = ["_app/immutable/nodes/40.hyGx9msf.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/DateInput.DrwfZnu4.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/apiNames.G3FqMHey.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=40-BfOF9qv8.js.map
