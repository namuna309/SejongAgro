import type { Product } from "../../types/product";
import styles from "./ProductCard.module.css";
import { formatKRW } from "../../utils/format";

export default function ProductCard({ p }: { p: Product }) {
  const img = p.images?.[0]?.src;
  const sale = p.price?.sale;
  const original = p.price?.original;

  return (
    <a href={p.href} className={styles.card}>
      <div className={styles.thumb}>
        {img ? <img src={img} alt={p.images?.[0]?.alt ?? p.name} /> : <div className={styles.ph} />}
        {p.badges?.length ? (
          <div className={styles.badges}>
            {p.badges.slice(0, 2).map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.body}>
        <div className={styles.name} title={p.name}>{p.name}</div>

        <div className={styles.price}>
          {sale != null ? <div className={styles.sale}>{formatKRW(sale)}</div> : null}
          {original != null && sale != null && original > sale ? (
            <div className={styles.original}>{formatKRW(original)}</div>
          ) : null}
        </div>

        {p.stats?.rating ? (
          <div className={styles.stats}>
            ★ {p.stats.rating.toFixed(1)} <span className={styles.rc}>({p.stats.reviewCount ?? 0})</span>
          </div>
        ) : null}
      </div>
    </a>
  );
}
