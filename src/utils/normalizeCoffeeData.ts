import { CoffeeData, CoffeeTypes } from "../types/types";

export function normalizeData(
  data: CoffeeData
): { membership: string; quotas: CoffeeTypes }[] {
  const normalizedData: { membership: string; quotas: CoffeeTypes }[] = [];

  for (const key in data) {
    const coffeeType: { membership: string; quotas: CoffeeTypes } = {
      membership: key,
      quotas: {
        Americano: data[key].Americano,
        Cappuccino: data[key].Cappuccino,
        Espresso: data[key].Espresso,
      },
    };

    normalizedData.push(coffeeType);
  }

  return normalizedData;
}
