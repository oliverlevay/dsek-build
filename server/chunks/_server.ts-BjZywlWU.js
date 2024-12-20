import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { r as redirect, e as eventLink } from './redirect-A1ZqWr7F.js';
import { s as slugify, a as slugWithCount } from './slugify-DXeN2Lma.js';
import { e as error } from './index-BHX467Gw.js';
import '@prisma/client';
import './i18n-B2SgmjJ3.js';
import './client-yexbOeKf.js';
import './exports-BGi7-Rnc.js';
import './paths-CYDIOyak.js';
import './stores-ClpLLrvc.js';
import './lifecycle-DkuQBIPN.js';
import './runtime-BxW51cRH.js';
import './server-DiSvHEoN.js';

const GET = async ({ params }) => {
  const id = params.id;
  const event = await authorizedPrismaClient.event.findUnique({
    where: {
      id
    }
  });
  if (!event) {
    throw error(404, "Event not found");
  }
  let eventSlug = event?.slug;
  if (eventSlug == null) {
    const slug = slugify(event.title);
    const slugCount = await authorizedPrismaClient.event.count({
      where: {
        slug: {
          startsWith: slug
        }
      }
    });
    const newSlug = slugWithCount(slug, slugCount);
    await authorizedPrismaClient.event.update({
      where: {
        id
      },
      data: {
        slug: newSlug
      }
    });
    eventSlug = newSlug;
  }
  throw redirect(302, eventLink({ id: event.id, slug: eventSlug }));
};

export { GET };
//# sourceMappingURL=_server.ts-BjZywlWU.js.map
