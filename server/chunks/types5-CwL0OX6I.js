import dayjs from 'dayjs';
import { z } from './index-CuABlRvJ.js';

var QuestionType = /* @__PURE__ */ ((QuestionType2) => {
  QuestionType2["MultipleChoice"] = "multiple-choice";
  QuestionType2["Text"] = "text";
  return QuestionType2;
})(QuestionType || {});
const questionForm = z.object({
  consumableId: z.string(),
  questionId: z.string(),
  answer: z.string()
});
const ticketSchema = z.object({
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
      id: z.string().uuid().optional().nullable(),
      title: z.string().min(1, "Title cannot be empty"),
      titleEn: z.string().nullable().optional(),
      description: z.string().default(""),
      descriptionEn: z.string().nullable().optional(),
      // type can be any of "multple-choice" or "text"
      type: z.nativeEnum(QuestionType).default(
        "text"
        /* Text */
      ),
      forExternalsOnly: z.boolean().default(false),
      options: z.array(
        z.object({
          answer: z.string().min(1, "Answer cannot be empty"),
          answerEn: z.string().nullable().optional(),
          extraPrice: z.number().int().default(0).nullable()
        })
      ).optional()
    }).refine(
      (arg) => arg.type !== "multiple-choice" || arg.options !== void 0,
      {
        message: "Multiple choice questions must have options",
        path: ["type"]
      }
    )
  ),
  accessPolicies: z.array(
    z.object({
      id: z.string().optional(),
      role: z.string().nullable(),
      studentId: z.string().nullable()
    })
  ).optional()
}).refine(
  (data) => !data.availableTo || dayjs(data.availableFrom).isBefore(dayjs(data.availableTo)),
  {
    message: "Available from must be before available to",
    path: ["availableTo"]
  }
);

export { QuestionType as Q, questionForm as q, ticketSchema as t };
//# sourceMappingURL=types5-CwL0OX6I.js.map
