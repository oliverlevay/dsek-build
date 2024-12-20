import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { G as GoverningDocumentEditor } from './GoverningDocumentEditor-BAztl6f8.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './Input-DbabE1Vy.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: data.form.data.title }, {}, {})} ${validate_component(GoverningDocumentEditor, "GoverningDocumentEditor").$$render(
    $$result,
    {
      isCreating: false,
      data: data.form,
      documentId: $page.params["id"]
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-F2eSiZz8.js.map
