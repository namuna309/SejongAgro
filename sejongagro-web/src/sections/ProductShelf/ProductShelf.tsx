import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  moreHref?: string;
  query: { kind: "BEST" | "NEW" | string; limit?: number };
};

export default function ProductShelf({ title, moreHref, query }: Props) {
  const { data, isLoading } = useProducts(query.kind);

  const items = (data ?? []).slice(0, query.limit ?? 12);

  return (
    <section style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800 }}>{title}</h2>
        {moreHref ? <a href={moreHref} style={{ fontSize: 13, opacity: 0.7 }}>더보기</a> : null}
      </div>

      {isLoading ? (
        <div style={{ opacity: 0.7 }}>불러오는 중...</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 10 }}>
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </section>
  );
}
