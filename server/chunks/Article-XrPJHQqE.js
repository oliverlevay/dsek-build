import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component } from './ssr-BoMjCg5r.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { gG as news_published } from './messages-D8OfyZiq.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';

const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0) $$bindings.article(article);
  return `${article.imageUrl ? `<figure><img class="mx-auto"${add_attribute("src", getFileUrl(article.imageUrl), 0)}${add_attribute("alt", article.imageUrl, 0)}></figure>` : ``} <h1 class="mb-8 text-2xl font-bold">${escape(article.header)}</h1> <section class="flex items-center justify-between border-y border-gray-600 py-4">${slots.author ? slots.author({}) : ``} ${slots.actions ? slots.actions({}) : ``}</section> <section class="flex flex-row items-center justify-between">${slots.tags ? slots.tags({}) : ``} <p class="my-4 text-sm text-gray-600">${escape(news_published({
    date: article.publishedAt?.toLocaleDateString(languageTag()) ?? "???"
  }))}</p></section> ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: article.body }, {}, {})} ${slots["after-body"] ? slots["after-body"]({}) : ``}`;
});

export { Article as A };
//# sourceMappingURL=Article-XrPJHQqE.js.map
