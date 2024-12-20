import { P as PUBLIC_BUCKETS_FILES, d as PUBLIC_BUCKETS_DOCUMENTS } from './client3-CIDcnctW.js';
import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { J as documents_unknown, y as documents_fileDeleted } from './messages-D8OfyZiq.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import 'path';
import './runtime-BxW51cRH.js';
import './constants-BTUpIS8C.js';

const load = async ({ locals, url }) => {
  const { user } = locals;
  const year = url.searchParams.get("year") || (/* @__PURE__ */ new Date()).getFullYear();
  const files = await fileHandler.getInBucket(
    user,
    PUBLIC_BUCKETS_FILES,
    "public/kravprofiler/" + year,
    true
  );
  const filesGroupedByFolder = files.reduce(
    (acc, file) => {
      const fileParts = file.id.split("/");
      const folder = (
        //get the folder structure starting 2 "steps" in, we don't want the requirements/[year] part of the filepath
        fileParts.slice(2, fileParts.length - 1).join("/") ?? documents_unknown()
      );
      if (!acc[folder]) acc[folder] = [];
      acc[folder]?.push(file);
      return acc;
    },
    {}
  );
  return {
    files,
    folders: filesGroupedByFolder,
    deleteForm: await superValidate(zod(deleteSchema))
  };
};
const deleteSchema = z.object({
  id: z.string()
});
const actions = {
  deleteFile: async ({ request, locals }) => {
    const { user } = locals;
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, { form });
    const { id } = form.data;
    await fileHandler.remove(user, PUBLIC_BUCKETS_DOCUMENTS, [id]);
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

const index = 59;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B8YZ0Se2.js')).default;
const server_id = "src/routes/(app)/documents/requirements/+page.server.ts";
const imports = ["_app/immutable/nodes/59.Ds9_OLCA.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/servePdf.DVfB6ULO.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/FileLink.Bn_2gEpu.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=59-CTo8xaom.js.map
