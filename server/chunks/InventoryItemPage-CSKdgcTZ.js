import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { a as getFullName } from './member-DajX-teH.js';
import { hR as inventory_ownedBy, hS as inventory_anonymousUser, hP as inventory_boughtAt } from './messages-D8OfyZiq.js';
import dayjs from 'dayjs';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { P as Price } from './Price-DdMCfeZI.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';

const QRCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let qrCodeUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&format=svg&color=fff&bgcolor=f280a1&data=${encodeURIComponent(data)}`;
  return `<div class="aspect-square max-w-80 self-center rounded-xl bg-[#f280a1] p-8"><img alt="QR code for ticket"${add_attribute("src", qrCodeUrl, 0)}></div>`;
});
const InventoryItemPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let consumable;
  let shoppable;
  let event;
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  consumable = data.consumable;
  shoppable = consumable.shoppable;
  event = shoppable.event;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: shoppable.title }, {}, {})} <div class="mx-auto md:container md:mt-8 md:grid md:grid-cols-2"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " cover photo"}" class="aspect-video object-cover md:rounded-xl"> <main class="m-4 flex flex-col gap-4"><div><h1 class="text-xl font-bold">${escape(shoppable.title)}</h1> <h2>${escape(inventory_ownedBy())} ${escape(data.member ? getFullName(data.member) : inventory_anonymousUser())}</h2> <h3 class="text-sm">${escape(inventory_boughtAt())} ${escape(dayjs(consumable.purchasedAt).fromNow())} <span class="block opacity-50 md:inline">(${escape(dayjs(consumable.purchasedAt).format("YYYY-MM-DD HH:MM"))})</span></h3></div> <div class="-mt-2 flex flex-wrap items-center gap-2 text-sm text-base-content/60 *:flex *:items-center *:gap-1"><p><span class="i-mdi-calendar"></span> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(eventLink(event), void 0), 0)} class="link-hover">${escape(event.title)}</a></p> <p><span class="i-mdi-clock"></span>${escape(dayjs(event.startDatetime).format("dddd Do MMM"))}</p> ${event.location ? `<p><span class="i-mdi-map-marker"></span> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://maps.google.com/?q=${event.location}`, void 0), 0)} target="_blank" rel="noreferrer noopener" class="link-hover">${escape(event.location)}</a></p>` : ``}</div> ${shoppable.description ? `<p>${escape(shoppable.description)}</p>` : ``} ${consumable.questionResponses.length > 0 ? `<section class="space-y-2 self-start rounded-box bg-base-200 p-4 shadow-lg"><h3 class="text-lg font-semibold" data-svelte-h="svelte-e4d1p3">Svar</h3> <ul>${each(consumable.questionResponses, (response) => {
    return `<li><b>${escape(response.question.title)}</b> <span>${escape(response.answer)} ${response.extraPrice ? `(${validate_component(Price, "Price").$$render($$result, { price: response.extraPrice }, {}, {})})
                ` : ``}</span> </li>`;
  })}</ul></section>` : ``} ${validate_component(QRCode, "QRCode").$$render($$result, { data: shoppable.title }, {}, {})}</main></div>`;
});

export { InventoryItemPage as I };
//# sourceMappingURL=InventoryItemPage-CSKdgcTZ.js.map
