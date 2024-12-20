import { k as compute_rest_props, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { twMerge } from 'tailwind-merge';

const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "name",
    "label",
    "placeholder",
    "value",
    "required",
    "error",
    "explanation",
    "textarea",
    "class"
  ]);
  let { name } = $$props;
  let { label = null } = $$props;
  let { placeholder = label } = $$props;
  let { value = null } = $$props;
  let { required = null } = $$props;
  let { error = void 0 } = $$props;
  let { explanation = null } = $$props;
  let { textarea = false } = $$props;
  let { class: clazz = "" } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.explanation === void 0 && $$bindings.explanation && explanation !== void 0) $$bindings.explanation(explanation);
  if ($$props.textarea === void 0 && $$bindings.textarea && textarea !== void 0) $$bindings.textarea(textarea);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${validate_component(Labeled, "Labeled").$$render($$result, { label, error, explanation, required }, {}, {
    default: () => {
      return `${textarea ? `<textarea${spread(
        [
          { id: escape_attribute_value(name) },
          { name: escape_attribute_value(name) },
          {
            class: escape_attribute_value(twMerge("textarea textarea-bordered hover:border-base-content", clazz))
          },
          {
            placeholder: escape_attribute_value(placeholder)
          },
          { required: required || null },
          escape_object($$restProps)
        ],
        {}
      )}>${escape(value || "")}</textarea>` : `<input${spread(
        [
          { id: escape_attribute_value(name) },
          { name: escape_attribute_value(name) },
          {
            class: escape_attribute_value(twMerge("input input-bordered hover:border-base-content", clazz))
          },
          { type: "text" },
          {
            placeholder: escape_attribute_value(placeholder)
          },
          { required: required || null },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("value", value, 0)}>`}`;
    }
  })}`;
});

export { Input as I };
//# sourceMappingURL=Input-DbabE1Vy.js.map
