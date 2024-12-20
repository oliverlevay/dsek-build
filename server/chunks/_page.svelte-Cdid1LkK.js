import { c as create_ssr_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { R as REVEAL_LAUNCH_DATE } from './types2-CXiSJ5rH.js';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './index-BHX467Gw.js';
import { c as colors } from './themes-Ck79k3lX.js';
import { s as swirl, e as eye } from './swirl-BMYdv2-W.js';
import './lifecycle-DkuQBIPN.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './runtime-BxW51cRH.js';
import './exports-BGi7-Rnc.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let background;
  let { data } = $$props;
  const revealTheme = REVEAL_LAUNCH_DATE <= /* @__PURE__ */ new Date();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  background = data.redirect === "/nollning" && revealTheme ? colors.nollningPostReveal["base-100"] : "#f280a1";
  return `<div class="relative h-dvh w-dvw" style="${"background-color: " + escape(background, true)}">${data.redirect === "/nollning" && revealTheme ? ` <div class="absolute left-1/2 top-1/2 size-60 max-h-[50%] max-w-[50%] -translate-x-1/2 -translate-y-1/2 md:size-80" data-svelte-h="svelte-x43vxb"><img${add_attribute("src", swirl, 0)} class="absolute inset-0 animate-[reverse-spin_2s_linear_infinite]" alt="Nollning logo spinning"> <img${add_attribute("src", eye, 0)} class="absolute inset-0" alt="Nollning logo non-spinning"></div>` : `<img src="/d-white.webp" alt="D-sek logo" class="absolute left-1/2 top-1/2 max-h-[50%] max-w-[50%] -translate-x-1/2 -translate-y-1/2">`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cdid1LkK.js.map
