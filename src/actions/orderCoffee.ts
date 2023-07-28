import { OrderRequest } from "../types/types";
import { request } from "../request";

export async function orderCoffee(values: OrderRequest) {
  return await request.request({
    method: "POST",
    url: `/api/shop/order/`,
    data: values,
  });
}
