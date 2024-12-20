import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { eG as committees_cafe_openinghours, eH as committees_cafe_thecafe } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { C as CommitteePage } from './CommitteePage-B1lFFk5m.js';
import './exports-BGi7-Rnc.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import 'tailwind-merge';
import './ScrollIndicatedBox-BJHMkHhR.js';
import './MemberAvatar-DsbxH0w2.js';
import './member-DajX-teH.js';
import './stores-ClpLLrvc.js';
import './FormInput-Dxuw95TR.js';
import './Input-DbabE1Vy.js';
import './Labeled-BBKTPJST.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './FormSubmitButton-CTUAD0FR.js';
import './LoadingButton-DNerNunK.js';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
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

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let isEditing = false;
  const getWeekdayName = (weekday) => {
    let date = /* @__PURE__ */ new Date();
    while (date.getDay() - 1 !== weekday) {
      date.setDate(date.getDate() + 1);
    }
    return date.toLocaleString(languageTag(), { weekday: "long" });
  };
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
    $$rendered = `${validate_component(CommitteePage, "CommitteePage").$$render(
      $$result,
      { data, isEditing },
      {
        isEditing: ($$value) => {
          isEditing = $$value;
          $$settled = false;
        }
      },
      {
        before: () => {
          return `<div slot="before" class="card float-right ml-4 w-full border border-primary bg-base-100 p-6 shadow-xl lg:max-w-80"><h2 class="mb-2 p-2 font-bold lg:text-xl">${escape(committees_cafe_openinghours())} <span class="block text-sm font-light text-base-content text-opacity-40">${escape(committees_cafe_thecafe())}</span></h2> <ol>${each(data.openingHours, (openingHour, i) => {
            let weekday = getWeekdayName(Number.parseInt(openingHour.name.split(":").pop() ?? "")), isToday = (/* @__PURE__ */ new Date()).getDay() - 1 === i;
            return `  <li class="${[
              "flex gap-4 bg-opacity-10 p-2",
              (isToday ? "bg-primary" : "") + " " + (isToday ? "font-bold" : "")
            ].join(" ").trim()}"><p class="flex-1 self-center capitalize">${escape(weekday)}</p> ${isEditing ? `<form class="flex gap-4"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/updateHours`, void 0), 0)} method="POST"><input hidden type="text" name="markdownSlug"${add_attribute("value", openingHour.name, 0)}> <input type="text" class="input input-bordered font-normal" name="markdown"${add_attribute("value", openingHour.markdown, 0)} size="8"> <button class="btn btn-outline btn-primary btn-sm h-auto" type="submit" data-svelte-h="svelte-1biqf46"><span class="i-mdi-content-save text-base"></span></button> </form>` : `${escape(openingHour.markdown)}`} </li>`;
          })}</ol></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CIAQTe81.js.map
