import { b as subscribe } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, b as escape, a as add_attribute } from './ssr-BoMjCg5r.js';
import { k5 as nollning_wikia_map_cellar, k6 as nollning_wikia_floor } from './messages-D8OfyZiq.js';
import { p as page } from './stores-ClpLLrvc.js';
import './runtime-BxW51cRH.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';

const map = "/_app/immutable/assets/map.D0JseKgG.webp";
const cellar = "/_app/immutable/assets/cellar.tOySZTH1.webp";
const floor1 = "/_app/immutable/assets/floor1.WmhkA93C.webp";
const floor2 = "/_app/immutable/assets/floor2.D_W1OV-7.webp";
const floor3 = "/_app/immutable/assets/floor3.C1PfUD-6.webp";
const floor4 = "/_app/immutable/assets/floor4.Dox6BEW5.webp";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let revealTheme;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  revealTheme = $page.data["revealTheme"];
  $$unsubscribe_page();
  return `<div class="flex flex-col md:flex-row"><img class="${"w-full max-w-sm " + escape(revealTheme ? "" : "rounded-btn bg-black/20 p-4", true)}" alt="Map of campus"${add_attribute("src", map, 0)}> <div class="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 [&_h3]:text-center"><div><h3>${escape(nollning_wikia_map_cellar())}</h3> <img class="${["w-full max-w-sm", !revealTheme ? "invert" : ""].join(" ").trim()}" alt="Map of campus"${add_attribute("src", cellar, 0)}></div> <div><h3>${escape(nollning_wikia_floor())} 1</h3> <img class="${["w-full max-w-sm", !revealTheme ? "invert" : ""].join(" ").trim()}" alt="Map of campus"${add_attribute("src", floor1, 0)}></div> <div><h3>${escape(nollning_wikia_floor())} 2</h3> <img class="${["w-full max-w-sm", !revealTheme ? "invert" : ""].join(" ").trim()}" alt="Map of campus"${add_attribute("src", floor2, 0)}></div> <div><h3>${escape(nollning_wikia_floor())} 3</h3> <img class="${["w-full max-w-sm", !revealTheme ? "invert" : ""].join(" ").trim()}" alt="Map of campus"${add_attribute("src", floor3, 0)}></div> <div><h3>${escape(nollning_wikia_floor())} 4</h3> <img class="${["w-full max-w-sm", !revealTheme ? "invert" : ""].join(" ").trim()}" alt="Map of campus"${add_attribute("src", floor4, 0)}></div></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Go1cwHTN.js.map
