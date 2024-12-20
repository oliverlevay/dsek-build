import { B as BASIC_ARTICLE_FILTER } from './articles-Ot_X93Lk.js';
import { a as getCustomAuthorOptions } from './member2-BtEDLQG7.js';
import { e as error } from './index-BHX467Gw.js';

const include = {
  author: {
    include: {
      member: true,
      mandate: {
        include: {
          position: true
        }
      },
      customAuthor: true
    }
  },
  comments: {
    include: {
      member: true
    }
  },
  likers: true,
  tags: true
};
const getAllArticles = async (prisma, filters = { page: 0, pageSize: 10 }) => {
  const pageNumber = filters.page ?? 0;
  const pageSize = filters.pageSize ?? 10;
  const baseFilter = BASIC_ARTICLE_FILTER();
  const where = {
    // search:
    ...baseFilter,
    ...filters.search && filters.search.length > 0 ? {
      OR: [
        {
          header: {
            contains: filters.search,
            mode: "insensitive"
          }
        },
        {
          headerEn: {
            contains: filters.search,
            mode: "insensitive"
          }
        },
        {
          body: {
            contains: filters.search,
            mode: "insensitive"
          }
        },
        {
          bodyEn: {
            contains: filters.search,
            mode: "insensitive"
          }
        }
      ]
    } : {},
    // tags
    ...filters.tags && filters.tags.length > 0 ? {
      tags: {
        ...baseFilter.tags,
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
            },
            ...baseFilter.tags?.some ? [baseFilter.tags.some] : []
          ]
        }
      }
    } : {}
  };
  const [articlesResult, countResult] = await Promise.allSettled([
    prisma.article.findMany({
      where,
      orderBy: {
        publishedAt: "desc"
      },
      skip: pageNumber * pageSize,
      take: pageSize,
      include
    }),
    prisma.article.count({ where })
  ]);
  if (articlesResult.status === "rejected") {
    throw error(500, articlesResult.reason);
  }
  if (countResult.status === "rejected") {
    throw error(500, countResult.reason);
  }
  const articles = articlesResult.value;
  const count = countResult.value;
  return [articles, Math.ceil(count / pageSize)];
};
const getArticle = async (prisma, slug) => {
  const response = await prisma.article.findUnique({
    where: {
      slug,
      publishedAt: {
        lte: /* @__PURE__ */ new Date(),
        not: null
      },
      OR: [{ removedAt: { gt: /* @__PURE__ */ new Date() } }, { removedAt: null }]
    },
    include
  });
  return response;
};
const getArticleAuthorOptions = async (prisma, memberWithMandates) => {
  const memberId = memberWithMandates.id;
  const customAuthorOptions = await getCustomAuthorOptions(prisma, memberId);
  const authorOptions = [
    {
      id: "0",
      memberId: memberWithMandates.id,
      member: memberWithMandates,
      mandate: null,
      mandateId: null,
      customAuthor: null,
      customId: null,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      type: "Member"
    },
    ...memberWithMandates?.mandates.map((mandate) => {
      return {
        id: String(mandate.id),
        // unique
        memberId: memberWithMandates.id,
        member: memberWithMandates,
        mandateId: mandate.id,
        mandate,
        customAuthor: null,
        customId: null,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        type: "Mandate"
      };
    }) ?? [],
    ...customAuthorOptions?.map((customAuthor) => {
      return {
        id: String(customAuthor.id),
        // unique
        memberId: memberWithMandates.id,
        member: memberWithMandates,
        mandate: null,
        mandateId: null,
        customAuthor,
        customId: customAuthor.id,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        type: "Custom"
      };
    }) ?? []
  ];
  return authorOptions;
};

export { getArticle as a, getArticleAuthorOptions as b, getAllArticles as g };
//# sourceMappingURL=getArticles-Cz_mQFbE.js.map
