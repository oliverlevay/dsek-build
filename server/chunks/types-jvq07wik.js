import { z } from './index-CuABlRvJ.js';

const phadderGroupSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  year: z.number().min(1982).max((/* @__PURE__ */ new Date()).getFullYear()).default((/* @__PURE__ */ new Date()).getFullYear()),
  imageUrl: z.string().nullable()
});
const phadderMandateFilter = (year) => ({
  OR: [
    {
      positionId: "dsek.noll.phadder"
    },
    {
      positionId: "dsek.noll.uppdrag"
    }
  ],
  startDate: {
    lte: new Date(year, 9, 1)
    // 1st of october is kind of end of nollning each year
  },
  endDate: {
    gte: new Date(year, 7, 1)
    // 1st of august is a bit before the nollning but I would say that works
  }
});

export { phadderMandateFilter as a, phadderGroupSchema as p };
//# sourceMappingURL=types-jvq07wik.js.map
