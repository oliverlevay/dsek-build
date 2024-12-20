import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { S as SongElement, D as Disclaimer } from './SongElement-CT4GX_po.js';
import { ij as songbook_edit } from './messages-D8OfyZiq.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './runtime-BxW51cRH.js';
import 'tailwind-merge';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: data.song.title }, {}, {})} ${$$result.head += `<!-- HEAD_svelte-lsamal_START --><meta name="description"${add_attribute("content", data.song.lyrics, 0)}><!-- HEAD_svelte-lsamal_END -->`, ""} ${validate_component(SongElement, "SongElement").$$render(
    $$result,
    {
      song: data.song,
      class: "my-0 p-0 shadow-none ring-transparent"
    },
    {},
    {}
  )} ${validate_component(Disclaimer, "Disclaimer").$$render($$result, {}, {}, {})} ${isAuthorized(apiNames.SONG.UPDATE, data.user) ? `<div class="my-4 flex justify-between"><a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/songbook/${data.song.slug}/edit`, void 0), 0)}>${escape(songbook_edit())}</a></div>` : ``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iCR2kX0l.js.map
