import { z } from './index-CuABlRvJ.js';
import { Q as QuestionType } from './types5-CwL0OX6I.js';
import dayjs from 'dayjs';

const programmes = [
  { id: "D", name: "Datateknik" },
  { id: "C", name: "InfoCom" },
  { id: "VR/AR", name: "Masterprogram inom VR/AR" },
  { id: "E", name: "Elektroteknik" },
  { id: "BME", name: "Medicin och teknik" },
  { id: "Dokt", name: "Doktorand" },
  { id: "?", name: "Annat" }
];

const emptySchema = z.object({});
const memberSchema = z.object({
  studentId: z.string().nullable(),
  email: z.string().email().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  nickname: z.string().nullable(),
  bio: z.string().nullish(),
  picturePath: z.string().nullable(),
  classYear: z.number().min(1962).max((/* @__PURE__ */ new Date()).getFullYear()).nullable().default((/* @__PURE__ */ new Date()).getFullYear()),
  classProgramme: z.string().nullable().default("D").refine((p) => p == null || programmes.some((c) => c.id === p), {
    message: "Ogiltigt program"
  }),
  foodPreference: z.string().nullable().default(null),
  nollningGroupId: z.string().uuid().nullable()
});
const positionSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameEn: z.string().nullable()
});
const mandateSchema = z.object({
  id: z.string().uuid(),
  position: positionSchema
});
const customAuthorSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  nameEn: z.string().nullable(),
  imageUrl: z.string().nullable()
});
const authorSchema = z.object({
  id: z.string(),
  memberId: z.string().uuid(),
  mandateId: z.string().uuid().nullable(),
  customId: z.string().uuid().nullable(),
  type: z.string().nullable(),
  member: memberSchema,
  mandate: mandateSchema.nullable(),
  customAuthor: customAuthorSchema.nullable()
});
const tagSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  nameEn: z.string().nullable(),
  color: z.string().nullable(),
  isDefault: z.boolean().nullable()
});
const notificationSchema = z.object({
  notificationId: z.number().nullable(),
  notificationIds: z.number().array()
});
z.object({
  title: z.string().min(1, "Title cannot be empty"),
  titleEn: z.string().nullable().optional(),
  description: z.string().min(1, "Description cannot be empty").nullable().optional(),
  descriptionEn: z.string().nullable().optional(),
  // price is in SEK, with a maximum of two decimals
  price: z.number().gte(0),
  availableFrom: z.date(),
  availableTo: z.date().nullable().optional(),
  // cannot be before availableFRom
  eventId: z.string().uuid(),
  stock: z.number().int("Stock must be an integer").gte(0),
  maxAmountPerUser: z.number().int("Max amount per user must be an integer").positive().optional(),
  questions: z.array(
    z.object({
      id: z.string().uuid().optional(),
      title: z.string().min(1, "Title cannot be empty"),
      titleEn: z.string().nullable().optional(),
      description: z.string().default(""),
      descriptionEn: z.string().nullable().optional(),
      // type can be any of "multple-choice" or "text"
      type: z.nativeEnum(QuestionType).default(QuestionType.Text),
      forExternalsOnly: z.boolean().default(false),
      options: z.array(
        z.object({
          answer: z.string().min(1, "Answer cannot be empty"),
          answerEn: z.string().nullable().optional(),
          extraPrice: z.number().int().default(0).nullable()
        })
      ).optional()
    }).refine(
      (arg) => arg.type !== QuestionType.MultipleChoice || arg.options !== void 0,
      {
        message: "Multiple choice questions must have options",
        path: ["type"]
      }
    )
  )
}).refine(
  (data) => !data.availableTo || dayjs(data.availableFrom).isBefore(dayjs(data.availableTo)),
  {
    message: "Available from must be before available to",
    path: ["availableTo"]
  }
);

export { authorSchema as a, emptySchema as e, memberSchema as m, notificationSchema as n, programmes as p, tagSchema as t };
//# sourceMappingURL=schemas-CKip5ia7.js.map
