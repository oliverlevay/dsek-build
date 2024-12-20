import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { p as page } from './stores-ClpLLrvc.js';
import { twMerge } from 'tailwind-merge';

const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPage;
  let getPageLink;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: clazz = "" } = $$props;
  let { count } = $$props;
  let { getPageName = (n) => (n + 1).toString() } = $$props;
  let { getPageNumber = (n) => +n - 1 } = $$props;
  let { fieldName = "page" } = $$props;
  let { showPrev = true } = $$props;
  let { showNext = true } = $$props;
  let { showFirst = false } = $$props;
  let { showLast = false } = $$props;
  let { keepScrollPosition = false } = $$props;
  let carousel;
  let pageButtons = [];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0) $$bindings.count(count);
  if ($$props.getPageName === void 0 && $$bindings.getPageName && getPageName !== void 0) $$bindings.getPageName(getPageName);
  if ($$props.getPageNumber === void 0 && $$bindings.getPageNumber && getPageNumber !== void 0) $$bindings.getPageNumber(getPageNumber);
  if ($$props.fieldName === void 0 && $$bindings.fieldName && fieldName !== void 0) $$bindings.fieldName(fieldName);
  if ($$props.showPrev === void 0 && $$bindings.showPrev && showPrev !== void 0) $$bindings.showPrev(showPrev);
  if ($$props.showNext === void 0 && $$bindings.showNext && showNext !== void 0) $$bindings.showNext(showNext);
  if ($$props.showFirst === void 0 && $$bindings.showFirst && showFirst !== void 0) $$bindings.showFirst(showFirst);
  if ($$props.showLast === void 0 && $$bindings.showLast && showLast !== void 0) $$bindings.showLast(showLast);
  if ($$props.keepScrollPosition === void 0 && $$bindings.keepScrollPosition && keepScrollPosition !== void 0) $$bindings.keepScrollPosition(keepScrollPosition);
  currentPage = $page.url.searchParams.get(fieldName) ?? getPageName(0).toString();
  getPageLink = (page2) => {
    const searchParams = new URLSearchParams($page.url.searchParams);
    if (typeof page2 === "number") page2 = getPageName(page2);
    searchParams.set(fieldName, page2);
    return `?${searchParams.toString()}`;
  };
  $$unsubscribe_page();
  return `  <div${add_attribute("class", twMerge("join w-full", clazz), 0)} role="listbox" tabindex="0">${showFirst ? `<a class="${[
    "btn carousel-item join-item btn-xs sm:btn-sm md:btn-md",
    currentPage == getPageName(0) ? "btn-disabled" : ""
  ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(getPageLink(0), void 0), 0)}${add_attribute("data-sveltekit-noscroll", keepScrollPosition, 0)}><span class="i-mdi-page-first"></span></a>` : ``} ${showPrev ? `<a class="${[
    "btn carousel-item join-item btn-xs sm:btn-sm md:btn-md",
    currentPage == getPageName(0) ? "btn-disabled" : ""
  ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(getPageLink(getPageNumber(currentPage) - 1), void 0), 0)}${add_attribute("data-sveltekit-noscroll", keepScrollPosition, 0)}><span class="i-mdi-chevron-left"></span></a>` : ``} <div class="carousel join-item flex"${add_attribute("this", carousel, 0)}>${each([...Array(count).keys()].map(getPageName), (page2, i) => {
    return `<a class="${[
      "btn carousel-item join-item btn-xs sm:btn-sm md:btn-md",
      (page2 == currentPage ? "btn-active" : "") + " " + (page2 == currentPage ? "btn-disabled" : "")
    ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(getPageLink(page2), void 0), 0)}${add_attribute("data-sveltekit-noscroll", keepScrollPosition, 0)}${add_attribute("this", pageButtons[i], 0)}>${escape(page2)} </a>`;
  })}</div> ${showNext ? `<a class="${[
    "btn carousel-item join-item btn-xs sm:btn-sm md:btn-md",
    currentPage == getPageName(count - 1) ? "btn-disabled" : ""
  ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(getPageLink(getPageNumber(currentPage) + 1), void 0), 0)}${add_attribute("data-sveltekit-noscroll", keepScrollPosition, 0)}><span class="i-mdi-chevron-right"></span></a>` : ``} ${showLast ? `<a class="${[
    "btn carousel-item join-item btn-xs sm:btn-sm md:btn-md",
    currentPage == getPageName(count - 1) ? "btn-disabled" : ""
  ].join(" ").trim()}"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(getPageLink(count - 1), void 0), 0)}${add_attribute("data-sveltekit-noscroll", keepScrollPosition, 0)}><span class="i-mdi-page-last"></span></a>` : ``}</div>`;
});

export { Pagination as P };
//# sourceMappingURL=Pagination-DD-n8kEM.js.map
