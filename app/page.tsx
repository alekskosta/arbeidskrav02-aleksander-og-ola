import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainHome}>
      <article className={styles.heroArticle}>
        <h1>Tittel</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          sapien vitae lorem faucibus pretium. Sed ut erat ac nunc dictum
          aliquet.
        </p>
        <div className={styles.flexLinks}>
          <Link href="/fagstoff" className={styles.links}>
            Fagstoff
          </Link>
          <Link href="/oppgaver" className={styles.links}>
            Oppgaver
          </Link>
        </div>
      </article>
    </main>
  );
}
