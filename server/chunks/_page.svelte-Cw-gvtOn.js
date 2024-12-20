import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { T as TicketForm } from './TicketForm-Q6v2ob6l.js';
import './lifecycle-DkuQBIPN.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './FormInput-Dxuw95TR.js';
import './Input-DbabE1Vy.js';
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
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './DateInput-zW8CcVNb.js';
import './EntitySearch-D4ZWMg82.js';
import 'dayjs';
import './FormCheckbox-1G3eAIE7.js';
import './FormSelect-D5CeY-lk.js';
import './types5-CwL0OX6I.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Skapa biljett" }, {}, {})} ${validate_component(TicketForm, "TicketForm").$$render($$result, { form: data.form }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cw-gvtOn.js.map
