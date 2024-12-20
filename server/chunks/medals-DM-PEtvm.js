import { l as languageTag } from './runtime-BxW51cRH.js';
import { W as medals_volunteerMedal, X as medals_gammalOch_cklig, Y as medals_committeeMedal } from './messages-D8OfyZiq.js';

const semesterFromYearAndTerm = (year, term) => year * 2 + 1;
const semesterYear = (semester) => Math.floor(semester / 2);
const isSpringTerm = (semester) => semester % 2 === 0;
const semesterTerm = (semester) => isSpringTerm(semester) ? "VT" : "HT";
const startDate = (semester) => new Date(semesterYear(semester), isSpringTerm(semester) ? 0 : 6, 1);
const endDate = (semester) => isSpringTerm(semester) ? new Date(semesterYear(semester), 6, 1) : new Date(semesterYear(semester) + 1, 0, 1);
const dateToSemester = (date) => date.getFullYear() * 2 + (date.getMonth() >= 6 ? 1 : 0);
const semesterRange = (start, end) => Array.from({ length: end - start + 1 }, (x, i) => start + i);
const coveredSemesters = (startDate2, endDate2) => new Set(
  semesterRange(dateToSemester(startDate2), dateToSemester(endDate2))
);
const toString = (semester) => semesterTerm(semester) + " " + semesterYear(semester);
const parseSemester = (string) => (string.slice(0, 2) === "HT" ? 1 : 0) + (parseInt(string.slice(3, 7)) ?? 2024) * 2;

const countMandateSemesters = (mandates, now) => mandates.reduce((acc, curr) => {
  const set = acc.get(curr.memberId) ?? /* @__PURE__ */ new Set();
  for (const s of coveredSemesters(curr.startDate, curr.endDate))
    if (s <= now) set.add(s);
  acc.set(curr.memberId, set);
  return acc;
}, /* @__PURE__ */ new Map());
const getSemesters = (mandates) => [
  ...mandates.reduce((acc, curr) => {
    coveredSemesters(curr.startDate, curr.endDate).forEach((x) => acc.add(x));
    return acc;
  }, /* @__PURE__ */ new Set())
];
const getMembers = async (prisma, ids) => await prisma.member.findMany({
  where: {
    id: {
      in: ids
    }
  }
});
const committeesWithMedals = async (prisma) => await prisma.committee.findMany({
  where: {
    NOT: {
      shortName: {
        in: ["valb", "other", "dchip", "medalj"]
      }
    }
  }
});
const volunteerMedalSemester = (volunteerSemesters) => volunteerSemesters.toSorted()[1];
const committeeMedalSemester = (committeeSemesters) => committeeSemesters.toSorted()[5];
const gammalOchÄckligSemester = (boardSemesters, volunteerSemesters) => {
  if (!(volunteerSemesters.length >= 8 || volunteerSemesters.length >= 6 && boardSemesters.length >= 2))
    return void 0;
  const vs = volunteerSemesters.toSorted();
  const bs = boardSemesters.toSorted();
  const b = bs[1];
  return b !== void 0 ? vs[Math.min(7, Math.max(vs.indexOf(b), 5))] : vs[7];
};
const committeeMedalName = (committee) => medals_committeeMedal() + " — " + (languageTag() === "sv" ? committee.name : committee.nameEn);
const memberMedals = async (prisma, memberId, after) => {
  const mandates = await prisma.mandate.findMany({
    where: {
      memberId
    },
    include: {
      position: {
        select: {
          boardMember: true,
          committeeId: true
        }
      }
    }
  });
  const volunteerSems = getSemesters(mandates).filter((x) => x <= after);
  const boardSems = getSemesters(
    mandates.filter((x) => x.position.boardMember)
  ).filter((x) => x <= after);
  const committeeSems = (await committeesWithMedals(prisma)).map((committee) => {
    const id = committee.id;
    const committeeMandates = mandates.filter(
      (x) => x.position.committeeId === id
    );
    return {
      medal: committeeMedalName(committee),
      after: getSemesters(committeeMandates).filter((x) => x <= after).toSorted()[5]
    };
  }).filter(
    (x) => x.after !== void 0
  );
  const volunteerMedalSem = volunteerMedalSemester(volunteerSems);
  const gammalOchÄckligSem = gammalOchÄckligSemester(boardSems, volunteerSems);
  const res = [];
  if (volunteerMedalSem)
    res.push({
      medal: medals_volunteerMedal(),
      after: volunteerMedalSem
    });
  if (gammalOchÄckligSem)
    res.push({
      medal: medals_gammalOch_cklig(),
      after: gammalOchÄckligSem
    });
  return res.concat(committeeSems);
};
const medalRecipients = async (prisma, after) => {
  const mandatesInAfter = await prisma.mandate.findMany({
    where: {
      startDate: {
        lt: endDate(after)
      },
      endDate: {
        gte: startDate(after)
      }
    }
  });
  const memberIds = mandatesInAfter.map((x) => x.memberId);
  const allMandates = await prisma.mandate.findMany({
    where: {
      memberId: {
        in: memberIds
      },
      startDate: {
        lt: endDate(after)
      }
    },
    include: {
      position: {
        select: {
          boardMember: true,
          committeeId: true
        }
      }
    }
  });
  const volunteerSemesters = countMandateSemesters(allMandates, after);
  const boardSemesters = countMandateSemesters(
    allMandates.filter((x) => x.position.boardMember),
    after
  );
  const res = [];
  const volunteerMedalRecipients = memberIds.filter(
    (id) => volunteerMedalSemester([...volunteerSemesters.get(id) ?? []]) === after
  );
  if (volunteerMedalRecipients.length > 0)
    res.push({
      medal: medals_volunteerMedal(),
      recipients: await getMembers(prisma, volunteerMedalRecipients)
    });
  const gammalOchÄckligRecipients = memberIds.filter(
    (id) => gammalOchÄckligSemester(
      [...boardSemesters.get(id) ?? []],
      [...volunteerSemesters.get(id) ?? []]
    ) === after
  );
  if (gammalOchÄckligRecipients.length > 0)
    res.push({
      medal: medals_gammalOch_cklig(),
      recipients: await getMembers(prisma, gammalOchÄckligRecipients)
    });
  const committees = await committeesWithMedals(prisma);
  const committeeMedalRecipients = (await Promise.all(
    committees.map(async (committee) => {
      const committeeMandates = allMandates.filter(
        (x) => x.position.committeeId === committee.id
      );
      const committeeSemesters = countMandateSemesters(
        committeeMandates,
        after
      );
      const recipients = memberIds.filter(
        (id) => committeeMedalSemester([...committeeSemesters.get(id) ?? []]) === after
      );
      return recipients.length < 1 ? [] : [
        {
          medal: committeeMedalName(committee),
          recipients: await getMembers(prisma, recipients)
        }
      ];
    })
  )).flat();
  return res.concat(committeeMedalRecipients);
};

export { memberMedals as a, dateToSemester as d, medalRecipients as m, parseSemester as p, semesterFromYearAndTerm as s, toString as t };
//# sourceMappingURL=medals-DM-PEtvm.js.map
