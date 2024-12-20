import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { iF as nolla_nollning_header, iG as nolla_nollning_what, iH as nolla_nollning_whatText, iI as nolla_nollning_firstDay, iJ as nolla_nollning_firstDayText, iK as nolla_nollning_group, iL as nolla_nollning_groupText, iz as nolla_nav_nationer, iA as nolla_nation_link, iB as nolla_nav_list, c7 as nolla_wordlist_header } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const RegattaImage = "/_app/immutable/assets/regatta.BwPge7kA.jpg";
const PeppTuesdayImage = "/_app/immutable/assets/pepptuesday.DI-tY-pF.jpg";
const NollningCircleImage = "/_app/immutable/assets/circle.DENr8g3S.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navItems = [
    {
      text: nolla_nav_nationer(),
      link: nolla_nation_link()
    },
    {
      text: nolla_nav_list(),
      link: "/nolla/packing"
    },
    {
      text: nolla_wordlist_header(),
      link: "/nolla/wordlist"
    }
  ];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return ` <div class="mx-auto flex max-w-6xl flex-col gap-y-8 md:gap-y-16"><header class="flex w-full justify-end"><h1 class="nolla-page-title relative w-min text-right"><!-- HTML_TAG_START -->${nolla_nollning_header()}<!-- HTML_TAG_END --></h1></header> <div class="flex flex-col justify-between gap-8 md:flex-row"><article class="neo-brutal-box grid place-items-center self-start bg-[#B1FFB4] text-lg md:max-w-[449px]"><h1 class="font-bold"><!-- HTML_TAG_START -->${nolla_nollning_what()}<!-- HTML_TAG_END --></h1> <p class="nolla-prose"><!-- HTML_TAG_START -->${nolla_nollning_whatText()}<!-- HTML_TAG_END --></p></article> <article class="neo-brutal-box grid place-items-center self-start bg-[#FFF38B] text-lg md:max-w-[407px] md:py-32"><h1 class="font-bold"><!-- HTML_TAG_START -->${nolla_nollning_firstDay()}<!-- HTML_TAG_END --></h1> <p class="nolla-prose"><!-- HTML_TAG_START -->${nolla_nollning_firstDayText()}<!-- HTML_TAG_END --></p></article></div> <div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2" data-svelte-h="svelte-1dstmgv"><img${add_attribute("src", RegattaImage, 0)} alt="Students in boats at the yearly 'Regatta' competition" class="neo-brutal-image object-cover"> <img class="neo-brutal-image object-cover"${add_attribute("src", PeppTuesdayImage, 0)} alt="Students on the 'pepp tuesday' event waiting to go in the jumping castle thingy"></div> <article class="neo-brutal-box grid place-items-center self-start bg-[#ffc6eb] text-lg md:max-w-[712px]"><h1 class="font-bold"><!-- HTML_TAG_START -->${nolla_nollning_group()}<!-- HTML_TAG_END --></h1> <p class="nolla-prose"><!-- HTML_TAG_START -->${nolla_nollning_groupText()}<!-- HTML_TAG_END --></p></article> <img class="neo-brutal-image self-end object-cover lg:max-w-2xl"${add_attribute("src", NollningCircleImage, 0)} alt="Students during the nollning standing in a circle and singing"> <article class="neo-brutal-box flex flex-col items-stretch justify-center gap-8 bg-[#FF77C0] lg:h-72 lg:w-full lg:flex-row lg:items-center lg:gap-24">${each(navItems, (navItem) => {
    return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(navItem.link, void 0), 0)} class="neo-brutal-btn-flat">${escape(navItem.text)} </a>`;
  })}</article></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DdL8V7sa.js.map
