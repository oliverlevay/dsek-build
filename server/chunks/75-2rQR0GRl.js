import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { m as memberSchema } from './schemas-CKip5ia7.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import DOMPurify from 'isomorphic-dompurify';
import { a3 as members_errors_memberNotFound, a9 as members_bioUpdated } from './messages-D8OfyZiq.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './constants-BTUpIS8C.js';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  if (user?.studentId !== params.studentId) {
    authorize(apiNames.MEMBER.UPDATE, user);
  }
  const member = await prisma.member.findUnique({
    where: {
      studentId: params.studentId
    }
  });
  if (!member) {
    throw error(404, members_errors_memberNotFound());
  }
  return {
    member,
    form: await superValidate(member, zod(updateBioSchema))
  };
};
const updateBioSchema = memberSchema.pick({ bio: true });
const actions = {
  update: async (event) => {
    const { request, locals, params } = event;
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateBioSchema));
    if (!form) return fail(400, { form });
    const studentId = params.studentId;
    await prisma.member.update({
      where: { studentId },
      data: {
        bio: form.data.bio ? DOMPurify.sanitize(form.data.bio) : form.data.bio
      }
    });
    throw redirect(
      `/members/${studentId}`,
      {
        message: members_bioUpdated(),
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

const index = 75;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-TXcJW1.js')).default;
const server_id = "src/routes/(app)/members/[studentId]/edit-bio/+page.server.ts";
const imports = ["_app/immutable/nodes/75.0GOX2jCJ.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=75-2rQR0GRl.js.map
