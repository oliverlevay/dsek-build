import { b as subscribe, f as getContext, h as is_promise, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { F as FoodPreferenceModal } from './ScrollingNumber-DeH67l7m.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { n as now } from './date-5_FJIXnV.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { bL as tickets, hU as tickets_availableNow, hV as tickets_upcoming, hW as tickets_past, bG as navbar_userMenu_inventory, bH as navbar_userMenu_cart, hX as tickets_createNew, hY as tickets_card_stockLeft } from './messages-D8OfyZiq.js';
import { N as NavIcon } from './NavIcon-85EhGWcK.js';
import { P as Price } from './Price-DdMCfeZI.js';
import './client-yexbOeKf.js';
import { B as BuyButton } from './BuyButton-CFG3tzT1.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import dayjs from 'dayjs';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './runtime-BxW51cRH.js';
import './DsekLogo-nckDQWC4.js';
import './exports-BGi7-Rnc.js';
import './LoadingButton-DNerNunK.js';

const TicketActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ticket } = $$props;
  let isSubmitting = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.ticket === void 0 && $$bindings.ticket && ticket !== void 0) $$bindings.ticket(ticket);
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/addToCart`, void 0), 0)} class="card-actions justify-end"><input type="hidden" name="ticketId"${add_attribute("value", ticket.id, 0)}> ${validate_component(BuyButton, "BuyButton").$$render($$result, { ticket, isSubmitting }, {}, {})}</form>`;
});
const TicketEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date;
  let { event } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  date = dayjs(event.startDatetime);
  return `<figure class="relative aspect-video"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " cover photo"}" class="aspect-video object-cover"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-base-100 bg-opacity-75 transition-all group-hover:opacity-100 md:opacity-0"><h6 class="text-xl font-semibold">${escape(event.title)}</h6> <h6 class="-mt-1 text-sm opacity-80">${date.year() === (/* @__PURE__ */ new Date()).getFullYear() ? `${escape(date.format("dddd Do MMM"))}` : `${escape(date.format("dddd Do MMM, YYYY"))}`}</h6> <h6 class="mx-4 text-center">${escape(event.shortDescription)}</h6> <h6 class="absolute left-4 top-4">${escape(event.organizer)}</h6> <h6 class="absolute right-4 top-4">${escape(event.location)}</h6></div></figure>`;
});
const TicketCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ticket } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.ticket === void 0 && $$bindings.ticket && ticket !== void 0) $$bindings.ticket(ticket);
  return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/tickets/${ticket.id}`, void 0), 0)} class="group card card-compact overflow-hidden bg-base-300 shadow-xl">${validate_component(TicketEvent, "TicketEvent").$$render($$result, { event: ticket.event }, {}, {})} <div class="card-body"><div class="flex items-start justify-between"><span class="card-title">${escape(ticket.title)}</span> <div class="flex flex-col">${validate_component(Price, "Price").$$render($$result, { price: ticket.price, class: "card-title" }, {}, {})} ${ticket.ticketsLeft < 10 && ticket.ticketsLeft > 0 ? `<span class="text-right">${escape(tickets_card_stockLeft({ stock: ticket.ticketsLeft }))}</span>` : ``}</div></div> ${ticket.description ? `<span>${escape(ticket.description)}</span>` : ``} ${validate_component(TicketActions, "TicketActions").$$render($$result, { ticket }, {}, {})}</div></a>`;
});
const TicketSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { tickets: tickets2 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.tickets === void 0 && $$bindings.tickets && tickets2 !== void 0) $$bindings.tickets(tickets2);
  return `${tickets2.length > 0 ? `<section><h3 class="mb-2 text-xl font-semibold">${escape(title)}</h3> <ul class="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-3">${each(tickets2, (ticket) => {
    return `${validate_component(TicketCard, "TicketCard").$$render($$result, { ticket }, {}, {})}`;
  })}</ul></section>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTickets;
  let upcomingTickets;
  let pastTickets;
  let $now, $$unsubscribe_now;
  let $page, $$unsubscribe_page;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  activeTickets = data.tickets.filter((ticket) => ticket.availableFrom <= $now && (ticket.availableTo === null || ticket.availableTo >= $now));
  upcomingTickets = data.tickets.filter((ticket) => ticket.availableFrom > $now);
  pastTickets = data.tickets.filter((ticket) => ticket.availableTo && ticket.availableTo < $now);
  $$unsubscribe_now();
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: tickets() }, {}, {})} ${validate_component(FoodPreferenceModal, "FoodPreferenceModal").$$render($$result, {}, {}, {})} <article class="flex flex-col gap-4">${$page.data.isApp ? `<div class="flex gap-4 [&>*]:flex-1"><a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`inventory`, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: "i-mdi-treasure-chest" }, {}, {})} ${escape(navbar_userMenu_inventory())}  ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(unconsumed) {
      return ` ${unconsumed ? `<span class="badge badge-primary badge-sm">${escape(unconsumed)}</span>` : ``} `;
    }(__value);
  }(data.shopItemCounts?.unconsumed)}</a> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(inCart) {
      return ` ${inCart ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`cart`, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: "i-mdi-cart" }, {}, {})} ${escape(navbar_userMenu_cart())} <span class="badge badge-error badge-sm">${escape(inCart)}</span></a>` : ``} `;
    }(__value);
  }(data.shopItemCounts?.inCart)}</div>` : ``} <div class="flex gap-4">${isAuthorized(apiNames.WEBSHOP.CREATE, data.user) ? `<a class="btn btn-secondary self-start"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/tickets/create`, void 0), 0)}>${escape(tickets_createNew())}</a>` : ``} ${isAuthorized(apiNames.WEBSHOP.MANAGE, data.user) ? `<a class="btn self-start"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/tickets/manage`, void 0), 0)}>Alla biljetter</a>` : ``}</div> ${validate_component(TicketSection, "TicketSection").$$render(
    $$result,
    {
      title: tickets_availableNow(),
      tickets: activeTickets
    },
    {},
    {}
  )} ${validate_component(TicketSection, "TicketSection").$$render(
    $$result,
    {
      title: tickets_upcoming(),
      tickets: upcomingTickets
    },
    {},
    {}
  )} ${validate_component(TicketSection, "TicketSection").$$render(
    $$result,
    {
      title: tickets_past(),
      tickets: pastTickets
    },
    {},
    {}
  )}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-rKt4BdUB.js.map
