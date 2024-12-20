import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { g as getPdfApiUrl } from './servePdf-B39p50pk.js';

const FileLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileName;
  let { name } = $$props;
  let { url } = $$props;
  let { host = false } = $$props;
  let { full = false } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.host === void 0 && $$bindings.host && host !== void 0) $$bindings.host(host);
  if ($$props.full === void 0 && $$bindings.full && full !== void 0) $$bindings.full(full);
  fileName = name.includes(".") ? name.substring(0, name.lastIndexOf(".")).replace(/_+/g, " ") : name;
  return `<div class="${["flex", full ? "w-full" : ""].join(" ").trim()}"${add_attribute("data-tip", fileName, 0)}><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(host ? getPdfApiUrl(url) : url, void 0), 0)} class="${["block py-2 hover:underline", full ? "w-full" : ""].join(" ").trim()}" target="_blank"><span class="i-mdi-file-document-outline align-text-top text-xl text-primary"></span> ${escape(fileName)}</a></div>`;
});

export { FileLink as F };
//# sourceMappingURL=FileLink-DA9SS968.js.map
