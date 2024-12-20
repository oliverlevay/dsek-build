import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { bs as home, bt as back, bu as error_should_not_happen, bv as error_create_issue, bw as error_or, bx as error_contact } from './messages-D8OfyZiq.js';

const codeToMessage = {
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "Unused",
  307: "Temporary Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Required",
  413: "Request Entry Too Large",
  414: "Request-URI Too Long",
  415: "Unsupported Media Type",
  416: "Requested Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  429: "Too Many Requests",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported"
};
const ErrorPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  $$unsubscribe_page();
  return `<main class="gap mx-auto flex flex-1 flex-col items-center gap-2 pt-20"><h1 class="text-6xl font-bold">${escape($page.status)}</h1> <h3>${escape($page.error?.statusDescription ?? $page.status in codeToMessage ? codeToMessage[$page.status] : "")}</h3> ${$page.error?.message ? `<h2 class="mt-4 text-center text-xl">${escape($page.error.message)}</h2>` : ``} <div class="flex flex-row gap-5 pt-10"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/`, void 0), 0)} class="btn btn-primary text-lg">${escape(home())} <span class="i-mdi-house"></span></a> <button class="btn btn-secondary text-lg">${escape(back())} <span class="i-mdi-keyboard-backspace"></span></button></div> <div class="pt-16 text-center text-lg"><div class="pb-2">${escape(error_should_not_happen())}</div> <div class="flex flex-row items-center gap-3"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web/issues/new`, void 0), 0)} class="btn btn-ghost text-lg">${escape(error_create_issue())} <span class="i-mdi-bug"></span></a> <span class="text-xl font-extrabold">${escape(error_or())}</span> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:dwww@dsek.se`, void 0), 0)} class="btn btn-ghost text-lg">${escape(error_contact())} <span class="i-mdi-email"></span></a></div></div></main>`;
});

export { ErrorPage as E };
//# sourceMappingURL=ErrorPage-ChgmoK-3.js.map
