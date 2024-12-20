import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute } from './ssr-BoMjCg5r.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import { p as page } from './stores-ClpLLrvc.js';

const SearchBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let inputField;
  $$unsubscribe_page();
  return `<div class="relative min-w-72 flex-1"><input name="search" type="text" placeholder="Search" class="input input-bordered w-full"${add_attribute("value", $page.url.searchParams.get("search") ?? "", 0)}${add_attribute("this", inputField, 0)}> ${``}</div>`;
});

export { SearchBar as S };
//# sourceMappingURL=SearchBar-CQTZM987.js.map
