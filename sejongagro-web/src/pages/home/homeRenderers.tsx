import type { HomeSection } from "../../types/home";
import HeroCarousel from "../../sections/HeroCarousel/HeroCarousel";
import QuickLinks from "../../sections/QuickLinks/QuickLinks";
import CategoryGrid from "../../sections/CategoryGrid/CategoryGrid";
import PromoStrip from "../../sections/PromoStrip/PromoStrip";
import ProductShelf from "../../sections/ProductShelf/ProductShelf";
import NoticeFaq from "../../sections/NoticeFaq/NoticeFaq";

export function renderHomeSection(section: HomeSection) {
  switch (section.type) {
    case "heroCarousel":
      return <HeroCarousel key={section.id} {...section.props} />;
    case "quickLinks":
      return <QuickLinks key={section.id} {...section.props} />;
    case "categoryGrid":
      return <CategoryGrid key={section.id} {...section.props} />;
    case "promoStrip":
      return <PromoStrip key={section.id} {...section.props} />;
    case "productShelf":
      return <ProductShelf key={section.id} {...section.props} />;
    case "noticeFaq":
      return <NoticeFaq key={section.id} {...section.props} />;
  }
}
