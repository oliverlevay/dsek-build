import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { cZ as admin_doors_door, c_ as admin_doors_edit } from './messages-D8OfyZiq.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './index-BHX467Gw.js';
import './runtime-BxW51cRH.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';

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
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: "Doors" }, {}, {})} <div class="overflow-x-auto"><table class="table"> <thead><tr class="bg-base-200"><th>${escape(admin_doors_door())}</th> <th></th></tr></thead> <tbody>${each(data.doors, (door) => {
    return `<tr><td class="font-medium">${escape(door.verboseName)}</td> ${isAuthorized(apiNames.DOOR.UPDATE, $page.data.user) ? `<td class="text-right"><a class="btn btn-xs px-8"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`doors/edit/${door.name}`, void 0), 0)}>${escape(admin_doors_edit())}</a> </td>` : ``} </tr>`;
  })}</tbody></table></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DvdWl5Es.js.map
