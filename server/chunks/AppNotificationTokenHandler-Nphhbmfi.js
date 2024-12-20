import { b as subscribe, o as onDestroy, h as is_promise, n as noop, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, e as each, v as validate_component, b as escape } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import dayjs from 'dayjs';
import { C as CustomAuthorImage, M as MemberImage } from './MemberImage-CkXEWMZT.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { P as POST_REVEAL_PREFIX, O as OVERRIDEN_POST_REVEAL_ROUTES } from './types2-CXiSJ5rH.js';
import { c3 as navbar_bell_noNotifications, c4 as navbar_bell_markAllAsRead, c5 as navbar_bell_deleteAll } from './messages-D8OfyZiq.js';
import { twMerge } from 'tailwind-merge';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { t as toast } from './toast2-BAKD7V1C.js';

const LiveTimeSince = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let time;
  let { timeStamp } = $$props;
  let now = Date.now();
  if ($$props.timeStamp === void 0 && $$bindings.timeStamp && timeStamp !== void 0) $$bindings.timeStamp(timeStamp);
  time = dayjs(timeStamp).diff(dayjs(), "week") < -1 ? dayjs(timeStamp).format("YYYY-MM-DD") : dayjs(timeStamp).from(now);
  return `    ${escape(time)}`;
});
const DsekAvatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img${add_attribute("src", getFileUrl("https://raw.githubusercontent.com/Dsek-LTH/grafik/main/guild/d_sektionen/full/color.svg"), 0)} alt="D-guild logo">`;
});
const AuthorAvatars = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { authors } = $$props;
  if ($$props.authors === void 0 && $$bindings.authors && authors !== void 0) $$bindings.authors(authors);
  return `${authors.length <= 1 ? `<div class="avatar"><div class="w-12 rounded-full">${authors[0] === void 0 ? `${validate_component(DsekAvatar, "DsekAvatar").$$render($$result, {}, {}, {})}` : (() => {
    let author = authors[0];
    return ` ${authors[0]?.type === "Custom" ? `${validate_component(CustomAuthorImage, "CustomAuthorImage").$$render($$result, { customAuthor: author.customAuthor }, {}, {})}` : `${validate_component(MemberImage, "MemberImage").$$render($$result, { member: author.member }, {}, {})}`}`;
  })()}</div></div>` : `<div class="relative h-12 w-12"><div class="avatar absolute left-0 top-0"><div class="w-9 rounded-full">${authors[1]?.type === "Custom" ? `${validate_component(CustomAuthorImage, "CustomAuthorImage").$$render($$result, { customAuthor: authors[1]?.customAuthor }, {}, {})}` : `${validate_component(MemberImage, "MemberImage").$$render(
    $$result,
    {
      member: authors[1]?.member ?? { picturePath: null }
    },
    {},
    {}
  )}`}</div></div> <div class="avatar absolute left-3 top-3"><div class="w-9 rounded-full">${authors[0]?.type === "Custom" ? `${validate_component(CustomAuthorImage, "CustomAuthorImage").$$render($$result, { customAuthor: authors[0]?.customAuthor }, {}, {})}` : `${validate_component(MemberImage, "MemberImage").$$render(
    $$result,
    {
      member: authors[0]?.member ?? { picturePath: null }
    },
    {},
    {}
  )}`}</div></div></div>`}`;
});
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isUnread;
  let isPathSame;
  let authors;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { notification } = $$props;
  let { allowDelete = true } = $$props;
  let { onClick = void 0 } = $$props;
  let { onRead = void 0 } = $$props;
  let readForm;
  const readNotification = () => {
    console.log("reading notification");
    onRead?.();
  };
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0) $$bindings.notification(notification);
  if ($$props.allowDelete === void 0 && $$bindings.allowDelete && allowDelete !== void 0) $$bindings.allowDelete(allowDelete);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  if ($$props.onRead === void 0 && $$bindings.onRead && onRead !== void 0) $$bindings.onRead(onRead);
  isUnread = notification.readAt === null;
  isPathSame = i18n.route($page.url.pathname) === notification.link;
  {
    (() => {
      if (isUnread && isPathSame) {
        setTimeout(() => {
          readNotification();
        });
      }
    })();
  }
  authors = notification.authors.filter(Boolean);
  $$unsubscribe_page();
  return `<div class="relative flex w-full items-stretch rounded-none p-2"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/readNotifications`, void 0), 0)} class="hidden" aria-hidden="true"${add_attribute("this", readForm, 0)}>${notification.individualIds.length > 1 ? `${each(notification.individualIds, (id) => {
    return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
  })}` : `<input type="hidden" name="notificationId"${add_attribute("value", notification.id, 0)}>`}</form> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(notification.link, void 0), 0)} class="flex max-w-full flex-1 items-center gap-4 overflow-hidden"><div>${validate_component(AuthorAvatars, "AuthorAvatars").$$render($$result, { authors }, {}, {})}</div> <div class="${"flex h-full flex-1 flex-col flex-nowrap items-stretch justify-center " + escape(isUnread ? "font-medium" : "opacity-80", true)}"><span class="mt-1 line-clamp-1 text-base">${escape(notification.title)}</span> <span class="mb-1 line-clamp-2 text-ellipsis break-words text-xs">${escape(notification.message)}</span> <span class="line-clamp-1 text-xs text-gray-500">${validate_component(LiveTimeSince, "LiveTimeSince").$$render(
    $$result,
    {
      timeStamp: notification.createdAt.getTime()
    },
    {},
    {}
  )}</span></div></a> ${allowDelete ? ` <form class="flex items-stretch" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/deleteNotification`, void 0), 0)}>${notification.individualIds.length > 1 ? `${each(notification.individualIds, (id) => {
    return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
  })}` : `<input type="hidden" name="notificationId"${add_attribute("value", notification.id, 0)}>`} <button class="btn btn-ghost -mr-2 rounded-none !px-2 *:text-2xl" data-svelte-h="svelte-1syasgq"><span class="i-mdi-delete-outline mx-0 opacity-50"></span></button></form>` : ``}</div>`;
});
const PostRevealNotification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let link;
  let isUnread;
  let isPathSame;
  let authors;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const overrideLink = (link2) => {
    const routeIndex = OVERRIDEN_POST_REVEAL_ROUTES.findIndex((route) => link2.startsWith(route.from));
    if (routeIndex === -1) return link2;
    return OVERRIDEN_POST_REVEAL_ROUTES[routeIndex].to ?? `${POST_REVEAL_PREFIX}${OVERRIDEN_POST_REVEAL_ROUTES[routeIndex]?.from}`;
  };
  let { notification } = $$props;
  let { allowDelete = true } = $$props;
  let { onClick = void 0 } = $$props;
  let { onRead = void 0 } = $$props;
  let readForm;
  const readNotification = () => {
    onRead?.();
  };
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.notification === void 0 && $$bindings.notification && notification !== void 0) $$bindings.notification(notification);
  if ($$props.allowDelete === void 0 && $$bindings.allowDelete && allowDelete !== void 0) $$bindings.allowDelete(allowDelete);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0) $$bindings.onClick(onClick);
  if ($$props.onRead === void 0 && $$bindings.onRead && onRead !== void 0) $$bindings.onRead(onRead);
  link = overrideLink(notification.link);
  isUnread = notification.readAt === null;
  isPathSame = i18n.route($page.url.pathname) === link || link.startsWith("/news/") && i18n.route($page.url.pathname).startsWith(`${POST_REVEAL_PREFIX}/messages`);
  {
    (() => {
      if (isUnread && isPathSame) {
        setTimeout(() => {
          readNotification();
        });
      }
    })();
  }
  authors = notification.authors.filter(Boolean);
  $$unsubscribe_page();
  return `<div class="${[
    "relative flex w-full items-stretch rounded-none p-2",
    isUnread ? "bg-base-200" : ""
  ].join(" ").trim()}"><form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/readNotifications`, void 0), 0)} class="hidden" aria-hidden="true"${add_attribute("this", readForm, 0)}>${notification.individualIds.length > 1 ? `${each(notification.individualIds, (id) => {
    return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
  })}` : `<input type="hidden" name="notificationId"${add_attribute("value", notification.id, 0)}>`}</form> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(link, void 0), 0)} class="flex max-w-full flex-1 items-center gap-4 overflow-hidden"><div>${validate_component(AuthorAvatars, "AuthorAvatars").$$render($$result, { authors }, {}, {})}</div> <div class="flex h-full flex-1 flex-col flex-nowrap items-stretch justify-center"><span class="mt-1 line-clamp-1 text-base">${escape(notification.title)}</span> <span class="mb-1 line-clamp-2 text-ellipsis break-words text-xs text-neutral">${escape(notification.message)}</span> <span class="line-clamp-1 text-xs text-base-300">${validate_component(LiveTimeSince, "LiveTimeSince").$$render(
    $$result,
    {
      timeStamp: notification.createdAt.getTime()
    },
    {},
    {}
  )}</span></div></a> ${allowDelete ? ` <form class="flex items-stretch" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/deleteNotification`, void 0), 0)}>${notification.individualIds.length > 1 ? `${each(notification.individualIds, (id) => {
    return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
  })}` : `<input type="hidden" name="notificationId"${add_attribute("value", notification.id, 0)}>`} <button class="btn btn-ghost -mr-2 rounded-none !px-2 *:text-2xl" data-svelte-h="svelte-1syasgq"><span class="i-mdi-delete-outline mx-0 opacity-50"></span></button></form>` : ``}</div>`;
});
const NotificationModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { modal } = $$props;
  let { notifications = void 0 } = $$props;
  let { allowDelete = true } = $$props;
  let { postReveal = false } = $$props;
  let { onRead = (id) => {
    console.log("onRead");
    if (id === "all") {
      notifications = notifications?.map((notification) => ({
        ...notification,
        readAt: /* @__PURE__ */ new Date()
      }));
    } else {
      notifications = notifications?.map((notification) => notification.id === id ? {
        ...notification,
        readAt: /* @__PURE__ */ new Date()
      } : notification);
    }
    notifications = notifications;
    console.log(notifications?.filter((n) => !n.readAt).length);
  } } = $$props;
  if ($$props.modal === void 0 && $$bindings.modal && modal !== void 0) $$bindings.modal(modal);
  if ($$props.notifications === void 0 && $$bindings.notifications && notifications !== void 0) $$bindings.notifications(notifications);
  if ($$props.allowDelete === void 0 && $$bindings.allowDelete && allowDelete !== void 0) $$bindings.allowDelete(allowDelete);
  if ($$props.postReveal === void 0 && $$bindings.postReveal && postReveal !== void 0) $$bindings.postReveal(postReveal);
  if ($$props.onRead === void 0 && $$bindings.onRead && onRead !== void 0) $$bindings.onRead(onRead);
  return `<dialog id="notificationModal" class="modal"${add_attribute("this", modal, 0)}><div class="modal-box relative flex h-[calc(100dvh-8rem)] w-[calc(100dvw-2rem)] flex-col flex-nowrap">${notifications !== void 0 ? `<ul class="-mx-6 flex-nowrap overflow-y-auto">${notifications.length > 0 ? `${each(notifications, (notification) => {
    return `<li>${postReveal ? `${validate_component(PostRevealNotification, "PostRevealNotification").$$render(
      $$result,
      {
        onClick: () => modal.close(),
        allowDelete,
        notification,
        onRead: () => onRead(notification.id)
      },
      {},
      {}
    )}` : `${validate_component(Notification, "Notification").$$render(
      $$result,
      {
        onClick: () => modal.close(),
        allowDelete,
        notification,
        onRead: () => onRead(notification.id)
      },
      {},
      {}
    )}`} </li>`;
  })}` : `<li class="p-4">${escape(navbar_bell_noNotifications())}</li>`}</ul>` : `<span class="loading loading-lg mx-auto self-center"></span>`} <form method="dialog" data-svelte-h="svelte-wo755c"><button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 z-10 bg-base-100">✕</button></form></div> <form method="dialog" class="modal-backdrop" data-svelte-h="svelte-povsts"><button>close</button></form></dialog>`;
});
const NotificationBellContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { notifications } = $$props;
  let { postReveal = false } = $$props;
  let { onDeleted } = $$props;
  let { onRead } = $$props;
  superForm(form, {
    onUpdate: onDeleted,
    id: "deleteNotification"
  });
  superForm(form, {
    id: "readNotifications",
    onSubmit: () => {
      onRead("all");
    }
  });
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.notifications === void 0 && $$bindings.notifications && notifications !== void 0) $$bindings.notifications(notifications);
  if ($$props.postReveal === void 0 && $$bindings.postReveal && postReveal !== void 0) $$bindings.postReveal(postReveal);
  if ($$props.onDeleted === void 0 && $$bindings.onDeleted && onDeleted !== void 0) $$bindings.onDeleted(onDeleted);
  if ($$props.onRead === void 0 && $$bindings.onRead && onRead !== void 0) $$bindings.onRead(onRead);
  return `${notifications.length > 0 ? `<div class="overflow-y-auto">${each(notifications, (notification) => {
    return `<li>${postReveal ? `${validate_component(PostRevealNotification, "PostRevealNotification").$$render($$result, { notification }, {}, {})}` : `${validate_component(Notification, "Notification").$$render(
      $$result,
      {
        notification,
        onRead: () => onRead(notification.id)
      },
      {},
      {}
    )}`} </li>`;
  })}</div>  ${notifications?.filter((n) => n.readAt === null)?.length > 0 ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/readNotifications`, void 0), 0)} data-sveltekit-keepfocus>${each(notifications, (notification) => {
    return `${notification.readAt === null ? `${each(notification.individualIds, (id) => {
      return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
    })}` : ``}`;
  })} <button class="btn btn-ghost no-animation z-10 w-full rounded-none border-0 border-t border-gray-700 *:text-2xl">${escape(navbar_bell_markAllAsRead())} <span class="i-mdi-bell-check-outline"></span></button></form>` : ``}  ${notifications?.flatMap((n) => n.individualIds).length > 0 ? `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`/notifications?/deleteNotification`, void 0), 0)} data-sveltekit-keepfocus>${each(notifications, (notification) => {
    return `${each(notification.individualIds, (id) => {
      return `<input type="hidden" name="notificationIds"${add_attribute("value", id, 0)}>`;
    })}`;
  })} <button class="btn btn-ghost no-animation z-10 w-full rounded-none border-0 border-t border-gray-700 *:text-2xl">${escape(navbar_bell_deleteAll())} <span class="i-mdi-delete-outline"></span></button></form>` : ``}` : `<li class="p-4">${escape(navbar_bell_noNotifications())}</li>`}`;
});
const NotificationBell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { notificationsPromise } = $$props;
  let { form } = $$props;
  let { useModalInstead = false } = $$props;
  let { externalModal = void 0 } = $$props;
  let { buttonClass = void 0 } = $$props;
  let { postReveal = false } = $$props;
  let { notifications = void 0 } = $$props;
  let internalModal;
  let bellButton;
  const onDeleted = () => {
    bellButton.focus();
  };
  let { onRead = (id) => {
    if (id === "all") {
      notifications = notifications?.map((notification) => ({
        ...notification,
        readAt: /* @__PURE__ */ new Date()
      }));
    } else {
      notifications = notifications?.map((notification) => notification.id === id ? {
        ...notification,
        readAt: /* @__PURE__ */ new Date()
      } : notification);
    }
  } } = $$props;
  if ($$props.notificationsPromise === void 0 && $$bindings.notificationsPromise && notificationsPromise !== void 0) $$bindings.notificationsPromise(notificationsPromise);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.useModalInstead === void 0 && $$bindings.useModalInstead && useModalInstead !== void 0) $$bindings.useModalInstead(useModalInstead);
  if ($$props.externalModal === void 0 && $$bindings.externalModal && externalModal !== void 0) $$bindings.externalModal(externalModal);
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0) $$bindings.buttonClass(buttonClass);
  if ($$props.postReveal === void 0 && $$bindings.postReveal && postReveal !== void 0) $$bindings.postReveal(postReveal);
  if ($$props.notifications === void 0 && $$bindings.notifications && notifications !== void 0) $$bindings.notifications(notifications);
  if ($$props.onRead === void 0 && $$bindings.onRead && onRead !== void 0) $$bindings.onRead(onRead);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      (() => {
        notificationsPromise.then((loadedNotifications) => {
          notifications = loadedNotifications;
        });
      })();
    }
    {
      (() => {
        if ($page.form?.form?.data?.notificationId !== void 0) {
          setTimeout(() => {
            onDeleted();
          });
        }
      })();
    }
    $$rendered = `<div class="dropdown"> <button type="button" tabindex="0"${add_attribute("class", twMerge("btn btn-ghost *:text-xl", buttonClass), 0)} data-dropdown-toggle="dropdown"${add_attribute("this", bellButton, 0)}>${notifications !== void 0 ? (() => {
      let unreadCount = notifications.filter((data) => data.readAt == null).length;
      return ` ${slots.default ? slots.default({ unreadCount }) : ` ${unreadCount <= 0 ? `<span class="i-mdi-bell-outline"></span>` : ``} ${unreadCount > 0 ? `<span class="i-mdi-bell-ring-outline animate-bounce"></span> <span class="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-box bg-red-600 text-center !text-sm">${escape(unreadCount)}</span>` : ``} `}`;
    })() : `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` ${slots.loading ? slots.loading({}) : ` <span class="i-mdi-bell-outline mx-auto"></span> `} `;
      }
      return /* @__PURE__ */ function() {
        return ``;
      }();
    }(notificationsPromise)}`}</button> ${!externalModal && useModalInstead ? `${validate_component(NotificationModal, "NotificationModal").$$render(
      $$result,
      {
        postReveal,
        onRead,
        modal: internalModal,
        notifications
      },
      {
        modal: ($$value) => {
          internalModal = $$value;
          $$settled = false;
        },
        notifications: ($$value) => {
          notifications = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${!externalModal ? ` <ul tabindex="0" class="menu dropdown-content !fixed right-0 z-[1] max-h-[80svh] w-full flex-nowrap overflow-clip rounded-box bg-base-100 p-0 shadow sm:!absolute sm:w-[27rem]">${notifications !== void 0 ? `${validate_component(NotificationBellContent, "NotificationBellContent").$$render(
      $$result,
      {
        notifications,
        postReveal,
        onDeleted,
        form,
        onRead
      },
      {},
      {}
    )}` : `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <span class="loading loading-lg"></span> `;
      }
      return /* @__PURE__ */ function() {
        return ``;
      }();
    }(notificationsPromise)}`}</ul>` : ``}`}</div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const AppUnreadNotificationHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { notificationCount = void 0 } = $$props;
  const sendNotificationCountToApp = async (count) => {
    if (count === void 0) return;
    window.unreadNotificationCount = count;
    window.dispatchEvent(
      // send event, in case app is ready and has event handler
      new CustomEvent("unreadNotificationCount", { detail: { count } })
    );
  };
  if ($$props.notificationCount === void 0 && $$bindings.notificationCount && notificationCount !== void 0) $$bindings.notificationCount(notificationCount);
  {
    (() => sendNotificationCountToApp(notificationCount))();
  }
  return ``;
});
const AppNotificationTokenHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loggedIn;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const uploadToken = async (notificationToken) => {
    try {
      const res = await fetch("/api/notifications/uploadToken", {
        method: "POST",
        body: JSON.stringify({ notificationToken })
      });
      if (!res.ok) toast(`Failed to upload notification token. ${(await res.json()).message ?? ""}`, "error");
    } catch (e) {
      if (e instanceof Error) toast(e.message, "error");
      toast(`${e}`, "error");
    }
  };
  let token = null;
  onDestroy(() => {
  });
  loggedIn = !!$page.data.user?.memberId;
  {
    (() => {
      if (loggedIn && token) uploadToken(token);
    })();
  }
  $$unsubscribe_page();
  return ``;
});

export { AppUnreadNotificationHandler as A, NotificationBell as N, AppNotificationTokenHandler as a, NotificationModal as b };
//# sourceMappingURL=AppNotificationTokenHandler-Nphhbmfi.js.map
