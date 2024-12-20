import { c as create_ssr_component, v as validate_component, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { r as relativeDate } from './datetime-F2VqCxJb.js';
import { I as InterestedGoingList } from './InterestedGoingList-dBgyj_jS.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import dayjs from 'dayjs';
import { bK as events } from './messages-D8OfyZiq.js';
import './lifecycle-DkuQBIPN.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './runtime-BxW51cRH.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import 'tailwind-merge';
import 'marked';

const TVEventCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  const dayjsDate = dayjs(event.startDatetime);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  return `<article class="row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden rounded-xl bg-base-200"><div class="flex justify-between gap-4 bg-base-300 p-4"><div class="flex flex-wrap gap-2">${each(event.tags, (tag) => {
    return `<span class="badge text-xs text-neutral-400">${escape(tag.name)}</span>`;
  })}</div></div> <div class="flex flex-col p-8"><div class="flex flex-row items-center pb-4"><div class="size-24 rounded-b-xl bg-base-300"><div class="rounded-t-xl bg-primary px-2 py-1 text-center font-bold text-black">${escape(dayjsDate.format("MMMM"))}</div> <div class="px-5 py-2 text-center text-4xl font-bold">${escape(dayjsDate.format("DD"))}</div></div> <h2 class="px-4 text-4xl font-bold">${escape(event.title)}</h2></div> <section class="text-primary">${Math.abs(event.startDatetime.valueOf() - event.endDatetime.valueOf()) < 24 * 60 * 60 * 1e3 ? `<span class="font-semibold">${escape(relativeDate(event.startDatetime))}</span> <br> ${escape(event.startDatetime?.toLocaleTimeString(["sv"], { hour: "2-digit", minute: "2-digit" }))} →
        ${escape(event.endDatetime?.toLocaleTimeString(["sv"], { hour: "2-digit", minute: "2-digit" }))}` : `<div class="flex flex-row items-center gap-4"><div><span class="font-semibold">${escape(relativeDate(event.startDatetime))}</span> <br> ${escape(event.startDatetime?.toLocaleTimeString(["sv"], { hour: "2-digit", minute: "2-digit" }))}</div>
          →
          <div><span class="font-semibold">${escape(relativeDate(event.endDatetime))}</span> <br> ${escape(event.endDatetime?.toLocaleTimeString(["sv"], { hour: "2-digit", minute: "2-digit" }))}</div></div>`}</section> <div class="my-3 flex flex-col items-start gap-2">${event.shortDescription ? `${validate_component(MarkdownBody, "MarkdownBody").$$render(
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
      class: "prose prose-xl mb-8 mt-2 line-clamp-5 min-w-full text-ellipsis prose-headings:text-sm"
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: events() }, {}, {})} <section class="flex flex-col gap-8 space-y-4 px-14">${each(data.events, (event) => {
    return `${validate_component(TVEventCard, "TvEventCard").$$render($$result, { event }, {}, {})}`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-DG5hYnZ6.js.map
