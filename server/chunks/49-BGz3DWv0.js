const load = async ({ locals }) => {
  const { prisma } = locals;
  const committees = await prisma.committee.findMany({
    include: {
      positions: {
        select: {
          mandates: {
            where: {
              startDate: {
                lte: /* @__PURE__ */ new Date()
              },
              endDate: {
                gte: /* @__PURE__ */ new Date()
              }
            },
            select: {
              memberId: true
            }
          }
        },
        orderBy: {
          name: "asc"
        }
      }
    }
  });
  return {
    committees
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 49;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-VQeP2cXL.js')).default;
const server_id = "src/routes/(app)/committees/+page.server.ts";
const imports = ["_app/immutable/nodes/49.BLuj-yaY.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/CommitteeIcon.BPeKLDe6.js","_app/immutable/chunks/client.B-kH8QcR.js","_app/immutable/chunks/public.D6ikzIky.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=49-BGz3DWv0.js.map