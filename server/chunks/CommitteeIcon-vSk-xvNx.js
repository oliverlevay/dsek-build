import { c as create_ssr_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';

const CommitteeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { committee } = $$props;
  let { useMono = false } = $$props;
  const FALLBACK = {
    mono: "https://raw.githubusercontent.com/Dsek-LTH/grafik/main/guild/d_sektionen/full/bw.svg",
    color: "https://raw.githubusercontent.com/Dsek-LTH/grafik/main/guild/d_sektionen/full/color.svg"
  };
  if ($$props.committee === void 0 && $$bindings.committee && committee !== void 0) $$bindings.committee(committee);
  if ($$props.useMono === void 0 && $$bindings.useMono && useMono !== void 0) $$bindings.useMono(useMono);
  return ` ${useMono ? `<img${add_attribute("src", getFileUrl(committee.monoImageUrl) ?? FALLBACK.mono, 0)} alt="${escape(committee.name, true) + " icon"}">` : ` <img${add_attribute("src", getFileUrl(committee.darkImageUrl) ?? FALLBACK.color, 0)} alt="${escape(committee.name, true) + " icon"}" class="hidden dark:block"> <img${add_attribute("src", getFileUrl(committee.lightImageUrl) ?? FALLBACK.color, 0)} alt="${escape(committee.name, true) + " icon"}" class="block dark:hidden">`}`;
});

export { CommitteeIcon as C };
//# sourceMappingURL=CommitteeIcon-vSk-xvNx.js.map
