import { s as songbook_errors_songNotFound } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { c as canAccessDeletedSongs, g as getExistingCategories, a as getExistingMelodies, f as fixSongText } from './helpers-Cg7T54uV.js';
import { u as updateSongSchema } from './schema-DJRhpSvH.js';
import './runtime-BxW51cRH.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './apiNames-BaTM20TQ.js';

const load = async ({ locals, params }) => {
  const { prisma, user } = locals;
  const accessPolicies = user?.policies ?? [];
  const song = await prisma.song.findUnique({
    where: {
      slug: params.slug,
      deletedAt: canAccessDeletedSongs(accessPolicies) ? {} : null
    }
  });
  if (song == null) {
    throw error(404, {
      message: songbook_errors_songNotFound()
    });
  }
  const [existingCategories, existingMelodies] = await Promise.all([
    getExistingCategories(
      prisma,
      accessPolicies,
      canAccessDeletedSongs(accessPolicies)
    ),
    getExistingMelodies(
      prisma,
      accessPolicies,
      canAccessDeletedSongs(accessPolicies)
    )
  ]);
  const form = await superValidate(song, zod(updateSongSchema));
  return {
    song: {
      ...song,
      title: fixSongText(song.title),
      lyrics: fixSongText(song.lyrics)
    },
    updateForm: form,
    existingCategories,
    existingMelodies
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 21;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-DSZi2gix.js')).default;
const server_id = "src/routes/(app)/songbook/[slug]/+layout.server.ts";
const imports = ["_app/immutable/nodes/21.Bv1hflUC.js","_app/immutable/chunks/21.eyQct81Z.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=21-CFkopNu5.js.map
