import dayjs from 'dayjs';
import { z } from './index-CuABlRvJ.js';
import { B as booking_startDateBeforeEndDate } from './messages-D8OfyZiq.js';

const bookingSchema = z.object({
  name: z.string().min(1),
  start: z.string().default(() => dayjs().startOf("hour").format("YYYY-MM-DDTHH:mm")),
  end: z.string().default(() => dayjs().endOf("hour").format("YYYY-MM-DDTHH:mm")),
  bookables: z.array(z.string()).min(1)
}).refine((data) => dayjs(data.start).isBefore(dayjs(data.end)), {
  message: booking_startDateBeforeEndDate(),
  path: ["end"]
});

export { bookingSchema as b };
//# sourceMappingURL=schema2-6iq8K_hf.js.map
