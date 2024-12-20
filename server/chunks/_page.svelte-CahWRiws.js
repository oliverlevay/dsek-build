import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { bL as tickets } from './messages-D8OfyZiq.js';
import dayjs from 'dayjs';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tickets$1;
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  tickets$1 = data.tickets;
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: tickets() }, {}, {})} <article class="flex flex-col gap-4"><ul class="menu">${each(tickets$1, (ticket) => {
    return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/tickets/${ticket.id}/manage`, void 0), 0)}>${escape(ticket.title)}, ${escape(ticket.event.title)} (${escape(dayjs(ticket.event.startDatetime).format("DD-MM-YYYY"))})</a> </li>`;
  })}</ul></article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CahWRiws.js.map
