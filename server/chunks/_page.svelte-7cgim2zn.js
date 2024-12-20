import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { A as Articles, E as Events, W as WellbeingCTA, C as CafeOpenTimes, a as CodeWithDWWW, D as Documents } from './CodeWithDWWW-Df_8tgSZ.js';
import { D as DsekLogo } from './DsekLogo-nckDQWC4.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as getFullName } from './member-DajX-teH.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { g7 as home_volunteer } from './messages-D8OfyZiq.js';
import 'markdown-to-txt';
import './runtime-BxW51cRH.js';
import './redirect-A1ZqWr7F.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './server-DiSvHEoN.js';
import './index-BHX467Gw.js';
import 'dayjs';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "D-sektionen" }, {}, {})} <div class="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-5"><section class="col-span-1 hidden flex-col place-items-center xl:flex">${validate_component(DsekLogo, "DsekLogo").$$render($$result, { class: "size-48 pl-4 text-primary" }, {}, {})} ${$page.data.member ? `<div class="pt-2 text-center text-2xl font-bold">${escape(getFullName($page.data.member))}</div> ${data.hasActiveMandate ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/info/benefits`, void 0), 0)}><span class="badge badge-primary mt-2 hover:underline"><span class="i-mdi-coffee m-1"></span>${escape(home_volunteer())}</span></a>` : ``}` : ``}</section> <section class="flex flex-col md:-order-2 md:col-span-3 lg:order-none lg:col-span-3 xl:col-span-4">${validate_component(Articles, "Articles").$$render($$result, { news: data.news }, {}, {})}</section> <section class="md:col-span-3 lg:col-span-2 xl:col-span-3">${validate_component(Events, "Events").$$render($$result, { events: data.events }, {}, {})}</section> <section class="flex flex-col justify-evenly gap-4 sm:flex-row md:col-span-3 lg:col-span-1 lg:flex-col xl:col-span-2">${validate_component(WellbeingCTA, "WellbeingCTA").$$render($$result, {}, {}, {})} ${validate_component(CafeOpenTimes, "CafeOpenTimes").$$render($$result, { cafeOpen: data.cafeOpen }, {}, {})}</section> <section class="order-last md:col-span-3 lg:col-span-3 xl:order-none xl:col-span-2">${validate_component(CodeWithDWWW, "KodaMedDWWW").$$render(
    $$result,
    {
      commitCount: data.commitCount,
      commitData: data.latestCommit
    },
    {},
    {}
  )}</section> <section class="md:col-span-3 xl:col-span-3">${validate_component(Documents, "Documents").$$render($$result, { files: data.files }, {}, {})}</section></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7cgim2zn.js.map
