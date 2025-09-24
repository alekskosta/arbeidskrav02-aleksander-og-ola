"use client";

import styles from "./QuizSummary.module.css";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";

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
  const { answers } = useQuizStore();

  const wrongQuestions = questions.filter(
    (q) => answers[q.id] !== q.correctOptionId
  );
  return (
    <section
      className={`${styles.summary} ${passed ? styles.passed : styles.failed}`}
    >
      <div className={styles.percent}>{percent}%</div>
      <div className={styles.message}>
        {percent === 100
          ? "Wow! Du har full kontroll!"
          : passed
          ? "Gratulerer, du har bestått!"
          : "Du har dessverre ikke bestått."}
      </div>
      <p className={styles.details}>
        Du fikk <strong>{correctCount}</strong> av <strong>{total}</strong>{" "}
        riktig
      </p>
      {percent < 100 && (
        <div className={styles.details}>
          <h2>Vil du prøve igjen? Se nærmere på:</h2>
          <ul>
            {wrongQuestions.map((q) => (
              <li key={q.id}>Spørsmål {q.id.replace("q", "")}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.actions}>
        <button onClick={onRestart}>Start på nytt</button>
      </div>
    </section>

  );
}
