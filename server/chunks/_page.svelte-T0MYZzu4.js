import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, s as spread, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { A as Autocomplete } from './Autocomplete-BvKeDqN4.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { ib as songbook_createNewSong, ik as songbook_title, ii as songbook_melody, il as songbook_melodyExplanation, im as songbook_category, io as songbook_categoryExplanation, iw as songbook_create } from './messages-D8OfyZiq.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import 'tailwind-merge';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './runtime-BxW51cRH.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  const { form, errors, constraints, enhance } = superForm(data.form);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
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
    $$rendered = `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: songbook_createNewSong() }, {}, {})} <main><section><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)} class="form-control gap-2">${validate_component(Input, "Input").$$render(
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
            Object.assign({}, { name: "melody" }, { options: data.existingMelodies }, $constraints.melody, { error: $errors.melody }, { value: $form.melody }),
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
            Object.assign({}, { name: "category" }, { options: data.existingCategories }, $constraints.category, { error: $errors.category }, { value: $form.category }),
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
    )} ${validate_component(Labeled, "Labeled").$$render($$result, { label: "Text", error: $errors.lyrics }, {}, {
      default: () => {
        return `<textarea${spread(
          [
            { id: "lyrics" },
            { name: "lyrics" },
            {
              class: "textarea textarea-bordered h-80 hover:border-base-content"
            },
            escape_object($constraints.lyrics)
          ],
          {}
        )}>${escape($form.lyrics || "")}</textarea>`;
      }
    })} <button class="btn btn-primary mt-4" type="submit">${escape(songbook_create())}</button></form></section></main>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-T0MYZzu4.js.map
