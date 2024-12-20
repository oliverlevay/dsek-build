import { e as error } from './index-BHX467Gw.js';
import { s as searchForMembers } from './membersSearch-BcnsAe50.js';
import { a as phadderMandateFilter } from './types-jvq07wik.js';
import './index-CuABlRvJ.js';

const GET = async ({ locals, url }) => {
  const { prisma } = locals;
  const search = url.searchParams.get("search")?.toLowerCase();
  const year = Number.parseInt(
    url.searchParams.get("year") ?? (/* @__PURE__ */ new Date()).getFullYear().toString()
  );
  if (search == void 0 || search.length === 0) {
    throw error(400, "you need to provide a search value");
  }
  if (Number.isNaN(year)) {
    throw error(400, "invalid year");
  }
  return new Response(
    JSON.stringify(
      await searchForMembers(prisma, search, {
        mandates: {
          some: phadderMandateFilter(year)
        }
      })
    )
  );
};

export { GET };
//# sourceMappingURL=_server.ts-DKpKmGOw.js.map
