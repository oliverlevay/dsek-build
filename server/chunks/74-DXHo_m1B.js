import { k as keycloak } from './index5-CNIn8XSJ.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { B as BASIC_ARTICLE_FILTER } from './articles-Ot_X93Lk.js';
import { i as isAuthorized, a as authorize } from './authorization-DvGst16H.js';
import { g as getCurrentDoorPoliciesForMember } from './member2-BtEDLQG7.js';
import { m as memberSchema, e as emptySchema } from './schemas-CKip5ia7.js';
import { _ as members_errors_couldntPing, $ as members_errors_failedToFindMember, a0 as members_errors_memberDoesntExist, a1 as members_errors_couldntFetchMember, a2 as members_errors_couldntFetchArticles, a3 as members_errors_memberNotFound, a4 as members_errors_couldntFetchPings, a5 as members_memberUpdated, a6 as members_pingSent, a7 as members_errors_senderNotFound, a8 as members_errors_receiverNotFound } from './messages-D8OfyZiq.js';
import { e as error, f as fail, i as isHttpError } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { a as getFullName } from './member-DajX-teH.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { a as memberMedals, d as dateToSemester } from './medals-DM-PEtvm.js';
import '@keycloak/keycloak-admin-client';
import './shared-server-BfUoNEXY.js';
import './types2-CXiSJ5rH.js';
import './nollning-BGFMzAAg.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './runtime-BxW51cRH.js';
import './constants-BTUpIS8C.js';
import 'expo-server-sdk';

