import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { S as SearchBar } from './SearchBar-CQTZM987.js';
import { T as TagSelector } from './TagSelector-Br3xhJpq.js';
import { bK as events, fu as events_coming, fv as events_past, fw as events_filter, fx as events_cancelled } from './messages-D8OfyZiq.js';
import { r as relativeDate } from './datetime-F2VqCxJb.js';
import { I as InterestedGoingButtons } from './InterestedGoingButtons-DaN4Eevd.js';
import { I as InterestedGoingList } from './InterestedGoingList-dBgyj_jS.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';

const SmallEventCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  let { interestedGoingForm } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.interestedGoingForm === void 0 && $$bindings.interestedGoingForm && interestedGoingForm !== void 0) $$bindings.interestedGoingForm(interestedGoingForm);
  return `<article class="row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden rounded-xl bg-base-200"><div class="flex justify-between gap-4 bg-base-300 p-4"><div class="flex flex-wrap gap-2">${each(event.tags, (tag) => {
    return `<span class="badge text-xs text-neutral-400">${escape(tag.name)}</span>`;
  })}</div></div> <div class="flex flex-col p-8"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(eventLink(event), void 0), 0)}><div class="flex items-end"><h2 class="${["text-2xl font-bold", event.isCancelled ? "line-through" : ""].join(" ").trim()}">${escape(event.title)} ${event.removedAt ? `<span class="badge badge-error badge-sm relative -top-1 !text-xs font-semibold" data-svelte-h="svelte-1nx81be">Raderat</span>` : ``}</h2> ${event.isCancelled ? `<span class="badge badge-error badge-md relative -top-1 ml-2 font-semibold">${escape(events_cancelled())}</span>` : ``}</div></a> <section class="${["text-primary", event.isCancelled ? "line-through" : ""].join(" ").trim()}">${Math.abs(event.startDatetime.valueOf() - event.endDatetime.valueOf()) < 24 * 60 * 60 * 1e3 ? `<span class="font-semibold">${escape(relativeDate(event.startDatetime))}</span> <br> ${escape(event.startDatetime?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))} →
        ${escape(event.endDatetime?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}` : `<div class="flex flex-row items-center gap-4"><div><span class="font-semibold">${escape(relativeDate(event.startDatetime))}</span> <br> ${escape(event.startDatetime?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}</div>
          →
          <div><span class="font-semibold">${escape(relativeDate(event.endDatetime))}</span> <br> ${escape(event.endDatetime?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}</div></div>`}</section> ${validate_component(InterestedGoingButtons, "InterestedGoingButtons").$$render(
    $$result,
    {
      eventId: event.id,
      interestedGoingForm,
      going: event.going,
      interested: event.interested
    },
    {},
    {}
  )} <div class="my-3 flex flex-col items-start gap-2">${event.shortDescription ? `${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: event.shortDescription,
      class: "mb-2 text-xl font-semibold !leading-snug"
    },
    {},
    {}
  )}` : ``} ${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: event.description,
      class: "line-clamp-4 text-ellipsis"
    },
    {},
    {}
  )}</div> <div class="my-3 flex flex-col items-start gap-0.5">${validate_component(InterestedGoingList, "InterestedGoingList").$$render(
    $$result,
    {
      going: event.going,
      interested: event.interested
    },
    {},
    {}
  )}</div></div></article>`;
});
const EventPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPast;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let filteredTags = data.allTags.filter((tag) => $page.url.searchParams.getAll("tags").includes(tag.name));
  let filterButton;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isPast = $page.url.searchParams.get("past") == "on";
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: events() }, {}, {})} <section class="flex flex-col gap-2">${slots.default ? slots.default({}) : ``} <form method="get" class="form-control flex-1 gap-2 md:flex-row md:items-center" id="filter-form"><div class="join"><label class="${"btn btn-primary join-item " + escape(!isPast ? "pointer-events-none" : "btn-outline", true)}">${escape(events_coming())} <input type="radio" name="past" value="off" ${!isPast ? "checked" : ""} class="hidden"></label> <label class="${"btn btn-primary join-item " + escape(isPast ? "pointer-events-none" : "btn-outline", true)}">${escape(events_past())} <input type="radio" name="past" value="on" ${isPast ? "checked" : ""} class="hidden"></label></div> ${validate_component(TagSelector, "TagSelector").$$render(
      $$result,
      {
        allTags: data.allTags,
        selectedTags: filteredTags
      },
      {
        selectedTags: ($$value) => {
          filteredTags = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} ${each(filteredTags, (tag) => {
      return `<input type="hidden" name="tags"${add_attribute("value", tag.name, 0)}>`;
    })} <button type="submit" class="btn btn-primary"${add_attribute("this", filterButton, 0)}>${escape(events_filter())}</button></form> ${each(data.events, (event) => {
      return `${validate_component(SmallEventCard, "SmallEventCard").$$render(
        $$result,
        {
          event,
          interestedGoingForm: data.interestedGoingForm
        },
        {},
        {}
      )}`;
    })} ${validate_component(Pagination, "Pagination").$$render($$result, { count: data.pageCount }, {}, {})}</section>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { EventPage as E };
//# sourceMappingURL=EventPage-tKrLi1Uo.js.map
