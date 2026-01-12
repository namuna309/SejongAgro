export function formatKRW(value?: number | null): string {
  if (value == null || Number.isNaN(value)) return "";

  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(value);
}