import { m as memberSchema } from './schemas-CKip5ia7.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { ax as onboarding_errors_memberNotFound, ay as onboarding_errors_studentIDNotFound, az as onboarding_memberUpdated } from './messages-D8OfyZiq.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './constants-BTUpIS8C.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import '@keycloak/keycloak-admin-client';
import './shared-server-BfUoNEXY.js';

const load = async ({ locals }) => {
  const { prisma } = locals;
  const [memberResult, phadderGroupsResult] = await Promise.allSettled([
    prisma.member.findUnique({
      where: {
        studentId: locals.user?.studentId
      }
    }),
    prisma.phadderGroup.findMany({
      orderBy: {
        createdAt: "asc"
      }
    })
  ]);
  if (memberResult.status === "rejected") {
    redirect(302, "/");
  }
  if (!memberResult.value) {
    throw error(404, onboarding_errors_memberNotFound());
  }
  if (phadderGroupsResult.status === "rejected")
    throw error(
      500,
      phadderGroupsResult.reason ?? "Couldn't fetch phadder groups"
    );
  const member = memberResult.value;
  const phadderGroups = phadderGroupsResult.value;
  return {
    form: await superValidate(
      { ...member, classProgramme: member.classProgramme ?? "D" },
      zod(memberSchema)
    ),
    member,
    phadderGroups
  };
};
const updateSchema = memberSchema.pick({
  email: true,
  firstName: true,
  lastName: true,
  nickname: true,
  foodPreference: true,
  classProgramme: true,
  classYear: true,
  nollningGroupId: true
});
const actions = {
  update: async ({ locals, request, cookies }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateSchema));
    if (!form.valid) return fail(400, { form });
    const studentId = locals.user?.studentId;
    if (studentId) {
      await prisma.member.update({
        where: { studentId },
        data: {
          ...form.data
        }
      });
    } else {
      throw error(500, onboarding_errors_studentIDNotFound());
    }
    keycloak.updateProfile(
      studentId,
      form.data.firstName ?? "",
      form.data.lastName ?? ""
    );
    return redirect(
      "/",
      {
        type: "success",
        message: onboarding_memberUpdated()
      },
      cookies
    );
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 85;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C4lG1gcp.js')).default;
const server_id = "src/routes/(app)/onboarding/+page.server.ts";
const imports = ["_app/immutable/nodes/85.B8ldZ-k1.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/FormSelect.w8sPLDn_.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/programmes.DoECQYmx.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/LanguageSwitcher.CExkJGNV.js"];
const stylesheets = ["_app/immutable/assets/85.PD1bg7dp.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=85-CumxvOZx.js.map
