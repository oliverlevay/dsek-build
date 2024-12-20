import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { jH as nolla_wellbeing_header, jI as nolla_wellbeing_description, jJ as nolla_wellbeing_trivsel_description, jK as nolla_wellbeing_student_health, jL as nolla_wellbeing_contact_trivsel, jM as nolla_wellbeing_contact_student_health } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const wellbeingImage = "/_app/immutable/assets/trivsel.C0DvATA5.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return ` <header><h1 class="nolla-page-title"><!-- HTML_TAG_START -->${nolla_wellbeing_header()}<!-- HTML_TAG_END --></h1></header> <article class="md:grid md:grid-cols-2"><p class="nolla-prose col-start-1 row-start-1 mb-16"><!-- HTML_TAG_START -->${nolla_wellbeing_description()}<!-- HTML_TAG_END --></p> <img${add_attribute("src", wellbeingImage, 0)} alt="Trivselrådet" class="row-span-2 md:col-start-2"> <p class="nolla-prose col-start-1"><!-- HTML_TAG_START -->${nolla_wellbeing_trivsel_description()}<!-- HTML_TAG_END --></p> <a class="neo-brutal-btn col-start-1 mb-16 w-min whitespace-nowrap"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://bit.ly/kontaktatrivsel`, void 0), 0)}>${escape(nolla_wellbeing_contact_trivsel())}</a> <p class="nolla-prose col-start-1"><!-- HTML_TAG_START -->${nolla_wellbeing_student_health()}<!-- HTML_TAG_END --></p> <a class="neo-brutal-btn col-start-1 w-min whitespace-nowrap"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://www.student.lth.se/stoed-och-service/maa-bra-under-dina-studier/`, void 0), 0)}>${escape(nolla_wellbeing_contact_student_health())}</a></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D3wzesyp.js.map
