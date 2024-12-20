import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { ci as nollning_wikia_literature, k4 as nollning_wikia_literature_body } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const kfs = "/_app/immutable/assets/kfs.DtkPAyb6.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return `<div class="mx-auto max-w-screen-md"><section><h3 class="page-title text-secondary">${escape(nollning_wikia_literature())}</h3> <p class="nolla-prose">${escape(nollning_wikia_literature_body())}</p> <a class="btn-primary-dark btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://www.facebook.com/groups/1526600060932798/`, void 0), 0)} target="_blank">Facebook<span class="i-mdi-arrow-right"></span></a></section> <img class="w-full" alt="Map of campus"${add_attribute("src", kfs, 0)}></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DanXUS2K.js.map
