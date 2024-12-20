import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const BACKUP_LIST_OF_STUDENT_IDS = [
  "ph3883ni-s",
  // KM, Philip Nielsen
  "es1767st-s"
  // root, Esbjörn Stenberg
];
function parseDoorPolicies(policies) {
  const studentIds = policies.map((policy) => policy.studentId).filter((id) => id !== null);
  const positionIds = policies.map((policy) => policy.role).filter((id) => id !== null);
  return { studentIds, positionIds };
}
function parseDoorBanPolicies(policies) {
  const studentIdsBanned = policies.filter((policy) => policy.isBan).map((policy) => policy.studentId).filter((id) => id !== null);
  const positionIdsBanned = policies.filter((policy) => policy.isBan).map((policy) => policy.role).filter((id) => id !== null);
  return { studentIdsBanned, positionIdsBanned };
}
function fetchMatchingPositions(positions, prisma) {
  return prisma.position.findMany({
    where: {
      OR: positions.map((p) => ({
        id: {
          startsWith: `${p}%`
        }
      }))
    }
  });
}
async function fetchStudentsWithPositions(positions, prisma) {
  const mandates = await prisma.mandate.findMany({
    where: {
      AND: [
        { positionId: { in: positions } },
        { startDate: { lte: /* @__PURE__ */ new Date() } },
        { endDate: { gte: /* @__PURE__ */ new Date() } }
      ]
    },
    select: {
      member: {
        select: {
          studentId: true
        }
      }
    }
  });
  const studentIds = mandates.map((mandate) => mandate.member.studentId);
  return studentIds.filter((id) => id !== null);
}
const GET = async ({ params }) => {
  try {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const policies = await authorizedPrismaClient.doorAccessPolicy.findMany({
      where: {
        AND: [
          { doorName: params["door"] },
          {
            OR: [{ startDatetime: { lte: now } }, { startDatetime: null }]
          },
          {
            OR: [{ endDatetime: { gte: now } }, { endDatetime: null }]
          }
        ]
      }
    });
    const { studentIds, positionIds } = parseDoorPolicies(policies);
    const { studentIdsBanned } = parseDoorBanPolicies(policies);
    const studentsFromWildcard = positionIds.includes("*") ? authorizedPrismaClient.member.findMany({
      where: { classYear: { gte: (/* @__PURE__ */ new Date()).getFullYear() - 10 } },
      select: { studentId: true }
    }).then(
      (members) => members.map((member) => member.studentId).filter((id) => id !== null)
    ) : [];
    const positions = await fetchMatchingPositions(
      positionIds,
      authorizedPrismaClient
    );
    const studentsFromPositions = await fetchStudentsWithPositions(
      positions.map((p) => p.id),
      authorizedPrismaClient
    );
    const bannedStudents = new Set(studentIdsBanned);
    const allowedStudents = [
      ...studentIds,
      ...studentsFromPositions,
      ...await studentsFromWildcard
    ].filter((studentId) => !bannedStudents.has(studentId));
    return new Response(
      Array.from([
        .../* @__PURE__ */ new Set([...allowedStudents, ...BACKUP_LIST_OF_STUDENT_IDS])
      ]).join("\n")
    );
  } catch {
    return new Response(BACKUP_LIST_OF_STUDENT_IDS.join("\n"));
  }
};

export { GET };
//# sourceMappingURL=_server.ts-SO5ZmMJz.js.map