const sendPing = async (prisma, { link, fromMemberId, toMemberId }) => {
  const sendingMember = await assertMemberExists(
    prisma,
    fromMemberId,
    members_errors_senderNotFound()
  );
  const receivingMember = await assertMemberExists(
    prisma,
    toMemberId,
    members_errors_receiverNotFound()
  );
  try {
    const previousPing = await findPreviousPing(
      prisma,
      sendingMember.id,
      receivingMember.id
    );
    if (previousPing === null) {
      await performInitialPing(prisma, sendingMember.id, receivingMember.id);
    } else {
      await performSubsequentPing(
        prisma,
        sendingMember.id,
        receivingMember.id,
        previousPing
      );
    }
  } catch (e) {
    throw error(
      500,
      members_errors_couldntPing({
        e: e instanceof Error ? e.message : "???"
      })
    );
  }
  await sendNotification({
    title: "PING!",
    message: `${getFullName(sendingMember)} har pingat dig!`,
    type: NotificationType.PING,
    link,
    memberIds: [receivingMember.id],
    fromMemberId: sendingMember.id
  });
};
const assertMemberExists = async (prisma, member, errorMsg = members_errors_memberDoesntExist()) => {
  try {
    const foundMember = await prisma.member.findFirst({
      where: member.memberId ? { id: { equals: member.memberId } } : {
        studentId: member.studentId
      },
      select: {
        id: true,
        firstName: true,
        nickname: true,
        lastName: true
      }
    });
    if (foundMember == null || !foundMember) throw error(400, errorMsg);
    return foundMember;
  } catch (e) {
    console.error(e);
    throw error(
      500,
      members_errors_failedToFindMember({
        e: e instanceof Error ? e.message : "???"
      })
    );
  }
};
const findPreviousPing = (prisma, fromMemberId, toMemberId) => prisma.ping.findFirst({
  where: {
    OR: [
      {
        fromMemberId,
        toMemberId
      },
      {
        fromMemberId: toMemberId,
        toMemberId: fromMemberId
      }
    ]
  },
  select: {
    fromMemberId: true
  }
});
const performInitialPing = (prisma, fromMemberId, toMemberId) => prisma.ping.create({
  data: {
    fromMemberId,
    toMemberId,
    fromSentAt: /* @__PURE__ */ new Date(),
    createdAt: /* @__PURE__ */ new Date(),
    count: 1
  }
});
const performSubsequentPing = (prisma, fromMemberId, toMemberId, previousPing) => {
  const isSenderFromColumn = previousPing.fromMemberId === fromMemberId;
  return prisma.ping.update({
    where: {
      fromMemberId_toMemberId: {
        fromMemberId,
        toMemberId
      }
    },
    data: {
      fromSentAt: isSenderFromColumn ? /* @__PURE__ */ new Date() : void 0,
      toSentAt: isSenderFromColumn ? void 0 : /* @__PURE__ */ new Date(),
      count: { increment: 1 }
    }
  });
};
const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const { studentId } = params;
  const [memberResult, publishedArticlesResult, phadderGroupsResult] = await Promise.allSettled([
    prisma.member.findUnique({
      where: {
        studentId
      },
      include: {
        nollaIn: true,
        mandates: {
          include: {
            phadderIn: true,
            position: {
              include: {
                committee: true
              }
            }
          }
        },
        authoredEvents: {
          orderBy: {
            startDatetime: "desc"
          },
          take: 5
        },
        doorAccessPolicies: {}
      }
    }),
    prisma.article.findMany({
      where: {
        ...BASIC_ARTICLE_FILTER(),
        author: {
          type: {
            not: "Custom"
          },
          member: {
            studentId
          }
        }
      },
      orderBy: {
        publishedAt: "desc"
      },
      take: 5
    }),
    prisma.phadderGroup.findMany({
      orderBy: {
        year: "asc"
      }
    })
  ]);
  if (memberResult.status === "rejected")
    throw error(500, members_errors_couldntFetchMember());
  if (publishedArticlesResult.status === "rejected")
    throw error(500, members_errors_couldntFetchArticles());
  if (!memberResult.value) throw error(404, members_errors_memberNotFound());
  if (phadderGroupsResult.status === "rejected")
    throw error(505, phadderGroupsResult.reason);
  const member = memberResult.value;
  const doorAccess = member.id === user?.memberId ? await getCurrentDoorPoliciesForMember(prisma, studentId) : [];
  const email = user.studentId === studentId || isAuthorized(apiNames.MEMBER.SEE_EMAIL, user) ? member.email ?? (member.studentId !== null ? await keycloak.getEmail(member.studentId) : void 0) : void 0;
  try {
    return {
      form: await superValidate(member, zod(memberSchema)),
      pingForm: await superValidate(zod(emptySchema)),
      viewedMember: member,
      // https://github.com/Dsek-LTH/web/issues/194
      doorAccess,
      publishedArticles: publishedArticlesResult.value ?? [],
      email,
      medals: await memberMedals(
        prisma,
        member.id,
        dateToSemester(/* @__PURE__ */ new Date()) - 1
      ),
      phadderGroups: phadderGroupsResult.value,
      ping: user ? await prisma.ping.findFirst({
        where: {
          OR: [
            {
              fromMemberId: member.id,
              toMemberId: user.memberId
            },
            {
              fromMemberId: user.memberId,
              toMemberId: member.id
            }
          ]
        }
      }) : null
    };
  } catch {
    throw error(500, members_errors_couldntFetchPings());
  }
};
const updateSchema = memberSchema.pick({
  firstName: true,
  lastName: true,
  nickname: true,
  foodPreference: true,
  classProgramme: true,
  classYear: true,
  nollningGroupId: true
}).partial();
const actions = {
  updateFoodPreference: async ({ params, locals, request }) => {
    const { prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ foodPreference: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    const { studentId } = params;
    await prisma.member.update({
      where: { studentId },
      data: {
        foodPreference: form.data.foodPreference
      }
    });
    return message(form, {
      message: members_memberUpdated(),
      type: "success"
    });
  },
  update: async ({ params, locals, request }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(updateSchema));
    if (!form.valid) return fail(400, { form });
    const { studentId } = params;
    await prisma.member.update({
      where: { studentId },
      data: {
        ...form.data
      }
    });
    keycloak.updateProfile(
      studentId,
      form.data.firstName ?? "",
      form.data.lastName ?? ""
    );
    return message(form, {
      message: members_memberUpdated(),
      type: "success"
    });
  },
  ping: async ({ params, locals, request }) => {
    const { user, prisma } = locals;
    const form = await superValidate(request, zod(emptySchema));
    authorize(apiNames.MEMBER.PING, user);
    if (!user?.memberId) return fail(401, { form });
    const { studentId } = params;
    try {
      await sendPing(prisma, {
        link: `/members/${user.studentId}`,
        // link back to user who pinged
        fromMemberId: { memberId: user.memberId },
        toMemberId: { studentId }
      });
    } catch (e) {
      if (isHttpError(e)) {
        return message(
          form,
          {
            message: e.body.message,
            type: "error"
          },
          {
            status: e.status
          }
        );
      }
      return message(form, {
        message: `${e}`,
        type: "error"
      });
    }
    return message(form, {
      message: members_pingSent(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 74;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BsP_q9G3.js')).default;
const server_id = "src/routes/(app)/members/[studentId]/+page.server.ts";
const imports = ["_app/immutable/nodes/74.1x57Hxzn.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/programmes.DoECQYmx.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/FormSelect.w8sPLDn_.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/ClassBadge.D_Ryvt6R.js","_app/immutable/chunks/semesters.ADq63Rzt.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=74-DXHo_m1B.js.map
