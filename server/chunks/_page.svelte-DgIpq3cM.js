import { f as getContext, b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';
import { C as CommentSection } from './CommentSection-BzSYxX4l.js';
import { gB as news_delete, gC as news_edit, gD as news_logInToLike, gE as news_threeOrMore, gF as news_two } from './messages-D8OfyZiq.js';
import { A as Article } from './Article-XrPJHQqE.js';
import { p as page } from './stores-ClpLLrvc.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { M as MembersList } from './MembersList-zLUyjk5A.js';
import { a as getFullName } from './member-DajX-teH.js';
import './exports-BGi7-Rnc.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './MemberImage-CkXEWMZT.js';
import './MemberSearch-PVKkS14C.js';
import './EntitySearch-D4ZWMg82.js';
import './MemberAvatar-DsbxH0w2.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './comments-DaxFEw57.js';
import './index-BHX467Gw.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import 'isomorphic-dompurify';
import './datetime-F2VqCxJb.js';
import './runtime-BxW51cRH.js';
import './client3-CIDcnctW.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const LikeButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let authorized;
  let isLiked;
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { likers } = $$props;
  let { articleId } = $$props;
  let { likeForm } = $$props;
  const { errors, constraints, enhance } = superForm(likeForm, {
    id: articleId,
    // needs to be unique since there could be multiple like buttons on a page
    invalidateAll: true
  });
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.likers === void 0 && $$bindings.likers && likers !== void 0) $$bindings.likers(likers);
  if ($$props.articleId === void 0 && $$bindings.articleId && articleId !== void 0) $$bindings.articleId(articleId);
  if ($$props.likeForm === void 0 && $$bindings.likeForm && likeForm !== void 0) $$bindings.likeForm(likeForm);
  authorized = isAuthorized(apiNames.NEWS.LIKE, $page.data.user);
  isLiked = likers.some((member) => member.studentId === $page.data.user?.studentId);
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/${isLiked ? "dislike" : "like"}`, void 0), 0)}><input${spread(
    [
      { type: "hidden" },
      { value: escape_attribute_value(articleId) },
      { name: "articleId" },
      escape_object($constraints)
    ],
    {}
  )}> ${$errors.articleId ? `<div class="text-error">${escape($errors.articleId)}</div>` : ``} <div class="${["m-4 hover:opacity-50 hover:transition-opacity", !authorized ? "tooltip" : ""].join(" ").trim()}"${add_attribute("data-tip", news_logInToLike(), 0)}><button ${!authorized ? "disabled" : ""} type="submit"><label class="swap"><input type="checkbox" ${!authorized ? "disabled" : ""} ${isLiked ? "checked" : ""}> <span class="swap-on i-mdi-thumb-up h-10 w-10" data-svelte-h="svelte-12wgvli"></span> <span class="swap-off i-mdi-thumb-up-outline h-10 w-10" data-svelte-h="svelte-d5ia9n"></span></label></button></div></form>`;
});
const LikersList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let likersText;
  let { likers } = $$props;
  const formatLikersList = (likers2) => {
    switch (likers2.length) {
      case 0:
        return "";
      case 1:
        return getFullName(likers2[0]);
      case 2:
        return news_two({
          name1: getFullName(likers2[0]),
          name2: getFullName(likers2[1])
        });
      default:
        return news_threeOrMore({
          name1: getFullName(likers2[0]),
          name2: getFullName(likers2[1]),
          others: likers2.length - 2
        });
    }
  };
  if ($$props.likers === void 0 && $$bindings.likers && likers !== void 0) $$bindings.likers(likers);
  likersText = formatLikersList(likers);
  return `${validate_component(MembersList, "MembersList").$$render(
    $$result,
    {
      members: likers,
      class: "link text-sm opacity-40 hover:opacity-60"
    },
    {},
    {
      default: () => {
        return `${escape(likersText)}`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let article;
  let author;
  let { data } = $$props;
  let isRemoving = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  article = data.article;
  author = article.author;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: article.header }, {}, {})} <article>${validate_component(Article, "Article").$$render($$result, { article }, {}, {
    "after-body": () => {
      return `<div slot="after-body" class="mt-4"><div class="flex flex-col items-start gap-2">${validate_component(LikersList, "LikersList").$$render($$result, { likers: article.likers }, {}, {})} ${validate_component(LikeButton, "LikeButton").$$render(
        $$result,
        {
          likers: article.likers,
          likeForm: data.likeForm,
          articleId: article.id
        },
        {},
        {}
      )}</div> <div class="mt-4 flex flex-col gap-2">${validate_component(CommentSection, "CommentSection").$$render(
        $$result,
        {
          type: "NEWS",
          comments: article.comments,
          taggedMembers: data.allTaggedMembers,
          commentForm: data.commentForm,
          removeCommentForm: data.removeCommentForm
        },
        {},
        {}
      )}</div></div>`;
    },
    tags: () => {
      return `<div slot="tags" class="flex flex-row flex-wrap gap-2">${each(article.tags, (tag) => {
        return `${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}`;
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions" class="flex flex-row">${data.canEdit ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/news/${article.slug}/edit`, void 0), 0)} class="btn btn-square btn-ghost btn-md"${add_attribute("title", news_edit(), 0)}><span class="i-mdi-edit text-xl"></span></a>` : ``} ${data.canDelete ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeArticle`, void 0), 0)}>${validate_component(LoadingButton, "LoadingButton").$$render(
        $$result,
        {
          isLoading: isRemoving,
          type: "submit",
          class: "btn btn-square btn-ghost btn-md",
          title: news_delete()
        },
        {},
        {
          default: () => {
            return `<span class="i-mdi-delete text-xl"></span>`;
          }
        }
      )}</form>` : ``}</div>`;
    },
    author: () => {
      return `${validate_component(AuthorSignature, "AuthorSignature").$$render(
        $$result,
        {
          slot: "author",
          member: author.member,
          position: author.mandate?.position,
          customAuthor: author.customAuthor,
          type: article.author.type
        },
        {},
        {}
      )}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DgIpq3cM.js.map
