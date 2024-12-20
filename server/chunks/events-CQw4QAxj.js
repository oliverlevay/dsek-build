import { N as NOLLNING_TAG_PREFIX } from './types2-CXiSJ5rH.js';

const BASIC_EVENT_FILTER = (showNollningEventsInstead = false) => ({
  tags: showNollningEventsInstead !== null ? showNollningEventsInstead ? {
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
  } : void 0,
  OR: [{ removedAt: { gt: /* @__PURE__ */ new Date() } }, { removedAt: null }]
});

export { BASIC_EVENT_FILTER as B };
//# sourceMappingURL=events-CQw4QAxj.js.map
