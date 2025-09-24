"use client";

import styles from "./QuizSummary.module.css";
import WrongQuestionsList from "../WrongQuestionsList/WrongQuestionsList";

type Props = {
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  onRestart: () => void;
  wrongQuestionIds: string[];
};

export default function QuizSummary({
  correctCount,
  total,
  percent,
  passed,
  onRestart,
  wrongQuestionIds
}: Props) {
  
  return (
    <section
      className={`${styles.summary} ${passed ? styles.passed : styles.failed}`}
    >
      <div className={styles.percent}>{percent}%</div>
      <h2 className={styles.message}>
        {percent === 100
          ? "Wow! Du har full kontroll!"
          : passed
          ? "Gratulerer, du har bestått!"
          : "Du har dessverre ikke bestått."}
      </h2>
      <p className={styles.details}>
        Du fikk <strong>{correctCount}</strong> av <strong>{total}</strong>{" "}
        riktig
      </p>
      {percent < 100 && (<WrongQuestionsList ids={wrongQuestionIds} className={styles.details} />
      )}

      <div className={styles.actions}>
        <button onClick={onRestart}>Start på nytt</button>
      </div>
    </section>

  );
}
