import { request } from "../request";
import { Order } from "../types/types";

export async function getOrders() {
  return await request.request<Order[]>({
    method: "GET",
    url: `/api/shop/orders/`,
  });
}
