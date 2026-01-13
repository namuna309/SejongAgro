import home from "../data/home.json";
import banners from "../data/banners.json";
import categories from "../data/categories.json";
import products from "../data/products.json";

export const dataStore = {
  home: home as any,
  banners: banners as any[],
  categories: categories as any[],
  products: products as any[],
};
