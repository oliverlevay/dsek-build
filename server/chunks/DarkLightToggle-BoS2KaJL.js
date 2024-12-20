import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { twMerge } from 'tailwind-merge';

const DarkLightToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: clazz = "" } = $$props;
  let isCurrentThemeLight = $page.data["theme"] === "light";
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_page();
  return `<button class="${[
    escape(twMerge("btn btn-ghost swap swap-rotate *:text-2xl", clazz), true),
    isCurrentThemeLight ? "swap-active" : ""
  ].join(" ").trim()}"> <span class="swap-on i-mdi-weather-night"></span>  <span class="swap-off i-mdi-weather-sunny"></span></button>`;
});

export { DarkLightToggle as D };
//# sourceMappingURL=DarkLightToggle-BoS2KaJL.js.map
