import { ShoppableType } from '@prisma/client';

const createTicket = async (prisma, authorId, data) => {
  return await prisma.$transaction(async (tx) => {
    const ticket = await tx.ticket.create({
      data: {
        shoppable: {
          create: {
            title: data.title,
            titleEn: data.titleEn,
            description: data.description,
            descriptionEn: data.descriptionEn,
            price: Math.round(data.price * 100),
            availableFrom: data.availableFrom,
            availableTo: data.availableTo,
            type: ShoppableType.TICKET,
            authorId,
            accessPolicies: (data.accessPolicies?.length ?? 0) > 0 ? {
              createMany: {
                data: data.accessPolicies
              }
            } : void 0
          }
        },
        event: {
          connect: {
            id: data.eventId
          }
        },
        stock: data.stock,
        maxAmountPerUser: data.maxAmountPerUser
        // optional
      }
    });
    for (const question of data.questions) {
      await tx.itemQuestion.create({
        data: {
          shoppableId: ticket.id,
          ...question,
          id: void 0,
          options: question.options === void 0 ? void 0 : {
            createMany: {
              data: question.options.map((o) => ({
                ...o,
                extraPrice: o.extraPrice ? Math.round(o.extraPrice * 100) : o.extraPrice
              }))
            }
          }
        }
      });
    }
    return ticket;
  });
};
const updateTicket = async (prisma, ticketId, data) => {
  const updatedQuestions = data.questions.filter((q) => !!q.id);
  const newQuestions = data.questions.filter((q) => !q.id);
  const updatedPolicies = data.accessPolicies?.filter((p) => !!p.id);
  const newPolicies = data.accessPolicies?.filter((p) => !p.id);
  console.log(updatedPolicies);
  await prisma.$transaction(async (tx) => {
    await tx.ticket.update({
      where: {
        id: ticketId
      },
      data: {
        shoppable: {
          update: {
            title: data.title,
            titleEn: data.titleEn,
            description: data.description,
            descriptionEn: data.descriptionEn,
            price: Math.round(data.price * 100),
            availableFrom: data.availableFrom,
            availableTo: data.availableTo,
            type: ShoppableType.TICKET,
            accessPolicies: updatedPolicies && updatedPolicies.length > 0 ? {
              updateMany: updatedPolicies.map((p) => ({
                data: {
                  ...p
                },
                where: {
                  id: p.id
                }
              }))
            } : {
              deleteMany: {}
            }
          }
        },
        event: {
          connect: {
            id: data.eventId
          }
        },
        stock: data.stock,
        maxAmountPerUser: data.maxAmountPerUser
        // optional
      }
    });
    if (newPolicies && newPolicies.length > 0) {
      await tx.shoppableAccessPolicy.createMany({
        data: newPolicies.map((p) => ({
          ...p,
          shoppableId: ticketId
        }))
      });
    }
    await updateQuestions(tx, ticketId, updatedQuestions, newQuestions);
  });
};
const updateQuestions = async (tx, ticketId, updatedQuestions, newQuestions) => {
  const removableQuestions = await tx.itemQuestion.findMany({
    where: {
      shoppableId: ticketId,
      id: {
        notIn: updatedQuestions.map((q) => q.id)
      },
      responses: {
        none: {}
        // ensures no responses exist.
      }
    },
    select: {
      id: true
    }
  });
  await tx.itemQuestion.deleteMany({
    where: {
      id: {
        in: removableQuestions.map((q) => q.id)
      }
    }
  });
  await tx.itemQuestion.updateMany({
    where: {
      shoppableId: ticketId,
      id: {
        notIn: updatedQuestions.map((q) => q.id)
      }
    },
    data: {
      removedAt: /* @__PURE__ */ new Date()
    }
  });
  for (const question of updatedQuestions) {
    await tx.itemQuestionOption.deleteMany({
      where: {
        questionId: question.id
      }
    });
    await tx.itemQuestion.update({
      // have to do a loop
      where: {
        id: question.id
      },
      data: {
        ...question,
        id: void 0,
        options: question.options === void 0 ? void 0 : {
          createMany: {
            data: question.options.map((o) => ({
              ...o,
              extraPrice: o.extraPrice ? Math.round(o.extraPrice * 100) : o.extraPrice
            }))
          }
        }
      }
    });
  }
  if (newQuestions.length > 0) {
    for (const question of newQuestions) {
      await tx.itemQuestion.create({
        data: {
          ...question,
          id: void 0,
          shoppableId: ticketId,
          options: question.options === void 0 ? void 0 : {
            createMany: {
              data: question.options.map((o) => ({
                ...o,
                extraPrice: o.extraPrice ? Math.round(o.extraPrice * 100) : o.extraPrice
              }))
            }
          }
        }
      });
    }
  }
};

export { createTicket as c, updateTicket as u };
//# sourceMappingURL=mutations-DRRZq9nc.js.map
