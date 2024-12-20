import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { S as SearchBar } from './SearchBar-CQTZM987.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { D as Disclaimer, S as SongElement } from './SongElement-CT4GX_po.js';
import { bV as songBook, ib as songbook_createNewSong, ic as songbook_hereYoullFind, id as songbook_showDeleted } from './messages-D8OfyZiq.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './index-BHX467Gw.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function isCatSelected(catId) {
    return data.categories.includes(catId);
  }
  let { data } = $$props;
  let form;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="flex flex-row">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: songBook() }, {}, {})} ${isAuthorized(apiNames.SONG.CREATE, data.user) ? `<div class="ml-auto"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/songbook/create`, void 0), 0)}><button class="btn">${escape(songbook_createNewSong())}</button></a></div>` : ``}</div> <p class="text-xl font-bold">${escape(songbook_hereYoullFind())}</p> ${validate_component(Disclaimer, "Disclaimer").$$render($$result, {}, {}, {})} <form method="GET" data-sveltekit-keepfocus${add_attribute("this", form, 0)}>${isAuthorized(apiNames.SONG.DELETE, data.user) ? `<div class="my-4 flex items-center justify-end gap-2"><input class="checkbox" type="checkbox" name="show-deleted" value="true" ${data.params.includes("show-deleted") ? "checked" : ""}> <label class="label" for="show-deleted">${escape(songbook_showDeleted())}</label></div>` : ``} <div class="my-4 flex flex-wrap justify-between">${each(Object.keys(data.categoryMap), (catId) => {
    return `<label class="${[
      "m-1 flex-grow cursor-pointer rounded-lg px-2 py-1 text-center ring-neutral-700 transition hover:scale-105 hover:bg-neutral-700 md:ring-1",
      isCatSelected(catId) ? "bg-neutral-600" : ""
    ].join(" ").trim()}">${escape(data.categoryMap[catId])} <input hidden type="checkbox" name="category"${add_attribute("value", catId, 0)} ${isCatSelected(catId) ? "checked" : ""}> </label>`;
  })}</div> ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}</form> ${each(data.songs, (song) => {
    return `<div class="rounded-lg hover:ring-2 hover:ring-primary"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/songbook/${song.slug}`, void 0), 0)}>${validate_component(SongElement, "SongElement").$$render($$result, { song }, {}, {})}</a> </div>`;
  })} ${validate_component(Pagination, "Pagination").$$render($$result, { count: data.pageCount }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-krCy0ZFD.js.map
