import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { g as getPdfApiUrl } from './servePdf-B39p50pk.js';
import { D as DeleteFileForm } from './DeleteFileForm-D0oNl9Eq.js';
import { eT as documents_governing, eU as documents_governing_statutes, eV as documents_governing_regulations, eW as documents_governing_pdfViewer, eX as documents_governing_createNew, eP as documents_edit, eY as documents_governing_blurb, eZ as documents_governing_forQuestions, e_ as documents_governing_policies, e$ as documents_governing_guidelines, f0 as documents_governing_yearSpecificDocuments } from './messages-D8OfyZiq.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './index-BHX467Gw.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './runtime-BxW51cRH.js';

const FileWithDownload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { url } = $$props;
  let { onClick } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  return `<div class="flex items-center gap-2 py-2"><a class="link flex items-center gap-2 text-left no-underline hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(url, void 0), 0)} target="_blank"><span class="i-mdi-file-document-outline align-text-top text-xl text-primary"></span> ${escape(name)}</a> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(url, void 0), 0)}${add_attribute("download", name, 0)} class="link no-underline hover:link-primary hover:underline"><span class="i-mdi-download align-text-top text-xl"></span></a></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let plansOfOperations;
  let strategicGoals;
  let frameworkBudgets;
  let onPdfClick;
  let { data } = $$props;
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  let isEditing = false;
  let selectedPdf = null;
  let dialog;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  plansOfOperations = data.plansOfOperations;
  strategicGoals = data.strategicGoals;
  frameworkBudgets = data.frameworkBudgets;
  onPdfClick = (url) => {
    selectedPdf = url;
    dialog.showModal();
  };
  return `<div class="flex w-full flex-row flex-wrap items-center justify-between gap-x-4">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: documents_governing() }, {}, {})} <div>${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) ? `${isAuthorized(apiNames.GOVERNING_DOCUMENT.CREATE, data.user) ? `<a class="btn btn-primary btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/new`, void 0), 0)}>+ ${escape(documents_governing_createNew())}</a>` : ``} <button class="btn btn-secondary btn-sm">${escape(documents_edit())}</button>` : ``}</div></div> <div class="flex flex-col gap-5"><p>${escape(documents_governing_blurb())}</p> <p>${escape(documents_governing_forQuestions())} <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:styrelsen@dsek.se`, void 0), 0)} class="link link-primary no-underline hover:underline">styrelsen@dsek.se</a></p> <div class="flex items-center gap-5">${validate_component(FileWithDownload, "FileWithDownload").$$render(
    $$result,
    {
      name: documents_governing_statutes(),
      url: "/stadgar",
      onClick: onPdfClick
    },
    {},
    {}
  )} ${validate_component(FileWithDownload, "FileWithDownload").$$render(
    $$result,
    {
      name: documents_governing_regulations(),
      url: "/reglemente",
      onClick: onPdfClick
    },
    {},
    {}
  )}</div> <div class="flex flex-col gap-4 md:flex-row"><div><h1 class="my-3 text-2xl font-bold">${escape(documents_governing_policies())}</h1> <div class="flex flex-col gap-2">${each(data.policies, (policy) => {
    return `<div class="flex items-center gap-1">${validate_component(FileWithDownload, "FileWithDownload").$$render(
      $$result,
      {
        name: policy.title,
        url: getPdfApiUrl(policy.url),
        onClick: onPdfClick
      },
      {},
      {}
    )} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: policy.id,
        fileName: policy.title,
        data: data.deleteForm
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.UPDATE, data.user) && isEditing ? `<a class="pointer-events-auto"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/${policy.id}/edit`, void 0), 0)}><span class="i-mdi-pencil align-middle text-xl text-secondary"></span> </a>` : ``} </div>`;
  })}</div></div> <div><h1 class="my-3 text-2xl font-bold">${escape(documents_governing_guidelines())}</h1> <div class="flex flex-col gap-2">${each(data.guidelines, (guideline) => {
    return `<div class="flex items-center gap-1">${validate_component(FileWithDownload, "FileWithDownload").$$render(
      $$result,
      {
        name: guideline.title,
        url: getPdfApiUrl(guideline.url),
        onClick: onPdfClick
      },
      {},
      {}
    )} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: guideline.id,
        fileName: guideline.title,
        data: data.deleteForm
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.UPDATE, data.user) && isEditing ? `<a class="pointer-events-auto"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/${guideline.id}/edit`, void 0), 0)}><span class="i-mdi-pencil align-middle text-xl text-secondary"></span> </a>` : ``} </div>`;
  })}</div></div> <div><h1 class="my-3 text-2xl font-bold">${escape(documents_governing_yearSpecificDocuments())}</h1> <div class="flex flex-col gap-2">${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      class: "max-w-md",
      count: currentYear - 1981,
      getPageName: (pageNumber) => (currentYear - pageNumber).toString(),
      getPageNumber: (pageName) => currentYear - +pageName,
      fieldName: "year"
    },
    {},
    {}
  )} ${each(plansOfOperations, (planOfOperations) => {
    return `<div class="flex items-center gap-1">${validate_component(FileWithDownload, "FileWithDownload").$$render(
      $$result,
      {
        name: planOfOperations.title,
        url: getPdfApiUrl(planOfOperations.url),
        onClick: onPdfClick
      },
      {},
      {}
    )} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: planOfOperations.id,
        fileName: planOfOperations.title,
        data: data.deleteForm
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.UPDATE, data.user) && isEditing ? `<a class="pointer-events-auto"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/${planOfOperations.id}/edit`, void 0), 0)}><span class="i-mdi-pencil align-middle text-xl text-secondary"></span> </a>` : ``} </div>`;
  })} ${each(frameworkBudgets, (frameworkBudget) => {
    return `<div class="flex items-center gap-1">${validate_component(FileWithDownload, "FileWithDownload").$$render(
      $$result,
      {
        name: frameworkBudget.title,
        url: getPdfApiUrl(frameworkBudget.url),
        onClick: onPdfClick
      },
      {},
      {}
    )} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: frameworkBudget.id,
        fileName: frameworkBudget.title,
        data: data.deleteForm
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.UPDATE, data.user) && isEditing ? `<a class="pointer-events-auto"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/${frameworkBudget.id}/edit`, void 0), 0)}><span class="i-mdi-pencil align-middle text-xl text-secondary"></span> </a>` : ``} </div>`;
  })} ${each(strategicGoals, (strategicGoal) => {
    return `<div class="flex items-center gap-1">${validate_component(FileWithDownload, "FileWithDownload").$$render(
      $$result,
      {
        name: strategicGoal.title,
        url: getPdfApiUrl(strategicGoal.url),
        onClick: onPdfClick
      },
      {},
      {}
    )} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.DELETE, data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: strategicGoal.id,
        fileName: strategicGoal.title,
        data: data.deleteForm
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.GOVERNING_DOCUMENT.UPDATE, data.user) && isEditing ? `<a class="pointer-events-auto"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/governing/${strategicGoal.id}/edit`, void 0), 0)}><span class="i-mdi-pencil align-middle text-xl text-secondary"></span> </a>` : ``} </div>`;
  })}</div></div></div></div> <dialog class="modal modal-middle"${add_attribute("this", dialog, 0)}><form method="dialog" class="modal-backdrop"><button class="cursor-auto"></button></form> <iframe${add_attribute("title", documents_governing_pdfViewer(), 0)}${add_attribute("src", selectedPdf, 0)} class="menu modal-box h-full max-h-[95vh] w-full max-w-[70vw]"></iframe></dialog>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BObZSXB2.js.map
