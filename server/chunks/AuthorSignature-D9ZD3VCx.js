import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from './ssr-BoMjCg5r.js';
import { C as CustomAuthorImage, M as MemberImage } from './MemberImage-CkXEWMZT.js';
import { a as getFullName } from './member-DajX-teH.js';
import { twMerge } from 'tailwind-merge';

const AuthorSignature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { member } = $$props;
  let { customAuthor = null } = $$props;
  let { position = void 0 } = $$props;
  let { type = "Member" } = $$props;
  let { size = "lg" } = $$props;
  let { links = true } = $$props;
  const sizeToWidth = {
    sm: "w-4",
    md: "w-8",
    lg: "w-12",
    xl: "w-16"
  };
  const sizeToGap = {
    sm: "gap-2",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4"
  };
  const sizeToText = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.customAuthor === void 0 && $$bindings.customAuthor && customAuthor !== void 0) $$bindings.customAuthor(customAuthor);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0) $$bindings.links(links);
  return `<div${add_attribute("class", twMerge(`${sizeToGap[size]} flex max-w-full flex-row items-start overflow-hidden`, clazz), 0)}><div class="avatar shrink-0"><div class="${escape(sizeToWidth[size], true) + " m-2 rounded-full"}">${type == "Custom" ? `${validate_component(CustomAuthorImage, "CustomAuthorImage").$$render($$result, { customAuthor }, {}, {})}` : `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}`, void 0), 0)}${add_attribute("tabindex", links ? 0 : -1, 0)} class="${"link transition-opacity hover:opacity-80 focus:opacity-80 " + escape(links ? "" : "pointer-events-none", true)}">${validate_component(MemberImage, "MemberImage").$$render($$result, { member }, {}, {})}</a>`}</div></div> <div class="min-w-0 flex-1 overflow-hidden">${type == "Custom" && customAuthor != null ? `<div class="overflow-hidden"><h3${add_attribute("class", `${sizeToText[size]} line-clamp-3 break-words font-semibold`, 0)}>${escape(customAuthor.name)}</h3></div>` : `<div class="overflow-hidden"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}`, void 0), 0)}${add_attribute("tabindex", links ? 0 : -1, 0)} class="${[
    "block transition-opacity hover:opacity-80 focus:opacity-80",
    !links ? "pointer-events-none" : ""
  ].join(" ").trim()}"><h3${add_attribute("class", `${sizeToText[size]} line-clamp-3 break-words font-semibold leading-tight`, 0)}${add_attribute("title", getFullName(member), 0)}>${escape(getFullName(member))}</h3></a></div>`} <div class="flex justify-between text-sm">${(type !== "Custom" || customAuthor == null) && position ? `<div class="min-w-0 truncate opacity-80"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/positions/${position.id}`, void 0), 0)}${add_attribute("tabindex", links ? 0 : -1, 0)} class="${"link-primary no-underline transition-opacity hover:opacity-80 focus:opacity-80 " + escape(links ? "" : "pointer-events-none", true)}">${escape(position.name)}</a></div>` : `<div></div>`} <div class="shrink-0">${slots.end ? slots.end({}) : ``}</div></div></div></div>`;
});

export { AuthorSignature as A };
//# sourceMappingURL=AuthorSignature-D9ZD3VCx.js.map
