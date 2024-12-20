import { c as create_ssr_component, a as add_attribute } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const MemberAvatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let backupUrl;
  let { member = null } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  backupUrl = "https://gravatar.com/avatar?s=100&d=mp";
  return `<div${add_attribute("class", twMerge("avatar aspect-square w-8 overflow-hidden rounded-full", clazz), 0)}><figure class="relative w-full"><img${add_attribute("src", member?.picturePath || backupUrl, 0)} alt=""> ${slots.default ? slots.default({}) : ``}</figure></div>`;
});

export { MemberAvatar as M };
//# sourceMappingURL=MemberAvatar-DsbxH0w2.js.map
