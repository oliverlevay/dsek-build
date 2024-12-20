import { g as getAliasToPositions, a as getCurrentMembersForPosition, b as getEmailsForManyMembers } from './utils-CIEpN3SQ.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const GET = async ({ setHeaders }) => {
  const aliasToPosToUserEmails = /* @__PURE__ */ new Map();
  const posToAlias = await getAliasToPositions(
    authorizedPrismaClient
  );
  const positionIds = new Set(
    Array.from(posToAlias.values()).flatMap(
      (alist) => alist.map((a) => a.positionId)
    )
  );
  const positionIdsToMembers = /* @__PURE__ */ new Map();
  for (const posId of positionIds) {
    const members = await getCurrentMembersForPosition(
      posId,
      authorizedPrismaClient
    );
    positionIdsToMembers.set(posId, new Set(members));
  }
  const allMembersWithPos = [];
  for (const [, members] of positionIdsToMembers) {
    allMembersWithPos.push(...Array.from(members));
  }
  const userToEmail = await getEmailsForManyMembers(
    allMembersWithPos.map((m) => m.memberId),
    authorizedPrismaClient
  );
  for (const [alias, positions] of posToAlias) {
    const posMap = /* @__PURE__ */ new Map();
    for (const pos of positions) {
      const members = positionIdsToMembers.get(pos.positionId) ?? /* @__PURE__ */ new Set();
      const emails = Array.from(members).reduce((acc, cur) => {
        if (cur.studentId === null) {
          return acc;
        }
        const email = userToEmail.get(cur.studentId);
        if (email !== void 0) {
          acc.push(email);
        }
        return acc;
      }, []);
      posMap.set(pos.positionId, emails);
    }
    aliasToPosToUserEmails.set(alias, posMap);
  }
  const specialReceivers = (await authorizedPrismaClient.specialReceiver.findMany({
    orderBy: {
      email: "asc"
    }
  })).reduce((acc, cur) => {
    if (acc.has(cur.email)) {
      acc.get(cur.email)?.add(cur.targetEmail);
    } else {
      acc.set(cur.email, /* @__PURE__ */ new Set([cur.targetEmail]));
    }
    return acc;
  }, /* @__PURE__ */ new Map());
  let text = "";
  for (const [alias, positions] of aliasToPosToUserEmails) {
    text += `${alias.trim()} `;
    let shouldTrim = false;
    for (const [, userEmailsForPosition] of positions) {
      if (specialReceivers.has(alias)) {
        for (const target of specialReceivers.get(alias) ?? []) {
          text += `${target.trim()}, `;
          shouldTrim = true;
        }
        specialReceivers.delete(alias);
      }
      for (const userEmail of userEmailsForPosition) {
        text += `${userEmail.trim()}, `;
        shouldTrim = true;
      }
    }
    if (shouldTrim) text = text.slice(0, -2);
    text += "\n";
  }
  for (const [email, targets] of specialReceivers) {
    text += `${email.trim()} `;
    for (const target of targets) {
      text += `${target.trim()}, `;
    }
    if (targets.size > 0) text = text.slice(0, -2);
    text += "\n";
  }
  setHeaders({
    "Content-Type": "text/plain; charset=utf-8"
  });
  return new Response(text);
};

export { GET };
//# sourceMappingURL=_server.ts-D7VYs3X0.js.map
