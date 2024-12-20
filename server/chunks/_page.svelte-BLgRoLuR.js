import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape, s as spread, g as escape_attribute_value, d as escape_object, a as add_attribute } from './ssr-BoMjCg5r.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { a as fileProxy } from './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { n as zodClient } from './superValidate-C2lU2J3v.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { p as page } from './stores-ClpLLrvc.js';
import { fa as documents_uploadDocument, fb as documents_writePositionName, fc as documents_writeMeetingName, fd as documents_meetingDocument, fe as documents_meetingDocumentBlurb, ff as documents_theStudyCouncil, fg as documents_theStudyCouncilBlurb, bP as documents_requirementProfiles, fh as documents_requirementProfilesBlurb, fi as documents_chooseDocumentType, dS as documents_uploadFile, fj as documents_enterDocumentName, fk as documents_pickMeetingYear, fl as documents_upload } from './messages-D8OfyZiq.js';
import { u as uploadSchema, t as typeToPath } from './60-dQp1rbtF.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import 'tailwind-merge';
import './index2-Bcb5RUHj.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import './index-CuABlRvJ.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './runtime-BxW51cRH.js';
import './client3-CIDcnctW.js';
import './uploadFiles-C03MzR76.js';
import './fileHandler-BJyM8X80.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import 'path';
import 'sharp';
import './utils2-CdAbGRJv.js';
import './pageTitle-Dw7hiKEr.js';

const DocumentTypeSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { type } = $$props;
  type = $page.url.searchParams.get("type") ?? "meeting";
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  $$unsubscribe_page();
  return `<ul class="xyz flex flex-wrap gap-4"><li class="flex-1"><input type="radio" id="meeting" name="type" value="meeting" class="peer hidden"${"meeting" === type ? add_attribute("checked", true, 1) : ""}> <label for="meeting" class="flex cursor-pointer rounded-lg border border-base-content/20 p-5 peer-checked:border-primary peer-checked:bg-primary/10"><div class="flex gap-4"><span class="i-mdi-document self-center text-2xl"></span> <div><p class="text-lg font-semibold">${escape(documents_meetingDocument())}</p> <p class="text-gray-400">${escape(documents_meetingDocumentBlurb())}</p></div></div></label></li> <li class="flex-1"><input type="radio" id="srd" name="type" value="srd" class="peer hidden"${"srd" === type ? add_attribute("checked", true, 1) : ""}> <label for="srd" class="flex cursor-pointer rounded-lg border border-base-content/20 p-5 peer-checked:border-primary peer-checked:bg-primary/10"><div class="flex gap-4"><span class="i-mdi-account-student self-center text-2xl"></span> <div><p class="text-lg font-semibold">${escape(documents_theStudyCouncil())}</p> <p class="text-gray-400">${escape(documents_theStudyCouncilBlurb())}</p></div></div></label></li> <li class="flex-1"><input type="radio" id="requirement" name="type" value="requirement" class="peer hidden"${"requirement" === type ? add_attribute("checked", true, 1) : ""}> <label for="requirement" class="flex cursor-pointer rounded-lg border border-base-content/20 p-5 peer-checked:border-primary peer-checked:bg-primary/10"><div class="flex gap-4"><span class="i-mdi-format-list-bulleted-type self-center text-2xl"></span> <div><p class="text-lg font-semibold">${escape(documents_requirementProfiles())}</p> <p class="text-gray-400">${escape(documents_requirementProfilesBlurb())}</p></div></div></label></li></ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pathInfo;
  let fileErrors;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $$unsubscribe_file;
  let { data } = $$props;
  const { form, constraints, errors, enhance } = superForm(data.form, {
    onResult: (event) => {
      if (event.result.type === "success") {
        fileInput.value = "";
      }
    },
    resetForm: false,
    validators: zodClient(uploadSchema)
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const file = fileProxy(form, "file");
  $$unsubscribe_file = subscribe(file, (value) => value);
  let fileInput;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    pathInfo = typeToPath[$form.type];
    fileErrors = $errors.file;
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: documents_uploadDocument() }, {}, {})} <form id="upload-file" class="form-control items-stretch gap-4" method="POST" enctype="multipart/form-data"><div><p class="mb-5 text-lg font-medium">1. ${escape(documents_chooseDocumentType())}</p> ${validate_component(DocumentTypeSelector, "DocumentTypeSelector").$$render(
      $$result,
      { type: $form.type },
      {
        type: ($$value) => {
          $form.type = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Labeled, "Labeled").$$render($$result, { error: $errors.folder }, {}, {
      default: () => {
        return `<label class="mb-5 text-lg font-medium" for="folder">2. ${escape($form.type === "requirement" ? documents_writePositionName() : documents_writeMeetingName())}</label> <input${spread(
          [
            { id: "folder" },
            { name: "folder" },
            { class: "input input-bordered" },
            { type: "text" },
            {
              placeholder: escape_attribute_value($form.type === "requirement" ? "Øverphøs, Aktivitetsanssvarig..." : "S18, HTM1, VTM-extra...")
            },
            escape_object($constraints.folder)
          ],
          {}
        )}${add_attribute("value", $form.folder, 0)}>`;
      }
    })} ${validate_component(Labeled, "Labeled").$$render($$result, { error: fileErrors }, {}, {
      default: () => {
        return `<label class="mb-5 text-lg font-medium" for="file">3. ${escape(documents_uploadFile())}</label> <input${spread(
          [
            { id: "file" },
            { type: "file" },
            { name: "file" },
            { class: "file-input file-input-bordered" },
            escape_object($constraints.file)
          ],
          {}
        )}>`;
      }
    })} ${validate_component(Labeled, "Labeled").$$render($$result, { error: $errors.name }, {}, {
      default: () => {
        return `<label class="mb-5 text-lg font-medium" for="name">4. ${escape(documents_enterDocumentName())}</label> <input${spread(
          [
            { id: "name" },
            { name: "name" },
            { class: "input input-bordered" },
            { type: "text" },
            { placeholder: "Namn" },
            escape_object($constraints.name)
          ],
          {}
        )}${add_attribute("value", $form.name, 0)}>`;
      }
    })} ${validate_component(Labeled, "Labeled").$$render($$result, { error: $errors.year }, {}, {
      default: () => {
        return `<label class="mb-5 text-lg font-medium" for="year">5. ${escape(documents_pickMeetingYear())}</label> <input${spread(
          [
            { id: "year" },
            { name: "year" },
            { class: "input input-bordered" },
            { type: "number" },
            escape_object($constraints.year)
          ],
          {}
        )}${add_attribute("value", $form.year, 0)}>`;
      }
    })} ${$form.type && $form.folder && $form.name ? `<pre class="input input-bordered input-disabled">${escape(pathInfo.bucket)}/${escape(pathInfo.path($form.year, $form.folder))}/${escape($form.name)}</pre>` : ``} <button type="submit" form="upload-file" class="btn btn-primary">${escape(documents_upload())}</button></form>`;
  } while (!$$settled);
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_file();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BLgRoLuR.js.map
