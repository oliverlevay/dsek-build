import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { twMerge } from 'tailwind-merge';

const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title }, {}, {})}  ${!$page.data.isApp ? ` <h1${add_attribute("class", twMerge("page-title mb-4 text-2xl font-bold", clazz), 0)}>${escape(title)} ${slots["after-title"] ? slots["after-title"]({}) : ``}</h1>` : ``}`;
});

export { PageHeader as P };
//# sourceMappingURL=PageHeader-BOcEcHZe.js.map
