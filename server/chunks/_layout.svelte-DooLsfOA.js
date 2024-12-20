import { h as is_promise, n as noop, b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import { l as languageTag } from './runtime-BxW51cRH.js';
import 'dayjs/locale/sv.js';
import { p as page } from './stores-ClpLLrvc.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { N as NavIcon } from './NavIcon-85EhGWcK.js';
import { a as appBottomNavRoutes, g as getRoutes } from './routes-4pHlk09F.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { A as AppUnreadNotificationHandler, a as AppNotificationTokenHandler, N as NotificationBell, b as NotificationModal } from './AppNotificationTokenHandler-Nphhbmfi.js';
import { p as pageTitle } from './pageTitle-Dw7hiKEr.js';
import { s as signIn, a as signOut } from './client2-BVhmpcwZ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { D as DarkLightToggle } from './DarkLightToggle-BoS2KaJL.js';
import { L as LanguageSwitcher } from './LanguageSwitcher-BznUutNv.js';
import { by as footer_contactAndSourceCode, bz as footer_contact, bA as footer_sourceCode, bB as footer_socialMedia, bC as navbar_logIn, bD as navbar_userMenu_loggedInAs, bE as navbar_userMenu_profile, bF as navbar_userMenu_settings, bG as navbar_userMenu_inventory, bH as navbar_userMenu_cart, bI as navbar_userMenu_logOut } from './messages-D8OfyZiq.js';
import { a as getFullName } from './member-DajX-teH.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { T as Toast } from './Toast-BrjhWlY5.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import 'tailwind-merge';
import './DsekLogo-nckDQWC4.js';
import './client3-CIDcnctW.js';
import './apiNames-BaTM20TQ.js';
import 'dayjs';
import './MemberImage-CkXEWMZT.js';
import './types2-CXiSJ5rH.js';
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

const GlobalAlert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { severity } = $$props;
  const icon = (() => {
    switch (severity) {
      case "info":
        return "i-mdi-information-outline";
      case "success":
        return "i-mdi-check-circle-outline";
      case "warning":
        return "i-mdi-alert-outline";
      case "error":
        return "i-mdi-close-circle-outline";
    }
  })();
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.severity === void 0 && $$bindings.severity && severity !== void 0) $$bindings.severity(severity);
  return `<div role="alert"${add_attribute("class", `alert alert-${severity} rounded-none`, 0)}><span${add_attribute("class", `${icon} text-xl`, 0)}></span> <span class="font-bold prose-a:link"> <!-- HTML_TAG_START -->${marked(DOMPurify.sanitize(message))}<!-- HTML_TAG_END --></span></div>`;
});
const AppBottomNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shopItemCounts;
  let routes;
  let routesToShow;
  let currentRoute;
  let currentRouteIndex;
  let bottomInsets;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  shopItemCounts = $page.data["shopItemCounts"];
  routes = getRoutes();
  routesToShow = appBottomNavRoutes(routes);
  currentRoute = i18n.route($page.url.pathname);
  currentRouteIndex = routesToShow.findIndex((route) => route.path === currentRoute);
  bottomInsets = $page.data.appInfo?.insets?.bottom ?? 0;
  $$unsubscribe_page();
  return `<nav class="btm-nav left-2 right-2 w-[calc(100%-1rem)] overflow-hidden rounded-lg bg-base-300 bg-opacity-60 filter backdrop-blur" style="${"bottom: " + escape(bottomInsets || 16, true) + "px;"}"><div class="${[
    "absolute bottom-1 h-px w-[15%] bg-primary transition-all ease-out",
    currentRouteIndex === -1 ? "opacity-0" : ""
  ].join(" ").trim()}" style="${"left: " + escape(currentRouteIndex * (100 / routesToShow.length) + 2.5, true) + "%;"}"></div> ${each(routesToShow, (route) => {
    return `${function(__value) {
      if (is_promise(__value)) {
        __value.then(null, noop);
        return ` <a${add_attribute("href", route.path, 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} </a> `;
      }
      return function(inCart) {
        return ` ${inCart && route.specialBehaviour === "cart-badge" ? ` <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)}><div class="indicator">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} <span class="badge indicator-item badge-error">${escape(inCart)}</span> </div> </a>` : `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})}  </a>`} `;
      }(__value);
    }(shopItemCounts?.inCart)}`;
  })}</nav>`;
});
const AppHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData;
  let notificationsPromise;
  let mutateNotificationForm;
  let routes;
  let bottomNavRoutes;
  let canGoBack;
  let topInsets;
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
    pageData = $page.data;
    notificationsPromise = pageData["notificationsPromise"];
    mutateNotificationForm = pageData["mutateNotificationForm"];
    routes = getRoutes();
    bottomNavRoutes = appBottomNavRoutes(routes).map((route) => route.path);
    canGoBack = !bottomNavRoutes.includes(i18n.route($page.url.pathname));
    topInsets = $page.data.appInfo?.insets?.top ?? 0;
    $$rendered = `<header class="navbar sticky top-0 z-10 justify-between gap-2 overflow-hidden bg-base-300 bg-opacity-60 filter backdrop-blur transition-all" style="${"padding-top: " + escape(topInsets + 8, true) + "px;"}"><div class="w-16"><button class="${["-m-4 p-4", !canGoBack ? "opacity-0" : ""].join(" ").trim()}" data-svelte-h="svelte-9dtl6r"><span class="i-mdi-chevron-left relative top-0.5 size-8"></span></button></div>  <div class="min-w-0 flex-1"><h1 class="mx-auto overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">${escape($pageTitle)}</h1></div> <div class="w-16">${$page.data.user && $page.data.member ? `${notificationsPromise !== null && notificationsPromise !== void 0 && mutateNotificationForm !== null ? `${validate_component(NotificationBell, "NotificationBell").$$render(
      $$result,
      {
        notificationsPromise,
        form: mutateNotificationForm,
        useModalInstead: true,
        externalModal: notificationModal,
        notifications
      },
      {
        notifications: ($$value) => {
          notifications = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}` : `${validate_component(LoadingButton, "LoadingButton").$$render(
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
    )}`}</div></header> ${notificationsPromise !== null && mutateNotificationForm !== null ? `${validate_component(NotificationModal, "NotificationModal").$$render(
      $$result,
      { modal: notificationModal, notifications },
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
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_pageTitle();
  return $$rendered;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routes;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let checked = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  routes = getRoutes();
  $$unsubscribe_page();
  return `<input id="main-drawer" type="checkbox" class="drawer-toggle"${add_attribute("checked", checked, 1)}> <div class="drawer-side z-20"><label for="main-drawer" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu min-h-full min-w-60 bg-base-200 p-0 font-semibold"><div class="flex gap-2 p-2 pb-0">${validate_component(DarkLightToggle, "DarkLightToggle").$$render($$result, { class: "flex-1 bg-base-300 *:size-6" }, {}, {})} ${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, { class: "flex-1 bg-base-300" }, {}, {
    default: () => {
      return `<span class="i-mdi-translate size-6"></span>`;
    }
  })}</div> <div class="p-2 pr-6">${each(routes, (route) => {
    return `${!route.accessRequired || isAuthorized(route.accessRequired, $page.data.user) ? `${route?.children?.length ? `<li class="py-1"><details><summary class="active:!bg-primary/10">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} ${escape(route.title)}</summary> <ul>${each(route.children, (child) => {
      return `${!child.accessRequired || isAuthorized(child.accessRequired, $page.data.user) ? `<li class="py-1"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(child.path, void 0), 0)} class="active:!bg-primary/10"><span${add_attribute("class", `${child.icon} size-6 text-primary`, 0)}></span> ${escape(child.title)}</a> </li>` : ``}`;
    })} </ul></details> </li>` : `<li class="py-1"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)} class="active:!bg-primary/10">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} ${escape(route.title)}</a> </li>`}` : ``}`;
  })}</div></ul></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  return `<footer class="bg-base-300"><div class="container footer mx-auto items-center gap-y-2 p-2"><nav class="grid-flow-col place-self-center md:place-self-start"${add_attribute("aria-label", footer_contactAndSourceCode(), 0)}><a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/info/contact`, void 0), 0)}>${escape(footer_contact())}</a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH/web`, void 0), 0)}>${escape(footer_sourceCode())}</a></nav> <nav class="grid-flow-col place-self-center *:text-xl md:place-self-end"${add_attribute("aria-label", footer_socialMedia(), 0)}><a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://discord.com/invite/wxHQcvZ38p`, void 0), 0)}><span class="i-mdi-discord"></span></a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://instagram.com/dseklth`, void 0), 0)}><span class="i-mdi-instagram"></span></a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://facebook.com/Dsektionen`, void 0), 0)}><span class="i-mdi-facebook"></span></a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://youtube.com/channel/UCqBtN7xlh4_VvywKaRiGfkw`, void 0), 0)}><span class="i-mdi-youtube"></span></a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://github.com/Dsek-LTH`, void 0), 0)}><span class="i-mdi-github"></span></a> <a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`https://linkedin.com/company/datatekniksektionen-vid-tlth`, void 0), 0)}><span class="i-mdi-linkedin"></span></a></nav></div></footer>`;
});
const css = {
  code: "dialog.svelte-1vyjbbl::backdrop{background:rgba(0, 0, 0, 0.2);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}",
  map: `{"version":3,"file":"Search.svelte","sources":["Search.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\nimport { getContext as pArAgLiDe_translate_attribute_pass_getContext } from 'svelte';\\nlet value = \\"\\";\\nlet users = [];\\nlet dialog;\\nasync function getMembers() {\\n  if (value === \\"\\") {\\n    users = [];\\n    return;\\n  }\\n  const response = await fetch(\\n    \\"/api/members?\\" + new URLSearchParams({ search: value })\\n  );\\n  users = await response.json();\\n}\\nfunction show() {\\n  dialog.showModal();\\n  document.body.style.overflow = \\"hidden\\";\\n}\\nfunction close() {\\n  dialog.close();\\n  document.body.style.overflow = \\"auto\\";\\n  value = \\"\\";\\n  users = [];\\n}\\nfunction handleKeydown(event) {\\n  if (event.ctrlKey && event.key === \\"k\\") {\\n    event.preventDefault();\\n    show();\\n  } else if (event.key === \\"Escape\\") {\\n    close();\\n  }\\n}\\n\\nconst pArAgLiDe_translate_attribute_pass_context = pArAgLiDe_translate_attribute_pass_getContext('$paraglide-adapter-sveltekit:context');\\n    \\n        /**\\n         * @param {string} value\\n         * @param {string | undefined} lang_value\\n         */\\n        function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {\\nif(typeof value !== \\"string\\") return value;\\n            if(!pArAgLiDe_translate_attribute_pass_context) return value;\\n            return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);\\n        }\\n\\n        /**\\n         * @typedef {{ attribute_name: string, lang_attribute_name?: string }} AttributeTranslation\\n         */\\n\\n        /**\\n         * Takes in an object of attributes, and an object of attribute translations\\n         * & applies the translations to the attributes\\n         * \\n         * @param {Record<string, any>} attrs\\n         * @param {AttributeTranslation[]} attribute_translations\\n         */\\n        function pArAgLiDe_translate_attribute_pass_handle_attributes(attrs, attribute_translations) {\\n            //If the element has the data-no-translate attribute, don't translate it\\n            if(attrs[\\"data-no-translate\\"] === true) return attrs;\\n\\n            for (const { attribute_name, lang_attribute_name } of attribute_translations){\\n                if(attribute_name in attrs) {\\n                    const attr = attrs[attribute_name];\\n                    const lang_attr = lang_attribute_name ? attrs[lang_attribute_name] : undefined;\\n                    attrs[attribute_name] = pArAgLiDe_translate_attribute_pass_translateAttribute(attr, lang_attr);\\n                }\\n            }\\n\\n            return attrs;\\n        }\\n<\/script>\\n\\n<svelte:document on:keydown={handleKeydown} />\\n\\n<noscript>\\n  <style>\\n    .js {\\n      display: none;\\n    }\\n  </style>\\n  <a href={pArAgLiDe_translate_attribute_pass_translateAttribute(\\n                                            \`/search\`,\\n                                            undefined\\n                                        )} class=\\"btn btn-ghost\\">\\n    <span class=\\"i-mdi-magnify size-6\\" />\\n  </a>\\n</noscript>\\n\\n<button class=\\"js btn btn-ghost\\" on:click={show}>\\n  <span class=\\"i-mdi-magnify size-6\\" />\\n</button>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->\\n<dialog\\n  class=\\"h-full max-w-md rounded-2xl bg-transparent text-base-content md:w-full\\"\\n  style=\\"display: revert;\\"\\n  bind:this={dialog}\\n  on:click={close}\\n  tabindex=\\"-1\\"\\n>\\n  <form\\n    class=\\"rounded-2xl bg-base-100 p-2 shadow\\"\\n    on:click={(event) => event.stopPropagation()}\\n  >\\n    <div class=\\"flex gap-2\\">\\n      <label class=\\"input flex w-full items-center gap-2\\">\\n        <span class=\\"i-mdi-magnify size-6\\" />\\n        <!-- svelte-ignore a11y-autofocus -->\\n        <input\\n          type=\\"text\\"\\n          placeholder=\\"Sök efter medlemmar\\"\\n          class=\\"bg-transparent\\"\\n          autofocus\\n          bind:value\\n          on:input={getMembers}\\n        />\\n      </label>\\n      <button class=\\"btn btn-ghost hidden sm:inline-flex\\" on:click={close}>\\n        <kbd class=\\"kbd\\">ESC</kbd>\\n      </button>\\n    </div>\\n    {#if users.length > 0}\\n      <ul class=\\"mt-2 flex flex-col gap-1\\">\\n        {#each users.slice(0, 10) as user}\\n          <li>\\n            <a\\n              href={pArAgLiDe_translate_attribute_pass_translateAttribute(\\n                                            \\"/members/\\" + user.studentId,\\n                                            undefined\\n                                        )}\\n              class=\\"btn flex justify-between\\"\\n              on:click={close}\\n            >\\n              <div>{user.firstName} {user.lastName}</div>\\n              <div class=\\"text-primary\\">({user.studentId})</div>\\n            </a>\\n          </li>\\n        {/each}\\n        {#if users.length > 10}\\n          <li class=\\"text-center\\">...</li>\\n        {/if}\\n      </ul>\\n    {/if}\\n  </form>\\n</dialog>\\n\\n<style>\\n  dialog::backdrop {\\n    background: rgba(0, 0, 0, 0.2);\\n    -webkit-backdrop-filter: blur(3px);\\n            backdrop-filter: blur(3px);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAqJE,qBAAM,UAAW,CACf,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,uBAAuB,CAAE,KAAK,GAAG,CAAC,CAC1B,eAAe,CAAE,KAAK,GAAG,CACnC"}`
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "";
  let users = [];
  let dialog;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value2, lang_value) {
    if (typeof value2 !== "string") return value2;
    if (!pArAgLiDe_translate_attribute_pass_context) return value2;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value2, lang_value);
  }
  $$result.css.add(css);
  return ` <noscript><style data-svelte-h="svelte-q2u7vw">.js {
      display: none;
    }</style> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/search`, void 0), 0)} class="btn btn-ghost"><span class="i-mdi-magnify size-6"></span></a></noscript> <button class="js btn btn-ghost" data-svelte-h="svelte-n0jth5"><span class="i-mdi-magnify size-6"></span></button>   <dialog class="h-full max-w-md rounded-2xl bg-transparent text-base-content md:w-full svelte-1vyjbbl" style="display: revert;" tabindex="-1"${add_attribute("this", dialog, 0)}><form class="rounded-2xl bg-base-100 p-2 shadow"><div class="flex gap-2"><label class="input flex w-full items-center gap-2"><span class="i-mdi-magnify size-6"></span>  <input type="text" placeholder="Sök efter medlemmar" class="bg-transparent" autofocus${add_attribute("value", value, 0)}></label> <button class="btn btn-ghost hidden sm:inline-flex" data-svelte-h="svelte-7noolk"><kbd class="kbd">ESC</kbd></button></div> ${users.length > 0 ? `<ul class="mt-2 flex flex-col gap-1">${each(users.slice(0, 10), (user) => {
    return `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute("/members/" + user.studentId, void 0), 0)} class="btn flex justify-between"><div>${escape(user.firstName)} ${escape(user.lastName)}</div> <div class="text-primary">(${escape(user.studentId)})</div></a> </li>`;
  })} ${users.length > 10 ? `<li class="text-center" data-svelte-h="svelte-12zrwuc">...</li>` : ``}</ul>` : ``}</form> </dialog>`;
});
const UserMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let amountInCart;
  let { member } = $$props;
  let { user } = $$props;
  let { shopItemCounts } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
  if ($$props.shopItemCounts === void 0 && $$bindings.shopItemCounts && shopItemCounts !== void 0) $$bindings.shopItemCounts(shopItemCounts);
  amountInCart = Promise.all([shopItemCounts?.inCart, shopItemCounts?.reserved]).then(([inCart, reserved]) => (inCart ?? 0) + (reserved ?? 0));
  return `<div class="dropdown dropdown-end dropdown-hover">  <label tabindex="0" class="btn btn-ghost">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})} `;
    }
    return function(amountInCart2) {
      return ` ${amountInCart2 > 0 ? `<div class="indicator"><span class="badge indicator-item badge-primary badge-sm indicator-start indicator-top">${escape(amountInCart2)}</span> ${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})}</div>` : `${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member }, {}, {})}`} `;
    }(__value);
  }(amountInCart)}</label>  <div tabindex="0" class="card dropdown-content card-compact z-[1] min-w-[200px] max-w-[min(800px,calc(100vw-20px))] bg-base-200 p-2 text-center text-base-content shadow"><div class="card-body"><p class="text-center font-semibold">${escape(navbar_userMenu_loggedInAs())}</p> <div class="min-w-0"><h3 class="truncate text-xl font-bold"${add_attribute("title", getFullName(member), 0)}>${escape(getFullName(member))}</h3></div> <p class="text-sm">(${escape(user?.studentId)})</p> <span class="divider m-1"></span> <div class="flex flex-col items-start gap-2"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/me`, void 0), 0)} class="btn btn-ghost w-full justify-start text-base-content"><span class="i-mdi-account-circle size-6 text-primary"></span> ${escape(navbar_userMenu_profile())}</a> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/settings`, void 0), 0)} class="btn btn-ghost w-full justify-start"><span class="i-mdi-cog size-6 text-primary"></span> ${escape(navbar_userMenu_settings())}</a> <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/inventory`, void 0), 0)} class="btn btn-ghost w-full justify-start"><span class="i-mdi-treasure-chest size-6 text-primary"></span> ${escape(navbar_userMenu_inventory())}</a> ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(amountInCart2) {
      return ` ${amountInCart2 > 0 ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/cart`, void 0), 0)} class="btn btn-ghost w-full justify-start"><span class="i-mdi-cart size-6 text-primary"></span> <span>${escape(navbar_userMenu_cart())}</span> <span class="badge badge-primary badge-sm">${escape(amountInCart2)}</span></a>` : ``} `;
    }(__value);
  }(amountInCart)}</div> <span class="divider m-1"></span> ${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-ghost justify-start",
      onClick: () => signOut()
    },
    {},
    {
      default: () => {
        return `<span class="i-mdi-logout size-6 text-primary"></span> ${escape(navbar_userMenu_logOut())}`;
      }
    }
  )}</div></div></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageData;
  let notificationsPromise;
  let mutateNotificationForm;
  let shopItemCounts;
  let routes;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  pageData = $page.data;
  notificationsPromise = pageData["notificationsPromise"];
  mutateNotificationForm = pageData["mutateNotificationForm"];
  shopItemCounts = pageData["shopItemCounts"];
  routes = getRoutes();
  $$unsubscribe_page();
  return `<div class="sticky top-0 z-10 bg-base-300 bg-opacity-60 filter backdrop-blur transition-all"><div class="container navbar mx-auto"> <div class="block xl:hidden" data-svelte-h="svelte-1wrtw7p"><label for="main-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost"><span class="i-mdi-menu h-8 w-8 text-primary"></span></label></div> <div class="block flex-1 bg-red-500 xl:hidden"></div>  <div class="container hidden flex-1 xl:block">${each(routes, (route) => {
    return `${!route.accessRequired || isAuthorized(route.accessRequired, $page.data.user) ? `${route?.children?.length ? `<div class="dropdown dropdown-hover">  <label tabindex="0" class="btn btn-ghost">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} ${escape(route.title)}</label>  <ul tabindex="0" class="menu dropdown-content z-[1] w-52 rounded-box bg-base-200 p-2 shadow">${each(route.children, (child) => {
      return `${!child.accessRequired || isAuthorized(child.accessRequired, $page.data.user) ? `<li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(child.path, void 0), 0)} class="btn-ghost active:!bg-primary/10">${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: child.icon }, {}, {})} ${escape(child.title)}</a> </li>` : ``}`;
    })}</ul> </div>` : `<a class="btn btn-ghost"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(route.path, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { icon: route.icon }, {}, {})} ${escape(route.title)} </a>`}` : ``}`;
  })}</div> ${validate_component(Search, "Search").$$render($$result, {}, {}, {})} <div class="flex"><div class="hidden xl:flex"> ${validate_component(DarkLightToggle, "DarkLightToggle").$$render($$result, {}, {}, {})} ${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, {}, {}, {})}</div> ${notificationsPromise !== null ? `${validate_component(NotificationBell, "NotificationBell").$$render(
    $$result,
    {
      notificationsPromise,
      form: mutateNotificationForm
    },
    {},
    {}
  )}` : ``} ${$page.data.user && $page.data.member ? `${validate_component(UserMenu, "UserMenu").$$render(
    $$result,
    {
      user: $page.data.user,
      member: $page.data.member,
      shopItemCounts
    },
    {},
    {}
  )}` : `${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-ghost",
      onClick: () => signIn("keycloak")
    },
    {},
    {
      default: () => {
        return `${escape(navbar_logIn())}`;
      }
    }
  )}`}</div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${!data.isApp ? `<nav class="contents">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Drawer, "Drawer").$$render($$result, {}, {}, {})}</nav>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(notifications) {
      return ` ${validate_component(AppUnreadNotificationHandler, "AppUnreadNotificationHandler").$$render(
        $$result,
        {
          notificationCount: notifications?.filter((n) => !n.readAt).length
        },
        {},
        {}
      )} `;
    }(__value);
  }(data.notificationsPromise)} ${validate_component(AppNotificationTokenHandler, "AppNotificationTokenHandler").$$render($$result, {}, {}, {})} ${validate_component(AppHeader, "AppHeader").$$render($$result, {}, {}, {})}`} ${each(data.alerts, (alert) => {
    return `${validate_component(GlobalAlert, "GlobalAlert").$$render(
      $$result,
      {
        message: languageTag() === "sv" ? alert.message : alert.messageEn,
        severity: alert.severity
      },
      {},
      {}
    )}`;
  })} <main class="${["w-full flex-1 overflow-x-auto", data.isApp ? "pb-16" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})} ${!data.isApp ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : `${validate_component(AppBottomNav, "AppBottomNav").$$render($$result, {}, {}, {})} <style data-svelte-h="svelte-6m058p">/* hide scrollbar everywhere. It's usually not present in apps*/

    * {
      scrollbar-width: none;
    }

    *::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }</style>`}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DooLsfOA.js.map
