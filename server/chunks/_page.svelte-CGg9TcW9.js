import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { G as GoverningDocumentEditor } from './GoverningDocumentEditor-BAztl6f8.js';
import { bN as documents_governingDocuments } from './messages-D8OfyZiq.js';
import './lifecycle-DkuQBIPN.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './Input-DbabE1Vy.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: documents_governingDocuments() }, {}, {})} ${validate_component(GoverningDocumentEditor, "GoverningDocumentEditor").$$render(
    $$result,
    {
      isCreating: true,
      documentId: void 0,
      data: data.form
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CGg9TcW9.js.map
