import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';

const Labeled = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { label = null } = $$props;
  let { explanation = null } = $$props;
  let { error = void 0 } = $$props;
  let { fullWidth = false } = $$props;
  let { invisibleText = false } = $$props;
  let { required = null } = $$props;
  let { for: _for = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.explanation === void 0 && $$bindings.explanation && explanation !== void 0) $$bindings.explanation(explanation);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0) $$bindings.fullWidth(fullWidth);
  if ($$props.invisibleText === void 0 && $$bindings.invisibleText && invisibleText !== void 0) $$bindings.invisibleText(invisibleText);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.for === void 0 && $$bindings.for && _for !== void 0) $$bindings.for(_for);
  return `<label${add_attribute("class", twMerge("form-control relative", fullWidth ? "w-full md:w-auto " : "", clazz), 0)}${add_attribute("for", _for, 0)}>${label ? `<div class="label"><span class="${["label-text", invisibleText ? "invisible" : ""].join(" ").trim()}">${escape(label)}${required ? ` <span class="font-bold" data-svelte-h="svelte-mqffv4">*</span>` : ``} ${explanation ? `<span class="badge badge-neutral tooltip aspect-square px-1"${add_attribute("data-tip", explanation, 0)}>?</span>` : ``}</span></div>` : ``} ${slots.default ? slots.default({ label }) : ``} ${error !== void 0 ? `<div class="label"><span class="${["form-error label-text-alt text-error", invisibleText ? "invisible" : ""].join(" ").trim()}">${typeof error === "string" ? `${escape(error)}` : `${escape(error.join(", "))}`}</span></div>` : ``}</label>`;
});

export { Labeled as L };
//# sourceMappingURL=Labeled-BBKTPJST.js.map
