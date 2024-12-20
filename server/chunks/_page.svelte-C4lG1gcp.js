import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, f as add_styles, b as escape, a as add_attribute, s as spread, d as escape_object, e as each } from './ssr-BoMjCg5r.js';
import { F as FormSelect } from './FormSelect-D5CeY-lk.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { p as programmes } from './schemas-CKip5ia7.js';
import { gY as onboarding, gZ as onboarding_firstName, g_ as onboarding_lastName, g$ as onboarding_email, h0 as onboarding_emailPlaceholder, h1 as onboarding_foodPreference, h2 as onboarding_foodPreferencePlaceholder, h3 as onboarding_programme, h4 as onboarding_year, gn as onboarding_phadderGroup, h5 as onboarding_welcome, h6 as onboarding_fillInInfoBelow, h7 as onboarding_save } from './messages-D8OfyZiq.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import { L as LanguageSwitcher } from './LanguageSwitcher-BznUutNv.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './superForm-DTXAq_ly.js';
import './index2-Bcb5RUHj.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './runtime-BxW51cRH.js';
import './paths-CYDIOyak.js';
import './exports-BGi7-Rnc.js';

const css = {
  code: ".hero-image.svelte-o24p2b{background-image:var(--url)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\nimport { getContext as pArAgLiDe_translate_attribute_pass_getContext } from 'svelte';\\nimport FormSelect from \\"$lib/components/forms/FormSelect.svelte\\";\\nimport Input from \\"$lib/components/Input.svelte\\";\\nimport Labeled from \\"$lib/components/Labeled.svelte\\";\\nimport SetPageTitle from \\"$lib/components/nav/SetPageTitle.svelte\\";\\nimport { superForm } from \\"$lib/utils/client/superForms\\";\\nimport { programmes } from \\"$lib/utils/programmes\\";\\nimport * as m from \\"$paraglide/messages\\";\\nimport { onMount } from \\"svelte\\";\\nimport { goto } from \\"$lib/utils/redirect\\";\\nimport { getFileUrl } from \\"$lib/files/client\\";\\nimport LanguageSwitcher from \\"../../LanguageSwitcher.svelte\\";\\nexport let data;\\nconst superform = superForm(data.form, {});\\nconst { form, errors, constraints, enhance } = superform;\\nonMount(() => {\\n  if (data.member && data.member.firstName && data.member.lastName && data.member.email && data.member.classProgramme && data.member.classYear) {\\n    goto(\\"/\\");\\n  }\\n});\\n\\nconst pArAgLiDe_translate_attribute_pass_context = pArAgLiDe_translate_attribute_pass_getContext('$paraglide-adapter-sveltekit:context');\\n    \\n        /**\\n         * @param {string} value\\n         * @param {string | undefined} lang_value\\n         */\\n        function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {\\nif(typeof value !== \\"string\\") return value;\\n            if(!pArAgLiDe_translate_attribute_pass_context) return value;\\n            return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);\\n        }\\n\\n        /**\\n         * @typedef {{ attribute_name: string, lang_attribute_name?: string }} AttributeTranslation\\n         */\\n\\n        /**\\n         * Takes in an object of attributes, and an object of attribute translations\\n         * & applies the translations to the attributes\\n         * \\n         * @param {Record<string, any>} attrs\\n         * @param {AttributeTranslation[]} attribute_translations\\n         */\\n        function pArAgLiDe_translate_attribute_pass_handle_attributes(attrs, attribute_translations) {\\n            //If the element has the data-no-translate attribute, don't translate it\\n            if(attrs[\\"data-no-translate\\"] === true) return attrs;\\n\\n            for (const { attribute_name, lang_attribute_name } of attribute_translations){\\n                if(attribute_name in attrs) {\\n                    const attr = attrs[attribute_name];\\n                    const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : undefined;\\n                    attrs[attribute_name] = pArAgLiDe_translate_attribute_pass_translateAttribute(attr, lang_attr);\\n                }\\n            }\\n\\n            return attrs;\\n        }\\n<\/script>\\n\\n<SetPageTitle title={m.onboarding()} />\\n\\n<div\\n  class=\\"hero-image min-h-screen bg-cover bg-center\\"\\n  style:--url=\\"url({getFileUrl(\\"minio/photos/public/assets/hero.jpg\\")})\\"\\n>\\n  <div class=\\"min-h-screen bg-cover py-16 md:bg-transparent\\">\\n    <div\\n      class=\\"mx-2 rounded-xl bg-base-200/35 p-4 backdrop-blur-xl md:mx-32 md:max-w-xl md:p-10\\"\\n    >\\n      <div class=\\"text-5xl font-bold\\">{m.onboarding_welcome()}</div>\\n      <div class=\\"text-lg\\">{m.onboarding_fillInInfoBelow()}</div>\\n\\n      <form\\n        id=\\"edit-member\\"\\n        method=\\"POST\\"\\n        action={pArAgLiDe_translate_attribute_pass_translateAttribute(\\n                                            \`?/update\`,\\n                                            undefined\\n                                        )}\\n        use:enhance\\n        class=\\"form-control gap-2\\"\\n      >\\n        <div class=\\"flex flex-wrap gap-2 [&>*]:min-w-32 [&>*]:flex-1\\">\\n          <Input\\n            name=\\"firstName\\"\\n            label={m.onboarding_firstName()}\\n            required={true}\\n            bind:value={$form.firstName}\\n            {...$constraints.firstName}\\n            error={$errors.firstName}\\n          />\\n          <Input\\n            name=\\"lastName\\"\\n            label={m.onboarding_lastName()}\\n            required={true}\\n            bind:value={$form.lastName}\\n            {...$constraints.lastName}\\n            error={$errors.lastName}\\n          />\\n        </div>\\n        <div class=\\"flex flex-col\\">\\n          <Input\\n            name=\\"email\\"\\n            label={m.onboarding_email()}\\n            placeholder={m.onboarding_emailPlaceholder()}\\n            bind:value={$form.email}\\n            class=\\"input-disabled\\"\\n            readonly\\n          />\\n        </div>\\n        <div class=\\"flex flex-col\\">\\n          <Input\\n            name=\\"pref\\"\\n            label={m.onboarding_foodPreference()}\\n            placeholder={m.onboarding_foodPreferencePlaceholder()}\\n            bind:value={$form.foodPreference}\\n            {...$constraints.foodPreference}\\n            error={$errors.foodPreference}\\n          />\\n        </div>\\n        <div class=\\"flex flex-wrap gap-2 [&>*]:min-w-32 [&>*]:flex-1\\">\\n          <Labeled\\n            label={m.onboarding_programme()}\\n            error={$errors.classProgramme}\\n          >\\n            <select\\n              id=\\"classProgramme\\"\\n              name=\\"classProgramme\\"\\n              class=\\"select select-bordered\\"\\n              required={true}\\n              bind:value={$form.classProgramme}\\n              {...$constraints.classProgramme}\\n            >\\n              {#each programmes as programme (programme.id)}\\n                <option value={programme.id}>{programme.name}</option>\\n              {/each}\\n            </select>\\n          </Labeled>\\n          <Labeled label={m.onboarding_year()} error={$errors.classYear}>\\n            <input\\n              type=\\"number\\"\\n              name=\\"classYear\\"\\n              id=\\"classYear\\"\\n              class=\\"input input-bordered\\"\\n              required={true}\\n              bind:value={$form.classYear}\\n              on:change={() => {\\n                $form.nollningGroupId = null;\\n              }}\\n              {...$constraints.classYear}\\n            />\\n          </Labeled>\\n          <FormSelect\\n            {superform}\\n            label={m.onboarding_phadderGroup()}\\n            field=\\"nollningGroupId\\"\\n            options={[\\n              {\\n                value: null,\\n                label: \\"-\\",\\n              },\\n              ...data.phadderGroups\\n                .filter(\\n                  (group) =>\\n                    group.year === ($form.classYear ?? new Date().getFullYear),\\n                )\\n                .map((group) => ({\\n                  value: group.id,\\n                  label: group.name,\\n                })),\\n            ]}\\n          />\\n        </div>\\n        <div class=\\"flex w-1/2 gap-2 pt-6\\">\\n          <button\\n            name=\\"save\\"\\n            type=\\"submit\\"\\n            class=\\"btn w-full bg-base-300 text-primary\\"\\n          >\\n            <span class=\\"i-mdi-floppy-disc size-5 bg-primary\\"></span>\\n            {m.onboarding_save()}\\n          </button>\\n\\n          <LanguageSwitcher />\\n        </div>\\n      </form>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .hero-image {\\n    background-image: var(--url);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiME,yBAAY,CACV,gBAAgB,CAAE,IAAI,KAAK,CAC7B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let { data } = $$props;
  const superform = superForm(data.form, {});
  const { form, errors, constraints, enhance } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: onboarding() }, {}, {})} <div class="hero-image min-h-screen bg-cover bg-center svelte-o24p2b"${add_styles({
      "--url": `url(${getFileUrl("minio/photos/public/assets/hero.jpg")})`
    })}><div class="min-h-screen bg-cover py-16 md:bg-transparent"><div class="mx-2 rounded-xl bg-base-200/35 p-4 backdrop-blur-xl md:mx-32 md:max-w-xl md:p-10"><div class="text-5xl font-bold">${escape(onboarding_welcome())}</div> <div class="text-lg">${escape(onboarding_fillInInfoBelow())}</div> <form id="edit-member" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} class="form-control gap-2"><div class="flex flex-wrap gap-2 [&>*]:min-w-32 [&>*]:flex-1">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "firstName" }, { label: onboarding_firstName() }, { required: true }, $constraints.firstName, { error: $errors.firstName }, { value: $form.firstName }),
      {
        value: ($$value) => {
          $form.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "lastName" }, { label: onboarding_lastName() }, { required: true }, $constraints.lastName, { error: $errors.lastName }, { value: $form.lastName }),
      {
        value: ($$value) => {
          $form.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-col">${validate_component(Input, "Input").$$render(
      $$result,
      {
        name: "email",
        label: onboarding_email(),
        placeholder: onboarding_emailPlaceholder(),
        class: "input-disabled",
        readonly: true,
        value: $form.email
      },
      {
        value: ($$value) => {
          $form.email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-col">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "pref" },
        { label: onboarding_foodPreference() },
        {
          placeholder: onboarding_foodPreferencePlaceholder()
        },
        $constraints.foodPreference,
        { error: $errors.foodPreference },
        { value: $form.foodPreference }
      ),
      {
        value: ($$value) => {
          $form.foodPreference = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-wrap gap-2 [&>*]:min-w-32 [&>*]:flex-1">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: onboarding_programme(),
        error: $errors.classProgramme
      },
      {},
      {
        default: () => {
          return `<select${spread(
            [
              { id: "classProgramme" },
              { name: "classProgramme" },
              { class: "select select-bordered" },
              { required: true },
              escape_object($constraints.classProgramme)
            ],
            { classes: "svelte-o24p2b" }
          )}>${each(programmes, (programme) => {
            return `<option${add_attribute("value", programme.id, 0)}>${escape(programme.name)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: onboarding_year(),
        error: $errors.classYear
      },
      {},
      {
        default: () => {
          return `<input${spread(
            [
              { type: "number" },
              { name: "classYear" },
              { id: "classYear" },
              { class: "input input-bordered" },
              { required: true },
              escape_object($constraints.classYear)
            ],
            { classes: "svelte-o24p2b" }
          )}${add_attribute("value", $form.classYear, 0)}>`;
        }
      }
    )} ${validate_component(FormSelect, "FormSelect").$$render(
      $$result,
      {
        superform,
        label: onboarding_phadderGroup(),
        field: "nollningGroupId",
        options: [
          { value: null, label: "-" },
          ...data.phadderGroups.filter((group) => group.year === ($form.classYear ?? (/* @__PURE__ */ new Date()).getFullYear)).map((group) => ({ value: group.id, label: group.name }))
        ]
      },
      {},
      {}
    )}</div> <div class="flex w-1/2 gap-2 pt-6"><button name="save" type="submit" class="btn w-full bg-base-300 text-primary"><span class="i-mdi-floppy-disc size-5 bg-primary"></span> ${escape(onboarding_save())}</button> ${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, {}, {}, {})}</div></form></div></div> </div>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C4lG1gcp.js.map
