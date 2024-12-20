import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, s as spread, d as escape_object, b as escape } from './ssr-BoMjCg5r.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import 'tailwind-merge';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './SetPageTitle-BsdTdMHP.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let $submitting, $$unsubscribe_submitting;
  let { data } = $$props;
  const { form, errors, constraints, enhance, submitting } = superForm(data.form, { resetForm: true });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  $$unsubscribe_submitting = subscribe(submitting, (value) => $submitting = value);
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(PageHeader, "PageHeader").$$render($$result, { title: "Yrka på ett sektionsmöte" }, {}, {})} <form method="POST" class="form-control gap-4">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { label: "Yrkandetitel" },
        { name: "title" },
        { placeholder: "Toapaus" },
        {
          explanation: "Detta är för att hjälpa talmannen i sin inkorg"
        },
        { error: $errors.title },
        $constraints.title,
        { value: $form.title }
      ),
      {
        value: ($$value) => {
          $form.title = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: "Ditt yrkande",
        error: $errors.content
      },
      {},
      {
        default: () => {
          return `<textarea${spread(
            [
              { id: "content" },
              { name: "content" },
              {
                class: "textarea textarea-bordered min-h-[12rem] pt-8"
              },
              {
                placeholder: "att ta en 5 minuter toapaus"
              },
              escape_object($constraints.content)
            ],
            {}
          )}>${escape($form.content || "")}</textarea> <span class="absolute left-4 top-12 text-sm italic opacity-50" data-svelte-h="svelte-1f0uaga">Jag yrkar på:</span>`;
        }
      }
    )} <button type="submit" class="btn btn-outline btn-primary self-start">${$submitting ? `<span class="loading"></span>` : `Skicka`}</button></form>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_submitting();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B7lCzVfm.js.map
