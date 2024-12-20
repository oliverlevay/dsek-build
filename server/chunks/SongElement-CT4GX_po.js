import { c as create_ssr_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { ie as songbook_disclaimer, ig as songbook_deleted, ih as songbook_deletedExplanation, bp as songbook_missingCategory, ii as songbook_melody } from './messages-D8OfyZiq.js';
import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { twMerge } from 'tailwind-merge';

const Disclaimer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="mt-4 text-sm italic">${escape(songbook_disclaimer())}</p>`;
});
const SongElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { song } = $$props;
  let { class: clazz = "" } = $$props;
  if ($$props.song === void 0 && $$bindings.song && song !== void 0) $$bindings.song(song);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  $$unsubscribe_page();
  return `<article${add_attribute("class", twMerge("my-4 rounded-lg p-6 shadow-2xl ring-neutral-700 md:ring-1", clazz), 0)}>${isAuthorized(apiNames.SONG.DELETE, $page.data.user) && song.deletedAt != null ? `<p class="text-xl font-bold text-red-500">${escape(songbook_deleted())}</p> <p class="text-sm text-red-300">${escape(songbook_deletedExplanation())}</p>` : ``} <div class="flex justify-between"><h2 class="my-3 text-2xl font-bold"> <!-- HTML_TAG_START -->${song.title}<!-- HTML_TAG_END --></h2> <p class="text-right text-xs text-gray-500">${escape(song.createdAt?.toLocaleDateString([languageTag()]) ?? "")} <br> ${escape(song.createdAt?.toLocaleTimeString([languageTag()], { hour: "2-digit", minute: "2-digit" }) ?? "")}</p></div> <h3 class="mb-4 text-lg italic text-gray-500">${song.category ? `${escape(song.category)}` : `<i>${escape(songbook_missingCategory())}</i>`}</h3> <p class="mb-4 italic">${escape(songbook_melody())}: ${escape(song.melody)}</p> <p class="whitespace-pre-line"> <!-- HTML_TAG_START -->${song.lyrics}<!-- HTML_TAG_END --></p></article>`;
});

export { Disclaimer as D, SongElement as S };
//# sourceMappingURL=SongElement-CT4GX_po.js.map
