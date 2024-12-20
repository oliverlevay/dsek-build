import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import './client-yexbOeKf.js';
import { p as page } from './stores-ClpLLrvc.js';
import { hH as tickets_foodPreferenceModal_title, hI as tickets_foodPreferenceModal_preferenceInitialQuestion, hJ as no, hK as yes } from './messages-D8OfyZiq.js';
import { twMerge } from 'tailwind-merge';

const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  let { show } = $$props;
  let { backdrop = false } = $$props;
  let { onClose = void 0 } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0) $$bindings.show(show);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0) $$bindings.backdrop(backdrop);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  return `<dialog class="modal"${add_attribute("this", modal, 0)}><div class="modal-box">${slots.default ? slots.default({}) : ``}</div> ${backdrop ? `${onClose ? `<form method="dialog" class="modal-backdrop" data-svelte-h="svelte-1j6iwd2"><button>close</button></form>` : `<form method="dialog" class="modal-backdrop" data-svelte-h="svelte-vg3lbk"><button>close</button></form>`}` : ``}</dialog>`;
});
const FoodPreferenceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member;
  let shouldAskUserForFoodPreference;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  member = $page.data.member;
  shouldAskUserForFoodPreference = !!member && member.foodPreference == null;
  $$unsubscribe_page();
  return `${member ? `${validate_component(Modal, "Modal").$$render($$result, { show: shouldAskUserForFoodPreference }, {}, {
    default: () => {
      return `<h3 class="text-lg font-bold">${escape(tickets_foodPreferenceModal_title())}</h3> ${`<p class="py-4">${escape(tickets_foodPreferenceModal_preferenceInitialQuestion())}</p> <div class="flex gap-4"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/${member.studentId}?/updateFoodPreference`, void 0), 0)} class="flex-1"><input type="hidden" name="foodPreference" value=""> <button type="submit" class="btn btn-error w-full">${escape(no())}</button></form> <button class="btn btn-primary flex-1">${escape(yes())}</button></div>`}`;
    }
  })}` : ``}`;
});
const ScrollingDigit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allNumbers;
  let isBigJump;
  let direction;
  let { i = 0 } = $$props;
  let lastI = void 0;
  let currentI = i;
  const updateI = (newI) => {
    lastI = currentI;
    currentI = newI;
  };
  if ($$props.i === void 0 && $$bindings.i && i !== void 0) $$bindings.i(i);
  {
    updateI(i);
  }
  allNumbers = Array.from({ length: 12 }, (_, i2) => i2 - 1);
  isBigJump = lastI !== void 0 && (lastI === 0 && currentI > 1 || lastI > 1 && currentI === 0);
  direction = isBigJump ? currentI > 1 ? 1 : -1 : 0;
  return `  <div class="relative h-[1em] text-center transition-all"><span class="opacity-0">${escape(currentI)}</span> <div class="absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out" style="${"top: " + escape(isBigJump ? direction : 0, true) + "em"}"><div class="relative">${each(allNumbers, (number) => {
    return `<span aria-hidden="true" class="${[
      "absolute inset-0 block leading-[1em] transition-all duration-300 ease-out",
      isBigJump ? "transition-none" : ""
    ].join(" ").trim()}" style="${"top: " + escape(number - currentI + (isBigJump ? -direction : 0), true) + "em;"}">${escape((number + 10) % 10)} </span>`;
  })}</div></div></div>`;
});
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inSeconds;
  let absSeconds;
  let { class: clazz = void 0 } = $$props;
  let { seconds = void 0 } = $$props;
  let { milliseconds = void 0 } = $$props;
  let { allowNegative = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.seconds === void 0 && $$bindings.seconds && seconds !== void 0) $$bindings.seconds(seconds);
  if ($$props.milliseconds === void 0 && $$bindings.milliseconds && milliseconds !== void 0) $$bindings.milliseconds(milliseconds);
  if ($$props.allowNegative === void 0 && $$bindings.allowNegative && allowNegative !== void 0) $$bindings.allowNegative(allowNegative);
  {
    if (seconds === void 0 && milliseconds === void 0) {
      throw new Error("Either `seconds` or `milliseconds` must be provided.");
    }
  }
  inSeconds = seconds ?? Math.ceil(milliseconds / 1e3);
  absSeconds = inSeconds < 0 && !allowNegative ? 0 : Math.abs(inSeconds);
  return `   <span${add_attribute("class", twMerge("inline-flex h-[1em] items-center overflow-hidden font-mono leading-[1em]", clazz ?? ""), 0)}>${allowNegative && inSeconds < 0 ? `-` : ``} ${validate_component(ScrollingDigit, "ScrollingDigit").$$render($$result, { i: Math.floor(absSeconds / 600) }, {}, {})} ${validate_component(ScrollingDigit, "ScrollingDigit").$$render($$result, { i: Math.floor(absSeconds / 60) % 10 }, {}, {})} <span class="relative" data-svelte-h="svelte-1uc3nzn">:</span> ${validate_component(ScrollingDigit, "ScrollingDigit").$$render($$result, { i: Math.floor(absSeconds % 60 / 10) }, {}, {})} ${validate_component(ScrollingDigit, "ScrollingDigit").$$render($$result, { i: absSeconds % 10 }, {}, {})}</span>`;
});
const ScrollingNumber = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let digits;
  let { class: clazz = "" } = $$props;
  let { number = 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0) $$bindings.number(number);
  digits = number.toString().split("").reverse().map(Number);
  return `  <span${add_attribute("class", twMerge("inline-flex h-[1em] flex-row-reverse items-center overflow-hidden leading-[1em]", clazz ?? ""), 0)}>${number < 0 ? `-` : ``} ${each(digits, (digit, index) => {
    return `<span class="h-[1em]">${validate_component(ScrollingDigit, "ScrollingDigit").$$render($$result, { i: digit }, {}, {})} </span>`;
  })}</span>`;
});

export { FoodPreferenceModal as F, Modal as M, ScrollingNumber as S, Timer as T };
//# sourceMappingURL=ScrollingNumber-DeH67l7m.js.map
