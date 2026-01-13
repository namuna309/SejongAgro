import type { ReactNode } from "react";
import styles from "./AppLayout.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
}
