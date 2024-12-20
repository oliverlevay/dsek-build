import { k as compute_rest_props, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { E as EntitySearch } from './EntitySearch-D4ZWMg82.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';

const MemberSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "isSearching", "onSelect", "handleSearch", "endpoint", "year"]);
  let { class: clazz = "" } = $$props;
  let { isSearching = false } = $$props;
  let { onSelect } = $$props;
  let { handleSearch } = $$props;
  let { endpoint = "/api/members" } = $$props;
  let { year = void 0 } = $$props;
  const getOption = (option) => option;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.isSearching === void 0 && $$bindings.isSearching && isSearching !== void 0) $$bindings.isSearching(isSearching);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0) $$bindings.onSelect(onSelect);
  if ($$props.handleSearch === void 0 && $$bindings.handleSearch && handleSearch !== void 0) $$bindings.handleSearch(handleSearch);
  if ($$props.endpoint === void 0 && $$bindings.endpoint && endpoint !== void 0) $$bindings.endpoint(endpoint);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(EntitySearch, "EntitySearch").$$render(
      $$result,
      Object.assign({}, { endpoint }, { class: clazz }, $$restProps, { year }, { isSearching }, { onSelect }, { handleSearch }),
      {
        isSearching: ($$value) => {
          isSearching = $$value;
          $$settled = false;
        },
        onSelect: ($$value) => {
          onSelect = $$value;
          $$settled = false;
        },
        handleSearch: ($$value) => {
          handleSearch = $$value;
          $$settled = false;
        }
      },
      {
        entity: ({ option }) => {
          return `<div slot="entity">${validate_component(AuthorSignature, "AuthorSignature").$$render(
            $$result,
            {
              links: false,
              member: getOption(option),
              size: "md"
            },
            {},
            {}
          )}</div>`;
        },
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { MemberSearch as M };
//# sourceMappingURL=MemberSearch-PVKkS14C.js.map
