"use client";

import styles from "./QuizSummary.module.css";

type Props = {
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  onRestart: () => void;
};

export default function QuizSummary({
  correctCount,
  total,
  percent,
  passed,
  onRestart,
}: Props) {
  return (
    <section
      className={`${styles.summary} ${passed ? styles.passed : styles.failed}`}
    >
      <div className={styles.percent}>{percent}%</div>
      <div className={styles.message}>
        {passed
          ? "Gratulerer, du har bestått!"
          : "Du har dessverre ikke bestått."}
      </div>
      <p className={styles.details}>
        Du fikk <strong>{correctCount}</strong> av <strong>{total}</strong>{" "}
        riktig
      </p>
      <div className={styles.actions}>
        <button onClick={onRestart}>Start på nytt</button>
      </div>
    </section>
  );
}
