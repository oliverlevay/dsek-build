import { g as getAllTags } from './tags-SHR1oaXg.js';
import { e as error, f as fail } from './index-BHX467Gw.js';

const settingsLoad = async ({ locals }) => {
  const { user, prisma } = locals;
  if (!user.memberId)
    throw error(401, "Du måste logga in för att ändra inställningar");
  const subscriptionSettings = await prisma.subscriptionSetting.findMany({
    where: {
      memberId: user.memberId
    }
  });
  const subscriptions = subscriptionSettings.map((sub) => sub.type);
  const pushSubscriptions = subscriptionSettings.map((sub) => {
    if (sub.pushNotification) return sub.type;
  }).filter((t) => t);
  const subscribedTags = await prisma.member.findFirst({
    where: {
      id: user.memberId
    },
    select: {
      subscribedTags: {}
    }
  });
  return {
    tags: await getAllTags(prisma),
    subscribedTags,
    subscriptions,
    pushSubscriptions
  };
};
const settingsActions = {
  default: async ({ locals, request }) => {
    const { user, prisma } = locals;
    const form = await request.formData();
    if (!user) return fail(401, { form });
    const subscription = form.getAll("subscription");
    const push = form.getAll("push");
    const tags = form.getAll("tag");
    try {
      await prisma.$transaction(async (tx) => {
        await tx.subscriptionSetting.deleteMany({
          where: {
            memberId: user.memberId
          }
        });
        const res = await tx.subscriptionSetting.createMany({
          data: subscription.map((sub) => {
            return {
              memberId: user.memberId,
              type: sub.toString(),
              pushNotification: push.some(
                (tag) => sub.toString() === tag.toString()
              )
            };
          })
        });
        if (res.count !== subscription.length) {
          throw new Error(
            `${res.count} created but supposed to be ${subscription.length}`
          );
        }
      });
      prisma.member.update({
        where: {
          id: user.memberId
        },
        data: {
          subscribedTags: {
            set: tags.map((tag) => {
              return {
                id: tag.toString()
              };
            })
          }
        }
      });
    } catch (error2) {
      console.log(error2);
      return fail(400, { form });
    }
  }
};

export { settingsActions as a, settingsLoad as s };
//# sourceMappingURL=settings-D4jLKhBn.js.map
