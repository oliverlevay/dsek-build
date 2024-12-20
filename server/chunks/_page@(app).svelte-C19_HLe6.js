import { c as create_ssr_component, v as validate_component } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { A as ArticleEditor } from './ArticleEditor-BTf53KlV.js';
import { gH as news_editArticle } from './messages-D8OfyZiq.js';
import './lifecycle-DkuQBIPN.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import 'tailwind-merge';
import './TagChip-uoZb8u8g.js';
import './Article-XrPJHQqE.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './runtime-BxW51cRH.js';
import './client3-CIDcnctW.js';
import './FormFileInput-BONk2osz.js';
import './Labeled-BBKTPJST.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './superForm-DTXAq_ly.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './FormInput-Dxuw95TR.js';
import './Input-DbabE1Vy.js';
import './LangTabs-BYaI1O9N.js';
import './FormSubmitButton-CTUAD0FR.js';
import './LoadingButton-DNerNunK.js';
import './TagSelector-Br3xhJpq.js';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';

const Page_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: news_editArticle() }, {}, {})} ${validate_component(ArticleEditor, "ArticleEditor").$$render(
    $$result,
    {
      allTags: data.allTags,
      authorOptions: data.authorOptions,
      data: data.form
    },
    {},
    {}
  )}`;
});

export { Page_app as default };
//# sourceMappingURL=_page@(app).svelte-C19_HLe6.js.map
