import styles from "./page.module.css";
import MainContent from "@/components/home/MainContent"; // din main-komponent

export default function Page() {
  return (
    <div className={styles.pageRoot}>
      <img
        src="/green-bg.svg"
        alt=""
        aria-hidden
        className={styles.pageBgRight}
      />
      <div className={styles.pageContent}>
        <MainContent />
      </div>
    </div>
  );
}
