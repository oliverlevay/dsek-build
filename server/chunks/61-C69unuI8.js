const load = async ({ locals }) => {
  const { prisma } = locals;
  const openElections = await prisma.election.findMany({
    orderBy: [
      {
        expiresAt: "asc"
      }
    ],
    where: {
      expiresAt: {
        gte: /* @__PURE__ */ new Date()
      }
    },
    select: {
      markdown: true,
      markdownEn: true,
      link: true,
      expiresAt: true,
      committee: true
    }
  });
  return {
    openElections
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 61;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-_2Ey2CX5.js')).default;
const server_id = "src/routes/(app)/elections/+page.server.ts";
const imports = ["_app/immutable/nodes/61.CtVacSrS.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/MarkdownBody.Dj9odoYq.js","_app/immutable/chunks/marked.esm.6slKoNNI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=61-C69unuI8.js.map
