import { w as documents_errors_erroneousFile, x as documents_fileUploaded } from './messages-D8OfyZiq.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, w as withFiles, j as message } from './superValidate-C2lU2J3v.js';
import { d as PUBLIC_BUCKETS_DOCUMENTS, P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { z } from './index-CuABlRvJ.js';
import { u as uploadFile } from './uploadFiles-C03MzR76.js';

const typeToPath = {
  meeting: {
    path: (year, folder) => `public/${year}/${folder}`,
    bucket: PUBLIC_BUCKETS_DOCUMENTS
  },
  srd: {
    path: (year, folder) => `public/srd/${year}/${folder}`,
    bucket: PUBLIC_BUCKETS_FILES
  },
  requirement: {
    path: (year, folder) => `public/kravprofiler/${year}/${folder}`,
    bucket: PUBLIC_BUCKETS_FILES
  }
};
const CURRENT_YEAR = (/* @__PURE__ */ new Date()).getFullYear();
const uploadSchema = z.object({
  type: z.enum(["meeting", "srd", "requirement"]).default("meeting"),
  folder: z.string().default(""),
  name: z.string().default(""),
  year: z.number().min(1962).max(CURRENT_YEAR + 1).default(CURRENT_YEAR),
  file: z.instanceof(File, { message: documents_errors_erroneousFile() })
});

const uploadDocumentsFile = async (user, data) => {
  const { folder, name, year, type, file } = data;
  const { path, bucket } = typeToPath[type];
  const prefix = path(year, folder);
  return uploadFile(user, file, prefix, bucket, name);
};
const load = async () => {
  const form = await superValidate(zod(uploadSchema));
  return { form };
};
const actions = {
  default: async ({ request, locals }) => {
    const { user } = locals;
    const form = await superValidate(request, zod(uploadSchema), {
      allowFiles: true
    });
    if (!form.valid) return fail(400, withFiles({ form }));
    try {
      await uploadDocumentsFile(user, form.data);
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
    form.data.name = "";
    return message(form, {
      message: documents_fileUploaded(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 60;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BLgRoLuR.js')).default;
const server_id = "src/routes/(app)/documents/upload/+page.server.ts";
const imports = ["_app/immutable/nodes/60.q9CLhpC5.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/zod.DUpHobOl.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/index.DXqQCM1T.js"];
const stylesheets = [];
const fonts = [];

var _60 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  component: component,
  fonts: fonts,
  imports: imports,
  index: index,
  server: _page_server_ts,
  server_id: server_id,
  stylesheets: stylesheets
});

export { _60 as _, typeToPath as t, uploadSchema as u };
//# sourceMappingURL=60-dQp1rbtF.js.map
