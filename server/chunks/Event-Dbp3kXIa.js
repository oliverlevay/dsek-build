import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from './ssr-BoMjCg5r.js';
import { r as relativeDate } from './datetime-F2VqCxJb.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import { fx as events_cancelled } from './messages-D8OfyZiq.js';

const DateSpan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { start } = $$props;
  let { end = void 0 } = $$props;
  if ($$props.start === void 0 && $$bindings.start && start !== void 0) $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0) $$bindings.end(end);
  return `<div class="text-primary">${end == void 0 ? `<span class="font-semibold">${escape(relativeDate(start))}</span> <br> ${escape(start?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}` : `${Math.abs(start.valueOf() - end.valueOf()) < 24 * 60 * 60 * 1e3 ? `<span class="font-semibold">${escape(relativeDate(start))}</span> <br> ${escape(start?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))} →
    ${escape(end?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}` : `<div class="flex flex-row items-center gap-4"><div><span class="font-semibold">${escape(relativeDate(start))}</span> <br> ${escape(start?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}</div>
      →
      <div><span class="font-semibold">${escape(relativeDate(end))}</span> <br> ${escape(end?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }))}</div></div>`}`}</div>`;
});
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  return `${event.imageUrl ? `<figure><img class="mx-auto"${add_attribute("src", getFileUrl(event.imageUrl), 0)}${add_attribute("alt", event.title, 0)}></figure>` : ``} <div class="flex items-baseline"><h1 class="${["text-2xl font-bold", event.isCancelled ? "line-through" : ""].join(" ").trim()}">${escape(event.title)} ${event.removedAt ? `<span class="badge badge-error badge-sm relative -top-1 !text-xs font-semibold" data-svelte-h="svelte-1y2l1m2">Raderat</span>` : ``}</h1> ${event.isCancelled ? `<span class="badge badge-error badge-lg relative -top-1 ml-2 font-semibold">${escape(events_cancelled())}</span>` : ``}</div> <section class="${["flex flex-row justify-between", event.isCancelled ? "line-through" : ""].join(" ").trim()}">${validate_component(DateSpan, "DateSpan").$$render(
    $$result,
    {
      start: event.startDatetime,
      end: event.endDatetime
    },
    {},
    {}
  )} ${slots.actions ? slots.actions({}) : ``}</section> ${slots.buttons ? slots.buttons({}) : ``} <section class="my-2 flex flex-row items-center justify-between">${slots.tags ? slots.tags({}) : ``}</section> ${event.shortDescription ? `${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: event.shortDescription,
      class: "mb-4 text-xl font-semibold !leading-snug"
    },
    {},
    {}
  )}` : ``} ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: event.description }, {}, {})} ${slots.after ? slots.after({}) : ``}`;
});

export { Event as E };
//# sourceMappingURL=Event-Dbp3kXIa.js.map
