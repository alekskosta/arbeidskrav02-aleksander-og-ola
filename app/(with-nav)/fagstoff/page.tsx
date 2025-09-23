"use client";

import { showInfo } from "@/data/info";
import CardBox from "@/components/fagstoff/CardBox";
import styles from "./page.module.css";
import { useState } from "react";

export default function Fagstoff() {
  const dataInfo = showInfo();
  const [openId, setOpenId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <main className="main-cards">
      <h1 className={styles.title}>Fagstoff</h1>
      <section className={styles.sectionGrid}>
        {dataInfo.map((tema) => (
          <CardBox
            key={tema.id}
            id={tema.id}
            title={tema.title}
            info={tema.info}
            href={tema.href}
            isOpen={openId === tema.id}
            onToggle={handleToggle}
          />
        ))}
      </section>
    </main>
  );
}
