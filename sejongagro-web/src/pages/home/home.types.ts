import { z } from "zod";

export const HomeSectionType = z.enum([
  "heroCarousel",
  "quickLinks",
  "categoryGrid",
  "promoStrip",
  "productShelf",
  "noticeFaq",
]);

export type HomeSectionType = z.infer<typeof HomeSectionType>;

export const HomeSchema = z.object({
  meta: z.object({
    version: z.string(),
    locale: z.string().optional(),
  }),
  sections: z.array(
    z.object({
      type: HomeSectionType,
      id: z.string(),
      props: z.any(), // 섹션별로 좁히는 건 renderer에서 처리
    })
  ),
});

export type HomeData = z.infer<typeof HomeSchema>;
