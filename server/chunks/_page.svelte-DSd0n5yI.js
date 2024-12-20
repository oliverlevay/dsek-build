import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-BoMjCg5r.js';
import { ej as booking_editBooking, ek as booking_editBookingWarning } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { B as BookingEditor } from './BookingEditor-C2np1KQn.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { p as page } from './stores-ClpLLrvc.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './StatusComponent-NzEeBhxw.js';
import 'dayjs';
import 'tailwind-merge';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const isPending = data.booking.status === "PENDING";
  const isAdmin = isAuthorized(apiNames.BOOKINGS.UPDATE, $page.data.user);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: booking_editBooking() }, {}, {})} ${!(isAdmin || isPending) ? `<div role="alert" class="alert alert-warning mx-auto mb-8 max-w-5xl"><span class="i-mdi-warning"></span> <span>${escape(booking_editBookingWarning())}</span></div>` : ``} ${validate_component(BookingEditor, "BookingEditor").$$render($$result, { data, mode: "edit" }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DSd0n5yI.js.map
