import Stripe from 'stripe';
import { a as authorizedPrismaClient } from './authorizedPrisma-Cq0-ghZZ.js';
import { s as sendNotification } from './index3-CPnAgoK8.js';
import { a as NotificationType } from './types3-D4jKTO0f.js';
import { aY as tickets_errors_couldNotRefund, aZ as tickets_purchase_errors_existingPaymentIsOngoing } from './messages-D8OfyZiq.js';
import { d as private_env } from './shared-server-BfUoNEXY.js';

const stripe = new Stripe(private_env.SECRET_STRIPE_KEY);
const createPaymentIntent = ({ idempotencyKey, ...params }) => {
  return stripe.paymentIntents.create(
    {
      currency: "SEK",
      automatic_payment_methods: {
        enabled: true
      },
      description: "D-sek webshop purchase",
      ...params
    },
    {
      idempotencyKey
    }
  );
};
const updatePaymentIntent = (id, params) => {
  return stripe.paymentIntents.update(id, {
    currency: "SEK",
    description: "D-sek webshop purchase",
    ...params
  });
};
const creteConsumableMetadata = (consumables) => {
  return {
    consumableIds: consumables.map((c) => c.id).join(", "),
    consumableNames: consumables.map((c) => c.shoppable.title).join(", "),
    consumableCount: consumables.length
  };
};
const getPaymentIntent = (intentId, params) => {
  return stripe.paymentIntents.retrieve(intentId, params);
};
const resetConsumablesForIntent = async (intentId) => {
  await authorizedPrismaClient.consumable.updateMany({
    where: {
      stripeIntentId: intentId,
      purchasedAt: null
    },
    data: {
      stripeIntentId: null,
      priceAtPurchase: null
    }
  });
};
const removePaymentIntent = async (intentId) => {
  await stripe.paymentIntents.cancel(intentId);
  await resetConsumablesForIntent(intentId);
};
const ensurePaymentIntentState = async (intentId) => {
  const intent = await getPaymentIntent(intentId);
  let canRetryPayment = false;
  switch (intent.status) {
    case "succeeded":
      await onPaymentSuccess(intent);
      break;
    case "requires_payment_method":
      canRetryPayment = true;
      break;
    case "requires_action":
      canRetryPayment = true;
      break;
    case "requires_capture":
      canRetryPayment = true;
      break;
    case "requires_confirmation":
      canRetryPayment = true;
      break;
    case "processing":
      await onPaymentProcessing(intent);
      throw new Error(tickets_purchase_errors_existingPaymentIsOngoing());
    case "canceled":
      await onPaymentCancellation(intent);
      break;
    default:
      await removePaymentIntent(intent.id);
      break;
  }
  return [intent, canRetryPayment];
};
const refundConsumable = async (stripeIntentId, amount) => {
  try {
    const intent = await getPaymentIntent(stripeIntentId, {
      expand: ["latest_charge"]
    });
    if (intent.status !== "succeeded") return;
    if (intent.latest_charge?.refunded) return;
    const refund = await stripe.refunds.create({
      amount: Math.min(intent.amount_received, amount),
      payment_intent: stripeIntentId
    });
    return refund;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`${tickets_errors_couldNotRefund()}: ${e}`);
    }
    throw new Error(tickets_errors_couldNotRefund());
  }
};
const onPaymentSuccess = async (intent) => {
  const purchasedConsumables = await authorizedPrismaClient.$transaction(
    async (tx) => {
      let relevantConsumables = await tx.consumable.findMany({
        where: {
          stripeIntentId: intent.id
        },
        include: {
          shoppable: true
        }
      });
      if (relevantConsumables.length === 0) {
        relevantConsumables = await tryToSavePaymentIntent(intent, tx);
      }
      if (relevantConsumables.every(
        (consumable) => consumable.purchasedAt !== null
      )) {
        console.warn(
          "Tried to mark consumables as purchased, but they were already marked as purchased"
        );
        return [];
      } else {
        if (relevantConsumables.some(
          (consumable) => consumable.purchasedAt !== null
        )) {
          console.warn(
            `some consumables for intent id was already marked as purchased. Intent id: ${intent.id}`
          );
        }
        await tx.consumable.updateMany({
          where: {
            stripeIntentId: intent.id,
            purchasedAt: null
          },
          data: {
            purchasedAt: /* @__PURE__ */ new Date()
          }
        });
      }
      return relevantConsumables.filter(
        (consumable) => consumable.purchasedAt === null
        // filter on items which were not already bought
      );
    }
  );
  if (purchasedConsumables.length === 0) {
    return;
  }
  try {
    await sendNotification({
      title: purchasedConsumables.length === 1 ? `${purchasedConsumables[0]?.shoppable.title} har köpts` : `${purchasedConsumables.length} produkter har köpts`,
      message: `Ditt köp på ${intent.amount / 100} ${intent.currency?.toUpperCase() ?? "SEK"} har gått igenom`,
      type: NotificationType.PAYMENT_STATUS,
      link: "/shop/inventory",
      // From a pure type perspective, there is a risk of this array being multiple memberIds, meaning they might both get "you have purchased 2 items" but only purchased one each
      // But in reality, there is no way for two different people to have the same purchase intent, so it should always be a array of 1 items (or 0, if purchased anonymously)
      memberIds: purchasedConsumables.map((consumable) => consumable.memberId).filter(Boolean)
    });
  } catch (e) {
    throw new Error(
      `Could not send notifications: ${e instanceof Error ? e.message : e}`
    );
  }
};
const tryToSavePaymentIntent = async (intent, tx) => {
  const consumableIds = intent.metadata?.["consumableIds"]?.split(", ");
  if (!consumableIds) {
    console.error(
      `No consumables found for intent ${intent.id}. Metadata was corrupt. Metadata: ${intent.metadata}`
    );
    throw new Error("No consumables found for intent");
  }
  const relevantConsumables = await tx.consumable.findMany({
    where: {
      id: {
        in: consumableIds
      },
      purchasedAt: null
    },
    include: {
      shoppable: true
    }
  });
  if (relevantConsumables.length === 0) {
    console.error(
      `No consumables found for intent ${intent.id}. Not found in db.`
    );
    throw new Error("No consumables found for intent");
  }
  await tx.consumable.updateMany({
    where: {
      id: {
        in: consumableIds
      }
    },
    data: {
      stripeIntentId: intent.id
    }
  });
  return relevantConsumables;
};
const onPaymentFailure = async (intent) => {
  const failedConsumables = await authorizedPrismaClient.$transaction(
    async (tx) => {
      const relevantConsumables = await tx.consumable.findMany({
        where: {
          stripeIntentId: intent.id
        },
        include: {
          shoppable: true
        }
      });
      if (relevantConsumables.length === 0) {
        console.error(`No consumables found for intent ${intent.id}`);
        throw new Error("No consumables found for intent");
      }
      await tx.consumable.updateMany({
        where: {
          stripeIntentId: intent.id
        },
        data: {
          stripeIntentId: null,
          // remove the intent id
          purchasedAt: null,
          // make sure the consumable is not marked as purchased
          priceAtPurchase: null
        }
      });
      return relevantConsumables;
    }
  );
  try {
    await sendNotification({
      title: "Ditt köp har misslyckats",
      message: `Ditt köp på ${intent.amount / 100} ${intent.currency?.toUpperCase() ?? "SEK"} har misslyckats. Anledning: ${intent.last_payment_error?.message}`,
      type: NotificationType.PAYMENT_STATUS,
      link: "/shop/cart",
      // From a pure type perspective, there is a risk of this array being multiple memberIds, meaning they might both get "you have purchased 2 items" but only purchased one each
      // But in reality, there is no way for two different people to have the same purchase intent, so it should always be a array of 1 items (or 0, if purchased anonymously)
      memberIds: failedConsumables.map((consumable) => consumable.memberId).filter(Boolean)
    });
  } catch (e) {
    throw new Error(
      `Could not send notifications: ${e instanceof Error ? e.message : e}`
    );
  }
};
const onPaymentCancellation = async (intent) => {
  await resetConsumablesForIntent(intent.id);
};
const onPaymentProcessing = (intent) => {
  console.log(`Payment Intent ${intent.id} is processing`);
};

export { createPaymentIntent as a, refundConsumable as b, creteConsumableMetadata as c, onPaymentFailure as d, ensurePaymentIntentState as e, onPaymentProcessing as f, onPaymentSuccess as g, onPaymentCancellation as o, removePaymentIntent as r, stripe as s, updatePaymentIntent as u };
//# sourceMappingURL=stripeWebhooks-CY0PR9jX.js.map
