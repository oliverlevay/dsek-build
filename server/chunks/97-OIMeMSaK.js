import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { f as fail } from './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { c as createTicket } from './mutations-DRRZq9nc.js';
import { t as ticketSchema } from './types5-CwL0OX6I.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './server-DiSvHEoN.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import '@prisma/client';

const load = async ({ locals }) => {
  const { user } = locals;
  authorize(apiNames.WEBSHOP.CREATE, user);
  return {
    form: await superValidate(
      {
        availableFrom: dayjs(/* @__PURE__ */ new Date()).add(1, "day").hour(12).minute(15).second(0).toDate(),
        maxAmountPerUser: 1,
        stock: 0,
        price: 0
      },
      zod(ticketSchema),
      { errors: false }
    )
  };
};
const actions = {
  default: async (event) => {
    const { locals, request } = event;
    const { prisma, user, member } = locals;
    const form = await superValidate(request, zod(ticketSchema));
    if (!form.valid) return fail(400, { form });
    authorize(apiNames.WEBSHOP.CREATE, user);
    if (!member) {
      return message(form, {
        message: "Du måste vara inloggad för att skapa biljetter",
        type: "error,"
      });
    }
    let ticketId;
    try {
      const ticket = await createTicket(prisma, member.id, form.data);
      ticketId = ticket.id;
    } catch (err) {
      let errorMsg;
      if (err instanceof Error) errorMsg = err.message;
      else errorMsg = String(err);
      console.log("Error creating ticket", errorMsg);
      return message(form, {
        message: "Kunde inte skapa biljett: " + errorMsg,
        type: "error,"
      });
    }
    throw redirect(
      `/shop/tickets/${ticketId}`,
      {
        message: "Biljett skapad",
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

const index = 97;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cw-gvtOn.js')).default;
const server_id = "src/routes/(app)/shop/tickets/create/+page.server.ts";
const imports = ["_app/immutable/nodes/97.D4Z0qahb.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/TicketForm.BpSnzs44.js","_app/immutable/chunks/FormInput.DvRHd4up.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/DateInput.DrwfZnu4.js","_app/immutable/chunks/EntitySearch.C78MTpyq.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/FormCheckbox.BoNvyo-t.js","_app/immutable/chunks/FormSelect.w8sPLDn_.js","_app/immutable/chunks/types.BgAlWwrF.js","_app/immutable/chunks/index.DXqQCM1T.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=97-OIMeMSaK.js.map