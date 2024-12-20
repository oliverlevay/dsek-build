import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { P as Pagination } from './Pagination-DD-n8kEM.js';
import { S as SearchBar } from './SearchBar-CQTZM987.js';
import { T as TagSelector } from './TagSelector-Br3xhJpq.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { markdownToTxt } from 'markdown-to-txt';
import { bJ as news, gz as news_tags, gA as news_create } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import 'tailwind-merge';
import './TagChip-uoZb8u8g.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import './paths-CYDIOyak.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

const SmallArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
  return `<article class="row-span-2 grid grid-rows-subgrid gap-0 overflow-hidden rounded-xl bg-base-200"><div class="flex justify-between gap-4 bg-base-300 p-4"><div class="flex flex-wrap gap-2">${each(article.tags, (tag) => {
    return `<span class="badge text-xs text-neutral-600">${escape(tag.name)}</span>`;
  })}</div></div> <div class="flex flex-col items-stretch overflow-hidden p-8"><div class="flex-1"><button class="group text-start"><h1 class="text-2xl font-bold group-hover:underline">${escape(article.header)}</h1> <div class="prose mb-8 mt-2 line-clamp-3 prose-headings:text-sm">${escape(markdownToTxt(article.body, { pedantic: true }))}</div></button></div> ${validate_component(AuthorSignature, "AuthorSignature").$$render(
    $$result,
    {
      member: article.author.member,
      position: article.author.mandate?.position,
      customAuthor: article.author.customAuthor ?? void 0,
      type: article.author.type
    },
    {},
    {
      end: () => {
        return `<p class="my-1 self-end text-nowrap text-xs font-light text-neutral-600" slot="end">${dayjs(article.createdAt).diff(dayjs(), "week") < -1 ? `${escape(dayjs(article.createdAt).format("YYYY-MM-DD"))}` : `${escape(dayjs(article.createdAt).fromNow())}`}</p>`;
      }
    }
  )}</div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let filteredTags = data.allTags.filter((tag) => $page.url.searchParams.getAll("tags").includes(tag.name));
  let form;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
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
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: news() }, {}, {})} <div class="space-y-4"><section><form method="get" class="form-control flex-1 gap-2 md:flex-row md:items-end" id="filter-form"${add_attribute("this", form, 0)}>${validate_component(TagSelector, "TagSelector").$$render(
      $$result,
      {
        allTags: data.allTags,
        onChange: () => setTimeout(() => form.requestSubmit()),
        selectedTags: filteredTags
      },
      {
        selectedTags: ($$value) => {
          filteredTags = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(SearchBar, "SearchBar").$$render($$result, {}, {}, {})} ${each(filteredTags, (tag) => {
      return `<input type="hidden" name="tags"${add_attribute("value", tag.name, 0)}>`;
    })} ${isAuthorized(apiNames.TAGS.CREATE, data.user) || isAuthorized(apiNames.TAGS.UPDATE, data.user) ? `<a class="btn"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news/tags`, void 0), 0)}>${escape(news_tags())}</a>` : ``} ${isAuthorized(apiNames.NEWS.CREATE, data.user) ? `<a class="btn btn-primary"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news/create`, void 0), 0)}>+ ${escape(news_create())}</a>` : ``}</form></section> <section class="grid grid-cols-1 gap-8 md:grid-cols-2">${each(data.articles, (article) => {
      return `${validate_component(SmallArticleCard, "SmallArticleCard").$$render($$result, { article }, {}, {})}`;
    })}</section> ${validate_component(Pagination, "Pagination").$$render($$result, { count: data.pageCount }, {}, {})}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CJG3IEHx.js.map
