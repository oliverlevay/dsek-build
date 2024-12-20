import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import dayjs from 'dayjs';
import { S as StatusComponent } from './StatusComponent-NzEeBhxw.js';
import './client-yexbOeKf.js';
import { a as getFullName } from './member-DajX-teH.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { bU as bookings, e2 as booking_deleteTitle, e3 as booking_delete, en as booking_accept, eo as booking_deny, eb as booking_edit, el as booking_goBack, e4 as booking_createBooking, e6 as booking_booking, e7 as booking_from, e8 as booking_until, e9 as booking_event, er as booking_responsible, ea as booking_status } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { C as ConfirmDialog } from './ConfirmDialog-BmX2ArLQ.js';
import 'tailwind-merge';
import './exports-BGi7-Rnc.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: bookings() }, {}, {})} <div class="mb-8 flex gap-4"><a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking`, void 0), 0)}><span class="i-mdi-arrow-expand-left"></span> ${escape(booking_goBack())}</a> <a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/create`, void 0), 0)}>${escape(booking_createBooking())}</a></div> <div class="overflow-x-auto"><table class="table"><thead><tr class="bg-base-200"><th>${escape(booking_booking())}</th> <th>${escape(booking_from())}</th> <th>${escape(booking_until())}</th> <th>${escape(booking_event())}</th> <th>${escape(booking_responsible())}</th> <th>${escape(booking_status())}</th> <th></th></tr></thead> <tbody>${each(data.bookingRequests, (bookingRequest) => {
      return `<tr><td>${each(bookingRequest.bookables.map((a) => a.name), (bookable) => {
        return `<p class="min-w-max">${escape(bookable)}</p>`;
      })}</td> <td>${escape(dayjs(bookingRequest.start).format("YYYY-MM-DD HH:mm"))}</td> <td>${escape(dayjs(bookingRequest.end).format("YYYY-MM-DD HH:mm"))}</td> <td><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/admin/${bookingRequest.id}`, void 0), 0)} class="link-hover link">${escape(bookingRequest.event)} </a></td> <td><div class="flex items-center gap-2">${bookingRequest.booker ? `${validate_component(MemberAvatar, "MemberAvatar").$$render(
        $$result,
        {
          member: bookingRequest.booker,
          class: "size-5 flex-shrink-0"
        },
        {},
        {}
      )} <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${bookingRequest.booker.studentId}`, void 0), 0)} class="link-hover link">${escape(getFullName(bookingRequest.booker, { hideNickname: true }))} </a>` : ``} </div></td> <td>${validate_component(StatusComponent, "StatusComponent").$$render(
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
      )}</td> <td><form method="POST" class="flex gap-2"${add_attribute("id", `form-${bookingRequest.id}`, 0)}><input hidden name="id" type="text"${add_attribute("value", bookingRequest.id, 0)}> <button${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/accept`, void 0), 0)} class="${[
        "btn btn-outline btn-xs",
        bookingRequest.status === "ACCEPTED" ? "btn-disabled" : ""
      ].join(" ").trim()}"${add_attribute("aria-label", booking_accept(), 0)}><span class="i-mdi-check"></span></button> <button${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/reject`, void 0), 0)} class="${[
        "btn btn-outline btn-xs",
        bookingRequest.status === "DENIED" ? "btn-disabled" : ""
      ].join(" ").trim()}"${add_attribute("aria-label", booking_deny(), 0)}><span class="i-mdi-close"></span></button> <hr class="mx-2"> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/${bookingRequest.id}/edit`, void 0), 0)} class="btn btn-outline btn-xs"${add_attribute("aria-label", booking_edit(), 0)}><span class="i-mdi-edit"></span></a> <button class="btn btn-outline btn-xs" type="button"${add_attribute("aria-label", booking_delete(), 0)} data-svelte-h="svelte-1ji5rm8"><span class="i-mdi-delete"></span></button> </form></td> </tr>`;
    })}</tbody></table></div> ${validate_component(ConfirmDialog, "ConfirmDialog").$$render(
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
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BPU6n6Zo.js.map
