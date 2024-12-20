import { g as getAuthorName } from './member-DajX-teH.js';
import { c as SHOULD_MERGE_NOTIFICATIONS, a as NotificationType } from './types3-D4jKTO0f.js';

function groupAuthorNames(group) {
  const authors = group.authors;
  const authorCount = authors.length;
  if (authorCount == 0) return "Någon";
  const firstAuthor = authors[0];
  if (!firstAuthor) return `${authorCount} personer`;
  const firstAuthorName = getAuthorName(firstAuthor);
  if (authorCount === 1) return getAuthorName(firstAuthor);
  const secondAuthor = authors[1];
  if (!secondAuthor) return `${firstAuthorName} och ${authorCount - 1} andra`;
  const secondAuthorName = getAuthorName(secondAuthor);
  if (authorCount === 2) return `${firstAuthorName} och ${secondAuthorName}`;
  if (authorCount > 3)
    return `${firstAuthorName}, ${secondAuthorName} och ${authorCount - 2} andra`;
  const thirdAuthor = authors[2];
  if (!thirdAuthor)
    return `${firstAuthorName}, ${secondAuthorName} och ${authorCount - 2} andra`;
  const thirdAuthorName = getAuthorName(secondAuthor);
  return `${firstAuthorName}, ${secondAuthorName} och ${thirdAuthorName}`;
}
const getGroupTexts = (group) => {
  const type = group.type;
  switch (type) {
    case NotificationType.NEWS_LIKE:
      return {
        title: group.title,
        // is the article header
        message: `${groupAuthorNames(group)} har gillat din nyhet`
      };
    case NotificationType.EVENT_LIKE:
      return {
        title: group.title,
        // is the event title
        message: `${groupAuthorNames(group)} har gillat ditt evenemang`
      };
    case NotificationType.COMMENT:
      return {
        title: group.title,
        // is the article header
        message: `${groupAuthorNames(group)} har kommentaret`
      };
    case NotificationType.EVENT_COMMENT:
      return {
        title: group.title,
        // is the event title
        message: `${groupAuthorNames(group)} har kommentaret`
      };
    case NotificationType.MENTION:
      return {
        title: `${groupAuthorNames(group)} har nämnt dig i kommentarer`,
        message: group.message
        // is the content of the last comment
      };
    case NotificationType.EVENT_GOING:
      return {
        title: group.title,
        // title of the event
        message: `${groupAuthorNames(group)} kommer`
      };
    case NotificationType.EVENT_INTERESTED:
      return {
        title: group.title,
        // title of the event
        message: `${groupAuthorNames(group)} är intresserade`
      };
    case NotificationType.PING:
      return {
        title: group.title,
        // says PING!
        message: `${groupAuthorNames(group)} har pingat dig`
      };
    default:
      throw new Error(
        `Tried to group notification type which has no group handleer "${type}"`
      );
  }
};
const convertSingleToGroup = (notification) => ({
  ...notification,
  authors: notification.fromAuthor ? [notification.fromAuthor] : [],
  individualIds: [notification.id]
});
const convertToGroup = (notifications) => {
  if (notifications.length === 0) throw new Error("Empty group");
  const authors = notifications.map((n) => n.fromAuthor).filter(Boolean);
  const uniqueAuthors = authors.length > 1 ? authors.filter(
    (author, index) => authors.findIndex((other) => other.id === author.id) === index
  ) : authors;
  return {
    ...notifications[0],
    readAt: notifications.some((n) => n.readAt === null) ? null : notifications[0].readAt,
    authors: uniqueAuthors,
    individualIds: notifications.map((n) => n.id)
  };
};
const mergeNotifications = (notifications) => {
  if (notifications.length === 1)
    return convertSingleToGroup(notifications[0]);
  const mostRecentNotification = notifications[0];
  const type = mostRecentNotification.type;
  if (!(type in SHOULD_MERGE_NOTIFICATIONS))
    throw new Error(`unknown notification type: ${type}`);
  if (!SHOULD_MERGE_NOTIFICATIONS[type])
    return notifications.map(convertSingleToGroup);
  const group = convertToGroup(notifications);
  const texts = getGroupTexts(group);
  group.title = texts.title;
  group.message = texts.message;
  return group;
};
const sortNotificationGroups = (groups) => {
  groups.sort((a, b) => b.createdAt.valueOf() - a.createdAt.valueOf());
  return groups;
};
const groupNotifications = (notifications) => {
  const groups = {};
  for (const notification of notifications) {
    const key = `${notification.type};${notification.link}`;
    if (groups[key] === void 0) {
      groups[key] = [];
    }
    groups[key]?.push(notification);
  }
  const groupList = Object.values(groups).flatMap(
    (group) => mergeNotifications(group)
  );
  return sortNotificationGroups(groupList);
};

export { groupNotifications as g };
//# sourceMappingURL=group-B2hVm-1l.js.map
