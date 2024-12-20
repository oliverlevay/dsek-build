import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { bK as events, k2 as events_calendar_week, k3 as nollning_events_ticketCTA, fr as events_calendar_subscribe, fs as events_calendar_subscribe_details } from './messages-D8OfyZiq.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import dayjs from 'dayjs';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { N as NOLLNING_TAG_PREFIX } from './types2-CXiSJ5rH.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './runtime-BxW51cRH.js';
import 'marked';
import 'tailwind-merge';
import './index-BHX467Gw.js';

const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { event } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  $$unsubscribe_page();
  return `<div class="collapse collapse-arrow rounded-btn border-2 border-base-200 bg-base-200 bg-transparent has-[input[type='radio']:checked]:border-base-content"><input type="radio" name="nolla-event-list"> <div class="collapse-title flex flex-col"> <span class="text-sm font-medium capitalize text-primary">${escape(dayjs(event.startDatetime).format("dddd HH:mm"))} - ${escape(dayjs(event.endDatetime).format("HH:mm"))}</span> <span class="text-base">${escape(event.title)}</span> ${event.location ? `<span class="text-sm font-medium text-neutral">${escape(event.location)}</span>` : ``} <div class="mt-4 flex gap-2">${each(event.tags, (tag) => {
    return `${!tag.name.startsWith(NOLLNING_TAG_PREFIX) ? `${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}` : ``}`;
  })}</div></div> <div class="collapse-content flex flex-col">${event.shortDescription ? `<span class="text-xl font-medium text-neutral">${escape(event.shortDescription)}</span>` : ``} <p>${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: event.description,
      class: "leading-tight"
    },
    {},
    {}
  )}</p>  ${event.link ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(event.link, void 0), 0)} class="btn btn-primary mt-4 self-start">${escape(nollning_events_ticketCTA())}</a>` : ``} ${isAuthorized(apiNames.EVENT.UPDATE, $page.data.user) ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events/${event.slug}`, void 0), 0)} class="btn btn-secondary mt-8 self-start"><span class="i-mdi-edit"></span></a>` : ``}</div></div>`;
});
const PostRevealSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { checked } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  return `<div class="collapse z-10 w-auto !grid-rows-[min-content_0fr] rounded-btn border-2 border-neutral bg-neutral duration-300 has-[input[type='checkbox']:checked]:!grid-rows-[min-content_1fr] has-[input[type='checkbox']:checked]:border-base-content has-[input[type='checkbox']:checked]:bg-base-100"><input type="checkbox" class="peer min-h-0"${add_attribute("checked", checked, 1)}> <div class="collapse-title flex h-9 min-h-0 items-center gap-2 p-2 font-medium peer-checked:[&>span]:rotate-0">${escape(title)} <span class="i-mdi-chevron-down rotate-90 transition-transform duration-300 ease-out-back"></span></div> <div class="collapse-content px-0 peer-checked:!pb-0">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let events$1;
  let weeks;
  let eventsSubscribeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let weekCollapseOpen = false;
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
    events$1 = data.events;
    weeks = Array(data.weeks).fill(0).map((_, i) => i);
    eventsSubscribeUrl = `${$page.url.origin}${$page.url.pathname}/subscribe`;
    $$rendered = `<div class="mx-auto max-w-4xl">${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: events() }, {}, {})} <div class="mb-4 flex items-start justify-between"><details class="dropdown"><summary class="btn btn-lg !h-10">${escape(events_calendar_subscribe())} <span class="i-mdi-calendar-sync"></span></summary> <div class="dropdown-content z-20 -ml-8 w-[calc(100dvw-1rem)] rounded-box bg-base-300 p-4 shadow md:max-w-2xl"><p>${escape(events_calendar_subscribe_details())}</p> <p class="my-2 w-full select-all overflow-x-auto rounded border p-2 font-mono text-sm">${escape(eventsSubscribeUrl)}</p></div></details> ${validate_component(PostRevealSelect, "PostRevealSelect").$$render(
      $$result,
      {
        title: events_calendar_week().toLowerCase() + " " + data.week,
        checked: weekCollapseOpen
      },
      {
        checked: ($$value) => {
          weekCollapseOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<ul class="flex flex-col">${each(weeks, (i) => {
            let isCurrent = i === data.week;
            return ` <li class="${["px-2 py-1 last:pb-2", isCurrent ? "bg-primary" : ""].join(" ").trim()}"><a class="font-medium"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`?week=${i}`, void 0), 0)}>${escape(events_calendar_week().toLowerCase())} ${escape(i)}</a> </li>`;
          })}</ul>`;
        }
      }
    )}</div> <div class="flex flex-col gap-4">${events$1.length > 0 ? `${each(events$1, (event) => {
      return `${validate_component(Event, "Event").$$render($$result, { event }, {}, {})}`;
    })}` : `<span class="mt-8 text-center text-4xl" data-svelte-h="svelte-dnhzs1">🤫</span>`}</div></div> `;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CGVpmORM.js.map
