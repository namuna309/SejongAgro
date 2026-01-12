import homeMock from "../mocks/home.v1.json";
import { HomeSchema } from "../pages/home/home.types";

export async function fetchHome() {
  // 나중에 실제로는 fetch("/api/home")로 교체
  const parsed = HomeSchema.safeParse(homeMock);
  if (!parsed.success) {
    console.error(parsed.error.flatten());
    throw new Error("home JSON schema validation failed");
  }
  return parsed.data;
}
