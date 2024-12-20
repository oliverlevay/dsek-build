import { P as PUBLIC_BUCKETS_FILES, g as getFileUrl } from './client3-CIDcnctW.js';
import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { u as uploadFile } from './uploadFiles-C03MzR76.js';
import { w as documents_errors_erroneousFile, x as documents_fileUploaded, y as documents_fileDeleted } from './messages-D8OfyZiq.js';
import './client-yexbOeKf.js';
import { s as superValidate, z as zod, l as fail, w as withFiles, j as message } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import { v4 } from 'uuid';
import { z } from './index-CuABlRvJ.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import 'path';
import 'sharp';
import './utils2-CdAbGRJv.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';
import './constants-BTUpIS8C.js';
import './index2-Bcb5RUHj.js';
import './lifecycle-DkuQBIPN.js';
import './stores-ClpLLrvc.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const MISCELLANEOUS_FILES_PREFIX = `public/miscellaneous`;
const load = async ({ locals }) => {
  const { user } = locals;
  const files = await fileHandler.getInBucket(
    user,
    PUBLIC_BUCKETS_FILES,
    MISCELLANEOUS_FILES_PREFIX,
    true
  );
  return {
    files,
    uploadForm: await superValidate(zod(uploadSchema)),
    deleteForm: await superValidate(zod(deleteSchema)),
    prefix: MISCELLANEOUS_FILES_PREFIX
  };
};
const uploadSchema = z.object({
  file: z.instanceof(File, { message: documents_errors_erroneousFile() }).refine((f) => f.size > 0, {
    message: documents_errors_erroneousFile()
  }),
  fileName: z.string().default(v4),
  fileUrl: z.string().url().nullable().default(null),
  prefix: z.string().default("/")
});
const deleteSchema = z.object({
  id: z.string()
});
const actions = {
  upload: async ({ locals, request }) => {
    const form = await superValidate(request, zod(uploadSchema), {
      allowFiles: true
    });
    if (!form.valid) return fail(400, withFiles({ form }));
    const { file, fileName, prefix } = form.data;
    const _prefix = `${MISCELLANEOUS_FILES_PREFIX}${prefix}`.replace("//", "/");
    try {
      const fileUrl = await uploadFile(
        locals.user,
        file,
        _prefix.endsWith("/") ? _prefix.slice(0, _prefix.length - 1) : _prefix,
        PUBLIC_BUCKETS_FILES,
        fileName,
        false
      );
      form.data.fileUrl = getFileUrl(fileUrl) ?? null;
    } catch (e) {
      return message(
        form,
        {
          message: e instanceof Error ? e.message : `${e}`,
          type: "error"
        },
        { status: 500 }
      );
    }
    form.data.file = null;
    form.data.fileName = "";
    return message(form, {
      message: documents_fileUploaded(),
      type: "success"
    });
  },
  delete: async ({ locals, request }) => {
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, form);
    const { id } = form.data;
    try {
      await fileHandler.remove(locals.user, PUBLIC_BUCKETS_FILES, [id]);
    } catch (e) {
      return message(
        form,
        {
          message: e instanceof Error ? e.message : `${e}`,
          type: "error"
        },
        { status: 500 }
      );
    }
    return message(form, {
      message: documents_fileDeleted(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 39;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B92l_0uT.js')).default;
const server_id = "src/routes/(app)/admin/minio/+page.server.ts";
const imports = ["_app/immutable/nodes/39.rCEKSLl1.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/FormFileInput.mN0v36sS.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/FormInput.DvRHd4up.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/FormSubmitButton.zmtSKK1O.js","_app/immutable/chunks/LoadingButton.CMLw8r2v.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=39-pM1LwWaq.js.map
