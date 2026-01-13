import { dataStore } from "./dataStore";
import { HomeSchemaStrict } from "../types/home";

export async function fetchHome() {
  const parsed = HomeSchemaStrict.safeParse(dataStore.home);

  if (!parsed.success) {
    console.error(
      parsed.error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
        code: issue.code,
      }))
    );
    throw new Error("home JSON schema validation failed (strict)");
  }

  return parsed.data;
}