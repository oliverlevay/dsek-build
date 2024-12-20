import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { e as error } from './index-BHX467Gw.js';
import dayjs from 'dayjs';
import { s as superValidate, z as zod } from './superValidate-C2lU2J3v.js';
import { b as bookingSchema } from './schema2-6iq8K_hf.js';
import { C as booking_errors_notFound } from './messages-D8OfyZiq.js';

const actions = {
  accept: async (event) => {
    await performAction(event, true);
  },
  reject: async (event) => {
    await performAction(event, false);
  }
};
async function getUpcomingBookingRequests(prisma) {
  return prisma.bookingRequest.findMany({
    where: {
      start: {
        gte: dayjs().subtract(1, "week").toDate()
      }
    },
    orderBy: [{ start: "asc" }, { end: "asc" }, { status: "asc" }],
    include: {
      bookables: true,
      booker: true
    }
  });
}
async function getBookingRequestOrThrow(prisma, id) {
  return prisma.bookingRequest.findUniqueOrThrow({
    where: { id },
    include: { bookables: true }
  }).catch(() => {
    throw error(404, booking_errors_notFound());
  });
}
async function getSuperValidatedForm(bookingRequest) {
  const initialData = {
    name: bookingRequest.event ?? void 0,
    start: bookingRequest.start ? dayjs(bookingRequest.start).format("YYYY-MM-DDTHH:mm") : void 0,
    end: bookingRequest.end ? dayjs(bookingRequest.end).format("YYYY-MM-DDTHH:mm") : void 0,
    bookables: bookingRequest.bookables?.map((bookable) => bookable.id)
  };
  return await superValidate(initialData, zod(bookingSchema));
}
async function performAction(event, accepted) {
  const { request, locals } = event;
  const { prisma, user } = locals;
  const formData = await request.formData();
  const id = formData.get("id");
  const status = accepted ? "ACCEPTED" : "DENIED";
  if (id && typeof id === "string") {
    await prisma.bookingRequest.update({
      where: {
        id
      },
      data: {
        status
      }
    });
    const request2 = await prisma.bookingRequest.findFirst({
      where: {
        id
      },
      select: {
        bookerId: true,
        event: true
      }
    });
    if (request2 && request2.bookerId != null && user && user.memberId) {
      sendNotification({
        title: `Booking request ${status.toLowerCase()}`,
        message: `Your booking request for ${request2.event} has been ${status.toLowerCase()}`,
        type: NotificationType.BOOKING_REQUEST,
        link: `/booking`,
        memberIds: [request2.bookerId],
        fromMemberId: user.memberId
      });
    }
  }
}

export { getSuperValidatedForm as a, getUpcomingBookingRequests as b, actions as c, getBookingRequestOrThrow as g };
//# sourceMappingURL=utils3-fgvf9FPc.js.map
