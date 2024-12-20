import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import DOMPurify from 'isomorphic-dompurify';

const tagRegex = /\[([^\]]*)\]\(\/members\/([^)]+)\)/g;

const getAllTaggedMembers = async (prisma, comments) => {
  return await prisma.member.findMany({
    where: {
      studentId: {
        in: [
          ...new Set(
            comments.flatMap(
              (comment) => [...(comment.content ?? "").matchAll(tagRegex)].map((match) => match[2]).filter((taggedMember) => taggedMember)
            )
          )
        ]
      }
    }
  });
};
const commentSchema = z.object({
  content: z.string().min(1)
});
const removeCommentSchema = z.object({
  commentId: z.string()
});
const commentAction = (entityType) => async ({
  locals,
  request,
  params
}) => {
  const { prisma, user } = locals;
  const form = await superValidate(request, zod(commentSchema));
  if (!form.valid) return fail(400, { form });
  const args = {
    where: { slug: params["slug"] },
    data: {
      comments: {
        create: {
          member: {
            connect: {
              studentId: user?.studentId
            }
          },
          content: DOMPurify.sanitize(form.data.content),
          published: /* @__PURE__ */ new Date()
        }
      }
    }
  };
  switch (entityType) {
    case "NEWS":
      await prisma.article.update(args);
      break;
    case "EVENT":
      await prisma.event.update(args);
      break;
    default:
      return message(
        form,
        {
          message: 'Kommentar skickades inte. "Invalid comment entity type"',
          type: "error"
        },
        {
          status: 400
        }
      );
  }
  return message(form, {
    message: "Kommentar skickad",
    type: "hidden"
  });
};
const removeCommentAction = (entityType) => async ({
  locals,
  request,
  params
}) => {
  const { prisma } = locals;
  const form = await superValidate(request, zod(removeCommentSchema));
  if (!form.valid) return fail(400, { form });
  const args = {
    where: { slug: params["slug"] },
    data: {
      comments: {
        delete: {
          id: form.data.commentId
        }
      }
    }
  };
  switch (entityType) {
    case "NEWS":
      await prisma.article.update(args);
      break;
    case "EVENT":
      await prisma.event.update(args);
      break;
    default:
      return message(
        form,
        {
          message: 'Kommentar kunde inte tas bort. "Invalid comment entity type"',
          type: "error"
        },
        {
          status: 400
        }
      );
  }
  return message(form, {
    message: "Kommentar borttagen",
    type: "success"
  });
};

export { commentAction as a, removeCommentAction as b, commentSchema as c, getAllTaggedMembers as g, removeCommentSchema as r, tagRegex as t };
//# sourceMappingURL=comments-DaxFEw57.js.map
