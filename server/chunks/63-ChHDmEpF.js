import { g as getAllTaggedMembers, c as commentSchema, r as removeCommentSchema, a as commentAction, b as removeCommentAction } from './comments-DaxFEw57.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { b as getEvent } from './getEvents-gKry0X74.js';
import { i as isAuthorized, a as authorize } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { R as events_errors_eventNotFound, S as events_eventsDeleted, T as events_eventDeleted } from './messages-D8OfyZiq.js';
import { z } from './index-CuABlRvJ.js';
import { a as actionType, i as interestedGoingSchema } from './schema3-YvxXxCE2.js';
import 'isomorphic-dompurify';
import './constants-BTUpIS8C.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './schemas-CKip5ia7.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './utils2-CdAbGRJv.js';

const removeEventSchema = z.object({
  removeType: actionType
});
const removeEventAction = async (event) => {
  const { request, locals, params } = event;
  const { prisma, user } = locals;
  const form = await superValidate(request, zod(removeEventSchema));
  if (!form.valid) return fail(400, { form });
  authorize(apiNames.EVENT.DELETE, user);
  const existingEvent = await prisma.event.findUnique({
    where: {
      slug: params.slug
    }
  });
  if (!existingEvent) return error(404, events_errors_eventNotFound());
  if (form.data.removeType === "ALL") {
    await prisma.event.updateMany({
      where: {
        recurringParentId: existingEvent.recurringParentId
      },
      data: {
        removedAt: /* @__PURE__ */ new Date()
      }
    });
    throw redirect(
      "/events",
      {
        message: events_eventsDeleted(),
        type: "success"
      },
      event
    );
  } else if (form.data.removeType === "FUTURE") {
    await prisma.event.updateMany({
      where: {
        recurringParentId: existingEvent.recurringParentId,
        startDatetime: {
          gte: existingEvent.startDatetime
        }
      },
      data: {
        removedAt: /* @__PURE__ */ new Date()
      }
    });
  } else {
    await prisma.event.update({
      where: {
        id: existingEvent.id
      },
      data: {
        removedAt: /* @__PURE__ */ new Date()
      }
    });
    throw redirect(
      "/events",
      {
        message: events_eventDeleted(),
        type: "success"
      },
      event
    );
  }
};
const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const event = await getEvent(prisma, params.slug);
  if (event == void 0) {
    throw error(404, {
      message: events_errors_eventNotFound()
    });
  }
  const allTaggedMembers = await getAllTaggedMembers(prisma, event.comments);
  const canEdit = isAuthorized(apiNames.EVENT.UPDATE, user) || event.authorId === user.memberId;
  const canDelete = isAuthorized(apiNames.EVENT.DELETE, user);
  return {
    event,
    allTaggedMembers,
    canEdit,
    canDelete,
    commentForm: await superValidate(zod(commentSchema)),
    removeCommentForm: await superValidate(zod(removeCommentSchema)),
    removeEventForm: await superValidate(zod(removeEventSchema)),
    interestedGoingForm: await superValidate(zod(interestedGoingSchema))
  };
};
const actions = {
  comment: commentAction("EVENT"),
  removeComment: removeCommentAction("EVENT"),
  removeEvent: removeEventAction
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 63;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D9n1PzpI.js')).default;
const server_id = "src/routes/(app)/events/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/63.CNMTCdQ8.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/CommentSection.BdNojWkP.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/MemberSearch.DfsD4fsq.js","_app/immutable/chunks/EntitySearch.C78MTpyq.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/Event.CiuAbWEY.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/InterestedGoingButtons.Dpm6d72y.js","_app/immutable/chunks/InterestedGoingList.DBGhCjvk.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=63-ChHDmEpF.js.map
