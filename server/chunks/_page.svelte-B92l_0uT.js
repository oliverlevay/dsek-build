import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { F as FormFileInput } from './FormFileInput-BONk2osz.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { F as FormSubmitButton } from './FormSubmitButton-CTUAD0FR.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { dS as documents_uploadFile } from './messages-D8OfyZiq.js';
import './exports-BGi7-Rnc.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './Input-DbabE1Vy.js';
import './LoadingButton-DNerNunK.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const superform = superForm(data.uploadForm, { dataType: "json" });
  const { enhance: createEnhance, form } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    console.log(data.files);
  }
  $$unsubscribe_form();
  return `${$form.fileUrl ? `<span class="text-lg">Filurl: <span class="font-medium">${escape($form.fileUrl)}</span></span>` : ``} <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/upload`, void 0), 0)} enctype="multipart/form-data" class="form-control max-w-md rounded-box bg-base-200 p-4">${validate_component(FormFileInput, "FormFileInput").$$render(
    $$result,
    {
      field: "file",
      superform,
      label: "Fil",
      onChange: (e) => {
        if (e.currentTarget.files) {
          $form.fileName = e.currentTarget.files?.item(0)?.name.replace(/_+/g, " ").replace(/\..+$/, "") ?? "";
        }
      }
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "fileName",
      label: documents_uploadFile()
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "prefix",
      label: "Prefix",
      explanation: "Kommer lägga den i rätt mapp (typ /event/2024/XXX)"
    },
    {},
    {}
  )} ${validate_component(FormSubmitButton, "FormSubmitButton").$$render(
    $$result,
    {
      superform,
      class: "btn btn-primary mt-4 self-start"
    },
    {},
    {
      default: () => {
        return `${escape(documents_uploadFile())}`;
      }
    }
  )}</form> <ul class="mt-8 flex flex-col gap-1">${each(data.files, (file) => {
    return `<li class="join flex py-1"><button class="btn join-item flex-1 select-all justify-start">${escape(file.id.replace(data.prefix + "/", ""))}</button> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)} method="POST"><input type="hidden"${add_attribute("value", file.id, 0)} name="id"> <button class="btn btn-error join-item" ${!isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_FILES).DELETE, data.user) ? "disabled" : ""}><span class="i-mdi-delete"></span> </button></form> </li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B92l_0uT.js.map
