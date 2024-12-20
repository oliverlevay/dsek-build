import { c as create_ssr_component, v as validate_component, a as add_attribute, b as escape, e as each, s as spread, d as escape_object } from './ssr-BoMjCg5r.js';
import { S as SetPageTitle } from './SetPageTitle-BsdTdMHP.js';
import { a as getFullName } from './member-DajX-teH.js';
import { b as subscribe, f as getContext } from './lifecycle-DkuQBIPN.js';
import { l as languageTag } from './runtime-BxW51cRH.js';
import { gc as members_editBio, gd as members_addBio, ge as members_publishedArticles, gf as members_publishedEvents, gg as members_firstName, gh as members_nickname_explanation, gi as members_nickname, gj as members_lastName, gk as members_foodPreference, gl as members_programme, gm as members_year, gn as onboarding_phadderGroup, go as members_save, gp as members_heldPositions, gq as members_cancel, gr as members_edit, gs as members_onePing, gt as members_pings, bW as medals, gu as medals_since } from './messages-D8OfyZiq.js';
import { p as page } from './stores-ClpLLrvc.js';
import { M as MarkdownBody } from './MarkdownBody-CgSCkmio.js';
import { M as MemberAvatar } from './MemberAvatar-DsbxH0w2.js';
import { e as eventLink } from './redirect-A1ZqWr7F.js';
import { I as Input } from './Input-DbabE1Vy.js';
import { L as Labeled } from './Labeled-BBKTPJST.js';
import { p as programmes } from './schemas-CKip5ia7.js';
import { s as superForm } from './superForms-CCN_8vE4.js';
import { F as FormSelect } from './FormSelect-D5CeY-lk.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { g as getFileUrl } from './client3-CIDcnctW.js';
import { C as ClassBadge } from './ClassBadge-C_BgbZZ_.js';
import { t as toString } from './medals-DM-PEtvm.js';
import './pageTitle-Dw7hiKEr.js';
import './index2-Bcb5RUHj.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import 'marked';
import 'tailwind-merge';
import './i18n-B2SgmjJ3.js';
import './paths-CYDIOyak.js';
import './server-DiSvHEoN.js';
import './index-BHX467Gw.js';
import './index-CuABlRvJ.js';
import './types5-CwL0OX6I.js';
import 'dayjs';
import './toast2-BAKD7V1C.js';
import 'uuid';
import './superForm-DTXAq_ly.js';
import './superValidate-C2lU2J3v.js';
import './constants-BTUpIS8C.js';
import './index4-835RQQFE.js';
import './prod-ssr-DxkyU4_t.js';
import './scheduler-CzeG9NBC.js';
import './stringify-cFltMSLq.js';

