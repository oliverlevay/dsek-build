import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, k as setError, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { g as getEmailDomains, f as fuseEmail, i as isValidEmail } from './emailutils-BD_fgkxR.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import { d as admin_emailalias_addressCreated, f as admin_emailalias_invalidDomain, g as admin_emailalias_invalidAddress, h as admin_emailalias_nonexistentPosition, i as admin_emailalias_aliasAlreadyExists, j as admin_emailalias_userNotInKeycloak } from './messages-D8OfyZiq.js';
import './constants-BTUpIS8C.js';
import '@keycloak/keycloak-admin-client';
import './shared-server-BfUoNEXY.js';
import './runtime-BxW51cRH.js';

const createEmailPositionSchema = z.object({
  localPartAlias: z.string().toLowerCase(),
  domainAlias: z.string(),
  positionIdAlias: z.string()
});
const createEmailSpecialSenderSchema = z.object({
  localPartSender: z.string().toLowerCase(),
  domainSender: z.string(),
  usernameSender: z.string(),
  keycloakIdSender: z.string()
});
const createEmailSpecialReceiverSchema = z.object({
  localPartReceiver: z.string().toLowerCase(),
  domainReceiver: z.string(),
  targetEmailReceiver: z.string().email()
});
const load = async (event) => {
  const { prisma } = event.locals;
  const [
    createEmailPositionForm,
    createEmailSpecialSenderForm,
    createEmailSpecialReceiverForm
  ] = await Promise.all([
    await superValidate(event.request, zod(createEmailPositionSchema)),
    await superValidate(event.request, zod(createEmailSpecialSenderSchema)),
    await superValidate(event.request, zod(createEmailSpecialReceiverSchema))
  ]);
  const [emailAliases, positions, specialReceivers, specialSenders] = await Promise.all([
    await prisma.emailAlias.findMany({
      orderBy: {
        email: "asc"
      }
    }),
    await prisma.position.findMany({
      where: {
        active: true
      },
      orderBy: {
        name: "asc"
      }
    }),
    await prisma.specialReceiver.findMany({
      orderBy: {
        email: "asc"
      }
    }),
    await prisma.specialSender.findMany({
      orderBy: {
        email: "asc"
      }
    })
  ]);
  const domains = getEmailDomains();
  return {
    emailAliases,
    specialReceivers,
    specialSenders,
    positions,
    domains,
    createEmailPositionForm,
    createEmailSpecialSenderForm,
    createEmailSpecialReceiverForm
  };
};
const actions = {
  createEmailPosition: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.CREATE, user);
    const form = await superValidate(
      event.request,
      zod(createEmailPositionSchema)
    );
    if (!form.valid) return fail(400, { form });
    const {
      localPartAlias: localPart,
      positionIdAlias: positionId,
      domainAlias: domain
    } = form.data;
    if (!getEmailDomains().includes(domain)) {
      return setError(form, "domainAlias", admin_emailalias_invalidDomain());
    }
    const email = fuseEmail({
      localPart,
      domain
    });
    if (email == null || !isValidEmail(email)) {
      return setError(
        form,
        "localPartAlias",
        admin_emailalias_invalidAddress()
      );
    }
    const position = await prisma.position.findUnique({
      where: {
        id: positionId
      }
    });
    if (position == null) {
      return setError(
        form,
        "positionIdAlias",
        admin_emailalias_nonexistentPosition()
      );
    }
    const existingEmailAlias = await prisma.emailAlias.findFirst({
      where: {
        AND: {
          positionId,
          email
        }
      }
    });
    if (existingEmailAlias != null) {
      return setError(
        form,
        "localPartAlias",
        admin_emailalias_aliasAlreadyExists()
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
      message: admin_emailalias_addressCreated(),
      type: "success"
    });
  },
  createEmailSpecialSender: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.CREATE, user);
    const form = await superValidate(
      event.request,
      zod(createEmailSpecialSenderSchema)
    );
    if (!form.valid) return fail(400, { form });
    const {
      localPartSender: localPart,
      domainSender: domain,
      usernameSender: username
    } = form.data;
    const email = fuseEmail({
      localPart,
      domain
    });
    if (email == null || !isValidEmail(email)) {
      return setError(
        form,
        "localPartSender",
        admin_emailalias_invalidAddress()
      );
    }
    const existingEmailAlias = await prisma.emailAlias.findFirst({
      where: {
        email
      }
    });
    if (existingEmailAlias != null) {
      return setError(
        form,
        "localPartSender",
        admin_emailalias_aliasAlreadyExists()
      );
    }
    const existingSpecialSender = await prisma.specialSender.findFirst({
      where: {
        email
      }
    });
    if (existingSpecialSender != null) {
      return setError(
        form,
        "localPartSender",
        admin_emailalias_aliasAlreadyExists()
      );
    }
    const usernameInKeycloak = await keycloak.hasUsername(username);
    if (!usernameInKeycloak) {
      return setError(
        form,
        "usernameSender",
        admin_emailalias_userNotInKeycloak()
      );
    }
    const keycloakId = await keycloak.getUserId(username);
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
        studentId: username,
        keycloakId
      }
    });
    return message(form, {
      message: admin_emailalias_addressCreated(),
      type: "success"
    });
  },
  createEmailSpecialReceiver: async (event) => {
    const { user, prisma } = event.locals;
    authorize(apiNames.EMAIL_ALIAS.CREATE, user);
    const form = await superValidate(
      event.request,
      zod(createEmailSpecialReceiverSchema)
    );
    if (!form.valid) return fail(400, { form });
    const {
      localPartReceiver: localPart,
      domainReceiver: domain,
      targetEmailReceiver: targetEmail
    } = form.data;
    const email = fuseEmail({
      localPart,
      domain
    });
    if (email == null || !isValidEmail(email)) {
      return setError(
        form,
        "localPartReceiver",
        admin_emailalias_invalidAddress()
      );
    }
    const existingEmailAlias = await prisma.emailAlias.findFirst({
      where: {
        email
      }
    });
    if (existingEmailAlias != null) {
      return setError(
        form,
        "localPartReceiver",
        admin_emailalias_aliasAlreadyExists()
      );
    }
    const existingSpecialReceiver = await prisma.specialReceiver.findFirst({
      where: {
        email,
        targetEmail
      }
    });
    if (existingSpecialReceiver != null) {
      return setError(
        form,
        "localPartReceiver",
        admin_emailalias_aliasAlreadyExists()
      );
    }
    await prisma.specialReceiver.create({
      data: {
        email,
        targetEmail
      }
    });
    return message(form, {
      message: admin_emailalias_addressCreated(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 36;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DHPlqHOC.js')).default;
const server_id = "src/routes/(app)/admin/email-alias/+page.server.ts";
const imports = ["_app/immutable/nodes/36.BJp4Y6Be.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=36-EslvpSxN.js.map
