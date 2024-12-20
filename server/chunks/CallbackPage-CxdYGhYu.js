import { o as onDestroy } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-BoMjCg5r.js';
import { b as browser } from './index4-835RQQFE.js';
import { b as invalidate } from './client-yexbOeKf.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { g as goto } from './redirect-A1ZqWr7F.js';
import { hT as cart_paymentStatus_pageTitle } from './messages-D8OfyZiq.js';

const CallbackPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let interval = null;
  onDestroy(() => {
    if (interval && browser) {
      clearInterval(interval);
      interval = null;
    }
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  {
    if (data.refreshPeriodically && browser) {
      interval = setInterval(
        async () => {
          const timeout = setTimeout(
            () => {
              goto(window.location.pathname);
            },
            2e3
          );
          await invalidate();
          clearTimeout(timeout);
        },
        2e3
      );
    } else if (interval && browser) {
      clearInterval(interval);
      interval = null;
    }
  }
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: cart_paymentStatus_pageTitle() }, {}, {})} <h1 class="text-xl font-semibold">${escape(data.message)}</h1> ${interval ? `<span class="loading size-8"></span>` : ``}`;
});

export { CallbackPage as C };
//# sourceMappingURL=CallbackPage-CxdYGhYu.js.map
