import { k as compute_rest_props, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, s as spread, d as escape_object, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';

const Autocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredItems;
  let $$restProps = compute_rest_props($$props, ["value", "options"]);
  let { value = "" } = $$props;
  let { options = [] } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  filteredItems = options.filter((item) => item.toLowerCase().includes(value?.toLowerCase() ?? "") && value !== item);
  return `<div class="dropdown"><input${spread(
    [
      { id: "autocomplete" },
      { autocomplete: "off" },
      { autocapitalize: "off" },
      { type: "text" },
      {
        class: "input input-bordered w-full bg-transparent hover:border-base-content"
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("value", value, 0)}> ${filteredItems.length !== 0 ? `<ul${add_attribute("tabindex", 0, 0)} role="listbox" class="menu-compact menu dropdown-content join join-vertical z-10 flex max-h-80 w-full flex-col flex-nowrap overflow-y-auto border-primary bg-base-100 shadow" id="items-panel">${each(filteredItems, (item, i) => {
    return `<li><button type="button" class="join-item w-full border-b border-b-base-content/10">${escape(item)}</button> </li>`;
  })}</ul>` : ``}</div>`;
});

export { Autocomplete as A };
//# sourceMappingURL=Autocomplete-BvKeDqN4.js.map
