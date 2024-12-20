import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, s as spread, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { A as Autocomplete } from './Autocomplete-BvKeDqN4.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { ik as songbook_title, ii as songbook_melody, il as songbook_melodyExplanation, im as songbook_category, io as songbook_categoryExplanation, ip as songbook_lyrics, iq as songbook_save, ir as songbook_cancel, is as songbook_removeSong, it as songbook_restoreFromGarbageCan, iu as songbook_areYouSure, iv as songbook_remove } from './messages-D8OfyZiq.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  const { form, errors, constraints, enhance: updateEnhance } = superForm(data.form);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  let removeModal = void 0;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: data.song.title }, {}, {})} ${$$result.head += `<!-- HEAD_svelte-lsamal_START --><meta name="description"${add_attribute("content", data.song.lyrics, 0)}><!-- HEAD_svelte-lsamal_END -->`, ""} <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} class="form-control gap-2"><input type="hidden" name="id"${add_attribute("value", data.song.id, 0)}> ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "title" }, { label: songbook_title() }, $constraints.title, { error: $errors.title }, { value: $form.title }),
      {
        value: ($$value) => {
          $form.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: songbook_melody(),
        error: $errors.melody,
        explanation: songbook_melodyExplanation()
      },
      {},
      {
        default: () => {
          return `${validate_component(Autocomplete, "Autocomplete").$$render(
            $$result,
            Object.assign({}, { name: "melody" }, { options: data.existingMelodies }, $constraints.melody, { error: $errors.melody }, { searchValue: data.song.melody ?? "" }, { value: $form.melody }),
            {
              value: ($$value) => {
                $form.melody = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: songbook_category(),
        error: $errors.category,
        explanation: songbook_categoryExplanation()
      },
      {},
      {
        default: () => {
          return `${validate_component(Autocomplete, "Autocomplete").$$render(
            $$result,
            Object.assign({}, { name: "category" }, { options: data.existingCategories }, $constraints.category, { error: $errors.category }, { searchValue: data.song.category ?? "" }, { value: $form.category }),
            {
              value: ($$value) => {
                $form.category = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: songbook_lyrics(),
        error: $errors.lyrics
      },
      {},
      {
        default: () => {
          return `<textarea${spread(
            [
              { id: "lyrics" },
              { name: "lyrics" },
              { class: "textarea textarea-bordered h-80" },
              escape_object($constraints.lyrics)
            ],
            {}
          )}>${escape($form.lyrics || "")}</textarea>`;
        }
      }
    )} <div class="flex justify-between"><div class="flex gap-2"><button class="btn btn-primary" type="submit">${escape(songbook_save())}</button> <a class="btn" type="button"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/songbook/${data.song.slug}`, void 0), 0)}>${escape(songbook_cancel())}</a></div> ${isAuthorized(apiNames.SONG.DELETE, data.user) ? `${data.song.deletedAt === null ? `<button class="btn" type="button">${escape(songbook_removeSong())}</button>` : `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/restore`, void 0), 0)} class="form-control gap-2"><input type="hidden" name="id"${add_attribute("value", data.song.id, 0)}> <button class="btn" type="submit"${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/restore`, void 0), 0)}>${escape(songbook_restoreFromGarbageCan())}</button></form>`}` : ``}</div></form> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", removeModal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(songbook_removeSong())}</h3> <p class="py-4">${escape(songbook_areYouSure())}  <b class="capitalize"><!-- HTML_TAG_START -->${data.song.title}<!-- HTML_TAG_END --></b>?</p> <div class="modal-action"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)} class="form-control gap-2"><input type="hidden" name="id"${add_attribute("value", data.song.id, 0)}> <div class="flex gap-2"><button class="btn" type="button">${escape(songbook_cancel())}</button> <button class="btn btn-error" type="submit"${add_attribute("formaction", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}>${escape(songbook_remove())}</button></div></form></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-cqws4v"><button class="cursor-auto"></button></form></dialog>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B4uwNuzH.js.map
