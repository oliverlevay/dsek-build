import { e as error } from './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { createEvents } from 'ics';

const generateICS = async (events, setHeaders) => {
  const icsEvents = events.map((event) => {
    const start = dayjs(event.startDatetime);
    const end = dayjs(event.endDatetime);
    return {
      uid: event.id,
      start: [
        start.year(),
        start.month() + 1,
        start.date(),
        start.hour(),
        start.minute()
      ],
      end: [end.year(), end.month() + 1, end.date(), end.hour(), end.minute()],
      title: event.title,
      description: event.description,
      location: event.location ?? void 0,
      sequence: event.numberOfUpdates ?? void 0
    };
  });
  const calendar = createEvents(icsEvents);
  if (calendar.error) {
    throw error(
      400,
      "Failed to create calendar ICS" + JSON.stringify(
        calendar.error,
        Object.getOwnPropertyNames(calendar.error)
      )
    );
  }
  setHeaders({
    "Content-Type": "text/calendar",
    "Content-Disposition": 'attachment; filename="D-sektionen_events.ics"'
  });
  return new Response(calendar.value);
};

export { generateICS as g };
//# sourceMappingURL=calendar-BEh3uvWG.js.map
