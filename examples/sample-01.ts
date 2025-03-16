import { Effect } from "effect"
import { getOrderById, getPriceOfProduct } from "./order"

export function getOrderSubtotal(orderId: string) {
  return Effect.gen(function* () {
    const order = yield* getOrderById(orderId)
    let subtotal = 0;

    for(const item of order.cartItems) {
        const price = yield getPriceOfProduct(item.productId)
        subtotal += price * item.quantity
    }

    return subtotal
  })
}