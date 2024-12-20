import KcAdminClient from '@keycloak/keycloak-admin-client';
import { d as private_env } from './shared-server-BfUoNEXY.js';
import { e as error } from './index-BHX467Gw.js';

const enabled = private_env.KEYCLOAK_ENABLED === "true";
async function connect() {
  const kcAdminClient = new KcAdminClient({
    baseUrl: private_env.KEYCLOAK_ENDPOINT || "",
    realmName: "master"
  });
  await kcAdminClient.auth({
    username: private_env.KEYCLOAK_ADMIN_USERNAME || "",
    password: private_env.KEYCLOAK_ADMIN_PASSWORD || "",
    grantType: "password",
    clientId: "admin-cli"
  });
  kcAdminClient.setConfig({ realmName: "dsek" });
  return kcAdminClient;
}
async function _getUserId(client, username) {
  const response = await client.users.find({ username });
  if (response.length === 0) error(404, `${username} not found in Keycloak`);
  if (!response[0] || response.length !== 1)
    error(400, `${username} returned ${response.length} users in Keycloak`);
  return response[0].id;
}
async function getUserId(username) {
  if (!enabled) return;
  const client = await connect();
  try {
    return await _getUserId(client, username);
  } catch (error2) {
    console.log(error2);
    return null;
  }
}
function getRoleNames(id) {
  const parts = id.split(".");
  return [...Array(parts.length).keys()].map(
    (i) => parts.slice(0, i + 1).join(".")
  );
}
async function getGroupId(client, positionId) {
  const roleNames = getRoleNames(positionId);
  const groups = await client.groups.find();
  let group = groups.find((g) => g.name === roleNames[0]);
  roleNames.slice(1).forEach((name) => {
    group = group?.subGroups?.find((g) => g.name === name);
  });
  if (!group) {
    throw new Error(`Failed to find group for position ${positionId}`);
  }
  return group?.id;
}
async function updateProfile(username, firstName, lastName) {
  if (!enabled) return;
  try {
    const client = await connect();
    const id = await _getUserId(client, username);
    await client.users.update(
      { id },
      {
        firstName,
        lastName
      }
    );
    console.log(`updated profile`);
  } catch (error2) {
    console.log(error2);
  }
}
async function addMandate(username, positionId) {
  if (!enabled) return;
  try {
    const client = await connect();
    const id = await _getUserId(client, username);
    const groupId = await getGroupId(client, positionId);
    await client.users.addToGroup({
      id,
      groupId
    });
  } catch (error2) {
    console.log(error2);
  }
}
async function deleteMandate(username, positionId) {
  if (!enabled) return;
  try {
    const client = await connect();
    const id = await _getUserId(client, username);
    const groupId = await getGroupId(client, positionId);
    await client.users.delFromGroup({
      id,
      groupId
    });
  } catch (error2) {
    console.log(error2);
  }
}
async function updateMandate(prisma) {
  if (!enabled) return;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const lastKeycloakUpdateResult = await prisma.lastKeycloakUpdate.findMany({
    take: 1,
    orderBy: [
      {
        id: "desc"
      }
    ],
    select: {
      time: true
    }
  });
  const last = lastKeycloakUpdateResult[0]?.time ?? "1982-12-31T00:00:00.000Z";
  const result = await prisma.mandate.findMany({
    where: {
      endDate: {
        lte: now,
        gte: last
      }
    },
    select: {
      positionId: true,
      member: {
        select: {
          studentId: true
        }
      }
    }
  });
  console.log(
    `[${(/* @__PURE__ */ new Date()).toISOString()}] updating ${result.length} users groups`
  );
  result.forEach(async ({ positionId, member: { studentId } }) => {
    await deleteMandate(studentId, positionId);
  });
  await prisma.lastKeycloakUpdate.create({
    data: {
      time: now
    }
  });
}
async function updateEmails(prisma) {
  if (!enabled) return;
  const currentUserEmail = (await prisma.member.findMany({
    select: {
      studentId: true,
      email: true
    },
    distinct: ["studentId"]
  })).reduce((acc, curr) => {
    if (curr.studentId) acc.set(curr.studentId, curr.email);
    return acc;
  }, /* @__PURE__ */ new Map());
  if (currentUserEmail.size === 0) {
    console.log(
      `[${(/* @__PURE__ */ new Date()).toISOString()}] email sync aborted, no users in database`
    );
    return;
  }
  const userEmails = await getManyUserEmails(currentUserEmail);
  console.log(
    `[${(/* @__PURE__ */ new Date()).toISOString()}] updating ${userEmails.size} emails`
  );
  for (const [studentId, email] of userEmails) {
    try {
      await prisma.member.update({
        where: {
          studentId
        },
        data: {
          email
        }
      });
    } catch (error2) {
      console.log("Failed to update email for", studentId, email);
      console.log(error2);
    }
  }
}
async function getManyUserEmails(currentUserEmail) {
  if (!enabled) return /* @__PURE__ */ new Map();
  const client = await connect();
  const userEmails = /* @__PURE__ */ new Map();
  const users = [];
  do {
    users.push(...await client.users.find({ max: 500, first: users.length }));
  } while (users.length % 500 === 0);
  users.forEach((user) => {
    const { username, email } = user;
    if (!username || !email) return;
    if (currentUserEmail.has(username) && // if the user exists in our database
    currentUserEmail.get(username) !== user.email) {
      userEmails.set(username, email);
    }
  });
  return userEmails;
}
async function hasUsername(username) {
  if (!enabled) return false;
  const client = await connect();
  const user = await client.users.find({ username });
  return user.filter((u) => u.username === username).length > 0;
}
async function hasEmail(email) {
  if (!enabled) return false;
  const client = await connect();
  const user = await client.users.find({ email });
  return user.filter((u) => u.email === email).length > 0;
}
async function getEmail(username) {
  if (!enabled) return;
  const client = await connect();
  const user = await client.users.find({ username });
  if (user.length === 1) return user[0]?.email;
}
async function sync(prisma) {
  updateMandate(prisma);
  updateEmails(prisma);
}
const keycloak = {
  updateProfile,
  addMandate,
  deleteMandate,
  getUserId,
  getManyUserEmails,
  hasUsername,
  hasEmail,
  getEmail,
  sync
};

export { keycloak as k };
//# sourceMappingURL=index5-CNIn8XSJ.js.map
