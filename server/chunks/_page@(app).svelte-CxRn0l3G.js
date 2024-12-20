import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { g6 as events_createEvent } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { E as EventEditor } from './EventEditor-_z5_8T97.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './FormCheckbox-1G3eAIE7.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './FormInput-Dxuw95TR.js';
import './Input-DbabE1Vy.js';
import './FormSelect-D5CeY-lk.js';
import './FormSubmitButton-CTUAD0FR.js';
import './LoadingButton-DNerNunK.js';
import './TagChip-uoZb8u8g.js';
import './TagSelector-Br3xhJpq.js';
import './schema3-YvxXxCE2.js';
import './schemas-CKip5ia7.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './utils2-CdAbGRJv.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './Event-Dbp3kXIa.js';
import './datetime-F2VqCxJb.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './client3-CIDcnctW.js';
import './LangTabs-BYaI1O9N.js';
import './FormFileInput-BONk2osz.js';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: events_createEvent() }, {}, {})} ${validate_component(EventEditor, "EventEditor").$$render(
    $$result,
    {
      data: data.form,
      allTags: data.allTags,
      recurringParentId: null,
      creating: true
    },
    {},
    {}
  )}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-CxRn0l3G.js.map
