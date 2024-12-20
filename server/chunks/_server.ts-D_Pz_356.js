import { g as getMyGroupedNotifications } from './myNotifications-BdfeI9d5.js';
import './group-B2hVm-1l.js';
import './member-DajX-teH.js';
import './types3-D4jKTO0f.js';

const GET = async ({ locals }) => {
  const { user, prisma } = locals;
  const groupedNotifications = getMyGroupedNotifications(user, prisma);
  return new Response(JSON.stringify(groupedNotifications));
};

export { GET };
//# sourceMappingURL=_server.ts-D_Pz_356.js.map
