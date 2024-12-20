import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, v as validate_component, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { D as DsekLogo } from './DsekLogo-nckDQWC4.js';
import { c6 as nolla_nav_wellbeing, ix as nolla_nav_boende, iy as nolla_accomodation_link, iz as nolla_nav_nationer, iA as nolla_nation_link, iB as nolla_nav_list, iC as nolla_start_welcome, iD as nolla_start_to, iE as nolla_start_dguild } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const DownArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="62" height="25" viewBox="0 0 62 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L31 20L58 4" stroke="url(#paint0_linear_203_59)" stroke-width="8" stroke-linecap="round"></path><defs><linearGradient id="paint0_linear_203_59" x1="4" y1="12" x2="58" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB4E5"></stop><stop offset="1" stop-color="#D0ACFF"></stop></linearGradient></defs></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navItems = [
    {
      text: nolla_nav_wellbeing(),
      link: "/nolla/wellbeing"
    },
    {
      text: nolla_nav_boende(),
      link: nolla_accomodation_link(),
      target: "_blank"
    },
    {
      text: nolla_nav_nationer(),
      link: nolla_nation_link(),
      target: "_blank"
    },
    {
      text: nolla_nav_list(),
      link: "/nolla/packing"
    }
  ];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return `<header class="flex h-[calc(100vh-var(--navbar-size))] flex-col justify-between pb-12 md:py-24"><div class="flex flex-col items-center justify-between gap-2 md:flex-row"><h1 class="text-left font-nolla-mono text-4xl leading-[1.1] sm:text-6xl lg:text-8xl"><div>${escape(nolla_start_welcome())}</div> <div>${escape(nolla_start_to())}</div> <div class="font-bold">${escape(nolla_start_dguild())}</div></h1> ${validate_component(DsekLogo, "DsekLogo").$$render(
    $$result,
    {
      class: "mt-8 block size-60 sm:size-80 md:mt-0 md:size-60 lg:size-80",
      variant: "full"
    },
    {},
    {}
  )}</div> <a class="flex w-full animate-bounce justify-center"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`#links`, void 0), 0)}>${validate_component(DownArrow, "DownArrow").$$render($$result, {}, {}, {})}</a></header> <article id="links" class="neo-brutal-box flex flex-col items-stretch justify-center gap-8 bg-secondary lg:h-72 lg:w-full lg:flex-row lg:items-center lg:gap-24">${each(navItems, (navItem) => {
    return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(navItem.link, void 0), 0)} class="neo-brutal-btn-flat"${add_attribute("target", navItem.target, 0)}>${escape(navItem.text)} </a>`;
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DM3j79Xm.js.map
