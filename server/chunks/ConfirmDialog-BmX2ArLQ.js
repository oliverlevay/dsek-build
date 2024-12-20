import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { eh as ok, ei as cancel } from './messages-D8OfyZiq.js';
import { twMerge } from 'tailwind-merge';

const ConfirmDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Are you sure?" } = $$props;
  let { description = "" } = $$props;
  let { confirmText = ok() } = $$props;
  let { cancelText = cancel() } = $$props;
  let { formTarget = void 0 } = $$props;
  let { formData = {} } = $$props;
  let { onClose = void 0 } = $$props;
  let { onConfirm = void 0 } = $$props;
  let { confirmClass = void 0 } = $$props;
  let { modal } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.confirmText === void 0 && $$bindings.confirmText && confirmText !== void 0) $$bindings.confirmText(confirmText);
  if ($$props.cancelText === void 0 && $$bindings.cancelText && cancelText !== void 0) $$bindings.cancelText(cancelText);
  if ($$props.formTarget === void 0 && $$bindings.formTarget && formTarget !== void 0) $$bindings.formTarget(formTarget);
  if ($$props.formData === void 0 && $$bindings.formData && formData !== void 0) $$bindings.formData(formData);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.onConfirm === void 0 && $$bindings.onConfirm && onConfirm !== void 0) $$bindings.onConfirm(onConfirm);
  if ($$props.confirmClass === void 0 && $$bindings.confirmClass && confirmClass !== void 0) $$bindings.confirmClass(confirmClass);
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0) $$bindings.modal(modal);
  return `  <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", modal, 0)}><div class="modal-box">${slots.title ? slots.title({}) : ` <h1 class="mb-4 text-lg font-bold">${escape(title)}</h1> `} ${slots.description ? slots.description({}) : ` <p>${escape(description)}</p> `} <div class="modal-action">${slots.action ? slots.action({}) : ` <button class="btn">${escape(cancelText)}</button> <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(formTarget, void 0), 0)}>${each(Object.entries(formData), ([name, value]) => {
    return `<input type="hidden"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}>`;
  })} <button type="submit"${add_attribute("class", twMerge("btn btn-primary", confirmClass), 0)}>${escape(confirmText)}</button></form> `}</div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-1wtee5r"><button class="cursor-auto"></button></form></dialog>`;
});

export { ConfirmDialog as C };
//# sourceMappingURL=ConfirmDialog-BmX2ArLQ.js.map
