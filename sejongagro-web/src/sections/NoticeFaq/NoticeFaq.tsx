type Props = { tabs: { id: string; label: string; limit?: number }[] };

export default function NoticeFaq({ tabs }: Props) {
  return (
    <section style={{ padding: 16 }}>
      <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>고객지원</h2>
      <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
        {tabs?.map((t) => (
          <div key={t.id} style={{ padding: "8px 0", borderTop: "1px solid #f3f4f6" }}>
            <b>{t.label}</b> <span style={{ opacity: 0.6 }}>({t.limit ?? 5}개)</span>
          </div>
        ))}
      </div>
    </section>
  );
}
