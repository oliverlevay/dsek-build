import { N as NOLLNING_TAG_PREFIX } from './types2-CXiSJ5rH.js';

const BASIC_ARTICLE_FILTER = (showNollningEventsInstead = false) => ({
  tags: showNollningEventsInstead ? {
    some: {
      name: {
        startsWith: NOLLNING_TAG_PREFIX
      }
    }
  } : {
    none: {
      name: {
        startsWith: NOLLNING_TAG_PREFIX
      }
    }
  },
  publishedAt: {
    lte: /* @__PURE__ */ new Date(),
    not: null
  },
  OR: [{ removedAt: { gt: /* @__PURE__ */ new Date() } }, { removedAt: null }]
});

export { BASIC_ARTICLE_FILTER as B };
//# sourceMappingURL=articles-Ot_X93Lk.js.map
