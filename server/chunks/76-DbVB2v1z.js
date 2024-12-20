import { e as PUBLIC_BUCKETS_MEMBERS } from './client3-CIDcnctW.js';
import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { aa as members_errors_invalidPicture, ab as members_errors_tooLargePicture, z as members_errors_couldntUploadFile, a3 as members_errors_memberNotFound, ac as members_pictureChanged, ad as members_pictureUploaded, ae as members_pictureRemoved } from './messages-D8OfyZiq.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import sharp from 'sharp';
import { s as superValidate, z as zod, j as message, w as withFiles } from './superValidate-C2lU2J3v.js';
import { v4 } from 'uuid';
import { z } from './index-CuABlRvJ.js';

const changeSchema = z.object({
  url: z.string().url()
});
const uploadSchema = z.object({
  image: z.instanceof(File, { message: members_errors_invalidPicture() }).refine((f) => f.size > 0, {
    message: members_errors_invalidPicture()
  }).refine(
    (f) => f.size < 8e6,
    members_errors_tooLargePicture({ size: "8MB" })
  ),
  cropWidth: z.number().min(0).default(0),
  cropHeight: z.number().min(0).default(0),
  cropX: z.number().min(0).default(0),
  cropY: z.number().min(0).default(0)
});
const deleteSchema = z.object({
  fileName: z.string()
});

const PROFILE_PICTURE_PREFIX = (studentId) => `public/${studentId}/profile-picture`;
const load = async ({ locals, params }) => {
  const { prisma } = locals;
  const member = await prisma.member.findUnique({
    where: {
      studentId: params.studentId
    }
  });
  if (!member) {
    throw error(404, members_errors_memberNotFound());
  }
  const photos = await fileHandler.getInBucket(
    locals.user,
    PUBLIC_BUCKETS_MEMBERS,
    PROFILE_PICTURE_PREFIX(params.studentId),
    true
  );
  return {
    member,
    photos,
    changeForm: await superValidate(zod(changeSchema)),
    uploadForm: await superValidate(zod(uploadSchema)),
    deleteForm: await superValidate(zod(deleteSchema))
  };
};
const actions = {
  change: async ({ params, locals, request }) => {
    const { prisma } = locals;
    const form = await superValidate(request, zod(changeSchema));
    if (!form.valid) return fail(400, { form });
    const studentId = params.studentId;
    await prisma.member.update({
      where: { studentId },
      data: {
        picturePath: form.data.url
      }
    });
    return message(form, {
      message: members_pictureChanged(),
      type: "success"
    });
  },
  upload: async ({ params, locals, request }) => {
    const formData = await request.formData();
    const form = await superValidate(formData, zod(uploadSchema), {
      allowFiles: true
    });
    if (!form.valid) return fail(400, withFiles({ form }));
    const { image } = form.data;
    const fileName = v4();
    try {
      const buffer = await sharp(await image.arrayBuffer()).rotate().extract({
        left: form.data.cropX,
        top: form.data.cropY,
        width: form.data.cropWidth,
        height: form.data.cropHeight
      }).resize(400, 400, {
        fit: "cover",
        withoutEnlargement: true
      }).webp().toBuffer();
      const putUrl = await fileHandler.getPresignedPutUrl(
        locals.user,
        PUBLIC_BUCKETS_MEMBERS,
        `${PROFILE_PICTURE_PREFIX(params.studentId)}/${fileName}.webp`
      );
      const res = await fetch(putUrl, {
        method: "PUT",
        body: buffer
      });
      if (!res.ok)
        return message(
          form,
          {
            message: `${members_errors_couldntUploadFile()}: ${await res.text()}`,
            type: "error"
          },
          { status: 500 }
        );
    } catch (e) {
      console.log(e);
      const errMsg = e instanceof Error ? e.message : String(e);
      return message(
        form,
        {
          message: `${members_errors_couldntUploadFile()}: ${errMsg}`,
          type: "error"
        },
        { status: 500 }
      );
    }
    return message(form, {
      message: members_pictureUploaded(),
      type: "success"
    });
  },
  delete: async ({ params, locals, request }) => {
    const form = await superValidate(request, zod(deleteSchema));
    if (!form.valid) return fail(400, { form });
    const fileName = form.data.fileName;
    await fileHandler.remove(locals.user, PUBLIC_BUCKETS_MEMBERS, [
      `${PROFILE_PICTURE_PREFIX(params.studentId)}/${fileName}`
    ]);
    return message(form, {
      message: members_pictureRemoved(),
      type: "success"
    });
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 76;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bm-BWuk1.js')).default;
const server_id = "src/routes/(app)/members/[studentId]/profile-picture/+page.server.ts";
const imports = ["_app/immutable/nodes/76.DnTluKz6.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/globals.D0QH3NT1.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/index.DXqQCM1T.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/zod.DUpHobOl.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js"];
const stylesheets = ["_app/immutable/assets/76.CdETDbFz.css"];
const fonts = [];

var _76 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  component: component,
  fonts: fonts,
  imports: imports,
  index: index,
  server: _page_server_ts,
  server_id: server_id,
  stylesheets: stylesheets
});

export { _76 as _, uploadSchema as u };
//# sourceMappingURL=76-DbVB2v1z.js.map
