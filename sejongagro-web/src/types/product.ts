export type Product = {
  id: string;
  name: string;
  images?: { src: string; alt?: string }[];
  price?: { sale?: number; original?: number; currency?: "KRW" | string };
  badges?: string[];
  stats?: { rating?: number; reviewCount?: number };
  href: string;
};
