import { useHome } from "../../hooks/useHome";
import { renderHomeSection } from "./homeRenderers";

export default function HomePage() {
  const { data, isLoading, error } = useHome();

  if (isLoading) return <div style={{ padding: 16 }}>로딩 중...</div>;
  if (error || !data) return <div style={{ padding: 16 }}>홈 데이터를 불러오지 못했습니다.</div>;

  return <main>{data.sections.map((s) => renderHomeSection(s))}</main>;
}
