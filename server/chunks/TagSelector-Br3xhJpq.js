import { k as compute_rest_props, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, e as each, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';

const TagSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTags;
  let $$restProps = compute_rest_props($$props, ["onChange", "name", "allTags", "selectedTags"]);
  let { onChange = () => {
    searchValue = "";
  } } = $$props;
  let { name = void 0 } = $$props;
  let { allTags = [] } = $$props;
  let { selectedTags = [] } = $$props;
  let searchValue = "";
  let autocompleteEl;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.allTags === void 0 && $$bindings.allTags && allTags !== void 0) $$bindings.allTags(allTags);
  if ($$props.selectedTags === void 0 && $$bindings.selectedTags && selectedTags !== void 0) $$bindings.selectedTags(selectedTags);
  filteredTags = allTags.filter((tag) => tag.name.toLowerCase().includes(searchValue.toLowerCase()) && !selectedTags.map((tag2) => tag2.id).includes(tag.id));
  return `<div class="dropdown"> <div class="input input-bordered flex h-auto min-h-12 items-center gap-2 py-2"${add_attribute("tabindex", 0, 0)} role="combobox" aria-controls="tags-panel" aria-expanded="false"><div class="flex flex-1 flex-wrap gap-1">${selectedTags.length > 0 ? `${each(selectedTags, (tag) => {
    let originalTag = allTags.find((t) => t.id === tag.id);
    return ` <button type="button">${validate_component(TagChip, "TagChip").$$render(
      $$result,
      {
        tag: originalTag,
        class: "after:ml-2 after:content-['x']"
      },
      {},
      {}
    )} </button>`;
  })}` : ``} <input${spread(
    [
      { name: escape_attribute_value(name) },
      {
        id: escape_attribute_value(name ?? "autocomplete")
      },
      { autocomplete: "off" },
      { autocapitalize: "off" },
      { type: "text" },
      { placeholder: "Taggar" },
      { class: "bg-transparent" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("value", searchValue, 0)}${add_attribute("this", autocompleteEl, 0)}></div> ${selectedTags.length > 0 ? `<button type="button" class="btn btn-xs" data-svelte-h="svelte-coak7p">Clear</button>` : ``}</div> <ul${add_attribute("tabindex", 0, 0)} role="listbox" class="menu-compact menu dropdown-content join join-vertical z-10 flex max-h-80 w-full flex-col flex-nowrap overflow-y-auto rounded-md bg-base-100 shadow lg:max-w-[20rem]" id="tags-panel">${each(filteredTags, (tag) => {
    return `<li><button type="button" class="${"join-item w-full border-b border-b-base-content/10 " + escape(
      selectedTags.includes(tag) ? "bg-primary hover:bg-primary-content hover:text-primary" : "",
      true
    )}">${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}</button> </li>`;
  })} ${filteredTags.length === 0 ? `<li class="w-full border-b border-b-base-content/10" data-svelte-h="svelte-15ozbol"><button type="button" disabled class="disabled">No tags</button></li>` : ``}</ul></div>`;
});

export { TagSelector as T };
//# sourceMappingURL=TagSelector-Br3xhJpq.js.map
