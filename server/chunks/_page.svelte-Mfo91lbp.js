import { b as subscribe, f as getContext, h as is_promise, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { C as ClassBadge } from './ClassBadge-C_BgbZZ_.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as getFullName } from './member-DajX-teH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import { h8 as positions_startDate, h9 as positions_endDate, ha as positions_save, hb as positions_addMandate, hc as positions_edit, hd as positions_theFollowingAddresses } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { C as CommitteeIcon } from './CommitteeIcon-vSk-xvNx.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import 'tailwind-merge';
import './paths-CYDIOyak.js';
import './exports-BGi7-Rnc.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import './index-CuABlRvJ.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './client3-CIDcnctW.js';
import './pageTitle-Dw7hiKEr.js';

const UpdateMandateForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  let { mandateId } = $$props;
  const { form, errors, constraints, enhance } = superForm(data);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.mandateId === void 0 && $$bindings.mandateId && mandateId !== void 0) $$bindings.mandateId(mandateId);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return `<form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/updateMandate`, void 0), 0)} method="POST" class="form-control my-2 flex-row items-end gap-2"><input type="hidden" name="mandateId"${add_attribute("value", mandateId, 0)}> ${validate_component(Labeled, "Labeled").$$render($$result, { label: positions_startDate() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { name: "startDate" },
          { id: "startDate" },
          {
            value: escape_attribute_value($form.startDate?.toISOString().split("T")[0])
          },
          { class: "input input-bordered" },
          { type: "date" },
          escape_object($constraints.startDate)
        ],
        {}
      )}> ${$errors.startDate ? `<p class="text-error">${escape($errors.startDate)}</p>` : ``}`;
    }
  })} ${validate_component(Labeled, "Labeled").$$render($$result, { label: positions_endDate() }, {}, {
    default: () => {
      return `<input${spread(
        [
          { name: "endDate" },
          { id: "endDate" },
          {
            value: escape_attribute_value($form.endDate?.toISOString().split("T")[0])
          },
          { class: "input input-bordered" },
          { type: "date" },
          escape_object($constraints.endDate)
        ],
        {}
      )}> ${$errors.endDate ? `<p class="text-error">${escape($errors.endDate)}</p>` : ``}`;
    }
  })} <button type="submit" class="btn btn-secondary">${escape(positions_save())}</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupedByYear;
  let years;
  let editedMandate;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let isEditing = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  groupedByYear = data.mandates.reduce(
    (acc, mandate) => {
      let year = mandate.startDate.getFullYear().toString();
      if (mandate.endDate.getFullYear() !== mandate.startDate.getFullYear()) year += `-${mandate.endDate.getFullYear()}`;
      if (!acc[year]) acc[year] = [];
      acc[year].push(mandate);
      return acc;
    },
    {}
  );
  years = Object.keys(groupedByYear).sort((a, b) => b.localeCompare(a, languageTag()));
  editedMandate = $page.url.searchParams.get("editMandate");
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: data.position.name }, {}, {})} <div class="mb-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">${data.position.committee ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/${data.position.committee?.shortName}`, void 0), 0)} class="group"><figure class="h-32 w-32 transition-transform group-hover:scale-95 md:h-40 md:w-40">${validate_component(CommitteeIcon, "CommitteeIcon").$$render($$result, { committee: data.position.committee }, {}, {})}</figure></a>` : ``} <div><div class="flex flex-wrap items-center justify-between gap-x-2">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: data.position.name }, {}, {})} <div>${isAuthorized(apiNames.MANDATE.CREATE, data.user) && !isEditing ? `<button class="btn btn-secondary btn-sm">${escape(positions_addMandate())}</button>` : ``} ${isAuthorized(apiNames.MANDATE.UPDATE, data.user) || isAuthorized(apiNames.MANDATE.DELETE, data.user) || isAuthorized(apiNames.POSITION.UPDATE, data.user) ? `<button class="btn btn-sm">${escape(positions_edit())}</button>` : ``}</div></div> ${data.position.description ? `<p>${escape(data.position.description)}</p>` : ``} ${data.position.email ? `<section><a class="link-hover link link-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:${data.position.email}`, void 0), 0)}>${escape(data.position.email)}</a></section>` : ``} ${data.position.emailAliases.length > 0 ? `<h4 class="text-xs opacity-75">${escape(positions_theFollowingAddresses())}</h4> <div class="mb-2 flex gap-2 text-xs opacity-75">${each(data.position.emailAliases.filter((alias) => alias.email != data.position.email), (alias) => {
    return `<a class="link-hover link link-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:${alias.email}`, void 0), 0)}>${escape(alias.email)} </a>`;
  })}</div>` : ``}</div></div>  ${``}  ${``}  ${editedMandate != void 0 ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(form) {
      return ` ${validate_component(UpdateMandateForm, "UpdateMandateForm").$$render($$result, { data: form, mandateId: editedMandate }, {}, {})} `;
    }(__value);
  }(data.updateMandateForm)}` : ``}  ${each(years, (year) => {
    return `<section class="mb-4"><h1 class="mb-2 text-xl font-semibold">${escape(year)}</h1> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">${each(groupedByYear[year] ?? [], (mandate) => {
      return `<div class="${"tooltip flex flex-col whitespace-pre " + escape(
        (groupedByYear[year]?.length ?? 0) <= 8 ? "col-span-2" : "",
        true
      )}"${add_attribute("data-tip", getFullName(mandate.member) + `
${mandate.startDate.toLocaleDateString(languageTag())} - ${mandate.endDate.toLocaleDateString(languageTag())}`, 0)}><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${mandate.member.studentId}`, void 0), 0)} class="${"btn btn-ghost w-full flex-nowrap justify-start normal-case " + escape("", true)}">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member: mandate.member }, {}, {})} <span class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left font-medium">${escape(getFullName(mandate.member))} </span></a>  ${`${validate_component(ClassBadge, "ClassBadge").$$render($$result, { member: mandate.member }, {}, {})}`} ${``} </div>`;
    })}</div> </section>`;
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Mfo91lbp.js.map
