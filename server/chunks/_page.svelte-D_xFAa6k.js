import { c as create_ssr_component, v as validate_component, e as each, b as escape } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import dayjs from 'dayjs';
import { cc as messages } from './messages-D8OfyZiq.js';
import './lifecycle-DkuQBIPN.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import 'marked';
import './runtime-BxW51cRH.js';

const Message = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let author;
  let authorName;
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  author = message.author;
  authorName = author.type === "Custom" ? author.customAuthor?.name ?? "Staben" : `${author.member.firstName}${author.mandate?.position ? `, ${author.mandate?.position?.name}` : ""}`;
  return `<article><div class="mb-1 font-medium uppercase text-base-300"> ${escape(dayjs(new Date(message.publishedAt ?? message.createdAt)).fromNow())} </div> <div class="rounded-btn bg-base-200 p-4"><h2 class="text-base text-primary">${escape(message.header)}</h2> <h5 class="mb-2 font-medium text-neutral">${escape(authorName)}</h5> <p>${validate_component(MarkdownBody, "MarkdownBody").$$render(
    $$result,
    {
      body: message.body,
      class: "leading-tight"
    },
    {},
    {}
  )}</p></div></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let messages$1;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  messages$1 = data.messages;
  return `<div class="md:text-center">${validate_component(PageHeader, "PageHeader").$$render($$result, { title: messages() }, {}, {})}</div> <div class="flex flex-col gap-4 md:mx-auto md:max-w-xl">${each(messages$1, (message) => {
    return `${validate_component(Message, "Message").$$render($$result, { message }, {}, {})}`;
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D_xFAa6k.js.map
