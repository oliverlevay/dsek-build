import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from './ssr-BoMjCg5r.js';
import { b as invalidate } from './client-yexbOeKf.js';
import { p as page } from './stores-ClpLLrvc.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { T as Timer, S as ScrollingNumber } from './ScrollingNumber-DeH67l7m.js';
import { n as now } from './date-5_FJIXnV.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { hZ as tickets_buyButton_partOfLottery, hE as cart_reservation_queuePosition, h_ as tickets_buyButton_inQueue, h$ as tickets_buyButton_inCart, i0 as tickets_buyButton_soldOut, i1 as tickets_buyButton_alreadyOwned, i2 as tickets_buyButton_enterQueue, i3 as tickets_buyButton_getLotteryEntry, i4 as tickets_buyButton_get, i5 as tickets_buyButton_purchase, i6 as tickets_buyButton_releasesIn, i7 as tickets_buyButton_opensIn, i8 as tickets_buyButton_logInToBuy } from './messages-D8OfyZiq.js';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

const BuyButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartPath;
  let isUpcoming;
  let isCurrentlyAvailable;
  let isInGracePeriod;
  let $now, $$unsubscribe_now;
  let $page, $$unsubscribe_page;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isSubmitting } = $$props;
  let { ticket } = $$props;
  let { class: clazz = void 0 } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.isSubmitting === void 0 && $$bindings.isSubmitting && isSubmitting !== void 0) $$bindings.isSubmitting(isSubmitting);
  if ($$props.ticket === void 0 && $$bindings.ticket && ticket !== void 0) $$bindings.ticket(ticket);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  cartPath = $page.data["paths"]?.["cart"] ?? "/shop/cart";
  isUpcoming = ticket.availableFrom > $now;
  isCurrentlyAvailable = !isUpcoming && (!ticket.availableTo || ticket.availableTo > $now);
  isInGracePeriod = ticket.gracePeriodEndsAt > $now;
  {
    if (isCurrentlyAvailable && ticket.isInUsersCart && isInGracePeriod && $now > ticket.gracePeriodEndsAt) {
      invalidate();
    }
  }
  $$unsubscribe_now();
  $$unsubscribe_page();
  return ` ${isAuthorized(apiNames.WEBSHOP.PURCHASE, $page.data.user) ? `${isCurrentlyAvailable ? `${ticket.isInUsersCart ? `${isInGracePeriod ? `<span${add_attribute("class", twMerge("text-xl", clazz), 0)}>${escape(tickets_buyButton_partOfLottery())} ${validate_component(Timer, "Timer").$$render(
    $$result,
    {
      milliseconds: ticket.gracePeriodEndsAt.valueOf() - $now.valueOf()
    },
    {},
    {}
  )}</span>` : `<a type="button"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(cartPath, void 0), 0)} class="btn btn-primary">${ticket.userReservations.length > 0 ? (() => {
    let position = (ticket.userReservations[0]?.order ?? -100) + 1;
    return ` ${position >= 0 ? `<span>${escape(cart_reservation_queuePosition())} ${validate_component(ScrollingNumber, "ScrollingNumber").$$render($$result, { number: position }, {}, {})}</span>` : `${escape(tickets_buyButton_inQueue())}`}`;
  })() : `${escape(tickets_buyButton_inCart())}`}</a>`}` : `${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      type: "submit",
      disabled: isSubmitting || ticket.userAlreadyHasMax || ticket.ticketsLeft <= 0,
      class: "btn btn-primary",
      onClick: (e) => {
        e.stopPropagation();
      }
    },
    {},
    {
      default: () => {
        return `${ticket.ticketsLeft <= 0 ? `${escape(tickets_buyButton_soldOut())}` : `${ticket.userAlreadyHasMax ? `${escape(tickets_buyButton_alreadyOwned())}` : `${ticket.hasQueue ? `${escape(tickets_buyButton_enterQueue())}` : `${isInGracePeriod ? `${escape(tickets_buyButton_getLotteryEntry())}` : `${ticket.price === 0 ? `${escape(tickets_buyButton_get())}` : `${escape(tickets_buyButton_purchase())}`}`}`}`}`}`;
      }
    }
  )}`}` : `${isUpcoming ? `${ticket.availableFrom.valueOf() - $now.valueOf() < 1e3 * 60 * 5 ? ` <span${add_attribute("class", clazz, 0)}>${escape(tickets_buyButton_releasesIn())} ${validate_component(Timer, "Timer").$$render(
    $$result,
    {
      milliseconds: ticket.availableFrom.valueOf() - $now.valueOf()
    },
    {},
    {}
  )}</span>` : `<span${add_attribute("class", clazz, 0)}>${escape(tickets_buyButton_opensIn())} ${escape(dayjs(ticket.availableFrom).fromNow())}</span>`}` : ``}`}` : `<button type="button" disabled class="btn btn-disabled">${escape(tickets_buyButton_logInToBuy())}</button>`}`;
});

export { BuyButton as B };
//# sourceMappingURL=BuyButton-CFG3tzT1.js.map
