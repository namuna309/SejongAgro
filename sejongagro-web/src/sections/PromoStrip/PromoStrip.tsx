type Props = { items: { id: string; label: string; desc?: string; href?: string }[] };

export default function PromoStrip({ items }: Props) {
  return (
    <section style={{ padding: "0 16px 16px" }}>
      <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
        {items?.map((it) => (
          <a key={it.id} href={it.href ?? "#"} style={{ whiteSpace: "nowrap", border: "1px solid #e5e7eb", borderRadius: 999, padding: "8px 12px" }}>
            <b>{it.label}</b> {it.desc ? <span style={{ opacity: 0.7 }}>· {it.desc}</span> : null}
          </a>
        ))}
      </div>
    </section>
  );
}
