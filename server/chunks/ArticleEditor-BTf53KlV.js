import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { gI as news_preview, gJ as news_header, gK as news_description, gL as news_author, gM as news_invalidAuthor, gz as news_tags, ep as save, f$ as news_publish } from './messages-D8OfyZiq.js';
import { A as Article } from './Article-XrPJHQqE.js';
import { F as FormFileInput } from './FormFileInput-BONk2osz.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { L as LangTabs, F as FormMarkdown } from './LangTabs-BYaI1O9N.js';
import { F as FormSubmitButton } from './FormSubmitButton-CTUAD0FR.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { T as TagSelector } from './TagSelector-Br3xhJpq.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { s as superForm } from './superForms-CCN_8vE4.js';

const ArticleForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { authorOptions } = $$props;
  let { allTags } = $$props;
  let { superform } = $$props;
  let { articleImage = void 0 } = $$props;
  const { form, enhance, errors } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const sameAuthorOption = (a, b) => a.memberId === b.memberId && a.mandateId === b.mandateId && a.customId === b.customId && a.type === b.type;
  const onFileSelected = (event) => {
    let image = event.currentTarget.files?.[0];
    if (!image) return;
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      let result = e.target?.result ?? void 0;
      if (result instanceof ArrayBuffer) {
        articleImage = btoa(new Uint8Array(result).reduce((data, byte) => data + String.fromCharCode(byte), ""));
      } else {
        articleImage = result;
      }
    };
  };
  if ($$props.authorOptions === void 0 && $$bindings.authorOptions && authorOptions !== void 0) $$bindings.authorOptions(authorOptions);
  if ($$props.allTags === void 0 && $$bindings.allTags && allTags !== void 0) $$bindings.allTags(allTags);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.articleImage === void 0 && $$bindings.articleImage && articleImage !== void 0) $$bindings.articleImage(articleImage);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form method="POST" class="form-control mb-8 gap-2" enctype="multipart/form-data">${validate_component(LangTabs, "LangTabs").$$render($$result, {}, {}, {
      en: () => {
        return `${validate_component(FormInput, "FormInput").$$render(
          $$result,
          {
            superform,
            field: "headerEn",
            label: news_header()
          },
          {},
          {}
        )} ${validate_component(FormMarkdown, "FormMarkdown").$$render(
          $$result,
          {
            superform,
            field: "bodyEn",
            label: news_description()
          },
          {},
          {}
        )} `;
      },
      sv: () => {
        return `${validate_component(FormInput, "FormInput").$$render(
          $$result,
          {
            superform,
            field: "header",
            label: news_header()
          },
          {},
          {}
        )} ${validate_component(FormMarkdown, "FormMarkdown").$$render(
          $$result,
          {
            superform,
            field: "body",
            label: news_description()
          },
          {},
          {}
        )}`;
      }
    })} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: news_author(),
        error: $errors.author !== void 0 ? news_invalidAuthor() : ""
      },
      {},
      {
        default: () => {
          return `<select id="author" class="select select-bordered w-full max-w-xs" required>${each(authorOptions, (authorOption) => {
            return `<option${add_attribute(
              "value",
              sameAuthorOption(authorOption, $form.author) ? $form.author : authorOption,
              0
            )}>${authorOption.type === "Custom" && authorOption.customAuthor != null ? `${escape(authorOption.customAuthor.name)}` : `${escape(authorOption.member.firstName)} ${escape(authorOption.member.lastName)}${authorOption.mandate?.position.name ? `,
              ${escape(authorOption.mandate?.position.name)}` : ``}`} </option>`;
          })}</select>`;
        }
      }
    )} <div class="flex w-full flex-col items-stretch">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        for: "tags",
        label: news_tags(),
        error: $errors.tags?._errors?.join(", ")
      },
      {},
      {}
    )} ${validate_component(TagSelector, "TagSelector").$$render(
      $$result,
      {
        name: "tags",
        allTags,
        selectedTags: $form.tags
      },
      {
        selectedTags: ($$value) => {
          $form.tags = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(FormFileInput, "FormFileInput").$$render(
      $$result,
      {
        superform,
        field: "image",
        label: "Bild",
        onChange: onFileSelected,
        accept: "image/*"
      },
      {},
      {}
    )} ${slots["form-end"] ? slots["form-end"]({}) : ``} ${validate_component(FormSubmitButton, "FormSubmitButton").$$render($$result, { superform, class: "btn btn-primary mt-4" }, {}, {
      default: () => {
        return `${escape($form.slug ? save() : news_publish())}`;
      }
    })}</form>`;
  } while (!$$settled);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return $$rendered;
});
const ArticleEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  let { authorOptions } = $$props;
  let { allTags } = $$props;
  let { superform = superForm(data, { dataType: "json" }) } = $$props;
  let articleImage = void 0;
  const { form } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.authorOptions === void 0 && $$bindings.authorOptions && authorOptions !== void 0) $$bindings.authorOptions(authorOptions);
  if ($$props.allTags === void 0 && $$bindings.allTags && allTags !== void 0) $$bindings.allTags(allTags);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<main class="container mx-auto flex flex-col gap-8 px-4 pt-8 lg:flex-row [&>*]:flex-1"><section>${validate_component(ArticleForm, "ArticleForm").$$render(
      $$result,
      {
        superform,
        allTags,
        authorOptions,
        articleImage
      },
      {
        articleImage: ($$value) => {
          articleImage = $$value;
          $$settled = false;
        }
      },
      {
        "form-end": () => {
          return `${slots["form-end"] ? slots["form-end"]({ slot: "form-end" }) : ``}`;
        }
      }
    )}</section> <section class="-mt-4"><span class="italic">${escape(news_preview())}</span> ${validate_component(Article, "Article").$$render(
      $$result,
      {
        article: {
          id: "",
          slug: "",
          header: $form.header,
          headerEn: $form.headerEn,
          body: $form.body,
          bodyEn: $form.bodyEn,
          authorId: $form.author.id,
          publishedAt: /* @__PURE__ */ new Date(),
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          removedAt: null,
          status: "draft",
          imageUrl: articleImage ?? $form.imageUrl ?? null
        }
      },
      {},
      {
        tags: () => {
          return `<div slot="tags" class="flex flex-row flex-wrap gap-2">${each($form.tags, (selectedTag) => {
            let tag = allTags.find((t) => t.id === selectedTag.id);
            return ` ${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}`;
          })}</div>`;
        },
        author: () => {
          return `${validate_component(AuthorSignature, "AuthorSignature").$$render(
            $$result,
            {
              links: false,
              slot: "author",
              member: $form.author.member,
              position: $form.author.mandate?.position,
              customAuthor: $form.author.customAuthor,
              type: $form.author.type
            },
            {},
            {}
          )}`;
        }
      }
    )}</section></main>`;
  } while (!$$settled);
  $$unsubscribe_form();
  return $$rendered;
});

export { ArticleEditor as A };
//# sourceMappingURL=ArticleEditor-BTf53KlV.js.map
