import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, e as each, v as validate_component, b as escape, a as add_attribute, s as spread, d as escape_object, g as escape_attribute_value } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { M as MemberSearch } from './MemberSearch-PVKkS14C.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { t as tagRegex } from './comments-DaxFEw57.js';
import { r as relativeDate } from './datetime-F2VqCxJb.js';

const CommentInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let { author } = $$props;
  let { commentForm } = $$props;
  const { form, errors, constraints, enhance } = superForm(commentForm, { resetForm: true });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const onReply = (comment) => {
    const tagString = `[@${getFullName(comment.member)}](/members/${comment.member.studentId}) `;
    form.update((f) => {
      if (f.content.trim().startsWith("[@") || f.content.trim().length === 0) {
        f.content = tagString;
      } else {
        f.content = `${tagString}${f.content}`;
      }
      return f;
    });
  };
  let handleSearch;
  let indexOfTagStart = -1;
  let inputEl;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.author === void 0 && $$bindings.author && author !== void 0) $$bindings.author(author);
  if ($$props.commentForm === void 0 && $$bindings.commentForm && commentForm !== void 0) $$bindings.commentForm(commentForm);
  if ($$props.onReply === void 0 && $$bindings.onReply && onReply !== void 0) $$bindings.onReply(onReply);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex items-end gap-4">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member: author, class: "w-12 rounded-lg" }, {}, {})} <div class="flex flex-1 flex-col flex-nowrap"><label class="label w-auto self-start" for="comment" data-svelte-h="svelte-14efiw1"><span class="label-text">Kommentera</span></label> <form class="join join-horizontal w-full" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/comment`, void 0), 0)}>${validate_component(MemberSearch, "MemberSearch").$$render(
      $$result,
      {
        class: "dropdown-top flex-1",
        onSelect: (selectedMember) => {
          form.update((f) => {
            f.content = `${f.content.substring(0, indexOfTagStart)}[@${getFullName(selectedMember)}](/members/${selectedMember.studentId}) `;
            return f;
          });
          inputEl.focus();
        },
        handleSearch
      },
      {
        handleSearch: ($$value) => {
          handleSearch = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<input${spread(
            [
              { autocomplete: "off" },
              { id: "comment" },
              { name: "content" },
              { type: "text" },
              {
                class: "input join-item input-bordered w-full"
              },
              { placeholder: "Kommentera något kul..." },
              escape_object($constraints)
            ],
            {}
          )}${add_attribute("this", inputEl, 0)}${add_attribute("value", $form.content, 0)}>`;
        }
      }
    )} <button type="submit" class="btn btn-primary join-item" data-svelte-h="svelte-1r94vh1">Skicka</button></form></div></div> ${$errors.content ? `<p class="text-error">${escape($errors.content)}</p>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return $$rendered;
});
const CommentRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fixedContent;
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { type } = $$props;
  let { comment } = $$props;
  let { author } = $$props;
  let { taggedMembers } = $$props;
  let { onReply } = $$props;
  let { removeCommentForm } = $$props;
  const { errors, constraints, enhance } = superForm(removeCommentForm, { id: comment.id });
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const getReplacementValue = (studentId) => {
    const member = taggedMembers.find((member2) => member2.studentId === studentId);
    if (!member) return "@Unknown User";
    return `@${getFullName(member)}`;
  };
  function replaceTag(inputText) {
    return inputText.replace(tagRegex, (_, __, studentId) => {
      const replacement = getReplacementValue(studentId);
      return `[${replacement}](/members/${studentId})`;
    });
  }
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0) $$bindings.comment(comment);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0) $$bindings.author(author);
  if ($$props.taggedMembers === void 0 && $$bindings.taggedMembers && taggedMembers !== void 0) $$bindings.taggedMembers(taggedMembers);
  if ($$props.onReply === void 0 && $$bindings.onReply && onReply !== void 0) $$bindings.onReply(onReply);
  if ($$props.removeCommentForm === void 0 && $$bindings.removeCommentForm && removeCommentForm !== void 0) $$bindings.removeCommentForm(removeCommentForm);
  fixedContent = replaceTag(comment.content ?? "");
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return `<section aria-label="${"Comment by " + escape(getFullName(author), true)}" class="relative mb-4" id="comment-section"><div class="grid grid-cols-[auto_1fr_auto] items-start gap-2"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${author.studentId}`, void 0), 0)}>${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member: author, class: "w-8 rounded-lg" }, {}, {})}</a> <div class="min-w-0 text-xs"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${author.studentId}`, void 0), 0)} class="link link-primary block truncate no-underline"${add_attribute("title", getFullName(author), 0)}>${escape(getFullName(author))}</a> <span class="font-semibold opacity-50">${escape(relativeDate(comment.published))}</span></div> <div class="flex gap-1">${isAuthorized(apiNames[type].COMMENT, $page.data.user) ? `<button class="btn btn-square btn-ghost btn-md" data-svelte-h="svelte-16tztez"><span class="i-mdi-reply text-xl"></span></button>` : ``} ${isAuthorized(apiNames[type].COMMENT_DELETE, $page.data.user) || comment.memberId === $page.data.user?.memberId ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeComment`, void 0), 0)}><input${spread(
    [
      { type: "hidden" },
      { name: "commentId" },
      {
        value: escape_attribute_value(comment.id)
      },
      escape_object($constraints.commentId)
    ],
    {}
  )}> ${$errors.commentId ? `<p class="text-error">${escape($errors.commentId)}</p>` : ``} <button type="submit" class="btn btn-square btn-ghost btn-md" data-svelte-h="svelte-l7tz6c"><span class="i-mdi-delete text-xl"></span></button></form>` : ``}</div></div> ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: fixedContent }, {}, {})}</section>`;
});
const ALWAYS_SHOWN_COMMENTS = 3;
const CommentSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { comments } = $$props;
  let { type } = $$props;
  let { taggedMembers } = $$props;
  let { commentForm } = $$props;
  let { removeCommentForm } = $$props;
  let onReply;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0) $$bindings.comments(comments);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.taggedMembers === void 0 && $$bindings.taggedMembers && taggedMembers !== void 0) $$bindings.taggedMembers(taggedMembers);
  if ($$props.commentForm === void 0 && $$bindings.commentForm && commentForm !== void 0) $$bindings.commentForm(commentForm);
  if ($$props.removeCommentForm === void 0 && $$bindings.removeCommentForm && removeCommentForm !== void 0) $$bindings.removeCommentForm(removeCommentForm);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${comments.length > 0 ? `<div class="${[
      "collapse bg-base-200",
      comments.length <= ALWAYS_SHOWN_COMMENTS ? "collapse-open" : ""
    ].join(" ").trim()}"><input type="checkbox"> <div class="px-4">${each(comments.slice(comments.length - ALWAYS_SHOWN_COMMENTS), (comment) => {
      return `${validate_component(CommentRow, "CommentRow").$$render(
        $$result,
        {
          comment,
          author: comment.member,
          taggedMembers,
          onReply: () => onReply(comment),
          type,
          removeCommentForm
        },
        {},
        {}
      )}`;
    })}</div> <div class="collapse-title text-xl font-medium">Kommentarer ${escape(comments.length > ALWAYS_SHOWN_COMMENTS ? `(tryck för att visa ${comments.length - ALWAYS_SHOWN_COMMENTS} till)` : "")}</div> <div class="collapse-content !pb-0">${each(comments.slice(0, comments.length - ALWAYS_SHOWN_COMMENTS), (comment) => {
      return `${validate_component(CommentRow, "CommentRow").$$render(
        $$result,
        {
          comment,
          author: comment.member,
          taggedMembers,
          onReply: () => onReply(comment),
          type,
          removeCommentForm
        },
        {},
        {}
      )}`;
    })}</div></div>` : ``} ${isAuthorized(apiNames[type].COMMENT, $page.data.user) && $page.data.member ? `${validate_component(CommentInput, "CommentInput").$$render(
      $$result,
      {
        author: $page.data.member,
        commentForm,
        onReply
      },
      {
        onReply: ($$value) => {
          onReply = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { CommentSection as C };
//# sourceMappingURL=CommentSection-BzSYxX4l.js.map
