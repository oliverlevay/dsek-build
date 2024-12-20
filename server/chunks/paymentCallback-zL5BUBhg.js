import { e as ensurePaymentIntentState } from './stripeWebhooks-CY0PR9jX.js';
import { r as redirect } from './redirect-A1ZqWr7F.js';
import { b1 as cart_payment_success, b2 as cart_payment_failed, b3 as cart_payment_requiresAction, b4 as cart_payment_processing, b5 as cart_payment_canceled } from './messages-D8OfyZiq.js';
import { e as error } from './index-BHX467Gw.js';

const stripeCallbackLoad = (onSuccessRedirect) => async (request) => {
  const { url, depends } = request;
  const payment_intent = url.searchParams.get("payment_intent");
  if (!payment_intent) {
    error(404, "Missing payment intent");
  }
  depends("cart-success-page");
  const [intent] = await ensurePaymentIntentState(payment_intent);
  if (intent.status === "succeeded") {
    throw redirect(
      onSuccessRedirect,
      {
        message: cart_payment_success(),
        type: "success",
        id: `success-${payment_intent}`
      },
      request
    );
  }
  switch (intent.status) {
    case "canceled":
      return {
        message: cart_payment_canceled()
      };
    case "processing":
      return {
        message: cart_payment_processing(),
        refreshPeriodically: true
      };
    case "requires_action":
      return {
        message: cart_payment_requiresAction(),
        refreshPeriodically: true
      };
    default:
      return {
        message: cart_payment_failed()
      };
  }
};

export { stripeCallbackLoad as s };
//# sourceMappingURL=paymentCallback-zL5BUBhg.js.map
