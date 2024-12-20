import { a as apiNames } from './apiNames-BaTM20TQ.js';

async function getExistingCategories(prisma, accessPolicies = [], includeDeleted = false) {
  if (!accessPolicies.includes(apiNames.SONG.DELETE)) {
    includeDeleted = false;
  }
  const existingCategories = (await prisma.song.findMany({
    distinct: ["category"],
    orderBy: {
      category: "asc"
    },
    select: {
      category: true
    },
    where: includeDeleted ? {} : {
      deletedAt: null
    }
  })).reduce((acc, cur) => {
    if (cur.category !== null) {
      acc.push(cur.category);
    }
    return acc;
  }, []);
  return existingCategories;
}
async function getExistingMelodies(prisma, accessPolicies = [], includeDeleted = false) {
  if (!accessPolicies.includes(apiNames.SONG.DELETE)) {
    includeDeleted = false;
  }
  const existingMelodies = (await prisma.song.findMany({
    distinct: ["melody"],
    orderBy: {
      melody: "asc"
    },
    select: {
      melody: true
    },
    where: includeDeleted ? {} : {
      deletedAt: null
    }
  })).reduce((acc, cur) => {
    if (cur.melody !== null) {
      acc.push(cur.melody);
    }
    return acc;
  }, []);
  return existingMelodies;
}
function canAccessDeletedSongs(accessPolicies) {
  return accessPolicies.includes(apiNames.SONG.DELETE);
}
function fixSongText(s) {
  return s.replaceAll("---", "—").replaceAll("--", "–").replaceAll("||:", "𝄆").replaceAll(":||", "𝄇").replaceAll("|:", "𝄆").replaceAll(":|", "𝄇");
}

export { getExistingMelodies as a, canAccessDeletedSongs as c, fixSongText as f, getExistingCategories as g };
//# sourceMappingURL=helpers-Cg7T54uV.js.map
