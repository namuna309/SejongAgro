import best from "../mocks/products.best.json";
import newest from "../mocks/products.new.json";
import type { Product } from "../types/product";

export async function fetchProducts(kind: string): Promise<Product[]> {
  // 나중에: fetch(`/api/products?kind=${kind}`)
  if (kind === "BEST") return best as Product[];
  if (kind === "NEW") return newest as Product[];
  return [];
}
