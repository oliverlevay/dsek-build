import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, s as spread, d as escape_object } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const LoadingButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = void 0 } = $$props;
  let { isLoading = false } = $$props;
  let { disabled = false } = $$props;
  let { delay = 500 } = $$props;
  let { class: clazz = void 0 } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  function pArAgLiDe_translate_attribute_pass_handle_attributes(attrs, attribute_translations) {
    if (attrs["data-no-translate"] === true) return attrs;
    for (const { attribute_name, lang_attribute_name } of attribute_translations) {
      if (attribute_name in attrs) {
        const attr = attrs[attribute_name];
        const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : void 0;
        attrs[attribute_name] = pArAgLiDe_translate_attribute_pass_translateAttribute(attr, lang_attr);
      }
    }
    return attrs;
  }
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0) $$bindings.isLoading(isLoading);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0) $$bindings.delay(delay);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<button${spread(
    [
      escape_object(pArAgLiDe_translate_attribute_pass_handle_attributes(
        {
          ...$$props,
          "class": twMerge("relative", clazz),
          "disabled": disabled || isLoading
        },
        [{ attribute_name: "formaction" }]
      ))
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``} <div class="${[
    "absolute inset-0 flex items-center justify-center transition-all",
    !isLoading ? "opacity-0" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-yoou9c"><span class="loading"></span></div></button>`;
});

export { LoadingButton as L };
//# sourceMappingURL=LoadingButton-DNerNunK.js.map
