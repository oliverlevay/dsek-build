import { a as compareCommitteePositions } from './sort-DAPXH13p.js';
import { D as committees_errors_invalidYear, E as committees_errors_committeeNotFound, F as committees_errors_fetchUniqueMembers, G as committees_errors_fetchNumberOfMandates, H as committees_errors_fetchMarkdown, I as committees_committeeUpdated } from './messages-D8OfyZiq.js';
import { e as error, f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, w as withFiles, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { u as updateMarkdown } from './mutations.server-BasbvG3q.js';

const updateSchema = z.object({
  name: z.string().optional(),
  description: z.string().nullable(),
  darkImageUrl: z.string().nullable(),
  lightImageUrl: z.string().nullable(),
  monoImageUrl: z.string().nullable(),
  symbolUrl: z.string().nullable(),
  markdown: z.string().optional(),
  markdownEn: z.string().optional().nullable(),
  markdownSlug: z.string().optional()
});

const getYear = (url) => {
  const yearQuery = url.searchParams.get("year");
  const parsedYear = parseInt(yearQuery ?? "");
  const year = isNaN(parsedYear) ? (/* @__PURE__ */ new Date()).getFullYear() : parsedYear;
  return year;
};
const committeeLoad = async (prisma, shortName, url) => {
  const year = getYear(url);
  const firstDayOfYear = /* @__PURE__ */ new Date(`${year}-01-01`);
  const lastDayOfYear = /* @__PURE__ */ new Date(`${year}-12-31`);
  if (firstDayOfYear.toString() === "Invalid Date" || lastDayOfYear.toString() === "Invalid Date" || firstDayOfYear.getFullYear() !== year || lastDayOfYear.getFullYear() !== year) {
    error(400, committees_errors_invalidYear());
  }
  const committee = await prisma.committee.findUnique({
    where: {
      shortName
    },
    include: {
      positions: {
        include: {
          mandates: {
            where: {
              startDate: {
                lte: lastDayOfYear
              },
              endDate: {
                gte: firstDayOfYear
              }
            },
            include: {
              member: true
            },
            orderBy: [
              {
                startDate: "desc"
              },
              {
                member: {
                  firstName: "asc"
                }
              },
              {
                member: {
                  lastName: "asc"
                }
              }
            ]
          },
          emailAliases: {
            select: {
              email: true
            }
          }
        }
      }
    }
  });
  if (!committee) {
    throw error(404, committees_errors_committeeNotFound());
  }
  const [uniqueMembersInCommittee, numberOfMandates, markdown] = await Promise.allSettled([
    prisma.member.count({
      where: {
        mandates: {
          some: {
            startDate: {
              lte: lastDayOfYear
            },
            endDate: {
              gte: firstDayOfYear
            },
            position: {
              committee: {
                shortName
              }
            }
          }
        }
      }
    }),
    prisma.mandate.count({
      where: {
        startDate: {
          lte: lastDayOfYear
        },
        endDate: {
          gte: firstDayOfYear
        },
        position: {
          committee: {
            shortName
          }
        }
      }
    }),
    prisma.markdown.findUnique({
      where: {
        name: shortName
      }
    }),
    prisma.committee.findUnique({
      where: {
        shortName
      }
    })
  ]);
  if (uniqueMembersInCommittee.status === "rejected") {
    error(500, committees_errors_fetchUniqueMembers());
  }
  if (numberOfMandates.status === "rejected") {
    error(500, committees_errors_fetchNumberOfMandates());
  }
  if (markdown.status === "rejected") {
    error(500, committees_errors_fetchMarkdown());
  }
  const form = await superValidate(
    {
      ...committee,
      markdownSlug: markdown.value?.name,
      markdown: markdown.value?.markdown,
      markdownEn: markdown.value?.markdownEn
    },
    zod(updateSchema)
  );
  return {
    committee,
    positions: committee.positions.filter((pos) => pos.mandates.length > 0 || pos.active).toSorted((a, b) => compareCommitteePositions(a.id, b.id, shortName)),
    uniqueMemberCount: uniqueMembersInCommittee.value,
    numberOfMandates: numberOfMandates.value,
    markdown: markdown.value,
    form,
    year
  };
};
const committeeActions = (shortName) => ({
  update: async ({ params, request, locals }) => {
    const { user, prisma } = locals;
    const form = await superValidate(request, zod(updateSchema), {
      allowFiles: true
    });
    if (!form.valid) return fail(400, withFiles({ form }));
    const { markdown, markdownEn, markdownSlug, ...rest } = form.data;
    await prisma.committee.update({
      where: { shortName: shortName ?? params.shortName },
      data: {
        ...rest
      }
    });
    if (markdownSlug && markdown) {
      await updateMarkdown(user, prisma, {
        name: markdownSlug,
        markdown,
        markdownEn: markdownEn ?? null
      });
    }
    return message(form, {
      message: committees_committeeUpdated(),
      type: "success"
    });
  }
});

export { committeeActions as a, committeeLoad as c, getYear as g, updateSchema as u };
//# sourceMappingURL=committee.server-BhbLpZqL.js.map
