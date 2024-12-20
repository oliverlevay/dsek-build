import { e as error } from './index-BHX467Gw.js';
import { s as searchForMembers } from './membersSearch-BcnsAe50.js';

const GET = async ({ locals, url }) => {
  const { prisma } = locals;
  const search = url.searchParams.get("search")?.toLowerCase();
  if (search == void 0 || search.length === 0) {
    throw error(400, "you need to provide a search value");
  }
  return new Response(JSON.stringify(await searchForMembers(prisma, search)));
};

export { GET };
//# sourceMappingURL=_server.ts-Cgpnx6Xs.js.map
