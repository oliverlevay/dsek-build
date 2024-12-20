import { c as create_ssr_component, a as add_attribute, e as each, v as validate_component } from './ssr-BoMjCg5r.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';

const MembersList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  let { members } = $$props;
  let { class: clazz = void 0 } = $$props;
  if ($$props.members === void 0 && $$bindings.members && members !== void 0) $$bindings.members(members);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `${members.length > 0 ? `<button${add_attribute("class", clazz, 0)}>${slots.default ? slots.default({}) : ``}</button> <dialog id="members_modal" class="modal"${add_attribute("this", modal, 0)}><ul class="modal-box m-1 flex flex-col">${each(members, (liker) => {
    return `<li>${validate_component(AuthorSignature, "AuthorSignature").$$render($$result, { type: "member", member: liker }, {}, {})} </li>`;
  })}</ul> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-18ne2wg"><button>close</button></form></dialog>` : ``}`;
});

export { MembersList as M };
//# sourceMappingURL=MembersList-zLUyjk5A.js.map
