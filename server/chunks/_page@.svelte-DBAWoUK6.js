import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { a as getFullName } from './member-DajX-teH.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import dayjs from 'dayjs';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { bJ as news } from './messages-D8OfyZiq.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import 'marked';
import './runtime-BxW51cRH.js';

const TVArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
  return `<article class="row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden rounded-xl bg-base-200"><div class="flex justify-between gap-4 bg-base-300 p-4"><div class="flex flex-wrap gap-2">${each(article.tags, (tag) => {
    return `<span class="badge text-xs text-neutral-600">${escape(tag.name)}</span>`;
  })}</div></div> <div class="overflow flex flex-col p-8"><div class="flex-1"><h1 class="text-2xl font-bold group-hover:underline">${escape(article.header)}</h1> ${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: article.body,
      class: "prose prose-xl mb-8 mt-2 line-clamp-5 min-w-full text-ellipsis prose-headings:text-sm"
    },
    {},
    {}
  )}</div> <div class="flex gap-4"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute("members/" + article.author.member.studentId, void 0), 0)}>${validate_component(MemberAvatar, "MemberAvatar").$$render(
    $$result,
    {
      class: "size-10 hover:opacity-60",
      member: article.author.member
    },
    {},
    {}
  )}</a> <div class="flex w-full items-center justify-between gap-4"><div><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute("members/" + article.author.member.studentId, void 0), 0)}><h2 class="text-sm font-semibold text-primary hover:underline">${escape(getFullName(article.author.member))}</h2></a> ${article.author.mandate ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute("positions/" + article.author.mandate.position.id, void 0), 0)}><p class="my-1 text-xs font-light hover:underline">${escape(article.author.mandate.position.name)}</p></a>` : ``}</div> <p class="my-1 self-end text-nowrap text-xs font-light text-neutral-600">${dayjs(article.createdAt).diff(dayjs(), "week") < -1 ? `${escape(dayjs(article.createdAt).format("YYYY-MM-DD"))}` : `${escape(dayjs(article.createdAt).fromNow())}`}</p></div></div></div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const data = $page.data;
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: news() }, {}, {})} <section class="flex flex-col gap-8 space-y-4 px-14">${each(data["articles"], (article) => {
    return `${validate_component(TVArticleCard, "TvArticleCard").$$render($$result, { article }, {}, {})}`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page@.svelte-DBAWoUK6.js.map
