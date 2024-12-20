import { c as create_ssr_component, b as escape, a as add_attribute, e as each, v as validate_component } from './ssr-BoMjCg5r.js';
import { A as AuthorSignature } from './AuthorSignature-D9ZD3VCx.js';
import { fA as events_interestedGoing_close, fB as events_interestedGoing_areGoing, fC as events_interestedGoing_threeOrMore, fD as events_interestedGoing_two, fE as events_interestedGoing_isGoing, fF as events_interestedGoing_areInterested, fG as events_interestedGoing_isInterested } from './messages-D8OfyZiq.js';
import { a as getFullName } from './member-DajX-teH.js';

const formatGoingList = (going) => {
  switch (going.length) {
    case 0:
      return "";
    case 1:
      return events_interestedGoing_isGoing({ x: getFullName(going[0]) });
    case 2:
      return events_interestedGoing_areGoing({
        x: events_interestedGoing_two({
          name1: getFullName(going[0]),
          name2: getFullName(going[1])
        })
      });
    default:
      return events_interestedGoing_areGoing({
        x: events_interestedGoing_threeOrMore({
          name1: getFullName(going[0]),
          name2: getFullName(going[1]),
          others: going.length - 2
        })
      });
  }
};
const formatInterestedList = (interested) => {
  switch (interested.length) {
    case 0:
      return "";
    case 1:
      return events_interestedGoing_isInterested({
        x: getFullName(interested[0])
      });
    case 2:
      return events_interestedGoing_areInterested({
        x: events_interestedGoing_two({
          name1: getFullName(interested[0]),
          name2: getFullName(interested[1])
        })
      });
    default:
      return events_interestedGoing_areInterested({
        x: events_interestedGoing_threeOrMore({
          name1: getFullName(interested[0]),
          name2: getFullName(interested[1]),
          others: interested.length - 2
        })
      });
  }
};
const InterestedGoingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let goingText;
  let interestedText;
  let goingModal;
  let interestedModal;
  let { interested } = $$props;
  let { going } = $$props;
  if ($$props.interested === void 0 && $$bindings.interested && interested !== void 0) $$bindings.interested(interested);
  if ($$props.going === void 0 && $$bindings.going && going !== void 0) $$bindings.going(going);
  goingText = formatGoingList(going);
  interestedText = formatInterestedList(interested);
  return `${going.length > 0 ? `<button class="link text-sm opacity-40 hover:opacity-60">${escape(goingText)}</button> <dialog id="going_modal" class="modal"${add_attribute("this", goingModal, 0)}><ul class="modal-box m-1 flex flex-col">${each(going, (person) => {
    return `<li>${validate_component(AuthorSignature, "AuthorSignature").$$render($$result, { type: "member", member: person }, {}, {})} </li>`;
  })}</ul> <form method="dialog" class="modal-backdrop"><button>${escape(events_interestedGoing_close())}</button></form></dialog>` : ``} ${going.length > 0 && interested.length > 0 ? `<br>` : ``} ${interested.length > 0 ? `<button class="link text-sm opacity-40 hover:opacity-60">${escape(interestedText)}</button> <dialog id="interested_modal" class="modal"${add_attribute("this", interestedModal, 0)}><ul class="modal-box m-1 flex flex-col">${each(interested, (person) => {
    return `<li>${validate_component(AuthorSignature, "AuthorSignature").$$render($$result, { type: "member", member: person }, {}, {})} </li>`;
  })}</ul> <form method="dialog" class="modal-backdrop"><button>${escape(events_interestedGoing_close())}</button></form></dialog>` : ``}`;
});

export { InterestedGoingList as I };
//# sourceMappingURL=InterestedGoingList-dBgyj_jS.js.map
