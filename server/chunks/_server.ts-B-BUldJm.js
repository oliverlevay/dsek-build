import { d as private_env } from './shared-server-BfUoNEXY.js';
import { s as stripe, o as onPaymentCancellation, d as onPaymentFailure, f as onPaymentProcessing, g as onPaymentSuccess } from './stripeWebhooks-CY0PR9jX.js';
import { e as error, j as json, i as isHttpError } from './index-BHX467Gw.js';
import 'stripe';
import './authorizedPrisma-Cq0-ghZZ.js';
import '@prisma/client';
import './index3-CPnAgoK8.js';
import 'expo-server-sdk';
import './types3-D4jKTO0f.js';
import './messages-D8OfyZiq.js';
import './runtime-BxW51cRH.js';

async function POST({ request }) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) throw error(400, "Invalid request");
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      private_env.SECRET_STRIPE_WEBHOOK_SIGNING
    );
  } catch (err) {
    console.warn(
      "⚠️  Webhook signature verification failed.",
      err.message
    );
    throw error(400, "Invalid request");
  }
  try {
    switch (event.type) {
      case "payment_intent.succeeded":
        await onPaymentSuccess(event.data.object);
        return json({ message: "Marked as purchased" });
      case "payment_intent.processing":
        await onPaymentProcessing(event.data.object);
        return json({ message: "Processing logged" });
      case "payment_intent.payment_failed":
        await onPaymentFailure(event.data.object);
        return json({ message: "Marked as failed" });
      case "payment_intent.canceled":
        await onPaymentCancellation(event.data.object);
        return json({ message: "Marked as canceled" });
      default:
        console.log(`Unhandled event type: ${event.type}`);
        throw error(400, "Invalid request");
    }
  } catch (e) {
    if (isHttpError(e)) {
      throw e;
    } else if (e instanceof Error) {
      throw error(500, e.message);
    } else {
      throw error(500, "An unknown error occurred");
    }
  }
}

export { POST };
//# sourceMappingURL=_server.ts-B-BUldJm.js.map
