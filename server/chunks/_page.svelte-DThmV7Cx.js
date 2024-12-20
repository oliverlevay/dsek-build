import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { B as BookingCalendar } from './BookingCalendar-DPGGL41N.js';
import { B as BookingEditor } from './BookingEditor-C2np1KQn.js';
import { es as booking_reviewBooking } from './messages-D8OfyZiq.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './scheduler-CzeG9NBC.js';
import './member-DajX-teH.js';
import 'dayjs';
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
import './stringify-cFltMSLq.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './StatusComponent-NzEeBhxw.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: booking_reviewBooking() }, {}, {})} ${validate_component(BookingEditor, "BookingEditor").$$render($$result, { data, mode: "review" }, {}, {})} ${validate_component(BookingCalendar, "BookingCalendar").$$render($$result, Object.assign({}, data, { class: "mt-16" }), {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DThmV7Cx.js.map
