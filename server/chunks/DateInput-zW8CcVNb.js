import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, s as spread, d as escape_object, g as escape_attribute_value, a as add_attribute } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let internal = date.toLocaleString("sv").split(" ").join("T").slice(0, 16);
  const input = (x) => {
    const newDateString = x.toLocaleString("sv").split(" ").join("T").slice(0, 16);
    if (internal === newDateString) return;
    internal = newDateString;
  };
  const output = (x) => {
    const newDate = new Date(x);
    if (date.getTime() === newDate.getTime()) return;
    date = new Date(x);
  };
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  {
    input(date);
  }
  {
    output(internal);
  }
  return `<input${spread(
    [
      { type: "datetime-local" },
      escape_object($$props),
      {
        class: escape_attribute_value(twMerge("input input-bordered", $$props["class"] ?? ""))
      }
    ],
    {}
  )}${add_attribute("value", internal, 0)}>`;
});

export { DateInput as D };
//# sourceMappingURL=DateInput-zW8CcVNb.js.map
