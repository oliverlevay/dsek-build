import { c as create_ssr_component, v as validate_component, b as escape, e as each, a as add_attribute } from './ssr-BoMjCg5r.js';
import { P as PageHeader } from './PageHeader-BOcEcHZe.js';
import { N as NotificationSettingType } from './types3-D4jKTO0f.js';
import { he as setting_title, hf as setting_notification, hg as setting_push, hh as setting_subscription, hi as setting_apply, hj as setting_like, hk as setting_comment, hl as setting_mention, hm as setting_new_article, hn as setting_event_going, ho as setting_create_mandate, hp as setting_booking_request, hq as setting_ping, hr as setting_purchases } from './messages-D8OfyZiq.js';

const SubscriptionTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { subscribedTags } = $$props;
  let { tags } = $$props;
  let selectedTags = tags.map((tag) => {
    if (subscribedTags.find((subTag) => subTag.id == tag.id)) return tag.id;
    else return "";
  }).filter((t) => t != "");
  if ($$props.subscribedTags === void 0 && $$bindings.subscribedTags && subscribedTags !== void 0) $$bindings.subscribedTags(subscribedTags);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
  return `<div${add_attribute("class", "flex flex-col items-center xl:grid xl:grid-cols-2", 0)}>${each(tags, (tag) => {
    return `<div class="m-1 flex w-full justify-self-center"><label class="ml-auto mr-auto flex max-w-full cursor-pointer items-center rounded-full border pl-2"${add_attribute("style", "border-color: " + tag.color + ";", 0)}><input type="checkbox" class="peer sr-only" name="tag"${add_attribute("value", tag.id, 0)}${~selectedTags.indexOf(tag.id) ? add_attribute("checked", true, 1) : ""}> <span class="ms-3 box-border max-w-80 break-words pb-1 pt-1 text-center text-sm font-medium xl:max-w-44">${escape(tag.name)}</span> <div class="peer relative ml-2 mr-1 h-5 w-9 rounded-full bg-gray-300 pr-9 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-gray-800 rtl:peer-checked:after:-translate-x-full"></div></label> </div>`;
  })}</div>`;
});
const SettingsPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let subscribedTags;
  let tags;
  let { data } = $$props;
  let subscriptionGroup = data.subscriptions;
  let pushGroup = data.pushSubscriptions;
  const notificationText = {
    LIKE: setting_like,
    COMMENT: setting_comment,
    MENTION: setting_mention,
    NEW_ARTICLE: setting_new_article,
    EVENT_GOING: setting_event_going,
    CREATE_MANDATE: setting_create_mandate,
    BOOKING_REQUEST: setting_booking_request,
    PING: setting_ping,
    PURCHASES: setting_purchases
  };
  const getNotificationText = (text) => {
    return notificationText[text]();
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  subscribedTags = data.subscribedTags;
  tags = data.tags;
  return `${validate_component(PageHeader, "PageHeader").$$render(
    $$result,
    {
      title: setting_title(),
      class: "text-center"
    },
    {},
    {}
  )} <div class="relative"><form method="POST" class="mt-2 flex w-full flex-col items-center justify-start gap-8 pb-24 lg:flex-row lg:items-start lg:justify-center"><div class="flex w-full max-w-2xl flex-col items-center lg:p-0"><h2 class="mb-2 self-center text-2xl font-bold">${escape(setting_notification())}</h2> <ul class="w-full divide-y-2 [&>*]:py-4">${each(Object.entries(NotificationSettingType), (notificationSettingType) => {
    return `<li class="w-full space-y-2 first:pt-0 last:pb-0"> <label class="flex cursor-pointer flex-row justify-between"><span class="flex-1 text-wrap text-sm font-medium">${escape(getNotificationText(notificationSettingType[1]))}</span> <input type="checkbox"${add_attribute("value", notificationSettingType[0], 0)} name="subscription" class="peer sr-only"${~subscriptionGroup.indexOf(notificationSettingType[0]) ? add_attribute("checked", true, 1) : ""}> <div class="peer relative h-6 w-11 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div></label>  <label${add_attribute(
      "class",
      !subscriptionGroup.find((a) => a == notificationSettingType[0]) ? "hidden" : "flex cursor-pointer flex-row justify-between",
      0
    )}><span class="ms-3 text-sm">${escape(setting_push())}</span> <input type="checkbox"${add_attribute("value", notificationSettingType[0], 0)} name="push" class="peer sr-only"${~pushGroup.indexOf(notificationSettingType[0]) ? add_attribute("checked", true, 1) : ""}> <div class="peer relative h-6 w-11 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-gray-800 rtl:peer-checked:after:-translate-x-full"></div></label> </li>`;
  })}</ul></div> <div class="flex w-full max-w-2xl flex-col items-center lg:p-0"><h2 class="mb-2 self-center text-2xl font-bold">${escape(setting_subscription())}</h2> ${validate_component(SubscriptionTags, "SubscriptionTags").$$render(
    $$result,
    {
      tags,
      subscribedTags: subscribedTags.subscribedTags
    },
    {},
    {}
  )}</div> <button class="btn btn-primary absolute bottom-0 mb-4 mt-4 w-full max-w-xl bg-primary" type="submit">${escape(setting_apply())}</button></form></div>`;
});

export { SettingsPage as S };
//# sourceMappingURL=SettingsPage-BH448ypx.js.map
