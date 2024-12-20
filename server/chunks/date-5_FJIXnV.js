import { r as readable } from './index2-Bcb5RUHj.js';

const now = readable(/* @__PURE__ */ new Date(), (set) => {
  set(/* @__PURE__ */ new Date());
  const interval = setInterval(() => {
    set(/* @__PURE__ */ new Date());
  }, 1e3);
  return () => clearInterval(interval);
});

export { now as n };
//# sourceMappingURL=date-5_FJIXnV.js.map
