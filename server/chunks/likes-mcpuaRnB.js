import { a as getFullName } from './member-DajX-teH.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { ah as news_likedArticle, ai as news_stoppedLikingArticle } from './messages-D8OfyZiq.js';

const likeSchema = z.object({
  articleId: z.string()
});
const likesAction = (shouldLike) => async ({ request, locals }) => {
  const { prisma, user, member } = locals;
  const form = await superValidate(request, zod(likeSchema));
  if (!form.valid) return fail(400, { form });
  const article = await prisma.article.update({
    where: { id: form.data.articleId },
    data: {
      likers: {
        [shouldLike ? "connect" : "disconnect"]: {
          studentId: user?.studentId
        }
      }
    },
    select: {
      slug: true,
      header: true,
      author: {
        select: {
          memberId: true
        }
      }
    }
  });
  if (member && shouldLike) {
    await sendNotification({
      title: `${article.header}`,
      message: `${getFullName(member)} har gillat din nyhet`,
      type: NotificationType.NEWS_LIKE,
      link: `/news/${article.slug}`,
      memberIds: [article.author.memberId],
      fromMemberId: member.id
    });
  }
  return message(form, {
    message: shouldLike ? news_likedArticle() : news_stoppedLikingArticle(),
    type: "hidden"
  });
};

export { likesAction as a, likeSchema as l };
//# sourceMappingURL=likes-mcpuaRnB.js.map
