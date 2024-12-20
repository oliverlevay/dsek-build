import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { twMerge } from 'tailwind-merge';

const EntitySearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: clazz = "" } = $$props;
  let { endpoint } = $$props;
  let { isSearching = false } = $$props;
  let { onSelect = void 0 } = $$props;
  const handleSearch = (searchValue) => {
    if (timeout) clearTimeout(timeout);
    if (searchValue.length < 3) {
      reset();
      return;
    }
    isSearching = true;
    timeout = setTimeout(getEntities(searchValue), 300);
  };
  let { year = void 0 } = $$props;
  let timeout = void 0;
  let searchResults = null;
  const getEntities = (searchValue) => async () => {
    if (!searchValue) {
      reset();
      return;
    }
    const url = new URL($page.url.origin + endpoint);
    url.searchParams.append("search", searchValue);
    if (year) {
      url.searchParams.append("year", year.toString());
    }
    const data = await fetch(url, { method: "GET" }).then((res) => {
      if (!res.ok) {
        handleError();
        return;
      }
      return res.json();
    }).catch(() => handleError());
    searchResults = data || [];
    isSearching = false;
  };
  const handleError = () => {
    console.error("Failed to fetch entities");
    reset();
  };
  const reset = () => {
    searchResults = null;
    isSearching = false;
  };
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.endpoint === void 0 && $$bindings.endpoint && endpoint !== void 0) $$bindings.endpoint(endpoint);
  if ($$props.isSearching === void 0 && $$bindings.isSearching && isSearching !== void 0) $$bindings.isSearching(isSearching);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0) $$bindings.onSelect(onSelect);
  if ($$props.handleSearch === void 0 && $$bindings.handleSearch && handleSearch !== void 0) $$bindings.handleSearch(handleSearch);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  $$unsubscribe_page();
  return `<div${add_attribute("class", twMerge("dropdown overflow-visible", clazz), 0)}>${slots.default ? slots.default({}) : ``} <ul class="menu-compact menu dropdown-content join join-vertical z-10 flex max-h-80 min-w-[20rem] flex-col flex-nowrap overflow-visible overflow-y-auto rounded-md bg-base-100 p-0 shadow shadow-black">${searchResults != null ? `${each(searchResults, (option) => {
    return `<li><button type="button" class="join-item w-full border-b border-b-base-content/10">${slots.entity ? slots.entity({ option }) : ``}</button> </li>`;
  })} ${searchResults.length === 0 ? `<li class="w-full border-b border-b-base-content/10" data-svelte-h="svelte-lherye"><button type="button" disabled class="disabled">Inga resultat hittades</button></li>` : ``}` : ``}</ul></div>`;
});

export { EntitySearch as E };
//# sourceMappingURL=EntitySearch-D4ZWMg82.js.map
