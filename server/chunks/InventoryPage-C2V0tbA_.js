import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { n as now } from './date-5_FJIXnV.js';
import { hL as inventory_yourInventory, hM as inventory_empty, bL as tickets, hN as inventory_usedUp, hO as inventory_goToEvent, hP as inventory_boughtAt, hQ as inventory_showTicket } from './messages-D8OfyZiq.js';
import dayjs from 'dayjs';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';

const Consumable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shoppable;
  let event;
  let { consumable } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.consumable === void 0 && $$bindings.consumable && consumable !== void 0) $$bindings.consumable(consumable);
  shoppable = consumable.shoppable;
  event = shoppable.event;
  return `<div class="card card-compact overflow-hidden bg-base-300 shadow-xl"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(eventLink(event), void 0), 0)} class="group"><figure class="relative aspect-video"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " cover photo"}" class="aspect-video object-cover"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-base-100 bg-opacity-75"><h6 class="text-xl font-semibold">${escape(event.title)}</h6> <span class="-mt-1 text-sm opacity-80">${escape(dayjs(event.startDatetime).format("dddd Do MMM"))}</span> <span class="mx-4 text-center">${escape(event.shortDescription)}</span> <span class="font-semibold text-primary underline underline-offset-8 transition-all group-hover:underline-offset-2 group-hover:opacity-80">${escape(inventory_goToEvent())}</span> <span class="absolute left-4 top-4">${escape(event.organizer)}</span> <span class="absolute right-4 top-4">${escape(event.location)}</span></div></figure></a> <div class="card-body"><div class="flex items-start justify-between"><span class="card-title">${escape(shoppable.title)}</span></div> ${shoppable.description ? `<span>${escape(shoppable.description)}</span>` : ``} <div class="card-actions items-end justify-between"><div class="text-sm opacity-50">${escape(inventory_boughtAt())} ${escape(dayjs(consumable.purchasedAt).fromNow())}</div> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`inventory/${consumable.id}`, void 0), 0)} class="btn btn-primary">${escape(inventory_showTicket())}</a></div></div></div>`;
});
const ConsumableSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { consumables } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.consumables === void 0 && $$bindings.consumables && consumables !== void 0) $$bindings.consumables(consumables);
  return `${consumables.length > 0 ? `<section><h2 class="mb-1 text-lg font-semibold">${escape(title)}</h2> <div class="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-3">${each(consumables, (consumable) => {
    return `${validate_component(Consumable, "Consumable").$$render($$result, { consumable }, {}, {})}`;
  })}</div></section>` : ``}`;
});
const InventoryPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let consumables;
  let unconsumed;
  let consumed;
  let $now, $$unsubscribe_now;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  consumables = data.consumables;
  unconsumed = consumables.filter((c) => c.consumedAt === null || c.consumedAt < $now);
  consumed = consumables.filter((c) => c.consumedAt !== null && c.consumedAt >= $now);
  $$unsubscribe_now();
  return `<article class="flex flex-col gap-4">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: inventory_yourInventory() }, {}, {})} ${consumed.length + unconsumed.length === 0 ? `<span class="text-lg font-semibold">${escape(inventory_empty())}</span>` : ``} ${validate_component(ConsumableSection, "ConsumableSection").$$render(
    $$result,
    {
      title: tickets(),
      consumables: unconsumed
    },
    {},
    {}
  )} ${validate_component(ConsumableSection, "ConsumableSection").$$render(
    $$result,
    {
      title: inventory_usedUp(),
      consumables: consumed
    },
    {},
    {}
  )}</article>`;
});

export { InventoryPage as I };
//# sourceMappingURL=InventoryPage-C2V0tbA_.js.map
