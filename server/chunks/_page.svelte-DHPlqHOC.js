import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, s as spread, d as escape_object, e as each } from './ssr-BoMjCg5r.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { p as page } from './stores-ClpLLrvc.js';
import { dc as admin_emailalias_emailAliases, dd as admin_emailalias_emailAddress, de as admin_emailalias_domain, df as admin_emailalias_position, dg as admin_emailalias_studentIDOrUsername, dh as admin_emailalias_targetAddress, di as admin_emailalias_addAlias, dj as admin_emailalias_add, dk as admin_emailalias_addSpecialSender, dl as admin_emailalias_addSpecialReceiver, dm as admin_emailalias_positionID, dn as admin_emailalias_edit, dp as admin_emailalias_specialSenders, dq as admin_emailalias_specialReceivers } from './messages-D8OfyZiq.js';
import 'tailwind-merge';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
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
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupedEmailAliases;
  let groupedSpecialReceivers;
  let groupedSpecialSenders;
  let $page, $$unsubscribe_page;
  let $createEmailPositionForm, $$unsubscribe_createEmailPositionForm;
  let $createEmailPositionConstraints, $$unsubscribe_createEmailPositionConstraints;
  let $createEmailPositionErrors, $$unsubscribe_createEmailPositionErrors;
  let $createEmailSpecialSenderForm, $$unsubscribe_createEmailSpecialSenderForm;
  let $createEmailSpecialSenderConstraints, $$unsubscribe_createEmailSpecialSenderConstraints;
  let $createEmailSpecialSenderErrors, $$unsubscribe_createEmailSpecialSenderErrors;
  let $createEmailSpecialReceiverForm, $$unsubscribe_createEmailSpecialReceiverForm;
  let $createEmailSpecialReceiverConstraints, $$unsubscribe_createEmailSpecialReceiverConstraints;
  let $createEmailSpecialReceiverErrors, $$unsubscribe_createEmailSpecialReceiverErrors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { form: createEmailPositionForm, errors: createEmailPositionErrors, constraints: createEmailPositionConstraints, enhance: createEmailPositionEnhance } = superForm(data.createEmailPositionForm);
  $$unsubscribe_createEmailPositionForm = subscribe(createEmailPositionForm, (value) => $createEmailPositionForm = value);
  $$unsubscribe_createEmailPositionErrors = subscribe(createEmailPositionErrors, (value) => $createEmailPositionErrors = value);
  $$unsubscribe_createEmailPositionConstraints = subscribe(createEmailPositionConstraints, (value) => $createEmailPositionConstraints = value);
  const { form: createEmailSpecialSenderForm, errors: createEmailSpecialSenderErrors, constraints: createEmailSpecialSenderConstraints, enhance: createEmailSpecialSenderEnhance } = superForm(data.createEmailSpecialSenderForm);
  $$unsubscribe_createEmailSpecialSenderForm = subscribe(createEmailSpecialSenderForm, (value) => $createEmailSpecialSenderForm = value);
  $$unsubscribe_createEmailSpecialSenderErrors = subscribe(createEmailSpecialSenderErrors, (value) => $createEmailSpecialSenderErrors = value);
  $$unsubscribe_createEmailSpecialSenderConstraints = subscribe(createEmailSpecialSenderConstraints, (value) => $createEmailSpecialSenderConstraints = value);
  const { form: createEmailSpecialReceiverForm, errors: createEmailSpecialReceiverErrors, constraints: createEmailSpecialReceiverConstraints, enhance: createEmailSpecialReceiverEnhance } = superForm(data.createEmailSpecialReceiverForm);
  $$unsubscribe_createEmailSpecialReceiverForm = subscribe(createEmailSpecialReceiverForm, (value) => $createEmailSpecialReceiverForm = value);
  $$unsubscribe_createEmailSpecialReceiverErrors = subscribe(createEmailSpecialReceiverErrors, (value) => $createEmailSpecialReceiverErrors = value);
  $$unsubscribe_createEmailSpecialReceiverConstraints = subscribe(createEmailSpecialReceiverConstraints, (value) => $createEmailSpecialReceiverConstraints = value);
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
    groupedEmailAliases = Array.from(data.emailAliases.reduce(
      (acc, emailAlias) => {
        if (!acc.has(emailAlias.email)) {
          acc.set(emailAlias.email, []);
        }
        acc.get(emailAlias.email)?.push(emailAlias.positionId);
        return acc;
      },
      /* @__PURE__ */ new Map()
    ));
    groupedSpecialReceivers = Array.from(data.specialReceivers.reduce(
      (acc, emailSpecialReceiver) => {
        if (!acc.has(emailSpecialReceiver.email)) {
          acc.set(emailSpecialReceiver.email, []);
        }
        acc.get(emailSpecialReceiver.email)?.push(emailSpecialReceiver.targetEmail);
        return acc;
      },
      /* @__PURE__ */ new Map()
    ));
    groupedSpecialSenders = Array.from(data.specialSenders.reduce(
      (acc, emailSpecialSender) => {
        if (!acc.has(emailSpecialSender.email)) {
          acc.set(emailSpecialSender.email, []);
        }
        acc.get(emailSpecialSender.email)?.push({
          studentId: emailSpecialSender.studentId,
          keycloakId: emailSpecialSender.keycloakId
        });
        return acc;
      },
      /* @__PURE__ */ new Map()
    ));
    $$rendered = `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: admin_emailalias_emailAliases() }, {}, {})} <div>${isAuthorized(apiNames.EMAIL_ALIAS.CREATE, $page.data.user) ? `<div class="my-4 rounded-lg p-4"><div class="border-b border-neutral p-4"><h2 class="text-lg font-semibold">${escape(admin_emailalias_addAlias())}</h2> <form class="flex flex-row items-end gap-2"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/createEmailPosition`, void 0), 0)} name="createEmailPosition" method="POST">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "localPartAlias" },
        { id: "localPartAlias" },
        { label: admin_emailalias_emailAddress() },
        { required: true },
        $createEmailPositionConstraints.localPartAlias,
        {
          error: $createEmailPositionErrors.localPartAlias
        },
        {
          value: $createEmailPositionForm.localPartAlias
        }
      ),
      {
        value: ($$value) => {
          $createEmailPositionForm.localPartAlias = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: admin_emailalias_domain(),
        error: $createEmailPositionErrors.domainAlias
      },
      {},
      {
        default: () => {
          return `<select${spread(
            [
              { id: "domainAlias" },
              { name: "domainAlias" },
              {
                class: "select select-bordered w-full max-w-xs"
              },
              escape_object($createEmailPositionConstraints.domainAlias),
              { required: true }
            ],
            {}
          )}>${each(data.domains, (domain) => {
            return `<option${add_attribute("value", domain, 0)}>${escape(domain)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Labeled, "Labeled").$$render($$result, { label: admin_emailalias_position() }, {}, {
      default: () => {
        return `<select${spread(
          [
            { id: "positionIdAlias" },
            { name: "positionIdAlias" },
            {
              class: "select select-bordered w-full max-w-xs"
            },
            escape_object($createEmailPositionConstraints.positionIdAlias),
            { required: true }
          ],
          {}
        )}>${each(data.positions, (position) => {
          return `<option${add_attribute("value", position.id, 0)}>${escape(position.name)}</option>`;
        })}</select>`;
      }
    })} <button class="btn btn-primary" type="submit">${escape(admin_emailalias_add())}</button></form></div> <div class="border-b border-neutral p-4"><h2 class="text-lg font-semibold">${escape(admin_emailalias_addSpecialSender())}</h2> <form class="flex flex-row items-end gap-2"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/createEmailSpecialSender`, void 0), 0)} name="createEmailSpecialSender" method="POST">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "localPartSender" },
        { label: admin_emailalias_emailAddress() },
        { id: "localPartSender" },
        { required: true },
        $createEmailSpecialSenderConstraints.localPartSender,
        {
          error: $createEmailSpecialSenderErrors.localPartSender
        },
        {
          value: $createEmailSpecialSenderForm.localPartSender
        }
      ),
      {
        value: ($$value) => {
          $createEmailSpecialSenderForm.localPartSender = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: admin_emailalias_domain(),
        error: $createEmailSpecialSenderErrors.domainSender
      },
      {},
      {
        default: () => {
          return `<select${spread(
            [
              { id: "domainSender" },
              { name: "domainSender" },
              {
                class: "select select-bordered w-full max-w-xs"
              },
              escape_object($createEmailSpecialSenderConstraints.domainSender),
              { required: true }
            ],
            {}
          )}>${each(data.domains, (domain) => {
            return `<option${add_attribute("value", domain, 0)}>${escape(domain)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "usernameSender" },
        {
          label: admin_emailalias_studentIDOrUsername()
        },
        { required: true },
        { id: "usernameSender" },
        $createEmailSpecialSenderConstraints.usernameSender,
        {
          error: $createEmailSpecialSenderErrors.usernameSender
        },
        {
          value: $createEmailSpecialSenderForm.usernameSender
        }
      ),
      {
        value: ($$value) => {
          $createEmailSpecialSenderForm.usernameSender = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="btn btn-primary" type="submit">${escape(admin_emailalias_add())}</button></form></div> <div class="p-4"><h2 class="text-lg font-semibold">${escape(admin_emailalias_addSpecialReceiver())}</h2> <form class="flex flex-row items-end gap-2"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/createEmailSpecialReceiver`, void 0), 0)} name="createEmailSpecialReceiver" method="POST">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "localPartReceiver" },
        { label: admin_emailalias_emailAddress() },
        { required: true },
        { id: "localPartReceiver" },
        $createEmailSpecialReceiverConstraints.localPartReceiver,
        {
          error: $createEmailSpecialReceiverErrors.localPartReceiver
        },
        {
          value: $createEmailSpecialReceiverForm.localPartReceiver
        }
      ),
      {
        value: ($$value) => {
          $createEmailSpecialReceiverForm.localPartReceiver = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: admin_emailalias_domain(),
        error: $createEmailSpecialReceiverErrors.domainReceiver
      },
      {},
      {
        default: () => {
          return `<select${spread(
            [
              { id: "domainReceiver" },
              { name: "domainReceiver" },
              {
                class: "select select-bordered w-full max-w-xs"
              },
              escape_object($createEmailSpecialReceiverConstraints.domainReceiver),
              { required: true }
            ],
            {}
          )}>${each(data.domains, (domain) => {
            return `<option${add_attribute("value", domain, 0)}>${escape(domain)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "targetEmailReceiver" },
        {
          label: admin_emailalias_targetAddress()
        },
        { required: true },
        { id: "targetEmailReceiver" },
        {
          error: $createEmailSpecialReceiverErrors.targetEmailReceiver
        },
        $createEmailSpecialReceiverConstraints.targetEmailReceiver,
        {
          value: $createEmailSpecialReceiverForm.targetEmailReceiver
        }
      ),
      {
        value: ($$value) => {
          $createEmailSpecialReceiverForm.targetEmailReceiver = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="btn btn-primary" type="submit">${escape(admin_emailalias_add())}</button></form></div></div>` : ``} <div class="overflow-x-auto"><h1 class="my-4 text-2xl font-bold">${escape(admin_emailalias_emailAliases())}</h1> <table class="table"> <thead><tr class="bg-base-200"><th>${escape(admin_emailalias_emailAddress())}</th> <th>${escape(admin_emailalias_positionID())}</th> <th></th></tr></thead> <tbody>${each(groupedEmailAliases, (emailAlias) => {
      return `<tr><td class="font-medium">${escape(emailAlias[0])}</td> <td>${each(emailAlias[1], (positionId, i) => {
        return `${i > 0 ? `, ` : ``} <span class="font-mono">${escape(positionId)}</span>`;
      })}</td> ${isAuthorized(apiNames.EMAIL_ALIAS.UPDATE, $page.data.user) ? `<td class="text-right"><a class="btn btn-xs px-8"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`email-alias/${emailAlias[0]}`, void 0), 0)}>${escape(admin_emailalias_edit())}</a></td>` : ``} </tr>`;
    })}</tbody></table></div> <hr> <div class="overflow-x-auto"><h1 class="my-4 text-2xl font-bold">${escape(admin_emailalias_specialSenders())}</h1> <table class="table"> <thead><tr class="bg-base-200"><th>${escape(admin_emailalias_emailAddress())}</th> <th>${escape(admin_emailalias_studentIDOrUsername())}</th> <th></th></tr></thead> <tbody>${each(groupedSpecialSenders, ({ 0: email, 1: ids }) => {
      return `<tr><td class="font-medium">${escape(email)}</td> <td>${each(ids, ({ studentId }, i) => {
        return `${i > 0 ? `, ` : ``} <span class="font-mono">${escape(studentId)}</span>`;
      })}</td> ${isAuthorized(apiNames.EMAIL_ALIAS.UPDATE, $page.data.user) ? `<td class="text-right"><a class="btn btn-xs px-8"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`email-alias/${email}`, void 0), 0)}>${escape(admin_emailalias_edit())}</a></td>` : ``} </tr>`;
    })}</tbody></table></div> <hr> <div class="overflow-x-auto"><h1 class="my-4 text-2xl font-bold">${escape(admin_emailalias_specialReceivers())}</h1> <table class="table"> <thead><tr class="bg-base-200"><th>${escape(admin_emailalias_emailAddress())}</th> <th>${escape(admin_emailalias_targetAddress())}</th> <th></th></tr></thead> <tbody>${each(groupedSpecialReceivers, ({ 0: email, 1: targetEmails }) => {
      return `<tr><td class="font-medium">${escape(email)}</td> <td>${each(targetEmails, (targetEmail, i) => {
        return `${i > 0 ? `, ` : ``} <span class="font-mono">${escape(targetEmail)}</span>`;
      })}</td> ${isAuthorized(apiNames.EMAIL_ALIAS.UPDATE, $page.data.user) ? `<td class="text-right"><a class="btn btn-xs px-8"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`email-alias/${email}`, void 0), 0)}>${escape(admin_emailalias_edit())}</a></td>` : ``} </tr>`;
    })}</tbody></table></div> <hr></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_createEmailPositionForm();
  $$unsubscribe_createEmailPositionConstraints();
  $$unsubscribe_createEmailPositionErrors();
  $$unsubscribe_createEmailSpecialSenderForm();
  $$unsubscribe_createEmailSpecialSenderConstraints();
  $$unsubscribe_createEmailSpecialSenderErrors();
  $$unsubscribe_createEmailSpecialReceiverForm();
  $$unsubscribe_createEmailSpecialReceiverConstraints();
  $$unsubscribe_createEmailSpecialReceiverErrors();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DHPlqHOC.js.map
