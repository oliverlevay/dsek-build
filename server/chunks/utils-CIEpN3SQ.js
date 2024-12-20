async function getAliasToPositions(prisma) {
  return (await prisma.emailAlias.findMany({
    include: {
      position: true
    },
    orderBy: {
      email: "asc"
    }
  })).reduce((acc, cur) => {
    if (!acc.has(cur.email)) {
      acc.set(cur.email, []);
    }
    acc.get(cur.email)?.push(cur);
    return acc;
  }, /* @__PURE__ */ new Map());
}
async function getCurrentMembersForPosition(positionId, prisma) {
  const now = /* @__PURE__ */ new Date();
  return prisma.mandate.findMany({
    where: {
      positionId,
      startDate: {
        lte: now
      },
      endDate: {
        gte: now
      }
    },
    select: {
      memberId: true,
      member: {
        select: {
          studentId: true
        }
      }
    }
  }).then(
    (mandates) => mandates.reduce((acc, cur) => {
      acc.push({
        studentId: cur.member.studentId,
        memberId: cur.memberId
      });
      return acc;
    }, [])
  );
}
async function getEmailsForManyMembers(memberIds, prisma) {
  return (await prisma.member.findMany({
    where: {
      id: {
        in: memberIds
      },
      studentId: {
        not: null
      }
    },
    select: {
      studentId: true,
      email: true
    }
  })).reduce((acc, cur) => {
    if (cur.studentId != null && cur.email != null) {
      acc.set(cur.studentId, cur.email);
    }
    return acc;
  }, /* @__PURE__ */ new Map());
}

export { getCurrentMembersForPosition as a, getEmailsForManyMembers as b, getAliasToPositions as g };
//# sourceMappingURL=utils-CIEpN3SQ.js.map
