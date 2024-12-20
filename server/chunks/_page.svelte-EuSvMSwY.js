import { f as getContext, b as subscribe, o as onDestroy } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { fq as events_calendar, g5 as events_calendar_list } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const Calendar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let params;
  let calendar;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { events = [] } = $$props;
  const formatViewName = (view2) => {
    switch (view2) {
      case "day":
        return "dayGridDay";
      case "week":
        return "dayGridWeek";
      case "month":
        return "dayGridMonth";
      default:
        return null;
    }
  };
  let calendarEl;
  onDestroy(() => {
    if (calendar) calendar.destroy();
  });
  if ($$props.events === void 0 && $$bindings.events && events !== void 0) $$bindings.events(events);
  params = $page.url.searchParams;
  formatViewName(params.get("view"));
  (() => {
    const startDate = params.get("startDate");
    const endDate = params.get("endDate");
    if (startDate && endDate) {
      return dayjs(startDate).add(dayjs(endDate).diff(startDate, "days") / 2, "day").toDate();
    }
    return null;
  })();
  calendar = void 0;
  $$unsubscribe_page();
  return `<div class="min-w-0 flex-col break-words rounded-2xl border-0 bg-clip-border p-4 shadow-xl"${add_attribute("this", calendarEl, 0)}></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: events_calendar() }, {}, {})} <a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events`, void 0), 0)}><span class="i-mdi-format-list-bulleted"></span> ${escape(events_calendar_list())}</a> ${validate_component(Calendar_1, "Calendar").$$render($$result, { events: data.events }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-EuSvMSwY.js.map
