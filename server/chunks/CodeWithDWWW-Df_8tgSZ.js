import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { markdownToTxt } from 'markdown-to-txt';
import { bJ as news, bK as events, dU as home_feedback, dV as home_contactWellbeing, dW as home_cafeOpenHours, dX as home_meetingNext, dY as home_meetingPrev, dZ as home_codeWithDWWW, d_ as home_DWWWMessage, d$ as home_reportBug } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import dayjs from 'dayjs';

const Articles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { news: news$1 } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.news === void 0 && $$bindings.news && news$1 !== void 0) $$bindings.news(news$1);
  return `<div class="rounded-t-xl border-t-4 border-t-secondary bg-base-300 p-4 text-2xl font-bold"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news`, void 0), 0)} class="hover:underline">${escape(news())}</a></div> <div class="grid grid-cols-1 flex-row divide-base-100 rounded-b-xl sm:grid-cols-2 sm:divide-x-2 md:grid-cols-3 sm:[&>*:first-child]:rounded-bl-xl [&>*:last-child]:rounded-br-xl max-sm:[&>*:nth-child(2)]:rounded-b-xl sm:max-md:[&>*:nth-child(2)]:rounded-br-xl max-md:[&>*:nth-child(3)]:hidden">${each(news$1, (article) => {
    return `<div class="pop-out mt-0.5 bg-base-200"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news/${article.slug}`, void 0), 0)} class="flex h-full overflow-hidden p-4"><article><h2 class="mb-2 text-ellipsis text-xl font-bold text-secondary">${escape(article.header)}</h2> <p class="line-clamp-3 flex-none text-ellipsis leading-normal">${escape(markdownToTxt(article.body, { pedantic: true }))}</p> </article></a> </div>`;
  })}</div>`;
});
const Events = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events: events$1 } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.events === void 0 && $$bindings.events && events$1 !== void 0) $$bindings.events(events$1);
  return `<div class="rounded-t-xl border-t-4 border-t-primary bg-base-300 p-4 text-2xl font-bold"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events`, void 0), 0)} class="hover:underline">${escape(events())}</a></div> <div class="grid flex-row divide-base-100 sm:grid-cols-2 sm:divide-x-2 md:grid-cols-3 sm:[&>*:first-child]:rounded-bl-xl [&>*:last-child]:rounded-br-xl max-sm:[&>*:nth-child(2)]:rounded-b-xl sm:max-md:[&>*:nth-child(2)]:rounded-br-xl max-md:[&>*:nth-child(3)]:hidden">${each(events$1, (event) => {
    return `<div class="pop-out mt-0.5 bg-base-200"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(eventLink(event), void 0), 0)} class="flex h-full flex-col justify-start gap-x-4 p-4"><div class="flex flex-row"><div class="place-items-center rounded-l-lg bg-base-300 px-4 py-2 text-center text-xl font-bold capitalize text-primary">${escape(event.startDatetime.toLocaleString(languageTag(), { weekday: "long" }))}</div> <div class="flex flex-1 items-center justify-center rounded-r-lg bg-base-300/50 text-2xl font-semibold text-primary">${escape(event.startDatetime.toLocaleDateString("sv-SE", { day: "2-digit" }) + "/" + event.startDatetime.toLocaleDateString("sv-SE", { month: "2-digit" }))} </div></div> <div class="p-2"><h2 class="line-clamp-1 text-xl font-bold leading-snug text-primary">${escape(event.title)}</h2> <p class="line-clamp-3 text-ellipsis break-all leading-snug">${escape(markdownToTxt(event.description, { pedantic: true }))}</p> </div></a> </div>`;
  })}</div>`;
});
const WellbeingCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return `<a class="pop-out flex gap-6 rounded-2xl bg-base-300 p-6"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://bit.ly/kontaktatrivsel`, void 0), 0)} target="_blank" rel="noreferrer noopener"><span class="i-mdi-speak self-center text-2xl text-secondary lg:text-primary"></span> <article><p>${escape(home_feedback())}</p> <h2 class="text-xl font-bold text-secondary lg:text-primary">${escape(home_contactWellbeing())}</h2></article></a>`;
});
const CafeOpenTimes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cafeOpen } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.cafeOpen === void 0 && $$bindings.cafeOpen && cafeOpen !== void 0) $$bindings.cafeOpen(cafeOpen);
  return `<a class="pop-out flex gap-6 rounded-2xl bg-base-300 p-6"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/cafe`, void 0), 0)}><span class="i-mdi-coffee self-center text-2xl text-secondary lg:text-primary"></span> <article><p>${escape(home_cafeOpenHours())}</p> <h2 class="text-xl font-bold text-secondary lg:text-primary">${cafeOpen ? `${escape(cafeOpen.markdown)}` : `N/A`}</h2></article></a>`;
});
const Documents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { files } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0) $$bindings.files(files);
  return `<div class="flex justify-between gap-2 rounded-2xl border-t-4 bg-base-300 p-4 max-lg:border-t-primary max-md:flex-col md:flex-1 lg:border-t-secondary"><div><h2 class="text-md flex items-center font-light"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents`, void 0), 0)} class="text-xl font-bold hover:underline">${escape(files.next[0]?.id.split("/")[2] ?? "")}</a>
       - ${escape(home_meetingNext())}</h2> <ul class="menu p-0">${each(files.next.slice(0, 4), (file) => {
    return `<li class="inline-block max-w-full"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(file.thumbnailUrl, void 0), 0)}><span class="i-mdi-document size-6 max-lg:text-primary lg:text-secondary"></span> <span class="overflow-x-hidden text-ellipsis whitespace-nowrap">${escape(file.name)} </span></a> </li>`;
  })}</ul></div> <div><h2 class="text-md flex items-center place-self-end pt-4 font-light md:pt-0"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/documents`, void 0), 0)} class="text-xl font-bold hover:underline">${escape(files.last[0]?.id.split("/")[2] ?? "")}</a>
       - ${escape(home_meetingPrev())}</h2> <ul class="menu p-0">${each(files.last.slice(0, 4), (file) => {
    return `<li class="inline-block max-w-full"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(file.thumbnailUrl, void 0), 0)} class="text-ellipsis"><span class="i-mdi-document size-6 max-lg:text-primary lg:text-secondary"></span> <span class="overflow-x-hidden text-ellipsis whitespace-nowrap">${escape(file.name)} </span></a> </li>`;
  })}</ul></div></div>`;
});
const CodeWithDWWW = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { commitCount } = $$props;
  let { commitData } = $$props;
  const commitMessageHeader = commitData.message.split("\n")[0];
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.commitCount === void 0 && $$bindings.commitCount && commitCount !== void 0) $$bindings.commitCount(commitCount);
  if ($$props.commitData === void 0 && $$bindings.commitData && commitData !== void 0) $$bindings.commitData(commitData);
  return `<div class="rounded-t-xl border-t-4 bg-base-300 p-4 text-2xl font-bold max-lg:border-t-secondary lg:border-t-primary xl:border-t-secondary"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web`, void 0), 0)} class="hover:underline">${escape(home_codeWithDWWW())}</a></div> <div class="flex flex-col rounded-b-xl bg-base-200 p-4">${escape(home_DWWWMessage())} <div class="flex flex-wrap justify-between pt-4"><a class="btn btn-ghost btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web`, void 0), 0)}><span class="i-mdi-github text-lg max-lg:text-secondary lg:text-primary xl:text-secondary"></span> Github</a> <a class="btn btn-ghost btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web/issues/new`, void 0), 0)}><span class="i-mdi-bug text-lg max-lg:text-secondary lg:text-primary xl:text-secondary"></span> ${escape(home_reportBug())}</a> <a class="btn btn-ghost btn-sm"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web/commits/main/`, void 0), 0)}><span class="i-mdi-history text-lg max-lg:text-secondary lg:text-primary xl:text-secondary"></span>Commits: ${escape(commitCount)}</a></div> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(commitData.url, void 0), 0)} class="m-2 flex flex-col rounded-xl bg-base-300 p-3 hover:bg-base-100 sm:flex-row sm:items-center"><div class="flex flex-row items-center"><img class="mr-2 max-w-8 rounded-2xl"${add_attribute("src", commitData.avatarUrl, 0)} alt="latest commiters avatar"> <span class="font-semibold">${escape(commitData.author)}</span></div> <span class="ml-2 line-clamp-2 text-sm">${escape(commitMessageHeader)}</span> <span class="ml-auto whitespace-nowrap pl-2 text-right text-sm font-light">${escape(dayjs(commitData.date).fromNow())}</span></a></div>`;
});

export { Articles as A, CafeOpenTimes as C, Documents as D, Events as E, WellbeingCTA as W, CodeWithDWWW as a };
//# sourceMappingURL=CodeWithDWWW-Df_8tgSZ.js.map
