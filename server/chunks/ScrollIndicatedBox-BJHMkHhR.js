import { c as create_ssr_component, b as escape } from './ssr-BoMjCg5r.js';

const ScrollIndicatedBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { element } = $$props;
  if ($$props.element === void 0 && $$bindings.element && element !== void 0) $$bindings.element(element);
  {
    (() => {
      if (element && element.onscroll == null) {
        element.onscroll = () => {
          element = element;
        };
      }
    })();
  }
  return `<div class="relative">${slots.default ? slots.default({}) : ``} <div class="${"arrow-indicator pointer-events-none absolute right-1/2 top-2 translate-x-1/2 rounded-md bg-primary/40 px-2 text-xl transition-opacity " + escape(
    element && element.scrollTop > 20 ? "opacity-100" : "opacity-0",
    true
  )}">↑</div> <div class="${"arrow-indicator pointer-events-none absolute bottom-2 right-1/2 translate-x-1/2 rounded-md bg-primary/40 px-2 text-xl transition-opacity " + escape(
    element && element.scrollHeight > element.clientHeight && element.scrollTop + element.clientHeight < element.scrollHeight - 20 ? "opacity-100" : "opacity-0",
    true
  )}">↓</div></div>`;
});

export { ScrollIndicatedBox as S };
//# sourceMappingURL=ScrollIndicatedBox-BJHMkHhR.js.map
