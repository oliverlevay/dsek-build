import { d as private_env } from './shared-server-BfUoNEXY.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { i as isNollningPeriod } from './nollning-BGFMzAAg.js';
import '@keycloak/keycloak-admin-client';
import './index-BHX467Gw.js';
import '@prisma/client';

const load = async () => {
  return {
    isNollning: await isNollningPeriod(),
    prismaLogLevel: private_env.PRISMA_LOG_LEVEL
  };
};
const actions = {
  keycloakSync: async () => {
    keycloak.sync(authorizedPrismaClient);
  }
  // meilisearchSync,
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 33;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DWRFWTnJ.js')).default;
const server_id = "src/routes/(app)/admin/debug/+page.server.ts";
const imports = ["_app/immutable/nodes/33.dmZtcLiz.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/index.Bt-Xh7oU.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=33-bfEk_lXJ.js.map
