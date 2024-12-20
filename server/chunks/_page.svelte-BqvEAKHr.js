import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { bU as bookings, e2 as booking_deleteTitle, e3 as booking_delete, e4 as booking_createBooking, e5 as booking_manageBookings, e6 as booking_booking, e7 as booking_from, e8 as booking_until, e9 as booking_event, ea as booking_status, eb as booking_edit } from './messages-D8OfyZiq.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { S as StatusComponent } from './StatusComponent-NzEeBhxw.js';
import dayjs from 'dayjs';
import { C as ConfirmDialog } from './ConfirmDialog-BmX2ArLQ.js';
import { B as BookingCalendar } from './BookingCalendar-DPGGL41N.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './runtime-BxW51cRH.js';
import './index-BHX467Gw.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './scheduler-CzeG9NBC.js';
import './member-DajX-teH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let deleteModal;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: bookings() }, {}, {})} <div class="mb-8 flex gap-4"><a class="btn btn-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/create`, void 0), 0)}>+ ${escape(booking_createBooking())}</a> ${isAuthorized(apiNames.BOOKINGS.UPDATE, $page.data.user) ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/admin`, void 0), 0)}>${escape(booking_manageBookings())}</a>` : ``}</div> ${data.bookingRequests.length === 0 ? `${validate_component(BookingCalendar, "BookingCalendar").$$render($$result, Object.assign({}, data), {}, {})}` : `<div class="overflow-x-auto"><table class="table"><thead><tr class="bg-base-200"><th>${escape(booking_booking())}</th> <th>${escape(booking_from())}</th> <th>${escape(booking_until())}</th> <th>${escape(booking_event())}</th> <th>${escape(booking_status())}</th> <th></th></tr></thead> <tbody>${each(data.bookingRequests, (bookingRequest) => {
      return `<tr><td>${each(bookingRequest.bookables.map((a) => a.name), (bookable) => {
        return `<p class="min-w-max">${escape(bookable)}</p>`;
      })}</td> <td>${escape(dayjs(bookingRequest.start).format("YYYY-MM-DD HH:mm"))}</td> <td>${escape(dayjs(bookingRequest.end).format("YYYY-MM-DD HH:mm"))}</td> <td>${escape(bookingRequest.event)}</td> <td>${validate_component(StatusComponent, "StatusComponent").$$render(
        $$result,
        {
          class: "flex-col",
          bookingRequest,
          bookingRequests: data.bookingRequests
        },
        {
          bookingRequest: ($$value) => {
            bookingRequest = $$value;
            $$settled = false;
          },
          bookingRequests: ($$value) => {
            data.bookingRequests = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td> <td><div class="form-control gap-2"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/${bookingRequest.id}/edit`, void 0), 0)} class="btn btn-xs px-8">${escape(booking_edit())}</a> <button class="btn btn-xs px-8">${escape(booking_delete())}</button> </div></td> </tr>`;
    })}</tbody></table></div>`} ${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
      $$result,
      {
        title: booking_deleteTitle(),
        confirmText: booking_delete(),
        confirmClass: "btn-error",
        formTarget: "/booking?/delete",
        formData: { id: "" },
        modal: deleteModal
      },
      {
        modal: ($$value) => {
          deleteModal = $$value;
          $$settled = false;
        }
      },
      {
        description: () => {
          return `<p slot="description">${``}</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BqvEAKHr.js.map
