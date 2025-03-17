import { Effect, Data }from "effect"

export interface CartItem {
  productId: string
  quantity: number
}

export interface Order {
  id: string
  userId: string
  cartItems: CartItem[]
}

export class ProductNotFoundError extends Data.TaggedError("ProductNotFoundError")<{
  productId: string,
  order: Order
}> {}

export class PricingNotFoundError extends Data.TaggedError("PricingNotFoundError")<{
  productId: string
}> {}

export class OrderNotFoundError extends Data.TaggedError("ProductNotFoundError")<{
    orderId: string
}> {}

export class CurrentCustomerId extends Effect.Service<CurrentCustomerId>()("CurrentCustomerId",{
  succeed: { userId: 1}
}) {}

export function getOrderById(id: string): Effect.Effect<Order, OrderNotFoundError> {
  return Effect.succeed({
    id: "1",
    userId: "1",
    cartItems: [
      { productId: "1", quantity: 2 },
      { productId: "2", quantity: 1 },
    ],
  })
}
export function getPriceOfProduct(productId: string): Effect.Effect<number, ProductNotFoundError | PricingNotFoundError> {
  return Effect.succeed(10)
}