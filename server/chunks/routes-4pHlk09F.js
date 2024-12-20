import { P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { bs as home, bJ as news, bK as events, bL as tickets, bM as documents, bN as documents_governingDocuments, bO as documents_meetingDocuments, bP as documents_requirementProfiles, bQ as theGuild, bR as theBoard, bS as committees, bT as openElections, bU as bookings, bV as songBook, bW as medals, bX as admin, bY as access, bZ as doors, b_ as emailAliases, b$ as alerts, c0 as linkShortener, c1 as adminSettings, c2 as files } from './messages-D8OfyZiq.js';

const getRoutes = () => [
  {
    title: home(),
    path: "/",
    icon: "i-mdi-home",
    accessRequired: null,
    appBehaviour: "none"
  },
  // {
  //   title: m.nolla_nav_nollning(),
  //   path: "/nolla",
  //   icon: "i-mdi-party-popper",
  //   accessRequired: null,
  //   appBehaviour: "none",
  // },
  {
    title: news(),
    path: "/news",
    icon: "i-mdi-newspaper",
    accessRequired: apiNames.NEWS.READ,
    appBehaviour: "bottom-nav"
  },
  {
    title: events(),
    path: "/events",
    icon: "i-mdi-calendar",
    accessRequired: apiNames.EVENT.READ,
    appBehaviour: "bottom-nav"
  },
  {
    title: tickets(),
    path: "/shop/tickets",
    specialBehaviour: "cart-badge",
    icon: "i-mdi-ticket",
    accessRequired: apiNames.WEBSHOP.PURCHASE,
    appBehaviour: "bottom-nav"
  },
  {
    title: documents(),
    path: null,
    icon: "i-mdi-text-box-multiple",
    appBehaviour: "none",
    accessRequired: null,
    children: [
      {
        title: documents_governingDocuments(),
        path: "/documents/governing",
        icon: "i-mdi-gavel",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: documents_meetingDocuments(),
        path: "/documents",
        icon: "i-mdi-text-box-multiple",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: documents_requirementProfiles(),
        path: "/documents/requirements",
        icon: "i-mdi-vote",
        accessRequired: null,
        appBehaviour: "home-link"
      }
    ]
  },
  {
    title: theGuild(),
    path: null,
    icon: "dsek-icon",
    accessRequired: null,
    appBehaviour: "none",
    children: [
      {
        title: theBoard(),
        path: "/board",
        icon: "i-mdi-account-tie",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: committees(),
        path: "/committees",
        icon: "i-mdi-account-group",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: openElections(),
        path: "/elections",
        icon: "i-mdi-dolphin",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: bookings(),
        path: "/booking",
        icon: "i-mdi-calendar-cursor",
        accessRequired: apiNames.BOOKINGS.READ,
        appBehaviour: "home-link"
      },
      {
        title: songBook(),
        path: "/songbook",
        icon: "i-mdi-library-music",
        accessRequired: null,
        appBehaviour: "home-link"
      },
      {
        title: medals(),
        path: "/medals",
        icon: "i-mdi-medal",
        accessRequired: null,
        appBehaviour: "home-link"
      }
    ]
  },
  {
    title: admin(),
    path: null,
    icon: "i-mdi-security",
    accessRequired: apiNames.ADMIN.READ,
    appBehaviour: "none",
    children: [
      {
        title: access(),
        path: "/admin/access",
        icon: "i-mdi-key",
        accessRequired: apiNames.ACCESS_POLICY.READ,
        appBehaviour: "home-link"
      },
      {
        title: doors(),
        path: "/admin/doors",
        icon: "i-mdi-door-open",
        accessRequired: apiNames.DOOR.READ,
        appBehaviour: "home-link"
      },
      {
        title: emailAliases(),
        path: "/admin/email-alias",
        icon: "i-mdi-email",
        accessRequired: apiNames.EMAIL_ALIAS.READ,
        appBehaviour: "home-link"
      },
      {
        title: alerts(),
        path: "/admin/alerts",
        icon: "i-mdi-alert-circle",
        accessRequired: apiNames.ALERT,
        appBehaviour: "home-link"
      },
      {
        title: linkShortener(),
        path: "/admin/links",
        icon: "i-mdi-link-variant",
        accessRequired: apiNames.ADMIN.SHLINK.READ,
        appBehaviour: "home-link"
      },
      {
        title: adminSettings(),
        path: "/admin/settings",
        icon: "i-mdi-wrench",
        accessRequired: apiNames.ADMIN.SETTINGS.READ,
        appBehaviour: "home-link"
      },
      {
        title: files(),
        path: "/admin/minio",
        icon: "i-mdi-files",
        accessRequired: apiNames.FILES.BUCKET(PUBLIC_BUCKETS_FILES).CREATE,
        appBehaviour: "home-link"
      }
    ]
  }
];
const appBottomNavRoutes = (routes) => [
  {
    title: "Hem",
    icon: "dsek-icon",
    path: "/app/home",
    accessRequired: null,
    appBehaviour: "bottom-nav"
  }
].concat(
  routes.flatMap(
    (route) => route.children ? [route, ...route.children] : route
  ).filter((route) => {
    return route.appBehaviour === "bottom-nav";
  })
).concat([
  {
    title: "Konto",
    icon: "i-mdi-account-circle",
    path: "/app/account",
    accessRequired: null,
    appBehaviour: "bottom-nav"
  }
]);

export { appBottomNavRoutes as a, getRoutes as g };
//# sourceMappingURL=routes-4pHlk09F.js.map
