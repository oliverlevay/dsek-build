import { e as error } from './index-BHX467Gw.js';
import { Z as members_errors_notLoggedIn } from './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const allowedProgrammes = ["D", "C", "VR/AR"];
const load = async (request) => {
  const { prisma, user } = request.locals;
  if (!user?.memberId) {
    error(401, members_errors_notLoggedIn());
  }
  let classProgramme = request.url.searchParams.get("programme");
  if (!classProgramme || !allowedProgrammes.includes(classProgramme)) {
    classProgramme = "all";
  }
  let classYear = parseInt(request.url.searchParams.get("year") ?? "");
  if (isNaN(classYear)) {
    classYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  const members = await prisma.member.findMany({
    where: {
      classYear,
      classProgramme: classProgramme === "all" ? {
        // dont actually show ALL members in db, only those in the specified programmes
        // we have some members for other programmes, but they are not part of the guild
        in: allowedProgrammes
      } : {
        equals: classProgramme
      }
    },
    orderBy: [
      {
        firstName: "asc"
      },
      {
        lastName: "asc"
      },
      {
        classProgramme: "asc"
      }
    ]
  });
  return {
    members,
    programme: classProgramme,
    year: classYear
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 73;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BMVWE0Ym.js')).default;
const server_id = "src/routes/(app)/members/+page.server.ts";
const imports = ["_app/immutable/nodes/73.CXpL1rVw.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/redirect.D99U8wwi.js","_app/immutable/chunks/i18n.Cv4-1ZiX.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/runtime.DTG1FAeQ.js","_app/immutable/chunks/index.DQfRr7yB.js","_app/immutable/chunks/ClassBadge.D_Ryvt6R.js","_app/immutable/chunks/Pagination.C3TH-bth.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=73-DclflUNl.js.map
