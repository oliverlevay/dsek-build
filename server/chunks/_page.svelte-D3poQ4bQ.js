import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { f as getContext, k as compute_rest_props } from './lifecycle-DkuQBIPN.js';
import { S as ScrollIndicatedBox } from './ScrollIndicatedBox-BJHMkHhR.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { M as MemberSearch } from './MemberSearch-PVKkS14C.js';
import { eI as positions_searchForMember } from './messages-D8OfyZiq.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import './stores-ClpLLrvc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './exports-BGi7-Rnc.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import 'marked';
import './EntitySearch-D4ZWMg82.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './runtime-BxW51cRH.js';

const MemberSearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["member", "class", "endpoint", "year"]);
  let { member = void 0 } = $$props;
  let { class: clazz = void 0 } = $$props;
  let isSearching;
  let handleSearch;
  let { endpoint = void 0 } = $$props;
  let { year = void 0 } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.endpoint === void 0 && $$bindings.endpoint && endpoint !== void 0) $$bindings.endpoint(endpoint);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(MemberSearch, "MemberSearch").$$render(
      $$result,
      {
        endpoint,
        class: clazz,
        onSelect: (selectedMember) => {
          member = selectedMember;
        },
        year,
        handleSearch,
        isSearching
      },
      {
        handleSearch: ($$value) => {
          handleSearch = $$value;
          $$settled = false;
        },
        isSearching: ($$value) => {
          isSearching = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="relative flex h-full flex-col gap-2">${member ? `<div class="absolute left-4 top-1/2 flex -translate-y-1/2 justify-center">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member, class: "w-8" }, {}, {})}</div>` : ``} <input${spread(
            [
              { id: "autocomplete" },
              { autocomplete: "off" },
              { autocapitalize: "off" },
              { type: "text" },
              {
                class: "input input-bordered w-full " + escape(member ? "indent-10" : "", true)
              },
              {
                placeholder: escape_attribute_value(positions_searchForMember())
              },
              { tabindex: escape_attribute_value(0) },
              {
                value: escape_attribute_value(member ? getFullName(member) : "")
              },
              escape_object($$restProps)
            ],
            {}
          )}> <span class="${"loading loading-spinner loading-md absolute right-2 top-1/2 -translate-y-1/2 text-primary transition-opacity opacity-" + escape(isSearching ? "100" : "0", true)}"></span></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const AddPersonInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year = void 0 } = $$props;
  let { phadder = false } = $$props;
  let { groupId } = $$props;
  let member = void 0;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.phadder === void 0 && $$bindings.phadder && phadder !== void 0) $$bindings.phadder(phadder);
  if ($$props.groupId === void 0 && $$bindings.groupId && groupId !== void 0) $$bindings.groupId(groupId);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/${phadder ? "addPhadder" : "addNolla"}`, void 0), 0)} method="POST" class="mt-2 flex gap-2">${member ? `<input type="hidden" name="memberId"${add_attribute("value", member.id, 0)}>` : ``} ${validate_component(MemberSearchInput, "MemberSearchInput").$$render(
      $$result,
      {
        class: "flex-1",
        endpoint: phadder ? "/api/members/phadders" : void 0,
        year,
        member
      },
      {
        member: ($$value) => {
          member = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button type="submit" ${!member ? "disabled" : ""} class="btn btn-primary">+</button> <input type="hidden" name="groupId"${add_attribute("value", groupId, 0)}></form>`;
  } while (!$$settled);
  return $$rendered;
});
const DeleteGroupButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { groupId } = $$props;
  let isLoading = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.groupId === void 0 && $$bindings.groupId && groupId !== void 0) $$bindings.groupId(groupId);
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/delete`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", groupId, 0)}> ${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      type: "submit",
      class: "btn btn-square btn-error btn-sm",
      isLoading
    },
    {},
    {
      default: () => {
        return `<span class="i-mdi-trash"></span>`;
      }
    }
  )}</form>`;
});
const EditableGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group } = $$props;
  let nollaBox;
  let phadderBox;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  return `<div class="rounded-box bg-base-300 p-4">${`${group.imageUrl ? `<img${add_attribute("src", group.imageUrl, 0)} alt="Group logo" class="max-h-32 w-full max-w-32 rounded-box">` : ``} <div class="flex justify-between"><h5>${escape(group.name)}</h5> <div class="flex gap-2"><button type="button" class="btn btn-square btn-secondary btn-sm" data-svelte-h="svelte-1aj3yih"><span class="i-mdi-edit"></span></button> ${validate_component(DeleteGroupButton, "DeleteGroupButton").$$render($$result, { groupId: group.id }, {}, {})}</div></div> ${group.description ? `<p>${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: group.description }, {}, {})}</p>` : ``} <div class="mt-4"><h5 class="font-medium" data-svelte-h="svelte-1ha1zem">Nollor</h5> ${validate_component(ScrollIndicatedBox, "ScrollIndicatedBox").$$render($$result, { element: nollaBox }, {}, {
    default: () => {
      return `<div class="max-h-80 overflow-y-auto"${add_attribute("this", nollaBox, 0)}><ul class="menu menu-vertical overflow-visible p-0">${each(group.nollor, (member) => {
        return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}`, void 0), 0)}><div class="flex flex-row items-center gap-2">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})} <div><h3 class="font-medium">${escape(getFullName(member))} </h3></div> </div></a> </li>`;
      })}</ul></div>`;
    }
  })} ${validate_component(AddPersonInput, "AddPersonInput").$$render($$result, { groupId: group.id }, {}, {})}</div> <div class="mt-4"><h5 class="font-medium" data-svelte-h="svelte-1b0j5hg">Phaddrar</h5> ${validate_component(ScrollIndicatedBox, "ScrollIndicatedBox").$$render($$result, { element: phadderBox }, {}, {
    default: () => {
      return `<div class="max-h-80 overflow-y-auto"${add_attribute("this", phadderBox, 0)}><ul class="menu menu-vertical p-0">${each(group.phaddrar, (phadder) => {
        let member = phadder.member;
        return ` <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}`, void 0), 0)}><div class="flex flex-row items-center gap-2">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})} <div><h3 class="font-medium">${escape(getFullName(member))} </h3></div> </div></a> </li>`;
      })}</ul></div>`;
    }
  })} ${validate_component(AddPersonInput, "AddPersonInput").$$render(
    $$result,
    {
      groupId: group.id,
      phadder: true,
      year: group.year
    },
    {},
    {}
  )}</div>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let groupsByYear;
  let years;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  groupsByYear = data.groups.reduce(
    (acc, group) => {
      if (!acc[group.year]) {
        acc[group.year] = [];
      }
      acc[group.year].push(group);
      return acc;
    },
    {}
  );
  years = Object.keys(groupsByYear).map(Number).sort((a, b) => b - a);
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Phaddergrupper" }, {}, {})} <div class="space-y-4">${`<button class="btn mt-4 self-start" type="button" data-svelte-h="svelte-1qy84p6">Lägg till grupp</button>`} ${each(years, (year) => {
    let groups = groupsByYear[year] ?? [];
    return ` ${groups.length > 0 ? `<section class="rounded-box bg-base-200 p-4"${add_attribute("id", year.toString(), 0)}><h3 class="mb-4 text-xl font-medium">${escape(year)}</h3> <ul class="grid gap-2 md:grid-cols-2">${each(groups, (group) => {
      return `${validate_component(EditableGroup, "EditableGroup").$$render($$result, { group }, {}, {})}`;
    })}</ul> </section>` : ``}`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D3poQ4bQ.js.map
