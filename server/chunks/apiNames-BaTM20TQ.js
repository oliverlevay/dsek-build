const crud = (base) => ({
  CREATE: `${base}:create`,
  READ: `${base}:read`,
  UPDATE: `${base}:update`,
  DELETE: `${base}:delete`
});
const apiNames = {
  ALERT: "alert",
  MEDALS: {
    MANAGE: "medals:manage"
  },
  NEWS: {
    ...crud("news:article"),
    MANAGE: "news:article:manage",
    LIKE: "news:article:like",
    COMMENT: "news:article:comment",
    COMMENT_DELETE: "news:article:comment:delete"
  },
  TAGS: {
    ...crud("tags")
  },
  EVENT: {
    ...crud("event"),
    COMMENT: "event:comment",
    COMMENT_DELETE: "event:comment:delete"
  },
  BOOKINGS: {
    ...crud("booking_request")
  },
  BOOKABLES: {
    ...crud("booking_request:bookable")
  },
  MANDATE: crud("core:mandate"),
  COMMITTEE: crud("core:committee"),
  POSITION: {
    ...crud("core:position"),
    SEE_INACTIVE: "core:position:inactive:read"
  },
  ADMIN: {
    READ: "core:access:admin:read",
    SETTINGS: crud("admin:settings"),
    SHLINK: crud("admin:shlink")
  },
  ACCESS_POLICY: crud("core:access:api"),
  EMAIL_ALIAS: crud("core:mail:alias"),
  FILES: {
    BUCKET: (name) => crud(`fileHandler:${name}`)
    // remove "dev-" prefix
  },
  MARKDOWNS: {
    ...crud("markdowns"),
    PAGE: (name) => crud(`markdowns:${name}`)
  },
  MEMBER: {
    ...crud("core:member"),
    SEE_STABEN: "member:see_staben",
    SEE_EMAIL: "member:see_email",
    PING: "core:member:ping"
  },
  GOVERNING_DOCUMENT: {
    CREATE: "governing_document:write",
    READ: "governing_document:read",
    UPDATE: "governing_document:write",
    DELETE: "governing_document:write"
  },
  DOOR: {
    ...crud("core:access:door")
  },
  YRKA: {
    SEND: "yrka:send"
  },
  SONG: {
    ...crud("song")
  },
  WEBSHOP: {
    PURCHASE: "webshop:purchase",
    CREATE: "webshop:create",
    READ_PURCHASES: "webshop:read_purchases",
    CONSUME: "webshop:consume",
    MANAGE: "webshop:manage"
  },
  NOLLNING: {
    MANAGE_PHADDER_GROUPS: "nollning:phaddrar:groups:manage"
  }
};

export { apiNames as a };
//# sourceMappingURL=apiNames-BaTM20TQ.js.map
