import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import dayjs from 'dayjs';
import { B as BuyButton } from './BuyButton-CFG3tzT1.js';
import { P as Price } from './Price-DdMCfeZI.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { F as FoodPreferenceModal } from './ScrollingNumber-DeH67l7m.js';
import { i9 as tickets_ticketPage_showAdmin, ia as tickets_ticketPage_edit } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import './exports-BGi7-Rnc.js';
import './stores-ClpLLrvc.js';
import './LoadingButton-DNerNunK.js';
import 'tailwind-merge';
import './date-5_FJIXnV.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './server-DiSvHEoN.js';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ticket;
  let event;
  let { data } = $$props;
  let isSubmitting = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ticket = data.ticket;
  event = ticket.event;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: ticket.title }, {}, {})} ${validate_component(FoodPreferenceModal, "FoodPreferenceModal").$$render($$result, {}, {}, {})} <div class="mx-auto md:container md:mt-8 md:grid md:grid-cols-2"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " cover photo"}" class="aspect-video object-cover md:rounded-xl"> <main class="m-4 flex flex-col gap-4"><h1 class="text-xl font-bold">${escape(ticket.title)} ${validate_component(Price, "Price").$$render($$result, { price: ticket.price, class: "ml-4" }, {}, {})}</h1> <div class="flex flex-wrap items-center gap-2 text-sm text-base-content/60 *:flex *:items-center *:gap-1"><p><span class="i-mdi-calendar"></span> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(eventLink(event), void 0), 0)} class="link-hover">${escape(event.title)}</a></p> <p><span class="i-mdi-clock"></span>${escape(dayjs(event.startDatetime).format("dddd Do MMM"))}</p> ${event.location ? `<p><span class="i-mdi-map-marker"></span> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://maps.google.com/?q=${event.location}`, void 0), 0)} target="_blank" rel="noreferrer noopener" class="link-hover">${escape(event.location)}</a></p>` : ``}</div> ${ticket.description ? `<p>${escape(ticket.description)}</p>` : ``} ${ticket.authorId == data.member?.id || isAuthorized(apiNames.WEBSHOP.MANAGE, data.user) ? `<div class="flex gap-2 [&>*]:flex-1"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${ticket.id}/manage`, void 0), 0)} class="btn btn-primary">${escape(tickets_ticketPage_showAdmin())}</a> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${ticket.id}/edit`, void 0), 0)} class="btn btn-secondary">${escape(tickets_ticketPage_edit())}</a></div>` : ``} <form class="mt-8" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/tickets?/addToCart`, void 0), 0)}><input type="hidden" name="ticketId"${add_attribute("value", ticket.id, 0)}> ${validate_component(BuyButton, "BuyButton").$$render($$result, { ticket, isSubmitting }, {}, {})}</form></main></div>`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-BGoBV1LN.js.map
