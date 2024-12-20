import { P as PUBLIC_BUCKETS_FILES } from './client3-CIDcnctW.js';
import { u as uploadFile } from './uploadFiles-C03MzR76.js';
import { i as isFileImage } from './utils2-CdAbGRJv.js';
import { a as authorSchema, t as tagSchema } from './schemas-CKip5ia7.js';
import { z } from './index-CuABlRvJ.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { s as slugify, a as slugWithCount } from './slugify-DXeN2Lma.js';
import { am as news_articleCreated, aj as news_errors_articleNotFound, an as news_articleUpdated } from './messages-D8OfyZiq.js';
import { Prisma } from '@prisma/client';
import { s as superValidate, z as zod, l as fail, j as message } from './superValidate-C2lU2J3v.js';
import './client-yexbOeKf.js';
import './superForm-DTXAq_ly.js';
import './index-BHX467Gw.js';
import DOMPurify from 'isomorphic-dompurify';
import { markdownToTxt } from 'markdown-to-txt';

const articleSchema = z.object({
  slug: z.string(),
  header: z.string().min(1, "Title cannot be empty"),
  headerEn: z.string().nullable(),
  body: z.string().default(""),
  bodyEn: z.string().nullable(),
  author: authorSchema,
  tags: z.array(
    tagSchema.pick({
      id: true
    })
  ).default([]),
  imageUrl: z.string().optional().nullable(),
  // only for uploading files
  image: z.instanceof(File, { message: "Please upload a file" }).nullable().optional().refine((file) => !file || isFileImage(file), {
    message: "Måste vara en bild"
  })
});
const createSchema = articleSchema.omit({
  slug: true
}).extend({
  notificationText: z.string().max(255).optional().nullable(),
  sendNotification: z.boolean()
}).refine((data) => data.sendNotification === false || data.tags.length > 0, {
  message: "Tags cannot be empty if you want to send a notification. No notifications will be sent",
  path: ["tags"]
});
const updateSchema = articleSchema;
const uploadImage = async (user, image, slug) => {
  const imageUrl = await uploadFile(
    user,
    image,
    `public/news/${slug}`,
    PUBLIC_BUCKETS_FILES,
    "header",
    {
      resize: {
        width: 1920
      }
    }
  );
  return imageUrl;
};
const sendNewArticleNotification = async (article, notificationText) => {
  console.log("notifications: getting members");
  const subscribedMembers = await authorizedPrismaClient.member.findMany({
    where: {
      subscribedTags: {
        some: {
          id: {
            in: article.tags.map(({ id }) => id)
          }
        }
      }
    },
    select: {
      id: true
    }
  });
  console.log("notifications: sending");
  await sendNotification({
    title: article.header,
    message: notificationText ? notificationText : markdownToTxt(article.body).slice(0, 254),
    type: NotificationType.NEW_ARTICLE,
    link: `/news/${article.slug}`,
    fromAuthor: article.author,
    memberIds: subscribedMembers.map(({ id }) => id)
  });
};
const createArticle = async (event) => {
  const { request, locals } = event;
  const { prisma, user } = locals;
  const form = await superValidate(request, zod(createSchema), {
    allowFiles: true
  });
  if (!form.valid) return fail(400, { form });
  const {
    author,
    tags,
    header,
    sendNotification: shouldSendNotification,
    notificationText,
    image,
    body,
    bodyEn,
    ...rest
  } = form.data;
  const existingAuthor = await prisma.author.findFirst({
    where: {
      member: { studentId: user?.studentId },
      mandateId: author.mandateId,
      customId: author.customId
    }
  });
  let slug = slugify(header);
  const slugCount = await authorizedPrismaClient.article.count({
    where: {
      slug: { startsWith: slug }
    }
  });
  slug = slugWithCount(slug, slugCount);
  if (image) rest.imageUrl = await uploadImage(user, image, slug);
  const result = await prisma.article.create({
    data: {
      slug,
      header,
      body: DOMPurify.sanitize(body),
      bodyEn: bodyEn ? DOMPurify.sanitize(bodyEn) : bodyEn,
      ...rest,
      author: {
        connect: existingAuthor ? {
          id: existingAuthor.id
        } : void 0,
        create: !existingAuthor ? {
          member: {
            connect: { studentId: user?.studentId }
          },
          mandate: author.mandateId ? {
            connect: {
              member: { studentId: user?.studentId },
              id: author.mandateId
            }
          } : void 0,
          customAuthor: author.customId ? {
            connect: { id: author.customId }
          } : void 0
        } : void 0
      },
      tags: {
        connect: tags.filter((tag) => !!tag).map((tag) => ({
          id: tag.id
        }))
      },
      publishedAt: /* @__PURE__ */ new Date()
    },
    include: {
      author: true
    }
  });
  if (shouldSendNotification) {
    console.log("send notifications");
    await sendNewArticleNotification(
      {
        ...result,
        tags
      },
      notificationText
    );
  }
  throw redirect(
    `/news/${result.slug}`,
    {
      message: news_articleCreated(),
      type: "success"
    },
    event
  );
};
const updateArticle = async (event) => {
  const { request, locals } = event;
  const { prisma, user } = locals;
  const form = await superValidate(request, zod(updateSchema), {
    allowFiles: true
  });
  if (!form.valid) return fail(400, { form });
  const { slug, author, tags, image, body, bodyEn, ...rest } = form.data;
  const existingAuthor = await prisma.author.findFirst({
    where: {
      member: { id: author.memberId },
      mandateId: author.mandateId,
      customId: author.customId
    }
  });
  if (image) rest.imageUrl = await uploadImage(user, image, slug);
  try {
    await prisma.article.update({
      where: {
        slug
      },
      data: {
        body: DOMPurify.sanitize(body),
        bodyEn: bodyEn ? DOMPurify.sanitize(bodyEn) : bodyEn,
        ...rest,
        author: {
          connect: existingAuthor ? {
            id: existingAuthor.id
          } : void 0,
          create: existingAuthor ? {
            member: {
              connect: { studentId: user?.studentId }
            },
            mandate: author.mandateId ? {
              connect: {
                member: { studentId: user?.studentId },
                id: author.mandateId
              }
            } : void 0,
            customAuthor: author.customId ? {
              connect: { id: author.customId }
            } : void 0
          } : void 0
        },
        tags: {
          set: tags.map(({ id }) => ({ id }))
        },
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return message(
        form,
        {
          message: news_errors_articleNotFound(),
          type: "error"
        },
        { status: 400 }
      );
    }
    throw e;
  }
  throw redirect(
    `/news/${event.params.slug}`,
    {
      message: news_articleUpdated(),
      type: "success"
    },
    event
  );
};

export { updateArticle as a, createArticle as b, createSchema as c, updateSchema as u };
//# sourceMappingURL=actions2-BSfd5e_B.js.map
