import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { gO as news_tags_newsTags, gP as news_tags_tagName, gQ as news_tags_edit, gR as news_tags_save, gS as news_tags_preview, gT as news_tags_name, gU as news_tags_color, gV as news_tags_addNew, gW as news_tags_newTag, gX as news_tags_create } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './index2-Bcb5RUHj.js';
import './superForm-DTXAq_ly.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const TagEditorRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let $submitting, $$unsubscribe_submitting;
  let { data } = $$props;
  let { tag } = $$props;
  const { form, errors, constraints, enhance, submitting } = superForm(data, {
    id: tag.id,
    onResult: (event) => {
      if (event.result.type === "success") {
        isEditing = false;
      }
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  let isEditing = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  $$unsubscribe_submitting();
  return `<tr><td>${validate_component(TagChip, "TagChip").$$render(
    $$result,
    {
      tag: {
        ...tag,
        name: $form.name ?? tag.name,
        color: $form.color ?? tag.color
      }
    },
    {},
    {}
  )}</td> ${!isEditing ? `<td>${escape(tag.name)}</td> <td>${escape(tag.nameEn ?? "")}</td> <td style="${"color: " + escape(tag.color, true)}">${escape(tag.color)}</td> <td class="text-right"><button class="btn btn-xs px-8" type="button">${escape(news_tags_edit())}</button></td>` : `<td colspan="3"><form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} method="POST" class="flex justify-between"><input${spread(
    [
      { type: "hidden" },
      { name: "id" },
      { value: escape_attribute_value(tag.id) },
      escape_object($constraints.id)
    ],
    {}
  )}> ${$errors.id ? `<span class="text-error">${escape($errors.id)}</span>` : ``} <input${spread(
    [
      { type: "text" },
      { name: "name" },
      { class: "input input-xs input-bordered" },
      escape_object($constraints.name)
    ],
    {}
  )}${add_attribute("value", $form.name, 0)}> ${$errors.name ? `<span class="text-error">${escape($errors.name)}</span>` : ``} <input${spread(
    [
      { type: "text" },
      { name: "nameEn" },
      { class: "input input-xs input-bordered" },
      escape_object($constraints.nameEn)
    ],
    {}
  )}${add_attribute("value", $form.nameEn, 0)}> ${$errors.nameEn ? `<span class="text-error">${escape($errors.nameEn)}</span>` : ``} <input${spread(
    [
      { type: "text" },
      { name: "color" },
      { class: "input input-xs input-bordered" },
      {
        style: "color: " + escape($form.color || "white", true)
      },
      escape_object($constraints.color)
    ],
    {}
  )}${add_attribute("value", $form.color, 0)}> ${$errors.color ? `<span class="text-error">${escape($errors.color)}</span>` : ``} <button type="submit" class="btn btn-xs px-8" ${$submitting ? "disabled" : ""}>${$submitting ? `<span class="loading loading-xs mx-1"></span>` : `${escape(news_tags_save())}`}</button></form></td>`}</tr>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  let $submitting, $$unsubscribe_submitting;
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  const { form, errors, constraints, enhance, submitting } = superForm(data.createForm, { resetForm: true });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  $$unsubscribe_submitting();
  $$unsubscribe_errors();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: news_tags_newsTags() }, {}, {})} <div class="overflow-x-auto"><table class="table"> <thead><tr class="bg-base-200"><th>${escape(news_tags_preview())}</th> <th>${escape(news_tags_name())}</th> <th>${escape(news_tags_name())} (EN)</th> <th>${escape(news_tags_color())}</th> <th></th></tr></thead> <tbody>${each(data.tags, (tag) => {
    return `${validate_component(TagEditorRow, "TagEditorRow").$$render($$result, { tag, data: data.updateForm }, {}, {})}`;
  })}</tbody></table></div> <section class="flex flex-col gap-4 py-4"><h2 class="text-xl font-bold">${escape(news_tags_addNew())}</h2> <form class="form-control gap-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)}><label class="join"><span class="label join-item bg-base-200 px-4">${escape(news_tags_newTag())}</span> <input${spread(
    [
      { type: "text" },
      { name: "name" },
      {
        placeholder: escape_attribute_value(news_tags_tagName())
      },
      {
        class: "input join-item input-bordered input-primary w-80"
      },
      escape_object($constraints.name)
    ],
    {}
  )}${add_attribute("value", $form.name, 0)}> <button type="submit" class="btn btn-primary join-item" ${$submitting ? "disabled" : ""}>${escape(news_tags_create())}</button></label> ${$errors.name ? `<p class="text-error">${escape($errors.name)}</p>` : ``}</form></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-mI49S11s.js.map
