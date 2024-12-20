import { b as subscribe, f as getContext, n as noop } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, a as add_attribute, e as each, s as spread, g as escape_attribute_value, d as escape_object } from './ssr-BoMjCg5r.js';
import { F as FormCheckbox } from './FormCheckbox-1G3eAIE7.js';
import { twMerge } from 'tailwind-merge';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import './client-yexbOeKf.js';
import './superValidate-C2lU2J3v.js';
import { f as formFieldProxy, d as dateProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { F as FormInput } from './FormInput-Dxuw95TR.js';
import { F as FormSelect } from './FormSelect-D5CeY-lk.js';
import { F as FormSubmitButton } from './FormSubmitButton-CTUAD0FR.js';
import { T as TagChip } from './TagChip-uoZb8u8g.js';
import { T as TagSelector } from './TagSelector-Br3xhJpq.js';
import { r as recurringTypes } from './schema3-YvxXxCE2.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { fO as events_title, fP as events_subtitle, fQ as events_description, fR as events_organizer, fS as events_location, fT as events_link, fU as events_startTime, fV as events_endTime, fW as events_create_alarmActive, fX as events_recurringEvent, fY as events_create_howOften, fZ as events_create_lastDate, f_ as events_cancelEvent, ft as events_tags, ep as save, f$ as news_publish, g0 as events_cancellingAlert, fL as events_thisIsRecurring, g1 as events_onlyEditThis, g2 as events_editThisAndFuture, g3 as events_editAll, g4 as events_create_preview } from './messages-D8OfyZiq.js';
import { E as Event } from './Event-Dbp3kXIa.js';
import { L as LangTabs, F as FormMarkdown } from './LangTabs-BYaI1O9N.js';
import { F as FormFileInput } from './FormFileInput-BONk2osz.js';

const FormDateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fieldProxy;
  let errors;
  let constraints;
  let date;
  let $errors, $$unsubscribe_errors = noop, $$subscribe_errors = () => ($$unsubscribe_errors(), $$unsubscribe_errors = subscribe(errors, ($$value) => $errors = $$value), errors);
  let $constraints, $$unsubscribe_constraints = noop, $$subscribe_constraints = () => ($$unsubscribe_constraints(), $$unsubscribe_constraints = subscribe(constraints, ($$value) => $constraints = $$value), constraints);
  let $date, $$unsubscribe_date = noop, $$subscribe_date = () => ($$unsubscribe_date(), $$unsubscribe_date = subscribe(date, ($$value) => $date = $$value), date);
  let { superform } = $$props;
  let { field } = $$props;
  let { name = void 0 } = $$props;
  let { label = null } = $$props;
  let { id = null } = $$props;
  let { onlyDate = false } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.superform === void 0 && $$bindings.superform && superform !== void 0) $$bindings.superform(superform);
  if ($$props.field === void 0 && $$bindings.field && field !== void 0) $$bindings.field(field);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.onlyDate === void 0 && $$bindings.onlyDate && onlyDate !== void 0) $$bindings.onlyDate(onlyDate);
  fieldProxy = formFieldProxy(superform, field);
  $$subscribe_errors(errors = fieldProxy.errors);
  $$subscribe_constraints(constraints = fieldProxy.constraints);
  $$subscribe_date(date = dateProxy(superform, field, {
    format: onlyDate ? "date" : "datetime-local"
  }));
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_date();
  return `${validate_component(Labeled, "Labeled").$$render($$result, { label, error: $errors }, {}, {
    default: () => {
      return `${onlyDate ? `<input${spread(
        [
          { id: escape_attribute_value(id) },
          { name: escape_attribute_value(name) },
          { type: "date" },
          {
            "aria-invalid": escape_attribute_value($errors ? "true" : void 0)
          },
          escape_object($constraints),
          {
            min: escape_attribute_value($constraints?.min?.toString().slice(0, 10))
          },
          {
            max: escape_attribute_value($constraints?.max?.toString().slice(0, 10))
          },
          escape_object($$props),
          {
            class: escape_attribute_value(twMerge("input input-bordered", $$props["class"] ?? ""))
          }
        ],
        {}
      )}${add_attribute("value", $date, 0)}>` : `<input${spread(
        [
          { id: escape_attribute_value(id) },
          { name: escape_attribute_value(name) },
          { type: "datetime-local" },
          {
            "aria-invalid": escape_attribute_value($errors ? "true" : void 0)
          },
          escape_object($constraints),
          {
            min: escape_attribute_value($constraints?.min?.toString().slice(0, 10))
          },
          {
            max: escape_attribute_value($constraints?.max?.toString().slice(0, 10))
          },
          escape_object($$props),
          {
            class: escape_attribute_value(twMerge("input input-bordered", $$props["class"] ?? ""))
          }
        ],
        {}
      )}${add_attribute("value", $date, 0)}>`}`;
    }
  })}`;
});
const EventEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let { recurringParentId } = $$props;
  let { creating = false } = $$props;
  let { data } = $$props;
  const superform = superForm(data, { dataType: "json" });
  const { form, errors, enhance } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  let { allTags } = $$props;
  let activeTab;
  let modal;
  if ($$props.recurringParentId === void 0 && $$bindings.recurringParentId && recurringParentId !== void 0) $$bindings.recurringParentId(recurringParentId);
  if ($$props.creating === void 0 && $$bindings.creating && creating !== void 0) $$bindings.creating(creating);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.allTags === void 0 && $$bindings.allTags && allTags !== void 0) $$bindings.allTags(allTags);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      if ($errors) console.log($errors);
    }
    $$rendered = `<main class="flex w-screen flex-col gap-8 px-4 pt-8 lg:flex-row lg:px-8 [&>*]:flex-1"><section><form method="POST" class="form-control items-start gap-2" enctype="multipart/form-data">${slots["form-start"] ? slots["form-start"]({}) : ``} ${validate_component(LangTabs, "LangTabs").$$render(
      $$result,
      { class: "self-stretch", activeTab },
      {
        activeTab: ($$value) => {
          activeTab = $$value;
          $$settled = false;
        }
      },
      {
        en: () => {
          return `${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              superform,
              label: events_title(),
              field: "titleEn"
            },
            {},
            {}
          )} ${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              superform,
              label: events_subtitle(),
              field: "shortDescriptionEn"
            },
            {},
            {}
          )} ${validate_component(FormMarkdown, "FormMarkdown").$$render(
            $$result,
            {
              superform,
              label: events_description(),
              field: "descriptionEn",
              class: "min-h-[10rem]",
              placeholder: events_description()
            },
            {},
            {}
          )} `;
        },
        sv: () => {
          return `${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              superform,
              label: events_title(),
              field: "title"
            },
            {},
            {}
          )} ${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              superform,
              label: events_subtitle(),
              field: "shortDescription"
            },
            {},
            {}
          )} ${validate_component(FormMarkdown, "FormMarkdown").$$render(
            $$result,
            {
              superform,
              label: events_description(),
              field: "description",
              class: "min-h-[10rem]",
              placeholder: events_description()
            },
            {},
            {}
          )}`;
        }
      }
    )} <div class="flex flex-row justify-between gap-4 self-stretch [&>*]:flex-1">${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        label: events_organizer(),
        field: "organizer"
      },
      {},
      {}
    )} ${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        label: events_location(),
        field: "location"
      },
      {},
      {}
    )} ${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        label: events_link(),
        field: "link"
      },
      {},
      {}
    )}</div> <div class="flex flex-row justify-between gap-4 self-stretch [&>*]:flex-1">${validate_component(FormDateInput, "FormDateInput").$$render(
      $$result,
      {
        superform,
        label: events_startTime(),
        placeholder: events_startTime(),
        field: "startDatetime"
      },
      {},
      {}
    )} ${validate_component(FormDateInput, "FormDateInput").$$render(
      $$result,
      {
        superform,
        label: events_endTime(),
        placeholder: events_endTime(),
        field: "endDatetime"
      },
      {},
      {}
    )}</div> ${validate_component(FormFileInput, "FormFileInput").$$render(
      $$result,
      {
        superform,
        field: "image",
        label: "Bild",
        accept: "image/*"
      },
      {},
      {}
    )} ${validate_component(FormInput, "FormInput").$$render(
      $$result,
      {
        superform,
        field: "imageUrl",
        label: "Bild (url)",
        accept: "image/*"
      },
      {},
      {}
    )} ${validate_component(FormCheckbox, "FormCheckbox").$$render(
      $$result,
      {
        superform,
        field: "alarmActive",
        label: events_create_alarmActive()
      },
      {},
      {}
    )} ${validate_component(FormCheckbox, "FormCheckbox").$$render(
      $$result,
      {
        superform,
        field: "isRecurring",
        disabled: !creating,
        label: events_recurringEvent()
      },
      {},
      {}
    )} ${$form.isRecurring ? `<div class="flex flex-row justify-between gap-4 [&>*]:flex-1">${validate_component(FormSelect, "FormSelect").$$render(
      $$result,
      {
        fullWidth: true,
        options: Object.entries(recurringTypes).map((type) => ({ label: type[1], value: type[0] })),
        superform,
        field: "recurringType",
        label: events_create_howOften(),
        disabled: !creating
      },
      {},
      {}
    )} ${validate_component(FormDateInput, "FormDateInput").$$render(
      $$result,
      {
        superform,
        label: events_create_lastDate(),
        field: "recurringEndDatetime",
        disabled: !creating,
        onlyDate: true
      },
      {},
      {}
    )}</div>` : ``} ${validate_component(FormCheckbox, "FormCheckbox").$$render(
      $$result,
      {
        superform,
        field: "isCancelled",
        label: events_cancelEvent()
      },
      {},
      {}
    )} <div class="flex w-full flex-col items-stretch">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        for: "tags",
        label: events_tags(),
        error: $errors.tags?._errors?.join(", ")
      },
      {},
      {}
    )} ${validate_component(TagSelector, "TagSelector").$$render(
      $$result,
      {
        name: "tags",
        allTags,
        selectedTags: $form.tags
      },
      {
        selectedTags: ($$value) => {
          $form.tags = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${slots["form-end"] ? slots["form-end"]({}) : ``} ${recurringParentId !== null && !creating ? `<button type="button" class="btn btn-primary my-4" title="Radera">${escape(save())}</button>` : `<div class="my-4 flex items-center">${validate_component(FormSubmitButton, "FormSubmitButton").$$render(
      $$result,
      {
        superform,
        class: "btn btn-primary h-full"
      },
      {},
      {
        default: () => {
          return `${escape(creating ? news_publish() : save())}`;
        }
      }
    )} ${$form.isCancelled ? `<div role="alert" class="alert alert-warning ml-4"><span class="i-mdi-alert-outline size-6"></span> <span>${escape(events_cancellingAlert())}</span></div>` : ``}</div>`} <dialog class="modal"${add_attribute("this", modal, 0)}><div class="modal-box"><h3 class="text-lg font-bold">${escape(events_thisIsRecurring())}</h3> <div class="py-4"><div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_onlyEditThis()}<!-- HTML_TAG_END --></span> <input type="radio" name="editType" class="radio"${add_attribute("value", "THIS", 0)}${"THIS" === $form.editType ? add_attribute("checked", true, 1) : ""}></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_editThisAndFuture()}<!-- HTML_TAG_END --></span> <input type="radio" name="editType" class="radio"${add_attribute("value", "FUTURE", 0)}${"FUTURE" === $form.editType ? add_attribute("checked", true, 1) : ""}></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text"> <!-- HTML_TAG_START -->${events_editAll()}<!-- HTML_TAG_END --></span> <input type="radio" name="editType" class="radio"${add_attribute("value", "ALL", 0)}${"ALL" === $form.editType ? add_attribute("checked", true, 1) : ""}></label></div></div> ${validate_component(FormSubmitButton, "FormSubmitButton").$$render($$result, { superform, class: "btn btn-primary my-4" }, {}, {
      default: () => {
        return `${escape(creating ? news_publish() : save())}`;
      }
    })}</div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-17592y8"><button>close</button></form></dialog></form> ${slots.error ? slots.error({}) : ``}</section> <section><span class="italic">${escape(events_create_preview())}</span> ${validate_component(Event, "Event").$$render(
      $$result,
      {
        event: {
          ...$form,
          title: activeTab === "en" && $form.titleEn ? $form.titleEn : $form.title,
          shortDescription: activeTab === "en" && $form.shortDescriptionEn ? $form.shortDescriptionEn : $form.shortDescription,
          description: activeTab === "en" && $form.descriptionEn ? $form.descriptionEn : $form.description,
          imageUrl: $form.image ? URL.createObjectURL($form.image) : $form.imageUrl ?? null
        }
      },
      {},
      {
        tags: () => {
          return `<div slot="tags" class="flex flex-row flex-wrap gap-2">${each($form.tags, (selectedTag) => {
            let tag = allTags.find((t) => t.id === selectedTag.id);
            return ` ${validate_component(TagChip, "TagChip").$$render($$result, { tag }, {}, {})}`;
          })}</div>`;
        }
      }
    )}</section></main>`;
  } while (!$$settled);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  return $$rendered;
});

export { EventEditor as E };
//# sourceMappingURL=EventEditor-_z5_8T97.js.map
