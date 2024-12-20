import { N as NOLLNING_TAG_PREFIX } from './types2-CXiSJ5rH.js';

const getAllTags = (prisma, includeNollningTag = false) => prisma.tag.findMany({
  orderBy: { name: "asc" },
  where: includeNollningTag ? void 0 : {
    NOT: {
      name: {
        startsWith: NOLLNING_TAG_PREFIX
      }
    }
  }
});

export { getAllTags as g };
//# sourceMappingURL=tags-SHR1oaXg.js.map
