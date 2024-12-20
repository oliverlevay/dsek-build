import { f as getContext, b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { d as PUBLIC_BUCKETS_DOCUMENTS } from './client3-CIDcnctW.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { bP as documents_requirementProfiles, eN as documents_filterByYear, dS as documents_uploadFile, eP as documents_edit } from './messages-D8OfyZiq.js';
import { D as DeleteFileForm } from './DeleteFileForm-D0oNl9Eq.js';
import { F as FileLink } from './FileLink-DA9SS968.js';
import { p as page } from './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './runtime-BxW51cRH.js';
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
import './servePdf-B39p50pk.js';

function foldersFirstAlphabetically(a, b) {
  if (a.isFolder && !b.isFolder) {
    return -1;
  }
  if (b.isFolder && !a.isFolder) {
    return 1;
  }
  return a.name.localeCompare(b.name, "sv");
}
const Folder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let foldericon;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { expanded = true } = $$props;
  let { name } = $$props;
  let { folders } = $$props;
  let { isEditing = false } = $$props;
  let { deleteForm } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0) $$bindings.expanded(expanded);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.folders === void 0 && $$bindings.folders && folders !== void 0) $$bindings.folders(folders);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  if ($$props.deleteForm === void 0 && $$bindings.deleteForm && deleteForm !== void 0) $$bindings.deleteForm(deleteForm);
  {
    folders.sort(foldersFirstAlphabetically);
  }
  foldericon = expanded ? "i-mdi-folder-open-outline" : "i-mdi-folder-outline";
  $$unsubscribe_page();
  return `<div class="flex"${add_attribute("data-tip", name, 0)}><button><span${add_attribute("class", foldericon + " align-text-top text-xl text-primary", 0)}></span> ${escape(name)}</button></div> <div class="m-2 border-l border-gray-400 pl-5">${expanded ? `${each(folders, (folder) => {
    return `${folder.isFolder ? `${validate_component(Folder, "svelte:self").$$render(
      $$result,
      {
        name: folder.name,
        folders: folder.files,
        expanded: false,
        isEditing,
        deleteForm
      },
      {},
      {}
    )}` : `<div class="flex flex-row gap-1">${validate_component(FileLink, "FileLink").$$render($$result, { name: folder.name, url: folder.url }, {}, {})} ${isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).DELETE, $page.data.user) && isEditing ? `${validate_component(DeleteFileForm, "DeleteFileForm").$$render(
      $$result,
      {
        fileId: folder.id,
        fileName: folder.name,
        data: deleteForm
      },
      {},
      {}
    )}` : ``} </div>`}`;
  })}` : ``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canCreate;
  let canDelete;
  let { data } = $$props;
  let isEditing = false;
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  const folders = [];
  function processFolder(folder, pathSoFar, array) {
    if (pathSoFar.startsWith("/")) pathSoFar = pathSoFar.substring(1);
    const name = folder.split("/")[0];
    if (folder) {
      const exists = array?.find((f) => f.name === name);
      let newArray;
      if (exists) {
        newArray = exists.files;
      } else {
        array.push({
          id: "",
          url: "",
          name: name ? name : "undefined",
          isFolder: true,
          files: []
        });
        newArray = array[array?.length - 1].files;
      }
      processFolder(folder.split("/").slice(1).join("/"), pathSoFar + "/" + name, newArray);
    } else {
      data.folders[pathSoFar]?.forEach((file) => {
        array.push({
          id: file.id,
          name: file.name,
          isFolder: false,
          url: file.thumbnailUrl ? file.thumbnailUrl : "",
          files: []
        });
      });
    }
  }
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    {
      folders.length = 0;
      Object.keys(data["folders"]).forEach((folder) => {
        processFolder(folder, "", folders);
      });
    }
  }
  canCreate = isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).CREATE, data.user);
  canDelete = isAuthorized(apiNames.FILES.BUCKET(PUBLIC_BUCKETS_DOCUMENTS).DELETE, data.user);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: documents_requirementProfiles() }, {}, {})} <div class="mb-4 flex w-full flex-col items-start gap-2"><span class="text-lg">${escape(documents_filterByYear())}</span> ${validate_component(Pagination, "Pagination").$$render(
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
  )}</div> ${canCreate || canDelete ? `<div class="mb-4 flex flex-row gap-1">${canCreate ? `<a class="btn btn-primary btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents/upload?type=requirement`, void 0), 0)}>${escape(documents_uploadFile())}</a>` : ``} ${canDelete ? `<button class="btn btn-secondary btn-sm">${escape(documents_edit())}</button>` : ``}</div>` : ``} <div class="flex flex-col rounded-lg bg-base-200 p-5">${validate_component(Folder, "Folder").$$render(
    $$result,
    {
      name: "",
      folders,
      deleteForm: data.deleteForm,
      isEditing
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B8YZ0Se2.js.map
