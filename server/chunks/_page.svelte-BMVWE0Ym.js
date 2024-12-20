import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import { C as ClassBadge } from './ClassBadge-C_BgbZZ_.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { g8 as members_members, g9 as members_all, ga as members_noMembers, gb as members_oneMember } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let members;
  let programme;
  let year;
  let { data } = $$props;
  const thisYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  function getProgrammeYear(programme2) {
    let count = 0;
    switch (programme2) {
      case "D":
        count = thisYear - 1982 + 1;
        break;
      case "C":
        count = thisYear - 2001 + 1;
        break;
      case "VR/AR":
        count = thisYear - 2021 + 1;
        break;
      default:
        count = thisYear - 1982 + 1;
        break;
    }
    return count;
  }
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  members = data.members;
  programme = data.programme;
  year = data.year;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render(
    $$result,
    {
      title: programme.toUpperCase() + " " + year
    },
    {},
    {}
  )} <select class="${[
    "select my-2 border-current",
    (programme === "D" || programme === "VR/AR" ? "text-primary" : "") + " " + (programme === "C" ? "text-secondary" : "")
  ].join(" ").trim()}"${add_attribute("value", programme, 0)}><option value="all">${escape(members_all())}</option><option class="text-primary" value="D" data-svelte-h="svelte-1jwswfj">D</option><option class="text-secondary" value="C" data-svelte-h="svelte-1ri638l">C</option><option value="VR/AR" data-svelte-h="svelte-1ws39vy">VR/AR</option></select>  ${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      count: getProgrammeYear(programme),
      fieldName: "year",
      getPageName: (n) => (thisYear - n).toString(),
      getPageNumber: (n) => parseInt((thisYear - parseInt(n)).toString())
    },
    {},
    {}
  )} <div class="my-4 flex items-center gap-4">${programme !== "all" ? `${validate_component(ClassBadge, "ClassBadge").$$render(
    $$result,
    {
      member: {
        classProgramme: programme,
        classYear: year
      },
      size: "xl"
    },
    {},
    {}
  )}` : ``} <p>${members.length === 0 ? `${escape(members_noMembers())}` : `${members.length > 1 ? `${escape(members_members({ x: members.length }))}` : `${escape(members_oneMember())}`}`}</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">${each(members, (member) => {
    return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}`, void 0), 0)} class="btn btn-ghost w-full flex-nowrap justify-start normal-case">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})} <span class="flex flex-1 flex-wrap gap-2 overflow-hidden text-ellipsis text-left font-medium">${escape(getFullName(member))} ${programme === "all" ? `${validate_component(ClassBadge, "ClassBadge").$$render(
      $$result,
      {
        member: {
          classProgramme: member.classProgramme,
          classYear: member.classYear
        },
        size: "sm"
      },
      {},
      {}
    )}` : ``}</span> </a>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BMVWE0Ym.js.map
