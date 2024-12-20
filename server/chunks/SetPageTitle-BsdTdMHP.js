import { b as subscribe, j as set_store_value } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape } from './ssr-BoMjCg5r.js';
import { p as pageTitle } from './pageTitle-Dw7hiKEr.js';

const SetPageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageTitle, $$unsubscribe_pageTitle;
  $$unsubscribe_pageTitle = subscribe(pageTitle, (value) => $pageTitle = value);
  let { title } = $$props;
  set_store_value(pageTitle, $pageTitle = title ?? "D-sektionen", $pageTitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  $$unsubscribe_pageTitle();
  return `${$$result.head += `<!-- HEAD_svelte-jg7zdr_START -->${title ? `${$$result.title = `<title>${escape(title)} | D-sektionen</title>`, ""}` : `${$$result.title = `<title>D-sektionen</title>`, ""}`}<!-- HEAD_svelte-jg7zdr_END -->`, ""}`;
});

export { SetPageTitle as S };
//# sourceMappingURL=SetPageTitle-BsdTdMHP.js.map
