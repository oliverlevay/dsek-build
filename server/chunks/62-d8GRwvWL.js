import { i as interestedGoingSchema } from './schema3-YvxXxCE2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { e as eventPageLoad } from './EventPageLoad-CyGjGcfE.js';
import './schemas-CKip5ia7.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './utils2-CdAbGRJv.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'expo-server-sdk';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './server-DiSvHEoN.js';
import './constants-BTUpIS8C.js';
import './getEvents-gKry0X74.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './tags-SHR1oaXg.js';

const interestedAction = (isInterested, isGoing) => async ({ request, locals }) => {
  const { prisma, user, member } = locals;
  const form = await superValidate(request, zod(interestedGoingSchema));
  if (!form.valid) return fail(400, { form });
  const event = await prisma.event.update({
    where: { id: form.data.eventId },
    data: {
      interested: {
        [isInterested ? "connect" : "disconnect"]: {
          studentId: user?.studentId
        }
      },
      going: {
        [isGoing ? "connect" : "disconnect"]: {
          studentId: user?.studentId
        }
      }
    },
    select: {
      id: true,
      slug: true,
      title: true,
      author: {
        select: {
          id: true
        }
      }
    }
  });
  if (member) {
    if (isGoing) {
      await sendNotification({
        title: `${event.title}`,
        message: `${getFullName(member)} kommer på ditt event.`,
        type: NotificationType.EVENT_GOING,
        link: eventLink(event),
        memberIds: [event.author.id],
        fromMemberId: member.id
      });
    } else if (isInterested) {
      await sendNotification({
        title: `${event.title}`,
        message: `${getFullName(member)} är intresserad av ditt event.`,
        type: NotificationType.EVENT_INTERESTED,
        link: eventLink(event),
        memberIds: [event.author.id],
        fromMemberId: member.id
      });
    }
  }
  return message(form, {
    message: `${isInterested ? "intresserad av" : isGoing ? "kommer på" : "kommer inte/är inte intresserad av"} event`,
    type: "hidden"
  });
};
const load = eventPageLoad();
const actions = {
  interested: interestedAction(true, false),
  going: interestedAction(false, true),
  none: interestedAction(false, false)
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 62;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CkauTMOv.js')).default;
const server_id = "src/routes/(app)/events/+page.server.ts";
const imports = ["_app/immutable/nodes/62.mdf__ohO.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/EventPage.CHe4AA2A.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/SearchBar.D5otZFyl.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/TagSelector.BFldg1VB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/InterestedGoingButtons.Dpm6d72y.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/InterestedGoingList.DBGhCjvk.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=62-d8GRwvWL.js.map
