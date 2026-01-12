import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products.api";

export function useProducts(kind: string) {
  return useQuery({
    queryKey: ["products", kind],
    queryFn: () => fetchProducts(kind),
  });
}
