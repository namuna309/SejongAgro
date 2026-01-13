import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [q, setQ] = useState("");

  return (
    <form
      className={styles.wrap}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `/search?q=${encodeURIComponent(q)}`;
      }}
    >
      <input
        className={styles.input}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="상품명을 검색하세요"
      />
      <button className={styles.btn} type="submit">
        검색
      </button>
    </form>
  );
}
