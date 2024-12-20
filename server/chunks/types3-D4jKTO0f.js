var NotificationType = /* @__PURE__ */ ((NotificationType2) => {
  NotificationType2["NEWS_LIKE"] = "NEWS_LIKE";
  NotificationType2["EVENT_LIKE"] = "EVENT_LIKE";
  NotificationType2["COMMENT"] = "COMMENT";
  NotificationType2["EVENT_COMMENT"] = "EVENT_COMMENT";
  NotificationType2["ARTICLE_REQUEST_UPDATE"] = "ARTICLE_REQUEST_UPDATE";
  NotificationType2["MENTION"] = "MENTION";
  NotificationType2["NEW_ARTICLE"] = "NEW_ARTICLE";
  NotificationType2["EVENT_GOING"] = "EVENT_GOING";
  NotificationType2["EVENT_INTERESTED"] = "EVENT_INTERESTED";
  NotificationType2["CREATE_MANDATE"] = "CREATE_MANDATE";
  NotificationType2["BOOKING_REQUEST"] = "BOOKING_REQUEST";
  NotificationType2["PING"] = "PING";
  NotificationType2["PAYMENT_STATUS"] = "PAYMENT_STATUS";
  NotificationType2["PURCHASE_TIME_TO_BUY"] = "PURCHASE_TIME_TO_BUY";
  NotificationType2["PURCHASE_IN_QUEUE"] = "PURCHASE_IN_QUEUE";
  NotificationType2["PURCHASE_CONSUMABLE_EXPIRED"] = "PURCHASE_CONSUMABLE_EXPIRED";
  NotificationType2["PURCHASE_SOLD_OUT"] = "PURCHASE_SOLD_OUT";
  return NotificationType2;
})(NotificationType || {});
var NotificationSettingType = /* @__PURE__ */ ((NotificationSettingType2) => {
  NotificationSettingType2["LIKE"] = "LIKE";
  NotificationSettingType2["COMMENT"] = "COMMENT";
  NotificationSettingType2["MENTION"] = "MENTION";
  NotificationSettingType2["NEW_ARTICLE"] = "NEW_ARTICLE";
  NotificationSettingType2["EVENT_GOING"] = "EVENT_GOING";
  NotificationSettingType2["CREATE_MANDATE"] = "CREATE_MANDATE";
  NotificationSettingType2["BOOKING_REQUEST"] = "BOOKING_REQUEST";
  NotificationSettingType2["PING"] = "PING";
  NotificationSettingType2["PURCHASES"] = "PURCHASES";
  return NotificationSettingType2;
})(NotificationSettingType || {});
const SHOULD_MERGE_NOTIFICATIONS = {
  [
    "NEWS_LIKE"
    /* NEWS_LIKE */
  ]: true,
  [
    "EVENT_LIKE"
    /* EVENT_LIKE */
  ]: true,
  [
    "COMMENT"
    /* COMMENT */
  ]: false,
  [
    "EVENT_COMMENT"
    /* EVENT_COMMENT */
  ]: false,
  [
    "ARTICLE_REQUEST_UPDATE"
    /* ARTICLE_REQUEST_UPDATE */
  ]: false,
  [
    "MENTION"
    /* MENTION */
  ]: true,
  [
    "NEW_ARTICLE"
    /* NEW_ARTICLE */
  ]: false,
  [
    "EVENT_GOING"
    /* EVENT_GOING */
  ]: true,
  [
    "EVENT_INTERESTED"
    /* EVENT_INTERESTED */
  ]: true,
  [
    "CREATE_MANDATE"
    /* CREATE_MANDATE */
  ]: false,
  [
    "BOOKING_REQUEST"
    /* BOOKING_REQUEST */
  ]: false,
  [
    "PING"
    /* PING */
  ]: true,
  [
    "PAYMENT_STATUS"
    /* PAYMENT_STATUS */
  ]: false,
  [
    "PURCHASE_TIME_TO_BUY"
    /* PURCHASE_TIME_TO_BUY */
  ]: false,
  [
    "PURCHASE_IN_QUEUE"
    /* PURCHASE_IN_QUEUE */
  ]: false,
  [
    "PURCHASE_CONSUMABLE_EXPIRED"
    /* PURCHASE_CONSUMABLE_EXPIRED */
  ]: false,
  [
    "PURCHASE_SOLD_OUT"
    /* PURCHASE_SOLD_OUT */
  ]: false
};
const SUBSCRIPTION_SETTINGS_MAP = {
  [
    "LIKE"
    /* LIKE */
  ]: [
    "NEWS_LIKE",
    "EVENT_LIKE"
    /* EVENT_LIKE */
  ],
  [
    "COMMENT"
    /* COMMENT */
  ]: [
    "COMMENT",
    "EVENT_COMMENT",
    // I think using "COMMENT" for ARTICLE_REQUEST_UPDATE makes sense.
    // We don't want to overwhelm user with TOO many notification options, and I feel like
    // the same demographic want notifications for comments and approvements.
    "ARTICLE_REQUEST_UPDATE"
    /* ARTICLE_REQUEST_UPDATE */
  ],
  [
    "MENTION"
    /* MENTION */
  ]: [
    "MENTION"
    /* MENTION */
  ],
  [
    "NEW_ARTICLE"
    /* NEW_ARTICLE */
  ]: [
    "NEW_ARTICLE"
    /* NEW_ARTICLE */
  ],
  [
    "EVENT_GOING"
    /* EVENT_GOING */
  ]: [
    "EVENT_GOING",
    "EVENT_INTERESTED"
    /* EVENT_INTERESTED */
  ],
  [
    "CREATE_MANDATE"
    /* CREATE_MANDATE */
  ]: [
    "CREATE_MANDATE"
    /* CREATE_MANDATE */
  ],
  [
    "BOOKING_REQUEST"
    /* BOOKING_REQUEST */
  ]: [
    "BOOKING_REQUEST"
    /* BOOKING_REQUEST */
  ],
  [
    "PING"
    /* PING */
  ]: [
    "PING"
    /* PING */
  ],
  [
    "PURCHASES"
    /* PURCHASES */
  ]: [
    "PAYMENT_STATUS",
    "PURCHASE_TIME_TO_BUY",
    "PURCHASE_IN_QUEUE",
    "PURCHASE_CONSUMABLE_EXPIRED",
    "PURCHASE_SOLD_OUT"
    /* PURCHASE_SOLD_OUT */
  ]
};
const DEFAULT_SUBSCRIPTION_SETTINGS = [
  {
    type: "LIKE",
    pushNotification: false
  },
  {
    type: "COMMENT",
    pushNotification: true
  },
  {
    type: "MENTION",
    pushNotification: true
  },
  {
    type: "NEW_ARTICLE",
    pushNotification: true
  },
  {
    type: "CREATE_MANDATE",
    pushNotification: true
  },
  {
    type: "BOOKING_REQUEST",
    pushNotification: true
  },
  {
    type: "PING",
    pushNotification: false
  },
  {
    type: "PURCHASES",
    pushNotification: true
  }
  // PURCHASES, NEW_ARTICLE ([NOLLNING] tagg), MENTION, kanse PING (icke-push)
];
const NOLLA_DEFAULT_SUBSCRIPTION_SETTINGS = [
  {
    type: "MENTION",
    pushNotification: false
  },
  {
    type: "NEW_ARTICLE",
    pushNotification: true
  },
  {
    type: "PING",
    pushNotification: false
  },
  {
    type: "PURCHASES",
    pushNotification: true
  }
];

export { DEFAULT_SUBSCRIPTION_SETTINGS as D, NotificationSettingType as N, SUBSCRIPTION_SETTINGS_MAP as S, NotificationType as a, NOLLA_DEFAULT_SUBSCRIPTION_SETTINGS as b, SHOULD_MERGE_NOTIFICATIONS as c };
//# sourceMappingURL=types3-D4jKTO0f.js.map
