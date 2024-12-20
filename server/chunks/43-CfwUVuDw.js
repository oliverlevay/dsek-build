import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { c as compareBoardPositions } from './sort-DAPXH13p.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const load = async ({ locals }) => {
  const { prisma, user } = locals;
  const boardPositions = await prisma.committee.findMany({
    where: {
      positions: {
        some: {
          active: true,
          boardMember: true
        }
      }
    },
    include: {
      positions: {
        where: {
          active: true,
          boardMember: true,
          NOT: void 0
        },
        include: {
          mandates: {
            where: {
              startDate: {
                lte: /* @__PURE__ */ new Date()
              },
              endDate: {
                gte: /* @__PURE__ */ new Date()
              },
              NOT: void 0
            },
            select: {
              memberId: true
            }
          }
        }
      }
    }
  });
  const boardMembers = await prisma.member.findMany({
    where: {
      id: {
        in: boardPositions.flatMap(
          (c) => c.positions.flatMap((p) => p.mandates.flatMap((m) => m.memberId))
        )
      }
    },
    include: {
      mandates: {
        where: {
          startDate: {
            lte: /* @__PURE__ */ new Date()
          },
          endDate: {
            gte: /* @__PURE__ */ new Date()
          },
          NOT: void 0,
          AND: {
            position: {
              active: true,
              boardMember: true
            }
          }
        },
        take: 1
      }
    }
  });
  const mergedBoardPositions = [];
  for (const boardPos of boardPositions.flatMap((c) => c.positions)) {
    const boardMember = boardMembers.find(
      (m) => m.mandates.some((mandate) => mandate.positionId === boardPos.id)
    );
    if (!boardMember) {
      mergedBoardPositions.push({
        studentId: null,
        position: boardPos,
        firstName: null,
        nickname: null,
        lastName: null,
        picturePath: null,
        classProgramme: null,
        classYear: null
      });
    } else {
      mergedBoardPositions.push({
        position: boardPos,
        ...boardMember
      });
    }
  }
  mergedBoardPositions.sort(
    (a, b) => compareBoardPositions(a.position.id, b.position.id)
  );
  if (!isAuthorized(apiNames.MEMBER.SEE_STABEN, user)) {
    return {
      boardPositions: mergedBoardPositions.filter(
        (bp) => !bp.position.id.startsWith("dsek.noll")
      )
    };
  }
  return {
    boardPositions: mergedBoardPositions
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 43;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-viI-oLJS.js')).default;
const server_id = "src/routes/(app)/board/+page.server.ts";
const imports = ["_app/immutable/nodes/43.DsS0fydT.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/PageHeader.C1QSjqnO.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/messages.DZzIl59o.js","_app/immutable/chunks/runtime.DTG1FAeQ.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=43-CfwUVuDw.js.map
