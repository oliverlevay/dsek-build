import { c as create_ssr_component, v as validate_component, e as each, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { A as Articles, E as Events, C as CafeOpenTimes, W as WellbeingCTA, D as Documents, a as CodeWithDWWW } from './CodeWithDWWW-Df_8tgSZ.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { p as page } from './stores-ClpLLrvc.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { N as NavIcon } from './NavIcon-85EhGWcK.js';
import { g as getRoutes } from './routes-4pHlk09F.js';
import 'markdown-to-txt';
import './messages-D8OfyZiq.js';
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
import 'tailwind-merge';
import './DsekLogo-nckDQWC4.js';
import './client3-CIDcnctW.js';
import './apiNames-BaTM20TQ.js';

const AppHomeNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routes;
  let routesToShow;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  routes = getRoutes();
  routesToShow = routes.filter(
    // first filter out all routes not accessible (root-level paths only)
    (route) => !route.accessRequired || isAuthorized(route.accessRequired, $page.data.user)
  ).flatMap((route) => route.children ? [route, ...route.children.map((child) => ({ ...child, parent: route }))] : route).filter((route) => {
    return route.appBehaviour === "home-link";
  }).filter(
    // filter out based on accessibility AGAIN, this time for children
    (route) => !route.accessRequired || isAuthorized(route.accessRequired, $page.data.user)
  );
  $$unsubscribe_page();
  return `<ul class="menu gap-2 rounded-box border-t-4 border-t-primary bg-base-300 p-4">${each(routesToShow, (route, index) => {
    let didChangeCategory = route.parent?.title !== routesToShow[index - 1]?.parent?.title;
    return ` ${didChangeCategory ? `<li class="menu-title">${escape(route.parent?.title)}</li>` : ``} <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)} class="pop-out btn justify-start">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} <span>${escape(route.title)}</span></a> </li>`;
  })}</ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "D-sektionen" }, {}, {})} <article class="flex flex-col gap-10"><section>${validate_component(Articles, "Articles").$$render($$result, { news: data.news }, {}, {})}</section> <section>${validate_component(Events, "Events").$$render($$result, { events: data.events }, {}, {})}</section> <section>${validate_component(CafeOpenTimes, "CafeOpenTimes").$$render($$result, { cafeOpen: data.cafeOpen }, {}, {})}</section> <section>${validate_component(AppHomeNavigation, "AppHomeNavigation").$$render($$result, {}, {}, {})}</section> <section>${validate_component(WellbeingCTA, "WellbeingCta").$$render($$result, {}, {}, {})}</section> <section>${validate_component(Documents, "Documents").$$render($$result, { files: data.files }, {}, {})}</section> ${data.commitCount && data.latestCommit ? `<section>${validate_component(CodeWithDWWW, "CodeWithDwww").$$render(
    $$result,
    {
      commitCount: data.commitCount,
      commitData: data.latestCommit
    },
    {},
    {}
  )}</section>` : ``}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BPZTWJA_.js.map
