import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import Gnb from "./Gnb";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* Top strip */}
      <div className={styles.topStrip}>
        <div className="container">
          <div className={styles.topRow}>
            <div className={styles.notice}>공지: 신규 회원 쿠폰 지급</div>
            <div className={styles.topLinks}>
              <a href="/help">고객센터</a>
              <span className={styles.sep} />
              <a href="/shipping">배송안내</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.mainRow}>
            <a className={styles.logo} href="/">
              sejongagro
            </a>

            <div className={styles.search}>
              <SearchBar />
            </div>

            <nav className={styles.utility}>
              <a href="/login">로그인</a>
              <a href="/cart">장바구니</a>
              <a href="/mypage">마이페이지</a>
            </nav>
          </div>
        </div>
      </div>

      {/* GNB */}
      <Gnb />
    </header>
  );
}
