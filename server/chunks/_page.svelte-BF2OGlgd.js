import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import dayjs from 'dayjs';
import { cK as admin_alerts_messageSwedish, cL as admin_alerts_messageEnglish, cM as admin_alerts_severity, cN as admin_alerts_info, cO as admin_alerts_severityInfo, cP as admin_alerts_severitySuccess, cQ as admin_alerts_severityWarning, cR as admin_alerts_severityError, cS as admin_alerts_create, cT as admin_alerts_activeAlerts, cU as admin_alerts_message, cV as admin_alerts_created, cW as admin_alerts_removeAlert, cX as admin_alerts_removeAreYouSure, cY as admin_alerts_remove } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './exports-BGi7-Rnc.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let removeModal = void 0;
  let selectedAlert = void 0;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Alerts" }, {}, {})} <form method="POST" class="flex w-full flex-col items-center gap-2"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)}><p>${escape(admin_alerts_info())}</p> <input type="text" name="message"${add_attribute("placeholder", admin_alerts_messageSwedish(), 0)} class="input input-bordered w-full max-w-lg"> <input type="text" name="messageEn"${add_attribute("placeholder", admin_alerts_messageEnglish(), 0)} class="input input-bordered w-full max-w-lg"> <select name="severity" class="select select-bordered w-full max-w-lg"><option disabled selected${add_attribute("value", admin_alerts_severity(), 0)}>${escape(admin_alerts_severity())}</option><option value="info">${escape(admin_alerts_severityInfo())}</option><option value="success">${escape(admin_alerts_severitySuccess())}</option><option value="warning">${escape(admin_alerts_severityWarning())}</option><option value="error">${escape(admin_alerts_severityError())}</option></select> <button class="btn w-full max-w-lg">${escape(admin_alerts_create())}</button></form> <div class="divider">${escape(admin_alerts_activeAlerts())}</div> <table class="table"><thead><tr><th>${escape(admin_alerts_severity())}</th> <th>${escape(admin_alerts_message())}</th> <th>${escape(admin_alerts_created())}</th> <th></th></tr></thead> <tbody>${each(data.alert, (alert) => {
    return `<tr><th class="capitalize">${escape(alert.severity)}</th> <td>${escape(alert.message)}</td> <td>${escape(dayjs(alert.createdAt).format("YYYY-MM-DD HH:mm:ss"))}</td> <td><button class="btn btn-square" data-svelte-h="svelte-kbkims"><span class="i-mdi-delete text-xl"></span> </button></td> </tr>`;
  })}</tbody></table> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", removeModal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(admin_alerts_removeAlert())}</h3> <p class="py-4">${escape(admin_alerts_removeAreYouSure())}</p> <p class="text-xs text-base-content/60">${escape(selectedAlert?.message)}</p> <div class="modal-action"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", selectedAlert?.id, 0)}> <button type="submit" class="btn btn-error">${escape(admin_alerts_remove())}</button></form></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-1wtee5r"><button class="cursor-auto"></button></form></dialog>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BF2OGlgd.js.map
