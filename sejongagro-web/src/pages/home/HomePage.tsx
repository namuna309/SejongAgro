import AppLayout from "../../components/layout/AppLayout";
import { useHome } from "../../hooks/useHome";
import { renderHomeSection } from "./homeRenderers";

export default function HomePage() {
  const { data, isLoading, error } = useHome();

  return (
    <AppLayout>
      {isLoading ? (
        <div className="container" style={{ padding: 16 }}>로딩 중...</div>
      ) : error || !data ? (
        <div className="container" style={{ padding: 16 }}>홈 데이터를 불러오지 못했습니다.</div>
      ) : (
        <main>{data.sections.map((s) => renderHomeSection(s))}</main>
      )}
    </AppLayout>
  );
}
