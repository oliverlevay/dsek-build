import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { eQ as documents_deleteFile, eR as documents_deleteAreYouSure, eS as documents_delete } from './messages-D8OfyZiq.js';

const DeleteFileForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { fileId } = $$props;
  let { fileName } = $$props;
  let deleteModal = void 0;
  superForm(data, { id: fileId });
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.fileId === void 0 && $$bindings.fileId && fileId !== void 0) $$bindings.fileId(fileId);
  if ($$props.fileName === void 0 && $$bindings.fileName && fileName !== void 0) $$bindings.fileName(fileName);
  return `<button class="pointer-events-auto" data-svelte-h="svelte-19iylq7"><span class="i-mdi-delete-outline align-middle text-xl text-error"></span></button> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", deleteModal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(documents_deleteFile())}</h3> <p class="py-4"> <!-- HTML_TAG_START -->${documents_deleteAreYouSure({ fileName })}<!-- HTML_TAG_END --></p> <div class="modal-action"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/deleteFile`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", fileId, 0)}><button type="submit" class="btn btn-error">${escape(documents_delete())}</button></form></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-12cyaa"><button></button></form></dialog>`;
});

export { DeleteFileForm as D };
//# sourceMappingURL=DeleteFileForm-D0oNl9Eq.js.map
