import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<form method="POST" class="mx-auto mt-8 max-w-md"><label class="input input-bordered mb-2 flex w-full items-center gap-2" data-svelte-h="svelte-1gzfk06"><span class="i-mdi-magnify size-6"></span>  <input autofocus type="text" name="input" placeholder="Sök efter medlemmar" class="bg-transparent"></label> <button class="btn mb-2 w-full" data-svelte-h="svelte-1u9ihq2">Sök</button> ${form !== null ? `${form.users.length > 0 ? `<ul class="mb-2 flex flex-col gap-1">${each(form.users, (user) => {
    return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute("/members/" + user.studentId, void 0), 0)} class="btn flex justify-between"><div>${escape(user.firstName)} ${escape(user.lastName)}</div> <div class="text-primary">(${escape(user.studentId)})</div></a> </li>`;
  })}</ul>` : `<div class="text-center" data-svelte-h="svelte-x83dhf">Inga resultat</div>`}` : ``}</form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BXVFbVM-.js.map
