import { useMemo, useState } from "react";
import styles from "./Gnb.module.css";

const SAMPLE = [
  { id: "fertilizer", label: "비료/퇴비", href: "/category/fertilizer" },
  { id: "pesticide", label: "농약", href: "/category/pesticide" },
  { id: "seed", label: "종자/육묘", href: "/category/seed" },
  { id: "tool", label: "농자재/도구", href: "/category/tool" },
  { id: "film", label: "비닐/자재", href: "/category/film" },
  { id: "irrigation", label: "관수/호스", href: "/category/irrigation" },
  { id: "machine", label: "기계/부품", href: "/category/machine" },
  { id: "etc", label: "기타", href: "/category/etc" }
];

export default function Gnb() {
  const [open, setOpen] = useState(false);

  // JS로 화면폭 판단(SSR 없어서 OK). resize까지 완벽히 하고 싶으면 hook으로 빼면 됨.
  const isDesktop = useMemo(() => window.matchMedia("(min-width: 1024px)").matches, []);

  return (
    <nav className={styles.gnb}>
      <div className="container">
        <div className={styles.row}>
          {/* Desktop: hover / Mobile: click */}
          <div
            className={styles.allWrap}
            onMouseEnter={() => isDesktop && setOpen(true)}
            onMouseLeave={() => isDesktop && setOpen(false)}
          >
            <button
              className={styles.allBtn}
              type="button"
              aria-expanded={open}
              onClick={() => !isDesktop && setOpen((v) => !v)}
            >
              전체카테고리
            </button>

            <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
              <div className={styles.grid}>
                {SAMPLE.map((c) => (
                  <a key={c.id} className={styles.cat} href={c.href}>
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <a href="/best">베스트</a>
            <a href="/new">신상품</a>
            <a href="/event">기획전</a>
            <a href="/sale">특가</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
