import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { a as apiNames } from './apiNames-BaTM20TQ.js';
import { i as isAuthorized } from './authorization-DvGst16H.js';
import DOMPurify from 'isomorphic-dompurify';

const updateMarkdown = async (user, prisma, markdown) => {
  const prismaToUse = isAuthorized(
    apiNames.MARKDOWNS.PAGE(markdown.name).UPDATE,
    user
  ) ? authorizedPrismaClient : prisma;
  return await prismaToUse.markdown.update({
    where: {
      name: markdown.name
    },
    data: {
      markdown: DOMPurify.sanitize(markdown.markdown),
      markdownEn: markdown.markdownEn ? DOMPurify.sanitize(markdown.markdownEn) : markdown.markdownEn
    }
  });
};

export { updateMarkdown as u };
//# sourceMappingURL=mutations.server-BasbvG3q.js.map
