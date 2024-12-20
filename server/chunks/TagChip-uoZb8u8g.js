import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const TagChip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag = void 0 } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${tag ? `<span${add_attribute("class", twMerge("badge badge-md relative cursor-pointer overflow-hidden whitespace-nowrap border-[--tag-color] text-xs before:absolute before:inset-0 before:bg-[--tag-color] before:opacity-10 before:content-['']", clazz), 0)} style="${"--tag-color: " + escape(tag.color || "var(--bc)", true)}">${escape(tag.name)}</span>` : ``}`;
});

export { TagChip as T };
//# sourceMappingURL=TagChip-uoZb8u8g.js.map
