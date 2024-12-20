import { e as error, f as fail } from './index-BHX467Gw.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as superValidate, z as zod, j as message, k as setError } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import { aA as positions_newMandateGivenTo, aB as positions_theMember, aC as positions_mandateUpdated, aD as positions_mandateRemoved, aE as positions_errors_positionNotFound, aF as positions_positionUpdated, aG as positions_errors_mandateNotFound, aH as positions_errors_memberNotFound } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './server-DiSvHEoN.js';
import './constants-BTUpIS8C.js';
import '@keycloak/keycloak-admin-client';
import './shared-server-BfUoNEXY.js';

const load = async ({ locals, params, url }) => {
  const { prisma } = locals;
  const position = await prisma.position.findUnique({
    where: {
      id: params.id
    },
    include: {
      committee: true,
      mandates: {
        include: {
          member: true
        },
        orderBy: [
          {
            member: {
              firstName: "asc"
            }
          },
          {
            member: {
              lastName: "asc"
            }
          }
        ]
      },
      emailAliases: {
        select: {
          email: true
        }
      }
    }
  });
  if (!position) {
    throw error(404, positions_errors_positionNotFound());
  }
  const editedMandateID = url.searchParams.get("editMandate");
  const editedMandate = position.mandates.find((m2) => m2.id === editedMandateID);
  return {
    updateForm: superValidate(position, zod(updateSchema)),
    addMandateForm: superValidate(zod(addManadateSchema)),
    updateMandateForm: editedMandate ? superValidate(editedMandate, zod(updateMandateSchema)) : superValidate(zod(updateMandateSchema)),
    deleteMandateForm: superValidate(zod(deleteMandateSchema)),
    position,
    mandates: position.mandates
  };
};
const updateSchema = z.object({
  name: z.string().optional(),
  description: z.string().nullable(),
  email: z.string().email().nullable()
});
const END_OF_YEAR = /* @__PURE__ */ new Date(`${(/* @__PURE__ */ new Date()).getFullYear()}-12-31T23:59:59`);
const addManadateSchema = z.object({
  memberId: z.string().uuid(),
  startDate: z.coerce.date().default(/* @__PURE__ */ new Date()),
  endDate: z.coerce.date().default(END_OF_YEAR)
});
const updateMandateSchema = z.object({
  mandateId: z.string().uuid(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional()
});
const deleteMandateSchema = z.object({
  mandateId: z.string().uuid()
});
const genitiveCase = (base) => {
  if (languageTag() === "sv") {
    if (base.endsWith("s") || base.endsWith("x"))
      return base;
    else return base + "s";
  } else {
    if (base.endsWith("s"))
      return base + "'";
    else return base + "'s";
  }
};
const actions = {
  update: async ({ params, request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateSchema));
    if (!form.valid) return fail(400, { form });
    switch (languageTag()) {
      case "sv":
        await prisma.position.update({
          where: { id: params.id },
          data: {
            name: form.data.name,
            description: form.data.description,
            email: form.data.email
          }
        });
        break;
      case "en":
        await prisma.position.update({
          where: { id: params.id },
          data: {
            nameEn: form.data.name,
            descriptionEn: form.data.description,
            email: form.data.email
          }
        });
        break;
    }
    return message(form, {
      message: positions_positionUpdated(),
      type: "success"
    });
  },
  addMandate: async ({ params, request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(addManadateSchema));
    if (!form.valid) return fail(400, { form });
    const member = await prisma.member.findUnique({
      where: { id: form.data.memberId }
    });
    if (!member)
      return setError(form, "memberId", positions_errors_memberNotFound());
    await prisma.mandate.create({
      data: {
        positionId: params.id,
        memberId: form.data.memberId,
        startDate: form.data.startDate,
        endDate: form.data.endDate
      }
    });
    keycloak.addMandate(member.studentId, params.id);
    return message(form, {
      message: positions_newMandateGivenTo({
        name: member.firstName ?? positions_theMember()
      }),
      type: "success"
    });
  },
  updateMandate: async (event) => {
    const { params, request, locals } = event;
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateMandateSchema));
    if (!form.valid) return fail(400, { form });
    const member = await prisma.member.findFirst({
      where: {
        mandates: {
          some: {
            id: form.data.mandateId
          }
        }
      }
    });
    if (!member)
      return message(
        form,
        { message: positions_errors_mandateNotFound(), type: "error" },
        { status: 400 }
      );
    await prisma.mandate.update({
      where: { id: form.data.mandateId, positionId: params.id },
      data: {
        startDate: form.data.startDate,
        endDate: form.data.endDate
      }
    });
    throw redirect(
      `/positions/${params.id}`,
      {
        message: positions_mandateUpdated({
          names: genitiveCase(member.firstName ?? positions_theMember())
        }),
        type: "success"
      },
      event
    );
  },
  deleteMandate: async ({ params, request, locals }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(deleteMandateSchema));
    if (!form.valid) return fail(400, { form });
    const member = await prisma.member.findFirst({
      where: {
        mandates: {
          some: {
            id: form.data.mandateId
          }
        }
      }
    });
    if (!member)
      return message(
        form,
        { message: positions_errors_mandateNotFound(), type: "error" },
        { status: 400 }
      );
    await prisma.mandate.delete({
      where: { id: form.data.mandateId, positionId: params.id }
    });
    keycloak.deleteMandate(member.studentId, params.id);
    return message(form, {
      message: positions_mandateRemoved({
        names: genitiveCase(member.firstName ?? positions_theMember())
      }),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 86;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Mfo91lbp.js')).default;
const server_id = "src/routes/(app)/positions/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/86.BxepKzgJ.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/await_block.BvqRVjl_.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/ClassBadge.D_Ryvt6R.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/MemberSearchInput.ChycKntW.js","_app/immutable/chunks/MemberSearch.DfsD4fsq.js","_app/immutable/chunks/EntitySearch.C78MTpyq.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/CommitteeIcon.BPeKLDe6.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=86-DQg57HPQ.js.map
