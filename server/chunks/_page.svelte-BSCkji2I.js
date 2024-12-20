import { f as getContext, b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { d as PUBLIC_BUCKETS_DOCUMENTS } from './client3-CIDcnctW.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { D as DeleteFileForm } from './DeleteFileForm-D0oNl9Eq.js';
import { F as FileLink } from './FileLink-DA9SS968.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { bM as documents, eJ as documents_guildMeetings, eK as documents_boardMeetings, eL as documents_srdMeetings, eM as documents_other, eN as documents_filterByYear, eO as documents_filterByType, dS as documents_uploadFile, eP as documents_edit } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './superForms-CCN_8vE4.js';
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
import './servePdf-B39p50pk.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';

const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let generateLink;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { options = [] } = $$props;
  let { fieldName = "type" } = $$props;
  let { currentTab = options[0]?.value } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.fieldName === void 0 && $$bindings.fieldName && fieldName !== void 0) $$bindings.fieldName(fieldName);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0) $$bindings.currentTab(currentTab);
  {
    (() => {
      const searchParamValue = $page.url.searchParams.get(fieldName);
      if (searchParamValue) {
        currentTab = searchParamValue;
      }
    })();
  }
  generateLink = (value) => {
    const searchParams = new URLSearchParams($page.url.searchParams);
    searchParams.set(fieldName, value.toString());
    return `?${searchParams.toString()}`;
  };
  $$unsubscribe_page();
  return `<div role="tablist" class="tabs-boxed flex w-full flex-col items-stretch sm:w-auto sm:flex-row">${each(options, (tabOption) => {
    return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(generateLink(tabOption.value), void 0), 0)} role="tab" class="${["tab h-auto", tabOption.value === currentTab ? "tab-active" : ""].join(" ").trim()}">${escape(tabOption.name)} </a>`;
  })}</div>`;
});
const Meeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { deleteForm } = $$props;
  let { name } = $$props;
  let { files } = $$props;
  let { isEditing = false } = $$props;
  if ($$props.deleteForm === void 0 && $$bindings.deleteForm && deleteForm !== void 0) $$bindings.deleteForm(deleteForm);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0) $$bindings.files(files);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  $$unsubscribe_page();
  return `<section class="rounded-lg bg-base-200 p-4 pt-2 shadow"><h2 class="mb-2 text-lg font-bold">${escape(name)}</h2> <div class="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">${each(files, (file) => {
    return `<div class="flex gap-1">${file.thumbnailUrl ? `${validate_component(FileLink, "FileLink").$$render(
      $$result,
      {
        name: file.name,
        url: file.thumbnailUrl,
        full: true
      },
      {},
      {}
    )}` : ``} ${isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).DELETE, $page.data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: file.id,
        fileName: file.name,
        data: deleteForm
      },
      {},
      {}
    )}` : ``} </div>`;
  })}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meetings;
  let canCreate;
  let canEdit;
  let { data } = $$props;
  let isEditing = false;
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  let type = "board-meeting";
  const typeOptions = [
    {
      name: documents_guildMeetings(),
      value: "guild-meeting"
    },
    {
      name: documents_boardMeetings(),
      value: "board-meeting"
    },
    {
      name: documents_srdMeetings(),
      value: "SRD-meeting"
    },
    {
      name: documents_other(),
      value: "other"
    }
  ];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
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
    meetings = Object.keys(data.meetings).sort((a, b) => type === "board-meeting" || type === "SRD-meeting" ? b.localeCompare(a, "sv") : a.localeCompare(b, "sv"));
    canCreate = isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).CREATE, data.user);
    canEdit = isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).DELETE, data.user);
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: documents() }, {}, {})} <div class="flex flex-row flex-wrap justify-between"><div class="mb-4 flex w-full flex-col items-start gap-2"><span class="text-lg">${escape(documents_filterByYear())}</span> ${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        class: "max-w-prose",
        count: currentYear - 1981,
        getPageName: (pageNumber) => (currentYear - pageNumber).toString(),
        getPageNumber: (pageName) => currentYear - +pageName,
        fieldName: "year"
      },
      {},
      {}
    )} <span class="text-lg">${escape(documents_filterByType())}</span> ${validate_component(Tabs, "Tabs").$$render(
      $$result,
      {
        options: typeOptions,
        fieldName: "type",
        currentTab: type
      },
      {
        currentTab: ($$value) => {
          type = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${canCreate || canEdit ? `<div class="mb-4 flex flex-row gap-1">${canCreate ? `<a class="btn btn-primary btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/upload`, void 0), 0)}>${escape(documents_uploadFile())}</a>` : ``} ${canEdit ? `<button class="btn btn-secondary btn-sm">${escape(documents_edit())}</button>` : ``}</div>` : ``}</div> <div class="flex flex-col gap-4">${each(meetings, (meeting) => {
      return `${validate_component(Meeting, "Meeting").$$render(
        $$result,
        {
          name: meeting,
          files: data.meetings[meeting] ?? [],
          isEditing,
          deleteForm: data.deleteForm
        },
        {},
        {}
      )}`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BSCkji2I.js.map
