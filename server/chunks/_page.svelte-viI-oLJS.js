import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { a as getFullName } from './member-DajX-teH.js';
import { bR as theBoard, e0 as board_reachAt, e1 as board_description } from './messages-D8OfyZiq.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import 'tailwind-merge';
import './runtime-BxW51cRH.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: theBoard() }, {}, {})}  <section class="mb-5 space-y-5"><p>${escape(board_description())}</p> <p> <!-- HTML_TAG_START -->${board_reachAt()}<!-- HTML_TAG_END --></p></section> <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">${each(data.boardPositions, (boardMember) => {
    return `<div class="card bg-base-200 shadow-xl">${boardMember.studentId ? `<div class="group/photo card-body p-4 text-center"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${boardMember.studentId}`, void 0), 0)} class="group/link"><figure class="transition-transform group-hover/photo:scale-90">${validate_component(MemberAvatar, "MemberAvatar").$$render(
      $$result,
      {
        member: boardMember,
        class: "size-24 rounded-full"
      },
      {},
      {}
    )}</figure> <h2 class="card-title mt-8 block text-pretty text-primary group-hover/link:underline">${escape(getFullName(boardMember))} </h2></a> <div class="flex flex-col gap-1 px-2 text-base-content/90"><a class="hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/positions/${boardMember.position.id}`, void 0), 0)}>${escape(boardMember.position.name)}</a> <a class="flex items-center justify-center gap-1 text-sm text-base-content/90 hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:${boardMember.position.email}`, void 0), 0)}><span class="i-mdi-email"></span> ${escape(boardMember.position.email)} </a></div> </div>` : ` <div class="group/photo"><figure class="mt-4 transition-transform group-hover/photo:scale-90"> ${validate_component(MemberAvatar, "MemberAvatar").$$render(
      $$result,
      {
        member: boardMember,
        class: "size-24 rounded-full"
      },
      {},
      {}
    )}</figure> <div class="card-body px-0 text-center"><h2 class="card-title mx-auto text-primary" data-svelte-h="svelte-1h3xzku">V.A. Kant</h2> <div class="flex flex-col gap-1 px-2 text-base-content/90"><a class="hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/positions/${boardMember.position.id}`, void 0), 0)}>${escape(boardMember.position.name)}</a> <a class="flex items-center justify-center gap-1 text-sm text-base-content/70 hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`mailto:${boardMember.position.email}`, void 0), 0)}><span class="i-mdi-email"></span> ${escape(boardMember.position.email)}</a> </div></div> </div>`} </div>`;
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-viI-oLJS.js.map
