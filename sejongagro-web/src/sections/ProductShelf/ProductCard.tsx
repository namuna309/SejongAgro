import type { Product } from "../../types/product";
import { formatKRW } from "../../utils/format";

export default function ProductCard({ p }: { p: Product }) {
  const sale = p.price?.sale;
  const original = p.price?.original;

  return (
    <a href={p.href} style={{ display: "block", border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
      <div style={{ fontWeight: 700, lineHeight: 1.3 }}>{p.name}</div>

      <div style={{ marginTop: 8 }}>
        {sale != null ? <div style={{ fontWeight: 800 }}>{formatKRW(sale)}</div> : null}
        {original != null && sale != null && original > sale ? (
          <div style={{ textDecoration: "line-through", opacity: 0.6, fontSize: 12 }}>{formatKRW(original)}</div>
        ) : null}
      </div>

      {p.badges?.length ? (
        <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {p.badges.map((b) => (
            <span key={b} style={{ fontSize: 12, border: "1px solid #e5e7eb", borderRadius: 999, padding: "2px 8px" }}>
              {b}
            </span>
          ))}
        </div>
      ) : null}
    </a>
  );
}
