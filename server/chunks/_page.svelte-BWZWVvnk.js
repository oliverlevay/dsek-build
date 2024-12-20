import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'marked';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: $page.params["slug"] }, {}, {})} <div class="flex flex-col items-center p-2 text-neutral-content">${data && isAuthorized(`markdowns:${data.slug}:update`, data.user) ? `<a type="button" class="btn my-4"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${data.slug}/edit`, void 0), 0)}>Edit</a>` : ``} ${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: data.markdown?.markdown }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BWZWVvnk.js.map
