import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { C as CommitteePage } from './CommitteePage-B1lFFk5m.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { M as MembersList } from './MembersList-zLUyjk5A.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './ScrollIndicatedBox-BJHMkHhR.js';
import './MemberAvatar-DsbxH0w2.js';
import 'tailwind-merge';
import './member-DajX-teH.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './FormInput-Dxuw95TR.js';
import './Input-DbabE1Vy.js';
import './Labeled-BBKTPJST.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './FormSubmitButton-CTUAD0FR.js';
import './LoadingButton-DNerNunK.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './committee.server-BhbLpZqL.js';
import './sort-DAPXH13p.js';
import './mutations.server-BasbvG3q.js';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import 'isomorphic-dompurify';
import './LangTabs-BYaI1O9N.js';
import './CommitteeIcon-vSk-xvNx.js';
import './client3-CIDcnctW.js';
import './PageHeader-BOcEcHZe.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './Pagination-DD-n8kEM.js';
import 'marked';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';

const PhadderGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group } = $$props;
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  return `<li class="flex flex-col items-center gap-2">${group.imageUrl ? `<img${add_attribute("src", group.imageUrl, 0)} alt="Group logo" class="max-h-24 max-w-full rounded-box object-contain object-top">` : ``} <div><h1 class="text-center font-medium">${escape(group.name)}</h1> ${group.description ? `${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      class: "text-center",
      body: group.description
    },
    {},
    {}
  )}` : ``} <div class="mt-2 flex justify-center gap-2">${validate_component(MembersList, "MembersList").$$render(
    $$result,
    {
      class: "btn btn-outline btn-sm",
      members: group.nollor
    },
    {},
    {
      default: () => {
        return `Nollor`;
      }
    }
  )} ${validate_component(MembersList, "MembersList").$$render(
    $$result,
    {
      class: "btn btn-outline btn-sm",
      members: group.phaddrar.map((p) => p.member)
    },
    {},
    {
      default: () => {
        return `Phaddrar`;
      }
    }
  )}</div></div></li>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(CommitteePage, "CommitteePage").$$render($$result, { data }, {}, {
    default: () => {
      return `<section class="-mx-4 mt-4 rounded-box bg-base-200 p-4"><div class="flex justify-between"><h3 class="text-xl font-medium" data-svelte-h="svelte-3kgq41">Phaddergrupper</h3> ${isAuthorized(apiNames.NOLLNING.MANAGE_PHADDER_GROUPS, data.user) ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/nollu/groups#${data.year}`, void 0), 0)} class="btn btn-secondary btn-sm"><span class="i-mdi-edit"></span></a>` : ``}</div> <ul class="grid gap-x-2 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">${each(data.phadderGroups, (group) => {
        return `${validate_component(PhadderGroup, "PhadderGroup").$$render($$result, { group }, {}, {})}`;
      })}</ul></section>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BxdXfOCN.js.map
