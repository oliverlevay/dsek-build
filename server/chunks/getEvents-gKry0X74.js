import { B as BASIC_EVENT_FILTER } from './events-CQw4QAxj.js';
import { Q as events_errors_invalidPage } from './messages-D8OfyZiq.js';

const include = {
  author: true,
  comments: {
    include: {
      member: true
    }
  },
  going: true,
  interested: true,
  tags: true
};
const getAllEvents = async (prisma, filters = { page: 0, pageSize: 10 }, baseFilter = true) => {
  const pageNumber = filters.page ?? 0;
  const pageSize = filters.pageSize ?? 10;
  const base = BASIC_EVENT_FILTER();
  const where = {
    AND: [
      baseFilter ? base : {},
      {
        endDatetime: filters.pastEvents ? {
          lte: /* @__PURE__ */ new Date()
        } : {
          gte: /* @__PURE__ */ new Date()
        },
        // search:
        ...filters.search && filters.search.length > 0 ? {
          OR: [
            {
              title: {
                contains: filters.search,
                mode: "insensitive"
              }
            },
            {
              titleEn: {
                contains: filters.search,
                mode: "insensitive"
              }
            },
            {
              shortDescription: {
                contains: filters.search,
                mode: "insensitive"
              }
            },
            {
              shortDescriptionEn: {
                contains: filters.search,
                mode: "insensitive"
              }
            },
            {
              description: {
                contains: filters.search,
                mode: "insensitive"
              }
            },
            {
              descriptionEn: {
                contains: filters.search,
                mode: "insensitive"
              }
            }
          ]
        } : {},
        // tags
        ...filters.tags && filters.tags.length > 0 ? {
          tags: {
            some: {
              OR: [
                {
                  name: {
                    in: filters.tags,
                    mode: "insensitive"
                  }
                },
                {
                  nameEn: {
                    in: filters.tags,
                    mode: "insensitive"
                  }
                }
              ]
            }
          }
        } : {}
      }
    ]
  };
  const [events, count] = await prisma.$transaction(async (tx) => {
    const events2 = tx.event.findMany({
      where,
      orderBy: {
        startDatetime: filters.pastEvents ? "desc" : "asc"
      },
      skip: pageNumber * pageSize,
      take: pageSize,
      include
    });
    const count2 = tx.event.count({ where });
    return [await events2, await count2];
  });
  return [events, Math.ceil(count / pageSize)];
};
const getEvent = async (prisma, slug) => {
  const response = await prisma.event.findUnique({
    where: {
      slug
    },
    include
  });
  return response;
};
const getAndValidatePage = (url) => {
  const page = url.searchParams.get("page");
  if (page && Number.isNaN(Number.parseInt(page))) {
    throw new Error(events_errors_invalidPage());
  }
  return page ? Math.max(Number.parseInt(page) - 1, 0) : void 0;
};

export { getAndValidatePage as a, getEvent as b, getAllEvents as g };
//# sourceMappingURL=getEvents-gKry0X74.js.map
