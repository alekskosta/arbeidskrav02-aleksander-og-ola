"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/web-wizard-logo.svg"
            alt="Web Wizard Logo"
            width={300}
            height={98}
            className={styles.logoImg}
          />
        </Link>
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((v) => !v)}>
        <span className={open ? styles.iconClose : styles.iconBurger} />
      </button>
      <nav
        id="main-nav"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        onClick={() => setOpen(false)}
      >
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
