import { d as PUBLIC_BUCKETS_DOCUMENTS, P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { J as documents_unknown, K as documents_errors_noFiles, y as documents_fileDeleted } from './messages-D8OfyZiq.js';
import './shared-server-BfUoNEXY.js';
import 'minio';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import 'path';
import './constants-BTUpIS8C.js';
import './runtime-BxW51cRH.js';

const prefixByType = {
  "board-meeting": "S",
  "guild-meeting": "",
  "SRD-meeting": "Möte ",
  other: ""
};
const load = async ({ locals, url }) => {
  const { user } = locals;
  const year = url.searchParams.get("year") || (/* @__PURE__ */ new Date()).getFullYear();
  const type = url.searchParams.get("type") || "board-meeting";
  const files = await fileHandler.getInBucket(
    user,
    PUBLIC_BUCKETS_DOCUMENTS,
    "public/" + year + "/" + (prefixByType[type] ?? ""),
    true
  );
  const SRDfiles = await fileHandler.getInBucket(
    user,
    PUBLIC_BUCKETS_FILES,
    "public/srd/" + year,
    true
  );
  if (!files) throw error(404, documents_errors_noFiles());
  let filteredFiles = files;
  const oldFormatSRDFiles = [];
  switch (type) {
    case "guild-meeting":
      filteredFiles = files.filter((file) => {
        const fileParts = file.id.split("/");
        const meeting = fileParts[fileParts.length - 2] ?? documents_unknown();
        return meeting.startsWith("HTM") || meeting.startsWith("VTM");
      });
      break;
    case "SRD-meeting":
      SRDfiles.forEach((file) => {
        const fileParts = file.id.split("/");
        const meeting = fileParts[fileParts.length - 2] ?? documents_unknown();
        if (meeting.startsWith("Möte")) {
          filteredFiles.push(file);
        } else {
          oldFormatSRDFiles.push(file);
        }
      });
      break;
    case "other":
      filteredFiles = files.filter((file) => {
        const fileParts = file.id.split("/");
        const meeting = fileParts[fileParts.length - 2] ?? documents_unknown();
        return !meeting.startsWith("HTM") && !meeting.startsWith("VTM") && !meeting.startsWith("S") && meeting != year;
      });
      break;
  }
  const oldSRDGroupedByMeeting = oldFormatSRDFiles.reduce((acc, file) => {
    const fileParts = file.id.split("/");
    const fileName = fileParts[fileParts.length - 1] ?? documents_unknown();
    const extensions = ["pdf", "html"];
    const fileExtension = extensions.find((ext) => fileName.endsWith(ext));
    const meeting = fileName.substring(
      0,
      fileName.length - (fileExtension ? fileExtension.length : 0)
    );
    if (!acc[meeting]) acc[meeting] = [];
    acc[meeting].push(file);
    return acc;
  }, {});
  const filesGroupedByMeeting = filteredFiles.reduce((acc, file) => {
    const fileParts = file.id.split("/");
    const meeting = fileParts[fileParts.length - 2] ?? documents_unknown();
    if (!acc[meeting]) acc[meeting] = [];
    acc[meeting].push(file);
    return acc;
  }, oldSRDGroupedByMeeting);
  return {
    files,
    meetings: filesGroupedByMeeting,
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

const index = 55;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BSCkji2I.js')).default;
const server_id = "src/routes/(app)/documents/+page.server.ts";
const imports = ["_app/immutable/nodes/55.BiwgEmDS.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/servePdf.DVfB6ULO.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/FileLink.Bn_2gEpu.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=55-C2HNWlSJ.js.map
