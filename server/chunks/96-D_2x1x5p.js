import { p as public_env } from './shared-server-BfUoNEXY.js';
import { w as withHandledNotificationQueue, m as moveQueueToCart } from './reservations-BalPKyhj.js';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { b as refundConsumable } from './stripeWebhooks-CY0PR9jX.js';
import { f as fail } from './index-BHX467Gw.js';
import { s as superValidate, z as zod, j as message } from './superValidate-C2lU2J3v.js';
import { z } from './index-CuABlRvJ.js';
import { l as loadTicketData } from './loadTicketData-BaPG4Us_.js';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';
import './types4-Dn0vT04J.js';
import '@prisma/client';
import 'stripe';
import './constants-BTUpIS8C.js';
import './types-jvq07wik.js';
import './apiNames-BaTM20TQ.js';
import './authorization-DvGst16H.js';

const load = async ({ locals, params }) => {
  const { user, prisma } = locals;
  const { ticket, consumables } = await loadTicketData(
    prisma,
    user,
    params.slug
  );
  const purchasedConsumables = consumables.filter(
    (c) => c.purchasedAt !== null
  );
  const consumablesInCart = consumables.filter((c) => c.purchasedAt === null);
  const reservations = ticket.shoppable.reservations;
  const shoppable = ticket.shoppable;
  delete shoppable.consumables;
  delete shoppable.reservations;
  const mergedTicket = {
    ...ticket.shoppable,
    ...ticket
  };
  delete mergedTicket.shoppable;
  const isStripeTestEnvironment = public_env.PUBLIC_STRIPE_KEY.startsWith("pk_test");
  const stripeIntentBaseUrl = isStripeTestEnvironment ? "https://dashboard.stripe.com/test/payments" : "https://dashboard.stripe.com/payments";
  return {
    ticket: mergedTicket,
    purchasedConsumables,
    consumablesInCart,
    reservations,
    stripeIntentBaseUrl
    // referenced directly in ConsumableRow.svelte
  };
};
const actions = {
  consume: async ({ locals, request, params }) => {
    const { prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ consumableId: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    try {
      await prisma.consumable.update({
        where: {
          id: form.data.consumableId,
          shoppableId: params.slug
        },
        data: {
          consumedAt: /* @__PURE__ */ new Date()
        }
      });
    } catch (e) {
      if (e instanceof Error)
        return message(form, {
          message: e.message,
          type: "error"
        });
      return message(form, {
        message: "Kunde inte konsumera biljetten.",
        type: "error"
      });
    }
    return message(form, {
      message: "Biljetten har konsumerats.",
      type: "success"
    });
  },
  unconsume: async ({ locals, request, params }) => {
    const { prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ consumableId: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    try {
      await prisma.consumable.update({
        where: {
          id: form.data.consumableId,
          shoppableId: params.slug
        },
        data: {
          consumedAt: null
        }
      });
    } catch (e) {
      if (e instanceof Error)
        return message(form, {
          message: e.message,
          type: "error"
        });
      return message(form, {
        message: "Kunde inte avkonsumera biljetten.",
        type: "error"
      });
    }
    return message(form, {
      message: "Biljetten har avkonsumerats.",
      type: "success"
    });
  },
  refund: async ({ locals, request, params }) => {
    const { prisma } = locals;
    const form = await superValidate(
      request,
      zod(z.object({ consumableId: z.string() }))
    );
    if (!form.valid) return fail(400, { form });
    try {
      const consumable = await prisma.consumable.findUnique({
        where: {
          id: form.data.consumableId,
          shoppableId: params.slug
        },
        include: {
          shoppable: true
        }
      });
      if (!consumable) {
        return message(form, {
          message: "Biljetten hittades inte.",
          type: "error"
        });
      }
      if (consumable.stripeIntentId) {
        await refundConsumable(
          consumable.stripeIntentId,
          consumable.priceAtPurchase ?? consumable.shoppable.price
          // to ensure correct refund amount if shoppable price has changed
        );
      }
      await authorizedPrismaClient.consumable.delete({
        where: {
          id: consumable.id
        }
      });
      await withHandledNotificationQueue(
        moveQueueToCart(
          authorizedPrismaClient,
          consumable.shoppableId,
          1,
          true
        )
      );
      return message(form, {
        message: "Biljetten har återbetalats.",
        type: "success"
      });
    } catch (e) {
      if (e instanceof Error)
        return message(form, {
          message: e.message,
          type: "error"
        });
      return message(form, {
        message: "Kunde inte återbetala biljetten.",
        type: "error"
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 96;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DKNrikM1.js')).default;
const server_id = "src/routes/(app)/shop/tickets/[slug]/manage/+page.server.ts";
const imports = ["_app/immutable/nodes/96.BYqnECV4.js","_app/immutable/chunks/scheduler.DK5noefF.js","_app/immutable/chunks/index.OECaLbXR.js","_app/immutable/chunks/each.Dbd03sI1.js","_app/immutable/chunks/SetPageTitle.Cf9LBAU4.js","_app/immutable/chunks/pageTitle.DQXADn3y.js","_app/immutable/chunks/index.BanBdRDU.js","_app/immutable/chunks/stores.BdoTh84D.js","_app/immutable/chunks/123.BVaw0gZK.js","_app/immutable/chunks/MemberAvatar.DsenHHaP.js","_app/immutable/chunks/bundle-mjs.BkWO730n.js","_app/immutable/chunks/member.Deknk2Gk.js","_app/immutable/chunks/dayjs.min.B27XEuZS.js","_app/immutable/chunks/_commonjsHelpers.Cpj98o6Y.js","_app/immutable/chunks/forms.DDTWXYJD.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=96-D_2x1x5p.js.map
