import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const version = "default";

const featureFlags = [];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let policies;
  let flags;
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
  user = data.user;
  policies = user.policies.toSorted();
  flags = /* @__PURE__ */ new Map();
  $$unsubscribe_page();
  return `<div class="flex flex-row gap-10"><div>${isAuthorized("core:admin", $page.data.user) ? `<section class="mb-4 space-y-2"><h1 class="text-lg font-semibold" data-svelte-h="svelte-3fnbi2">Actions</h1> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/keycloakSync`, void 0), 0)} method="POST" class="flex items-center gap-4"><button type="submit" class="btn" data-svelte-h="svelte-88ppl6">Sync with Keycloak</button> <p data-svelte-h="svelte-i6xq1n">This will push mandates and pull email addresses.</p></form> <form${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/meilisearchSync`, void 0), 0)} method="POST" class="flex items-center gap-4"><button type="submit" class="btn" data-svelte-h="svelte-mufdv1">Sync with Meilisearch</button> <p data-svelte-h="svelte-1lwv6iq">This will update Meilisearch&#39;s sync index.</p></form></section>` : ``} <section><h1 class="text-lg font-semibold" data-svelte-h="svelte-15wxd3c">Metadata</h1> <ul class="ml-4 list-disc"><li>Version:
          <pre class="inline">${escape(version)}</pre> <span class="badge badge-neutral tooltip tooltip-bottom aspect-square px-1" data-tip="This is guaranteed to match the version of the code that is running and is retrieved at build-time. It optionally suffixes the tag name with the number of additional commits on top of the tagged commit (i.e -2) and the abbreviated hash of the most recent commit (i.e -g<hash>)." data-svelte-h="svelte-7c4bpu">?</span></li> <li>Prisma log level:
          <pre class="inline">${escape(data.prismaLogLevel)}</pre></li> <li>Is nollning: ${escape(data.isNollning)}</li> <li>Is app: ${escape(data.isApp)}</li> <li>App info: ${escape(JSON.stringify(data.appInfo))}</li></ul></section> <section class="mt-4"><h1 class="text-lg font-semibold">User: ${escape(user.studentId ?? user.externalCode)}</h1> <ul class="ml-4 list-disc text-sm">${each(policies, (permission) => {
    return `<li>${escape(permission)}</li>`;
  })}</ul></section></div> <div><section><h1 class="text-lg font-semibold" data-svelte-h="svelte-79mkho">Feature flags</h1> ${each(featureFlags, (flag) => {
    return `<div class="flex gap-5">${escape(flag)} <input type="checkbox" class="toggle toggle-primary" ${flags.get(flag) ? "checked" : ""}> </div>`;
  })}</section></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DWRFWTnJ.js.map
