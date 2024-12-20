const load = async ({ locals }) => {
  const { prisma } = locals;
  const phadderGroups = await prisma.phadderGroup.findMany({
    where: {
      year: 2024
    },
    include: {
      nollor: true,
      phaddrar: {
        include: {
          member: true
        }
      }
    },
    orderBy: {
      createdAt: "asc"
    }
  });
  return {
    phadderGroups
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 114;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BV98QQv9.js')).default;
const server_id = "src/routes/(nollning)/nollning/+page.server.ts";
const imports = ["_app/immutable/nodes/114.CyCEG1G6.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/MembersList.D_3QXvAN.js","_app/immutable/chunks/AuthorSignature.DMwuj1EW.js","_app/immutable/chunks/MemberImage.B2gosKIu.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/swirl.CmvtxJbZ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=114-D6mzkS5-.js.map
