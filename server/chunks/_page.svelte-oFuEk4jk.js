import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { L as LangTabs, F as FormMarkdown } from './LangTabs-BYaI1O9N.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './pageTitle-Dw7hiKEr.js';
import './toast2-BAKD7V1C.js';
import 'uuid';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const superform = superForm(data.form);
  const { form, errors, enhance } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_form();
  $$unsubscribe_errors();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: $page.params["slug"] }, {}, {})} <div class="p-2 text-neutral-content">${data.isCreating ? `<div class="toast"><div class="alert alert-info"><span>You&#39;re creating a new page under ${escape($page.params["slug"])}.</span></div></div>` : ``} <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(data.isCreating ? "?/create" : "?/update", void 0), 0)}>${validate_component(LangTabs, "LangTabs").$$render($$result, {}, {}, {
    en: () => {
      return `${validate_component(FormMarkdown, "FormMarkdown").$$render(
        $$result,
        {
          superform,
          field: "markdownEn",
          slot: "en",
          rows: 10
        },
        {},
        {}
      )}`;
    },
    sv: () => {
      return `${validate_component(FormMarkdown, "FormMarkdown").$$render(
        $$result,
        {
          superform,
          field: "markdown",
          slot: "sv",
          rows: 10
        },
        {},
        {}
      )}`;
    }
  })} <input type="hidden" name="name"${add_attribute("value", $page.params["slug"], 0)}> <input type="hidden" name="markdown"${add_attribute("value", $form.markdown, 0)}> ${$errors.markdown ? `<p class="text-error">${escape($errors.markdown)}</p>` : ``} <button class="btn" type="submit" data-svelte-h="svelte-1d02o54">Submit</button></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-oFuEk4jk.js.map
