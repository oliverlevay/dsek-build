import { c as create_ssr_component, a as add_attribute } from './ssr-BoMjCg5r.js';

const CustomAuthorImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { customAuthor } = $$props;
  if ($$props.customAuthor === void 0 && $$bindings.customAuthor && customAuthor !== void 0) $$bindings.customAuthor(customAuthor);
  return `<img${add_attribute("src", customAuthor?.imageUrl ?? "https://gravatar.com/avatar?s=100&d=mp", 0)}${add_attribute("alt", customAuthor?.name ?? "Unknown", 0)}>`;
});
const MemberImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  return `<img${add_attribute("src", member.picturePath || "https://gravatar.com/avatar?s=100&d=mp", 0)} alt="Member avatar">`;
});

export { CustomAuthorImage as C, MemberImage as M };
//# sourceMappingURL=MemberImage-CkXEWMZT.js.map
