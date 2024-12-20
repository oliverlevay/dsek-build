import { b as subscribe, g as get_store_value } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, a as add_attribute, e as each } from './ssr-BoMjCg5r.js';
import { p as page } from './stores-ClpLLrvc.js';
import { a as toasts, t as toast } from './toast2-BAKD7V1C.js';
import { w as writable } from './index2-Bcb5RUHj.js';
import './client-yexbOeKf.js';

const defaultOptions = {
  clearArray: false,
  clearOnNavigate: true,
  clearAfterMs: 0,
  flashCookieOptions: {
    path: "/",
    maxAge: 120,
    httpOnly: false,
    sameSite: "strict"
  }
};
class FlashMessage {
  options;
  _message;
  get message() {
    return this._message;
  }
  _flashTimeout = 0;
  get flashTimeout() {
    return this._flashTimeout;
  }
  constructor(message, options) {
    this.options = options ?? defaultOptions;
    this._message = {
      subscribe: message.subscribe,
      set: (value, options2) => message.update(($message) => this.update($message, value, options2?.concatenateArray ?? false)),
      update: (updater, options2) => message.update(($message) => this.update($message, updater($message), options2?.concatenateArray ?? false))
    };
  }
  update(current, newData, concatenateArray = false) {
    if (this._flashTimeout)
      clearTimeout(this.flashTimeout);
    if (concatenateArray && Array.isArray(newData)) {
      if (Array.isArray(current)) {
        if (current.length > 0 && newData.length > 0 && current[current.length - 1] === newData[newData.length - 1]) {
          return current;
        } else {
          return current.concat(newData);
        }
      }
    }
    return newData;
  }
}
function _initFlash(page2, options) {
  {
    return new FlashMessage(writable(get_store_value(page2).data.flash));
  }
}
function getFlash(page2, options) {
  return _initFlash(page2).message;
}
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toastLocationClasses;
  let $page, $$unsubscribe_page;
  let $flash, $$unsubscribe_flash;
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  const flash = getFlash(page);
  $$unsubscribe_flash = subscribe(flash, (value) => $flash = value);
  {
    if ($page.form?.form?.message && $page.form.form.message.type !== "hidden") {
      toast($page.form.form.message.message, $page.form.form.message.type, $page.form.form.message.id);
    }
  }
  {
    if ($flash && $flash.type !== "hidden") {
      toast($flash.message, $flash.type, $flash.id);
    }
  }
  toastLocationClasses = (() => {
    if (!$page.data.isApp) return "bottom-2 right-2";
    return `toast-top toast-center w-full flex-col-reverse items-center`;
  })();
  $$unsubscribe_page();
  $$unsubscribe_flash();
  $$unsubscribe_toasts();
  return `${$toasts.length > 0 ? `<div class="${"toast z-10 " + escape(toastLocationClasses, true)}"${add_attribute(
    "style",
    $page.data.isApp ? `top: ${64 + ($page.data.appInfo?.insets.top ?? 0)}px;` : "",
    0
  )}>${each($toasts, (toast2) => {
    return `<div role="alert" class="${[
      "alert alert-" + escape(toast2.type, true) + " select-all",
      ($page.data.isApp ? "py-2" : "") + " " + ($page.data.isApp ? "px-6" : "") + " " + ($page.data.isApp ? "text-sm" : "") + " " + ($page.data.isApp ? "w-auto" : "")
    ].join(" ").trim()}"><span class="max-w-full select-all overflow-hidden text-ellipsis">${escape(toast2.message)}</span> </div>`;
  })}</div>` : ``}`;
});

export { Toast as T };
//# sourceMappingURL=Toast-BrjhWlY5.js.map
