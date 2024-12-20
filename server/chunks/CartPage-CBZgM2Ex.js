import { b as subscribe, f as getContext, p as createEventDispatcher, s as setContext, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { b as invalidate, i as invalidateAll } from './client-yexbOeKf.js';
import { F as FoodPreferenceModal, M as Modal, S as ScrollingNumber, T as Timer } from './ScrollingNumber-DeH67l7m.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { n as now } from './date-5_FJIXnV.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { hs as cart, ht as cart_empty, hu as cart_event, hv as cart_ticket, hw as cart_price, hx as cart_reservation, hy as cart_remove, hz as cart_reservations, hA as cart_processing, hB as cart_get, hC as cart_pay, hD as cart_transactionFee, hE as cart_reservation_queuePosition, hF as cart_reservation_awaitingLottery, hG as cart_transactionFee_paymentPlatform } from './messages-D8OfyZiq.js';
import { P as Price } from './Price-DdMCfeZI.js';
import { twMerge } from 'tailwind-merge';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import dayjs from 'dayjs';
import '@stripe/stripe-js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as getFullName } from './member-DajX-teH.js';
import { A as APP_REDIRECT_URL } from './redirect-A1ZqWr7F.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { F as FormSubmitButton } from './FormSubmitButton-CTUAD0FR.js';
import { Q as QuestionType } from './types5-CwL0OX6I.js';

const ExpiresAtTimer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $now, $$unsubscribe_now;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  let { class: clazz = void 0 } = $$props;
  let { expiresAt = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.expiresAt === void 0 && $$bindings.expiresAt && expiresAt !== void 0) $$bindings.expiresAt(expiresAt);
  {
    if (expiresAt && $now > expiresAt) {
      invalidateAll();
    }
  }
  $$unsubscribe_now();
  return `${expiresAt ? `<div${add_attribute("class", twMerge("badge badge-primary", clazz), 0)}>${validate_component(Timer, "Timer").$$render(
    $$result,
    {
      milliseconds: expiresAt.valueOf() - $now.valueOf(),
      class: "w-[5ch] justify-center"
    },
    {},
    {}
  )}</div>` : ``}`;
});
const CartItemEvent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  return `<div class="flex items-center gap-3"><div class="avatar"><div class="mask mask-squircle h-12 w-12"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " event photo"}"></div></div> <div><div class="font-bold">${escape(event.title)}</div> <div class="text-sm opacity-50">${escape(dayjs(event.startDatetime).format("DD/MM"))}</div> ${slots.default ? slots.default({}) : ``}</div></div>`;
});
const CartItemRemoveButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { itemId } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0) $$bindings.itemId(itemId);
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeItem`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", itemId, 0)}> <button type="submit" class="btn btn-ghost" data-svelte-h="svelte-wpsab0"><span class="i-mdi-trash-can text-xl"></span></button></form>`;
});
const CartItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shoppable;
  let event;
  let unansweredQuestions;
  let totalPrice;
  let { item } = $$props;
  let { expiresAt = null } = $$props;
  let { showQuestionsColumn } = $$props;
  let { showQuestions } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.expiresAt === void 0 && $$bindings.expiresAt && expiresAt !== void 0) $$bindings.expiresAt(expiresAt);
  if ($$props.showQuestionsColumn === void 0 && $$bindings.showQuestionsColumn && showQuestionsColumn !== void 0) $$bindings.showQuestionsColumn(showQuestionsColumn);
  if ($$props.showQuestions === void 0 && $$bindings.showQuestions && showQuestions !== void 0) $$bindings.showQuestions(showQuestions);
  shoppable = item.shoppable;
  event = shoppable.event;
  unansweredQuestions = shoppable.questions.filter((q) => !item.questionResponses.some((r) => r.questionId === q.id));
  totalPrice = item.shoppable.price + item.questionResponses.reduce((acc, response) => acc + (response.extraPrice ?? 0), 0);
  return `<tr class="hidden border-none md:table-row"><td>${validate_component(CartItemEvent, "CartItemEvent").$$render($$result, { event }, {}, {})}</td> <td class="font-medium">${escape(shoppable.title)}</td> <td class="text-right">${validate_component(Price, "Price").$$render($$result, { price: totalPrice }, {}, {})}</td> ${showQuestionsColumn ? `<td class="text-left">${shoppable.questions.length > 0 ? `<button class="btn btn-outline btn-sm">${unansweredQuestions.length > 0 ? `Svara på frågor` : `Visa svar`}</button>` : `<span data-svelte-h="svelte-1s4sarz">-</span>`}</td>` : ``} <td class="text-center">${validate_component(ExpiresAtTimer, "ExpiresAtTimer").$$render($$result, { expiresAt }, {}, {})}</td> <td class="text-center">${validate_component(CartItemRemoveButton, "CartItemRemoveButton").$$render($$result, { itemId: item.id }, {}, {})}</td></tr> <tr class="border-none md:hidden"><td colspan="2">${validate_component(CartItemEvent, "CartItemEvent").$$render($$result, { event }, {}, {})}</td> <td>${validate_component(CartItemRemoveButton, "CartItemRemoveButton").$$render($$result, { itemId: item.id }, {}, {})}</td></tr> <tr class="border-none md:hidden"><td class="font-medium">${escape(shoppable.title)}</td> <td>${validate_component(ExpiresAtTimer, "ExpiresAtTimer").$$render($$result, { expiresAt }, {}, {})}</td> <td class="text-right">${validate_component(Price, "Price").$$render($$result, { price: totalPrice }, {}, {})}</td></tr> ${shoppable.questions.length > 0 ? `<tr class="border-none md:hidden"><td colspan="3" class="text-left"><button class="btn btn-outline btn-sm">${unansweredQuestions.length > 0 ? `Svara på frågor` : `Visa svar`}</button></td></tr>` : ``}`;
});
const isServer = typeof window === "undefined";
function register(stripe) {
  if (!isServer) {
    return stripe.registerAppInfo({
      name: "svelte-stripe-js",
      url: "https://svelte-stripe-js.vercel.app"
    });
  }
}
const PaymentElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  let wrapper;
  createEventDispatcher();
  getContext("stripe");
  let { options = void 0 } = $$props;
  function blur() {
    element.blur();
  }
  function clear() {
    element.clear();
  }
  function destroy() {
    element.destroy();
  }
  function focus() {
    element.focus();
  }
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0) $$bindings.blur(blur);
  if ($$props.clear === void 0 && $$bindings.clear && clear !== void 0) $$bindings.clear(clear);
  if ($$props.destroy === void 0 && $$bindings.destroy && destroy !== void 0) $$bindings.destroy(destroy);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0) $$bindings.focus(focus);
  return `<div${add_attribute("this", wrapper, 0)}></div>`;
});
const Elements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let appearance;
  let { stripe } = $$props;
  let { mode = void 0 } = $$props;
  let { theme = "stripe" } = $$props;
  let { variables = {} } = $$props;
  let { rules = {} } = $$props;
  let { labels = "above" } = $$props;
  let { loader = "auto" } = $$props;
  let { fonts = [] } = $$props;
  let { locale = "auto" } = $$props;
  let { currency = void 0 } = $$props;
  let { amount = void 0 } = $$props;
  let { clientSecret = void 0 } = $$props;
  let { elements = null } = $$props;
  if ($$props.stripe === void 0 && $$bindings.stripe && stripe !== void 0) $$bindings.stripe(stripe);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0) $$bindings.mode(mode);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0) $$bindings.theme(theme);
  if ($$props.variables === void 0 && $$bindings.variables && variables !== void 0) $$bindings.variables(variables);
  if ($$props.rules === void 0 && $$bindings.rules && rules !== void 0) $$bindings.rules(rules);
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0) $$bindings.labels(labels);
  if ($$props.loader === void 0 && $$bindings.loader && loader !== void 0) $$bindings.loader(loader);
  if ($$props.fonts === void 0 && $$bindings.fonts && fonts !== void 0) $$bindings.fonts(fonts);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0) $$bindings.locale(locale);
  if ($$props.currency === void 0 && $$bindings.currency && currency !== void 0) $$bindings.currency(currency);
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0) $$bindings.amount(amount);
  if ($$props.clientSecret === void 0 && $$bindings.clientSecret && clientSecret !== void 0) $$bindings.clientSecret(clientSecret);
  if ($$props.elements === void 0 && $$bindings.elements && elements !== void 0) $$bindings.elements(elements);
  appearance = { theme, variables, rules, labels };
  {
    if (stripe && !elements) {
      elements = stripe.elements({
        mode,
        currency,
        amount,
        appearance,
        clientSecret,
        fonts,
        loader,
        locale
      });
      register(stripe);
      setContext("stripe", { stripe, elements });
    }
  }
  {
    if (elements) {
      elements.update({ appearance, locale });
    }
  }
  return `${stripe && elements ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
const SveltePaymentElement = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let redirectPath;
  let member;
  let untypedStripe;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { stripe } = $$props;
  let { clientSecret } = $$props;
  let { price } = $$props;
  let elements;
  if ($$props.stripe === void 0 && $$bindings.stripe && stripe !== void 0) $$bindings.stripe(stripe);
  if ($$props.clientSecret === void 0 && $$bindings.clientSecret && clientSecret !== void 0) $$bindings.clientSecret(clientSecret);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0) $$bindings.price(price);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    redirectPath = $page.data["paths"]?.["purchaseRedirect"] ?? "/shop/success";
    ($page.data.isApp ? APP_REDIRECT_URL : $page.url.origin + "/") + redirectPath.slice(1);
    member = $page.data.member;
    untypedStripe = stripe;
    $$rendered = `${stripe ? `${validate_component(Elements, "Elements").$$render(
      $$result,
      {
        stripe: untypedStripe,
        clientSecret,
        theme: $page.data.theme === "light" ? "stripe" : "night",
        variables: { colorPrimary: "#f280a1" },
        elements
      },
      {
        elements: ($$value) => {
          elements = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form>${validate_component(PaymentElement, "PaymentElement").$$render(
            $$result,
            {
              options: {
                layout: "tabs",
                defaultValues: member ? {
                  billingDetails: {
                    name: getFullName({
                      firstName: member.firstName,
                      lastName: member.lastName,
                      nickname: null
                    })
                  }
                } : void 0,
                fields: {
                  billingDetails: {
                    name: "auto",
                    email: "auto",
                    phone: "auto",
                    address: "auto"
                  }
                }
              }
            },
            {},
            {}
          )} <div class="mt-4 flex items-center justify-between gap-2"><button class="btn btn-primary" ${""}>${`${escape(cart_pay())}`}</button> ${validate_component(Price, "Price").$$render($$result, { price }, {}, {})}</div> ${``}</form>`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const PurchaseSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPurchasing;
  let $message, $$unsubscribe_message;
  let $submitting, $$unsubscribe_submitting;
  let { totalPrice } = $$props;
  let { showPrice = true } = $$props;
  let stripe = null;
  const idempotencyKey = crypto.randomUUID();
  let { superform } = $$props;
  const { enhance, message, submitting } = superform;
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.totalPrice === void 0 && $$bindings.totalPrice && totalPrice !== void 0) $$bindings.totalPrice(totalPrice);
  if ($$props.showPrice === void 0 && $$bindings.showPrice && showPrice !== void 0) $$bindings.showPrice(showPrice);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  isPurchasing = $message?.["clientSecret"] !== void 0;
  $$unsubscribe_message();
  $$unsubscribe_submitting();
  return `${isPurchasing ? `<tr><td colspan="100" class="w-full max-w-xl">${validate_component(SveltePaymentElement, "SveltePaymentElement").$$render(
    $$result,
    {
      stripe,
      clientSecret: $message["clientSecret"],
      price: totalPrice
    },
    {},
    {}
  )}</td></tr>` : `<tr><td><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/purchase`, void 0), 0)}><input type="hidden" name="idempotencyKey"${add_attribute("value", idempotencyKey, 0)}> <button type="submit" class="btn btn-primary" ${$submitting ? "disabled" : ""}>${$submitting ? `${escape(cart_processing())}` : `${escape(totalPrice === 0 ? cart_get() : cart_pay())}`}</button></form></td> ${showPrice ? `<td colspan="2" class="text-right">${validate_component(Price, "Price").$$render($$result, { price: totalPrice }, {}, {})}</td>` : ``}</tr>`}`;
});
const QuestionForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let superform;
  let form;
  let $form, $$unsubscribe_form = noop, $$subscribe_form = () => ($$unsubscribe_form(), $$unsubscribe_form = subscribe(form, ($$value) => $form = $$value), form);
  let { question } = $$props;
  let { onSuccess = void 0 } = $$props;
  const getSuperForm = (form2) => superForm(form2, {
    onResult(event) {
      if (event.result.type === "success") {
        onSuccess?.();
      }
    },
    resetForm: true,
    invalidateAll: "force"
  });
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.question === void 0 && $$bindings.question && question !== void 0) $$bindings.question(question);
  if ($$props.onSuccess === void 0 && $$bindings.onSuccess && onSuccess !== void 0) $$bindings.onSuccess(onSuccess);
  superform = getSuperForm(question.form);
  superform.enhance;
  $$subscribe_form(form = superform.form);
  $$unsubscribe_form();
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/answerQuestion`, void 0), 0)}><h1 class="text-2xl font-bold">${escape(question.title)} <span class="font-normal">${validate_component(ExpiresAtTimer, "ExpiresAtTimer").$$render($$result, { expiresAt: question.expiresAt }, {}, {})}</span></h1> <p class="my-4">${escape(question.description)}</p> ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "hidden",
      superform,
      field: "questionId"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      type: "hidden",
      superform,
      field: "consumableId"
    },
    {},
    {}
  )} ${question.type === QuestionType.MultipleChoice ? (() => {
    let anyHasExtraPrice = question.options.some((o) => !!o.extraPrice);
    return ` <ul class="menu px-0">${each(question.options, (option) => {
      return `<li class="flex gap-2"><label><input name="answer" class="radio" type="radio"${add_attribute("value", option.answer, 0)}${option.answer === $form.answer ? add_attribute("checked", true, 1) : ""}>${escape(option.answer)} ${anyHasExtraPrice ? `${validate_component(Price, "Price").$$render(
        $$result,
        {
          class: "text-sm",
          price: option.extraPrice ?? 0
        },
        {},
        {
          prefix: () => {
            return `<span slot="prefix">${!!option.extraPrice ? `+` : ``} </span>`;
          }
        }
      )}` : ``}</label> </li>`;
    })}</ul>`;
  })() : `${validate_component(FormInput, "FormInput").$$render($$result, { superform, field: "answer" }, {}, {})} <br>`} ${validate_component(FormSubmitButton, "FormSubmitButton").$$render(
    $$result,
    {
      superform,
      class: "btn btn-primary",
      disabled: !$form.answer
    },
    {},
    {
      default: () => {
        return `Svara`;
      }
    }
  )}</form>`;
});
const CartQuestionsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionInNeedOfAnswer;
  let currentQuestion;
  let { allQuestions } = $$props;
  let { inspectedItem = null } = $$props;
  let { onClose } = $$props;
  let selectedQuestion = null;
  let { open = !!currentQuestion || !!inspectedItem } = $$props;
  if ($$props.allQuestions === void 0 && $$bindings.allQuestions && allQuestions !== void 0) $$bindings.allQuestions(allQuestions);
  if ($$props.inspectedItem === void 0 && $$bindings.inspectedItem && inspectedItem !== void 0) $$bindings.inspectedItem(inspectedItem);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  questionInNeedOfAnswer = allQuestions.find((question) => question.form?.valid === false);
  currentQuestion = questionInNeedOfAnswer ?? selectedQuestion;
  {
    if (!!currentQuestion || !!inspectedItem) open = true;
    else open = false;
  }
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: !!currentQuestion || !!inspectedItem,
      backdrop: !!inspectedItem && !currentQuestion,
      onClose
    },
    {},
    {
      default: () => {
        return `${!!currentQuestion ? `${validate_component(QuestionForm, "QuestionForm").$$render(
          $$result,
          {
            question: currentQuestion,
            onSuccess: void 0
          },
          {},
          {}
        )}` : `${!!inspectedItem ? `<div class="mb-4 flex justify-between"><h1 class="text-2xl font-bold">Dina svar
        <span class="font-normal">${validate_component(ExpiresAtTimer, "ExpiresAtTimer").$$render($$result, { expiresAt: inspectedItem.expiresAt }, {}, {})}</span></h1> <button type="button" class="btn btn-circle btn-ghost btn-lg" data-svelte-h="svelte-eotis7"><span class="i-mdi-close"></span></button></div> <ul class="divide-y-[1px] divide-base-content/20">${each(inspectedItem.shoppable.questions, (question) => {
          let response = inspectedItem.questionResponses.find((r) => r.questionId === question.id);
          return ` <li class="py-4 first:pt-0 last:pb-0"><h2 class="block text-lg font-semibold">${escape(question.title)}</h2> <span class="ml-1">${escape(response?.answer ?? "Ej besvarad")} ${response?.extraPrice ? `(${validate_component(Price, "Price").$$render($$result, { price: response.extraPrice }, {}, {
            prefix: () => {
              return `<span slot="prefix" data-svelte-h="svelte-ao695c">+</span>`;
            }
          })})` : ``}</span> <button class="btn btn-square btn-sm ml-2 inline-block" data-svelte-h="svelte-1jgwfe5"><span class="i-mdi-edit"></span></button> </li>`;
        })}</ul>` : ``}`} <p class="mt-4 text-sm opacity-50" data-svelte-h="svelte-1x8lqsr">Du behöver inte stressa.<br> Din biljett är reserverad.</p>`;
      }
    }
  )}`;
});
const StripeDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("$paraglide-adapter-sveltekit:context");
  return `<div class="flex items-center gap-3"><div class="avatar" data-svelte-h="svelte-1g79t9"><div class="mask mask-squircle h-12 w-12"><img${add_attribute("src", "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082", 0)} alt="Stripe payment platform logo"></div></div> <div><div class="font-bold" data-svelte-h="svelte-1skn5iz">Stripe</div> <div class="text-sm opacity-50">${escape(cart_transactionFee_paymentPlatform())}</div></div></div>`;
});
const TransactionFee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fee } = $$props;
  if ($$props.fee === void 0 && $$bindings.fee && fee !== void 0) $$bindings.fee(fee);
  return `<tr class="hidden border-none md:table-row"><td>${validate_component(StripeDescription, "StripeDescription").$$render($$result, {}, {}, {})}</td> <td class="font-medium">${escape(cart_transactionFee())}</td> <td class="text-right">${validate_component(Price, "Price").$$render($$result, { price: fee }, {}, {})}</td> <td class="text-center" data-svelte-h="svelte-qkdxxa"></td> <th class="text-center" data-svelte-h="svelte-7idbnq"></th></tr> <tr class="border-none md:hidden"><td colspan="2">${validate_component(StripeDescription, "StripeDescription").$$render($$result, {}, {}, {})}</td> <th></th></tr> <tr class="border-none md:hidden"><td class="font-medium" colspan="2">${escape(cart_transactionFee())}</td> <td class="text-right">${validate_component(Price, "Price").$$render($$result, { price: fee }, {}, {})}</td></tr>`;
});
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionsArePresent;
  let { inCart } = $$props;
  let { transactionFee } = $$props;
  let { totalPrice } = $$props;
  let { superform } = $$props;
  let currentlyInspectedItem = null;
  let { questionModalOpen } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.inCart === void 0 && $$bindings.inCart && inCart !== void 0) $$bindings.inCart(inCart);
  if ($$props.transactionFee === void 0 && $$bindings.transactionFee && transactionFee !== void 0) $$bindings.transactionFee(transactionFee);
  if ($$props.totalPrice === void 0 && $$bindings.totalPrice && totalPrice !== void 0) $$bindings.totalPrice(totalPrice);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.questionModalOpen === void 0 && $$bindings.questionModalOpen && questionModalOpen !== void 0) $$bindings.questionModalOpen(questionModalOpen);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    questionsArePresent = inCart.some((item) => item.shoppable.questions.length > 0);
    $$rendered = `<h1 class="text-2xl">${escape(cart())}</h1> <table class="table mt-4"><thead class="hidden md:table-header-group"><tr class="border-none"><th class="text-left">${escape(cart_event())}</th> <th class="text-left">${escape(cart_ticket())}</th> <th class="text-right">${escape(cart_price())}</th> ${questionsArePresent ? `<th class="text-left" data-svelte-h="svelte-13cooz">Detaljer</th>` : ``} <th class="text-center">${escape(cart_reservation())}</th> <th class="text-center">${escape(cart_remove())}</th></tr></thead> ${each(inCart, (cartItem, index) => {
      return `${validate_component(CartItem, "CartItem").$$render(
        $$result,
        {
          item: cartItem,
          expiresAt: cartItem.expiresAt,
          showQuestionsColumn: questionsArePresent,
          showQuestions: () => {
            currentlyInspectedItem = index;
          }
        },
        {},
        {}
      )}`;
    })} ${transactionFee > 0 ? `${validate_component(TransactionFee, "TransactionFee").$$render($$result, { fee: transactionFee }, {}, {})}` : ``} ${validate_component(PurchaseSection, "PurchaseSection").$$render(
      $$result,
      {
        superform,
        totalPrice,
        showPrice: inCart.length > 1
      },
      {},
      {}
    )}</table> ${validate_component(CartQuestionsModal, "CartQuestionsModal").$$render(
      $$result,
      {
        allQuestions: inCart.flatMap((item) => item.shoppable.questions.map((q) => ({ ...q, expiresAt: item.expiresAt }))),
        inspectedItem: currentlyInspectedItem !== null ? inCart[currentlyInspectedItem] : null,
        onClose: () => {
          currentlyInspectedItem = null;
        },
        open: questionModalOpen
      },
      {
        open: ($$value) => {
          questionModalOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const CartReservation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shoppable;
  let event;
  let lotteryAt;
  let $now, $$unsubscribe_now;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  let { item } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  shoppable = item.shoppable;
  event = shoppable.event;
  lotteryAt = item.order !== null ? null : shoppable.gracePeriodEndsAt;
  {
    if (lotteryAt && $now > lotteryAt) {
      invalidateAll();
    }
  }
  $$unsubscribe_now();
  return `<li class="flex flex-wrap items-center gap-x-4"><div class="flex items-center gap-3"><div class="avatar"><div class="mask mask-squircle h-12 w-12"><img${add_attribute("src", getFileUrl(event.imageUrl) ?? "https://minio.api.dsek.se/news/public/8c97c4c6-d4f4-44f5-9658-cff70110ad85.webp", 0)} alt="${escape(event.title, true) + " event photo"}"></div></div> <div><div class="font-bold">${escape(shoppable.title)}</div> <div class="text-sm opacity-50">${escape(event.title)}</div> ${slots.default ? slots.default({}) : ``}</div></div> ${validate_component(Price, "Price").$$render($$result, { price: shoppable.price, class: "text-lg" }, {}, {})} <div class="text-2xl font-bold text-primary">${item.order !== null ? `${escape(cart_reservation_queuePosition())} ${validate_component(ScrollingNumber, "ScrollingNumber").$$render($$result, { number: item.order + 1 }, {}, {})}` : `${escape(cart_reservation_awaitingLottery())} ${validate_component(Timer, "Timer").$$render(
    $$result,
    {
      milliseconds: shoppable.gracePeriodEndsAt.valueOf() - $now.valueOf()
    },
    {},
    {}
  )}`}</div> <form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/removeReservation`, void 0), 0)}><input type="hidden" name="id"${add_attribute("value", item.id, 0)}> <button type="submit" class="btn btn-ghost" data-svelte-h="svelte-adq3vw"><span class="i-mdi-trash-can text-xl"></span></button></form></li>`;
});
const Reservations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reservations } = $$props;
  if ($$props.reservations === void 0 && $$bindings.reservations && reservations !== void 0) $$bindings.reservations(reservations);
  return `<h1 class="mb-4 text-2xl">${escape(cart_reservations())}</h1> <ul class="flex flex-col gap-4">${each(reservations, (reservation) => {
    return `${validate_component(CartReservation, "CartReservation").$$render($$result, { item: reservation }, {}, {})}`;
  })}</ul>`;
});
const CartPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isPurchasing;
  let $now, $$unsubscribe_now;
  let $message, $$unsubscribe_message;
  $$unsubscribe_now = subscribe(now, (value) => $now = value);
  let { data } = $$props;
  let lastUpdate = Date.now();
  const superform = superForm(data.purchaseForm);
  const { message } = superform;
  $$unsubscribe_message = subscribe(message, (value) => $message = value);
  let questionModalOpen;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isPurchasing = $message?.["clientSecret"] !== void 0;
    {
      if (!isPurchasing && $now.valueOf() - lastUpdate > 1e3 * 10) {
        lastUpdate = Date.now();
        invalidate();
      }
    }
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: cart() }, {}, {})} ${validate_component(FoodPreferenceModal, "FoodPreferenceModal").$$render($$result, {}, {}, {})} <article class="flex flex-col">${data.inCart.length > 0 || data.reservations.length > 0 ? `${data.inCart.length > 0 ? `${validate_component(Cart, "Cart").$$render(
      $$result,
      {
        inCart: data.inCart,
        transactionFee: data.transactionFee,
        totalPrice: data.totalPrice,
        superform,
        questionModalOpen
      },
      {
        questionModalOpen: ($$value) => {
          questionModalOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${data.reservations.length > 0 ? `${validate_component(Reservations, "Reservations").$$render($$result, { reservations: data.reservations }, {}, {})}` : ``}` : `<p class="text-2xl">${escape(cart_empty())}</p>`}</article>`;
  } while (!$$settled);
  $$unsubscribe_now();
  $$unsubscribe_message();
  return $$rendered;
});

export { CartPage as C };
//# sourceMappingURL=CartPage-CBZgM2Ex.js.map
