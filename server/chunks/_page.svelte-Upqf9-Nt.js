import { f as getContext } from './lifecycle-DkuQBIPN.js';
import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape } from './ssr-BoMjCg5r.js';
import { L as LoadingButton } from './LoadingButton-DNerNunK.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { N as NavIcon } from './NavIcon-85EhGWcK.js';
import { dT as account, bE as navbar_userMenu_profile, bF as navbar_userMenu_settings, bG as navbar_userMenu_inventory, bI as navbar_userMenu_logOut, bC as navbar_logIn } from './messages-D8OfyZiq.js';
import { a as signOut, s as signIn } from './client2-BVhmpcwZ.js';
import { D as DarkLightToggle } from './DarkLightToggle-BoS2KaJL.js';
import { L as LanguageSwitcher } from './LanguageSwitcher-BznUutNv.js';
import 'tailwind-merge';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './DsekLogo-nckDQWC4.js';
import './runtime-BxW51cRH.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './i18n-B2SgmjJ3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: account() }, {}, {})} <div class="flex flex-1 flex-col gap-4 rounded-box bg-base-300 p-2">${data.user && data.member ? `<ul class="menu gap-4 [&>li>a]:py-2"><li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/members/me`, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render(
    $$result,
    {
      class: "text-inherit",
      icon: "i-mdi-account-circle"
    },
    {},
    {}
  )} ${escape(navbar_userMenu_profile())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/settings`, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render($$result, { class: "text-inherit", icon: "i-mdi-cog" }, {}, {})} ${escape(navbar_userMenu_settings())}</a></li> <li><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/shop/inventory`, void 0), 0)}>${validate_component(NavIcon, "NavIcon").$$render(
    $$result,
    {
      class: "text-inherit",
      icon: "i-mdi-treasure-chest"
    },
    {},
    {}
  )} ${escape(navbar_userMenu_inventory())}</a></li> </ul>` : ``} <div class="mx-6 my-2 flex justify-between gap-8 [&>*]:flex-1">${validate_component(LanguageSwitcher, "LanguageSwitcher").$$render($$result, { class: "btn-outline" }, {}, {})} ${validate_component(DarkLightToggle, "DarkLightToggle").$$render($$result, { class: "btn-outline" }, {}, {})}</div> ${data.user && data.member ? `${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-outline btn-error mx-6 my-4 self-end",
      onClick: () => signOut()
    },
    {},
    {
      default: () => {
        return `${validate_component(NavIcon, "NavIcon").$$render(
          $$result,
          {
            icon: "i-mdi-logout",
            class: "text-inherit"
          },
          {},
          {}
        )} ${escape(navbar_userMenu_logOut())}`;
      }
    }
  )}` : `${validate_component(LoadingButton, "LoadingButton").$$render(
    $$result,
    {
      class: "btn btn-primary mx-6 my-4 self-stretch",
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
        )} ${escape(navbar_logIn())}`;
      }
    }
  )}`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Upqf9-Nt.js.map
