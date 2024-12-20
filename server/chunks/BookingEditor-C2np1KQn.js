import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each, s as spread, d as escape_object } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { el as booking_goBack, e6 as booking_booking, em as booking_boardRoomWarning, e7 as booking_from, e8 as booking_until, e9 as booking_event, en as booking_accept, eo as booking_deny, ep as save, eq as booking_create } from './messages-D8OfyZiq.js';
import { S as StatusComponent } from './StatusComponent-NzEeBhxw.js';

const boardRoomId = "99854837-fdb9-4dba-85fc-86a5c514253c";
const BookingEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bookingRequest;
  let showBoardRooomWarning;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let { data } = $$props;
  const { form, errors, enhance, constraints } = superForm(data.form);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  let { mode = "create" } = $$props;
  let start = $form.start;
  let end = $form.end;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0) $$bindings.mode(mode);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    bookingRequest = data.booking;
    showBoardRooomWarning = $form.bookables.includes(boardRoomId);
    $$rendered = `<form method="POST" class="form-control mx-auto max-w-5xl gap-4">${mode === "review" ? `<div class="flex flex-col gap-5"><div class="w-fit"><a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking/admin`, void 0), 0)}><span class="i-mdi-arrow-expand-left"></span> ${escape(booking_goBack())}</a></div> ${bookingRequest && data.allBookingRequests ? `${validate_component(StatusComponent, "StatusComponent").$$render(
      $$result,
      {
        class: "flex-row",
        bookingRequest,
        bookingRequests: data.allBookingRequests
      },
      {
        bookingRequest: ($$value) => {
          bookingRequest = $$value;
          $$settled = false;
        },
        bookingRequests: ($$value) => {
          data.allBookingRequests = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>` : ``} <fieldset class="${[
      "input-bordered grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] rounded-xl border px-6 py-2",
      $errors.bookables?._errors ?? 0 > 0 ? "border-error" : ""
    ].join(" ").trim()}"><legend class="text-xl font-bold">${escape(booking_booking())}</legend> ${each(data.bookables, (bookable) => {
      return `<label class="label cursor-pointer justify-start gap-4 rounded-lg"><input type="checkbox" class="checkbox" name="bookables"${add_attribute("value", bookable.id, 0)} ${mode === "review" ? "disabled" : ""}${~$form.bookables.indexOf(bookable.id) ? add_attribute("checked", true, 1) : ""}> <span class="label-text">${escape(bookable.name)}</span> </label>`;
    })}</fieldset> ${showBoardRooomWarning ? `<div role="alert" class="alert alert-warning"><span class="i-mdi-alert-outline size-6"></span> <span>${escape(booking_boardRoomWarning())}</span></div>` : ``} <label><span class="label-text ml-2 font-bold">${escape(booking_from())}</span> <input${spread(
      [
        { type: "datetime-local" },
        { name: "start" },
        { placeholder: "Start" },
        { class: "input input-bordered w-full" },
        escape_object($constraints.start),
        { disabled: mode === "review" || null }
      ],
      {}
    )}${add_attribute("value", start, 0)}></label> <label><span class="label-text ml-2 font-bold">${escape(booking_until())}</span> <input${spread(
      [
        { type: "datetime-local" },
        { name: "end" },
        { placeholder: "End" },
        { class: "input input-bordered w-full" },
        escape_object($constraints.end),
        { disabled: mode === "review" || null }
      ],
      {
        classes: $errors.end ? "border-error" : ""
      }
    )}${add_attribute("value", end, 0)}></label> <label><span class="label-text ml-2 font-bold">${escape(booking_event())}</span> <input${spread(
      [
        { type: "text" },
        { name: "name" },
        { class: "input input-bordered w-full" },
        escape_object($constraints.name),
        { disabled: mode === "review" || null }
      ],
      {}
    )}${add_attribute("value", $form.name, 0)}></label> ${mode === "review" && bookingRequest ? `<div class="flex *:flex-1"><input hidden name="id" type="text"${add_attribute("value", bookingRequest.id, 0)}> <button${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/accept`, void 0), 0)} class="${[
      "btn btn-outline btn-success",
      bookingRequest.status === "ACCEPTED" ? "btn-disabled" : ""
    ].join(" ").trim()}"${add_attribute("aria-label", booking_accept(), 0)}>${escape(booking_accept())} <span class="i-mdi-check"></span></button> <button${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/reject`, void 0), 0)} class="${[
      "btn btn-outline btn-error",
      bookingRequest.status === "DENIED" ? "btn-disabled" : ""
    ].join(" ").trim()}"${add_attribute("aria-label", booking_deny(), 0)}>${escape(booking_deny())} <span class="i-mdi-close"></span></button></div>` : ``} ${mode !== "review" ? `<div class="flex *:flex-1"><a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/booking`, void 0), 0)}>${escape(booking_goBack())}</a> ${mode === "edit" ? `<button class="btn btn-primary">${escape(save())}</button>` : `${mode === "create" ? `<button class="btn btn-primary">${escape(booking_create())}</button>` : ``}`}</div>` : ``}</form>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});

export { BookingEditor as B };
//# sourceMappingURL=BookingEditor-C2np1KQn.js.map
