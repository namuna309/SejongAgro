import styles from "./ProductShelf.module.css";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  moreHref?: string;
  query: { tag: string; limit?: number };
};

export default function ProductShelf({ title, moreHref, query }: Props) {
  const { data, isLoading } = useProducts(query.tag);

  const items = (data ?? []).slice(0, query.limit ?? 12);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          {moreHref ? (
            <a className={styles.more} href={moreHref}>
              더보기
            </a>
          ) : null}
        </div>

        {isLoading ? (
          <div style={{ color: "var(--muted)" }}>불러오는 중...</div>
        ) : (
          <div className={styles.grid}>
            {items.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
