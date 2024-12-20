import { e as error } from './index-BHX467Gw.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';

const cache = /* @__PURE__ */ new Map();
const CACHE_CLEAR_INTERVAL = 7 * 24 * 60 * 60 * 1e3;
setInterval(() => {
  cache.clear();
}, CACHE_CLEAR_INTERVAL);
const uploadNotificationToken = async (user, token) => {
  if (!user?.memberId) {
    throw error(401, "Not logged in");
  }
  if (cache.get(token) == user.memberId) return;
  try {
    const existing = await authorizedPrismaClient.expoToken.findUnique({
      where: {
        expoToken: token,
        memberId: user.memberId
      }
    });
    if (existing) {
      cache.set(token, user.memberId);
      return;
    }
    await authorizedPrismaClient.expoToken.upsert({
      update: {
        memberId: user.memberId
      },
      where: {
        expoToken: token
      },
      create: {
        memberId: user.memberId,
        expoToken: token
      }
    });
    cache.set(token, user.memberId);
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw error(500, `Couldn't save token: ${e.message}`);
    }
    throw error(500, `Couldn't save token: ${e}`);
  }
};
const POST = async ({ locals, request }) => {
  const { user } = locals;
  const body = await request.json();
  if (!("notificationToken" in body)) {
    throw error(400, "Invalid body, missing notification token");
  }
  const token = body.notificationToken;
  await uploadNotificationToken(user, token);
  return new Response("Token saved");
};

export { POST };
//# sourceMappingURL=_server.ts-7gMlHW7G.js.map
