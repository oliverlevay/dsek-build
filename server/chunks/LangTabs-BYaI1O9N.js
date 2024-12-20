import { k as compute_rest_props, f as getContext, b as subscribe, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { twMerge } from 'tailwind-merge';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';

const MarkdownEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "label", "placeholder", "value", "required", "error", "explanation", "class"]);
  let { name } = $$props;
  let { label = null } = $$props;
  let { placeholder = label } = $$props;
  let { value = null } = $$props;
  let { required = null } = $$props;
  let { error = void 0 } = $$props;
  let { explanation = null } = $$props;
  let { class: clazz = "" } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.explanation === void 0 && $$bindings.explanation && explanation !== void 0) $$bindings.explanation(explanation);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${validate_component(Labeled, "Labeled").$$render($$result, { label, error, explanation, required }, {}, {
    default: () => {
      return `<textarea${spread(
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
      )}>${escape(value || "")}</textarea>`;
    }
  })}`;
});
const FormMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    $$rendered = `${validate_component(MarkdownEditor, "MarkdownEditor").$$render(
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
const LangTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activeTab = "sv" } = $$props;
  let { class: clazz = void 0 } = $$props;
  if ($$props.activeTab === void 0 && $$bindings.activeTab && activeTab !== void 0) $$bindings.activeTab(activeTab);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<div role="tablist"${add_attribute("class", twMerge("tabs-boxed tabs relative -mx-4 overflow-hidden p-4 shadow", clazz), 0)}><input type="radio" name="tabs" role="tab" class="tab px-8" aria-label="SV" value="sv" checked${"sv" === activeTab ? add_attribute("checked", true, 1) : ""}> <div role="tabpanel" class="tab-content">${slots.sv ? slots.sv({}) : ``}</div> <input type="radio" name="tabs" role="tab" class="tab px-8" aria-label="EN" value="en"${"en" === activeTab ? add_attribute("checked", true, 1) : ""}> <div role="tabpanel" class="tab-content">${slots.en ? slots.en({}) : ``}</div></div>`;
});

export { FormMarkdown as F, LangTabs as L };
//# sourceMappingURL=LangTabs-BYaI1O9N.js.map
