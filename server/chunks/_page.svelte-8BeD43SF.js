import { b as subscribe, f as getContext, k as compute_rest_props } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object, e as each } from './ssr-BoMjCg5r.js';
import { g as goto } from './client-yexbOeKf.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { p as page } from './stores-ClpLLrvc.js';
import { T as TagSelector } from './TagSelector-Br3xhJpq.js';
import { S as SearchBar } from './SearchBar-CQTZM987.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { c0 as linkShortener, dy as admin_links_add_label_URL, dz as admin_links_add_placeholder_URL, dA as admin_links_add_placeholder_tags, dB as admin_links_table_title, dC as admin_links_remove_confirmation, dD as admin_links_add_placeholder_slug, dE as admin_links_table_header_slug, dF as admin_links_table_header_url, dG as admin_links_table_header_tags, dH as admin_links_table_header_created, dI as admin_links_table_header_visits, dJ as admin_links_add_title, dK as admin_links_add_label_slug, dL as admin_links_add_label_tags, dM as admin_links_add_submit, dN as admin_links_remove_title, dO as admin_links_remove_submit, dP as admin_links_edit_title, dQ as admin_links_edit_cancel, dR as admin_links_edit_submit } from './messages-D8OfyZiq.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './index-BHX467Gw.js';
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

