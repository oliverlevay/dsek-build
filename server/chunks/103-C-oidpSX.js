import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { a as getFullName } from './member-DajX-teH.js';
import nodemailer from 'nodemailer';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { a as authorize } from './authorization-DvGst16H.js';
import './constants-BTUpIS8C.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const transporter = nodemailer.createTransport({
  host: "mailmaster.blossom.dsek.se",
  secure: true,
  port: 465,
  auth: {
    user: private_env.EMAIL_YRKA_USER,
    pass: private_env.EMAIL_YRKA_PASS
  }
});
const load = async ({ locals }) => {
  const { user } = locals;
  authorize(apiNames.YRKA.SEND, user);
  return {
    form: await superValidate(zod(createSchema))
  };
};
const createSchema = z.object({
  title: z.string().min(1).default(""),
  content: z.string().min(1)
});
const actions = {
  default: async ({ request, locals }) => {
    const { member } = locals;
    const form = await superValidate(request, zod(createSchema));
    if (!form) return fail(400, { form });
    const name = member ? getFullName(member) : "Anonym";
    const { title, content } = form.data;
    try {
      const result = await transporter.sendMail({
        from: `"${name}" <yrka@dsek.se>`,
        to: "yrka@dsek.se",
        subject: `YRKANDE: ${title}`,
        text: `${content}`,
        html: `<p>${content}</p><p>Från: ${name}</p>`
      });
      console.log(result);
    } catch (e) {
      console.error(e);
      return message(
        form,
        {
          message: "Kunde inte skicka e-postmeddelande",
          type: "error"
        },
        { status: 500 }
      );
    }
    return message(form, {
      message: "Yrkande skickat!",
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 103;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B7lCzVfm.js')).default;
const server_id = "src/routes/(app)/yrka/+page.server.ts";
const imports = ["_app/immutable/nodes/103.kfGEbxfs.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=103-C-oidpSX.js.map
