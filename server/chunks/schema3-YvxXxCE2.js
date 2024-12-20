import { t as tagSchema } from './schemas-CKip5ia7.js';
import { z } from './index-CuABlRvJ.js';
import { P as events_errors_endAfterStart } from './messages-D8OfyZiq.js';
import { i as isFileImage } from './utils2-CdAbGRJv.js';

const recurringTypeValues = {
  DAILY: "DAILY",
  WEEKLY: "WEEKLY",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY"
};
const recurringTypes = {
  DAILY: "Dagsvis",
  WEEKLY: "Veckovis",
  MONTHLY: "Månadsvis",
  YEARLY: "Årsvis"
};
const recurringTypesList = Object.keys(recurringTypeValues);
function isRecurringType(str) {
  return !!recurringTypesList.find((recurringType) => str === recurringType);
}
function getIncrementType(type) {
  switch (type) {
    case recurringTypeValues.DAILY:
      return "day";
    case recurringTypeValues.WEEKLY:
      return "week";
    case recurringTypeValues.MONTHLY:
      return "month";
    case recurringTypeValues.YEARLY:
      return "year";
  }
  throw new Error("Invalid recurring type");
}
const eventSchema = z.object({
  title: z.string(),
  titleEn: z.string().nullable(),
  description: z.string().default(""),
  descriptionEn: z.string().nullable(),
  shortDescription: z.string().nullable().default(null),
  shortDescriptionEn: z.string().nullable().default(null),
  link: z.string().nullable().default(null),
  location: z.string().nullable().default(null),
  organizer: z.string().default(""),
  startDatetime: z.date().default(() => /* @__PURE__ */ new Date()),
  endDatetime: z.date().default(() => new Date((/* @__PURE__ */ new Date()).getTime() + 60 * 60 * 1e3)),
  // one hour later
  imageUrl: z.string().optional().nullable(),
  // only for uploading files
  image: z.instanceof(File, { message: "Please upload a file" }).nullable().optional().refine((file) => !file || isFileImage(file), {
    message: "Måste vara en bild"
  }),
  tags: z.array(
    tagSchema.pick({
      id: true
    })
  ).default([]),
  alarmActive: z.boolean().nullable().default(null),
  isCancelled: z.boolean().nullable().default(null),
  isRecurring: z.boolean().default(false),
  // see comment above and in utils/events.ts why we do it like this
  recurringType: z.enum([recurringTypesList[0], ...recurringTypesList.slice(1)]).default(recurringTypeValues.WEEKLY),
  separationCount: z.number().default(0),
  recurringEndDatetime: z.date().default(() => new Date((/* @__PURE__ */ new Date()).getTime() + 7 * 24 * 60 * 60 * 1e3))
  // one week later
}).refine((data) => data.startDatetime < data.endDatetime, {
  message: events_errors_endAfterStart(),
  path: ["endDatetime"]
}).refine(
  (data) => !data.isRecurring || data.startDatetime < data.recurringEndDatetime,
  {
    message: events_errors_endAfterStart(),
    path: ["recurringEndDatetime"]
  }
);
const interestedGoingSchema = z.object({
  eventId: z.string()
});
const actionType = z.enum(["THIS", "FUTURE", "ALL"]);

export { actionType as a, isRecurringType as b, eventSchema as e, getIncrementType as g, interestedGoingSchema as i, recurringTypes as r };
//# sourceMappingURL=schema3-YvxXxCE2.js.map
