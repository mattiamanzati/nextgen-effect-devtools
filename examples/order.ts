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

export declare function getOrderById(id: string): Effect.Effect<Order, OrderNotFoundError>
export declare function getPriceOfProduct(productId: string): Effect.Effect<number, ProductNotFoundError | PricingNotFoundError>
