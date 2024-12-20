import { p as parseSemester, d as dateToSemester, m as medalRecipients } from './medals-DM-PEtvm.js';
import './runtime-BxW51cRH.js';
import './messages-D8OfyZiq.js';

const load = async ({ locals, url }) => {
  const { prisma } = locals;
  const semester = parseSemester(url.searchParams.get("semester") ?? "") || dateToSemester(/* @__PURE__ */ new Date());
  const recipients = await medalRecipients(prisma, semester);
  return {
    recipients
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 72;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DGIvNAKs.js')).default;
const server_id = "src/routes/(app)/medals/+page.server.ts";
const imports = ["_app/immutable/nodes/72.qpeiwbMT.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/apiNames.G3FqMHey.js","_app/immutable/chunks/authorization.BfNSR1Nc.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/semesters.ADq63Rzt.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=72-DG_A96CY.js.map
