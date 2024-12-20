import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { D as DateInput } from './DateInput-zW8CcVNb.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './stores-ClpLLrvc.js';
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
import './stringify-cFltMSLq.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $updateConstraints, $$unsubscribe_updateConstraints;
  let $updateErrors, $$unsubscribe_updateErrors;
  let $updateSubmitting, $$unsubscribe_updateSubmitting;
  let $nollningErrors, $$unsubscribe_nollningErrors;
  let $nollningConstraints, $$unsubscribe_nollningConstraints;
  let $nollningSubmitting, $$unsubscribe_nollningSubmitting;
  let { data } = $$props;
  const { enhance: updateEnhance, submitting: updateSubmitting, errors: updateErrors, constraints: updateConstraints } = superForm(data.updateForm);
  $$unsubscribe_updateSubmitting = subscribe(updateSubmitting, (value) => $updateSubmitting = value);
  $$unsubscribe_updateErrors = subscribe(updateErrors, (value) => $updateErrors = value);
  $$unsubscribe_updateConstraints = subscribe(updateConstraints, (value) => $updateConstraints = value);
  const { enhance: nollningEnhance, submitting: nollningSubmitting, errors: nollningErrors, constraints: nollningConstraints } = superForm(data.updateNollningForm);
  $$unsubscribe_nollningSubmitting = subscribe(nollningSubmitting, (value) => $nollningSubmitting = value);
  $$unsubscribe_nollningErrors = subscribe(nollningErrors, (value) => $nollningErrors = value);
  $$unsubscribe_nollningConstraints = subscribe(nollningConstraints, (value) => $nollningConstraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_updateConstraints();
  $$unsubscribe_updateErrors();
  $$unsubscribe_updateSubmitting();
  $$unsubscribe_nollningErrors();
  $$unsubscribe_nollningConstraints();
  $$unsubscribe_nollningSubmitting();
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Admininställningar" }, {}, {})} <div class="flex flex-col gap-4">${isAuthorized(apiNames.ADMIN.SETTINGS.CREATE, data.user) || isAuthorized(apiNames.ADMIN.SETTINGS.UPDATE, data.user) ? `<form class="form-control gap-2 rounded-box bg-base-300 p-4" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)}>${`<h3 class="text-lg font-semibold" data-svelte-h="svelte-19kqtza">Skapa ny</h3> ${validate_component(Input, "Input").$$render($$result, Object.assign({}, { label: "Key" }, { name: "key" }, $updateConstraints.key, { error: $updateErrors.key }), {}, {})}`} ${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign(
      {},
      { label: "Value" },
      { name: "value" },
      {
        value: void 0
      },
      $updateConstraints.value,
      { error: $updateErrors.value }
    ),
    {},
    {}
  )} ${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-primary mt-4",
      isLoading: $updateSubmitting,
      type: "submit"
    },
    {},
    {
      default: () => {
        return `${escape("Skapa")}`;
      }
    }
  )}</form>` : ``} <table class="table rounded-box bg-base-300"><thead data-svelte-h="svelte-11jk77j"><tr><th>Key</th> <th>Value</th> <th>Edit</th> <th>Remove</th></tr></thead> ${each(data.settings, (setting) => {
    return `<tr><td>${escape(setting.key)}</td> <td>${escape(setting.value)}</td> <td><button ${!isAuthorized(apiNames.ADMIN.SETTINGS.UPDATE, data.user) ? "disabled" : ""} class="btn btn-ghost"><span class="i-mdi-edit"></span> </button></td> <td><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/remove`, void 0), 0)}><input type="hidden" name="key"${add_attribute("value", setting.key, 0)}> ${validate_component(LoadingButton, "LoadingButton").$$render(
      $$result,
      {
        type: "submit",
        class: "btn btn-error",
        disabled: !isAuthorized(apiNames.ADMIN.SETTINGS.DELETE, data.user)
      },
      {},
      {
        default: () => {
          return `<span class="i-mdi-delete"></span> `;
        }
      }
    )} </form></td> </tr>`;
  })}</table> ${data.nollning && isAuthorized(apiNames.ADMIN.SETTINGS.UPDATE, data.user) ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/updateNollning`, void 0), 0)} class="form-control justify-between gap-2 rounded-box bg-base-300 p-4 md:flex-row">${validate_component(Labeled, "Labeled").$$render($$result, Object.assign({}, { label: "Nollning start" }, { class: "md:flex-1" }, { error: $nollningErrors.start }, $nollningConstraints.start), {}, {
    default: () => {
      return `${validate_component(DateInput, "DateInput").$$render($$result, Object.assign({}, { name: "start" }, { date: data.nollning.start }, $nollningConstraints.start), {}, {})}`;
    }
  })} ${validate_component(Labeled, "Labeled").$$render($$result, Object.assign({}, { class: "md:flex-1" }, { label: "Nollning start" }, { error: $nollningErrors.end }, $nollningConstraints.end), {}, {
    default: () => {
      return `${validate_component(DateInput, "DateInput").$$render($$result, Object.assign({}, { name: "end" }, { date: data.nollning.end }, $nollningConstraints.end, { error: $nollningErrors.end }), {}, {})}`;
    }
  })} ${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-primary mt-4 self-end",
      isLoading: $nollningSubmitting,
      type: "submit"
    },
    {},
    {
      default: () => {
        return `Spara`;
      }
    }
  )}</form>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D2IyhHXF.js.map
