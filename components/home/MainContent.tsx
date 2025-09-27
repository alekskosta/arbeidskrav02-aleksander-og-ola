import Link from "next/link";
import Image from "next/image";
import styles from "./MainContent.module.css";
import Logo from "./Logo";

export default function MainContent() {
  return (
    <section className={styles.hero} aria-labelledby="front-title">
      <div className={styles.grid}>
        <div className={styles.logoRow}>
          <Logo />
        </div>
        <div className={styles.left}>
          <h1 className={styles.title} id="front-title">
            INTERESSERT I <span>FRONTEND?</span>
          </h1>
          <p className={styles.lead}>
            The Web Wizard inneholder lettleste ressurser for deg som har lyst
            til å komme i gang med frontend-utvikling. Du kan også ta vår quiz
            for å teste forståelsen din.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/fagstoff" className="btn btnMain">
              Fagstoff
            </Link>
            <Link href="/oppgaver" className={"btn btnSec"}>
              Quiz
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/code-devices.svg"
            alt="Kode på enheter"
            className={styles.devices}
            width={600}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
