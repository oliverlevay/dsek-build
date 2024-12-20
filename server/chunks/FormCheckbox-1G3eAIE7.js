import { k as compute_rest_props, f as getContext, b as subscribe, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object, a as add_attribute } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { twMerge } from 'tailwind-merge';

const FormCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy;
  let value;
  let errors;
  let $$restProps = compute_rest_props($$props, ["superform", "field", "name", "label", "class"]);
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $value, $$unsubscribe_value = noop, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $value = $$value), value);
  let { superform } = $$props;
  let { field } = $$props;
  let { name = void 0 } = $$props;
  let { label = null } = $$props;
  let { class: clazz = void 0 } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  fieldProxy = formFieldProxy(superform, field);
  $$subscribe_value(value = fieldProxy.value);
  $$subscribe_errors(errors = fieldProxy.errors);
  $$unsubscribe_errors();
  $$unsubscribe_value();
  return `${validate_component(Labeled, "Labeled").$$render($$result, Object.assign({}, { label }, { error: $errors }, $$restProps), {}, {
    default: () => {
      return `<input${spread(
        [
          {
            name: escape_attribute_value(name ?? field)
          },
          { type: "checkbox" },
          {
            class: escape_attribute_value(twMerge("checkbox ml-2", clazz))
          },
          escape_object($$restProps)
        ],
        {}
      )}${add_attribute("checked", $value, 1)}>`;
    }
  })}`;
});

export { FormCheckbox as F };
//# sourceMappingURL=FormCheckbox-1G3eAIE7.js.map
