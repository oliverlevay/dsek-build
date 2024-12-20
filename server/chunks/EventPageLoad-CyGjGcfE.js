import { g as getAllEvents, a as getAndValidatePage } from './getEvents-gKry0X74.js';
import { i as interestedGoingSchema } from './schema3-YvxXxCE2.js';
import { g as getAllTags } from './tags-SHR1oaXg.js';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import './index-BHX467Gw.js';

const eventPageLoad = (adminMode = false) => async ({ locals, url }) => {
  const { prisma } = locals;
  const [[events, pageCount], allTags] = await Promise.all([
    getAllEvents(
      prisma,
      {
        tags: url.searchParams.getAll("tags"),
        search: url.searchParams.get("search") ?? void 0,
        page: getAndValidatePage(url),
        pastEvents: url.searchParams.get("past") === "on"
      },
      !adminMode
    ),
    getAllTags(prisma, adminMode)
  ]);
  return {
    events,
    pageCount,
    allTags,
    interestedGoingForm: await superValidate(zod(interestedGoingSchema))
  };
};

export { eventPageLoad as e };
//# sourceMappingURL=EventPageLoad-CyGjGcfE.js.map
