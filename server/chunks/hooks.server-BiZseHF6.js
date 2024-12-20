import { d as private_env } from './shared-server-BfUoNEXY.js';
import { k as keycloak } from './index5-CNIn8XSJ.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { i as i18n } from './i18n-B2SgmjJ3.js';
import { c as createMember } from './member2-BtEDLQG7.js';
import { r as redirect$1 } from './redirect-A1ZqWr7F.js';
import { t as themes } from './themes-Ck79k3lX.js';
import { i as isAvailableLanguageTag, s as sourceLanguageTag } from './runtime-BxW51cRH.js';
import Keycloak from '@auth/core/providers/keycloak';
import { isAuthAction, Auth, skipCSRFCheck, setEnvDefaults as setEnvDefaults$1, createActionURL, raw } from '@auth/core';
import { d as dev } from './index4-835RQQFE.js';
import { b as base } from './paths-CYDIOyak.js';
import { e as error, r as redirect } from './index-BHX467Gw.js';
import { s as setCookieExports } from './index-DIe8Rf4W.js';
import '@auth/core/errors';
import { enhance } from '@zenstackhq/runtime';
import __cjsInterop2__ from '@zenstackhq/server/api/rpc';
import __cjsInterop1__ from '@zenstackhq/server/sveltekit';
import { randomBytes } from 'crypto';
import schedule from 'node-schedule';
import { Prisma } from '@prisma/client';
import { i as isNollningPeriod } from './nollning-BGFMzAAg.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { g as getDerivedRoles } from './authorization-DvGst16H.js';
import '@keycloak/keycloak-admin-client';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './types3-D4jKTO0f.js';
import './types2-CXiSJ5rH.js';
import './server-DiSvHEoN.js';
import './prod-ssr-DxkyU4_t.js';
import './stringify-cFltMSLq.js';
import './constants-BTUpIS8C.js';
import './index2-Bcb5RUHj.js';
import './ssr-BoMjCg5r.js';
import './messages-D8OfyZiq.js';

