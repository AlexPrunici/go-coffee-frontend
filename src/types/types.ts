export enum CoffeeType {
  CAPPUCCINO = "Cappuccino",
  ESPRESSO = "Espresso",
  AMERICANO = "Americano",
}

export interface Coffee {
  Amount: number;
  Duration: number;
}

export interface CoffeeTypes {
  Americano: Coffee;
  Cappuccino: Coffee;
  Espresso: Coffee;
}

export interface CoffeeData {
  [key: string]: CoffeeTypes;
}

export type QuotaData = {
  membership: string;
  quotas: CoffeeTypes;
};

export type OrderRequest = {
  coffee: CoffeeType;
  userId: string;
  membershipType: "Americano Maniac" | "Coffee Lover" | "Basic";
};

export type Order = {
  CoffeeType: CoffeeType;
  ID: number;
  Timestamp: string;
  UserID: number;
};
