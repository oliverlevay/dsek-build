import { k as compute_rest_props, f as getContext, b as subscribe, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy, a as fileProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { twMerge } from 'tailwind-merge';

const FormFileInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy;
  let file;
  let errors;
  let constraints;
  let $$restProps = compute_rest_props($$props, ["superform", "field", "label", "name", "accept", "class", "onChange"]);
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $constraints, $$unsubscribe_constraints = noop, $$subscribe_constraints = () => ($$unsubscribe_constraints(), $$unsubscribe_constraints = subscribe(constraints, ($$value) => $constraints = $$value), constraints);
  let $$unsubscribe_file = noop, $$subscribe_file = () => ($$unsubscribe_file(), $$unsubscribe_file = subscribe(file, ($$value) => $$value), file);
  let { superform } = $$props;
  let { field } = $$props;
  let { label = null } = $$props;
  let { name = void 0 } = $$props;
  let { accept = void 0 } = $$props;
  let { class: clazz = void 0 } = $$props;
  let { onChange = void 0 } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0) $$bindings.accept(accept);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  fieldProxy = formFieldProxy(superform, field);
  $$subscribe_file(file = fileProxy(superform, field));
  $$subscribe_errors(errors = fieldProxy.errors);
  $$subscribe_constraints(constraints = fieldProxy.constraints);
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_file();
  return `${validate_component(Labeled, "Labeled").$$render($$result, Object.assign({}, { label }, { error: $errors }, { required: $constraints?.required }, $$restProps), {}, {
    default: () => {
      return `<input${spread(
        [
          { name: escape_attribute_value(name) },
          { type: "file" },
          {
            class: escape_attribute_value(twMerge("file-input file-input-bordered w-full", clazz))
          },
          { accept: escape_attribute_value(accept) },
          escape_object($constraints),
          escape_object($$restProps)
        ],
        {}
      )}>`;
    }
  })}`;
});

export { FormFileInput as F };
//# sourceMappingURL=FormFileInput-BONk2osz.js.map
