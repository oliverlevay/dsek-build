import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { p as page } from './stores-ClpLLrvc.js';
import { bW as medals } from './messages-D8OfyZiq.js';
import { d as dateToSemester, t as toString, p as parseSemester, s as semesterFromYearAndTerm } from './medals-DM-PEtvm.js';
import './index-BHX467Gw.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';

const ScrollIndicatedBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  {
    (() => {
      if (element && element.onscroll == null) {
        element.onscroll = () => {
          element = element;
        };
      }
    })();
  }
  return `<div class="relative">${slots.default ? slots.default({}) : ``} <div class="${"arrow-indicator pointer-events-none absolute right-1/2 top-2 translate-x-1/2 rounded-md bg-primary/40 px-2 text-xl transition-opacity " + escape(
    element && element.scrollTop > 20 ? "opacity-100" : "opacity-0",
    true
  )}">↑</div> <div class="${"arrow-indicator pointer-events-none absolute bottom-2 right-1/2 translate-x-1/2 rounded-md bg-primary/40 px-2 text-xl transition-opacity " + escape(
    element && element.scrollHeight > element.clientHeight && element.scrollTop + element.clientHeight < element.scrollHeight - 20 ? "opacity-100" : "opacity-0",
    true
  )}">↓</div></div>`;
});
const MedalCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { medal } = $$props;
  let { recipients } = $$props;
  let mandatesBox;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.medal === void 0 && $$bindings.medal && medal !== void 0) $$bindings.medal(medal);
  if ($$props.recipients === void 0 && $$bindings.recipients && recipients !== void 0) $$bindings.recipients(recipients);
  return `<article class="card bg-base-200 shadow-xl transition-all"><div class="card-body"><h2 class="card-title">${escape(medal)} ${recipients.length > 1 ? `(${escape(recipients.length)} st)` : ``}</h2> ${validate_component(ScrollIndicatedBox, "ScrollIndicatedBox").$$render($$result, { element: mandatesBox }, {}, {
    default: () => {
      return `<div class="max-h-80 overflow-y-auto"${add_attribute("this", mandatesBox, 0)}><ul class="menu menu-vertical p-0">${each(recipients, (recipient) => {
        return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${recipient.studentId}`, void 0), 0)}><div class="flex flex-row items-center gap-2">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member: recipient }, {}, {})} <div><h3 class="font-medium">${escape(getFullName(recipient))} </h3></div> </div></a> </li>`;
      })}</ul></div>`;
    }
  })}</div></article>`;
});
const MedalGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let everyOtherGroup;
  let everyOtherGroup2;
  let { groups } = $$props;
  if ($$props.groups === void 0 && $$bindings.groups && groups !== void 0) $$bindings.groups(groups);
  everyOtherGroup = groups.filter((_, i) => i % 2 === 0);
  everyOtherGroup2 = groups.filter((_, i) => i % 2 === 1);
  return `<div class="hidden grid-cols-2 gap-4 md:grid"><div class="flex flex-col items-stretch gap-4">${each(everyOtherGroup, (group) => {
    return `${validate_component(MedalCard, "MedalCard").$$render(
      $$result,
      {
        medal: group.medal,
        recipients: group.recipients
      },
      {},
      {}
    )}`;
  })}</div> <div class="flex flex-col items-stretch gap-4">${each(everyOtherGroup2, (group) => {
    return `${validate_component(MedalCard, "MedalCard").$$render(
      $$result,
      {
        medal: group.medal,
        recipients: group.recipients
      },
      {},
      {}
    )}`;
  })}</div></div> <div class="grid gap-4 md:hidden">${each(groups, (group) => {
    return `${validate_component(MedalCard, "MedalCard").$$render(
      $$result,
      {
        medal: group.medal,
        recipients: group.recipients
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentSemester;
  let recipients;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const firstSemester = semesterFromYearAndTerm(1982);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  currentSemester = dateToSemester(
    /* @__PURE__ */ new Date()
  );
  recipients = data.recipients;
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: medals() }, {}, {})} <div class="space-y-2">${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: currentSemester - firstSemester,
      getPageName: (i) => toString(currentSemester - i),
      getPageNumber: (page2) => currentSemester - parseSemester(page2),
      fieldName: "semester",
      showFirst: true,
      showLast: true,
      class: "max-w"
    },
    {},
    {}
  )} ${isAuthorized(apiNames.MEDALS.MANAGE, data.user) ? `<a class="btn btn-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute($page.url.pathname + "/download-csv?" + $page.url.searchParams, void 0), 0)}><span class="i-mdi-file-delimited"></span>CSV</a>` : ``} ${validate_component(MedalGrid, "MedalGrid").$$render($$result, { groups: recipients }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DGIvNAKs.js.map
