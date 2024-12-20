import { z } from './index-CuABlRvJ.js';

const createSongSchema = z.object({
  title: z.string().default(""),
  lyrics: z.string().default(""),
  melody: z.string().default(""),
  category: z.string().default("")
});
const updateSongSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  lyrics: z.string().optional(),
  melody: z.string().optional().nullable(),
  category: z.string().optional().nullable()
});

export { createSongSchema as c, updateSongSchema as u };
//# sourceMappingURL=schema-DJRhpSvH.js.map