const DoorAccess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { doorAccess } = $$props;
  if ($$props.doorAccess === void 0 && $$bindings.doorAccess && doorAccess !== void 0) $$bindings.doorAccess(doorAccess);
  return `<div class="my-2 text-xl font-bold" data-svelte-h="svelte-sed53n">Dörraccess</div> <ul class="flex flex-col gap-2">${each(doorAccess, (doorPolicy) => {
    return `<li class="flex items-center justify-between gap-4 rounded-lg bg-base-200 p-3"><div class="flex flex-col"><span class="font-semibold">${escape(doorPolicy.verboseName)}</span> ${doorPolicy.startDate != null || doorPolicy.endDate != null ? `<span class="text-nowrap text-[0.5rem] font-semibold opacity-50">${escape(doorPolicy.startDate?.toLocaleDateString(languageTag()) ?? "")}
            -
            ${escape(doorPolicy.endDate?.toLocaleDateString(languageTag()) ?? "")} </span>` : ``}</div> <div class="flex flex-1 flex-col items-stretch overflow-hidden text-right"><div class="flex flex-col text-xs font-bold opacity-50">${each(doorPolicy.roles, (role) => {
      return `<span class="overflow-hidden text-ellipsis whitespace-nowrap">${escape(role)}</span>`;
    })} </div></div> </li>`;
  })}</ul>`;
});
const ActivityButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { rightAdornment } = $$props;
  let { link } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.rightAdornment === void 0 && $$bindings.rightAdornment && rightAdornment !== void 0) $$bindings.rightAdornment(rightAdornment);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  return `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(link, void 0), 0)} class="btn grid grid-cols-[1fr_auto] justify-between normal-case"><h1 class="overflow-hidden text-ellipsis whitespace-nowrap text-left font-medium">${escape(title)}</h1> <div><span class="text-xs font-bold opacity-50">${escape(rightAdornment)}</span></div></a>`;
});
const PublishedArticles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { articles } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0) $$bindings.articles(articles);
  return `<h2 class="mb-2 text-lg">${escape(members_publishedArticles())}</h2> <div class="mb-4 flex flex-col gap-2">${each(articles, (article) => {
    return `${validate_component(ActivityButton, "ActivityButton").$$render(
      $$result,
      {
        link: "/news/" + article.slug,
        title: article.header,
        rightAdornment: article.publishedAt?.toLocaleDateString(languageTag()) ?? ""
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const PublishedEvents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  if ($$props.events === void 0 && $$bindings.events && events !== void 0) $$bindings.events(events);
  return `<h2 class="mb-2 text-lg">${escape(members_publishedEvents())}</h2> <div class="flex flex-col gap-2">${each(events, (event) => {
    return `${validate_component(ActivityButton, "ActivityButton").$$render(
      $$result,
      {
        link: eventLink(event),
        title: event.title,
        rightAdornment: event.startDatetime?.toLocaleDateString(languageTag())
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const UpdateMemberForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $constraints, $$unsubscribe_constraints;
  let $errors, $$unsubscribe_errors;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isEditing } = $$props;
  let { phadderGroups } = $$props;
  let { data } = $$props;
  const superform = superForm(data, {
    onResult: (event) => {
      if (event.result.type === "success") {
        isEditing = false;
      }
    }
  });
  const { form, errors, constraints, enhance } = superform;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  if ($$props.phadderGroups === void 0 && $$bindings.phadderGroups && phadderGroups !== void 0) $$bindings.phadderGroups(phadderGroups);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<form id="edit-member" method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/update`, void 0), 0)} class="form-control max-w-full gap-2"><div class="flex flex-wrap gap-2 [&>*]:flex-1">${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "firstName" }, { label: members_firstName() }, $constraints.firstName, { error: $errors.firstName }, { value: $form.firstName }),
      {
        value: ($$value) => {
          $form.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign(
        {},
        { name: "nickname" },
        {
          explanation: members_nickname_explanation()
        },
        { label: members_nickname() },
        $constraints.nickname,
        { error: $errors.nickname },
        { value: $form.nickname }
      ),
      {
        value: ($$value) => {
          $form.nickname = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "lastName" }, { label: members_lastName() }, $constraints.lastName, { error: $errors.lastName }, { value: $form.lastName }),
      {
        value: ($$value) => {
          $form.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> ${validate_component(Input, "Input").$$render(
      $$result,
      Object.assign({}, { name: "foodPreference" }, { label: members_foodPreference() }, { error: $errors.foodPreference }, $constraints.foodPreference, { value: $form.foodPreference }),
      {
        value: ($$value) => {
          $form.foodPreference = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="${[
      "flex w-full flex-wrap gap-2 [&>*:nth-child(3)]:flex-1",
      !isAuthorized(apiNames.MEMBER.UPDATE, $page.data.user) ? "hidden" : ""
    ].join(" ").trim()}">${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: members_programme(),
        error: $errors.classProgramme,
        fullWidth: true
      },
      {},
      {
        default: () => {
          return `<select${spread(
            [
              { id: "classProgramme" },
              { name: "classProgramme" },
              { class: "select select-bordered" },
              escape_object($constraints.classProgramme)
            ],
            {}
          )}>${each(programmes, (programme) => {
            return `<option${add_attribute("value", programme.id, 0)}>${escape(programme.name)}</option>`;
          })}</select>`;
        }
      }
    )} ${validate_component(Labeled, "Labeled").$$render(
      $$result,
      {
        label: members_year(),
        error: $errors.classYear,
        fullWidth: true
      },
      {},
      {
        default: () => {
          return `<input${spread(
            [
              { type: "number" },
              { name: "classYear" },
              { id: "classYear" },
              { class: "input input-bordered" },
              escape_object($constraints.classYear)
            ],
            {}
          )}${add_attribute("value", $form.classYear, 0)}>`;
        }
      }
    )} ${validate_component(FormSelect, "FormSelect").$$render(
      $$result,
      {
        superform,
        label: onboarding_phadderGroup(),
        field: "nollningGroupId",
        options: [
          { value: null, label: "-" },
          ...phadderGroups.filter((group) => group.year === ($form.classYear ?? (/* @__PURE__ */ new Date()).getFullYear)).map((group) => ({ value: group.id, label: group.name }))
        ]
      },
      {},
      {}
    )}</div> <button type="submit" class="btn btn-secondary mt-4">${escape(members_save())}</button></form>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_constraints();
  $$unsubscribe_errors();
  $$unsubscribe_page();
  return $$rendered;
});
const CommitteeSymbol = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dark;
  let light;
  let differentDarkLight;
  let { committee } = $$props;
  if ($$props.committee === void 0 && $$bindings.committee && committee !== void 0) $$bindings.committee(committee);
  dark = committee.symbolUrl?.endsWith("light.svg") ? committee.symbolUrl.slice(0, -9) + "dark.svg" : committee.symbolUrl;
  light = committee.symbolUrl?.endsWith("dark.svg") ? committee.symbolUrl.slice(0, -8) + "light.svg" : committee.symbolUrl;
  differentDarkLight = dark !== light;
  return `${differentDarkLight ? `<object data="https://raw.githubusercontent.com/Dsek-LTH/grafik/main/guild/d_sektionen/symbol/d.svg" type="“image/svg" title="${escape(committee.name, true) + " symbol"}" class="relative aspect-square"><img${add_attribute("src", getFileUrl(dark), 0)} alt="${escape(committee.name, true) + " symbol"}" class="absolute inset-0 hidden h-full w-full object-contain dark:block"> <img${add_attribute("src", getFileUrl(light), 0)} alt="${escape(committee.name, true) + " symbol"}" class="absolute inset-0 h-full w-full object-contain dark:hidden"></object>` : `<object data="https://raw.githubusercontent.com/Dsek-LTH/grafik/main/guild/d_sektionen/symbol/d.svg" type="“image/svg" title="${escape(committee.name, true) + " symbol"}" class="aspect-square"><img${add_attribute("src", getFileUrl(committee.symbolUrl), 0)} alt="${escape(committee.name, true) + " symbol"}" class="h-full w-full object-contain"></object>`}`;
});
const HeldPositionsYear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { year } = $$props;
  let { mandates } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.mandates === void 0 && $$bindings.mandates && mandates !== void 0) $$bindings.mandates(mandates);
  return `<section class="mb-4"><h1 class="text-xl font-semibold">${escape(year)}</h1> <div class="flex flex-col items-stretch gap-0">${each(mandates, (mandate) => {
    return `${mandate.position ? `<div class="tooltip -mx-4 whitespace-pre"${add_attribute("data-tip", mandate.position.committee?.name + `
${mandate.startDate.toLocaleDateString(languageTag())} - ${mandate.endDate.toLocaleDateString(languageTag())}`, 0)}><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/positions/${mandate.position.id}`, void 0), 0)} class="btn btn-ghost w-full justify-start gap-2 normal-case text-primary">${mandate.position.committee ? `<figure class="h-8 w-8 overflow-hidden">${validate_component(CommitteeSymbol, "CommitteeSymbol").$$render($$result, { committee: mandate.position.committee }, {}, {})} </figure>` : ``} <div class="flex flex-1 gap-4"><span class="gap-4 overflow-x-hidden text-ellipsis whitespace-nowrap text-left font-medium">${escape(mandate.position.name)}</span> ${mandate.phadderIn ? (() => {
      let group = mandate.phadderIn;
      return ` <a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/nollu?year=${new Date(mandate.startDate).getFullYear()}`, void 0), 0)} class="-my-[1em] flex items-center gap-1 text-base-content"><span class="text-2xl" data-svelte-h="svelte-utxo3t">(</span> ${group.imageUrl ? `<img${add_attribute("src", group.imageUrl, 0)} class="max-h-[2em] max-w-[2em] rounded-sm" alt="Group logo">` : ``} ${escape(group.name)} <span class="text-2xl" data-svelte-h="svelte-rlwidu">)</span> </a>`;
    })() : ``} </div></a> </div>` : ``}`;
  })}</div></section>`;
});
const HeldPositions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mandatesGroupedByYear;
  let years;
  let { mandates } = $$props;
  let { nollaIn = null } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.mandates === void 0 && $$bindings.mandates && mandates !== void 0) $$bindings.mandates(mandates);
  if ($$props.nollaIn === void 0 && $$bindings.nollaIn && nollaIn !== void 0) $$bindings.nollaIn(nollaIn);
  mandatesGroupedByYear = mandates.reduce(
    (acc, mandate) => {
      let year = mandate.startDate.getFullYear().toString();
      if (mandate.endDate.getFullYear() !== mandate.startDate.getFullYear()) year += `-${mandate.endDate.getFullYear()}`;
      if (!acc[year]) acc[year] = [];
      acc[year].push(mandate);
      return acc;
    },
    {}
  );
  years = (nollaIn && !Object.keys(mandatesGroupedByYear).includes(nollaIn.year.toString()) ? [nollaIn.year.toString(), ...Object.keys(mandatesGroupedByYear)] : Object.keys(mandatesGroupedByYear)).sort((a, b) => b.localeCompare(a, languageTag()));
  return `<div class="flex-1 md:flex-grow-0"><h2 class="mb-2 text-lg">${escape(members_heldPositions())}</h2> ${each(years, (year) => {
    let mandates2 = mandatesGroupedByYear[year];
    return ` ${mandates2 && mandates2.length > 0 ? `${validate_component(HeldPositionsYear, "HeldPositionsYear").$$render($$result, { mandates: mandates2, year }, {}, {})}` : ``} ${nollaIn?.year.toString() === year ? `<div class="-mx-4 -mt-4 mb-4"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`/committees/nollu?year=${nollaIn.year}`, void 0), 0)} class="btn btn-ghost w-full justify-start gap-2 font-medium normal-case text-primary">${nollaIn.imageUrl ? `<figure class="h-8 w-8 overflow-hidden rounded-sm"><img${add_attribute("src", nollaIn.imageUrl, 0)} alt="Group logo"> </figure>` : ``} <span>Nolla i <span class="font-bold text-primary">&quot;${escape(nollaIn?.name)}&quot;</span></span></a> </div>` : ``}`;
  })}</div>`;
});
const ProfileHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  let { email } = $$props;
  if ($$props.member === void 0 && $$bindings.member && member !== void 0) $$bindings.member(member);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0) $$bindings.email(email);
  return `<div class="flex flex-col justify-between gap-4"><div class="flex flex-col gap-1"><div class="max-w-full"><h1 class="line-clamp-3 break-words text-2xl font-bold sm:text-3xl"${add_attribute("title", getFullName(member), 0)}>${escape(getFullName(member))}</h1></div> <div class="order-2 flex flex-row items-center gap-2 text-nowrap lg:order-3"><div class="min-w-0 truncate text-sm opacity-80 sm:text-base">${escape(member.studentId)}</div> ${validate_component(ClassBadge, "ClassBadge").$$render($$result, { member, size: "sm" }, {}, {})}</div> ${email ? `<div class="order-4 select-all overflow-hidden break-all text-sm opacity-80 sm:text-base">${escape(email)}</div>` : ``}</div> <div class="hidden sm:block md:hidden">${slots.actions ? slots.actions({}) : ``}</div></div>`;
});
const EditButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isEditing } = $$props;
  if ($$props.isEditing === void 0 && $$bindings.isEditing && isEditing !== void 0) $$bindings.isEditing(isEditing);
  return `<button class="btn">${escape(isEditing ? members_cancel() : members_edit())}</button>`;
});
const PingButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { ping } = $$props;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.ping === void 0 && $$bindings.ping && ping !== void 0) $$bindings.ping(ping);
  $$unsubscribe_page();
  return `<form method="POST"${add_attribute("action", pArAgLiDe_translate_attribute_pass_translateAttribute(`?/ping`, void 0), 0)}> <button class="btn flex flex-col" ${(ping?.fromMemberId == $page.data.user?.memberId ? ping?.toSentAt == null || ping?.fromSentAt > ping?.toSentAt : ping?.toSentAt != null && ping?.toSentAt > ping?.fromSentAt) ? "disabled" : ""}>Ping
    ${ping ? `<div class="-mt-2 text-xs opacity-50">${escape((ping.count ?? 0) === 1 ? members_onePing() : members_pings({ x: ping.count ?? 0 }))}</div>` : ``}</button></form>`;
});
const Medals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { medals: medals$1 } = $$props;
  let sortedMedals = medals$1.toSorted((a, b) => a.after - b.after);
  const makeLink = (semester) => {
    const sp = new URLSearchParams([["semester", toString(semester)]]);
    return "/medals?" + sp;
  };
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.medals === void 0 && $$bindings.medals && medals$1 !== void 0) $$bindings.medals(medals$1);
  return `<div class="my-2 text-xl font-bold">${escape(medals())}</div> <ul class="flex flex-col gap-2">${each(sortedMedals, (medal) => {
    return `<a class="hover:underline"${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(makeLink(medal.after), void 0), 0)}><li class="flex items-center justify-between gap-4 rounded-lg bg-base-200 p-3"><div class="flex flex-col"><span class="font-semibold">${escape(medal.medal)}</span></div> <div class="flex flex-1 flex-col items-stretch overflow-hidden text-right"><div class="flex flex-col font-bold opacity-50">${escape(medals_since() + " " + toString(medal.after))}</div> </div></li> </a>`;
  })}</ul>`;
});
const ProfilePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let member;
  let publishedEvents;
  let isMe;
  let canEdit;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let isEditing = false;
  const pArAgLiDe_translate_attribute_pass_context = getContext("$paraglide-adapter-sveltekit:context");
  function pArAgLiDe_translate_attribute_pass_translateAttribute(value, lang_value) {
    if (typeof value !== "string") return value;
    if (!pArAgLiDe_translate_attribute_pass_context) return value;
    return pArAgLiDe_translate_attribute_pass_context.translateHref(value, lang_value);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    member = data.viewedMember;
    publishedEvents = [...member.authoredEvents].reverse();
    isMe = data.user?.studentId === $page.params["studentId"];
    canEdit = isMe || isAuthorized(apiNames.MEMBER.UPDATE, data.user);
    $$rendered = `${validate_component(SetPageTitle, "SetPageTitle").$$render($$result, { title: getFullName(member) }, {}, {})} <article class="grid grid-cols-1-2 gap-x-4 gap-y-2 md:grid-cols-5" id="container"><div class="aspect-square md:col-start-1 md:col-end-2">${validate_component(MemberAvatar, "MemberAvatar").$$render($$result, { member, class: "w-full rounded-lg" }, {}, {
      default: () => {
        return `${canEdit ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${$page.params["studentId"]}/profile-picture`, void 0), 0)} class="btn btn-square glass btn-secondary btn-sm absolute right-2 top-2"><span class="i-mdi-edit"></span></a>` : ``}`;
      }
    })}</div>  <header class="overflow-x-auto md:col-start-2 md:col-end-4">${validate_component(ProfileHeader, "ProfileHeader").$$render($$result, { member, email: data.email }, {}, {
      actions: () => {
        return `<div slot="actions" class="flex gap-2">${canEdit ? `${validate_component(EditButton, "EditButton").$$render(
          $$result,
          { isEditing },
          {
            isEditing: ($$value) => {
              isEditing = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``} ${!isMe && isAuthorized(apiNames.MEMBER.PING, data.user) ? `${validate_component(PingButton, "PingButton").$$render($$result, { ping: data.ping }, {}, {})}` : ``}</div>`;
      }
    })}</header> <div class="col-span-3 flex gap-2 sm:hidden">${canEdit ? `${validate_component(EditButton, "EditButton").$$render(
      $$result,
      { isEditing },
      {
        isEditing: ($$value) => {
          isEditing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${!isMe && isAuthorized(apiNames.MEMBER.PING, data.user) ? `${validate_component(PingButton, "PingButton").$$render($$result, { ping: data.ping }, {}, {})}` : ``}</div>  <article class="col-span-2 md:col-start-1 md:col-end-4 md:row-start-2">${isEditing ? `${validate_component(UpdateMemberForm, "UpdateMemberForm").$$render(
      $$result,
      {
        data: data.form,
        phadderGroups: data.phadderGroups,
        isEditing
      },
      {
        isEditing: ($$value) => {
          isEditing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${member.bio ? `${validate_component(MarkdownBody, "MarkdownBody").$$render($$result, { body: member.bio }, {}, {
      default: () => {
        return `${canEdit ? `<div class="float-right"><a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${$page.params["studentId"]}/edit-bio`, void 0), 0)} class="btn btn-outline btn-sm">${escape(members_editBio())}</a></div>` : ``}`;
      }
    })}` : `${canEdit ? `<a${add_attribute("href", pArAgLiDe_translate_attribute_pass_translateAttribute(`${$page.params["studentId"]}/edit-bio`, void 0), 0)} class="btn btn-outline btn-sm">${escape(members_addBio())}</a>` : ``}`}`}</article>  <section class="col-span-2 md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-13"><div class="hidden gap-2 md:flex md:justify-end">${canEdit ? `${validate_component(EditButton, "EditButton").$$render(
      $$result,
      { isEditing },
      {
        isEditing: ($$value) => {
          isEditing = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} ${!isMe && isAuthorized(apiNames.MEMBER.PING, data.user) ? `${validate_component(PingButton, "PingButton").$$render($$result, { ping: data.ping }, {}, {})}` : ``}</div> <div class="flex flex-col">${validate_component(HeldPositions, "HeldPositions").$$render(
      $$result,
      {
        mandates: member.mandates,
        nollaIn: member.nollaIn
      },
      {},
      {}
    )} ${data.publishedArticles.length > 0 ? `${validate_component(PublishedArticles, "PublishedArticles").$$render($$result, { articles: data.publishedArticles }, {}, {})}` : ``} ${publishedEvents.length > 0 ? `${validate_component(PublishedEvents, "PublishedEvents").$$render($$result, { events: member.authoredEvents }, {}, {})}` : ``}</div></section> ${data.medals.length > 0 ? `<section class="col-span-2 md:col-start-1 md:col-end-4 md:row-start-3 lg:col-end-3">${validate_component(Medals, "Medals").$$render($$result, { medals: data.medals }, {}, {})}</section>` : ``} ${data.doorAccess.length > 0 ? `<section class="col-span-2 md:col-start-1 md:col-end-4 md:row-start-4 lg:col-end-3">${validate_component(DoorAccess, "DoorAccess").$$render($$result, { doorAccess: data.doorAccess }, {}, {})}</section>` : ``}</article>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(SetPageTitle, "SetPageTitle").$$render(
    $$result,
    {
      title: data.member ? getFullName(data.member) : "Medlem"
    },
    {},
    {}
  )} ${validate_component(ProfilePage, "ProfilePage").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BsP_q9G3.js.map
