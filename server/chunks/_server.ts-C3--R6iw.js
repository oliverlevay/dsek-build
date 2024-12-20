import { a as getCurrentMembersForPosition } from './utils-CIEpN3SQ.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const GET = async ({ setHeaders }) => {
  const emailAddresses = await getAllEmailAddresses(authorizedPrismaClient);
  const emailToSenders = await getAllAliasSenders(
    authorizedPrismaClient,
    emailAddresses
  );
  const output = [];
  for (const [emailAddress, senders] of Object.entries(emailToSenders)) {
    output.push(emailAddress + " " + senders.join(", "));
  }
  setHeaders({
    "Content-Type": "text/plain; charset=utf-8"
  });
  return new Response(output.join("\n"));
};
async function getAllEmailAddresses(prisma) {
  const aliases = await prisma.emailAlias.findMany({
    where: { canSend: true },
    orderBy: { email: "asc" }
  });
  const specialAliases = await prisma.specialSender.findMany({
    orderBy: { email: "asc" }
  });
  return { aliases, specialAliases };
}
async function getAllAliasSenders(prisma, { aliases, specialAliases }) {
  const res = {};
  for (const alias of aliases) {
    res[alias.email] ??= [];
    const studentIds = (await getCurrentMembersForPosition(alias.positionId, prisma)).map((member) => member.studentId).filter((id) => !!id);
    res[alias.email].push(...studentIds);
  }
  for (const specialAlias of specialAliases) {
    res[specialAlias.email] ??= [];
    res[specialAlias.email].push(specialAlias.studentId);
  }
  return res;
}

export { GET };
//# sourceMappingURL=_server.ts-C3--R6iw.js.map
