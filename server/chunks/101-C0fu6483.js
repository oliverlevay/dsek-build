import { r as redirect } from './redirect-A1ZqWr7F.js';
import { bi as songbook_songUpdated, bj as songbook_errors_missingID, bk as songbook_errors_invalidID, bl as songbook_songRemoved, bm as songbook_songRestored, bn as songbook_missingTitle, bo as songbook_missingLyrics, bp as songbook_missingCategory, bq as songbook_missingMelody } from './messages-D8OfyZiq.js';
import { f as fail, e as error } from './index-BHX467Gw.js';
import DOMPurify from 'isomorphic-dompurify';
import { s as superValidate, z as zod, k as setError } from './superValidate-C2lU2J3v.js';
import { u as updateSongSchema } from './schema-DJRhpSvH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';

const load = async () => {
  const form = await superValidate(zod(updateSongSchema));
  return { form };
};
const actions = {
  update: async (event) => {
    const { request, locals } = event;
    const { prisma } = locals;
    const formData = await request.formData();
    const form = await superValidate(formData, zod(updateSongSchema));
    if (!form.valid) return fail(400, { form });
    const data = form.data;
    if (data.title == null) {
      return setError(form, "title", songbook_missingTitle());
    }
    if (data.lyrics == null) {
      return setError(form, "lyrics", songbook_missingLyrics());
    }
    if (data.category == null) {
      return setError(form, "category", songbook_missingCategory());
    }
    if (data.melody == null) {
      return setError(form, "melody", songbook_missingMelody());
    }
    const updatedSong = await prisma.song.update({
      where: {
        id: data.id
      },
      data: {
        title: DOMPurify.sanitize(data.title.trim()),
        lyrics: DOMPurify.sanitize(data.lyrics.trim()),
        melody: data.melody.trim(),
        category: data.category.trim(),
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    throw redirect(
      encodeURI(`/songbook/${updatedSong.slug}`),
      {
        message: songbook_songUpdated(),
        type: "success"
      },
      event
    );
  },
  delete: async (event) => {
    const { locals, request } = event;
    const { prisma } = locals;
    const data = await request.formData();
    const id = data.get("id");
    if (id == null) {
      throw error(400, {
        message: songbook_errors_missingID()
      });
    }
    if (typeof id !== "string") {
      throw error(400, {
        message: songbook_errors_invalidID()
      });
    }
    const song = await prisma.song.update({
      where: {
        id
      },
      data: {
        deletedAt: /* @__PURE__ */ new Date()
      }
    });
    return redirect(
      encodeURI(`/songbook/${song.slug}`),
      {
        message: songbook_songRemoved(),
        type: "success"
      },
      event
    );
  },
  restore: async (event) => {
    const { locals, request } = event;
    const { prisma } = locals;
    const data = await request.formData();
    const id = data.get("id");
    if (id == null) {
      throw error(400, {
        message: songbook_errors_missingID()
      });
    }
    if (typeof id !== "string") {
      throw error(400, {
        message: songbook_errors_invalidID()
      });
    }
    const song = await prisma.song.update({
      where: {
        id
      },
      data: {
        deletedAt: null
      }
    });
    return redirect(
      encodeURI(`/songbook/${song.slug}`),
      {
        message: songbook_songRestored(),
        type: "success"
      },
      event
    );
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 101;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B4uwNuzH.js')).default;
const server_id = "src/routes/(app)/songbook/[slug]/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/101.CFBrQHL1.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Autocomplete.DdSuRofk.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/Input.B5KtvBzm.js","_app/immutable/chunks/Labeled.DSKh_Z0I.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/superForms.37TMp2uc.js","_app/immutable/chunks/toast.BUMyavxw.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.Bt-Xh7oU.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=101-C0fu6483.js.map
