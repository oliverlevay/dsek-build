import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';

const ClassBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  let { size = "sm" } = $$props;
  const colors = {
    D: "badge-primary",
    C: "badge-secondary",
    "VR/AR": "badge-primary",
    E: "border-[#fafaf9] text-[#fafaf9]",
    BME: "border-[#fafaf9] text-[#fafaf9]",
    Dokt: "border-[#c0c0c0] text-[#c0c0c0]",
    "?": "border-gray-400 text-gray-400"
  };
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  return `${member.classProgramme && member.classYear ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/?programme=${member.classProgramme}&year=${member.classYear}`, void 0), 0)}><span class="${"badge badge-outline " + escape(
    size === "sm" ? "badge-sm text-xs font-light" : "badge-lg text-xl font-semibold",
    true
  ) + " " + escape(colors[member.classProgramme] ?? colors["?"], true)}">${escape(member.classProgramme)}${escape(member.classYear?.toString().substring(2))}</span></a>` : ``}`;
});

export { ClassBadge as C };
//# sourceMappingURL=ClassBadge-C_BgbZZ_.js.map
