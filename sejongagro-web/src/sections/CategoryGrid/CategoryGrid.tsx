type Props = { title?: string; items: { id: string; label: string; href: string }[] };

export default function CategoryGrid({ title = "카테고리", items }: Props) {
  return (
    <section style={{ padding: 16 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 8 }}>
        {items?.map((it) => (
          <a key={it.id} href={it.href} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
            {it.label}
          </a>
        ))}
      </div>
    </section>
  );
}
