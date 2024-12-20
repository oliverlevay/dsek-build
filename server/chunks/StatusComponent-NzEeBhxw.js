import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import dayjs from 'dayjs';
import { ec as booking_accepted, ed as booking_denied, ee as booking_pending, ef as booking_conflictWith, eg as booking_conflict } from './messages-D8OfyZiq.js';
import { twMerge } from 'tailwind-merge';

const StatusComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let otherBookingRequests;
  let start;
  let end;
  let conflict;
  let conflictingBookables;
  let conflictError;
  let conflictWarning;
  let { bookingRequest } = $$props;
  let { bookingRequests } = $$props;
  let { class: clazz = void 0 } = $$props;
  if ($$props.bookingRequest === void 0 && $$bindings.bookingRequest && bookingRequest !== void 0) $$bindings.bookingRequest(bookingRequest);
  if ($$props.bookingRequests === void 0 && $$bindings.bookingRequests && bookingRequests !== void 0) $$bindings.bookingRequests(bookingRequests);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  otherBookingRequests = bookingRequests.filter((br) => br.id !== bookingRequest.id && br.status !== "DENIED");
  start = dayjs(bookingRequest.start);
  end = dayjs(bookingRequest.end);
  conflict = otherBookingRequests.find((br) => dayjs(br.start).isBefore(end) && dayjs(br.end).isAfter(start) && br.bookables.some((ba) => bookingRequest.bookables.map((ba2) => ba2.id).includes(ba.id)));
  conflictingBookables = conflict?.bookables.filter((b) => bookingRequest.bookables.map((ba) => ba.id).includes(b.id)).map((b) => b.name).join(", ");
  conflictError = bookingRequest.status !== "DENIED" && conflict?.status === "ACCEPTED";
  conflictWarning = conflict && !conflictError;
  return `<div${add_attribute("class", twMerge("flex gap-1", clazz), 0)}>${bookingRequest.status === "ACCEPTED" ? `<div class="badge badge-success"><span class="i-mdi-check-circle mr-1"></span>${escape(booking_accepted())}</div>` : `${bookingRequest.status === "DENIED" ? `<div class="badge badge-error"><span class="i-mdi-denied mr-1"></span>${escape(booking_denied())}</div>` : `${bookingRequest.status === "PENDING" ? `<div class="badge badge-info"><span class="i-mdi-hourglass mr-1"></span>${escape(booking_pending())}</div>` : ``}`}`} ${conflict ? `<div class="${[
    "badge",
    (conflictError ? "badge-error" : "") + " " + (conflictWarning ? "badge-secondary" : "")
  ].join(" ").trim()}"><div class="tooltip flex items-center"${add_attribute(
    "data-tip",
    booking_conflictWith({
      event: `${conflict.event}`,
      bookables: `${conflictingBookables}`
    }),
    0
  )}><span class="i-mdi-info mr-1"></span>${escape(booking_conflict())}</div></div>` : ``}</div>`;
});

export { StatusComponent as S };
//# sourceMappingURL=StatusComponent-NzEeBhxw.js.map
