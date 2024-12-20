import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { S as ScrollIndicatedBox } from './ScrollIndicatedBox-BJHMkHhR.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { p as page } from './stores-ClpLLrvc.js';
import { ev as committees_name, ew as committees_description, ex as committees_committeeImage_light, ey as committees_committeeImage_dark, ez as committees_committeeImage_mono, eA as committees_committeeImage_symbol, eB as committees_save, eC as committees_stopEditing, eD as committees_edit, eu as committees_volunteers, eE as committees_differentMandates, eF as committees_boardMember } from './messages-D8OfyZiq.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { F as FormSubmitButton } from './FormSubmitButton-CTUAD0FR.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { n as zodClient } from './superValidate-C2lU2J3v.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { u as updateSchema } from './committee.server-BhbLpZqL.js';
import { L as LangTabs, F as FormMarkdown } from './LangTabs-BYaI1O9N.js';
import { C as CommitteeIcon } from './CommitteeIcon-vSk-xvNx.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';

const PositionCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { position } = $$props;
  let { mandates } = $$props;
  let mandatesBox;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.mandates === void 0 && $$bindings.mandates && mandates !== void 0) $$bindings.mandates(mandates);
  year = parseInt($page.url.searchParams.get("year") ?? "") || /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  $$unsubscribe_page();
  return `<article class="card bg-base-200 shadow-xl transition-all"><div class="card-body"><h2 class="card-title">${position.boardMember ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/board`, void 0), 0)} class="shrink-0"><div class="tooltip"${add_attribute("data-tip", committees_boardMember(), 0)} data-svelte-h="svelte-m5jquz"><span class="i-mdi-account-tie"></span></div></a>` : ``} <div class="grid min-w-0 grid-cols-[1fr_auto] items-center gap-1"><a class="link-hover link link-primary truncate"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/positions/${position.id}`, void 0), 0)}${add_attribute("title", position.name, 0)}>${escape(position.name)}</a> ${mandates.length > 1 ? `<span class="shrink-0">(${escape(mandates.length)} st)</span>` : ``}</div></h2> ${position.email ? `<div class="-mt-2 grid"><div class="min-w-0"><a class="link-hover link link-primary block truncate text-sm sm:text-base"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:${position.email}`, void 0), 0)}${add_attribute("title", position.email, 0)}>${escape(position.email)}</a></div></div>` : ``} <p class="flex-grow-0">${escape(position.description ?? "")}</p> ${validate_component(ScrollIndicatedBox, "ScrollIndicatedBox").$$render($$result, { element: mandatesBox }, {}, {
    default: () => {
      return `<div class="max-h-80 overflow-y-auto"${add_attribute("this", mandatesBox, 0)}><ul class="menu menu-vertical p-0">${each(mandates, (mandate) => {
        return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${mandate.member.studentId}`, void 0), 0)}><div class="grid w-full grid-cols-[auto_1fr] items-center gap-2">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member: mandate.member }, {}, {})} <div class="min-w-0"><h3 class="truncate font-medium"${add_attribute("title", getFullName(mandate.member), 0)}>${escape(getFullName(mandate.member))}</h3> <h4 class="text-xs">${mandate.startDate.getFullYear() !== year ? `<i>${escape(mandate.startDate.toLocaleDateString(["sv"]))}</i>` : `${escape(mandate.startDate.toLocaleDateString(["sv"]))}`}
                      ⇾
                      ${mandate.endDate.getFullYear() !== year ? `<i>${escape(mandate.endDate.toLocaleDateString(["sv"]))}</i>` : `${escape(mandate.endDate.toLocaleDateString(["sv"]))}`} </h4></div> </div></a> </li>`;
      })}</ul></div>`;
    }
  })}</div></article>`;
});
const PositionGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let everyOtherPosition;
  let everyOtherPosition2;
  let { positions } = $$props;
  if ($$props.positions === void 0 && $$bindings.positions && positions !== void 0) $$bindings.positions(positions);
  everyOtherPosition = positions.filter((_, i) => i % 2 === 0);
  everyOtherPosition2 = positions.filter((_, i) => i % 2 === 1);
  return `<div class="hidden grid-cols-2 gap-4 md:grid"><div class="flex flex-col items-stretch gap-4">${each(everyOtherPosition, (position) => {
    return `${validate_component(PositionCard, "PositionCard").$$render($$result, { position, mandates: position.mandates }, {}, {})}`;
  })}</div> <div class="flex flex-col items-stretch gap-4">${each(everyOtherPosition2, (position) => {
    return `${validate_component(PositionCard, "PositionCard").$$render($$result, { position, mandates: position.mandates }, {}, {})}`;
  })}</div></div> <div class="grid gap-4 md:hidden">${each(positions, (position) => {
    return `${validate_component(PositionCard, "PositionCard").$$render($$result, { position, mandates: position.mandates }, {}, {})}`;
  })}</div>`;
});
const EditCommitteeForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $form, $$unsubscribe_form;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form: formData } = $$props;
  let { open = false } = $$props;
  const superform = superForm(formData, {
    validators: zodClient(updateSchema),
    resetForm: false,
    id: "generic"
  });
  const { form, enhance } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.form === void 0 && $$bindings.form && formData !== void 0) $$bindings.form(formData);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$unsubscribe_page();
  $$unsubscribe_form();
  return `${open && isAuthorized(apiNames.COMMITTEE.UPDATE, $page.data.user) ? `<form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} method="POST" class="form-control" enctype="multipart/form-data">${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      label: committees_name(),
      field: "name"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      label: committees_description(),
      field: "description",
      rows: 3
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "lightImageUrl",
      label: committees_committeeImage_light(),
      explanation: "Large image which will be used on light backgrounds"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "darkImageUrl",
      label: committees_committeeImage_dark(),
      explanation: "Large image which will be used on dark backgrounds"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "monoImageUrl",
      label: committees_committeeImage_mono(),
      explanation: "Large image which will be used when a single color is preferred"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "symbolUrl",
      label: committees_committeeImage_symbol(),
      explanation: "Small image which will be used as a symbol"
    },
    {},
    {}
  )} ${$form.markdownSlug ? `<input type="hidden" name="markdownSlug"${add_attribute("value", $form.markdownSlug, 0)}> ${validate_component(LangTabs, "LangTabs").$$render($$result, {}, {}, {
    en: () => {
      return `${validate_component(FormMarkdown, "FormMarkdown").$$render(
        $$result,
        {
          superform,
          label: "Markdown",
          field: "markdownEn",
          rows: 3,
          slot: "en"
        },
        {},
        {}
      )}`;
    },
    sv: () => {
      return `${validate_component(FormMarkdown, "FormMarkdown").$$render(
        $$result,
        {
          superform,
          label: "Markdown",
          field: "markdown",
          rows: 3,
          slot: "sv"
        },
        {},
        {}
      )}`;
    }
  })}` : ``} ${validate_component(FormSubmitButton, "FormSubmitButton").$$render(
    $$result,
    {
      superform,
      class: "btn btn-secondary my-4"
    },
    {},
    {
      default: () => {
        return `${escape(committees_save())}`;
      }
    }
  )}</form>` : ``}`;
});
const CommitteeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { editing } = $$props;
  let { toggleEditing } = $$props;
  let { uniqueMemberCount } = $$props;
  let { numberOfMandates } = $$props;
  let { committee } = $$props;
  if ($$props.editing === void 0 && $$bindings.editing && editing !== void 0) $$bindings.editing(editing);
  if ($$props.toggleEditing === void 0 && $$bindings.toggleEditing && toggleEditing !== void 0) $$bindings.toggleEditing(toggleEditing);
  if ($$props.uniqueMemberCount === void 0 && $$bindings.uniqueMemberCount && uniqueMemberCount !== void 0) $$bindings.uniqueMemberCount(uniqueMemberCount);
  if ($$props.numberOfMandates === void 0 && $$bindings.numberOfMandates && numberOfMandates !== void 0) $$bindings.numberOfMandates(numberOfMandates);
  if ($$props.committee === void 0 && $$bindings.committee && committee !== void 0) $$bindings.committee(committee);
  $$unsubscribe_page();
  return `<header class="mb-2 flex items-center gap-4"><figure class="w-14">${validate_component(CommitteeIcon, "CommitteeIcon").$$render($$result, { committee }, {}, {})}</figure> <div class="flex-1"><div class="flex flex-wrap items-center justify-between">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: committee.name, class: "mb-0" }, {}, {})} ${isAuthorized(apiNames.COMMITTEE.UPDATE, $page.data.user) || isAuthorized(apiNames.POSITION.CREATE, $page.data.user) ? `<button class="btn btn-secondary btn-sm">${escape(editing ? committees_stopEditing() : committees_edit())}</button>` : ``}</div> <h2>${escape(uniqueMemberCount)} ${escape(committees_volunteers())}, ${escape(numberOfMandates)} ${escape(committees_differentMandates())}</h2></div></header>`;
});
const CommitteePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { isEditing = false } = $$props;
  const thisYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  return `${validate_component(CommitteeHeader, "CommitteeHeader").$$render(
    $$result,
    {
      committee: data.committee,
      uniqueMemberCount: data.uniqueMemberCount,
      numberOfMandates: data.numberOfMandates,
      editing: isEditing,
      toggleEditing: () => isEditing = !isEditing
    },
    {},
    {}
  )} ${validate_component(EditCommitteeForm, "EditCommitteeForm").$$render($$result, { form: data.form, open: isEditing }, {}, {})} <div class="">${slots.before ? slots.before({}) : ``} ${data.markdown?.markdown ? `${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: data.markdown.markdown }, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}</div> ${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: thisYear - 1982 + 1,
      getPageName: (i) => (thisYear - i).toString(),
      getPageNumber: (page2) => thisYear - parseInt(page2),
      fieldName: "year",
      showFirst: true,
      class: "my-4",
      keepScrollPosition: true
    },
    {},
    {}
  )} ${validate_component(PositionGrid, "PositionGrid").$$render($$result, { positions: data.positions }, {}, {})}`;
});

export { CommitteePage as C };
//# sourceMappingURL=CommitteePage-B1lFFk5m.js.map
