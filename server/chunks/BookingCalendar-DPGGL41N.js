import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, f as add_styles, m as missing_component, e as each } from './ssr-BoMjCg5r.js';
import { twMerge } from 'tailwind-merge';
import { l as get_current_component, s as setContext, b as subscribe, f as getContext, m as identity, g as get_store_value, i as is_function, j as set_store_value, r as run_all } from './lifecycle-DkuQBIPN.js';
import { t as tick, f as flush_render_callbacks } from './scheduler-CzeG9NBC.js';
import { w as writable, d as derived, r as readable } from './index2-Bcb5RUHj.js';
import { a as getFullName } from './member-DajX-teH.js';
import dayjs from 'dayjs';
import { ec as booking_accepted, ed as booking_denied, ee as booking_pending } from './messages-D8OfyZiq.js';

function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
const DAY_IN_SECONDS = 86400;
function createDate(input = void 0) {
  if (input !== void 0) {
    return input instanceof Date ? _fromLocalDate(input) : _fromISOString(input);
  }
  return _fromLocalDate(/* @__PURE__ */ new Date());
}
function createDuration(input) {
  if (typeof input === "number") {
    input = { seconds: input };
  } else if (typeof input === "string") {
    let seconds = 0, exp = 2;
    for (let part of input.split(":", 3)) {
      seconds += parseInt(part, 10) * Math.pow(60, exp--);
    }
    input = { seconds };
  } else if (input instanceof Date) {
    input = { hours: input.getUTCHours(), minutes: input.getUTCMinutes(), seconds: input.getUTCSeconds() };
  }
  let weeks = input.weeks || input.week || 0;
  return {
    years: input.years || input.year || 0,
    months: input.months || input.month || 0,
    days: weeks * 7 + (input.days || input.day || 0),
    seconds: (input.hours || input.hour || 0) * 60 * 60 + (input.minutes || input.minute || 0) * 60 + (input.seconds || input.second || 0),
    inWeeks: !!weeks
  };
}
function cloneDate(date) {
  return new Date(date.getTime());
}
function addDuration(date, duration, x = 1) {
  date.setUTCFullYear(date.getUTCFullYear() + x * duration.years);
  let month = date.getUTCMonth() + x * duration.months;
  date.setUTCMonth(month);
  month %= 12;
  if (month < 0) {
    month += 12;
  }
  while (date.getUTCMonth() !== month) {
    subtractDay(date);
  }
  date.setUTCDate(date.getUTCDate() + x * duration.days);
  date.setUTCSeconds(date.getUTCSeconds() + x * duration.seconds);
  return date;
}
function subtractDuration(date, duration, x = 1) {
  return addDuration(date, duration, -x);
}
function addDay(date, x = 1) {
  date.setUTCDate(date.getUTCDate() + x);
  return date;
}
function subtractDay(date, x = 1) {
  return addDay(date, -x);
}
function setMidnight(date) {
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function toLocalDate(date) {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
}
function toISOString(date, len = 19) {
  return date.toISOString().substring(0, len);
}
function datesEqual(date1, ...dates2) {
  return dates2.every((date2) => date1.getTime() === date2.getTime());
}
function nextClosestDay(date, day) {
  let diff2 = day - date.getUTCDay();
  date.setUTCDate(date.getUTCDate() + (diff2 >= 0 ? diff2 : diff2 + 7));
  return date;
}
function prevClosestDay(date, day) {
  let diff2 = day - date.getUTCDay();
  date.setUTCDate(date.getUTCDate() + (diff2 <= 0 ? diff2 : diff2 - 7));
  return date;
}
function noTimePart(date) {
  return typeof date === "string" && date.length <= 10;
}
function copyTime(toDate, fromDate) {
  toDate.setUTCHours(fromDate.getUTCHours(), fromDate.getUTCMinutes(), fromDate.getUTCSeconds(), 0);
  return toDate;
}
function toSeconds(duration) {
  return duration.seconds;
}
function nextDate(date, duration) {
  addDuration(date, duration);
  return date;
}
function prevDate(date, duration, hiddenDays) {
  subtractDuration(date, duration);
  if (hiddenDays.length && hiddenDays.length < 7) {
    while (hiddenDays.includes(date.getUTCDay())) {
      subtractDay(date);
    }
  }
  return date;
}
function _fromLocalDate(date) {
  return new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ));
}
function _fromISOString(str) {
  const parts = str.match(/\d+/g);
  return new Date(Date.UTC(
    Number(parts[0]),
    Number(parts[1]) - 1,
    Number(parts[2]),
    Number(parts[3] || 0),
    Number(parts[4] || 0),
    Number(parts[5] || 0)
  ));
}
function debounce(fn, handle, queueStore) {
  queueStore.update((queue) => queue.set(handle, fn));
}
function assign(...args) {
  return Object.assign(...args);
}
function keys(object) {
  return Object.keys(object);
}
function ceil(value) {
  return Math.ceil(value);
}
function min(...args) {
  return Math.min(...args);
}
function max(...args) {
  return Math.max(...args);
}
function symbol() {
  return Symbol("ec");
}
function isArray(value) {
  return Array.isArray(value);
}
function createElement(tag, className, content, attrs = []) {
  let el = document.createElement(tag);
  el.className = className;
  if (typeof content == "string") {
    el.innerText = content;
  } else if (content.domNodes) {
    el.replaceChildren(...content.domNodes);
  } else if (content.html) {
    el.innerHTML = content.html;
  }
  for (let attr of attrs) {
    el.setAttribute(...attr);
  }
  return el;
}
let payloadProp = symbol();
function hasPayload(el) {
  return !!el?.[payloadProp];
}
function getPayload(el) {
  return el[payloadProp];
}
function getElementWithPayload(x, y, root = document) {
  for (let el of root.elementsFromPoint(x, y)) {
    if (hasPayload(el)) {
      return el;
    }
    if (el.shadowRoot) {
      let shadowEl = getElementWithPayload(x, y, el.shadowRoot);
      if (shadowEl) {
        return shadowEl;
      }
    }
  }
  return null;
}
function createView(view2, _viewTitle, _currentRange, _activeRange) {
  return {
    type: view2,
    title: _viewTitle,
    currentStart: _currentRange.start,
    currentEnd: _currentRange.end,
    activeStart: _activeRange.start,
    activeEnd: _activeRange.end,
    calendar: void 0
  };
}
function toViewWithLocalDates(view2) {
  view2 = assign({}, view2);
  view2.currentStart = toLocalDate(view2.currentStart);
  view2.currentEnd = toLocalDate(view2.currentEnd);
  view2.activeStart = toLocalDate(view2.activeStart);
  view2.activeEnd = toLocalDate(view2.activeEnd);
  return view2;
}
function listView(view2) {
  return view2.startsWith("list");
}
let eventId = 1;
function createEvents(input) {
  return input.map((event) => {
    let result = {
      id: "id" in event ? String(event.id) : `{generated-${eventId++}}`,
      resourceIds: toArrayProp(event, "resourceId").map(String),
      allDay: event.allDay ?? (noTimePart(event.start) && noTimePart(event.end)),
      start: createDate(event.start),
      end: createDate(event.end),
      title: event.title ?? "",
      editable: event.editable,
      startEditable: event.startEditable,
      durationEditable: event.durationEditable,
      display: event.display ?? "auto",
      extendedProps: event.extendedProps ?? {},
      backgroundColor: event.backgroundColor ?? event.color,
      textColor: event.textColor,
      classNames: toArrayProp(event, "className"),
      styles: toArrayProp(event, "style")
    };
    if (result.allDay) {
      setMidnight(result.start);
      let end = cloneDate(result.end);
      setMidnight(result.end);
      if (!datesEqual(result.end, end) || datesEqual(result.end, result.start)) {
        addDay(result.end);
      }
    }
    return result;
  });
}
function toArrayProp(input, propName) {
  let result = input[propName + "s"] ?? input[propName] ?? [];
  return isArray(result) ? result : [result];
}
function createEventSources(input) {
  return input.map((source) => ({
    events: source.events,
    url: source.url && source.url.trimEnd("&") || "",
    method: source.method && source.method.toUpperCase() || "GET",
    extraParams: source.extraParams || {}
  }));
}
function createEventChunk(event, start, end) {
  return {
    start: event.start > start ? event.start : start,
    end: event.end < end ? event.end : end,
    event
  };
}
function sortEventChunks(chunks) {
  chunks.sort((a, b) => a.start - b.start || b.event.allDay - a.event.allDay);
}
function createEventContent(chunk, displayEventEnd, eventContent, theme, _intlEventTime, _view) {
  let timeText = _intlEventTime.formatRange(
    chunk.start,
    displayEventEnd && chunk.event.display !== "pointer" ? copyTime(cloneDate(chunk.start), chunk.end) : chunk.start
  );
  let content;
  if (eventContent) {
    content = is_function(eventContent) ? eventContent({
      event: toEventWithLocalDates(chunk.event),
      timeText,
      view: toViewWithLocalDates(_view)
    }) : eventContent;
  }
  if (content === void 0) {
    let domNodes;
    switch (chunk.event.display) {
      case "background":
        domNodes = [];
        break;
      case "pointer":
        domNodes = [createTimeElement(timeText, chunk, theme)];
        break;
      default:
        domNodes = [
          ...chunk.event.allDay ? [] : [createTimeElement(timeText, chunk, theme)],
          createElement("h4", theme.eventTitle, chunk.event.title)
        ];
    }
    content = { domNodes };
  }
  return [timeText, content];
}
function createTimeElement(timeText, chunk, theme) {
  return createElement(
    "time",
    theme.eventTime,
    timeText,
    [["datetime", toISOString(chunk.start)]]
  );
}
function createEventClasses(eventClassNames, event, _view) {
  let result = event.classNames;
  if (eventClassNames) {
    if (is_function(eventClassNames)) {
      eventClassNames = eventClassNames({
        event: toEventWithLocalDates(event),
        view: toViewWithLocalDates(_view)
      });
    }
    result = [
      ...isArray(eventClassNames) ? eventClassNames : [eventClassNames],
      ...result
    ];
  }
  return result;
}
function toEventWithLocalDates(event) {
  return _cloneEvent(event, toLocalDate);
}
function _cloneEvent(event, dateFn) {
  event = assign({}, event);
  event.start = dateFn(event.start);
  event.end = dateFn(event.end);
  return event;
}
function prepareEventChunks(chunks, hiddenDays) {
  let longChunks = {};
  if (chunks.length) {
    sortEventChunks(chunks);
    let prevChunk;
    for (let chunk of chunks) {
      let dates = [];
      let date = setMidnight(cloneDate(chunk.start));
      while (chunk.end > date) {
        if (!hiddenDays.includes(date.getUTCDay())) {
          dates.push(cloneDate(date));
          if (dates.length > 1) {
            let key = date.getTime();
            if (longChunks[key]) {
              longChunks[key].chunks.push(chunk);
            } else {
              longChunks[key] = {
                sorted: false,
                chunks: [chunk]
              };
            }
          }
        }
        addDay(date);
      }
      if (dates.length) {
        chunk.date = dates[0];
        chunk.days = dates.length;
        chunk.dates = dates;
        if (chunk.start < dates[0]) {
          chunk.start = dates[0];
        }
        let maxEnd = addDay(cloneDate(dates.at(-1)));
        if (chunk.end > maxEnd) {
          chunk.end = maxEnd;
        }
      } else {
        chunk.date = setMidnight(cloneDate(chunk.start));
        chunk.days = 1;
        chunk.dates = [chunk.date];
      }
      if (prevChunk && datesEqual(prevChunk.date, chunk.date)) {
        chunk.prev = prevChunk;
      }
      prevChunk = chunk;
    }
  }
  return longChunks;
}
function runReposition(refs, data) {
  refs.length = data.length;
  let result = [];
  for (let ref of refs) {
    result.push(ref?.reposition?.());
  }
  return result;
}
function eventIntersects(event, start, end, resource) {
  return event.start < end && event.end > start && (resource === void 0 || event.resourceIds.includes(resource.id));
}
function helperEvent(display) {
  return previewEvent(display) || ghostEvent(display) || pointerEvent(display);
}
function bgEvent(display) {
  return display === "background";
}
function previewEvent(display) {
  return display === "preview";
}
function ghostEvent(display) {
  return display === "ghost";
}
function pointerEvent(display) {
  return display === "pointer";
}
function btnTextDay(text) {
  return btnText(text, "day");
}
function btnTextWeek(text) {
  return btnText(text, "week");
}
function btnTextMonth(text) {
  return btnText(text, "month");
}
function btnText(text, period) {
  return {
    ...text,
    next: "Next " + period,
    prev: "Previous " + period
  };
}
function themeView(view2) {
  return (theme) => ({ ...theme, view: view2 });
}
function createResources(input) {
  return input.map((resource) => ({
    id: String(resource.id),
    title: resource.title || "",
    eventBackgroundColor: resource.eventBackgroundColor,
    eventTextColor: resource.eventTextColor
  }));
}
function resourceBackgroundColor(event, resources) {
  return findResource(event, resources)?.eventBackgroundColor;
}
function resourceTextColor(event, resources) {
  return findResource(event, resources)?.eventTextColor;
}
function findResource(event, resources) {
  return resources.find((resource) => event.resourceIds.includes(resource.id));
}
function intl(locale, format) {
  return derived([locale, format], ([$locale, $format]) => {
    let intl2 = is_function($format) ? { format: $format } : new Intl.DateTimeFormat($locale, $format);
    return {
      format: (date) => intl2.format(toLocalDate(date))
    };
  });
}
function intlRange(locale, format) {
  return derived([locale, format], ([$locale, $format]) => {
    let formatRange;
    if (is_function($format)) {
      formatRange = $format;
    } else {
      let intl2 = new Intl.DateTimeFormat($locale, $format);
      formatRange = (start, end) => {
        if (start <= end) {
          return intl2.formatRange(start, end);
        } else {
          let parts = intl2.formatRangeToParts(end, start);
          let result = "";
          let sources = ["startRange", "endRange"];
          let processed = [false, false];
          for (let part of parts) {
            let i = sources.indexOf(part.source);
            if (i >= 0) {
              if (!processed[i]) {
                result += _getParts(sources[1 - i], parts);
                processed[i] = true;
              }
            } else {
              result += part.value;
            }
          }
          return result;
        }
      };
    }
    return {
      formatRange: (start, end) => formatRange(toLocalDate(start), toLocalDate(end))
    };
  });
}
function _getParts(source, parts) {
  let result = "";
  for (let part of parts) {
    if (part.source == source) {
      result += part.value;
    }
  }
  return result;
}
function viewResources(state) {
  return derived(
    [state.resources, state.filterResourcesWithEvents, state._events, state._activeRange],
    ([$resources, $filterResourcesWithEvents, $_events, $_activeRange]) => {
      let result = $resources;
      if ($filterResourcesWithEvents) {
        result = $resources.filter((resource) => {
          for (let event of $_events) {
            if (event.display !== "background" && event.resourceIds.includes(resource.id) && event.start < $_activeRange.end && event.end > $_activeRange.start) {
              return true;
            }
          }
          return false;
        });
      }
      if (!result.length) {
        result = createResources([{}]);
      }
      return result;
    }
  );
}
function createTimes(date, $slotDuration, $_slotTimeLimits, $_intlSlotLabel) {
  date = cloneDate(date);
  let compact = $slotDuration.seconds < 3600;
  let times = [];
  let end = cloneDate(date);
  let i = 1;
  addDuration(date, $_slotTimeLimits.min);
  addDuration(end, $_slotTimeLimits.max);
  while (date < end) {
    times.push([
      toISOString(date),
      $_intlSlotLabel.format(date),
      times.length && (i || !compact)
    ]);
    addDuration(date, $slotDuration);
    i = 1 - i;
  }
  return times;
}
function createSlotTimeLimits($slotMinTime, $slotMaxTime, $flexibleSlotTimeLimits, $_viewDates, $_events) {
  let min$1 = createDuration($slotMinTime);
  let max$1 = createDuration($slotMaxTime);
  if ($flexibleSlotTimeLimits) {
    let minMin = createDuration(min(toSeconds(min$1), max(0, toSeconds(max$1) - DAY_IN_SECONDS)));
    let maxMax = createDuration(max(toSeconds(max$1), toSeconds(minMin) + DAY_IN_SECONDS));
    let filter = is_function($flexibleSlotTimeLimits?.eventFilter) ? $flexibleSlotTimeLimits.eventFilter : (event) => !bgEvent(event.display);
    loop: for (let date of $_viewDates) {
      let start = addDuration(cloneDate(date), min$1);
      let end = addDuration(cloneDate(date), max$1);
      let minStart = addDuration(cloneDate(date), minMin);
      let maxEnd = addDuration(cloneDate(date), maxMax);
      for (let event of $_events) {
        if (!event.allDay && filter(event) && event.start < maxEnd && event.end > minStart) {
          if (event.start < start) {
            let seconds = max((event.start - date) / 1e3, toSeconds(minMin));
            if (seconds < toSeconds(min$1)) {
              min$1.seconds = seconds;
            }
          }
          if (event.end > end) {
            let seconds = min((event.end - date) / 1e3, toSeconds(maxMax));
            if (seconds > toSeconds(max$1)) {
              max$1.seconds = seconds;
            }
          }
          if (toSeconds(min$1) === toSeconds(minMin) && toSeconds(max$1) === toSeconds(maxMax)) {
            break loop;
          }
        }
      }
    }
  }
  return { min: min$1, max: max$1 };
}
function createOptions(plugins) {
  let options = {
    allDayContent: void 0,
    allDaySlot: true,
    buttonText: {
      today: "today"
    },
    customButtons: {},
    date: /* @__PURE__ */ new Date(),
    datesSet: void 0,
    dayHeaderFormat: {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    },
    dayHeaderAriaLabelFormat: {
      dateStyle: "full"
    },
    displayEventEnd: true,
    duration: { weeks: 1 },
    events: [],
    eventAllUpdated: void 0,
    eventBackgroundColor: void 0,
    eventTextColor: void 0,
    eventClassNames: void 0,
    eventClick: void 0,
    eventColor: void 0,
    eventContent: void 0,
    eventDidMount: void 0,
    eventMouseEnter: void 0,
    eventMouseLeave: void 0,
    eventSources: [],
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    filterResourcesWithEvents: false,
    firstDay: 0,
    flexibleSlotTimeLimits: false,
    // ec option
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    height: void 0,
    hiddenDays: [],
    highlightedDates: [],
    // ec option
    lazyFetching: true,
    loading: void 0,
    locale: void 0,
    nowIndicator: false,
    resourceLabelContent: void 0,
    resourceLabelDidMount: void 0,
    resources: [],
    selectable: false,
    scrollTime: "06:00:00",
    slotDuration: "00:30:00",
    slotEventOverlap: true,
    slotHeight: 24,
    // ec option
    slotLabelFormat: {
      hour: "numeric",
      minute: "2-digit"
    },
    slotMaxTime: "24:00:00",
    slotMinTime: "00:00:00",
    slotWidth: 72,
    theme: {
      allDay: "ec-all-day",
      active: "ec-active",
      bgEvent: "ec-bg-event",
      bgEvents: "ec-bg-events",
      body: "ec-body",
      button: "ec-button",
      buttonGroup: "ec-button-group",
      calendar: "ec",
      compact: "ec-compact",
      content: "ec-content",
      day: "ec-day",
      dayHead: "ec-day-head",
      days: "ec-days",
      event: "ec-event",
      eventBody: "ec-event-body",
      eventTime: "ec-event-time",
      eventTitle: "ec-event-title",
      events: "ec-events",
      extra: "ec-extra",
      handle: "ec-handle",
      header: "ec-header",
      hiddenScroll: "ec-hidden-scroll",
      highlight: "ec-highlight",
      icon: "ec-icon",
      line: "ec-line",
      lines: "ec-lines",
      nowIndicator: "ec-now-indicator",
      otherMonth: "ec-other-month",
      resource: "ec-resource",
      sidebar: "ec-sidebar",
      sidebarTitle: "ec-sidebar-title",
      today: "ec-today",
      time: "ec-time",
      title: "ec-title",
      toolbar: "ec-toolbar",
      view: "",
      weekdays: ["ec-sun", "ec-mon", "ec-tue", "ec-wed", "ec-thu", "ec-fri", "ec-sat"],
      withScroll: "ec-with-scroll"
    },
    titleFormat: {
      year: "numeric",
      month: "short",
      day: "numeric"
    },
    view: void 0,
    viewDidMount: void 0,
    views: {}
  };
  for (let plugin of plugins) {
    plugin.createOptions?.(options);
  }
  return options;
}
function createParsers(plugins) {
  let parsers = {
    date: (date) => setMidnight(createDate(date)),
    duration: createDuration,
    events: createEvents,
    eventSources: createEventSources,
    hiddenDays: (days) => [...new Set(days)],
    highlightedDates: (dates) => dates.map((date) => setMidnight(createDate(date))),
    resources: createResources,
    scrollTime: createDuration,
    slotDuration: createDuration,
    slotMaxTime: createDuration,
    slotMinTime: createDuration
  };
  for (let plugin of plugins) {
    plugin.createParsers?.(parsers);
  }
  return parsers;
}
function diff(options, prevOptions) {
  let diff2 = [];
  for (let key of keys(options)) {
    if (options[key] !== prevOptions[key]) {
      diff2.push([key, options[key]]);
    }
  }
  assign(prevOptions, options);
  return diff2;
}
function dayGrid(state) {
  return derived(state.view, ($view) => $view?.startsWith("dayGrid"));
}
function activeRange(state) {
  return derived(
    [state._currentRange, state.firstDay, state.slotMaxTime, state._dayGrid],
    ([$_currentRange, $firstDay, $slotMaxTime, $_dayGrid]) => {
      let start = cloneDate($_currentRange.start);
      let end = cloneDate($_currentRange.end);
      if ($_dayGrid) {
        prevClosestDay(start, $firstDay);
        nextClosestDay(end, $firstDay);
      } else if ($slotMaxTime.days || $slotMaxTime.seconds > DAY_IN_SECONDS) {
        addDuration(subtractDay(end), $slotMaxTime);
        let start2 = subtractDay(cloneDate(end));
        if (start2 < start) {
          start = start2;
        }
      }
      return { start, end };
    }
  );
}
function currentRange(state) {
  return derived(
    [state.date, state.duration, state.firstDay],
    ([$date, $duration, $firstDay]) => {
      let start = cloneDate($date), end;
      if ($duration.months) {
        start.setUTCDate(1);
      } else if ($duration.inWeeks) {
        prevClosestDay(start, $firstDay);
      }
      end = addDuration(cloneDate(start), $duration);
      return { start, end };
    }
  );
}
function viewDates(state) {
  return derived([state._activeRange, state.hiddenDays], ([$_activeRange, $hiddenDays]) => {
    let dates = [];
    let date = setMidnight(cloneDate($_activeRange.start));
    let end = setMidnight(cloneDate($_activeRange.end));
    while (date < end) {
      if (!$hiddenDays.includes(date.getUTCDay())) {
        dates.push(cloneDate(date));
      }
      addDay(date);
    }
    if (!dates.length && $hiddenDays.length && $hiddenDays.length < 7) {
      state.date.update((date2) => {
        while ($hiddenDays.includes(date2.getUTCDay())) {
          addDay(date2);
        }
        return date2;
      });
      dates = get_store_value(state._viewDates);
    }
    return dates;
  });
}
function viewTitle(state) {
  return derived(
    [state.date, state._activeRange, state._intlTitle, state._dayGrid],
    ([$date, $_activeRange, $_intlTitle, $_dayGrid]) => {
      return $_dayGrid ? $_intlTitle.formatRange($date, $date) : $_intlTitle.formatRange($_activeRange.start, subtractDay(cloneDate($_activeRange.end)));
    }
  );
}
function view(state) {
  return derived([state.view, state._viewTitle, state._currentRange, state._activeRange], (args) => createView(...args));
}
function events(state) {
  let _events = writable([]);
  let abortController;
  let fetching = 0;
  let debounceHandle = {};
  derived(
    [state.events, state.eventSources, state._activeRange, state._fetchedRange, state.lazyFetching, state.loading],
    (values, set) => debounce(() => {
      let [$events, $eventSources, $_activeRange, $_fetchedRange, $lazyFetching, $loading] = values;
      if (!$eventSources.length) {
        set($events);
        return;
      }
      if (!$_fetchedRange.start || $_fetchedRange.start > $_activeRange.start || $_fetchedRange.end < $_activeRange.end || !$lazyFetching) {
        if (abortController) {
          abortController.abort();
        }
        abortController = new AbortController();
        if (is_function($loading) && !fetching) {
          $loading(true);
        }
        let stopLoading = () => {
          if (--fetching === 0 && is_function($loading)) {
            $loading(false);
          }
        };
        let events2 = [];
        let failure = (e) => stopLoading();
        let success = (data) => {
          events2 = events2.concat(createEvents(data));
          set(events2);
          stopLoading();
        };
        let startStr = toISOString($_activeRange.start);
        let endStr = toISOString($_activeRange.end);
        for (let source of $eventSources) {
          if (is_function(source.events)) {
            let result = source.events({
              start: toLocalDate($_activeRange.start),
              end: toLocalDate($_activeRange.end),
              startStr,
              endStr
            }, success, failure);
            if (result !== void 0) {
              Promise.resolve(result).then(success, failure);
            }
          } else {
            let params = is_function(source.extraParams) ? source.extraParams() : assign({}, source.extraParams);
            params.start = startStr;
            params.end = endStr;
            params = new URLSearchParams(params);
            let url = source.url, headers = {}, body;
            if (["GET", "HEAD"].includes(source.method)) {
              url += (url.includes("?") ? "&" : "?") + params;
            } else {
              headers["content-type"] = "application/x-www-form-urlencoded;charset=UTF-8";
              body = String(params);
            }
            fetch(url, { method: source.method, headers, body, signal: abortController.signal, credentials: "same-origin" }).then((response) => response.json()).then(success).catch(failure);
          }
          ++fetching;
        }
        $_fetchedRange.start = $_activeRange.start;
        $_fetchedRange.end = $_activeRange.end;
      }
    }, debounceHandle, state._queue),
    []
  ).subscribe(_events.set);
  return _events;
}
function now() {
  return readable(createDate(), (set) => {
    let interval = setInterval(() => {
      set(createDate());
    }, 1e3);
    return () => clearInterval(interval);
  });
}
function today(state) {
  return derived(state._now, ($_now) => setMidnight(cloneDate($_now)));
}
class State {
  constructor(plugins, input) {
    plugins = plugins || [];
    let options = createOptions(plugins);
    let parsers = createParsers(plugins);
    options = parseOpts(options, parsers);
    input = parseOpts(input, parsers);
    for (let [option, value] of Object.entries(options)) {
      this[option] = writable(value);
    }
    this._queue = writable(/* @__PURE__ */ new Map());
    this._queue2 = writable(/* @__PURE__ */ new Map());
    this._tasks = /* @__PURE__ */ new Map();
    this._auxiliary = writable([]);
    this._dayGrid = dayGrid(this);
    this._currentRange = currentRange(this);
    this._activeRange = activeRange(this);
    this._fetchedRange = writable({ start: void 0, end: void 0 });
    this._events = events(this);
    this._now = now();
    this._today = today(this);
    this._intlEventTime = intlRange(this.locale, this.eventTimeFormat);
    this._intlSlotLabel = intl(this.locale, this.slotLabelFormat);
    this._intlDayHeader = intl(this.locale, this.dayHeaderFormat);
    this._intlDayHeaderAL = intl(this.locale, this.dayHeaderAriaLabelFormat);
    this._intlTitle = intlRange(this.locale, this.titleFormat);
    this._bodyEl = writable(void 0);
    this._scrollable = writable(false);
    this._viewTitle = viewTitle(this);
    this._viewDates = viewDates(this);
    this._view = view(this);
    this._viewComponent = writable(void 0);
    this._interaction = writable({});
    this._iEvents = writable([null, null]);
    this._iClasses = writable(identity);
    this._iClass = writable(void 0);
    this._set = (key, value) => {
      if (validKey(key, this)) {
        if (parsers[key]) {
          value = parsers[key](value);
        }
        this[key].set(value);
      }
    };
    this._get = (key) => validKey(key, this) ? get_store_value(this[key]) : void 0;
    for (let plugin of plugins) {
      plugin.createStores?.(this);
    }
    if (input.view) {
      this.view.set(input.view);
    }
    let views = /* @__PURE__ */ new Set([...keys(options.views), ...keys(input.views ?? {})]);
    for (let view2 of views) {
      let defOpts = mergeOpts(options, options.views[view2] ?? {});
      let opts = mergeOpts(defOpts, input, input.views?.[view2] ?? {});
      let component = opts.component;
      filterOpts(opts, this);
      for (let key of keys(opts)) {
        let { set, _set = set, ...rest } = this[key];
        this[key] = {
          // Set value in all views
          set: ["buttonText", "theme"].includes(key) ? (value) => {
            if (is_function(value)) {
              let result = value(defOpts[key]);
              opts[key] = result;
              set(set === _set ? result : value);
            } else {
              opts[key] = value;
              set(value);
            }
          } : (value) => {
            opts[key] = value;
            set(value);
          },
          _set,
          ...rest
        };
      }
      this.view.subscribe((newView) => {
        if (newView === view2) {
          this._viewComponent.set(component);
          if (is_function(opts.viewDidMount)) {
            tick().then(() => opts.viewDidMount(get_store_value(this._view)));
          }
          for (let key of keys(opts)) {
            this[key]._set(opts[key]);
          }
        }
      });
    }
  }
}
function parseOpts(opts, parsers) {
  let result = { ...opts };
  for (let key of keys(parsers)) {
    if (key in result) {
      result[key] = parsers[key](result[key]);
    }
  }
  if (opts.views) {
    result.views = {};
    for (let view2 of keys(opts.views)) {
      result.views[view2] = parseOpts(opts.views[view2], parsers);
    }
  }
  return result;
}
function mergeOpts(...args) {
  let result = {};
  for (let opts of args) {
    let override = {};
    for (let key of ["buttonText", "theme"]) {
      if (is_function(opts[key])) {
        override[key] = opts[key](result[key]);
      }
    }
    result = {
      ...result,
      ...opts,
      ...override
    };
  }
  return result;
}
function filterOpts(opts, state) {
  keys(opts).filter((key) => !validKey(key, state) || key == "view").forEach((key) => delete opts[key]);
}
function validKey(key, state) {
  return state.hasOwnProperty(key) && key[0] !== "_";
}
const Buttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_duration;
  let $$unsubscribe_date;
  let $$unsubscribe_hiddenDays;
  let $_currentRange, $$unsubscribe__currentRange;
  let $theme, $$unsubscribe_theme;
  let $$unsubscribe__viewTitle;
  let $buttonText, $$unsubscribe_buttonText;
  let $customButtons, $$unsubscribe_customButtons;
  let $view, $$unsubscribe_view;
  let { buttons } = $$props;
  let { _currentRange, _viewTitle, buttonText, customButtons, date, duration, hiddenDays, theme, view: view2 } = getContext("state");
  $$unsubscribe__currentRange = subscribe(_currentRange, (value) => $_currentRange = value);
  $$unsubscribe__viewTitle = subscribe(_viewTitle, (value) => value);
  $$unsubscribe_buttonText = subscribe(buttonText, (value) => $buttonText = value);
  $$unsubscribe_customButtons = subscribe(customButtons, (value) => $customButtons = value);
  $$unsubscribe_date = subscribe(date, (value) => value);
  $$unsubscribe_duration = subscribe(duration, (value) => value);
  $$unsubscribe_hiddenDays = subscribe(hiddenDays, (value) => value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_view = subscribe(view2, (value) => $view = value);
  let today2 = setMidnight(createDate()), isToday;
  if ($$props.buttons === void 0 && $$bindings.buttons && buttons !== void 0) $$bindings.buttons(buttons);
  isToday = today2 >= $_currentRange.start && today2 < $_currentRange.end || null;
  $$unsubscribe_duration();
  $$unsubscribe_date();
  $$unsubscribe_hiddenDays();
  $$unsubscribe__currentRange();
  $$unsubscribe_theme();
  $$unsubscribe__viewTitle();
  $$unsubscribe_buttonText();
  $$unsubscribe_customButtons();
  $$unsubscribe_view();
  return `${each(buttons, (button) => {
    return `${button == "title" ? ` <h2${add_attribute("class", $theme.title, 0)}></h2>` : `${button == "prev" ? `<button class="${escape($theme.button, true) + " ec-" + escape(button, true)}"${add_attribute("aria-label", $buttonText.prev, 0)}${add_attribute("title", $buttonText.prev, 0)}><i class="${escape($theme.icon, true) + " ec-" + escape(button, true)}"></i></button>` : `${button == "next" ? `<button class="${escape($theme.button, true) + " ec-" + escape(button, true)}"${add_attribute("aria-label", $buttonText.next, 0)}${add_attribute("title", $buttonText.next, 0)}><i class="${escape($theme.icon, true) + " ec-" + escape(button, true)}"></i></button>` : `${button == "today" ? `<button class="${escape($theme.button, true) + " ec-" + escape(button, true)}" ${isToday ? "disabled" : ""}>${escape($buttonText[button])}</button>` : `${$customButtons[button] ? `<button class="${escape($theme.button, true) + " ec-" + escape(button, true) + escape($customButtons[button].active ? " " + $theme.active : "", true)}"></button>` : `${button != "" ? `<button class="${escape($theme.button, true) + escape($view === button ? " " + $theme.active : "", true) + " ec-" + escape(button, true)}">${escape($buttonText[button])}</button>` : ``}`}`}`}`}`}`;
  })}`;
});
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $headerToolbar, $$unsubscribe_headerToolbar;
  let $theme, $$unsubscribe_theme;
  let { headerToolbar, theme } = getContext("state");
  $$unsubscribe_headerToolbar = subscribe(headerToolbar, (value) => $headerToolbar = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let sections = { start: [], center: [], end: [] };
  {
    {
      for (let key of keys(sections)) {
        sections[key] = $headerToolbar[key].split(" ").map((group) => group.split(","));
      }
    }
  }
  $$unsubscribe_headerToolbar();
  $$unsubscribe_theme();
  return `<nav${add_attribute("class", $theme.toolbar, 0)}>${each(keys(sections), (key) => {
    return `<div class="${"ec-" + escape(key, true)}">${each(sections[key], (buttons) => {
      return `${buttons.length > 1 ? `<div${add_attribute("class", $theme.buttonGroup, 0)}>${validate_component(Buttons, "Buttons").$$render($$result, { buttons }, {}, {})} </div>` : `${validate_component(Buttons, "Buttons").$$render($$result, { buttons }, {}, {})}`}`;
    })} </div>`;
  })}</nav>`;
});
const Auxiliary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $_view, $$unsubscribe__view;
  let $datesSet, $$unsubscribe_datesSet;
  let $_activeRange, $$unsubscribe__activeRange;
  let $_auxiliary, $$unsubscribe__auxiliary;
  let { datesSet, _auxiliary, _activeRange, _queue, _view } = getContext("state");
  $$unsubscribe_datesSet = subscribe(datesSet, (value) => $datesSet = value);
  $$unsubscribe__auxiliary = subscribe(_auxiliary, (value) => $_auxiliary = value);
  $$unsubscribe__activeRange = subscribe(_activeRange, (value) => $_activeRange = value);
  $$unsubscribe__view = subscribe(_view, (value) => $_view = value);
  let debounceHandle = {};
  function runDatesSet(_activeRange2) {
    if (is_function($datesSet)) {
      debounce(
        () => $datesSet({
          start: toLocalDate(_activeRange2.start),
          end: toLocalDate(_activeRange2.end),
          startStr: toISOString(_activeRange2.start),
          endStr: toISOString(_activeRange2.end),
          view: toViewWithLocalDates($_view)
        }),
        debounceHandle,
        _queue
      );
    }
  }
  {
    runDatesSet($_activeRange);
  }
  $$unsubscribe__view();
  $$unsubscribe_datesSet();
  $$unsubscribe__activeRange();
  $$unsubscribe__auxiliary();
  return `${each($_auxiliary, (component) => {
    return `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}`;
  })}`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe__bodyEl;
  let $_scrollable, $$unsubscribe__scrollable;
  let $$unsubscribe__queue2;
  let $$unsubscribe__queue;
  let $hiddenDays, $$unsubscribe_hiddenDays;
  let $duration, $$unsubscribe_duration;
  let $date, $$unsubscribe_date;
  let $_interaction, $$unsubscribe__interaction;
  let $_events, $$unsubscribe__events;
  let $theme, $$unsubscribe_theme;
  let $_iClass, $$unsubscribe__iClass;
  let $height, $$unsubscribe_height;
  let $view, $$unsubscribe_view;
  let $_viewComponent, $$unsubscribe__viewComponent;
  let { plugins = [] } = $$props;
  let { options = {} } = $$props;
  let component = get_current_component();
  let state = new State(plugins, options);
  setContext("state", state);
  let { _viewComponent, _bodyEl, _interaction, _iClass, _events, _queue, _queue2, _tasks, _scrollable, date, duration, hiddenDays, height, theme, view: view2 } = state;
  $$unsubscribe__viewComponent = subscribe(_viewComponent, (value) => $_viewComponent = value);
  $$unsubscribe__bodyEl = subscribe(_bodyEl, (value) => value);
  $$unsubscribe__interaction = subscribe(_interaction, (value) => $_interaction = value);
  $$unsubscribe__iClass = subscribe(_iClass, (value) => $_iClass = value);
  $$unsubscribe__events = subscribe(_events, (value) => $_events = value);
  $$unsubscribe__queue = subscribe(_queue, (value) => value);
  $$unsubscribe__queue2 = subscribe(_queue2, (value) => value);
  $$unsubscribe__scrollable = subscribe(_scrollable, (value) => $_scrollable = value);
  $$unsubscribe_date = subscribe(date, (value) => $date = value);
  $$unsubscribe_duration = subscribe(duration, (value) => $duration = value);
  $$unsubscribe_hiddenDays = subscribe(hiddenDays, (value) => $hiddenDays = value);
  $$unsubscribe_height = subscribe(height, (value) => $height = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_view = subscribe(view2, (value) => $view = value);
  let prevOptions = { ...options };
  function setOption(name, value) {
    state._set(name, value);
    return this;
  }
  function getOption(name) {
    let value = state._get(name);
    return value instanceof Date ? toLocalDate(value) : value;
  }
  function refetchEvents() {
    state._fetchedRange.set({ start: void 0, end: void 0 });
    return this;
  }
  function getEvents() {
    return $_events.map(toEventWithLocalDates);
  }
  function getEventById(id) {
    for (let event of $_events) {
      if (event.id == id) {
        return toEventWithLocalDates(event);
      }
    }
    return null;
  }
  function addEvent(event) {
    event = createEvents([event])[0];
    $_events.push(event);
    _events.set($_events);
    return event;
  }
  function updateEvent(event) {
    for (let e of $_events) {
      if (e.id == event.id) {
        event = createEvents([event])[0];
        assign(e, event);
        _events.set($_events);
        return event;
      }
    }
    return null;
  }
  function removeEventById(id) {
    let idx = $_events.findIndex((event) => event.id == id);
    if (idx >= 0) {
      $_events.splice(idx, 1);
      _events.set($_events);
    }
    return this;
  }
  function getView() {
    return toViewWithLocalDates(get_store_value(state._view));
  }
  function unselect() {
    $_interaction.action?.unselect();
    return this;
  }
  function dateFromPoint(x, y) {
    let dayEl = getElementWithPayload(x, y);
    if (dayEl) {
      let info = getPayload(dayEl)(x, y);
      info.date = toLocalDate(info.date);
      return info;
    }
    return null;
  }
  function destroy() {
    destroy_component(component, true);
  }
  function next() {
    set_store_value(date, $date = nextDate($date, $duration), $date);
    return this;
  }
  function prev() {
    set_store_value(date, $date = prevDate($date, $duration, $hiddenDays), $date);
    return this;
  }
  getContext("$paraglide-adapter-sveltekit:context");
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0) $$bindings.plugins(plugins);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.setOption === void 0 && $$bindings.setOption && setOption !== void 0) $$bindings.setOption(setOption);
  if ($$props.getOption === void 0 && $$bindings.getOption && getOption !== void 0) $$bindings.getOption(getOption);
  if ($$props.refetchEvents === void 0 && $$bindings.refetchEvents && refetchEvents !== void 0) $$bindings.refetchEvents(refetchEvents);
  if ($$props.getEvents === void 0 && $$bindings.getEvents && getEvents !== void 0) $$bindings.getEvents(getEvents);
  if ($$props.getEventById === void 0 && $$bindings.getEventById && getEventById !== void 0) $$bindings.getEventById(getEventById);
  if ($$props.addEvent === void 0 && $$bindings.addEvent && addEvent !== void 0) $$bindings.addEvent(addEvent);
  if ($$props.updateEvent === void 0 && $$bindings.updateEvent && updateEvent !== void 0) $$bindings.updateEvent(updateEvent);
  if ($$props.removeEventById === void 0 && $$bindings.removeEventById && removeEventById !== void 0) $$bindings.removeEventById(removeEventById);
  if ($$props.getView === void 0 && $$bindings.getView && getView !== void 0) $$bindings.getView(getView);
  if ($$props.unselect === void 0 && $$bindings.unselect && unselect !== void 0) $$bindings.unselect(unselect);
  if ($$props.dateFromPoint === void 0 && $$bindings.dateFromPoint && dateFromPoint !== void 0) $$bindings.dateFromPoint(dateFromPoint);
  if ($$props.destroy === void 0 && $$bindings.destroy && destroy !== void 0) $$bindings.destroy(destroy);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0) $$bindings.next(next);
  if ($$props.prev === void 0 && $$bindings.prev && prev !== void 0) $$bindings.prev(prev);
  {
    for (let [name, value] of diff(options, prevOptions)) {
      setOption(name, value);
    }
  }
  $$unsubscribe__bodyEl();
  $$unsubscribe__scrollable();
  $$unsubscribe__queue2();
  $$unsubscribe__queue();
  $$unsubscribe_hiddenDays();
  $$unsubscribe_duration();
  $$unsubscribe_date();
  $$unsubscribe__interaction();
  $$unsubscribe__events();
  $$unsubscribe_theme();
  $$unsubscribe__iClass();
  $$unsubscribe_height();
  $$unsubscribe_view();
  $$unsubscribe__viewComponent();
  return `<div class="${escape($theme.calendar, true) + " " + escape($theme.view, true) + escape($_scrollable ? " " + $theme.withScroll : "", true) + escape($_iClass ? " " + $theme[$_iClass] : "", true)}"${add_attribute("role", listView($view) ? "list" : "table", 0)}${add_styles({ "height": $height })}>${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {})} ${validate_component($_viewComponent || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> ${validate_component(Auxiliary, "Auxiliary").$$render($$result, {}, {}, {})} `;
});
function dayTimeLimits(state) {
  return derived(
    [state.slotMinTime, state.slotMaxTime, state.flexibleSlotTimeLimits, state._viewDates, state._events],
    ([$slotMinTime, $slotMaxTime, $flexibleSlotTimeLimits, $_viewDates, $_events]) => {
      let dayTimeLimits2 = {};
      for (let date of $_viewDates) {
        dayTimeLimits2[date.getTime()] = createSlotTimeLimits(
          $slotMinTime,
          $slotMaxTime,
          $flexibleSlotTimeLimits,
          [date],
          $_events
        );
      }
      return dayTimeLimits2;
    }
  );
}
function dayTimes(state) {
  return derived(
    [state._viewDates, state.slotDuration, state._dayTimeLimits, state._intlSlotLabel],
    ([$_viewDates, $slotDuration, $_dayTimeLimits, $_intlSlotLabel]) => {
      let dayTimes2 = {};
      for (let date of $_viewDates) {
        let time = date.getTime();
        dayTimes2[time] = time in $_dayTimeLimits ? createTimes(date, $slotDuration, $_dayTimeLimits[time], $_intlSlotLabel) : [];
      }
      return dayTimes2;
    }
  );
}
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_resourceLabelDidMount;
  let $resourceLabelContent, $$unsubscribe_resourceLabelContent;
  let { resource } = $$props;
  let { date = void 0 } = $$props;
  let { resourceLabelContent, resourceLabelDidMount } = getContext("state");
  $$unsubscribe_resourceLabelContent = subscribe(resourceLabelContent, (value) => $resourceLabelContent = value);
  $$unsubscribe_resourceLabelDidMount = subscribe(resourceLabelDidMount, (value) => value);
  let el;
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  {
    if ($resourceLabelContent) {
      is_function($resourceLabelContent) ? $resourceLabelContent({
        resource,
        date: date ? toLocalDate(date) : void 0
      }) : $resourceLabelContent;
    } else {
      resource.title;
    }
  }
  $$unsubscribe_resourceLabelDidMount();
  $$unsubscribe_resourceLabelContent();
  return `<span${add_attribute("this", el, 0)}></span>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe__headerEl;
  let $theme, $$unsubscribe_theme;
  let $_sidebarEl, $$unsubscribe__sidebarEl;
  let $_viewResources, $$unsubscribe__viewResources;
  let $_resHs, $$unsubscribe__resHs;
  let { _viewResources, _headerEl, _resHs, _sidebarEl, theme } = getContext("state");
  $$unsubscribe__viewResources = subscribe(_viewResources, (value) => $_viewResources = value);
  $$unsubscribe__headerEl = subscribe(_headerEl, (value) => value);
  $$unsubscribe__resHs = subscribe(_resHs, (value) => $_resHs = value);
  $$unsubscribe__sidebarEl = subscribe(_sidebarEl, (value) => $_sidebarEl = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let titleHeight = 0;
  $$unsubscribe__headerEl();
  $$unsubscribe_theme();
  $$unsubscribe__sidebarEl();
  $$unsubscribe__viewResources();
  $$unsubscribe__resHs();
  return `<div${add_attribute("class", $theme.sidebar, 0)}><div${add_attribute("class", $theme.sidebarTitle, 0)} style="${"flex-basis: " + escape(titleHeight, true) + "px"}"></div> <div${add_attribute("class", $theme.content, 0)}${add_attribute("this", $_sidebarEl, 0)}>${each($_viewResources, (resource) => {
    return `<div${add_attribute("class", $theme.resource, 0)} style="${"flex-basis: " + escape(max($_resHs.get(resource) ?? 0, 34), true) + "px"}" role="rowheader">${validate_component(Label, "Label").$$render($$result, { resource }, {}, {})} </div>`;
  })}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let $_headerEl, $$unsubscribe__headerEl;
  let $_viewDates, $$unsubscribe__viewDates;
  let $slotDuration, $$unsubscribe_slotDuration;
  let $_intlDayHeaderAL, $$unsubscribe__intlDayHeaderAL;
  let $$unsubscribe__intlDayHeader;
  let $_dayTimes, $$unsubscribe__dayTimes;
  let { _headerEl, _intlDayHeader, _intlDayHeaderAL, _dayTimes, _viewDates, slotDuration, theme } = getContext("state");
  $$unsubscribe__headerEl = subscribe(_headerEl, (value) => $_headerEl = value);
  $$unsubscribe__intlDayHeader = subscribe(_intlDayHeader, (value) => value);
  $$unsubscribe__intlDayHeaderAL = subscribe(_intlDayHeaderAL, (value) => $_intlDayHeaderAL = value);
  $$unsubscribe__dayTimes = subscribe(_dayTimes, (value) => $_dayTimes = value);
  $$unsubscribe__viewDates = subscribe(_viewDates, (value) => $_viewDates = value);
  $$unsubscribe_slotDuration = subscribe(slotDuration, (value) => $slotDuration = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  $$unsubscribe__headerEl();
  $$unsubscribe__viewDates();
  $$unsubscribe_slotDuration();
  $$unsubscribe__intlDayHeaderAL();
  $$unsubscribe__intlDayHeader();
  $$unsubscribe__dayTimes();
  return `<div${add_attribute("class", $theme.header, 0)}${add_attribute("this", $_headerEl, 0)}><div${add_attribute("class", $theme.days, 0)} role="row">${each($_viewDates, (date) => {
    return `<div class="${escape($theme.day, true) + " " + escape($theme.weekdays?.[date.getUTCDay()], true)}">${toSeconds($slotDuration) ? `<div${add_attribute("class", $theme.dayHead, 0)}><time${add_attribute("datetime", toISOString(date, 10), 0)}${add_attribute("aria-label", $_intlDayHeaderAL.format(date), 0)}></time></div> <div${add_attribute("class", $theme.times, 0)}>${each($_dayTimes[date.getTime()], (time) => {
      return `<div${add_attribute("class", $theme.time, 0)} role="columnheader"><time${add_attribute("datetime", time[0], 0)}></time> </div>`;
    })} </div>` : `<div${add_attribute("class", $theme.time, 0)} role="columnheader"><time${add_attribute("datetime", toISOString(date, 10), 0)}${add_attribute("aria-label", $_intlDayHeaderAL.format(date), 0)}></time> </div>`} </div>`;
  })}</div> <div${add_attribute("class", $theme.hiddenScroll, 0)}></div></div>`;
});
function getSlotTimeLimits($_dayTimeLimits, date) {
  return $_dayTimeLimits[date.getTime()] ?? { min: createDuration(0), max: createDuration(0) };
}
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $slotDuration, $$unsubscribe_slotDuration;
  let $eventClick, $$unsubscribe_eventClick;
  let $_view, $$unsubscribe__view;
  let $$unsubscribe_eventAllUpdated;
  let $$unsubscribe_eventDidMount;
  let $_intlEventTime, $$unsubscribe__intlEventTime;
  let $theme, $$unsubscribe_theme;
  let $eventContent, $$unsubscribe_eventContent;
  let $displayEventEnd, $$unsubscribe_displayEventEnd;
  let $eventClassNames, $$unsubscribe_eventClassNames;
  let $_iClasses, $$unsubscribe__iClasses;
  let $eventTextColor, $$unsubscribe_eventTextColor;
  let $resources, $$unsubscribe_resources;
  let $eventColor, $$unsubscribe_eventColor;
  let $eventBackgroundColor, $$unsubscribe_eventBackgroundColor;
  let $slotWidth, $$unsubscribe_slotWidth;
  let $_dayTimeLimits, $$unsubscribe__dayTimeLimits;
  let $$unsubscribe_eventMouseEnter;
  let $$unsubscribe_eventMouseLeave;
  let $_interaction, $$unsubscribe__interaction;
  let { date } = $$props;
  let { chunk } = $$props;
  let { dayChunks = [] } = $$props;
  let { longChunks = {} } = $$props;
  let { resource = void 0 } = $$props;
  let { displayEventEnd, eventAllUpdated, eventBackgroundColor, eventTextColor, eventColor, eventContent, eventClick, eventDidMount, eventClassNames, eventMouseEnter, eventMouseLeave, resources, slotDuration, slotWidth: slotWidth2, theme, _view, _intlEventTime, _interaction, _iClasses, _dayTimeLimits, _tasks } = getContext("state");
  $$unsubscribe_displayEventEnd = subscribe(displayEventEnd, (value) => $displayEventEnd = value);
  $$unsubscribe_eventAllUpdated = subscribe(eventAllUpdated, (value) => value);
  $$unsubscribe_eventBackgroundColor = subscribe(eventBackgroundColor, (value) => $eventBackgroundColor = value);
  $$unsubscribe_eventTextColor = subscribe(eventTextColor, (value) => $eventTextColor = value);
  $$unsubscribe_eventColor = subscribe(eventColor, (value) => $eventColor = value);
  $$unsubscribe_eventContent = subscribe(eventContent, (value) => $eventContent = value);
  $$unsubscribe_eventClick = subscribe(eventClick, (value) => $eventClick = value);
  $$unsubscribe_eventDidMount = subscribe(eventDidMount, (value) => value);
  $$unsubscribe_eventClassNames = subscribe(eventClassNames, (value) => $eventClassNames = value);
  $$unsubscribe_eventMouseEnter = subscribe(eventMouseEnter, (value) => value);
  $$unsubscribe_eventMouseLeave = subscribe(eventMouseLeave, (value) => value);
  $$unsubscribe_resources = subscribe(resources, (value) => $resources = value);
  $$unsubscribe_slotDuration = subscribe(slotDuration, (value) => $slotDuration = value);
  $$unsubscribe_slotWidth = subscribe(slotWidth2, (value) => $slotWidth = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe__view = subscribe(_view, (value) => $_view = value);
  $$unsubscribe__intlEventTime = subscribe(_intlEventTime, (value) => $_intlEventTime = value);
  $$unsubscribe__interaction = subscribe(_interaction, (value) => $_interaction = value);
  $$unsubscribe__iClasses = subscribe(_iClasses, (value) => $_iClasses = value);
  $$unsubscribe__dayTimeLimits = subscribe(_dayTimeLimits, (value) => $_dayTimeLimits = value);
  let el;
  let event;
  let display;
  let classes;
  let style;
  let onclick;
  let margin = helperEvent(chunk.event.display) ? 1 : 0;
  let width = 0;
  function createHandler(fn, display2) {
    return !helperEvent(display2) && is_function(fn) ? (jsEvent) => fn({
      event: toEventWithLocalDates(event),
      el,
      jsEvent,
      view: toViewWithLocalDates($_view)
    }) : void 0;
  }
  function reposition() {
    {
      return 0;
    }
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.chunk === void 0 && $$bindings.chunk && chunk !== void 0) $$bindings.chunk(chunk);
  if ($$props.dayChunks === void 0 && $$bindings.dayChunks && dayChunks !== void 0) $$bindings.dayChunks(dayChunks);
  if ($$props.longChunks === void 0 && $$bindings.longChunks && longChunks !== void 0) $$bindings.longChunks(longChunks);
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  if ($$props.reposition === void 0 && $$bindings.reposition && reposition !== void 0) $$bindings.reposition(reposition);
  event = chunk.event;
  {
    {
      display = event.display;
      let step = toSeconds($slotDuration);
      if (step) {
        let start = (chunk.start - date) / 1e3;
        let end = (chunk.end - date) / 1e3;
        let slotTimeLimits = getSlotTimeLimits($_dayTimeLimits, date);
        let offsetStart = toSeconds(slotTimeLimits.min);
        let offsetEnd = toSeconds(slotTimeLimits.max);
        start -= offsetStart;
        if (start < 0) {
          start = 0;
        }
        if (start > offsetEnd - offsetStart) {
          start = offsetEnd - offsetStart;
        }
        let cut = 0;
        for (let i = 0; i < chunk.days; ++i) {
          let slotTimeLimits2 = getSlotTimeLimits($_dayTimeLimits, chunk.dates[i]);
          let offsetStart2 = toSeconds(slotTimeLimits2.min);
          let offsetEnd2 = toSeconds(slotTimeLimits2.max);
          let dayStart = DAY_IN_SECONDS * i;
          let dayEnd = dayStart + DAY_IN_SECONDS;
          if (dayEnd > end) {
            dayEnd = end;
          }
          if (dayEnd > dayStart + offsetEnd2) {
            cut += dayEnd - dayStart - offsetEnd2;
          }
          let c = end - dayStart;
          if (c > offsetStart2) {
            c = offsetStart2;
          }
          cut += c;
        }
        end -= cut;
        let left = start / step * $slotWidth;
        width = (end - start) / step * $slotWidth;
        style = `left:${left}px;width:${width}px;`;
      } else {
        width = chunk.days * 100;
        style = `width:${width}%;`;
      }
      let bgColor = event.backgroundColor || resourceBackgroundColor(event, $resources) || $eventBackgroundColor || $eventColor;
      let txtColor = event.textColor || resourceTextColor(event, $resources) || $eventTextColor;
      let marginTop = margin;
      if (event._margin) {
        let [_margin, _resource] = event._margin;
        if (resource === _resource) {
          marginTop = _margin;
        }
      }
      style += `margin-top:${marginTop}px;`;
      if (bgColor) {
        style += `background-color:${bgColor};`;
      }
      if (txtColor) {
        style += `color:${txtColor};`;
      }
      style += event.styles.join(";");
      classes = [
        bgEvent(display) ? $theme.bgEvent : $theme.event,
        ...$_iClasses([], event),
        ...createEventClasses($eventClassNames, event, $_view)
      ].join(" ");
    }
  }
  createEventContent(chunk, $displayEventEnd, $eventContent, $theme, $_intlEventTime, $_view);
  onclick = !bgEvent(display) && createHandler($eventClick, display);
  $$unsubscribe_slotDuration();
  $$unsubscribe_eventClick();
  $$unsubscribe__view();
  $$unsubscribe_eventAllUpdated();
  $$unsubscribe_eventDidMount();
  $$unsubscribe__intlEventTime();
  $$unsubscribe_theme();
  $$unsubscribe_eventContent();
  $$unsubscribe_displayEventEnd();
  $$unsubscribe_eventClassNames();
  $$unsubscribe__iClasses();
  $$unsubscribe_eventTextColor();
  $$unsubscribe_resources();
  $$unsubscribe_eventColor();
  $$unsubscribe_eventBackgroundColor();
  $$unsubscribe_slotWidth();
  $$unsubscribe__dayTimeLimits();
  $$unsubscribe_eventMouseEnter();
  $$unsubscribe_eventMouseLeave();
  $$unsubscribe__interaction();
  return `${width > 0 ? ` <article${add_attribute("class", classes, 0)}${add_attribute("style", style, 0)}${add_attribute("role", onclick ? "button" : void 0, 0)}${add_attribute("tabindex", onclick ? 0 : void 0, 0)}${add_attribute("this", el, 0)}><div${add_attribute("class", $theme.eventBody, 0)}></div> ${validate_component($_interaction.resizer || missing_component, "svelte:component").$$render($$result, { event }, {}, {})}</article>` : ``}`;
});
const Day = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slotWidth;
  let $slotDuration, $$unsubscribe_slotDuration;
  let $highlightedDates, $$unsubscribe_highlightedDates;
  let $_today, $$unsubscribe__today;
  let $_dayTimeLimits, $$unsubscribe__dayTimeLimits;
  let $theme, $$unsubscribe_theme;
  let $$unsubscribe__interaction;
  let { date } = $$props;
  let { resource } = $$props;
  let { chunks } = $$props;
  let { bgChunks } = $$props;
  let { longChunks } = $$props;
  let { iChunks = [] } = $$props;
  let { highlightedDates, slotDuration, slotWidth: slotWidth2, theme, _interaction, _today, _dayTimeLimits } = getContext("state");
  $$unsubscribe_highlightedDates = subscribe(highlightedDates, (value) => $highlightedDates = value);
  $$unsubscribe_slotDuration = subscribe(slotDuration, (value) => $slotDuration = value);
  $$unsubscribe_slotWidth = subscribe(slotWidth2, (value) => value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe__interaction = subscribe(_interaction, (value) => value);
  $$unsubscribe__today = subscribe(_today, (value) => $_today = value);
  $$unsubscribe__dayTimeLimits = subscribe(_dayTimeLimits, (value) => $_dayTimeLimits = value);
  let el;
  let dayChunks, dayBgChunks;
  let isToday, highlight;
  let refs = [];
  let slotTimeLimits;
  let allDay;
  let pointerIdx = 1;
  function chunkIntersects(chunk) {
    return datesEqual(chunk.date, date);
  }
  function reposition() {
    return max(...runReposition(refs, dayChunks));
  }
  if ($$props.date === void 0 && $$bindings.date && date !== void 0) $$bindings.date(date);
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  if ($$props.chunks === void 0 && $$bindings.chunks && chunks !== void 0) $$bindings.chunks(chunks);
  if ($$props.bgChunks === void 0 && $$bindings.bgChunks && bgChunks !== void 0) $$bindings.bgChunks(bgChunks);
  if ($$props.longChunks === void 0 && $$bindings.longChunks && longChunks !== void 0) $$bindings.longChunks(longChunks);
  if ($$props.iChunks === void 0 && $$bindings.iChunks && iChunks !== void 0) $$bindings.iChunks(iChunks);
  if ($$props.reposition === void 0 && $$bindings.reposition && reposition !== void 0) $$bindings.reposition(reposition);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        slotTimeLimits = getSlotTimeLimits($_dayTimeLimits, date);
        addDuration(cloneDate(date), slotTimeLimits.min);
        addDuration(cloneDate(date), slotTimeLimits.max);
      }
    }
    {
      {
        allDay = !toSeconds($slotDuration);
        pointerIdx = allDay ? 2 : 1;
      }
    }
    dayChunks = chunks.filter(chunkIntersects);
    dayBgChunks = bgChunks.filter((bgChunk) => (!allDay || bgChunk.event.allDay) && chunkIntersects(bgChunk));
    isToday = datesEqual(date, $_today);
    highlight = $highlightedDates.some((d) => datesEqual(d, date));
    $$rendered = `<div class="${escape($theme.day, true) + " " + escape($theme.weekdays?.[date.getUTCDay()], true) + escape(isToday ? " " + $theme.today : "", true) + escape(highlight ? " " + $theme.highlight : "", true)}" style="${"flex-grow: " + escape(
      allDay ? null : ceil((toSeconds(slotTimeLimits.max) - toSeconds(slotTimeLimits.min)) / toSeconds($slotDuration)),
      true
    )}" role="cell"${add_attribute("this", el, 0)}><div${add_attribute("class", $theme.events, 0)}>${each(dayBgChunks, (chunk) => {
      return `${validate_component(Event, "Event").$$render($$result, { date, chunk }, {}, {})}`;
    })}  ${iChunks[pointerIdx] && datesEqual(iChunks[pointerIdx].date, date) ? `${validate_component(Event, "Event").$$render($$result, { date, chunk: iChunks[pointerIdx] }, {}, {})}` : ``} ${each(dayChunks, (chunk, i) => {
      return `${validate_component(Event, "Event").$$render(
        $$result,
        {
          date,
          chunk,
          dayChunks,
          longChunks,
          resource,
          this: refs[i]
        },
        {
          this: ($$value) => {
            refs[i] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}  ${iChunks[0] && datesEqual(iChunks[0].date, date) ? `${validate_component(Event, "Event").$$render($$result, { date, chunk: iChunks[0], resource }, {}, {})}` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_slotWidth();
  $$unsubscribe_slotDuration();
  $$unsubscribe_highlightedDates();
  $$unsubscribe__today();
  $$unsubscribe__dayTimeLimits();
  $$unsubscribe_theme();
  $$unsubscribe__interaction();
  return $$rendered;
});
const Days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hiddenDays, $$unsubscribe_hiddenDays;
  let $_iEvents, $$unsubscribe__iEvents;
  let $_events, $$unsubscribe__events;
  let $_resHs, $$unsubscribe__resHs;
  let $_viewDates, $$unsubscribe__viewDates;
  let $theme, $$unsubscribe_theme;
  let { resource } = $$props;
  let { _viewDates, _events, _iEvents, _queue2, _resHs, hiddenDays, theme } = getContext("state");
  $$unsubscribe__viewDates = subscribe(_viewDates, (value) => $_viewDates = value);
  $$unsubscribe__events = subscribe(_events, (value) => $_events = value);
  $$unsubscribe__iEvents = subscribe(_iEvents, (value) => $_iEvents = value);
  $$unsubscribe__resHs = subscribe(_resHs, (value) => $_resHs = value);
  $$unsubscribe_hiddenDays = subscribe(hiddenDays, (value) => $hiddenDays = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let chunks, bgChunks, longChunks, iChunks = [];
  let start;
  let end;
  let refs = [];
  let height = 0;
  let debounceHandle = {};
  function reposition() {
    debounce(
      () => {
        height = ceil(max(...runReposition(refs, $_viewDates))) + 10;
        $_resHs.set(resource, height);
        _resHs.set($_resHs);
      },
      debounceHandle,
      _queue2
    );
  }
  if ($$props.resource === void 0 && $$bindings.resource && resource !== void 0) $$bindings.resource(resource);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        start = $_viewDates[0];
        end = addDay(cloneDate($_viewDates.at(-1)));
      }
    }
    {
      {
        chunks = [];
        bgChunks = [];
        for (let event of $_events) {
          if (eventIntersects(event, start, end, resource)) {
            let chunk = createEventChunk(event, start, end);
            if (bgEvent(event.display)) {
              bgChunks.push(chunk);
            } else {
              chunks.push(chunk);
            }
          }
        }
        prepareEventChunks(bgChunks, $hiddenDays);
        longChunks = prepareEventChunks(chunks, $hiddenDays);
        reposition();
      }
    }
    iChunks = $_iEvents.map((event) => {
      let chunk;
      if (event && eventIntersects(event, start, end, resource)) {
        chunk = createEventChunk(event, start, end);
        prepareEventChunks([chunk], $hiddenDays);
      } else {
        chunk = null;
      }
      return chunk;
    });
    $$rendered = `<div${add_attribute("class", $theme.days, 0)} style="${"flex-basis: " + escape(max(height, 34), true) + "px"}" role="row">${each($_viewDates, (date, i) => {
      return `${validate_component(Day, "Day").$$render(
        $$result,
        {
          date,
          resource,
          chunks,
          bgChunks,
          longChunks,
          iChunks,
          this: refs[i]
        },
        {
          this: ($$value) => {
            refs[i] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> `;
  } while (!$$settled);
  $$unsubscribe_hiddenDays();
  $$unsubscribe__iEvents();
  $$unsubscribe__events();
  $$unsubscribe__resHs();
  $$unsubscribe__viewDates();
  $$unsubscribe_theme();
  return $$rendered;
});
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_slotWidth;
  let $$unsubscribe_slotDuration;
  let $$unsubscribe_scrollTime;
  let $_viewDates, $$unsubscribe__viewDates;
  let $$unsubscribe__dayTimeLimits;
  let $_bodyEl, $$unsubscribe__bodyEl;
  let $$unsubscribe__sidebarEl;
  let $$unsubscribe__headerEl;
  let $theme, $$unsubscribe_theme;
  let $_dayTimes, $$unsubscribe__dayTimes;
  let $_viewResources, $$unsubscribe__viewResources;
  let { _bodyEl, _headerEl, _sidebarEl, _dayTimes, _dayTimeLimits, _viewResources, _viewDates, scrollTime, slotDuration, slotWidth: slotWidth2, theme } = getContext("state");
  $$unsubscribe__bodyEl = subscribe(_bodyEl, (value) => $_bodyEl = value);
  $$unsubscribe__headerEl = subscribe(_headerEl, (value) => value);
  $$unsubscribe__sidebarEl = subscribe(_sidebarEl, (value) => value);
  $$unsubscribe__dayTimes = subscribe(_dayTimes, (value) => $_dayTimes = value);
  $$unsubscribe__dayTimeLimits = subscribe(_dayTimeLimits, (value) => value);
  $$unsubscribe__viewResources = subscribe(_viewResources, (value) => $_viewResources = value);
  $$unsubscribe__viewDates = subscribe(_viewDates, (value) => $_viewDates = value);
  $$unsubscribe_scrollTime = subscribe(scrollTime, (value) => value);
  $$unsubscribe_slotDuration = subscribe(slotDuration, (value) => value);
  $$unsubscribe_slotWidth = subscribe(slotWidth2, (value) => value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let el;
  set_store_value(_bodyEl, $_bodyEl = el, $_bodyEl);
  $$unsubscribe_slotWidth();
  $$unsubscribe_slotDuration();
  $$unsubscribe_scrollTime();
  $$unsubscribe__viewDates();
  $$unsubscribe__dayTimeLimits();
  $$unsubscribe__bodyEl();
  $$unsubscribe__sidebarEl();
  $$unsubscribe__headerEl();
  $$unsubscribe_theme();
  $$unsubscribe__dayTimes();
  $$unsubscribe__viewResources();
  return `<div${add_attribute("class", $theme.body, 0)}${add_attribute("this", el, 0)}><div${add_attribute("class", $theme.content, 0)}><div${add_attribute("class", $theme.lines, 0)}>${each($_viewDates, (date) => {
    return `${each($_dayTimes[date.getTime()], (time) => {
      return `<div${add_attribute("class", $theme.line, 0)}></div>`;
    })}`;
  })}</div> ${each($_viewResources, (resource) => {
    return `${validate_component(Days, "Days").$$render($$result, { resource }, {}, {})}`;
  })}</div></div>`;
});
const View = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  let { theme } = getContext("state");
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<div${add_attribute("class", $theme.container, 0)}>${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <div${add_attribute("class", $theme.main, 0)}>${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Body, "Body").$$render($$result, {}, {}, {})}</div></div>`;
});
const TimeGrid = {
  createOptions(options) {
    options.buttonText.resourceTimelineDay = "timeline";
    options.buttonText.resourceTimelineWeek = "timeline";
    options.buttonText.resourceTimelineMonth = "timeline";
    options.theme.main = "ec-main";
    options.theme.times = "ec-times";
    options.theme.container = "ec-container";
    options.view = "resourceTimelineWeek";
    options.views.resourceTimelineDay = {
      buttonText: btnTextDay,
      component: View,
      displayEventEnd: false,
      dayHeaderFormat: { weekday: "long" },
      duration: { days: 1 },
      slotDuration: "01:00",
      theme: themeView("ec-timeline ec-resource-day-view"),
      titleFormat: { year: "numeric", month: "long", day: "numeric" }
    };
    options.views.resourceTimelineWeek = {
      buttonText: btnTextWeek,
      component: View,
      displayEventEnd: false,
      duration: { weeks: 1 },
      slotDuration: "01:00",
      theme: themeView("ec-timeline ec-resource-week-view")
    };
    options.views.resourceTimelineMonth = {
      buttonText: btnTextMonth,
      component: View,
      displayEventEnd: false,
      dayHeaderFormat: {
        weekday: "short",
        day: "numeric"
      },
      duration: { months: 1 },
      slotDuration: { days: 1 },
      theme: themeView("ec-timeline ec-resource-month-view"),
      titleFormat: { year: "numeric", month: "long" }
    };
  },
  createStores(state) {
    if (!("_viewResources" in state)) {
      state._viewResources = viewResources(state);
    }
    state._headerEl = writable(void 0);
    state._dayTimeLimits = dayTimeLimits(state);
    state._dayTimes = dayTimes(state);
    state._resHs = writable(/* @__PURE__ */ new Map());
    state._sidebarEl = writable(void 0);
  }
};
const slotWidth = 150;
const BookingCalendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bookingRequests } = $$props;
  let { bookables } = $$props;
  let { class: clazz = "" } = $$props;
  let plugins = [TimeGrid];
  let options = {
    view: "resourceTimelineMonth",
    events: bookingRequests.filter((booking) => booking.start !== null && booking.end !== null).map((booking) => ({
      id: booking.id,
      start: booking.start,
      end: booking.end,
      title: booking.event ?? "",
      resourceIds: booking.bookables.map((bookable) => bookable.id),
      extendedProps: { ...booking }
    })),
    resources: bookables.map((bookable) => ({ id: bookable.id, title: bookable.name })),
    slotWidth,
    eventContent: (info) => {
      const startTime = dayjs(info.event.start).format("HH:mm");
      const endTime = dayjs(info.event.end).format("HH:mm");
      const eventTitle = info.event.title;
      const bookerName = getFullName(info.event.extendedProps["booker"], { hideNickname: true });
      const status = info.event.extendedProps["status"];
      const statusClass = (() => {
        switch (status) {
          case "ACCEPTED":
            return "bg-success dark:text-black";
          case "DENIED":
            return "bg-error dark:text-black";
          case "PENDING":
            return "bg-info dark:text-black";
          default:
            return "bg-primary";
        }
      })();
      return {
        html: `
        <div class="${twMerge("overflow-hidden w-full shadow-md rounded *:text-nowrap p-2", statusClass)}">
          <strong>${startTime} - ${endTime}</strong>
          <p>${bookerName}</p>
          <i title="${eventTitle}" class="text-xs opacity-60">${eventTitle}</i>
        </div>
      `
      };
    }
  };
  if ($$props.bookingRequests === void 0 && $$bindings.bookingRequests && bookingRequests !== void 0) $$bindings.bookingRequests(bookingRequests);
  if ($$props.bookables === void 0 && $$bindings.bookables && bookables !== void 0) $$bindings.bookables(bookables);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0) $$bindings.class(clazz);
  return `<div${add_attribute("class", clazz, 0)} style="${"--slot-width: " + escape(slotWidth, true) + "px"}">${validate_component(Calendar, "Calendar").$$render($$result, { plugins, options }, {}, {})}</div> ${slots.legend ? slots.legend({}) : ` <div class="mt-8"><div class="badge badge-success"><span class="i-mdi-check-circle mr-1"></span>${escape(booking_accepted())}</div> <div class="badge badge-error"><span class="i-mdi-denied mr-1"></span>${escape(booking_denied())}</div> <div class="badge badge-info"><span class="i-mdi-hourglass mr-1"></span>${escape(booking_pending())}</div></div> `}`;
});

export { BookingCalendar as B };
//# sourceMappingURL=BookingCalendar-DPGGL41N.js.map
