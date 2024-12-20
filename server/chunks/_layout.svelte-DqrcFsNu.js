import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { i as i18n, n as normaliseBase$1, P as PARAGLIDE_CONTEXT_KEY, g as getPathInfo, a as getCanonicalPath, b as getTranslatedPath, s as serializeRoute } from './i18n-B2SgmjJ3.js';
import { b as subscribe, s as setContext, f as getContext, g as get_store_value } from './lifecycle-DkuQBIPN.js';
import { p as page } from './stores-ClpLLrvc.js';
import { b as base } from './paths-CYDIOyak.js';
import './client-yexbOeKf.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import dayjs from 'dayjs';
import '@stripe/stripe-js';
import './exports-BGi7-Rnc.js';

function getHrefBetween(from, to) {
  if (from.protocol !== to.protocol) {
    return to.href;
  }
  if (to.password || to.username) {
    const credentials = [to.username, to.password].filter(Boolean).join(":");
    return "//" + credentials + "@" + to.host + to.pathname + to.search + to.hash;
  }
  if (from.host !== to.host) {
    return "//" + to.host + to.pathname + to.search + to.hash;
  }
  return to.pathname + to.search + to.hash;
}
function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2, currentUrl).pathname;
  if (url.origin !== currentUrl.origin) {
    return true;
  }
  if (!url.pathname.startsWith(absoluteBase)) {
    return true;
  }
  return false;
}
function translatePath(path, targetLanguage, translations, opts) {
  const { path: targetedPathSource, lang, dataSuffix } = getPathInfo(path, {
    base: opts.base,
    availableLanguageTags: opts.availableLanguageTags,
    defaultLanguageTag: opts.defaultLanguageTag
  });
  const canonicalPath = getCanonicalPath(targetedPathSource, lang, translations);
  const translatedPathTarget = getTranslatedPath(canonicalPath, targetLanguage, translations);
  return serializeRoute({
    path: translatedPathTarget,
    base: opts.base,
    dataSuffix,
    includeLanguage: true,
    lang: targetLanguage,
    defaultLanguageTag: opts.defaultLanguageTag,
    prefixDefaultLanguage: opts.prefixDefaultLanguage
  });
}
const ParaglideJS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let autodetectedLanguage;
  let lang;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const absoluteBase = normaliseBase$1(base, new URL($page.url)) || "/";
  let { languageTag: languageTag2 = void 0 } = $$props;
  let { i18n: i18n2 } = $$props;
  function translateHref(href, hreflang) {
    const from = new URL(get_store_value(page).url);
    const original_to = new URL(href, new URL(from));
    if (isExternal(original_to, from, absoluteBase)) {
      return href;
    }
    if (i18n2.config.exclude(original_to.pathname)) {
      return href;
    }
    const language = hreflang ?? lang;
    const { path: canonicalPath } = getPathInfo(original_to.pathname, {
      base: absoluteBase,
      availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
      defaultLanguageTag: i18n2.config.defaultLanguageTag
    });
    const translatedPath = getTranslatedPath(canonicalPath, language, i18n2.config.translations);
    const newPathname = serializeRoute({
      base: absoluteBase,
      lang: language,
      path: translatedPath,
      dataSuffix: void 0,
      includeLanguage: true,
      defaultLanguageTag: i18n2.config.defaultLanguageTag,
      prefixDefaultLanguage: i18n2.config.prefixDefaultLanguage
    });
    const to = new URL(original_to);
    to.pathname = newPathname;
    return getHrefBetween(from, to);
  }
  setContext(PARAGLIDE_CONTEXT_KEY, { translateHref });
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.languageTag === void 0 && $$bindings.languageTag && languageTag2 !== void 0) $$bindings.languageTag(languageTag2);
  if ($$props.i18n === void 0 && $$bindings.i18n && i18n2 !== void 0) $$bindings.i18n(i18n2);
  autodetectedLanguage = i18n2.getLanguageFromUrl($page.url);
  lang = languageTag2 ?? autodetectedLanguage;
  {
    i18n2.config.runtime.setLanguageTag(lang);
  }
  $$unsubscribe_page();
  return `  ${$$result.head += `<!-- HEAD_svelte-gz0ys9_START -->${i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude($page.url.pathname) ? ` ${i18n2.config.runtime.availableLanguageTags.length >= 1 ? `${each(i18n2.config.runtime.availableLanguageTags, (lang2) => {
    let path = translatePath($page.url.pathname, lang2, i18n2.config.translations, {
      base: absoluteBase,
      availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
      defaultLanguageTag: i18n2.config.defaultLanguageTag,
      prefixDefaultLanguage: i18n2.config.prefixDefaultLanguage
    }), fullUrl = new URL(path, new URL($page.url));
    return `   <link rel="alternate"${add_attribute("hreflang", lang2, 0)}${add_attribute("href", fullUrl.href, 0)}>`;
  })}` : ``}` : ``}<!-- HEAD_svelte-gz0ys9_END -->`, ""}  ${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    (() => {
      const locale = languageTag();
      dayjs.locale(locale);
    })();
  }
  return `${$$result.head += `<!-- HEAD_svelte-1y6ea49_START -->${data.isApp ? `<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">` : ``}<!-- HEAD_svelte-1y6ea49_END -->`, ""} ${validate_component(ParaglideJS, "ParaglideJS").$$render($$result, { i18n }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DqrcFsNu.js.map
