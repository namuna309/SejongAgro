import { z } from "zod";

export const HeroCarouselProps = z.object({
  bannerIds: z.array(z.string()).min(1),
  autoplayMs: z.number().optional(),
});

export const QuickLinksProps = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      icon: z.string().optional(),
      href: z.string(),
    })
  ).min(1),
});

export const CategoryGridProps = z.object({
  title: z.string().optional(),
  categoryIds: z.array(z.string()).min(1),
});

export const PromoStripProps = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      desc: z.string().optional(),
      href: z.string().optional(),
    })
  ).min(1),
});

export const ProductShelfProps = z.object({
  title: z.string(),
  moreHref: z.string().optional(),
  query: z.object({
    tag: z.string(),
    limit: z.number().optional(),
  }),
});

export const NoticeFaqProps = z.object({
  tabs: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      limit: z.number().optional(),
    })
  ).min(1),
});

export const HomeSectionSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("heroCarousel"), id: z.string(), props: HeroCarouselProps }),
  z.object({ type: z.literal("quickLinks"), id: z.string(), props: QuickLinksProps }),
  z.object({ type: z.literal("categoryGrid"), id: z.string(), props: CategoryGridProps }),
  z.object({ type: z.literal("promoStrip"), id: z.string(), props: PromoStripProps }),
  z.object({ type: z.literal("productShelf"), id: z.string(), props: ProductShelfProps }),
  z.object({ type: z.literal("noticeFaq"), id: z.string(), props: NoticeFaqProps }),
]);

export const HomeSchemaStrict = z.object({
  meta: z.object({
    version: z.string(),
    locale: z.string().optional(),
  }),
  sections: z.array(HomeSectionSchema),
});

export type HomeStrict = z.infer<typeof HomeSchemaStrict>;
export type HomeSection = z.infer<typeof HomeSectionSchema>;
