import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, s as spread, d as escape_object } from './ssr-BoMjCg5r.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { go as members_save, gv as members_preview } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import 'marked';
import 'tailwind-merge';
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
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
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
  member = data.member;
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Bio - " + getFullName(member) }, {}, {})} <header class="flex gap-4">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member, class: "w-32 rounded-lg" }, {}, {})} <div class="flex flex-col"><h1 class="text-3xl font-bold">${escape(getFullName(member))}</h1> ${escape(member.studentId)}</div></header> <div class="mt-4 grid gap-2 md:grid-cols-2"><form id="edit-member" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} class="form-control gap-2"><button type="submit" class="btn btn-secondary">${escape(members_save())}</button> ${$errors.bio ? `<p class="text-error">${escape($errors.bio)}</p>` : ``} <textarea${spread(
    [
      { id: "bio" },
      { name: "bio" },
      {
        class: "textarea min-h-[20rem] rounded-none p-0"
      },
      { placeholder: "Bio" },
      escape_object($constraints.bio)
    ],
    {}
  )}>${escape($form.bio || "")}</textarea></form> <div><h2 class="py-3 text-xl italic">${escape(members_preview())}</h2> ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: $form.bio ?? "" }, {}, {})}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C-TXcJW1.js.map
