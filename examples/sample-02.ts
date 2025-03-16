import { Effect } from "effect";
import {
  getOrderById,
  getPriceOfProduct,
  OrderNotFoundError,
  ProductNotFoundError,
} from "./order";

export const getOrderSubtotal = (
  orderId: string
): Effect.Effect<number, OrderNotFoundError | ProductNotFoundError> =>
  Effect.gen(function* () {
    const order = yield* getOrderById(orderId);
    let subtotal = 0;

    for (const item of order.cartItems) {
      const price = yield* getPriceOfProduct(item.productId);
      subtotal += price * item.quantity;
    }

    return subtotal;
  });
