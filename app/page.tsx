import styles from "./page.module.css";
import MainContent from "@/components/home/MainContent";

export default function Page() {
  return (
    <main className={styles.pageRoot}>
      <img
        src="/green-bg.svg"
        alt=""
        aria-hidden={true}
        className={styles.pageBgRight}
      />
      <div className={styles.pageContent}>
        <MainContent />
      </div>
    </main>
  );
}
