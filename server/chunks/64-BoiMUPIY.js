import { e as eventSchema, a as actionType } from './schema3-YvxXxCE2.js';
import { u as updateEvent } from './actions-Bi16y7PO.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { R as events_errors_eventNotFound, U as events_errors_recurringParentNotFound } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { g as getAllTags } from './tags-SHR1oaXg.js';
import { z } from './index-CuABlRvJ.js';
import './schemas-CKip5ia7.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './utils2-CdAbGRJv.js';
import './client3-CIDcnctW.js';
import './uploadFiles-C03MzR76.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import 'path';
import 'sharp';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './redirect-A1ZqWr7F.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './slugify-DXeN2Lma.js';
import 'isomorphic-dompurify';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import './types2-CXiSJ5rH.js';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const allTags = await getAllTags(prisma, true);
  const event = await prisma.event.findUnique({
    where: {
      slug: params.slug
    },
    include: {
      tags: true
    }
  });
  if (!event) {
    throw error(404, events_errors_eventNotFound());
  }
  if (event.authorId !== user.memberId) authorize(apiNames.EVENT.UPDATE, user);
  const isRecurring = event.recurringParentId !== null;
  const recurringEvent = isRecurring ? await prisma.recurringEvent.findUnique({
    where: {
      id: event.recurringParentId ?? ""
    }
  }) : null;
  if (isRecurring && !recurringEvent) {
    error(500, events_errors_recurringParentNotFound());
  }
  const completeEvent = {
    ...event,
    isRecurring,
    recurringType: recurringEvent?.recurringType,
    recurringEndDatetime: recurringEvent?.endDatetime,
    separationCount: recurringEvent?.separationCount
  };
  return {
    allTags,
    event,
    recurringParentId: event?.recurringParentId,
    form: await superValidate(
      completeEvent,
      zod(eventSchema.and(z.object({ editType: actionType })))
    )
  };
};
const actions = {
  default: updateEvent
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 64;
let component_cache;
const component = async () => component_cache ??= (await import('./_page@(app).svelte-uikTsuWe.js')).default;
const server_id = "src/routes/(app)/events/[slug]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/64.DfpbN9iT.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/EventEditor.ETLapV9y.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/FormCheckbox.BoNvyo-t.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/FormInput.DvRHd4up.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/FormSelect.w8sPLDn_.js","_app/immutable/chunks/FormSubmitButton.zmtSKK1O.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/TagSelector.BFldg1VB.js","_app/immutable/chunks/programmes.DoECQYmx.js","_app/immutable/chunks/index.DXqQCM1T.js","_app/immutable/chunks/types.BgAlWwrF.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/Event.CiuAbWEY.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/LangTabs.D_AYhfI9.js","_app/immutable/chunks/FormFileInput.mN0v36sS.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=64-BoiMUPIY.js.map
