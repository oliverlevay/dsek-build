import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { e as error } from './index-BHX467Gw.js';
import { Expo } from 'expo-server-sdk';
import { a as NotificationType, S as SUBSCRIPTION_SETTINGS_MAP } from './types3-D4jKTO0f.js';

async function sendPushNotifications(tokens, title, body, type, link) {
  const expo = new Expo();
  const messages = tokens.filter(({ token }) => Expo.isExpoPushToken(token)).map(({ token, unreadNotifications }) => ({
    to: token,
    title,
    body,
    channelId: "default",
    data: { link },
    sound: "default",
    priority: "high",
    badge: unreadNotifications ?? 0
  }));
  if (messages.length === 0) {
    return;
  }
  const chunks = expo.chunkPushNotifications(messages);
  const results = await Promise.allSettled(
    chunks.map((chunk) => expo.sendPushNotificationsAsync(chunk))
  );
  const failedMessages = results.map((r, i) => [r, i]).filter(([result]) => result.status === "rejected").flatMap(([, i]) => chunks[i]).length;
  if (failedMessages) {
    console.error(`Failed to send ${failedMessages} push notifications`);
  }
  if (failedMessages === messages.length) {
    throw error(500, "Failed to send push notifications");
  }
}
const DUPLICATE_ALLOWED_TYPES = [
  NotificationType.CREATE_MANDATE,
  NotificationType.ARTICLE_REQUEST_UPDATE,
  NotificationType.BOOKING_REQUEST,
  NotificationType.PAYMENT_STATUS,
  NotificationType.PURCHASE_TIME_TO_BUY,
  NotificationType.PURCHASE_SOLD_OUT,
  NotificationType.PURCHASE_IN_QUEUE,
  NotificationType.PURCHASE_CONSUMABLE_EXPIRED,
  NotificationType.PAYMENT_STATUS
];
const prisma = authorizedPrismaClient;
const sendNotification = async ({
  title,
  message,
  type,
  link,
  memberIds,
  fromAuthor,
  fromMemberId
}) => {
  if ((memberIds?.length ?? 0) == 0) return;
  const settingType = Object.entries(
    SUBSCRIPTION_SETTINGS_MAP
  ).find(([, internalTypes]) => internalTypes.includes(type))?.[0] ?? type;
  const existingAuthor = fromAuthor ?? (fromMemberId ? await prisma.author.findFirst({
    where: { memberId: fromMemberId, mandateId: null, customId: null }
  }) : void 0);
  const notificationAuthor = existingAuthor ?? (fromMemberId ? await prisma.author.create({
    data: { memberId: fromMemberId }
  }) : void 0);
  const shouldReceiveDuplicates = DUPLICATE_ALLOWED_TYPES.includes(type);
  const receivingMembers = await prisma.member.findMany({
    where: {
      subscriptionSettings: {
        some: {
          type: settingType
        }
      },
      notifications: shouldReceiveDuplicates ? void 0 : {
        none: {
          type,
          link,
          fromAuthorId: notificationAuthor?.id
        }
      },
      id: {
        not: process.env["NODE_ENV"] === "development" ? void 0 : notificationAuthor?.memberId,
        ...memberIds !== void 0 && memberIds.length > 0 ? { in: memberIds } : {}
      }
    },
    select: {
      id: true,
      subscriptionSettings: {
        where: {
          type: settingType
        },
        select: {
          pushNotification: true
        }
      }
    }
  });
  if (receivingMembers.length < 1) {
    return;
  }
  console.log(
    `Sending ${type} notification to ${receivingMembers.length} members${notificationAuthor ? `, sent from author:${notificationAuthor.id} [${notificationAuthor.type}, member: ${notificationAuthor.memberId}]` : ""}`
  );
  if (title.length > 255) title = title.substring(0, 251) + "...";
  if (message.length > 255) message = message.substring(0, 251) + "...";
  try {
    await sendWeb(
      title,
      message,
      type,
      link,
      notificationAuthor,
      receivingMembers
    );
  } catch (e) {
    console.warn("Failed to create web notifications", e);
    throw error(500, "Failed to create notifications");
  }
  try {
    await sendPush(title, message, settingType, link, receivingMembers);
  } catch (e) {
    console.warn("Failed to create push notifications", e);
    throw error(500, "Failed to create push notifications");
  }
};
const sendWeb = async (title, message, type, link, notificationAuthor, receivingMembers) => {
  return prisma.notification.createMany({
    data: receivingMembers.map(({ id: memberId }) => ({
      title,
      message,
      type,
      link,
      memberId,
      fromAuthorId: notificationAuthor?.id
    }))
  });
};
const sendPush = async (title, message, type, link, receivingMembers) => {
  const pushNotificationMembers = receivingMembers.filter(
    (member) => member.subscriptionSettings.some(
      (settings) => settings.pushNotification
    )
  ).map((member) => member.id);
  const tokensAndUnreadNotificationCount = await prisma.expoToken.findMany({
    where: {
      memberId: {
        in: pushNotificationMembers
      }
    },
    select: {
      expoToken: true,
      member: {
        select: {
          _count: {
            select: {
              notifications: {
                where: {
                  readAt: null
                }
              }
            }
          }
        }
      }
    }
  });
  if (tokensAndUnreadNotificationCount.length > 0) {
    sendPushNotifications(
      tokensAndUnreadNotificationCount.map((token) => ({
        token: token.expoToken,
        unreadNotifications: token.member?._count.notifications
      })),
      title,
      message,
      type,
      link
    );
  }
};

export { sendNotification as s };
//# sourceMappingURL=index3-CPnAgoK8.js.map
