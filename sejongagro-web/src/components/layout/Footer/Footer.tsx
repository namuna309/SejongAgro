import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.title}>세종아그로(농마트)</div>
          <div className={styles.meta}>
            <div>고객센터: 0000-0000</div>
            <div>운영시간: 평일 09:00-18:00</div>
            <div>사업자정보/이용약관/개인정보처리방침</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
