import { b as subscribe, f as getContext, k as compute_rest_props, j as set_store_value, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, s as spread, g as escape_attribute_value, d as escape_object, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { D as DateInput } from './DateInput-zW8CcVNb.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { f as formFieldProxy, n as numberProxy, b as arrayProxy, c as fieldProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import './superValidate-C2lU2J3v.js';
import { E as EntitySearch } from './EntitySearch-D4ZWMg82.js';
import dayjs from 'dayjs';
import { I as Input } from './Input-DbabE1Vy.js';
import './client-yexbOeKf.js';
import { twMerge } from 'tailwind-merge';
import { F as FormCheckbox } from './FormCheckbox-1G3eAIE7.js';
import { F as FormSelect } from './FormSelect-D5CeY-lk.js';
import { Q as QuestionType } from './types5-CwL0OX6I.js';

const transactionFee = (price) => swishTransactionFee(price);
const cardTranscationFee = (price) => price === 0 ? 0 : Math.floor(price * 0.015 + 180);
const swishTransactionFee = (price) => price === 0 ? 0 : Math.min(Math.floor(price * 0.01 + 300), 700);
const AvailableDates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $availableFromErrors, $$unsubscribe_availableFromErrors;
  let $availableFrom, $$unsubscribe_availableFrom;
  let $availableFromConstraints, $$unsubscribe_availableFromConstraints;
  let $availableTo, $$unsubscribe_availableTo;
  let $availableToErrors, $$unsubscribe_availableToErrors;
  let $availableToConstraints, $$unsubscribe_availableToConstraints;
  let { superform } = $$props;
  const { value: availableFrom, errors: availableFromErrors, constraints: availableFromConstraints } = formFieldProxy(superform, "availableFrom");
  $$unsubscribe_availableFrom = subscribe(availableFrom, (value) => $availableFrom = value);
  $$unsubscribe_availableFromErrors = subscribe(availableFromErrors, (value) => $availableFromErrors = value);
  $$unsubscribe_availableFromConstraints = subscribe(availableFromConstraints, (value) => $availableFromConstraints = value);
  const { value: availableTo, errors: availableToErrors, constraints: availableToConstraints } = formFieldProxy(superform, "availableTo");
  $$unsubscribe_availableTo = subscribe(availableTo, (value) => $availableTo = value);
  $$unsubscribe_availableToErrors = subscribe(availableToErrors, (value) => $availableToErrors = value);
  $$unsubscribe_availableToConstraints = subscribe(availableToConstraints, (value) => $availableToConstraints = value);
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-col justify-between gap-4 md:flex-row md:items-end [&>*]:flex-1">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: "Tillgång från",
        error: $availableFromErrors
      },
      {},
      {
        default: () => {
          return `${validate_component(DateInput, "DateInput").$$render(
            $$result,
            Object.assign({}, { name: "availableFrom" }, $availableFromConstraints, { date: $availableFrom }),
            {
              date: ($$value) => {
                $availableFrom = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} ${$availableTo != void 0 ? `${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: "Tillgänglig till",
        error: $availableToErrors
      },
      {},
      {
        default: () => {
          return `${validate_component(DateInput, "DateInput").$$render(
            $$result,
            Object.assign({}, { name: "availableTo" }, $availableToConstraints, { date: $availableTo }),
            {
              date: ($$value) => {
                $availableTo = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} <button type="button" class="btn" data-svelte-h="svelte-1ujvov9">Ta bort sluttid</button>` : `<button type="button" class="btn" data-svelte-h="svelte-bhjib8"><span class="i-mdi-plus text-xl"></span>
      Lägg till sluttid</button>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_availableFromErrors();
  $$unsubscribe_availableFrom();
  $$unsubscribe_availableFromConstraints();
  $$unsubscribe_availableTo();
  $$unsubscribe_availableToErrors();
  $$unsubscribe_availableToConstraints();
  return $$rendered;
});
const EventSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "isSearching", "onSelect", "handleSearch"]);
  let { class: clazz = "" } = $$props;
  let { isSearching = false } = $$props;
  let { onSelect } = $$props;
  let { handleSearch } = $$props;
  const getOption = (option) => option;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  if ($$props.isSearching === void 0 && $$bindings.isSearching && isSearching !== void 0) $$bindings.isSearching(isSearching);
  if ($$props.onSelect === void 0 && $$bindings.onSelect && onSelect !== void 0) $$bindings.onSelect(onSelect);
  if ($$props.handleSearch === void 0 && $$bindings.handleSearch && handleSearch !== void 0) $$bindings.handleSearch(handleSearch);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(EntitySearch, "EntitySearch").$$render(
      $$result,
      Object.assign({}, { endpoint: "/api/events" }, { class: clazz }, $$restProps, { isSearching }, { onSelect }, { handleSearch }),
      {
        isSearching: ($$value) => {
          isSearching = $$value;
          $$settled = false;
        },
        onSelect: ($$value) => {
          onSelect = $$value;
          $$settled = false;
        },
        handleSearch: ($$value) => {
          handleSearch = $$value;
          $$settled = false;
        }
      },
      {
        entity: ({ option }) => {
          let event = getOption(option);
          return `<div slot="entity">${escape(event.title)} (${escape(dayjs(event.startDatetime).format("DD MM YYYY"))}, ${escape(event.slug ?? event.id)})</div>`;
        },
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const EventSearchInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isSelected;
  let $$restProps = compute_rest_props($$props, ["event", "superform"]);
  let $value, $$unsubscribe_value;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let { event = void 0 } = $$props;
  let isSearching;
  let handleSearch;
  let { superform } = $$props;
  const { value, errors, constraints } = formFieldProxy(superform, "eventId");
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  $$unsubscribe_errors = subscribe(errors, (value2) => $errors = value2);
  $$unsubscribe_constraints = subscribe(constraints, (value2) => $constraints = value2);
  const updateForm = (event2) => {
    if (!event2) {
      set_store_value(value, $value = "", $value);
      return;
    }
    set_store_value(value, $value = event2.id, $value);
  };
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      updateForm(event);
    }
    isSelected = !!event;
    $$rendered = `${validate_component(EventSearch, "EventSearch").$$render(
      $$result,
      {
        onSelect: (selected) => {
          event = selected;
        },
        handleSearch,
        isSearching
      },
      {
        handleSearch: ($$value) => {
          handleSearch = $$value;
          $$settled = false;
        },
        isSearching: ($$value) => {
          isSearching = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Labeled, "Labeled").$$render($$result, { error: $errors, label: "Event" }, {}, {
            default: () => {
              return `<input${spread(
                [
                  { type: "hidden" },
                  { name: "eventId" },
                  { value: escape_attribute_value($value) },
                  escape_object($constraints)
                ],
                {}
              )}> <div class="${"input input-bordered flex items-center gap-2 " + escape(isSelected ? "input-primary" : "", true)}"><span class="i-mdi-search text-xl"></span> <input${spread(
                [
                  { id: "event" },
                  { autocomplete: "off" },
                  { autocapitalize: "off" },
                  { type: "text" },
                  { class: "grow bg-transparent" },
                  { placeholder: "Sök efter evenemang" },
                  {
                    value: escape_attribute_value(event ? `${event.title} (${dayjs(event.startDatetime).format("YYYY")}, ${event.slug ?? event.id})` : "")
                  },
                  { required: true },
                  escape_object($$restProps)
                ],
                {}
              )}> <span class="${"loading loading-spinner loading-md text-primary transition-opacity opacity-" + escape(isSearching ? "100" : "0", true)}"></span></div>`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_value();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});
const FormNumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy2;
  let value;
  let errors;
  let constraints;
  let $$restProps = compute_rest_props($$props, ["superform", "field", "name", "label"]);
  let $value, $$unsubscribe_value = noop, $$subscribe_value = () => ($$unsubscribe_value(), $$unsubscribe_value = subscribe(value, ($$value) => $value = $$value), value);
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $constraints, $$unsubscribe_constraints = noop, $$subscribe_constraints = () => ($$unsubscribe_constraints(), $$unsubscribe_constraints = subscribe(constraints, ($$value) => $constraints = $$value), constraints);
  let { superform } = $$props;
  let { field } = $$props;
  let { name = void 0 } = $$props;
  let { label = null } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    fieldProxy2 = formFieldProxy(superform, field);
    $$subscribe_value(value = numberProxy(superform, field));
    $$subscribe_errors(errors = fieldProxy2.errors);
    $$subscribe_constraints(constraints = fieldProxy2.constraints);
    $$rendered = `${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: name ?? field }, { type: "number" }, { label }, { error: $errors }, $constraints, $$restProps, { value: $value }),
      {
        value: ($$value) => {
          $value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_value();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});
const MaxAmountPerUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { superform } = $$props;
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  return `${validate_component(FormNumberInput, "FormNumberInput").$$render(
    $$result,
    {
      superform,
      field: "maxAmountPerUser",
      label: "Max antal biljetter per person"
    },
    {},
    {}
  )}`;
});
const MonetaryInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { value } = $$props;
  let { constraints = void 0 } = $$props;
  let { class: clazz = void 0 } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.constraints === void 0 && $$bindings.constraints && constraints !== void 0) $$bindings.constraints(constraints);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<input${spread(
    [
      { name: escape_attribute_value(name) },
      {
        class: escape_attribute_value(twMerge("input input-bordered w-20 min-w-0 max-w-40 shrink grow", clazz))
      },
      escape_object(constraints ?? {}),
      { min: escape_attribute_value(0) },
      { step: "0.01" },
      { type: "number" }
    ],
    {}
  )}${add_attribute("value", value, 0)}>`;
});
const PriceInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let price;
  let $value, $$unsubscribe_value;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let { superform } = $$props;
  const { value, errors, constraints } = formFieldProxy(superform, "price");
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  $$unsubscribe_errors = subscribe(errors, (value2) => $errors = value2);
  $$unsubscribe_constraints = subscribe(constraints, (value2) => $constraints = value2);
  const priceToText = (price2) => new Intl.NumberFormat(
    "sv-SE",
    {
      style: "currency",
      currency: "SEK",
      currencyDisplay: "code",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }
  ).format(price2 / 100);
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    price = Number($value) * 100;
    $$rendered = `${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: "Biljettpris (SEK)",
        error: $errors
      },
      {},
      {
        default: () => {
          return `<div class="flex items-center gap-2">${validate_component(MonetaryInput, "MonetaryInput").$$render(
            $$result,
            {
              name: "price",
              constraints: $constraints,
              value: $value
            },
            {
              value: ($$value) => {
                $value = $$value;
                $$settled = false;
              }
            },
            {}
          )} <p class="text-sm text-base-content/60">${`~${escape(priceToText(price - transactionFee(price)))} fås <br>
        (Swish: ${escape(priceToText(swishTransactionFee(price)))}, Kort: ${escape(priceToText(cardTranscationFee(price)))})`}</p></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_value();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  return $$rendered;
});
const ItemQuestionOption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $priceValue, $$unsubscribe_priceValue;
  let $priceErrors, $$unsubscribe_priceErrors;
  let $priceConstraints, $$unsubscribe_priceConstraints;
  let { superform } = $$props;
  let { field } = $$props;
  const { value: priceValue, errors: priceErrors, constraints: priceConstraints } = formFieldProxy(superform, `${field}.extraPrice`);
  $$unsubscribe_priceValue = subscribe(priceValue, (value) => $priceValue = value);
  $$unsubscribe_priceErrors = subscribe(priceErrors, (value) => $priceErrors = value);
  $$unsubscribe_priceConstraints = subscribe(priceConstraints, (value) => $priceConstraints = value);
  let extraCost = !!$priceValue;
  let { onRemove } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="relative rounded-lg border-[1px] p-2">${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        field: field + ".answer",
        label: "Svenska",
        placeholder: "Svarsalternativ..."
      },
      {},
      {}
    )} ${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        field: field + ".answerEn",
        label: "Engelska",
        placeholder: "Response option..."
      },
      {},
      {}
    )} ${extraCost ? `<div class="flex items-end justify-between">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: "Extrapris (SEK)",
        error: $priceErrors
      },
      {},
      {
        default: () => {
          return `${validate_component(MonetaryInput, "MonetaryInput").$$render(
            $$result,
            Object.assign({}, { class: "w-full" }, { name: "extraPrice" }, $priceConstraints, { value: $priceValue }),
            {
              value: ($$value) => {
                $priceValue = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} <button class="btn btn-error tooltip"${add_attribute("data-tip", "Ta bort extrakostnad", 0)} type="button" data-svelte-h="svelte-z3fbez"><span class="i-mdi-trash"></span></button></div>` : `<button class="btn self-start" type="button" data-svelte-h="svelte-2m3bgi"><span class="i-mdi-plus"></span> Extrakostnad</button>`} <button class="${[
      "btn btn-circle btn-error btn-sm absolute -right-4 -top-4 z-10 transition-all",
      !onRemove ? "opacity-0" : ""
    ].join(" ").trim()}" type="button" ${!onRemove ? "disabled" : ""}><span class="i-mdi-remove"></span></button></div>`;
  } while (!$$settled);
  $$unsubscribe_priceValue();
  $$unsubscribe_priceErrors();
  $$unsubscribe_priceConstraints();
  return $$rendered;
});
const ItemQuestion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionIndex;
  let $options, $$unsubscribe_options;
  let $type, $$unsubscribe_type;
  let $optionsErrors, $$unsubscribe_optionsErrors;
  let { superform } = $$props;
  let { field } = $$props;
  let { onRemove } = $$props;
  const { value: type } = formFieldProxy(superform, `${field}.type`);
  $$unsubscribe_type = subscribe(type, (value) => $type = value);
  const { values: options, errors: optionsErrors } = arrayProxy(superform, `${field}.options`);
  $$unsubscribe_options = subscribe(options, (value) => $options = value);
  $$unsubscribe_optionsErrors = subscribe(optionsErrors, (value) => $optionsErrors = value);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  {
    if ($type !== QuestionType.MultipleChoice) {
      if ($options) set_store_value(options, $options = [], $options);
    }
  }
  questionIndex = Number(field.match(/\d+/)[0]);
  $$unsubscribe_options();
  $$unsubscribe_type();
  $$unsubscribe_optionsErrors();
  return `<div class="rounded-box bg-base-300 p-4"><h3 class="text-lg font-semibold">Fråga ${escape(questionIndex + 1)}</h3> ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: field + ".id",
      type: "hidden"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: field + ".title",
      label: "Fråga",
      placeholder: "Önskar du...?"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: field + ".description",
      label: "Förklaring"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: field + ".titleEn",
      label: "Fråga (EN)"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: field + ".descriptionEn",
      label: "Förklaring (EN)"
    },
    {},
    {}
  )} ${validate_component(FormSelect, "FormSelect").$$render(
    $$result,
    {
      superform,
      field: field + ".type",
      label: "Typ",
      options: [
        {
          value: QuestionType.MultipleChoice,
          label: "Multiple choice"
        },
        {
          value: QuestionType.Text,
          label: "Free text"
        }
      ]
    },
    {},
    {}
  )} ${validate_component(FormCheckbox, "FormCheckbox").$$render(
    $$result,
    {
      superform,
      field: field + ".forExternalsOnly",
      label: "Enbart för icke-inloggade?",
      explanation: "Om du vill att frågan endast ska visas för icke-inloggade köpare."
    },
    {},
    {}
  )} ${$type === QuestionType.MultipleChoice ? `${validate_component(Labeled, "Labeled").$$render(
    $$result,
    {
      label: "Svarsalternativ",
      error: $optionsErrors
    },
    {},
    {}
  )} <div class="flex flex-wrap gap-2 [&>*]:flex-1">${$options ? ` ${each($options, (_, index) => {
    return `${validate_component(ItemQuestionOption, "ItemQuestionOption").$$render(
      $$result,
      {
        superform,
        field: field + ".options[" + index + "]",
        onRemove: $options.length === 1 ? void 0 : () => {
          if (!$options) return;
          else $options = $options.filter((_2, i) => i !== index);
        }
      },
      {},
      {}
    )}`;
  })}` : ``} <div class="flex items-center justify-center"><button type="button" class="btn btn-primary btn-lg m-8" data-svelte-h="svelte-1x496d5"><span class="i-mdi-plus-bold text-xl"></span></button></div></div>` : ``} <button class="btn btn-error mt-2" data-svelte-h="svelte-1m5j642">Ta bort fråga</button></div>`;
});
const ItemQuestionsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $values, $$unsubscribe_values;
  let $errors, $$unsubscribe_errors;
  let { superform } = $$props;
  const { values, errors } = arrayProxy(superform, "questions");
  $$unsubscribe_values = subscribe(values, (value) => $values = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  $$unsubscribe_values();
  $$unsubscribe_errors();
  return `<section class="space-y-2"><h3 class="text-lg font-semibold" data-svelte-h="svelte-xfjpnw">Frågor</h3>  ${each($values, (_, index) => {
    return `${validate_component(ItemQuestion, "ItemQuestion").$$render(
      $$result,
      {
        superform,
        field: "questions[" + index + "]",
        onRemove: () => {
          $values = $values.filter((_2, i) => i !== index);
        }
      },
      {},
      {}
    )}`;
  })} <button class="btn btn-outline btn-primary" type="button" data-svelte-h="svelte-a3k95w"><span class="i-mdi-plus"></span> Lägg till fråga</button> ${$errors ? `${each($errors, (error) => {
    return `<div class="label"><span class="label-text-alt text-error">${escape(error)}</span> </div>`;
  })}` : ``}</section>`;
});
const TicketAccessPolicyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $value, $$unsubscribe_value;
  let { superform } = $$props;
  let { index } = $$props;
  let { onRemove } = $$props;
  const value = fieldProxy(superform, `accessPolicies[${index}]`);
  $$unsubscribe_value = subscribe(value, (value2) => $value = value2);
  let isRole = $value.studentId === null;
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.onRemove === void 0 && $$bindings.onRemove && onRemove !== void 0) $$bindings.onRemove(onRemove);
  $$unsubscribe_value();
  return `<div class="join flex items-end gap-2">${isRole ? `${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "accessPolicies[" + index + "].role",
      label: "Roll"
    },
    {},
    {}
  )} <button type="button" class="btn tooltip" data-tip="Byt till person" data-svelte-h="svelte-jgub61"><span class="i-mdi-person"></span></button>` : `${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "accessPolicies[" + index + "].studentId",
      label: "StiL-ID"
    },
    {},
    {}
  )} <button type="button" class="btn tooltip" data-tip="Byt till roll" data-svelte-h="svelte-1ll7wn4"><span class="i-mdi-group"></span></button>`} <button type="button" class="btn btn-error" data-svelte-h="svelte-613qq1"><span class="i-mdi-trash"></span></button></div>`;
});
const TicketAccessPolicies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $values, $$unsubscribe_values;
  let $errors, $$unsubscribe_errors;
  let { superform } = $$props;
  const { values, errors } = arrayProxy(superform, "accessPolicies");
  $$unsubscribe_values = subscribe(values, (value) => $values = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  $$unsubscribe_values();
  $$unsubscribe_errors();
  return `<section class="space-y-2"><h5 class="font-semibold" data-svelte-h="svelte-xzq4tw">Access</h5> ${$values !== void 0 ? ` ${each($values, (_, index) => {
    return `${validate_component(TicketAccessPolicyRow, "TicketAccessPolicyRow").$$render(
      $$result,
      {
        superform,
        index,
        onRemove: () => {
          $values = [...$values.slice(0, index), ...$values.slice(index + 1)];
        }
      },
      {},
      {}
    )}`;
  })}` : ``} <button type="button" class="btn btn-primary" data-svelte-h="svelte-zkgds3">+ lägg till policy</button> ${$errors ? `${each($errors, (error) => {
    return `<div class="label"><span class="label-text-alt text-error">${escape(error)}</span> </div>`;
  })}` : ``}</section>`;
});
const TicketForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allErrors, $$unsubscribe_allErrors;
  let $submitting, $$unsubscribe_submitting;
  let { event = void 0 } = $$props;
  let { type = "create" } = $$props;
  let { form: createForm } = $$props;
  const superform = superForm(createForm, { dataType: "json" });
  const { enhance, submitting, allErrors } = superform;
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  $$unsubscribe_allErrors = subscribe(allErrors, (value) => $allErrors = value);
  if ($$props.event === void 0 && $$bindings.event && event !== void 0) $$bindings.event(event);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.form === void 0 && $$bindings.form && createForm !== void 0) $$bindings.form(createForm);
  {
    console.log($allErrors);
  }
  $$unsubscribe_allErrors();
  $$unsubscribe_submitting();
  return `<form method="POST" class="form-control grid max-w-xl grid-cols-1 gap-4 md:max-w-full md:grid-cols-2"><div>${validate_component(EventSearchInput, "EventSearchInput").$$render($$result, { superform, event }, {}, {})} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "title",
      label: "Biljettnamn"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "description",
      label: "Biljettbeskrivning"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "titleEn",
      label: "Biljettnamn (EN)"
    },
    {},
    {}
  )} ${validate_component(FormInput, "FormInput").$$render(
    $$result,
    {
      superform,
      field: "descriptionEn",
      label: "Beskrivning (EN)"
    },
    {},
    {}
  )} ${validate_component(PriceInput, "PriceInput").$$render($$result, { superform }, {}, {})} ${validate_component(AvailableDates, "AvailableDates").$$render($$result, { superform }, {}, {})} ${validate_component(FormNumberInput, "FormNumberInput").$$render(
    $$result,
    {
      superform,
      field: "stock",
      label: "Antal biljetter till salu"
    },
    {},
    {}
  )} ${validate_component(MaxAmountPerUser, "MaxAmountPerUser").$$render($$result, { superform }, {}, {})} ${validate_component(TicketAccessPolicies, "TicketAccessPolicies").$$render($$result, { superform }, {}, {})}</div> ${validate_component(ItemQuestionsSection, "ItemQuestionsSection").$$render($$result, { superform }, {}, {})} <button type="submit" ${$submitting ? "disabled" : ""} class="btn btn-primary mt-4">${type === "edit" ? `${escape($submitting ? "Uppdaterar..." : "Uppdatera biljett")}` : `${escape($submitting ? "Skapar..." : "Skapa biljett")}`}</button></form>`;
});

export { TicketForm as T };
//# sourceMappingURL=TicketForm-Q6v2ob6l.js.map
