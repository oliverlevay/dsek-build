import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { C as CommentSection } from './CommentSection-BzSYxX4l.js';
import { fH as events_deleteThisEvent, fI as events_deleteThisAndFutureEvents, fJ as events_deleteAllEvents, fK as events_edit, fL as events_thisIsRecurring, fM as events_delete } from './messages-D8OfyZiq.js';
import { E as Event } from './Event-Dbp3kXIa.js';
import { I as InterestedGoingButtons } from './InterestedGoingButtons-DaN4Eevd.js';
import { I as InterestedGoingList } from './InterestedGoingList-dBgyj_jS.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import 'tailwind-merge';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './MemberSearch-PVKkS14C.js';
import './EntitySearch-D4ZWMg82.js';
import './AuthorSignature-D9ZD3VCx.js';
import './MemberImage-CkXEWMZT.js';
import './member-DajX-teH.js';
import './MemberAvatar-DsbxH0w2.js';
import './MarkdownBody-CgSCkmio.js';
import 'marked';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import './index-BHX467Gw.js';
import './comments-DaxFEw57.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import 'isomorphic-dompurify';
import './datetime-F2VqCxJb.js';
import './runtime-BxW51cRH.js';
import './client3-CIDcnctW.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let event;
  let $form, $$unsubscribe_form;
  let { data } = $$props;
  const { enhance, form } = superForm(data.removeEventForm);
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  let modal;
  let submitString;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  event = data.event;
  submitString = event.recurringParentId != void 0 ? "button" : "submit";
  $$unsubscribe_form();
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: event.title }, {}, {})} ${validate_component(Event, "Event").$$render($$result, { event }, {}, {
    after: () => {
      return `<div slot="after">${validate_component(InterestedGoingList, "InterestedGoingList").$$render(
        $$result,
        {
          going: event.going,
          interested: event.interested
        },
        {},
        {}
      )} <div class="mt-4 flex flex-col gap-2">${validate_component(CommentSection, "CommentSection").$$render(
        $$result,
        {
          type: "EVENT",
          comments: event.comments,
          taggedMembers: data.allTaggedMembers,
          commentForm: data.commentForm,
          removeCommentForm: data.removeCommentForm
        },
        {},
        {}
      )}</div></div>`;
    },
    buttons: () => {
      return `<div slot="buttons">${validate_component(InterestedGoingButtons, "InterestedGoingButtons").$$render(
        $$result,
        {
          eventId: event.id,
          interestedGoingForm: data.interestedGoingForm,
          interested: event.interested,
          going: event.going
        },
        {},
        {}
      )}</div>`;
    },
    tags: () => {
      return `<div slot="tags" class="flex flex-row flex-wrap gap-2">${each(event.tags, (tag) => {
        return `${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}`;
      })}</div>`;
    },
    actions: () => {
      return `<div slot="actions" class="flex flex-row">${data.canEdit ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events/${event.slug}/edit`, void 0), 0)} class="btn btn-square btn-ghost btn-md"${add_attribute("title", events_edit(), 0)}><span class="i-mdi-edit text-xl"></span></a>` : ``} ${data.canDelete ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeEvent`, void 0), 0)}><button${add_attribute("type", submitString, 0)} class="btn btn-square btn-ghost btn-md" title="Radera"><span class="i-mdi-delete text-xl"></span></button> <dialog class="modal"${add_attribute("this", modal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(events_thisIsRecurring())}</h3> <div class="py-4"><div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_deleteThisEvent()}<!-- HTML_TAG_END --></span> <input type="radio" name="removeType" class="radio"${add_attribute("value", "THIS", 0)}${"THIS" === $form.removeType ? add_attribute("checked", true, 1) : ""}></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_deleteThisAndFutureEvents()}<!-- HTML_TAG_END --></span> <input type="radio" name="removeType" class="radio"${add_attribute("value", "FUTURE", 0)}${"FUTURE" === $form.removeType ? add_attribute("checked", true, 1) : ""}></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_deleteAllEvents()}<!-- HTML_TAG_END --></span> <input type="radio" name="removeType" class="radio"${add_attribute("value", "ALL", 0)}${"ALL" === $form.removeType ? add_attribute("checked", true, 1) : ""}></label></div></div> <div class="modal-action"><button class="btn btn-error" type="submit">${escape(events_delete())}</button></div></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-e62rhs"><button>close</button></form></dialog></form>` : ``}</div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D9n1PzpI.js.map
