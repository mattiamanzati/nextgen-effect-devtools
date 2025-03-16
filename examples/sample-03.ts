import { Effect } from "effect";
import { Order } from "./order";

declare function getOrderById(orderId: string): Promise<Order>;
declare function getPriceOfProduct(productId: string): Promise<number>;

export async function getOrderSubtotal(orderId: string) {
  const order = await getOrderById(orderId);
  let subtotal = 0;

  for (const item of order.cartItems) {
    const price = await getPriceOfProduct(item.productId);
    subtotal += price * item.quantity;
  }

  return subtotal;
}
