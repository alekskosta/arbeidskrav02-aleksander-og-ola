import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/web-wizard-logo.svg"
            alt="Web Wizard Logo"
            width={400}
            height={130}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Forside</Link>
          </li>
          <li>
            <Link href="/oppgaver">Quiz</Link>
          </li>
          <li>
            <Link href="/fagstoff">Fagstoff</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
