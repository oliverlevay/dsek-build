import { d as PUBLIC_BUCKETS_DOCUMENTS } from './client3-CIDcnctW.js';
import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import { f as fileHandler } from './fileHandler-BJyM8X80.js';
import { B as BASIC_ARTICLE_FILTER } from './articles-Ot_X93Lk.js';
import { e as error } from './index-BHX467Gw.js';

const loadHomeData = async ({
  locals,
  fetch
}) => {
  const { prisma, user } = locals;
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const files = await fileHandler.getInBucket(
    user,
    PUBLIC_BUCKETS_DOCUMENTS,
    "public/" + year + "/",
    true
  );
  const boardMeetingFileNameRegex = /^S\d+$/;
  const boardMeetings = Array.from(
    new Set(
      files.map((obj) => obj.id.split("/")[2]).filter((str) => boardMeetingFileNameRegex.test(str)).map((str) => parseInt(str.substring(1))).sort((a, b) => a - b)
    )
  );
  const nextBoardMeeting = boardMeetings.pop();
  const lastBoardMeeting = boardMeetings.pop();
  function filterFilesByBoardMeeting(boardMeeting) {
    return boardMeeting === void 0 ? [] : files.filter((obj) => obj.id.split("/")[2] === "S" + boardMeeting);
  }
  const nextBoardMeetingFiles = filterFilesByBoardMeeting(nextBoardMeeting);
  const lastBoardMeetingFiles = filterFilesByBoardMeeting(lastBoardMeeting);
  const newsPromise = prisma.article.findMany({
    where: {
      ...BASIC_ARTICLE_FILTER()
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 3
  });
  const eventsPromise = prisma.event.findMany({
    where: {
      ...BASIC_EVENT_FILTER(),
      startDatetime: {
        gt: now
      }
    },
    orderBy: {
      startDatetime: "asc"
    },
    take: 3
  });
  const upcomingMeetingPromise = prisma.meeting.findFirst({
    where: {
      date: {
        gt: now
      }
    },
    orderBy: {
      date: "asc"
    }
  });
  const previousMeetingPromise = prisma.meeting.findFirst({
    where: {
      date: {
        lt: now
      }
    },
    orderBy: {
      date: "desc"
    }
  });
  const cafeOpenPromise = prisma.markdown.findFirst({
    where: {
      name: `cafe:open:${now.getDay() - 1}`
      // we assign monday to 0, not sunday
    }
  });
  const commitPromise = fetch("/api/home").then(
    (res) => res.json()
  );
  const hasActiveMandatePromise = prisma.mandate.findFirst({
    where: {
      startDate: { lte: now },
      endDate: { gte: now },
      memberId: locals.user?.memberId
    },
    select: {
      id: true
    }
  }).then((res) => res !== null);
  const [
    news,
    events,
    upcomingMeeting,
    previousMeeting,
    cafeOpen,
    commitData,
    hasActiveMandate
  ] = await Promise.allSettled([
    newsPromise,
    eventsPromise,
    upcomingMeetingPromise,
    previousMeetingPromise,
    cafeOpenPromise,
    commitPromise,
    hasActiveMandatePromise
  ]);
  if (news.status === "rejected") {
    throw error(500, "Failed to fetch news");
  }
  if (events.status === "rejected") {
    throw error(500, "Failed to fetch events");
  }
  if (upcomingMeeting.status === "rejected") {
    throw error(500, "Failed to fetch upcoming meeting");
  }
  if (previousMeeting.status === "rejected") {
    throw error(500, "Failed to fetch previous meeting");
  }
  if (cafeOpen.status === "rejected") {
    throw error(500, "Failed to fetch cafe open");
  }
  if (commitData.status === "rejected") {
    throw error(500, "Failed to fetch commit data");
  }
  if (hasActiveMandate.status === "rejected") {
    throw error(500, "Failed to fetch mandate data");
  }
  return {
    files: { next: nextBoardMeetingFiles, last: lastBoardMeetingFiles },
    news: news.value,
    events: events.value,
    meetings: {
      upcoming: upcomingMeeting.value,
      previous: previousMeeting.value
    },
    cafeOpen: cafeOpen.value,
    commitCount: commitData.value.commitCount,
    latestCommit: commitData.value.latestCommit,
    hasActiveMandate: hasActiveMandate.value
  };
};

export { loadHomeData as l };
//# sourceMappingURL=loadHomeData-CoS3pmTC.js.map
