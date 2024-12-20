import { i as i18n } from './i18n-B2SgmjJ3.js';
import { g as goto$1 } from './client-yexbOeKf.js';
import { r as redirect$1 } from './server-DiSvHEoN.js';

const goto = (url, opts) => {
  if (typeof url === "string" && url.startsWith("/")) {
    return goto$1(i18n.resolveRoute(url), opts);
  }
  if (url instanceof URL) {
    return goto$1(i18n.resolveRoute(url.pathname), opts);
  }
  return goto$1(i18n.resolveRoute(url), opts);
};
const redirect = (...args) => {
  if (typeof args[0] === "number") {
    const [status, location, message, event] = args;
    if (typeof location === "string" && location.startsWith("/")) {
      return redirect$1(
        status,
        i18n.resolveRoute(location),
        message,
        event
      );
    } else if (location instanceof URL) {
      return redirect$1(
        status,
        i18n.resolveRoute(location.pathname),
        message,
        event
      );
    }
  } else {
    const [location, message, event] = args;
    if (typeof location === "string" && location.startsWith("/")) {
      return redirect$1(
        i18n.resolveRoute(location),
        message,
        event
      );
    } else if (location instanceof URL) {
      return redirect$1(
        i18n.resolveRoute(location.pathname),
        message,
        event
      );
    }
  }
  return redirect$1(...args);
};
const eventLink = (event) => event.slug ? `/events/${event.slug}` : `/events/id/${event.id}`;
const APP_REDIRECT_URL = "dsek://";

export { APP_REDIRECT_URL as A, eventLink as e, goto as g, redirect as r };
//# sourceMappingURL=redirect-A1ZqWr7F.js.map
