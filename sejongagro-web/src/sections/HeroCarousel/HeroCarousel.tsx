import { dataStore } from "../../api/dataStore";

type Props = { bannerIds: string[]; autoplayMs?: number };

export default function HeroCarousel({ bannerIds }: Props) {
  const items = dataStore.banners.filter((b) => bannerIds.includes(b.id));
  const first = items[0];

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
