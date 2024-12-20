import { P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { e as eventSchema, b as isRecurringType, g as getIncrementType, a as actionType } from './schema3-YvxXxCE2.js';
import { u as uploadFile } from './uploadFiles-C03MzR76.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { z } from './index-CuABlRvJ.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as slugify, a as slugWithCount } from './slugify-DXeN2Lma.js';
import { R as events_errors_eventNotFound, V as events_eventUpdated } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';
import dayjs from 'dayjs';
import DOMPurify from 'isomorphic-dompurify';
import './client-yexbOeKf.js';
import { s as superValidate, z as zod, l as fail } from './superValidate-C2lU2J3v.js';
import './superForm-DTXAq_ly.js';

const uploadImage = async (user, image, slug) => {
  const imageUrl = await uploadFile(
    user,
    image,
    `public/events/${slug}`,
    PUBLIC_BUCKETS_FILES,
    "header",
    {
      resize: {
        width: 1920
      }
    }
  );
  return imageUrl;
};
const createEvent = async (event) => {
  const { request, locals } = event;
  const { prisma, user } = locals;
  const form = await superValidate(request, zod(eventSchema));
  if (!form.valid) return fail(400, { form });
  const {
    tags,
    image,
    recurringType,
    separationCount,
    isRecurring,
    recurringEndDatetime,
    ...eventData
  } = form.data;
  const slug = slugify(form.data.title);
  let slugCount = await authorizedPrismaClient.event.count({
    where: {
      slug: {
        startsWith: slug
      }
    }
  });
  if (image) eventData.imageUrl = await uploadImage(user, image, slug);
  const tagIds = tags.filter((tag) => !!tag).map((tag) => ({
    id: tag.id
  }));
  eventData.description = DOMPurify.sanitize(eventData.description);
  eventData.descriptionEn = eventData.descriptionEn ? DOMPurify.sanitize(eventData.descriptionEn) : eventData.descriptionEn;
  if (isRecurring) {
    let recurType;
    if (isRecurringType(recurringType)) {
      recurType = recurringType;
    } else {
      throw error(500);
    }
    const recurringEventParent = await prisma.recurringEvent.create({
      data: {
        startDatetime: eventData.startDatetime,
        recurringType: recurType,
        endDatetime: recurringEndDatetime,
        author: {
          connect: {
            studentId: user?.studentId
          }
        },
        separationCount
      }
    });
    const incrementType = getIncrementType(recurType);
    const dates = [];
    const dayjsEndDate = dayjs(form.data.recurringEndDatetime);
    let date = dayjs(form.data.startDatetime);
    const startEndDiff = dayjs(form.data.endDatetime).diff(date);
    while (date.isBefore(dayjsEndDate, "day") || date.isSame(dayjsEndDate, "day")) {
      dates.push(date.toDate());
      date = date.add(form.data.separationCount + 1, incrementType);
    }
    await prisma.$transaction(async (tx) => {
      for (const date2 of dates) {
        await tx.event.create({
          data: {
            ...eventData,
            recurringParentId: recurringEventParent.id,
            startDatetime: date2,
            isDetatched: false,
            authorId: user?.memberId ?? error(500, "No user"),
            endDatetime: dayjs(date2).add(startEndDiff).toDate(),
            slug: slugWithCount(slug, slugCount),
            tags: {
              connect: tagIds
            }
          }
        });
        slugCount += 1;
      }
    });
    redirect(
      `/events/${slugWithCount(slug, slugCount - dates.length)}`,
      // first one created
      {
        message: "Evenemang skapat",
        type: "success"
      },
      event
    );
  } else {
    const result = await prisma.event.create({
      data: {
        slug: slugWithCount(slug, slugCount),
        ...eventData,
        author: {
          connect: {
            studentId: user?.studentId
          }
        },
        tags: {
          connect: tagIds
        }
      }
    });
    throw redirect(
      `/events/${result.slug}`,
      {
        message: "Evenemang skapat",
        type: "success"
      },
      event
    );
  }
};
const updateEvent = async (event) => {
  const { request, locals, params } = event;
  const { user, prisma } = locals;
  const slug = params.slug;
  const form = await superValidate(
    request,
    zod(eventSchema.and(z.object({ editType: actionType })))
  );
  if (!form.valid) return fail(400, { form });
  const { isRecurring, recurringEndDatetime, ...recurringEventData } = form.data;
  const {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars --
     * To avoid lint complaining about unused vars
     **/
    recurringType,
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars --
     * To avoid lint complaining about unused vars
     **/
    separationCount,
    tags,
    image,
    editType,
    ...eventData
  } = recurringEventData;
  eventData.description = DOMPurify.sanitize(eventData.description);
  eventData.descriptionEn = eventData.descriptionEn ? DOMPurify.sanitize(eventData.descriptionEn) : eventData.descriptionEn;
  const existingEvent = await prisma.event.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      recurringParentId: true,
      startDatetime: true,
      endDatetime: true
    }
  });
  if (!existingEvent) {
    throw error(404, events_errors_eventNotFound());
  }
  if (image) eventData.imageUrl = await uploadImage(user, image, slug);
  if (!isRecurring || editType === "THIS") {
    await prisma.event.update({
      where: {
        id: existingEvent.id
      },
      data: {
        ...eventData,
        author: void 0,
        tags: {
          set: tags.map(({ id }) => ({ id }))
        }
      }
    });
  } else if (editType === "FUTURE" || editType === "ALL") {
    const eventsToBeUpdated = await prisma.event.findMany({
      where: {
        recurringParentId: existingEvent.recurringParentId,
        startDatetime: editType === "FUTURE" ? { gte: existingEvent.startDatetime } : void 0
      }
    });
    const startTimeDiff = dayjs(eventData.startDatetime).diff(
      dayjs(existingEvent.startDatetime)
    );
    const endTimeDiff = dayjs(eventData.endDatetime).diff(
      dayjs(existingEvent.endDatetime)
    );
    await Promise.all(
      eventsToBeUpdated.map((e) => {
        const { startDatetime, endDatetime, id, ...oldData } = e;
        const newData = {
          ...oldData,
          ...eventData,
          startDatetime: dayjs(startDatetime).add(startTimeDiff, "ms").format(),
          endDatetime: dayjs(endDatetime).add(endTimeDiff, "ms").format(),
          author: void 0,
          tags: {
            set: tags.map(({ id: id2 }) => ({ id: id2 }))
          }
        };
        return prisma.event.update({
          where: {
            id
          },
          data: {
            ...newData
          }
        });
      })
    );
  }
  throw redirect(
    `/events/${slug}`,
    {
      message: events_eventUpdated(),
      type: "success"
    },
    event
  );
};

export { createEvent as c, updateEvent as u };
//# sourceMappingURL=actions-Bi16y7PO.js.map
