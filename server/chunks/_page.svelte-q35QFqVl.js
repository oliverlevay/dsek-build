import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object, h as add_classes } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { c$ as admin_doors_startDateOptional, d0 as admin_doors_endDateOptional, d1 as admin_doors_revokeAreYouSure, d2 as admin_doors_info, d3 as admin_doors_roleMember, d4 as admin_doors_startDate, d5 as admin_doors_endDate, d6 as admin_doors_remove, d7 as admin_doors_grantDoorAccess, d8 as admin_doors_role, d9 as admin_doors_member, da as admin_doors_add, db as admin_doors_revokeDoorAccess } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
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
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $banConstraints, $$unsubscribe_banConstraints;
  let $banForm, $$unsubscribe_banForm;
  let $banErrors, $$unsubscribe_banErrors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let type = "role";
  let removeModal = void 0;
  let informationModal = void 0;
  let selectedPolicy = void 0;
  const { form, errors, constraints, enhance } = superForm(data.createForm);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const { form: banForm, errors: banErrors, constraints: banConstraints, enhance: banEnhance } = superForm(data.createForm);
  $$unsubscribe_banForm = subscribe(banForm, (value) => $banForm = value);
  $$unsubscribe_banErrors = subscribe(banErrors, (value) => $banErrors = value);
  $$unsubscribe_banConstraints = subscribe(banConstraints, (value) => $banConstraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_banConstraints();
  $$unsubscribe_banForm();
  $$unsubscribe_banErrors();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: $page.params["slug"] }, {}, {})} <main class="container mx-auto px-4"><h1 class="mb-4 text-2xl font-semibold capitalize">${escape($page.params["slug"])}</h1> <div class="overflow-x-auto rounded-lg"><table class="table"><thead class="bg-base-200"><tr><th>${escape(admin_doors_roleMember())}</th> <th>${escape(admin_doors_startDate())}</th> <th>${escape(admin_doors_endDate())}</th> <th></th> <th></th></tr></thead> <tbody>${each(data.doorAccessPolicies, (policy) => {
    return `<tr${add_classes(((policy.isBan ? "bg-red-400" : "") + " " + (policy.isBan ? "bg-opacity-60" : "")).trim())}>${policy.role ? `<td class="flex items-center gap-3"><span class="i-mdi-account-group h-6 w-6"></span>${escape(policy.role ?? "N/A")}</td>` : `${policy.member ? `<td class="flex items-center gap-3"><div class="avatar"><div class="w-6 rounded-full">${policy.member.picturePath ? `<img${add_attribute("src", policy.member.picturePath, 0)} alt="Profile avatar">` : `<span class="i-mdi-account-circle h-6 w-6"></span>`} </div></div> <p>${escape(policy.member.firstName)} ${escape(policy.member.lastName)}</p> </td>` : ``}`} <td>${escape(policy.startDatetime?.toLocaleString("sv") ?? "N/A")}</td> <td>${escape(policy.endDatetime?.toLocaleString("sv") ?? "N/A")}</td> ${policy.information ? `<td class="policy-information flex items-center"><button class="btn-error h-6 rounded-full fill-base-content" data-svelte-h="svelte-10xs1z7"><span class="i-mdi-information h-6 w-6 bg-base-content"></span></button> <dialog id="my_modal_1" class="modal"><div class="modal-box"><h3 class="text-lg font-bold" data-svelte-h="svelte-1tapi7u">Information!</h3> <p class="py-4">${escape(policy.information)}</p> <div class="modal-action" data-svelte-h="svelte-1i4yher"><form method="dialog"> <button class="btn">Close</button> </form></div> </div></dialog> </td>` : `<div></div>`} <td class="text-right"><button class="btn btn-xs whitespace-nowrap px-8">${escape(admin_doors_remove())} </button></td> </tr>`;
  })}</tbody></table></div></main> <section class="container mx-auto mt-4 px-4"><h2 class="mb-4 text-xl">${escape(admin_doors_grantDoorAccess())}</h2> <form class="form-control gap-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)}><label class="join join-vertical lg:join-horizontal lg:items-end"><select class="join-item select select-bordered w-full lg:max-w-xs"><option value="role">${escape(admin_doors_role())}</option><option value="studentId">${escape(admin_doors_member())}</option></select> <input${spread(
    [
      { type: "text" },
      { name: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value("dsek.infu.dwww")
      },
      {
        class: "input join-item input-bordered w-full lg:max-w-xs"
      },
      escape_object($constraints[type])
    ],
    {}
  )}${add_attribute("value", $form[type], 0)}> <div class="form-control join-item w-full lg:max-w-[200px]">${validate_component(Labeled, "Labeled").$$render($$result, { label: admin_doors_startDateOptional() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { id: "startDatetime" },
          { name: "startDatetime" },
          { type: "datetime-local" },
          { class: "input join-item input-bordered" },
          escape_object($constraints.startDatetime)
        ],
        {}
      )}${add_attribute("value", $form.startDatetime, 0)}>`;
    }
  })}</div> <div class="form-control join-item w-full lg:max-w-[200px]">${validate_component(Labeled, "Labeled").$$render($$result, { label: admin_doors_endDateOptional() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { id: "endDatetime" },
          { name: "endDatetime" },
          { type: "datetime-local" },
          { class: "input join-item input-bordered" },
          escape_object($constraints.endDatetime)
        ],
        {}
      )}${add_attribute("value", $form.endDatetime, 0)}>`;
    }
  })}</div> <div class="form-control w-full"><input id="information" name="information" type="text" class="input join-item input-bordered"${add_attribute("placeholder", admin_doors_info(), 0)}${add_attribute("value", $form.information, 0)}></div> <label class="switch join-item w-full"><div class="flex-auto"><button type="submit" class="btn btn-primary join-item w-full">${escape(admin_doors_add())}</button></div></label></label> ${Object.keys($errors).length > 0 ? `<div class="text-error"><ul class="list-inside list-disc">${each(Object.values($errors), (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul></div>` : ``}</form></section> <section class="container mx-auto mt-4 px-4"><h2 class="mb-4 text-xl" data-svelte-h="svelte-seigzi">Spärra åtkomst</h2> <form class="form-control gap-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/ban`, void 0), 0)}><label class="join join-vertical lg:join-horizontal lg:items-end"><input${spread(
    [
      { type: "text" },
      { name: "studentId" },
      { placeholder: "ab1234bc-s" },
      {
        class: "input join-item input-bordered w-full lg:max-w-xs"
      },
      escape_object($banConstraints.studentId)
    ],
    {}
  )}${add_attribute("value", $banForm.studentId, 0)}> <div class="form-control join-item w-full lg:max-w-[200px]">${validate_component(Labeled, "Labeled").$$render($$result, { label: admin_doors_startDateOptional() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { id: "startDatetime" },
          { name: "startDatetime" },
          { type: "datetime-local" },
          { class: "input join-item input-bordered" },
          escape_object($banConstraints.startDatetime)
        ],
        {}
      )}${add_attribute("value", $banForm.startDatetime, 0)}>`;
    }
  })}</div> <div class="form-control join-item w-full lg:max-w-[200px]">${validate_component(Labeled, "Labeled").$$render($$result, { label: admin_doors_endDateOptional() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { id: "endDatetime" },
          { name: "endDatetime" },
          { type: "datetime-local" },
          { class: "input join-item input-bordered" },
          escape_object($banConstraints.endDatetime)
        ],
        {}
      )}${add_attribute("value", $banForm.endDatetime, 0)}>`;
    }
  })}</div> <div class="form-control w-full"><input${spread(
    [
      { id: "information" },
      { name: "information" },
      { type: "text" },
      { class: "input join-item input-bordered" },
      {
        placeholder: escape_attribute_value(admin_doors_info())
      },
      escape_object($banConstraints.information)
    ],
    {}
  )}${add_attribute("value", $banForm.information, 0)}></div> <label class="switch join-item w-full" data-svelte-h="svelte-imjmxu"><div class="flex-auto"><button type="submit" class="btn btn-error join-item w-full">Spärra</button></div></label></label> ${Object.keys($banErrors).length > 0 ? `<div class="text-error"><ul class="list-inside list-disc">${each(Object.values($banErrors), (error) => {
    return `<li>${escape(error)}</li>`;
  })}</ul></div>` : ``}</form></section> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", removeModal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(admin_doors_revokeDoorAccess())}</h3> <p class="py-4">${` <!-- HTML_TAG_START -->${admin_doors_revokeAreYouSure({
    door: `${$page.params["slug"]}`,
    target: `${selectedPolicy?.member?.studentId}`
  })}<!-- HTML_TAG_END -->`}</p> <div class="modal-action"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", selectedPolicy?.id, 0)}> <button type="submit" class="btn btn-error">${escape(admin_doors_remove())}</button></form></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-cqws4v"><button class="cursor-auto"></button></form></dialog> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", informationModal, 0)}><div class="modal-box"><div class="flex items-center"><span class="i-mdi-information size-6"></span> <h3 class="px-1 text-lg font-bold"><b class="capitalize">${escape($page.params["slug"])} -</b> ${`<b>${escape(selectedPolicy?.member?.firstName)} ${escape(selectedPolicy?.member?.lastName)} <i>(${escape(selectedPolicy?.studentId)})</i></b>`}</h3></div> <p class="py-4">${escape(selectedPolicy?.information)}</p> <button class="btn" data-svelte-h="svelte-14h4nn2">Stäng</button></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-cqws4v"><button class="cursor-auto"></button></form></dialog>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-q35QFqVl.js.map
