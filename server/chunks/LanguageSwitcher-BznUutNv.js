import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { p as page } from './stores-ClpLLrvc.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import { twMerge } from 'tailwind-merge';

const LanguageSwitcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: clazz = "" } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_page();
  return `<a${add_attribute("class", twMerge("btn btn-ghost", clazz), 0)}${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(i18n.route($page.url.pathname), languageTag() === "sv" ? "en" : "sv"), 0)}${add_attribute("hreflang", languageTag() === "sv" ? "en" : "sv", 0)}>${slots.default ? slots.default({}) : ` ${escape(languageTag() === "sv" ? "EN" : "SV")} `}</a>`;
});

export { LanguageSwitcher as L };
//# sourceMappingURL=LanguageSwitcher-BznUutNv.js.map
