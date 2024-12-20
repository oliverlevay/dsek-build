import { p as phadderGroupSchema, a as phadderMandateFilter } from './types-jvq07wik.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import DOMPurify from 'isomorphic-dompurify';
import './client-yexbOeKf.js';
import { s as superValidate, z as zod, l as fail, j as message, k as setError } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { z } from './index-CuABlRvJ.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import './constants-BTUpIS8C.js';
import './index2-Bcb5RUHj.js';
import './lifecycle-DkuQBIPN.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const getPhadderMandates = async (prisma, memberId, year) => prisma.mandate.findMany({
  where: {
    memberId,
    ...phadderMandateFilter(year)
  },
  orderBy: [
    {
      positionId: "asc"
      // regular phadder comes before uppdrag
    },
    {
      startDate: "asc"
    }
  ]
});
const load = async ({ locals }) => {
  const { user, prisma } = locals;
  authorize(apiNames.NOLLNING.MANAGE_PHADDER_GROUPS, user);
  const phadderGroups = await prisma.phadderGroup.findMany({
    include: {
      nollor: true,
      phaddrar: {
        include: {
          member: true
        }
      }
    },
    orderBy: {
      createdAt: "asc"
    }
  });
  return {
    groups: await Promise.all(
      phadderGroups.map(async (group) => ({
        ...group,
        form: await superValidate(group, zod(phadderGroupSchema))
      }))
    ),
    form: await superValidate(zod(createPhadderGroupSchema))
  };
};
const createPhadderGroupSchema = phadderGroupSchema.omit({
  id: true
});
const updatePhadderGroupSchema = phadderGroupSchema;
const deletePhadderGroupSchema = phadderGroupSchema.pick({
  id: true
});
const personSchema = z.object({
  memberId: z.string().uuid(),
  groupId: z.string().uuid()
});
const actions = {
  create: async ({ locals, request }) => {
    const form = await superValidate(request, zod(createPhadderGroupSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    form.data.description = form.data.description ? DOMPurify.sanitize(form.data.description) : form.data.description;
    await prisma.phadderGroup.create({
      data: form.data
    });
    return message(form, {
      message: "Phaddergruppen skapades",
      type: "success"
    });
  },
  update: async ({ locals, request }) => {
    const form = await superValidate(request, zod(updatePhadderGroupSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    form.data.description = form.data.description ? DOMPurify.sanitize(form.data.description) : form.data.description;
    const res = await prisma.phadderGroup.update({
      where: {
        id: form.data.id
      },
      data: form.data
    });
    console.log(res);
    return message(form, {
      message: "Phaddergruppen uppdaterad",
      type: "success"
    });
  },
  delete: async ({ locals, request }) => {
    const form = await superValidate(request, zod(deletePhadderGroupSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    await prisma.phadderGroup.delete({
      where: {
        id: form.data.id
      }
    });
    return message(form, {
      message: "Phaddergruppen borttagen",
      type: "success"
    });
  },
  addNolla: async ({ locals, request }) => {
    const form = await superValidate(request, zod(personSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    await prisma.phadderGroup.update({
      where: {
        id: form.data.groupId
      },
      data: {
        nollor: {
          connect: {
            id: form.data.memberId
          }
        }
      }
    });
    return message(form, {
      message: "Nolla tillagd",
      type: "success"
    });
  },
  removeNolla: async ({ locals, request }) => {
    const form = await superValidate(request, zod(personSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    await prisma.phadderGroup.update({
      where: {
        id: form.data.groupId
      },
      data: {
        nollor: {
          disconnect: {
            id: form.data.memberId
          }
        }
      }
    });
    return message(form, {
      message: "Nolla borttagen",
      type: "success"
    });
  },
  addPhadder: async ({ locals, request }) => {
    const form = await superValidate(request, zod(personSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    const group = await prisma.phadderGroup.findUnique({
      where: {
        id: form.data.groupId
      }
    });
    if (!group) return setError(form, "groupId", "Group not found");
    const mandate = await getPhadderMandates(
      prisma,
      form.data.memberId,
      group.year
    ).then((mandates) => mandates?.[0]);
    if (!mandate)
      return setError(
        form,
        "memberId",
        "Personen hittas inte som phadder det året"
      );
    await prisma.phadderGroup.update({
      where: {
        id: form.data.groupId
      },
      data: {
        phaddrar: {
          connect: {
            id: mandate.id
          }
        }
      }
    });
    return message(form, {
      message: "Phadder tillagd",
      type: "success"
    });
  },
  removePhadder: async ({ locals, request }) => {
    const form = await superValidate(request, zod(personSchema));
    if (!form.valid) return fail(400, { form });
    const { prisma } = locals;
    const group = await prisma.phadderGroup.findUnique({
      where: {
        id: form.data.groupId
      }
    });
    if (!group) return setError(form, "groupId", "Group not found");
    const mandates = await getPhadderMandates(
      prisma,
      form.data.memberId,
      group?.year
    );
    if (mandates.length === 0)
      return setError(
        form,
        "memberId",
        "Personen hittas inte som phadder det året"
      );
    await prisma.phadderGroup.update({
      where: {
        id: form.data.groupId
      },
      data: {
        phaddrar: {
          disconnect: mandates.map((m) => ({
            id: m.id
          }))
        }
      }
    });
    return message(form, {
      message: "Phadder borttagen",
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 53;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D3poQ4bQ.js')).default;
const server_id = "src/routes/(app)/committees/nollu/groups/+page.server.ts";
const imports = ["_app/immutable/nodes/53.DBmv-iZM.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/FormInput.DvRHd4up.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/FormSelect.w8sPLDn_.js","_app/immutable/chunks/FormSubmitButton.zmtSKK1O.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/ScrollIndicatedBox.B_vBo_RS.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MemberSearchInput.ChycKntW.js","_app/immutable/chunks/MemberSearch.DfsD4fsq.js","_app/immutable/chunks/EntitySearch.C78MTpyq.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=53-CXjGpmi6.js.map
