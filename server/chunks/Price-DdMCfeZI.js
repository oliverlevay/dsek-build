import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const Price = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { price } = $$props;
  const formatter = new Intl.NumberFormat(
    "sv-SE",
    {
      style: "currency",
      currency: "SEK",
      currencyDisplay: "code",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }
  );
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0) $$bindings.price(price);
  return `<span${add_attribute("class", twMerge("font-semibold text-success", clazz), 0)}>${slots.prefix ? slots.prefix({}) : ``} ${escape(formatter.format(price / 100))} ${slots.suffix ? slots.suffix({}) : ``}</span>`;
});

export { Price as P };
//# sourceMappingURL=Price-DdMCfeZI.js.map
