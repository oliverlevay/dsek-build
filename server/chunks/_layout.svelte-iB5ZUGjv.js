import { f as getContext, h as is_promise, n as noop, b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, a as add_attribute, v as validate_component, b as escape, e as each } from './ssr-BoMjCg5r.js';
import { n as navigating, p as page } from './stores-ClpLLrvc.js';
import { s as swirl, e as eye } from './swirl-BMYdv2-W.js';
import { A as AppUnreadNotificationHandler, a as AppNotificationTokenHandler, b as NotificationModal, N as NotificationBell } from './AppNotificationTokenHandler-Nphhbmfi.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import dayjs from 'dayjs';
import 'dayjs/locale/sv.js';
import { T as Toast } from './Toast-BrjhWlY5.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { P as POST_REVEAL_PREFIX } from './types2-CXiSJ5rH.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { bE as navbar_userMenu_profile, bF as navbar_userMenu_settings, bG as navbar_userMenu_inventory, bK as events, cc as messages, cd as nollning_wikia } from './messages-D8OfyZiq.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { N as NavIcon } from './NavIcon-85EhGWcK.js';
import { s as signIn } from './client2-BVhmpcwZ.js';
import { a as getFullName } from './member-DajX-teH.js';
import { L as LanguageSwitcher } from './LanguageSwitcher-BznUutNv.js';
import { p as pageTitle } from './pageTitle-Dw7hiKEr.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './MemberImage-CkXEWMZT.js';
import './client3-CIDcnctW.js';
import 'tailwind-merge';
import './superForms-CCN_8vE4.js';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './index2-Bcb5RUHj.js';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './index-CuABlRvJ.js';
import './constants-BTUpIS8C.js';
import './index-BHX467Gw.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';
import './paths-CYDIOyak.js';
import './DsekLogo-nckDQWC4.js';

