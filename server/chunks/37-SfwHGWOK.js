import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message, k as setError } from './superValidate-C2lU2J3v.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { z } from './index-CuABlRvJ.js';
import { i as isValidEmail } from './emailutils-BD_fgkxR.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import { k as admin_emailalias_addressNotFound, l as admin_emailalias_couldNotFetchPositions, m as admin_emailalias_aliasRemoved, n as admin_emailalias_positionAdded, o as admin_emailalias_positionRemoved, p as admin_emailalias_positionRightsUpdated, q as admin_emailalias_specialReceiversRemoved, r as admin_emailalias_specialReceiverAdded, t as admin_emailalias_specialSendersRemoved, u as admin_emailalias_specialSenderAdded, g as admin_emailalias_invalidAddress, v as admin_emailalias_positionAlreadyExists, j as admin_emailalias_userNotInKeycloak } from './messages-D8OfyZiq.js';
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

const addPositionSchema = z.object({
  email: z.string(),
  positionId: z.string()
});
const removePositionSchema = z.object({
  aliasId: z.string()
});
const deleteEmailAliasSchema = z.object({
  email: z.string()
});
const setCanSendSchema = z.object({
  aliasId: z.string(),
  canSend: z.boolean()
});
const addSpecialReceiverSchema = z.object({
  email: z.string(),
  targetEmailReceiver: z.string().email()
});
const removeSpecialReceiverSchema = z.object({
  id: z.string(),
  targetEmailReceiver: z.string().email()
});
const deleteSpecialReceiverSchema = z.object({
  email: z.string()
});
const addSpecialSenderSchema = z.object({
  email: z.string(),
  usernameSender: z.string()
});
const removeSpecialSenderSchema = z.object({
  id: z.string()
});
const deleteSpecialSenderSchema = z.object({
  email: z.string()
});
const load = async (event) => {
  const { user, prisma } = event.locals;
  authorize(
    [
      apiNames.EMAIL_ALIAS.CREATE,
      apiNames.EMAIL_ALIAS.READ,
      apiNames.EMAIL_ALIAS.UPDATE,
      apiNames.EMAIL_ALIAS.DELETE
    ],
    user
  );
  const { email } = event.params;
  const [
    emailAliasResult,
    allPositionsResult,
    specialReceiverResult,
    specialSenderResult
  ] = await Promise.allSettled([
    prisma.emailAlias.findMany({
      where: {
        email
      },
      include: {
        position: true
      },
      orderBy: {
        positionId: "asc"
      }
    }),
    prisma.position.findMany({
      where: {
        active: true
      },
      orderBy: {
        name: "asc"
      }
    }),
    prisma.specialReceiver.findMany({
      where: {
        email
      },
      orderBy: {
        targetEmail: "asc"
      }
    }),
    prisma.specialSender.findMany({
      where: {
        email
      },
      orderBy: {
        studentId: "asc"
      }
    })
  ]);
  if (emailAliasResult.status === "rejected" || specialReceiverResult.status === "rejected" || specialSenderResult.status === "rejected") {
    throw error(404, { message: admin_emailalias_addressNotFound() });
  }
  if (allPositionsResult.status === "rejected") {
    throw error(500, { message: admin_emailalias_couldNotFetchPositions() });
  }
  const [
    addPositionForm,
    removePositionForm,
    setCanSendForm,
    deleteEmailAliasForm,
    addSpecialReceiverForm,
    removeSpecialReceiverForm,
    deleteSpecialReceiverForm,
    addSpecialSenderForm,
    removeSpecialSenderForm,
    deleteSpecialSenderForm
  ] = await Promise.all([
    superValidate(zod(addPositionSchema)),
    superValidate(zod(removePositionSchema)),
    superValidate(zod(setCanSendSchema)),
    superValidate(zod(deleteEmailAliasSchema)),
    superValidate(zod(addSpecialReceiverSchema)),
    superValidate(zod(removeSpecialReceiverSchema)),
    superValidate(zod(deleteSpecialReceiverSchema)),
    superValidate(zod(addSpecialSenderSchema)),
    superValidate(zod(removeSpecialSenderSchema)),
    superValidate(zod(deleteSpecialSenderSchema))
  ]);
  const emailAliases = emailAliasResult.value;
  const specialReceiver = specialReceiverResult.value;
  const specialSender = specialSenderResult.value;
  if (emailAliases.length === 0 && specialReceiver.length === 0 && specialSender.length === 0) {
    throw error(404, { message: admin_emailalias_addressNotFound() });
  }
  return {
    emailAlias: emailAliases,
    allPositions: allPositionsResult.value,
    specialReceivers: specialReceiver,
    specialSenders: specialSender,
    addPositionForm,
    removePositionForm,
    setCanSendForm,
    deleteEmailAliasForm,
    addSpecialReceiverForm,
    removeSpecialReceiverForm,
    deleteSpecialReceiverForm,
    addSpecialSenderForm,
    removeSpecialSenderForm,
    deleteSpecialSenderForm
  };
};
const actions = {
  deleteEmailAlias: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.DELETE, user);
    const form = await superValidate(
      event.request,
      zod(deleteEmailAliasSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { email } = form.data;
    await prisma.emailAlias.deleteMany({
      where: {
        email
      }
    });
    if (await emailStillInUse(prisma, email)) {
      return message(form, {
        message: admin_emailalias_aliasRemoved(),
        type: "success"
      });
    } else {
      throw redirect(
        "/admin/email-alias",
        {
          message: admin_emailalias_aliasRemoved(),
          type: "success"
        },
        event
      );
    }
  },
  addPosition: async (event) => {
    const { user, prisma } = event.locals;
    authorize([apiNames.EMAIL_ALIAS.CREATE, apiNames.EMAIL_ALIAS.UPDATE], user);
    const form = await superValidate(event.request, zod(addPositionSchema));
    if (!form.valid) return fail(400, { form });
    const { positionId, email } = form.data;
    if (!isValidEmail(email)) {
      return setError(form, "email", admin_emailalias_invalidAddress());
    }
    const existingAlias = await prisma.emailAlias.findFirst({
      where: {
        email,
        positionId
      }
    });
    if (existingAlias) {
      return setError(
        form,
        "positionId",
        admin_emailalias_positionAlreadyExists()
      );
    }
    await prisma.emailAlias.create({
      data: {
        email,
        position: {
          connect: {
            id: positionId
          }
        }
      }
    });
    return message(form, {
      message: admin_emailalias_positionAdded(),
      type: "success"
    });
  },
  removePosition: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.UPDATE, user);
    const form = await superValidate(event.request, zod(removePositionSchema));
    if (!form.valid) return fail(400, { form });
    const { aliasId } = form.data;
    await prisma.emailAlias.delete({
      where: {
        id: aliasId
      }
    });
    return message(form, {
      message: admin_emailalias_positionRemoved(),
      type: "success"
    });
  },
  setCanSend: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.UPDATE, user);
    const form = await superValidate(event.request, zod(setCanSendSchema));
    if (!form.valid) return fail(400, { form });
    const { aliasId, canSend } = form.data;
    await prisma.emailAlias.update({
      where: {
        id: aliasId
      },
      data: {
        canSend
      }
    });
    return message(form, {
      message: admin_emailalias_positionRightsUpdated(),
      type: "success"
    });
  },
  deleteSpecialReceiver: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.DELETE, user);
    const form = await superValidate(
      event.request,
      zod(deleteEmailAliasSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { email } = form.data;
    await prisma.specialReceiver.deleteMany({
      where: {
        email
      }
    });
    if (await emailStillInUse(prisma, email)) {
      return message(form, {
        message: admin_emailalias_specialReceiversRemoved(),
        type: "success"
      });
    } else {
      throw redirect(
        "/admin/email-alias",
        {
          message: admin_emailalias_specialReceiversRemoved(),
          type: "success"
        },
        event
      );
    }
  },
  addSpecialReceiver: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.CREATE, user);
    const form = await superValidate(
      event.request,
      zod(addSpecialReceiverSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { email, targetEmailReceiver } = form.data;
    if (!isValidEmail(targetEmailReceiver)) {
      return setError(
        form,
        "targetEmailReceiver",
        admin_emailalias_invalidAddress()
      );
    }
    await prisma.specialReceiver.create({
      data: {
        email,
        targetEmail: targetEmailReceiver
      }
    });
    return message(form, {
      message: admin_emailalias_specialReceiverAdded(),
      type: "success"
    });
  },
  removeSpecialReceiver: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.DELETE, user);
    const form = await superValidate(
      event.request,
      zod(removeSpecialReceiverSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { id } = form.data;
    await prisma.specialReceiver.delete({
      where: {
        id
      }
    });
    return message(form, {
      message: admin_emailalias_specialReceiversRemoved(),
      type: "success"
    });
  },
  deleteSpecialSender: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.DELETE, user);
    const form = await superValidate(
      event.request,
      zod(deleteEmailAliasSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { email } = form.data;
    await prisma.specialSender.deleteMany({
      where: {
        email
      }
    });
    if (await emailStillInUse(prisma, email)) {
      return message(form, {
        message: admin_emailalias_specialSendersRemoved(),
        type: "success"
      });
    } else {
      throw redirect(
        "/admin/email-alias",
        {
          message: admin_emailalias_specialReceiversRemoved(),
          type: "success"
        },
        event
      );
    }
  },
  addSpecialSender: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.CREATE, user);
    const form = await superValidate(
      event.request,
      zod(addSpecialSenderSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { email, usernameSender } = form.data;
    if (!isValidEmail(email)) {
      return setError(form, "email", admin_emailalias_invalidAddress());
    }
    if (!await keycloak.hasUsername(usernameSender)) {
      return setError(
        form,
        "usernameSender",
        admin_emailalias_userNotInKeycloak()
      );
    }
    const keycloakId = await keycloak.getUserId(usernameSender);
    if (keycloakId == null) {
      return setError(
        form,
        "usernameSender",
        admin_emailalias_userNotInKeycloak()
      );
    }
    await prisma.specialSender.create({
      data: {
        email,
        studentId: usernameSender,
        keycloakId
      }
    });
    return message(form, {
      message: admin_emailalias_specialSenderAdded(),
      type: "success"
    });
  },
  removeSpecialSender: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.DELETE, user);
    const form = await superValidate(
      event.request,
      zod(removeSpecialSenderSchema)
    );
    if (!form.valid) return fail(400, { form });
    const { id } = form.data;
    await prisma.specialSender.delete({
      where: {
        id
      }
    });
    return message(form, {
      message: admin_emailalias_specialSenderAdded(),
      type: "success"
    });
  }
};
async function emailStillInUse(prisma, email) {
  const [aliasCount, receiverCount, senderCount] = await Promise.all([
    prisma.emailAlias.count({
      where: {
        email
      }
    }),
    prisma.specialReceiver.count({
      where: {
        email
      }
    }),
    prisma.specialSender.count({
      where: {
        email
      }
    })
  ]);
  return aliasCount + receiverCount + senderCount > 0;
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 37;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BZ4s4JbO.js')).default;
const server_id = "src/routes/(app)/admin/email-alias/[email]/+page.server.ts";
const imports = ["_app/immutable/nodes/37.C8s6s-dC.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=37-SfwHGWOK.js.map