const TagSelectCreate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredTags;
  let ableCreateNewTag;
  let $$restProps = compute_rest_props($$props, ["onChange", "allTags", "selectedTags", "placeholder"]);
  let { onChange = () => {
    searchValue = "";
  } } = $$props;
  let { allTags = [] } = $$props;
  let { selectedTags = [] } = $$props;
  let { placeholder = "Taggar" } = $$props;
  let searchValue = "";
  let autocompleteEl;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0) $$bindings.onChange(onChange);
  if ($$props.allTags === void 0 && $$bindings.allTags && allTags !== void 0) $$bindings.allTags(allTags);
  if ($$props.selectedTags === void 0 && $$bindings.selectedTags && selectedTags !== void 0) $$bindings.selectedTags(selectedTags);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  filteredTags = allTags.filter((tag) => tag.name?.toLowerCase().includes(searchValue.toLowerCase()) && !selectedTags.map((tag2) => tag2.id).includes(tag.id));
  ableCreateNewTag = searchValue && [...selectedTags, ...filteredTags].every(({ name }) => name !== searchValue);
  return `<div class="dropdown"> <div class="input input-bordered flex h-auto min-h-12 items-center gap-2 py-2"${add_attribute("tabindex", 0, 0)} role="combobox" aria-controls="tags-panel" aria-expanded="false"><div class="flex flex-1 flex-wrap gap-1">${selectedTags.length > 0 ? `${each(selectedTags, (tag) => {
    return `<button type="button">${validate_component(TagChip, "TagChip").$$render(
      $$result,
      {
        tag,
        class: "after:ml-2 after:content-['x']"
      },
      {},
      {}
    )} </button>`;
  })}` : ``} <input${spread(
    [
      { id: "autocomplete" },
      { autocomplete: "off" },
      { autocapitalize: "off" },
      { type: "text" },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { class: "bg-transparent" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("value", searchValue, 0)}${add_attribute("this", autocompleteEl, 0)}></div> ${selectedTags.length > 0 ? `<button type="button" class="btn btn-xs" data-svelte-h="svelte-a6ixze">Clear</button>` : ``}</div> <ul${add_attribute("tabindex", 0, 0)} role="listbox" class="menu-compact menu dropdown-content join join-vertical z-10 flex max-h-80 w-full flex-col flex-nowrap overflow-y-auto rounded-md bg-base-100 shadow lg:max-w-[20rem]" id="tags-panel">${ableCreateNewTag ? (() => {
    return ` <li><button type="button" class="join-item w-full border-b border-b-base-content/10"><i data-svelte-h="svelte-4mzho0">Create Tag</i> &quot;${escape(searchValue)}&quot;</button></li>`;
  })() : ``} ${each(filteredTags, (tag) => {
    return `<li><button type="button" class="${"join-item w-full border-b border-b-base-content/10 " + escape(
      selectedTags.includes(tag) ? "bg-primary hover:bg-primary-content hover:text-primary" : "",
      true
    )}">${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}</button> </li>`;
  })} ${!ableCreateNewTag && filteredTags.length === 0 ? `<li class="w-full border-b border-b-base-content/10" data-svelte-h="svelte-15ozbol"><button type="button" disabled class="disabled">No tags</button></li>` : ``}</ul></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let query;
  let $page, $$unsubscribe_page;
  let $createLinksFormId, $$unsubscribe_createLinksFormId;
  let $createLinksConstraints, $$unsubscribe_createLinksConstraints;
  let $createLinksForm, $$unsubscribe_createLinksForm;
  let $createLinksErrors, $$unsubscribe_createLinksErrors;
  let $updateLinksForm, $$unsubscribe_updateLinksForm;
  let $updateLinksFormId, $$unsubscribe_updateLinksFormId;
  let $updateLinksErrors, $$unsubscribe_updateLinksErrors;
  let $updateLinksConstraints, $$unsubscribe_updateLinksConstraints;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { form: createLinksForm, errors: createLinksErrors, constraints: createLinksConstraints, enhance: createLinksEnhance, formId: createLinksFormId } = superForm(data.createLinksForm, { resetForm: true });
  $$unsubscribe_createLinksForm = subscribe(createLinksForm, (value) => $createLinksForm = value);
  $$unsubscribe_createLinksErrors = subscribe(createLinksErrors, (value) => $createLinksErrors = value);
  $$unsubscribe_createLinksConstraints = subscribe(createLinksConstraints, (value) => $createLinksConstraints = value);
  $$unsubscribe_createLinksFormId = subscribe(createLinksFormId, (value) => $createLinksFormId = value);
  const { form: updateLinksForm, errors: updateLinksErrors, constraints: updateLinksConstraints, enhance: updateLinksEnhance, formId: updateLinksFormId } = superForm(data.updateLinksForm, {
    onUpdate: ({ form }) => {
      if (form.valid) ;
    },
    resetForm: true
  });
  $$unsubscribe_updateLinksForm = subscribe(updateLinksForm, (value) => $updateLinksForm = value);
  $$unsubscribe_updateLinksErrors = subscribe(updateLinksErrors, (value) => $updateLinksErrors = value);
  $$unsubscribe_updateLinksConstraints = subscribe(updateLinksConstraints, (value) => $updateLinksConstraints = value);
  $$unsubscribe_updateLinksFormId = subscribe(updateLinksFormId, (value) => $updateLinksFormId = value);
  let createSelectedTags = [];
  const tableHeaders = [
    {
      order: { field: "shortCode" },
      title: admin_links_table_header_slug()
    },
    {
      order: { field: "longUrl" },
      title: admin_links_table_header_url()
    },
    { title: admin_links_table_header_tags() },
    {
      order: { field: "dateCreated" },
      title: admin_links_table_header_created()
    },
    {
      order: { field: "visits" },
      title: admin_links_table_header_visits()
    }
  ];
  let allTags = data.tags.map((t) => ({ id: t, name: t }));
  let filteredTags = allTags.filter((tag) => $page.url.searchParams.getAll("tags").includes(tag.name));
  let removeModal;
  let toggleAllCheckBox;
  let checkboxes = [];
  const resetCheckboxes = () => {
    checkboxes = [];
  };
  let editModal;
  let editModalTags = [];
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
    query = new URLSearchParams($page.url.searchParams.toString());
    allTags = data.tags.map((t) => ({ id: t, name: t }));
    {
      if (data.domains) {
        resetCheckboxes();
      }
    }
    $$rendered = `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: linkShortener() }, {}, {})} <div class="mb-10 mt-4 rounded-lg md:p-4 lg:mb-4 lg:p-8"><h2 class="text-lg font-semibold">${escape(admin_links_add_title())}</h2> <form class="flex flex-col items-stretch gap-2 lg:flex-row lg:items-start"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/create`, void 0), 0)} method="post"${add_attribute("id", $createLinksFormId, 0)}><div class="form-control"><div class="label"><span class="label-text">${escape(admin_links_add_label_slug())} <span class="font-bold" data-svelte-h="svelte-mqffv4">*</span></span></div> <label class="input input-bordered flex items-center gap-2 hover:border-base-content"><p class="opacity-60" data-svelte-h="svelte-1az8i9r">link.dsek.se/</p> <input${spread(
      [
        { id: "slug" },
        { name: "slug" },
        { class: "" },
        {
          placeholder: escape_attribute_value(admin_links_add_placeholder_slug())
        },
        { required: true },
        escape_object($createLinksConstraints)
      ],
      {}
    )}${add_attribute("value", $createLinksForm.slug, 0)}></label></div> ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "url" },
        { label: admin_links_add_label_URL() },
        {
          placeholder: admin_links_add_placeholder_URL()
        },
        { required: true },
        { error: $createLinksErrors.url },
        $createLinksConstraints,
        { value: $createLinksForm.url }
      ),
      {
        value: ($$value) => {
          $createLinksForm.url = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="form-control relative"><div class="label"><span class="label-text">${escape(admin_links_add_label_tags())}*</span></div> ${validate_component(TagSelectCreate, "TagSelectCreate").$$render(
      $$result,
      {
        placeholder: admin_links_add_placeholder_tags(),
        allTags,
        selectedTags: createSelectedTags
      },
      {
        allTags: ($$value) => {
          allTags = $$value;
          $$settled = false;
        },
        selectedTags: ($$value) => {
          createSelectedTags = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$createLinksErrors.tags?._errors ? `<div class="label"><span class="label-text-alt text-error">${$createLinksErrors.tags._errors.length > 1 ? `${escape($createLinksErrors.tags[0])}` : `${escape($createLinksErrors.tags?._errors?.join(", "))}`}</span></div>` : ``}</div> ${each(createSelectedTags, (tag) => {
      return `<input type="hidden" name="tags"${add_attribute("value", tag.name, 0)}>`;
    })} ${validate_component(Labeled, "Labeled").$$render($$result, { label: "Add", invisibleText: true }, {}, {
      default: () => {
        return `<button class="btn btn-primary self-end">${escape(admin_links_add_submit())}</button>`;
      }
    })}</form></div> ${validate_component(PageHeader, "PageHeader").$$render($$result, { title: admin_links_table_title() }, {}, {})} <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)} method="post"><div class="flex items-end gap-2"><button type="button" class="btn btn-square btn-error place-self-end" ${checkboxes.every((c) => !c) ? "disabled" : ""}><span class="i-mdi-trash-can"></span></button> <section class="form-control flex-1 gap-2 md:flex-row md:items-end">${validate_component(TagSelector, "TagSelector").$$render(
      $$result,
      {
        allTags,
        onChange: () => {
          query.delete("tags");
          filteredTags.forEach((t) => query.append("tags", t.name));
          goto(`?${query.toString()}`);
        },
        selectedTags: filteredTags
      },
      {
        selectedTags: ($$value) => {
          filteredTags = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}</section></div> <dialog class="modal modal-bottom sm:modal-middle"${add_attribute("this", removeModal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(admin_links_remove_title())}</h3> <p class="py-4">${escape(admin_links_remove_confirmation({ amount: checkboxes.filter((c) => c).length }))}</p> <p class="text-xs text-base-content/60">${escape(data.domains.filter((_, i) => checkboxes.at(i)).map(({ shortCode }) => shortCode).join(", "))}</p> <div class="modal-action"><button type="submit" class="btn btn-error">${escape(admin_links_remove_submit())}</button></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-1t7jvlb"><button class="cursor-auto"></button></form></dialog> <div class="overflow-x-auto"><table class="table my-4"><thead><tr class="bg-base-200"><th><input type="checkbox" class="checkbox"${add_attribute("this", toggleAllCheckBox, 0)}></th> ${each(tableHeaders, (th) => {
      return `${th.order?.field ? `<th class="cursor-pointer">${escape(th.title)} ${query.get("orderBy") === th.order.field || !query.has("orderBy") && th.order.field === "dateCreated" ? `${query.get("dir") === "ASC" ? `<span class="i-mdi-triangle-down"></span>` : `<span class="i-mdi-triangle"></span>`}` : ``} </th>` : `<th class="cursor-text">${escape(th.title)} </th>`}`;
    })} <th></th></tr></thead> <tbody>${each(data.domains, (d, i) => {
      let date = new Date(d.dateCreated);
      return ` <tr><td><input type="checkbox" class="checkbox" name="deleting"${add_attribute("value", d.shortCode, 0)}${add_attribute("checked", checkboxes[i], 1)}></td> <td class="font-medium">${escape(d.shortCode)}</td> <td><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(d.longUrl, void 0), 0)}>${escape(d.longUrl)} </a></td> <td>${escape(d.tags.join(", "))}</td> <td>${escape(date.getFullYear())}-${escape(String(date.getMonth()).padStart(2, "0"))}-${escape(String(date.getDate()).padStart(2, "0"))}</td> <td><div class="tooltip"${add_attribute("data-tip", `nonBots: ${d.visitsSummary?.nonBots}, bots: ${d.visitsSummary?.bots}`, 0)}>${escape(d.visitsSummary?.total)} </div></td> <td><button type="button" class="btn btn-square btn-sm" data-svelte-h="svelte-1fqzaa9"><span class="i-mdi-pencil"></span> </button></td> </tr>`;
    })}</tbody></table></div></form> <dialog class="modal modal-top sm:modal-middle"${add_attribute("this", editModal, 0)}><div class="modal-box !overflow-y-visible"><form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} method="post"${add_attribute("id", $updateLinksFormId, 0)}><h3 class="text-lg font-bold">${escape(admin_links_edit_title())} &#39;${escape($updateLinksForm.slug)}&#39;</h3> <input type="hidden" name="slug"${add_attribute("value", $updateLinksForm.slug, 0)}> ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "url" }, { label: "URL" }, { required: true }, { error: $updateLinksErrors.url }, $updateLinksConstraints.url, { value: $updateLinksForm.url }),
      {
        value: ($$value) => {
          $updateLinksForm.url = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="form-control relative"><div class="label" data-svelte-h="svelte-qekzea"><span class="label-text">Tags*</span></div> ${validate_component(TagSelectCreate, "TagSelectCreate").$$render(
      $$result,
      { allTags, selectedTags: editModalTags },
      {
        selectedTags: ($$value) => {
          editModalTags = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${$updateLinksErrors.tags && $updateLinksErrors.tags._errors ? `<div class="label"><span class="label-text-alt text-error">${$updateLinksErrors.tags._errors.length > 1 ? `${escape($updateLinksErrors.tags[0])}` : `${escape($updateLinksErrors.tags?._errors?.join(", "))}`}</span></div>` : ``}</div> ${each(editModalTags, (tag) => {
      return `<input type="hidden" name="tags"${add_attribute("value", tag.name, 0)}>`;
    })} <div class="modal-action"><button type="button" class="btn">${escape(admin_links_edit_cancel())}</button> <button type="submit" class="btn btn-primary">${escape(admin_links_edit_submit())}</button></div></form></div></dialog>  ${validate_component(Pagination, "Pagination").$$render($$result, { count: data.pagination.pagesCount }, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_createLinksFormId();
  $$unsubscribe_createLinksConstraints();
  $$unsubscribe_createLinksForm();
  $$unsubscribe_createLinksErrors();
  $$unsubscribe_updateLinksForm();
  $$unsubscribe_updateLinksFormId();
  $$unsubscribe_updateLinksErrors();
  $$unsubscribe_updateLinksConstraints();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8BeD43SF.js.map
