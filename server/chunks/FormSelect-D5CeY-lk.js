import { k as compute_rest_props, f as getContext, b as subscribe, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { twMerge } from 'tailwind-merge';

const FormSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy;
  let value;
  let errors;
  let constraints;
  let $$restProps = compute_rest_props($$props, ["superform", "field", "label", "name", "options", "class"]);
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $constraints, $$unsubscribe_constraints = noop, $$subscribe_constraints = () => ($$unsubscribe_constraints(), $$unsubscribe_constraints = subscribe(constraints, ($$value) => $constraints = $$value), constraints);
  let $$unsubscribe_value = noop, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $$value), value);
  let { superform } = $$props;
  let { field } = $$props;
  let { label = null } = $$props;
  let { name = void 0 } = $$props;
  let { options } = $$props;
  let { class: clazz = void 0 } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  fieldProxy = formFieldProxy(superform, field);
  $$subscribe_value(value = fieldProxy.value);
  $$subscribe_errors(errors = fieldProxy.errors);
  $$subscribe_constraints(constraints = fieldProxy.constraints);
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_value();
  return `${validate_component(Labeled, "Labeled").$$render($$result, Object.assign({}, { label }, { error: $errors }, { required: $constraints?.required }, $$restProps), {}, {
    default: () => {
      return `<select${spread(
        [
          {
            class: escape_attribute_value(twMerge("select select-bordered transition-all hover:enabled:border-base-content", clazz))
          },
          {
            name: escape_attribute_value(name ?? field)
          },
          escape_object($constraints),
          escape_object($$restProps)
        ],
        {}
      )}>${each(options, (option) => {
        return `<option${add_attribute("value", option.value, 0)}>${escape(option.label ?? option.value)}</option>`;
      })}</select>`;
    }
  })}`;
});

export { FormSelect as F };
//# sourceMappingURL=FormSelect-D5CeY-lk.js.map
