import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { cA as admin_access_policyCode, cB as admin_access_edit, cC as admin_access_addNewPolicy, cD as admin_access_newPolicy, cE as admin_access_add } from './messages-D8OfyZiq.js';
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
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { form, errors, constraints, enhance } = superForm(data.form, { resetForm: true });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Access policies" }, {}, {})} <div class="overflow-x-auto"><table class="table"> <thead><tr class="bg-base-200"><th>${escape(admin_access_policyCode())}</th> <th></th></tr></thead> <tbody>${each(data.accessPolicies, (apiName) => {
    return `<tr><td class="font-medium">${escape(apiName)}</td> <td class="text-right"><a class="btn btn-xs px-8"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`access/${apiName}`, void 0), 0)}>${escape(admin_access_edit())}</a></td> </tr>`;
  })}</tbody></table></div> <section class="my-4 space-y-4"><h2 class="text-xl font-bold">${escape(admin_access_addNewPolicy())}</h2> <form class="form-control gap-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)}><label class="join join-vertical md:join-horizontal"><span class="label join-item bg-base-200 px-4">${escape(admin_access_newPolicy())}</span> <input${spread(
    [
      { type: "text" },
      { name: "apiName" },
      { placeholder: "Policy name" },
      {
        "aria-invalid": escape_attribute_value($errors.apiName ? "true" : void 0)
      },
      {
        class: "input join-item input-bordered input-primary md:flex-1"
      },
      escape_object($constraints.apiName)
    ],
    {}
  )}${add_attribute("value", $form.apiName, 0)}> ${$errors.apiName ? `<span class="text-error">${escape($errors.apiName)}</span>` : ``} <button type="submit" class="btn btn-primary join-item">${escape(admin_access_add())}</button></label></form></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DJahXxaF.js.map
