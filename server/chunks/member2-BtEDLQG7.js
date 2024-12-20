import { b as NOLLA_DEFAULT_SUBSCRIPTION_SETTINGS, D as DEFAULT_SUBSCRIPTION_SETTINGS } from './types3-D4jKTO0f.js';
import { e as error } from './index-BHX467Gw.js';
import { g as getDerivedRoles } from './authorization-DvGst16H.js';
import { i as isNollningPeriod } from './nollning-BGFMzAAg.js';
import { N as NOLLNING_TAG_PREFIX } from './types2-CXiSJ5rH.js';

const getCustomAuthorOptions = async (prisma, memberId) => {
  const activePositionIds = await prisma.position.findMany({
    select: {
      id: true
    },
    where: {
      mandates: {
        some: {
          startDate: {
            lte: /* @__PURE__ */ new Date()
          },
          endDate: {
            gte: /* @__PURE__ */ new Date()
          },
          memberId
        }
      }
    }
  }).then((positions) => positions.map((pos) => pos.id));
  return await prisma.customAuthor.findMany({
    where: {
      roles: {
        some: {
          role: {
            in: getDerivedRoles(activePositionIds, !!memberId)
          }
        }
      }
    }
  });
};
const getCurrentDoorPoliciesForMember = async (prisma, studentId) => {
  const memberPositionIds = await prisma.position.findMany({
    select: {
      id: true,
      name: true,
      boardMember: true
    },
    where: {
      mandates: {
        some: {
          member: {
            studentId
          },
          startDate: {
            lte: /* @__PURE__ */ new Date()
          },
          endDate: {
            gte: /* @__PURE__ */ new Date()
          }
        }
      }
    }
  }).catch(() => {
    throw error(500, "Could not fetch member positions");
  });
  const userDoorPolicies = await prisma.doorAccessPolicy.findMany({
    where: {
      AND: [
        { isBan: false },
        {
          // is active, or indefinite
          OR: [
            { startDatetime: null },
            { startDatetime: { lte: /* @__PURE__ */ new Date() } }
          ]
        },
        {
          // is active, or indefinite
          OR: [{ endDatetime: null }, { endDatetime: { gte: /* @__PURE__ */ new Date() } }]
        },
        {
          OR: [
            {
              studentId
              /* is for this user */
            },
            {
              // or is for a role this user has
              role: {
                in: getDerivedRoles(
                  memberPositionIds.map((pos) => pos.id),
                  true
                ).concat(
                  memberPositionIds.some((pos) => pos.boardMember) ? ["dsek.styr"] : []
                )
              }
            }
          ]
        }
      ]
    }
  }).catch(() => {
    throw error(500, "Could not fetch door access");
  });
  const doors = await prisma.door.findMany();
  const policiesByDoor = userDoorPolicies.reduce(
    (acc, policy) => {
      const role = policy.role ?? "Du";
      const duplicate = acc.find(
        (p) => p.name === policy.doorName && p.startDate === policy.startDatetime && p.endDate === policy.endDatetime
      );
      if (duplicate) {
        duplicate.roles.push(role);
        return acc;
      }
      acc.push({
        name: policy.doorName,
        verboseName: doors.find((door) => door.name == policy.doorName)?.verboseName,
        roles: [role],
        startDate: policy.startDatetime,
        endDate: policy.endDatetime
      });
      return acc;
    },
    []
  );
  const memberDoorPolicies = policiesByDoor.map(
    (policy) => {
      const positionsMappedToThisDoor = memberPositionIds.filter(
        (pos) => policy.roles.some(
          (role) => pos.id.startsWith(role) || pos.boardMember && role === "dsek.styr"
        )
      ).map((pos) => pos.name);
      positionsMappedToThisDoor.sort();
      return {
        ...policy,
        roles: positionsMappedToThisDoor.length > 0 ? positionsMappedToThisDoor : ["Du"]
      };
    }
  );
  memberDoorPolicies.sort((a, b) => a.name.localeCompare(b.name));
  return memberDoorPolicies;
};
const createMember = async (prisma, data) => {
  if (await isNollningPeriod()) {
    const defaultTag = await prisma.tag.findFirst({
      where: {
        name: {
          startsWith: NOLLNING_TAG_PREFIX
        }
      }
    });
    return await prisma.member.create({
      data: {
        ...data,
        subscriptionSettings: {
          createMany: {
            data: NOLLA_DEFAULT_SUBSCRIPTION_SETTINGS
          }
        },
        subscribedTags: {
          connect: defaultTag ? { id: defaultTag.id } : void 0
        }
      }
    });
  }
  const defaultTags = await prisma.tag.findMany({
    where: {
      isDefault: true
    }
  });
  return await prisma.member.create({
    data: {
      ...data,
      subscriptionSettings: {
        createMany: {
          data: DEFAULT_SUBSCRIPTION_SETTINGS
        }
      },
      subscribedTags: {
        connect: defaultTags.map((tag) => ({ id: tag.id }))
      }
    }
  });
};

export { getCustomAuthorOptions as a, createMember as c, getCurrentDoorPoliciesForMember as g };
//# sourceMappingURL=member2-BtEDLQG7.js.map
