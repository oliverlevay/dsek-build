import dayjs from 'dayjs';
import { l as loadTicketData } from './loadTicketData-BaPG4Us_.js';
import './types-jvq07wik.js';
import './index-CuABlRvJ.js';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';
import './index-BHX467Gw.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

const GET = async ({ locals, params }) => {
  const { user, prisma } = locals;
  const { ticket, consumables } = await loadTicketData(
    prisma,
    user,
    params.slug
  );
  const csv = generateCSV(ticket, consumables);
  const res = new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=${ticket.shoppable.title}.csv`
    }
  });
  return res;
};
const generateCSV = (ticket, consumables) => {
  let output = "";
  let headers = "Namn,Email,Matpreferens,Phaddergrupp,Betalad mängd,Köpdatum,Payment Intent id";
  for (const question of ticket.shoppable.questions) {
    headers += `,${question.title.replace(",", " ")}`;
  }
  output += headers + "\n";
  const priceFormatter = new Intl.NumberFormat("sv-SE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: "SEK",
    currencyDisplay: "code"
  });
  for (const consumable of consumables) {
    const member = consumable.member;
    const name = member ? `${member.firstName} ${member.lastName}`.replace(",", " ") : "Anonym användare";
    const email = member ? "Finns inte" : consumable.externalCustomerEmail?.replace(",", " ") ?? "Finns inte";
    const paidAmount = consumable.priceAtPurchase ? priceFormatter.format(consumable.priceAtPurchase / 100).replace(",", ".") : "Okänt";
    const foodPreference = member ? member?.foodPreference?.replace(",", " ") ?? "" : "Anonym användare";
    const phadderGroup = member ? member?.phadderGroup?.name.replace(",", " ") ?? "" : "Anonym användare";
    let row = `${name},${email},${foodPreference},${phadderGroup},${paidAmount},${dayjs(
      consumable.purchasedAt
    ).format("YYYY-MM-DD HH:mm:ss")},${consumable.stripeIntentId?.replace(",", " ") ?? "N/A"}`;
    for (const question of ticket.shoppable.questions) {
      const response = consumable.questionResponses.find(
        (r) => r.questionId === question.id
      );
      if (!response) row += `,`;
      else row += `,${response.answer.replace(",", " ")}`;
    }
    output += row + "\n";
  }
  return output;
};

export { GET };
//# sourceMappingURL=_server.ts-DYnkbI5t.js.map
