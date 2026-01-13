import type { Product } from "../types/product";
import { dataStore } from "./dataStore";

export async function fetchProductsByTag(tag: string): Promise<Product[]> {
  return (dataStore.products as Product[]).filter((p) => (p as any).tags?.includes(tag));
}
