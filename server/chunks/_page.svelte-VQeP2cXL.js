import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { C as CommitteeIcon } from './CommitteeIcon-vSk-xvNx.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { et as committees_committees, eu as committees_volunteers } from './messages-D8OfyZiq.js';
import './client3-CIDcnctW.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let committees;
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  committees = [...data.committees].sort((a, b) => a.name.localeCompare(b.name, "sv"));
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: committees_committees() }, {}, {})} <div class="grid grid-cols-1 items-stretch justify-items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">${each(committees, (committee) => {
    return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/${committee.shortName}`, void 0), 0)} class="group card bg-base-300 shadow-xl transition-all hover:bg-base-200/80"><figure class="mx-auto mt-4 h-32 w-32 transition-transform *:max-h-full group-hover:scale-90 md:mt-8 md:h-40 md:w-40">${validate_component(CommitteeIcon, "CommitteeIcon").$$render($$result, { committee }, {}, {})}</figure> <div class="card-body px-0 text-center"><h2 class="card-title mx-auto">${escape(committee.name)}</h2> <h6 class="-mt-2 px-2 text-sm text-base-content/40">${escape([
      ...new Set(committee.positions.flatMap((pos) => pos.mandates.map((mandate) => mandate.memberId)))
    ].length)} ${escape(committees_volunteers())}</h6> <p class="px-2">${escape(committee.description ?? "")}</p></div> </a>`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-VQeP2cXL.js.map
