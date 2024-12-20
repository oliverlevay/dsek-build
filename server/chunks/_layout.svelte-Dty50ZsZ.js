import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { P as POST_REVEAL_PREFIX } from './types2-CXiSJ5rH.js';
import { ce as nollning_wikia_map, bQ as theGuild, cf as nollning_wikia_student_health, cg as nollning_wikia_guildSongs, c7 as nolla_wordlist_header, ch as nollning_wikia_dressCodes, ci as nollning_wikia_literature } from './messages-D8OfyZiq.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let currentLink;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    {
      label: nollning_wikia_map(),
      link: "map"
    },
    { label: theGuild(), link: "sektionen" },
    {
      label: nollning_wikia_student_health(),
      link: "student-health"
    },
    {
      label: nollning_wikia_guildSongs(),
      link: "guild-songs"
    },
    {
      label: nolla_wordlist_header(),
      link: "wordlist"
    },
    {
      label: nollning_wikia_dressCodes(),
      link: "dress-codes"
    },
    { label: "FAQ", link: "faq" },
    {
      label: nollning_wikia_literature(),
      link: "literature"
    }
  ];
  let elements = [];
  let scroller;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  path = i18n.route($page.url.pathname).replace(`${POST_REVEAL_PREFIX}/wikia/`, "");
  currentLink = links.find((link) => link.link === path) ?? links[0];
  currentLink ? links.indexOf(currentLink) : void 0;
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Wikia" }, {}, {})} <div class="scrollbar-hide sticky -top-1 z-10 -mx-6 flex gap-2 overflow-x-auto bg-base-100 px-6 py-2 pt-3 md:justify-center"${add_attribute("this", scroller, 0)}>${each(links, (link, i) => {
    let isCurrent = link === currentLink;
    return ` <a${add_attribute("id", link.link, 0)}${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(link.link, void 0), 0)} class="${[
      "btn btn-primary",
      (isCurrent ? "btn-primary" : "") + " " + (!isCurrent ? "btn-outline" : "")
    ].join(" ").trim()}"${add_attribute("this", elements[i], 0)}>${escape(link.label)} </a>`;
  })}</div> <div class="relative z-0 mx-auto max-w-screen-xl space-y-12 py-6">${slots.default ? slots.default({}) : ``}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Dty50ZsZ.js.map
