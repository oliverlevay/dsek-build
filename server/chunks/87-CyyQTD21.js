const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const search = data.get("input");
    if (typeof search !== "string") return;
    const response = await event.fetch(
      "/api/members?" + new URLSearchParams({ search })
    );
    const users = await response.json();
    return { users };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 87;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BXVFbVM-.js')).default;
const server_id = "src/routes/(app)/search/+page.server.ts";
const imports = ["_app/immutable/nodes/87.D282DkjX.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/index.OECaLbXR.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=87-CyyQTD21.js.map
