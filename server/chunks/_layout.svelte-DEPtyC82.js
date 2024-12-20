import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as each, b as escape } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { p as page } from './stores-ClpLLrvc.js';
import { D as DsekLogo } from './DsekLogo-nckDQWC4.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { c6 as nolla_nav_wellbeing, c7 as nolla_wordlist_header, c8 as nolla_nav_start, c9 as nolla_nav_nollning, ca as nolla_nav_sektionen, cb as nolla_nav_todo } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drawerRoutes;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let checked = false;
  const routes = [
    {
      text: nolla_nav_start(),
      link: "/nolla"
    },
    {
      text: nolla_nav_nollning(),
      link: "/nolla/nollning"
    },
    {
      text: nolla_nav_sektionen(),
      link: "/nolla/sektionen"
    },
    {
      text: nolla_nav_todo(),
      link: "/nolla/todo"
    }
  ];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  drawerRoutes = [
    ...routes,
    {
      text: nolla_nav_wellbeing(),
      link: "/nolla/wellbeing"
    },
    {
      text: nolla_wordlist_header(),
      link: "/nolla/wordlist"
    }
  ];
  $$unsubscribe_page();
  return `<div class="nolla-pre-reveal drawer flex-1 font-nolla-sans" data-theme="nollningPreReveal"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"${add_attribute("checked", checked, 1)}> <div class="drawer-content flex flex-col"> <nav class="container navbar mx-auto w-full p-6 lg:py-12"><div class="flex-none lg:hidden"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/nolla`, void 0), 0)}>${validate_component(DsekLogo, "DsekLogo").$$render(
    $$result,
    {
      class: "mx-4 hidden size-16 sm:block lg:hidden",
      variant: "full"
    },
    {},
    {}
  )}</a> <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost" data-svelte-h="svelte-oocxde"><span class="i-mdi-menu text-4xl"></span></label></div> <ul class="hidden w-full gap-24 text-2xl font-semibold *:bg-gradient-to-r *:from-primary *:to-primary *:bg-[length:0_2px] *:bg-bottom *:bg-no-repeat *:transition-all lg:flex">${each(routes, (route) => {
    return `<li class="hover:bg-[length:100%_2px]"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.link, void 0), 0)}>${escape(route.text)}</a> </li>`;
  })}</ul> <div class="flex flex-1 items-stretch justify-end gap-4"><a class="neo-brutal-btn aspect-square"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(i18n.route($page.url.pathname), languageTag() === "sv" ? "en" : "sv"), 0)}${add_attribute("hreflang", languageTag() === "sv" ? "en" : "sv", 0)}><span class="${[
    "h-8 w-8",
    (languageTag() !== "sv" ? "i-flag-gb-4x3" : "") + " " + (languageTag() === "sv" ? "i-flag-se-4x3" : "")
  ].join(" ").trim()}"></span></a> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/`, void 0), 0)} class="neo-brutal-btn">dsek.se
          <span class="i-mdi-arrow-right ml-2 h-8 w-8"></span></a></div></nav> <main class="container mx-auto flex-1 px-4 py-16 sm:px-8">${slots.default ? slots.default({}) : ``}</main></div>  <nav class="drawer-side"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu menu-lg min-h-full w-80 bg-base-200 p-4 text-2xl font-semibold">${each(drawerRoutes, (route) => {
    return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.link, void 0), 0)} class="">${escape(route.text)}</a> </li>`;
  })}</ul></nav></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DEPtyC82.js.map
