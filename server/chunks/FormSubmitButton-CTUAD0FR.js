import { k as compute_rest_props, b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';

const FormSubmitButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["superform", "class"]);
  let $delayed, $$unsubscribe_delayed;
  let { superform } = $$props;
  let { class: clazz = void 0 } = $$props;
  const { delayed } = superform;
  $$unsubscribe_delayed = subscribe(delayed, (value) => $delayed = value);
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_delayed();
  return `${validate_component(LoadingButton, "LoadingButton").$$render($$result, Object.assign({}, { class: clazz }, { type: "submit" }, { isLoading: $delayed }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});

export { FormSubmitButton as F };
//# sourceMappingURL=FormSubmitButton-CTUAD0FR.js.map
