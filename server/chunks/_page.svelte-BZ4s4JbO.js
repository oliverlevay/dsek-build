import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { dr as admin_emailalias_canSend, ds as admin_emailalias_removePosition, dt as admin_emailalias_removeSpecialReceiver, du as admin_emailalias_removeSpecialSender, dn as admin_emailalias_edit, dv as admin_emailalias_aliasGoesTo, dw as admin_emailalias_areSpecialReceivers, dx as admin_emailalias_areSpecialSenders } from './messages-D8OfyZiq.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
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
import './runtime-BxW51cRH.js';

const EmailAliasForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { emailAlias } = $$props;
  let { canSendForm } = $$props;
  let { isEditing } = $$props;
  superForm(canSendForm, { id: emailAlias.id });
  let canSendFormHTML;
  let { removePositionForm } = $$props;
  superForm(removePositionForm);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.emailAlias === void 0 && $$bindings.emailAlias && emailAlias !== void 0) $$bindings.emailAlias(emailAlias);
  if ($$props.canSendForm === void 0 && $$bindings.canSendForm && canSendForm !== void 0) $$bindings.canSendForm(canSendForm);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  if ($$props.removePositionForm === void 0 && $$bindings.removePositionForm && removePositionForm !== void 0) $$bindings.removePositionForm(removePositionForm);
  return `<div class="flex flex-row items-center justify-between border-b border-neutral"><form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/setCanSend`, void 0), 0)} method="post" class="flex flex-row"${add_attribute("this", canSendFormHTML, 0)}><div class="my-4 flex flex-row gap-6"><h1 class="font-medium">${escape(emailAlias.position.name)}</h1> <input type="hidden" name="aliasId"${add_attribute("value", emailAlias.id, 0)}> <input type="hidden" name="canSend"${add_attribute("value", emailAlias.canSend, 0)}> <p class="font-mono">${escape(emailAlias.positionId)}</p> <label for="canSend">${escape(admin_emailalias_canSend())}</label> ${isEditing ? `<input type="checkbox" name="canSend" id="canSend" class="toggle toggle-primary" ${emailAlias.canSend ? "checked" : ""}>` : `<input type="checkbox" class="toggle toggle-primary pointer-events-none" ${emailAlias.canSend ? "checked" : ""}>`}</div></form> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removePosition`, void 0), 0)} method="post" class="flex flex-row"><input type="hidden" name="aliasId"${add_attribute("value", emailAlias.id, 0)}> <input type="hidden" name="positionId"${add_attribute("value", emailAlias.positionId, 0)}> <input type="hidden" name="email"${add_attribute("value", emailAlias.email, 0)}> ${isEditing ? `<button class="btn btn-error btn-xs" type="submit">${escape(admin_emailalias_removePosition())}</button>` : ``}</form></div>`;
});
const SpecialReceiverForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { specialReceiver } = $$props;
  let { isEditing } = $$props;
  let { removeReceiverForm } = $$props;
  superForm(removeReceiverForm);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.specialReceiver === void 0 && $$bindings.specialReceiver && specialReceiver !== void 0) $$bindings.specialReceiver(specialReceiver);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  if ($$props.removeReceiverForm === void 0 && $$bindings.removeReceiverForm && removeReceiverForm !== void 0) $$bindings.removeReceiverForm(removeReceiverForm);
  return `<div class="flex flex-row items-center justify-between border-b border-neutral"><p class="my-4 font-mono">${escape(specialReceiver.targetEmail)}</p> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeSpecialReceiver`, void 0), 0)} method="post" class="flex flex-row"><input type="hidden" name="id"${add_attribute("value", specialReceiver.id, 0)}> <input type="hidden" name="email"${add_attribute("value", specialReceiver.email, 0)}> <input type="hidden" name="targetEmailreceiver"${add_attribute("value", specialReceiver.targetEmail, 0)}> ${isEditing ? `<button class="btn btn-error btn-xs" type="submit">${escape(admin_emailalias_removeSpecialReceiver())}</button>` : ``}</form></div>`;
});
const SpecialSenderForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { specialSender } = $$props;
  let { isEditing } = $$props;
  let { removeSenderForm } = $$props;
  superForm(removeSenderForm);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.specialSender === void 0 && $$bindings.specialSender && specialSender !== void 0) $$bindings.specialSender(specialSender);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  if ($$props.removeSenderForm === void 0 && $$bindings.removeSenderForm && removeSenderForm !== void 0) $$bindings.removeSenderForm(removeSenderForm);
  return `<div class="flex flex-row items-center justify-between border-b border-neutral"><div class="my-4 flex flex-row gap-6"><p class="font-mono">${escape(specialSender.studentId)}</p> <p class="font-mono">${escape(specialSender.keycloakId)}</p></div> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeSpecialSender`, void 0), 0)} method="post" class="flex flex-row"><input type="hidden" name="id"${add_attribute("value", specialSender.id, 0)}> ${isEditing ? `<button class="btn btn-error btn-xs" type="submit">${escape(admin_emailalias_removeSpecialSender())}</button>` : ``}</form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let emailAliases;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_addPositionConstraints;
  let $$unsubscribe_addPositionForm;
  let $$unsubscribe_addSpecialReceiverForm;
  let $$unsubscribe_addSpecialReceiverErrors;
  let $$unsubscribe_addSpecialSenderForm;
  let $$unsubscribe_addSpecialSenderErrors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { email } = $page.params;
  const { form: addPositionForm, constraints: addPositionConstraints, enhance: addPositionEnhance } = superForm(data.addPositionForm);
  $$unsubscribe_addPositionForm = subscribe(addPositionForm, (value) => value);
  $$unsubscribe_addPositionConstraints = subscribe(addPositionConstraints, (value) => value);
  const { form: addSpecialReceiverForm, errors: addSpecialReceiverErrors, enhance: addSpecialReceiverEnhance } = superForm(data.addSpecialReceiverForm);
  $$unsubscribe_addSpecialReceiverForm = subscribe(addSpecialReceiverForm, (value) => value);
  $$unsubscribe_addSpecialReceiverErrors = subscribe(addSpecialReceiverErrors, (value) => value);
  const { form: addSpecialSenderForm, errors: addSpecialSenderErrors, enhance: addSpecialSenderEnhance } = superForm(data.addSpecialSenderForm);
  $$unsubscribe_addSpecialSenderForm = subscribe(addSpecialSenderForm, (value) => value);
  $$unsubscribe_addSpecialSenderErrors = subscribe(addSpecialSenderErrors, (value) => value);
  superForm(data.deleteEmailAliasForm);
  superForm(data.deleteSpecialReceiverForm);
  superForm(data.deleteSpecialSenderForm);
  let isEditing = false;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    emailAliases = data.emailAlias;
    data.allPositions;
    $$rendered = `<div class="flex flex-row justify-between">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: email }, {}, {})} <button class="btn">${escape(admin_emailalias_edit())}</button></div> <div class="my-8"><div class="flex flex-row justify-between"><h1 class="text-2xl font-semibold">${escape(admin_emailalias_aliasGoesTo())}</h1></div> ${each(emailAliases, (emailAlias) => {
      return `${validate_component(EmailAliasForm, "UpdateMailAliasForm").$$render(
        $$result,
        {
          isEditing,
          emailAlias,
          canSendForm: data.setCanSendForm,
          removePositionForm: data.removePositionForm
        },
        {},
        {}
      )}`;
    })}</div> ${``} <hr class="my-8"> <div><div class="flex flex-row justify-between"><h1 class="text-2xl font-semibold">${escape(admin_emailalias_areSpecialReceivers())}</h1></div> ${each(data.specialReceivers, (specialReceiver) => {
      return `${validate_component(SpecialReceiverForm, "SpecialReceiverForm").$$render(
        $$result,
        {
          specialReceiver,
          isEditing,
          removeReceiverForm: data.removeSpecialReceiverForm
        },
        {},
        {}
      )}`;
    })} ${``}</div> <hr class="my-8"> <div><div class="flex flex-row justify-between"><h1 class="py-2 text-2xl font-semibold">${escape(admin_emailalias_areSpecialSenders())}</h1></div> ${each(data.specialSenders, (specialSender) => {
      return `${validate_component(SpecialSenderForm, "SpecialSenderForm").$$render(
        $$result,
        {
          specialSender,
          isEditing,
          removeSenderForm: data.removeSpecialSenderForm
        },
        {},
        {}
      )}`;
    })} ${``}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_addPositionConstraints();
  $$unsubscribe_addPositionForm();
  $$unsubscribe_addSpecialReceiverForm();
  $$unsubscribe_addSpecialReceiverErrors();
  $$unsubscribe_addSpecialSenderForm();
  $$unsubscribe_addSpecialSenderErrors();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BZ4s4JbO.js.map