const threshhold = 100;
const NavigationLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let isLoadDelayed = false;
  let timeout;
  {
    {
      if ($navigating) {
        timeout = setTimeout(
          () => {
            isLoadDelayed = $navigating !== null;
          },
          threshhold
        );
      } else {
        if (timeout) clearTimeout(timeout);
        isLoadDelayed = false;
      }
    }
  }
  $$unsubscribe_navigating();
  return `<div class="${[
    "pointer-events-none fixed inset-0 grid place-items-center transition-opacity duration-500",
    !isLoadDelayed ? "opacity-0" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
const favicon = "/_app/immutable/assets/favicon.DLn8B4Ik.png";
const lexend400 = "/_app/immutable/assets/lexend-latin-400-normal.4kmgQazr.woff2";
const lexend500 = "/_app/immutable/assets/lexend-latin-500-normal.DSkSKZSA.woff2";
const getPostRevealRoute = (pathname) => {
  if (pathname.startsWith(POST_REVEAL_PREFIX)) {
    if (pathname === POST_REVEAL_PREFIX) {
      return "/";
    }
    return pathname.slice(POST_REVEAL_PREFIX.length);
  }
  return pathname;
};
const getRoutes = () => [
  {
    title: "Nollning",
    path: "/",
    icon: "nollning-logo",
    accessRequired: null,
    appBehaviour: "bottom-nav"
  },
  {
    title: events(),
    path: "/events",
    icon: "i-mdi-calendar-outline",
    accessRequired: apiNames.EVENT.READ,
    appBehaviour: "bottom-nav"
  },
  {
    title: messages(),
    path: "/messages",
    icon: "i-mdi-message-outline",
    accessRequired: apiNames.NEWS.READ,
    appBehaviour: "bottom-nav"
  },
  {
    title: nollning_wikia(),
    path: "/wikia",
    specialBehaviour: "cart-badge",
    icon: "i-mdi-compass-outline",
    accessRequired: null,
    appBehaviour: "bottom-nav",
    isCurrentRoute: (currentPathname) => {
      return currentPathname.startsWith("/wikia");
    }
  }
];
const appBottomNavRoutes = (routes) => routes.filter((route) => {
  return route.appBehaviour === "bottom-nav";
});
const getIcon = (icon, revealTheme) => {
  if (icon === "nollning-logo") {
    if (revealTheme) return "i-mdi-cloud-outline";
    else return "i-mdi-home";
  }
  return icon;
};
const prefix$1 = "/nollning";
const PostRevealBottomNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routes;
  let routesToShow;
  let currentRoute;
  let bottomInsets;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  routes = getRoutes();
  routesToShow = appBottomNavRoutes(routes);
  currentRoute = getPostRevealRoute(i18n.route($page.url.pathname));
  bottomInsets = $page.data.appInfo?.insets?.bottom ?? 0;
  $$unsubscribe_page();
  return `<nav class="btm-nav relative inset-0" style="${"padding-bottom: " + escape(bottomInsets || 0, true) + "px; height: " + escape(bottomInsets + 64, true) + "px;"}">${each(routesToShow, (route) => {
    let isCurrent = route.isCurrentRoute ? route.isCurrentRoute(currentRoute) : route.path === currentRoute, icon = getIcon(route.icon, $page.data["revealTheme"]);
    return `  <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${prefix$1}${route.path}`, void 0), 0)} class="${[
      "h-12",
      (isCurrent ? "text-base-content" : "") + " " + (!isCurrent ? "text-neutral" : "")
    ].join(" ").trim()}"><span class="${escape(icon, true) + " size-8"}"></span>  </a>`;
  })}</nav>`;
});
const PostRevealDesktopLeftNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData;
  let member;
  let nollaInGroup;
  let notificationsPromise;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  pageData = $page.data;
  member = $page.data.member;
  nollaInGroup = $page.data["phadderGroup"];
  notificationsPromise = pageData["notificationsPromise"];
  $$unsubscribe_page();
  return ` <div class="absolute right-0 z-30 flex gap-2">${$page.data.user && $page.data.member ? `${notificationsPromise !== null ? `${validate_component(NotificationBell, "NotificationBell").$$render(
    $$result,
    {
      postReveal: true,
      notificationsPromise,
      form: pageData["mutateNotificationForm"],
      buttonClass: "btn btn-circle bg-base-200 relative aspect-square size-10 !p-0"
    },
    {},
    {
      loading: () => {
        return `<span class="i-mdi-bell-outline size-7" slot="loading"></span>`;
      },
      default: () => {
        return `<div class="indicator">${unreadCount > 0 ? `<span class="translate badge indicator-item badge-primary badge-xs translate-x-0 translate-y-0"></span>` : ``} <span class="i-mdi-bell-outline size-7"></span></div>`;
      }
    }
  )}` : ``} <div class="dropdown dropdown-end dropdown-hover">  <label tabindex="0" class="btn btn-circle aspect-square size-10 bg-base-200 !p-0" data-svelte-h="svelte-1bafunk"><span class="i-mdi-account-outline size-8"></span></label>  <ul tabindex="0" class="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow">${member ? `<li class="pointer-events-none"><div class="flex !flex-col items-start gap-0"><span class="line-clamp-1 text-left font-medium">${escape(getFullName(member))}</span> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(group) {
      return ` ${group ? `<span class="text-neutral">${escape(group.name)}</span>` : ``} `;
    }(__value);
  }(nollaInGroup)}</div></li>` : ``} <div class="divider m-0"></div> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/me`, void 0), 0)}><span class="i-mdi-account text-2xl"></span> ${escape(navbar_userMenu_profile())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${POST_REVEAL_PREFIX}/settings`, void 0), 0)}><span class="i-mdi-settings-outline text-2xl"></span> ${escape(navbar_userMenu_settings())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${POST_REVEAL_PREFIX}/shop/inventory`, void 0), 0)}><span class="i-mdi-treasure-chest-outline text-2xl"></span> ${escape(navbar_userMenu_inventory())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/`, void 0), 0)}>D-sek <span class="i-mdi-arrow-right"></span></a></li> <li>${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, {}, {}, {})}</li></ul></div>` : `${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-ghost gap-0",
      onClick: () => signIn("keycloak")
    },
    {},
    {
      default: () => {
        return `${validate_component(NavIcon, "NavIcon").$$render(
          $$result,
          {
            class: "text-inherit",
            icon: "i-mdi-login"
          },
          {},
          {}
        )}`;
      }
    }
  )}`}</div>`;
});
const prefix = "/nollning";
const PostRevealDesktopNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routes;
  let checkbox;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  routes = getRoutes();
  return `<div class="drawer"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"${add_attribute("this", checkbox, 0)}> <div class="drawer-content flex flex-col"> <div class="navbar sticky top-0 z-20 bg-base-100 shadow-[0_4px_4px_#191B2740]"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-circle aspect-square size-10 bg-base-200 !p-0 lg:hidden" data-svelte-h="svelte-1m1s0w"><span class="i-mdi-menu size-7"></span></label> <div class="container relative mx-auto"><ul class="menu menu-horizontal hidden w-full justify-center gap-2 lg:flex">${each(routes, (route) => {
    return `<li><a class="btn btn-ghost text-xl font-bold"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${prefix}${route.path}`, void 0), 0)}>${escape(route.title)}</a> </li>`;
  })}</ul> ${validate_component(PostRevealDesktopLeftNavbar, "PostRevealDesktopLeftNavbar").$$render($$result, {}, {}, {})}</div></div>  <main class="*:scrollbar-hide relative flex-1 bg-base-100"> <div class="scrollbar-hide px-6 py-6">${slots.default ? slots.default({}) : ``}</div></main></div> <div class="drawer-side z-30"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu min-h-full w-80 bg-base-100 p-4"> ${each(routes, (route) => {
    return `<li><a class="btn btn-ghost justify-start text-xl font-bold"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${prefix}${route.path}`, void 0), 0)}>${escape(route.title)}</a> </li>`;
  })}</ul></div></div>`;
});
const AccountDrawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topInsets;
  let member;
  let nollaInGroup;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let checked = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  topInsets = $page.data.appInfo?.insets?.top ?? 0;
  member = $page.data.member;
  nollaInGroup = $page.data["phadderGroup"];
  $$unsubscribe_page();
  return ` <div class="drawer-end"><input id="nolla-account-drawer" type="checkbox" class="drawer-toggle"${add_attribute("checked", checked, 1)}> <div class="drawer-side z-20"><label for="nolla-account-drawer" aria-label="close sidebar" class="drawer-overlay"></label>  <aside class="flex min-h-full max-w-72 flex-col items-stretch rounded-box rounded-r-none bg-base-100 px-4 pb-6 md:max-w-80"${add_attribute("style", `padding-top: calc(1.5rem + ${topInsets}px)`, 0)}>${member ? `<div class="flex items-start justify-start gap-2"><label for="nolla-account-drawer" aria-label="open account sidebar" class="btn btn-circle aspect-square size-10 !p-0" data-svelte-h="svelte-iopiie"><span class="i-mdi-account-outline size-8"></span></label> <div><span class="line-clamp-1 text-left font-medium">${escape(getFullName({ ...member }))}</span> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(group) {
      return ` ${group ? `<span class="text-neutral">${escape(group?.name)}</span>` : ``} `;
    }(__value);
  }(nollaInGroup)}</div></div>` : ``} <ul class="menu -mx-4 mt-4 items-start gap-2"><li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/me`, void 0), 0)}><span class="i-mdi-account text-2xl"></span> ${escape(navbar_userMenu_profile())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${POST_REVEAL_PREFIX}/settings`, void 0), 0)}><span class="i-mdi-settings-outline text-2xl"></span> ${escape(navbar_userMenu_settings())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${POST_REVEAL_PREFIX}/shop/inventory`, void 0), 0)}><span class="i-mdi-treasure-chest-outline text-2xl"></span> ${escape(navbar_userMenu_inventory())}</a></li></ul> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/home`, void 0), 0)} class="btn-primary-dark btn mt-8 self-stretch">D-sek <span class="i-mdi-arrow-right"></span></a> ${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, { class: " mt-8 bg-base-200" }, {}, {})}</aside></div></div>`;
});
const PostRevealAccountMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="block flex-1" data-svelte-h="svelte-1pq9seo"><label for="nolla-account-drawer" aria-label="open account sidebar" class="btn btn-circle aspect-square size-10 !p-0"><span class="i-mdi-account-outline size-8"></span></label></div>`;
});
const PostRevealHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routes;
  let bottomNavRoutes;
  let currentRoute;
  let canGoBack;
  let pageData;
  let topInsets;
  let notificationsPromise;
  let $page, $$unsubscribe_page;
  let $pageTitle, $$unsubscribe_pageTitle;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_pageTitle = subscribe(pageTitle, (value) => $pageTitle = value);
  let notificationModal;
  let notifications = void 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    routes = getRoutes();
    bottomNavRoutes = appBottomNavRoutes(routes);
    currentRoute = getPostRevealRoute(i18n.route($page.url.pathname));
    canGoBack = !bottomNavRoutes.some((route) => route.isCurrentRoute ? route.isCurrentRoute(currentRoute) : route.path === currentRoute);
    pageData = $page.data;
    topInsets = $page.data.appInfo?.insets?.top ?? 0;
    notificationsPromise = pageData["notificationsPromise"];
    $$rendered = `${validate_component(NotificationModal, "NotificationModal").$$render(
      $$result,
      {
        postReveal: true,
        modal: notificationModal,
        notifications
      },
      {
        modal: ($$value) => {
          notificationModal = $$value;
          $$settled = false;
        },
        notifications: ($$value) => {
          notifications = $$value;
          $$settled = false;
        }
      },
      {}
    )} <header class="navbar justify-between gap-2 shadow-[0_4px_4px_#191B2740]" style="${"padding-top: " + escape(topInsets + 8, true) + "px;"}"><div class="w-[5.5rem]"><button class="${["-m-4 p-4", !canGoBack ? "opacity-0" : ""].join(" ").trim()}" data-svelte-h="svelte-9dtl6r"><span class="i-mdi-chevron-left relative top-0.5 size-8"></span></button></div>  <div class="min-w-0 flex-1"><h1 class="page-title mx-auto overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">${escape($pageTitle)}</h1></div> <div class="flex w-[5.5rem] justify-end gap-2">${$page.data.user && $page.data.member ? `${notificationsPromise !== null ? `${validate_component(NotificationBell, "NotificationBell").$$render(
      $$result,
      {
        notificationsPromise,
        form: pageData["mutateNotificationForm"],
        externalModal: notificationModal,
        useModalInstead: true,
        buttonClass: "btn btn-circle bg-base-200 relative aspect-square size-10 !p-0",
        notifications
      },
      {
        notifications: ($$value) => {
          notifications = $$value;
          $$settled = false;
        }
      },
      {
        loading: () => {
          return `<span class="i-mdi-bell-outline size-7" slot="loading"></span>`;
        },
        default: () => {
          return `<div class="indicator">${unreadCount > 0 ? `<span class="translate badge indicator-item badge-primary badge-xs translate-x-0 translate-y-0"></span>` : ``} <span class="i-mdi-bell-outline size-7"></span></div>`;
        }
      }
    )}` : ``} ${validate_component(PostRevealAccountMenu, "PostRevealAccountMenu").$$render($$result, {}, {}, {})}` : `${validate_component(LoadingButton, "LoadingButton").$$render(
      $$result,
      {
        class: "btn btn-ghost gap-0",
        onClick: () => signIn("keycloak")
      },
      {},
      {
        default: () => {
          return `${validate_component(NavIcon, "NavIcon").$$render(
            $$result,
            {
              class: "text-inherit",
              icon: "i-mdi-login"
            },
            {},
            {}
          )}`;
        }
      }
    )}`}</div></header> ${validate_component(AccountDrawer, "AccountDrawer").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_pageTitle();
  return $$rendered;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    (() => {
      const locale = languageTag();
      dayjs.locale(locale);
    })();
  }
  return `${$$result.head += `<!-- HEAD_svelte-1ag9vd3_START --><link rel="preload" as="font" type="font/woff2"${add_attribute("href", lexend400, 0)} crossorigin="anonymous"><link rel="preload" as="font" type="font/woff2"${add_attribute("href", lexend500, 0)} crossorigin="anonymous">${data.revealTheme ? `<link rel="icon"${add_attribute("href", favicon, 0)}>` : ``}<!-- HEAD_svelte-1ag9vd3_END -->`, ""} <div class="post-reveal h-dvh"${add_attribute(
    "data-theme",
    data.revealTheme ? "nollningPostReveal" : "nollningPreReveal",
    0
  )}><div class="flex h-full flex-col">${!data.isApp ? `${validate_component(PostRevealDesktopNavbar, "PostRevealDesktopNavbar").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(notifications) {
      return ` ${validate_component(AppUnreadNotificationHandler, "AppUnreadNotificationHandler").$$render($$result, { notificationCount: notifications?.length }, {}, {})} `;
    }(__value);
  }(data.notificationsPromise)} ${validate_component(AppNotificationTokenHandler, "AppNotificationTokenHandler").$$render($$result, {}, {}, {})} ${validate_component(PostRevealHeader, "PostRevealHeader").$$render($$result, {}, {}, {})} <main class="${[
    "scrollbar-hide *:scrollbar-hide relative flex-1 scroll-mt-10 overflow-y-auto",
    data.isApp ? "scrollbar-hide" : ""
  ].join(" ").trim()}"> <div class="scrollbar-hide px-6 py-6">${slots.default ? slots.default({}) : ``}</div></main>`} ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${!data.isApp ? `` : `${validate_component(PostRevealBottomNav, "PostRevealBottomNav").$$render($$result, {}, {}, {})} <style data-svelte-h="svelte-yyuubt">/* hide scrollbar everywhere. It's usually not present in apps*/

        * {
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }</style>`}</div> ${validate_component(NavigationLoader, "NavigationLoader").$$render($$result, {}, {}, {
    default: () => {
      return `${data.revealTheme ? `<div class="relative size-60 md:size-80" data-svelte-h="svelte-1n3jz1q"><img${add_attribute("src", swirl, 0)} class="absolute inset-0 animate-[reverse-spin_2s_linear_infinite]" alt="Nollning logo spinning"> <img${add_attribute("src", eye, 0)} class="absolute inset-0" alt="Nollning logo non-spinning"></div>` : `<img class="size-40 animate-spin md:size-80" alt="Loading spinner" src="https://raw.githubusercontent.com/Dsek-LTH/grafik/main/committee_logos/nollu/SVG/full/dark.svg">`}`;
    }
  })}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-iB5ZUGjv.js.map
