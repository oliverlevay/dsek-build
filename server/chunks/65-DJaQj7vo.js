import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { a as authorize } from './authorization-DvGst16H.js';
import { e as eventPageLoad } from './EventPageLoad-CyGjGcfE.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './getEvents-gKry0X74.js';
import './events-CQw4QAxj.js';
import './types2-CXiSJ5rH.js';
import './schema3-YvxXxCE2.js';
import './schemas-CKip5ia7.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './utils2-CdAbGRJv.js';
import './tags-SHR1oaXg.js';
import './superValidate-C2lU2J3v.js';
import './constants-BTUpIS8C.js';

const loadFunc = eventPageLoad(true);
const load = (event) => {
  authorize(apiNames.EVENT.UPDATE, event.locals.user);
  return loadFunc(event);
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 65;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dx5C6tQg.js')).default;
const server_id = "src/routes/(app)/events/all-events/+page.server.ts";
const imports = ["_app/immutable/nodes/65.vnBIGt7j.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/EventPage.CHe4AA2A.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/SearchBar.D5otZFyl.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/TagSelector.BFldg1VB.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/TagChip.BKSCnMT_.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/datetime.BjlMtXqc.js","_app/immutable/chunks/InterestedGoingButtons.Dpm6d72y.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/InterestedGoingList.DBGhCjvk.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=65-DJaQj7vo.js.map