function setEnvDefaults(envObject, config) {
  config.trustHost ??= dev;
  config.basePath = `${base}/auth`;
  config.skipCSRFCheck = skipCSRFCheck;
  setEnvDefaults$1(envObject, config);
}
async function signIn(provider, options = {}, authorizationParams, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  const { redirect: shouldRedirect = true, redirectTo, ...rest } = options instanceof FormData ? Object.fromEntries(options) : options;
  const callbackUrl = redirectTo?.toString() ?? headers.get("Referer") ?? "/";
  const base2 = createActionURL("signin", protocol, headers, private_env, config.basePath);
  if (!provider) {
    const url2 = `${base2}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  let url = `${base2}/${provider}?${new URLSearchParams(authorizationParams)}`;
  let foundProvider = void 0;
  for (const _provider of config.providers) {
    const { id } = typeof _provider === "function" ? _provider() : _provider;
    if (id === provider) {
      foundProvider = id;
      break;
    }
  }
  if (!foundProvider) {
    const url2 = `${base2}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  if (foundProvider === "credentials") {
    url = url.replace("signin", "callback");
  }
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const body = new URLSearchParams({ ...rest, callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw });
  for (const c of res?.cookies ?? []) {
    event.cookies.set(c.name, c.value, { path: "/", ...c.options });
  }
  if (shouldRedirect) {
    return redirect(302, res.redirect);
  }
  return res.redirect;
}
async function signOut(options, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const url = createActionURL("signout", protocol, headers, private_env, config.basePath);
  const callbackUrl = options?.redirectTo ?? headers.get("Referer") ?? "/";
  const body = new URLSearchParams({ callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw });
  for (const c of res?.cookies ?? [])
    event.cookies.set(c.name, c.value, { path: "/", ...c.options });
  if (options?.redirect ?? true)
    return redirect(302, res.redirect);
  return res;
}
async function auth(event, config) {
  setEnvDefaults(private_env, config);
  config.trustHost ??= true;
  const { request: req, url: { protocol } } = event;
  const sessionUrl = createActionURL("session", protocol, req.headers, private_env, config.basePath);
  const request = new Request(sessionUrl, {
    headers: { cookie: req.headers.get("cookie") ?? "" }
  });
  const response = await Auth(request, config);
  const authCookies = setCookieExports.parse(response.headers.getSetCookie());
  for (const cookie of authCookies) {
    const { name, value, ...options } = cookie;
    event.cookies.set(name, value, { path: "/", ...options });
  }
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const authorizationParamsPrefix = "authorizationParams-";
function SvelteKitAuth(config) {
  return {
    signIn: async (event) => {
      const { request } = event;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const formData = await request.formData();
      const { providerId: provider, ...options } = Object.fromEntries(formData);
      let authorizationParams = {};
      let _options = {};
      for (const key in options) {
        if (key.startsWith(authorizationParamsPrefix)) {
          authorizationParams[key.slice(authorizationParamsPrefix.length)] = options[key];
        } else {
          _options[key] = options[key];
        }
      }
      await signIn(provider, _options, authorizationParams, _config, event);
    },
    signOut: async (event) => {
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const options = Object.fromEntries(await event.request.formData());
      await signOut(options, _config, event);
    },
    async handle({ event, resolve }) {
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults(private_env, _config);
      const { url, request } = event;
      event.locals.auth ??= () => auth(event, _config);
      event.locals.getSession ??= event.locals.auth;
      const action = url.pathname.slice(
        // @ts-expect-error - basePath is defined in setEnvDefaults
        _config.basePath.length + 1
      ).split("/")[0];
      if (isAuthAction(action) && url.pathname.startsWith(_config.basePath + "/")) {
        return Auth(request, _config);
      }
      return resolve(event);
    }
  };
}
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const PRISMA_LOG_LEVELS = ["silent", "writes", "all"];
function isValidLogLevel(level) {
  return PRISMA_LOG_LEVELS.some((l) => l === level);
}
function getPrismaLogLevel() {
  if (isValidLogLevel(private_env.PRISMA_LOG_LEVEL)) {
    return private_env.PRISMA_LOG_LEVEL;
  }
  if (process.env["NODE_ENV"] === "production") {
    return "writes";
  }
  return "silent";
}
function isWrite(operation) {
  const MODIFY_OPERATIONS = [`create`, `up`, `delete`];
  return MODIFY_OPERATIONS.some((op) => operation.startsWith(op));
}
const logLevel = getPrismaLogLevel();
const loggingExtension = (studentId) => Prisma.defineExtension({
  name: "logging",
  query: {
    $allModels: {},
    $allOperations({ model, operation, args, query }) {
      if (logLevel === "silent") {
        return query(args);
      }
      if (logLevel === "writes" && !isWrite(operation)) {
        return query(args);
      }
      console.log(
        `${studentId ?? "anonymous"} called ${model}.${operation} with args:`,
        JSON.stringify(args)
      );
      return query(args);
    }
  }
});
const translatedModelFields = {
  alert: {
    message: "messageEn"
  },
  articleRequest: {
    notificationBody: "notificationBodyEn"
  },
  article: {
    header: "headerEn",
    body: "bodyEn"
  },
  bookableCategory: {
    name: "nameEn"
  },
  bookable: {
    name: "nameEn"
  },
  committee: {
    name: "nameEn",
    description: "descriptionEn"
  },
  customAuthor: {
    name: "nameEn"
  },
  election: {
    markdown: "markdownEn"
  },
  event: {
    title: "titleEn",
    description: "descriptionEn",
    shortDescription: "shortDescriptionEn"
  },
  markdown: {
    markdown: "markdownEn"
  },
  position: {
    name: "nameEn",
    description: "descriptionEn"
  },
  tag: {
    name: "nameEn"
  },
  shoppable: {
    title: "titleEn",
    description: "descriptionEn"
  },
  itemQuestion: {
    title: "titleEn",
    description: "descriptionEn"
  },
  itemQuestionOption: {
    answer: "answerEn"
  }
};
const translatedExtension = (lang) => Prisma.defineExtension({
  name: "translations",
  result: Object.entries(translatedModelFields).reduce(
    (acc, [model, fieldTranslationMap]) => {
      const modelFields = Object.keys(fieldTranslationMap);
      return {
        ...acc,
        [model]: modelFields.reduce((acc2, field) => {
          const translatedField = fieldTranslationMap[field];
          return {
            ...acc2,
            [field]: {
              needs: {
                [field]: true,
                [translatedField]: true
              },
              compute(data) {
                return lang === "en" && data[translatedField] ? data[translatedField] : data[field];
              }
            }
          };
        }, {})
      };
    },
    {}
  )
});
const fetchAccessPolicies = async (prisma, roles, studentId) => {
  const isNollning = await isNollningPeriod();
  return prisma.accessPolicy.findMany({
    where: {
      OR: [{ role: { in: roles } }, { studentId }]
    }
  }).then((policies) => policies.map((p) => p.apiName)).then((policies) => {
    if (!isNollning && !policies.includes(apiNames.MEMBER.SEE_STABEN)) {
      policies.push(apiNames.MEMBER.SEE_STABEN);
    }
    return policies;
  });
};
const CACHE_TTL = 10 * 60 * 1e3;
const accessPoliciesCache = {
  policies: [],
  lastUpdated: null
};
const hasCacheExpired = (cache) => !cache.lastUpdated || // no cache
Date.now() - cache.lastUpdated > CACHE_TTL;
const getAccessPolicies = async (prisma, roles, studentId) => {
  if (!!studentId && dev) {
    return getAllAccessPolicies(prisma);
  }
  if (roles.length === 1) {
    if (hasCacheExpired(accessPoliciesCache)) {
      accessPoliciesCache.policies = await fetchAccessPolicies(
        prisma,
        roles,
        void 0
      );
      accessPoliciesCache.lastUpdated = Date.now();
    }
    return accessPoliciesCache.policies;
  }
  return await fetchAccessPolicies(prisma, roles, studentId);
};
const getAllAccessPolicies = async (prisma) => prisma.accessPolicy.findMany({ distinct: "apiName" }).then((policies) => policies.map((p) => p.apiName));
const { default: RPCApiHandler = __cjsInterop2__ } = __cjsInterop2__?.default?.__esModule ? __cjsInterop2__.default : __cjsInterop2__;
const { default: zenstack = __cjsInterop1__ } = __cjsInterop1__?.default?.__esModule ? __cjsInterop1__.default : __cjsInterop1__;
const { handle: authHandle } = SvelteKitAuth({
  secret: private_env.AUTH_SECRET,
  trustHost: true,
  providers: [
    Keycloak({
      clientId: private_env.KEYCLOAK_CLIENT_ID,
      clientSecret: private_env.KEYCLOAK_CLIENT_SECRET,
      issuer: private_env.KEYCLOAK_CLIENT_ISSUER,
      profile: (profile, tokens) => {
        return {
          id_token: tokens.id_token,
          id: profile.sub,
          given_name: profile.given_name,
          family_name: profile.family_name,
          email: profile.email,
          student_id: profile.preferred_username,
          // The keycloak client doesn't guarantee this field
          // to be present, but we assume it always is.
          group_list: profile["group_list"] ?? []
        };
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.student_id = user.student_id;
        token.group_list = user.group_list ?? [];
        token.id_token = user.id_token;
        token.given_name = user.given_name;
        token.family_name = user.family_name;
        token.email = user.email;
      }
      return token;
    },
    session(params) {
      const { session } = params;
      if ("token" in params && params.session?.user) {
        const { token } = params;
        session.user.student_id = token.student_id;
        session.user.email = token.email ?? "";
        session.user.group_list = token.group_list;
        session.user.given_name = token.given_name;
        session.user.family_name = token.family_name;
      }
      return session;
    }
  },
  events: {
    async signOut(message) {
      if (!("token" in message)) {
        return;
      }
      const idToken = message.token?.id_token;
      const params = new URLSearchParams();
      params.append("id_token_hint", idToken);
      await fetch(
        `${private_env.KEYCLOAK_CLIENT_ISSUER}/protocol/openid-connect/logout?${params.toString()}`
      );
    }
  }
});
const prismaClient = authorizedPrismaClient;
const databaseHandle = async ({ event, resolve }) => {
  const lang = isAvailableLanguageTag(event.locals.paraglide?.lang) ? event.locals.paraglide?.lang : sourceLanguageTag;
  event.locals.language = lang;
  const session = await event.locals.getSession();
  const prisma = prismaClient.$extends(translatedExtension(lang)).$extends(loggingExtension(session?.user.student_id));
  if (!session?.user) {
    let externalCode = event.cookies.get("externalCode");
    if (!externalCode) {
      externalCode = randomBytes(16).toString("hex");
      event.cookies.set("externalCode", externalCode, {
        httpOnly: false,
        // Make the cookie accessible to client-side JavaScript
        path: "/",
        // Cookie is available on all pages
        secure: process.env["NODE_ENV"] === "production"
        // Only send cookie over HTTPS in production
      });
    }
    const roles = getDerivedRoles(void 0, false);
    const policies = await getAccessPolicies(prisma, roles);
    const user = {
      studentId: void 0,
      memberId: void 0,
      policies,
      externalCode,
      // For anonymous users
      roles
    };
    event.locals.prisma = enhance(prisma, {
      user
    });
    event.locals.user = user;
  } else {
    const existingMember = await prisma.member.findUnique({
      where: { studentId: session.user.student_id }
    });
    const member = existingMember || await createMember(prisma, {
      studentId: session.user.student_id,
      firstName: session.user.given_name,
      lastName: session.user.family_name,
      email: session.user.email
    });
    if (i18n.route(event.url.pathname) != "/onboarding" && (!member.classProgramme || !member.classYear)) {
      redirect$1(302, "/onboarding");
    }
    const roles = getDerivedRoles(
      session.user.group_list,
      !!session.user.student_id,
      member.classYear ?? void 0
    );
    const user = {
      studentId: session.user.student_id,
      memberId: member.id,
      policies: await getAccessPolicies(prisma, roles, session.user.student_id),
      roles
    };
    event.locals.prisma = enhance(prisma, { user });
    event.locals.user = user;
    event.locals.member = member;
  }
  return resolve(event);
};
const apiHandle = zenstack.SvelteKitHandler({
  prefix: "/api/model",
  getPrisma: (event) => event.locals.prisma,
  handler: (req) => {
    if (req.method !== "GET") error(403);
    return RPCApiHandler()(req);
  }
});
const APP_INSETS_REGEX = /APP-INSETS\s*\(([^)]*)\)/;
const appHandle = async ({ event, resolve }) => {
  const userAgent = event.request.headers.get("user-agent");
  if (userAgent?.startsWith("DSEK-APP") || private_env.MOCK_IS_APP === "true") {
    event.locals.isApp = true;
    const insetsJson = APP_INSETS_REGEX.exec(userAgent ?? "")?.[1];
    const insets = JSON.parse(insetsJson ?? "{}");
    event.locals.appInfo = {
      insets: {
        top: insets?.top ? Number(insets.top) : 0,
        bottom: insets?.bottom ? Number(insets.bottom) : 0,
        left: insets?.left ? Number(insets.left) : 0,
        right: insets?.right ? Number(insets.right) : 0
      }
    };
  } else {
    event.locals.isApp = false;
    event.locals.appInfo = void 0;
  }
  return resolve(event);
};
const themeHandle = async ({ event, resolve }) => {
  let theme = event.cookies.get("theme");
  if (!theme || !themes.includes(theme)) {
    theme = "dark";
  }
  event.locals.theme = theme;
  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace("%theme%", theme);
    }
  });
};
schedule.scheduleJob("0 0 * * *", () => keycloak.sync(authorizedPrismaClient));
const handle = sequence(
  authHandle,
  i18n.handle(),
  databaseHandle,
  apiHandle,
  appHandle,
  themeHandle
);

export { handle };
//# sourceMappingURL=hooks.server-BiZseHF6.js.map
