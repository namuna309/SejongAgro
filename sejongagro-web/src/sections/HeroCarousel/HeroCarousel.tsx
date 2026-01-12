type Props = {
  autoplayMs?: number;
  items: { id: string; image?: { src: string; alt: string }; title?: string; subtitle?: string; href?: string }[];
};

export default function HeroCarousel({ items }: Props) {
  const first = items?.[0];
  return (
    <section style={{ padding: 16 }}>
      <div style={{ borderRadius: 12, border: "1px solid #e5e7eb", padding: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 700 }}>{first?.title ?? "배너"}</div>
        <div style={{ marginTop: 6, opacity: 0.8 }}>{first?.subtitle}</div>
        {first?.href ? <a href={first.href} style={{ display: "inline-block", marginTop: 10 }}>바로가기</a> : null}
      </div>
    </section>
  );
}
