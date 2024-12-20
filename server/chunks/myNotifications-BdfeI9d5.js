import { g as groupNotifications } from './group-B2hVm-1l.js';

const getMyNotifications = (user, prisma) => {
  return prisma.notification.findMany({
    where: {
      memberId: user.memberId
    },
    orderBy: {
      createdAt: "desc"
      // latest first
    },
    include: {
      fromAuthor: {
        select: {
          id: true,
          type: true,
          member: {
            select: {
              firstName: true,
              nickname: true,
              lastName: true,
              picturePath: true
            }
          },
          mandate: {
            select: {
              position: {
                select: {
                  name: true
                }
              }
            }
          },
          customAuthor: {
            select: {
              name: true,
              imageUrl: true
            }
          }
        }
      }
    }
  });
};
const getMyGroupedNotifications = async (user, prisma) => {
  const myNotifications = await getMyNotifications(user, prisma);
  return groupNotifications(myNotifications);
};

export { getMyGroupedNotifications as g };
//# sourceMappingURL=myNotifications-BdfeI9d5.js.map
