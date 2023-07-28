import { request } from "../request";

export async function getQuotaConfig() {
  return await request.request({
    method: "GET",
    url: `/api/shop/quota-config/`,
  });
}
