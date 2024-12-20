const NOLLNING_TAG_PREFIX = "[NOLLNING]";
const POST_REVEAL_PREFIX = "/nollning";
const REVEAL_LAUNCH_DATE = /* @__PURE__ */ new Date("2024-08-28T16:00:00");
const APP_PREFERRED_PAGE_COOKIE = "APP-preferred-page";
const OVERRIDEN_POST_REVEAL_ROUTES = [
  { from: "/shop/tickets", to: `${POST_REVEAL_PREFIX}/events` },
  { from: "/shop/cart" },
  { from: "/shop/inventory" },
  { from: "/shop/success" },
  { from: "/settings" }
];

export { APP_PREFERRED_PAGE_COOKIE as A, NOLLNING_TAG_PREFIX as N, OVERRIDEN_POST_REVEAL_ROUTES as O, POST_REVEAL_PREFIX as P, REVEAL_LAUNCH_DATE as R };
//# sourceMappingURL=types2-CXiSJ5rH.js.map
