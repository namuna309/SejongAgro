type Props = { items: { id: string; label: string; href: string }[] };

export default function QuickLinks({ items }: Props) {
  return (
    <section style={{ padding: "0 16px 16px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 8 }}>
        {items?.map((it) => (
          <a key={it.id} href={it.href} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, textAlign: "center" }}>
            {it.label}
          </a>
        ))}
      </div>
    </section>
  );
}
