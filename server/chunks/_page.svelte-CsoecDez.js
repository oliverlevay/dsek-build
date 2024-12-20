import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute, s as spread, d as escape_object } from './ssr-BoMjCg5r.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { p as page } from './stores-ClpLLrvc.js';
import { cF as admin_access_role, cG as admin_access_member, cH as admin_access_createdAt, cI as admin_access_addNewPolicies, cE as admin_access_add, cJ as admin_access_studentID } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './index2-Bcb5RUHj.js';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const DeletePolicyForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  let { policyId } = $$props;
  const { errors, enhance } = superForm(data, { id: policyId });
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.policyId === void 0 && $$bindings.policyId && policyId !== void 0) $$bindings.policyId(policyId);
  $$unsubscribe_errors();
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", policyId, 0)}> ${$errors.id ? `<span class="text-error">${escape($errors.id)}</span>` : ``} <button type="submit" class="btn btn-xs px-8" data-svelte-h="svelte-e81y8f">Remove</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let policies;
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  let $createForm, $$unsubscribe_createForm;
  let $errors, $$unsubscribe_errors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { form: createForm, errors, constraints, enhance } = superForm(data.createForm, { resetForm: true });
  $$unsubscribe_createForm = subscribe(createForm, (value) => $createForm = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  policies = data.policies.sort((a, b) => {
    if (a.role && b.role) return a.role.localeCompare(b.role, "sv");
    if (a.role && !b.role) return -1;
    if (!a.role && b.role) return 1;
    return a.studentId.localeCompare(b.studentId, "sv");
  });
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  $$unsubscribe_createForm();
  $$unsubscribe_errors();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: $page.params["apiName"] }, {}, {})} <h1 class="mb-4 text-2xl font-semibold">${escape($page.params["apiName"])}</h1> <div class="overflow-x-auto"><table class="table"><thead><tr class="bg-base-200"><th>${escape(admin_access_role())}</th> <th>${escape(admin_access_member())}</th> <th>${escape(admin_access_createdAt())}</th> <th></th></tr></thead> <tbody>${each(policies, (policy) => {
    return `<tr><td>${escape(policy.role ?? "")}</td> <td>${escape(policy.studentId ? `${policy.member?.firstName} ${policy.member?.lastName}` : "")}</td> <td>${escape(policy.createdAt?.toLocaleString("sv"))}</td> <td class="text-right">${validate_component(DeletePolicyForm, "DeletePolicyForm").$$render(
      $$result,
      {
        data: data.deleteForm,
        policyId: policy.id
      },
      {},
      {}
    )}</td> </tr>`;
  })}</tbody></table></div> <section class="my-4 space-y-4"><h2 class="text-xl font-bold">${escape(admin_access_addNewPolicies())}</h2> <form class="form-control gap-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)}><label class="join join-vertical md:join-horizontal"><span class="label join-item bg-base-200 px-4">${escape(admin_access_role())}</span> <input${spread(
    [
      { type: "text" },
      { name: "role" },
      { placeholder: "Type here" },
      {
        class: "input join-item input-bordered hover:border-base-content md:flex-1"
      },
      escape_object($constraints.role)
    ],
    {}
  )}${add_attribute("value", $createForm.role, 0)}> <button type="submit" class="btn btn-primary join-item">${escape(admin_access_add())}</button></label> ${$errors.role ? `<span class="text-error">${escape($errors.role)}</span>` : ``} <label class="join join-vertical md:join-horizontal"><span class="label join-item bg-base-200 px-4">${escape(admin_access_studentID())}</span> <input${spread(
    [
      { type: "text" },
      { name: "studentId" },
      { placeholder: "Type here" },
      {
        class: "input join-item input-bordered hover:border-base-content md:flex-1"
      },
      escape_object($constraints.studentId)
    ],
    {}
  )}${add_attribute("value", $createForm.studentId, 0)}> <button type="submit" class="btn btn-primary join-item">${escape(admin_access_add())}</button></label> ${$errors.studentId ? `<span class="text-error">${escape($errors.studentId)}</span>` : ``}</form></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CsoecDez.js.map
