import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { E as EventPage } from './EventPage-tKrLi1Uo.js';
import { fp as events_create, fq as events_calendar, fr as events_calendar_subscribe, fs as events_calendar_subscribe_details, ft as events_tags } from './messages-D8OfyZiq.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './index-BHX467Gw.js';
import './Pagination-DD-n8kEM.js';
import 'tailwind-merge';
import './SearchBar-CQTZM987.js';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './TagSelector-Br3xhJpq.js';
import './TagChip-uoZb8u8g.js';
import './datetime-F2VqCxJb.js';
import './InterestedGoingButtons-DaN4Eevd.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './index2-Bcb5RUHj.js';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './InterestedGoingList-dBgyj_jS.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './redirect-A1ZqWr7F.js';
import './server-DiSvHEoN.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let eventsSubscribeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  eventsSubscribeUrl = `${$page.url.origin}${$page.url.pathname}/subscribe`;
  $$unsubscribe_page();
  return `${validate_component(EventPage, "EventPage").$$render($$result, { data }, {}, {
    default: () => {
      return `<div class="scrollbar-hide -mx-4 flex items-center gap-2 overflow-x-auto px-4">${isAuthorized(apiNames.EVENT.CREATE, data.user) ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events/create`, void 0), 0)}><span class="i-mdi-create"></span>${escape(events_create())}</a>` : ``} <a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events/calendar`, void 0), 0)}><span class="i-mdi-calendar"></span>${escape(events_calendar())}</a> <details class="dropdown"><summary class="btn flex-nowrap"><span class="i-mdi-calendar-sync"></span>${escape(events_calendar_subscribe())}</summary> <div class="dropdown-content z-[1] rounded-box bg-base-300 p-4 shadow"><p>${escape(events_calendar_subscribe_details())}</p> <p class="my-2 rounded border p-2 font-mono text-sm">${escape(eventsSubscribeUrl)}</p></div></details> ${isAuthorized(apiNames.TAGS.CREATE, data.user) || isAuthorized(apiNames.TAGS.UPDATE, data.user) ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news/tags`, void 0), 0)}><span class="i-mdi-tag"></span>${escape(events_tags())}</a>` : ``} ${isAuthorized(apiNames.TAGS.UPDATE, data.user) ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events/all-events`, void 0), 0)}><span class="i-mdi-administrator"></span>Alla events</a>` : ``}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CkauTMOv.js.map
