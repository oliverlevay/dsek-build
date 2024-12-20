import { c as canAccessDeletedSongs, g as getExistingCategories } from './helpers-Cg7T54uV.js';
import './apiNames-BaTM20TQ.js';

const SONGS_PER_PAGE = 10;
const load = async ({ locals, url }) => {
  const { prisma, user } = locals;
  const page = url.searchParams.get("page");
  const search = url.searchParams.get("search");
  const categories = url.searchParams.getAll("category");
  const accessPolicies = user?.policies ?? [];
  const showDeleted = canAccessDeletedSongs(accessPolicies) && url.searchParams.get("show-deleted") === "true";
  let where = search ? {
    OR: [
      {
        title: {
          contains: search,
          mode: "insensitive"
        }
      },
      {
        lyrics: {
          contains: search,
          mode: "insensitive"
        }
      },
      {
        category: {
          contains: search,
          mode: "insensitive"
        }
      },
      {
        melody: {
          contains: search,
          mode: "insensitive"
        }
      }
    ]
  } : {};
  if (categories.length > 0) {
    where = {
      AND: [
        where,
        {
          OR: categories.map((category) => ({
            category: {
              contains: category,
              mode: "insensitive"
            }
          }))
        }
      ]
    };
  }
  where = {
    AND: [
      where,
      {
        // If the user can access deleted songs, show them if the user wants to
        // Otherwise, don't show deleted songs
        deletedAt: showDeleted ? { not: null } : null
      }
    ]
  };
  const [songs, pageCount, existingCategories] = await Promise.all([
    prisma.song.findMany({
      take: SONGS_PER_PAGE,
      skip: page ? Math.max((Number.parseInt(page) - 1) * SONGS_PER_PAGE, 0) : 0,
      orderBy: { title: "asc" },
      where
    }),
    prisma.song.count({ where }),
    getExistingCategories(prisma, accessPolicies, showDeleted)
  ]);
  const categoryMap = {};
  for (const category of existingCategories) {
    const split = category.split(" ");
    let id;
    if (split) {
      if (split[0] == "SåS") {
        id = split.slice(0, 2).join(" ");
      } else {
        id = split ? split[0] : void 0;
      }
    } else {
      id = void 0;
    }
    if (id) {
      if (categoryMap[id]) {
        categoryMap[id] = id;
      } else {
        categoryMap[id] = category ?? id;
      }
    }
  }
  return {
    songs,
    pageCount: Math.max(Math.ceil(pageCount / SONGS_PER_PAGE), 1),
    categories,
    categoryMap,
    params: url.searchParams.toString()
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 99;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-krCy0ZFD.js')).default;
const server_id = "src/routes/(app)/songbook/+page.server.ts";
const imports = ["_app/immutable/nodes/99.B5j7xDsl.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/SearchBar.D5otZFyl.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/SongElement.m9wBhzD4.js","_app/immutable/chunks/messages.DZzIl59o.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=99-B1KEhaIP.js.map
