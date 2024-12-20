import { f as getContext, b as subscribe, k as compute_rest_props } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { p as page } from './stores-ClpLLrvc.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import dayjs from 'dayjs';
import './client-yexbOeKf.js';
import { twMerge } from 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './exports-BGi7-Rnc.js';

const formatter = new Intl.NumberFormat("sv-SE", {
  style: "currency",
  currency: "SEK",
  currencyDisplay: "code",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});
const formatPrice = (price) => {
  return formatter.format(price / 100);
};
const priceFormatClasses = "font-semibold text-success";
const RowAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { action } = $$props;
  let { warningMessage = null } = $$props;
  let { consumableId } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.warningMessage === void 0 && $$bindings.warningMessage && warningMessage !== void 0) $$bindings.warningMessage(warningMessage);
  if ($$props.consumableId === void 0 && $$bindings.consumableId && consumableId !== void 0) $$bindings.consumableId(consumableId);
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(action, void 0), 0)}><input type="hidden" name="consumableId"${add_attribute("value", consumableId, 0)}> <button class="btn btn-ghost">${`${slots.default ? slots.default({}) : ``}`}</button></form>`;
});
const TruncatedTableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let valueToShow;
  let $$restProps = compute_rest_props($$props, ["value", "link", "class"]);
  let { value } = $$props;
  let { link = void 0 } = $$props;
  let { class: clazz = void 0 } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value2, lang_value) {
    if (typeof value2 !== "string") return value2;
    if (!pArAgLiDe_translate_attribute_pass_context) return value2;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value2, lang_value);
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  valueToShow = value === void 0 ? "-" : value === null ? "N/A" : value;
  return `<td><div class="tooltip"${add_attribute("data-tip", value ? value : "", 0)}><span${spread(
    [
      {
        class: escape_attribute_value(twMerge("tooltip max-w-32 overflow-x-hidden text-ellipsis whitespace-nowrap", clazz))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${link ? `<a class="link text-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(link, void 0), 0)}>${escape(valueToShow)}</a>` : `${escape(valueToShow)}`}</span></div></td>`;
});
const ConsumableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stripeIntentBaseUrl;
  let item;
  let member;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { consumable = null } = $$props;
  let { reservation = null } = $$props;
  let { questions } = $$props;
  if (!consumable && !reservation) throw new Error("Either consumable or reservation must be specified");
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.consumable === void 0 && $$bindings.consumable && consumable !== void 0) $$bindings.consumable(consumable);
  if ($$props.reservation === void 0 && $$bindings.reservation && reservation !== void 0) $$bindings.reservation(reservation);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0) $$bindings.questions(questions);
  stripeIntentBaseUrl = $page.data["stripeIntentBaseUrl"];
  item = consumable ?? reservation;
  member = item.member;
  $$unsubscribe_page();
  return `<tr><td><div class="flex items-center gap-3">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { class: "h-8 w-8", member }, {}, {})} <div><div class="font-bold">${escape(member ? getFullName(member) : "Icke inloggad")}</div> ${item.externalCustomerEmail ? `<div class="text-sm opacity-50">${escape(item.externalCustomerEmail)}</div>` : ``}</div></div></td> ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
    $$result,
    {
      value: member ? member.foodPreference ?? "" : ""
    },
    {},
    {}
  )} ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
    $$result,
    {
      value: consumable?.purchasedAt ? dayjs(consumable.purchasedAt).format("HH:MM:ss DD-MM-YYYY") : null
    },
    {},
    {}
  )} ${consumable !== null ? (() => {
    let phadderGroup = consumable.member?.phadderGroup;
    return ` ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
      $$result,
      {
        value: phadderGroup?.name ? phadderGroup.name : ""
      },
      {},
      {}
    )}`;
  })() : ``} ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
    $$result,
    {
      value: consumable?.consumedAt ? dayjs(consumable.consumedAt).format("HH:MM:ss DD-MM-YYYY") : consumable ? "Ej konsumerad" : null,
      class: consumable?.consumedAt ? "text-success" : ""
    },
    {},
    {}
  )} ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
    $$result,
    {
      value: consumable?.priceAtPurchase ? formatPrice(consumable.priceAtPurchase) : consumable?.purchasedAt !== null ? "Okänt" : null,
      class: priceFormatClasses
    },
    {},
    {}
  )} ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
    $$result,
    {
      link: consumable?.stripeIntentId ? `${stripeIntentBaseUrl}/${consumable.stripeIntentId}` : void 0,
      value: consumable?.stripeIntentId ? `${consumable.stripeIntentId}` : consumable?.purchasedAt ? "Finns inte sparad" : null
    },
    {},
    {}
  )} ${each(questions, (question) => {
    return `${consumable ? (() => {
      let response = consumable.questionResponses.find((r) => r.questionId === question.id);
      return ` ${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render(
        $$result,
        {
          value: response ? `${response.answer}${response.extraPrice ? ` (${formatPrice(response.extraPrice)})` : ""}` : void 0
        },
        {},
        {}
      )}`;
    })() : `${validate_component(TruncatedTableCell, "TruncatedTableCell").$$render($$result, { value: null }, {}, {})}`}`;
  })} <th>${consumable?.consumedAt === null ? `${validate_component(RowAction, "RowAction").$$render(
    $$result,
    {
      action: "?/consume",
      consumableId: consumable.id
    },
    {},
    {
      default: () => {
        return `<span class="i-mdi-flame-circle text-xl text-secondary"></span>`;
      }
    }
  )}` : `${consumable ? `${validate_component(RowAction, "RowAction").$$render(
    $$result,
    {
      action: "?/unconsume",
      consumableId: consumable.id,
      warningMessage: "Är du säker på att du vill avkonsumera biljetten?"
    },
    {},
    {
      default: () => {
        return `<span class="i-mdi-redo-variant text-xl text-error"></span>`;
      }
    }
  )}` : `<span class="font-semibold text-gray-400" data-svelte-h="svelte-1bnmb02">N/A</span>`}`}</th> <th>${consumable ? `${validate_component(RowAction, "RowAction").$$render(
    $$result,
    {
      action: "?/refund",
      consumableId: consumable.id,
      warningMessage: "Är du säker på att du vill ge personen en återbetalning?"
    },
    {},
    {
      default: () => {
        return `<span class="i-mdi-cash-refund text-xl text-success"></span>`;
      }
    }
  )}` : ``}</th></tr>`;
});
const ConsumablesTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = null } = $$props;
  let { questions = [] } = $$props;
  let { consumables } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0) $$bindings.questions(questions);
  if ($$props.consumables === void 0 && $$bindings.consumables && consumables !== void 0) $$bindings.consumables(consumables);
  return `<div class="my-8 overflow-x-auto rounded-box bg-base-200 p-2 shadow-xl"><table class="table"><thead>${title ? `<tr><th colspan="1000" class="text-center text-lg">${escape(title)}</th></tr>` : ``} <tr><th data-svelte-h="svelte-18s9o4v">Person</th> <th data-svelte-h="svelte-id6gvs">Preferens</th> <th data-svelte-h="svelte-1qvl57b">Köptes</th> <th data-svelte-h="svelte-19h1k22">Phaddergrupp</th> <th data-svelte-h="svelte-jis7cn">Konsumerades</th> <th data-svelte-h="svelte-ez8tu7">Betalat</th> <th data-svelte-h="svelte-1faw7w3">Stripeköp ID</th> ${each(questions, (question) => {
    return `<th><div class="tooltip"${add_attribute("data-tip", question.title, 0)}><span class="inline-block max-w-32 overflow-hidden text-ellipsis whitespace-nowrap">${escape(question.title)}</span> </div></th>`;
  })} <th data-svelte-h="svelte-1ovu4i3">Konsumera</th> <th data-svelte-h="svelte-1pmxbod">Återbetala</th></tr></thead> <tbody>${consumables.length > 0 ? `${each(consumables, (consumable) => {
    return ` ${validate_component(ConsumableRow, "ConsumableRow").$$render(
      $$result,
      {
        consumable: "purchasedAt" in consumable ? consumable ?? null : null,
        reservation: "purchasedAt" in consumable ? null : consumable,
        questions
      },
      {},
      {}
    )}`;
  })}` : `<tr data-svelte-h="svelte-s1szqv"><td colspan="1000" class="text-center">Inga biljetter</td></tr>`}</tbody></table> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ticket;
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  ticket = data.ticket;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: ticket.title }, {}, {})} <div class="flex justify-between"><h1 class="text-2xl">${escape(ticket.title)}</h1> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`edit`, void 0), 0)} class="btn btn-secondary">Redigera biljett</a></div> ${ticket.description ? `<p class="text-lg">${escape(ticket.description)}</p>` : ``} ${ticket.questions.length > 0 ? `<div class="rounded-box bg-base-200 p-4"><h3 class="text-lg font-semibold" data-svelte-h="svelte-xfjpnw">Frågor</h3> <ul class="ml-4 list-decimal">${each(ticket.questions, (question) => {
    return `<li class="mt-4"><h2 class="text-lg font-medium">${escape(question.title)} ${question.removedAt !== null ? `<span class="opacity-50" data-svelte-h="svelte-27pk81">(borttagen)</span>` : ``}</h2> <p>${escape(question.description)}</p> </li>`;
  })}</ul></div>` : ``} <p>${escape(data.purchasedConsumables.length)} köpta <br> ${data.consumablesInCart.length > 0 ? `${data.consumablesInCart.length > 1 ? `${escape(data.consumablesInCart.length)} i kundvagner<br>` : `1 i kundvagn<br>`}` : ``} ${data.reservations.length > 0 ? `${data.reservations.length > 1 ? `${escape(data.reservations.length)} reservationer<br>` : `1 reservation<br>`}` : ``}</p> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`manage/download-csv`, void 0), 0)} class="btn btn-primary btn-sm mt-2"><span class="i-mdi-download"></span> Ladda ner CSV</a> ${validate_component(ConsumablesTable, "ConsumablesTable").$$render(
    $$result,
    {
      questions: ticket.questions,
      consumables: data.purchasedConsumables,
      title: "Köpta biljetter"
    },
    {},
    {}
  )} ${data.consumablesInCart.length > 0 ? `${validate_component(ConsumablesTable, "ConsumablesTable").$$render(
    $$result,
    {
      consumables: data.consumablesInCart,
      title: "I kundvagn"
    },
    {},
    {}
  )}` : ``} ${data.reservations.length > 0 ? `${validate_component(ConsumablesTable, "ConsumablesTable").$$render(
    $$result,
    {
      consumables: data.reservations,
      title: "Reservationer"
    },
    {},
    {}
  )}` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DKNrikM1.js.map
