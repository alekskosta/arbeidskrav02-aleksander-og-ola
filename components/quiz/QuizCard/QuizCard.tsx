"use client";

import type { Option } from "@/data/questions";
import styles from "./QuizCard.module.css";

type Props = {
  title: string;
  questionId: string;
  options: Option[];
  onSelect: (optionId: string) => void;
  selectedOptionId?: string;
  questionNumber: number;
};

export default function QuestionCard({
  title,
  questionId,
  options,
  onSelect,
  selectedOptionId,
  questionNumber,
}: Props) {
  return (
    <section className={styles.card}>
      <div className={styles.headingContainer}>
        <h2 className={styles.questionNumber}>Spørsmål {questionNumber}:</h2>
        <p className={styles.question}>{title}</p>
      </div>
      <div className={styles.options}>
        {options.map((opt) => (
          <label key={opt.id} className={styles.option}>
            <input
              type="radio"
              name={questionId}
              value={opt.id}
              checked={selectedOptionId === opt.id}
              onChange={() => onSelect(opt.id)}
            />
            {opt.text}
          </label>
        ))}
      </div>
    </section>
  );
}
