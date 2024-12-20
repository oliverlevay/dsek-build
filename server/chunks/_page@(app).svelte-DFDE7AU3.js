import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { F as FormCheckbox } from './FormCheckbox-1G3eAIE7.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { gN as news_createArticle } from './messages-D8OfyZiq.js';
import { A as ArticleEditor } from './ArticleEditor-BTf53KlV.js';
import './lifecycle-DkuQBIPN.js';
import './Labeled-BBKTPJST.js';
import 'tailwind-merge';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './Input-DbabE1Vy.js';
import './pageTitle-Dw7hiKEr.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './runtime-BxW51cRH.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import './TagChip-uoZb8u8g.js';
import './Article-XrPJHQqE.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './client3-CIDcnctW.js';
import './FormFileInput-BONk2osz.js';
import './LangTabs-BYaI1O9N.js';
import './FormSubmitButton-CTUAD0FR.js';
import './LoadingButton-DNerNunK.js';
import './TagSelector-Br3xhJpq.js';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form;
  let superformCorrectType;
  let { data } = $$props;
  const superform = superForm(data.form, { dataType: "json" });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  form = data.form;
  superformCorrectType = superform;
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: news_createArticle() }, {}, {})} ${validate_component(ArticleEditor, "ArticleEditor").$$render(
    $$result,
    {
      superform: superformCorrectType,
      data: form,
      allTags: data.allTags,
      authorOptions: data.authorOptions
    },
    {},
    {
      "form-end": () => {
        return `<div slot="form-end">${validate_component(FormInput, "FormInput").$$render(
          $$result,
          {
            superform,
            field: "notificationText",
            label: "Notistext",
            explanation: "Texten som visas i notisen, om tom kommer det vara början av nyhetstexten"
          },
          {},
          {}
        )} ${validate_component(FormCheckbox, "FormCheckbox").$$render(
          $$result,
          {
            superform,
            field: "sendNotification",
            label: "Skicka notis?"
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-DFDE7AU3.js.map
