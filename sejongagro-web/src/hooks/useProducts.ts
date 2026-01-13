import { useQuery } from "@tanstack/react-query";
import { fetchProductsByTag } from "../api/products.api";

export function useProducts(tag: string) {
  return useQuery({
    queryKey: ["products", "tag", tag],
    queryFn: () => fetchProductsByTag(tag),
  });
}
