import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { bT as openElections, fm as elections_description, fn as elections_close, fo as elections_apply } from './messages-D8OfyZiq.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import 'marked';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: openElections() }, {}, {})}  <section class="mb-5 space-y-5"><p>${escape(elections_description())}</p></section> <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">${each(data.openElections, (election) => {
    return `<div class="card bg-base-200 shadow-xl"><div class="card-body"><img class="w-5/12 self-center text-center"${add_attribute("src", election.committee.darkImageUrl, 0)} alt="Committee logo"> <h2 class="card-title self-center text-2xl font-bold">${escape(election.committee.name)}</h2> ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: election.markdown }, {}, {})} <p class="text-center font-bold">${escape(elections_close())} ${escape(election.expiresAt.toLocaleDateString(languageTag()))}</p> <div class="card-actions self-center"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(election.link, void 0), 0)} target="_blank" rel="noreferrer" class="btn btn-primary w-full px-9">${escape(elections_apply())}</a> </div></div> </div>`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-_2Ey2CX5.js.map
