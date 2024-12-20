import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, s as spread, g as escape_attribute_value, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { fy as events_interestedGoing_going, fz as events_interestedGoing_interested } from './messages-D8OfyZiq.js';

const InterestedGoingButtons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let authorized;
  let isGoingIcon;
  let isInterestedIcon;
  let $page, $$unsubscribe_page;
  let $constraints, $$unsubscribe_constraints;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { eventId } = $$props;
  let { interested } = $$props;
  let { going } = $$props;
  let { interestedGoingForm } = $$props;
  const { constraints, enhance } = superForm(interestedGoingForm, { id: eventId });
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  let isGoing = going.some((member) => member.studentId === $page.data.user?.studentId);
  let isInterested = interested.some((member) => member.studentId === $page.data.user?.studentId);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.eventId === void 0 && $$bindings.eventId && eventId !== void 0) $$bindings.eventId(eventId);
  if ($$props.interested === void 0 && $$bindings.interested && interested !== void 0) $$bindings.interested(interested);
  if ($$props.going === void 0 && $$bindings.going && going !== void 0) $$bindings.going(going);
  if ($$props.interestedGoingForm === void 0 && $$bindings.interestedGoingForm && interestedGoingForm !== void 0) $$bindings.interestedGoingForm(interestedGoingForm);
  authorized = Boolean($page.data.user);
  isGoingIcon = isGoing ? "i-mdi-check-circle bg-primary" : "i-mdi-check-circle-outline";
  isInterestedIcon = isInterested ? "i-mdi-star bg-yellow-500" : "i-mdi-star-outline";
  $$unsubscribe_page();
  $$unsubscribe_constraints();
  return `${$page.data.member ? `<div class="bg-yell my-3 flex flex-row gap-2"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/events?/${isInterested ? "interested" : isGoing ? "going" : "none"}`, void 0), 0)}><input${spread(
    [
      { type: "hidden" },
      { value: escape_attribute_value(eventId) },
      { name: "eventId" },
      escape_object($constraints)
    ],
    {}
  )}> <button ${!authorized ? "disabled" : ""} type="submit" class="btn btn-ghost"><span${add_attribute("class", isGoingIcon + " size-6", 0)}></span> ${escape(events_interestedGoing_going())}</button> <button ${!authorized ? "disabled" : ""} type="submit" class="btn btn-ghost"><span${add_attribute("class", isInterestedIcon + " size-6", 0)}></span> ${escape(events_interestedGoing_interested())}</button></form></div>` : ``}`;
});

export { InterestedGoingButtons as I };
//# sourceMappingURL=InterestedGoingButtons-DaN4Eevd.js.map
