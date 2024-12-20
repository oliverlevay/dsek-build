import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { f1 as documents_governing_createNewDocument, f2 as documents_governing_editDocument, f3 as documents_governing_title, f4 as documents_governing_filePath, f5 as documents_governing_example, f6 as documents_governing_policy, f7 as documents_governing_guideline, f8 as documents_governing_create, f9 as documents_governing_update } from './messages-D8OfyZiq.js';

const GoverningDocumentEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let { isCreating } = $$props;
  let { documentId } = $$props;
  let { data } = $$props;
  const { form, errors, constraints, enhance } = superForm(data);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.isCreating === void 0 && $$bindings.isCreating && isCreating !== void 0) $$bindings.isCreating(isCreating);
  if ($$props.documentId === void 0 && $$bindings.documentId && documentId !== void 0) $$bindings.documentId(documentId);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form id="governing-document-editor" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(isCreating ? "?/create" : "?/update", void 0), 0)} class="flex flex-col gap-3"><h1 class="text-2xl font-bold">${escape(isCreating ? documents_governing_createNewDocument() : documents_governing_editDocument())}</h1> ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "title" }, { label: documents_governing_title() }, { required: true }, { error: $errors.title }, $constraints.title, { value: $form.title }),
      {
        value: ($$value) => {
          $form.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} <input name="id" type="hidden"${add_attribute("value", documentId, 0)}> <div class="flex gap-2"><input value="https://github.com/Dsek-LTH/" class="input-border input input-ghost w-full max-w-xs" type="text" disabled> <div class="flex w-full flex-col"><input${spread(
      [
        { id: "url" },
        { name: "url" },
        { class: "input input-bordered w-full" },
        { type: "text" },
        {
          placeholder: escape_attribute_value(documents_governing_filePath())
        },
        escape_object($constraints.url)
      ],
      {}
    )}${add_attribute("value", $form.url, 0)}> <p class="text-xs">${escape(documents_governing_example({
      x: "reglemente/releases/download/latest/reglemente.pdf"
    }))}</p></div></div> ${$errors.url ? `<p class="text-error">${escape($errors.url)}</p>` : ``} <select${spread(
      [
        { id: "type" },
        { name: "type" },
        {
          class: "max-w select select-bordered w-full"
        },
        escape_object($constraints.type)
      ],
      {}
    )}><option value="POLICY">${escape(documents_governing_policy())}</option><option value="GUIDELINE">${escape(documents_governing_guideline())}</option></select> ${$errors.type ? `<p class="text-error">${escape($errors.type)}</p>` : ``} <button type="submit" class="btn btn-primary btn-sm mt-4">${escape(isCreating ? documents_governing_create() : documents_governing_update())}</button></form>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});

export { GoverningDocumentEditor as G };
//# sourceMappingURL=GoverningDocumentEditor-BAztl6f8.js.map
