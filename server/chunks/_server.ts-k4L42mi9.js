import { p as parseSemester, d as dateToSemester, m as medalRecipients, t as toString } from './medals-DM-PEtvm.js';
import './runtime-BxW51cRH.js';
import './messages-D8OfyZiq.js';

const GET = async ({ locals, url }) => {
  const { prisma } = locals;
  const semester = parseSemester(url.searchParams.get("semester") ?? "") || dateToSemester(/* @__PURE__ */ new Date());
  const recipientLines = (await medalRecipients(prisma, semester)).flatMap(
    (x) => x.recipients.map((y) => {
      const medal = x.medal;
      const member = y;
      return [
        `${member.firstName} ${member.lastName}`.replace(",", ""),
        member.studentId,
        medal
      ].join(",");
    })
  );
  const csv = ["Namn,StilID,Medalj", ...recipientLines].join("\n");
  const res = new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=medals-${toString(
        semester
      ).replace(" ", "-")}.csv`
    }
  });
  return res;
};

export { GET };
//# sourceMappingURL=_server.ts-k4L42mi9.js.map
