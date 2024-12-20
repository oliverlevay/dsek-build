import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';
import { D as DsekLogo } from './DsekLogo-nckDQWC4.js';

const NavIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${icon === "dsek-icon" ? `${validate_component(DsekLogo, "DsekLogo").$$render(
    $$result,
    {
      class: twMerge("size-6 text-primary", clazz)
    },
    {},
    {}
  )}` : `<span${add_attribute("class", twMerge(`${icon} size-6 text-primary`, clazz), 0)}></span>`}`;
});

export { NavIcon as N };
//# sourceMappingURL=NavIcon-85EhGWcK.js.map
