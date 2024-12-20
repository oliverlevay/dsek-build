import { k as compute_rest_props, f as getContext, b as subscribe, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { I as Input } from './Input-DbabE1Vy.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';

const FormInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy;
  let value;
  let errors;
  let constraints;
  let $$restProps = compute_rest_props($$props, ["superform", "field", "name", "label"]);
  let $value, $$unsubscribe_value = noop, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $value = $$value), value);
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $constraints, $$unsubscribe_constraints = noop, $$subscribe_constraints = () => ($$unsubscribe_constraints(), $$unsubscribe_constraints = subscribe(constraints, ($$value) => $constraints = $$value), constraints);
  let { superform } = $$props;
  let { field } = $$props;
  let { name = void 0 } = $$props;
  let { label = null } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fieldProxy = formFieldProxy(superform, field);
    $$subscribe_value(value = fieldProxy.value);
    $$subscribe_errors(errors = fieldProxy.errors);
    $$subscribe_constraints(constraints = fieldProxy.constraints);
    $$rendered = `${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: name ?? field }, { label }, { error: $errors }, $constraints, $$restProps, { value: $value }),
      {
        value: ($$value) => {
          $value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_value();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});

export { FormInput as F };
//# sourceMappingURL=FormInput-Dxuw95TR.js.map
