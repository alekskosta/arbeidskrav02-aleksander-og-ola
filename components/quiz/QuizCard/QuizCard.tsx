"use client";

import type { Option } from "@/data/questions";
import styles from "./QuizCard.module.css"

type Props = {
  title: string;
  questionId: string;
  options: Option[];
  onSelect: (optionId: string) => void;
  selectedOptionId?: string;
};

export default function QuestionCard({ title, questionId, options, onSelect, selectedOptionId, }: Props) {
  return (
     <section className={styles.card}>
      <h2>{title}</h2>
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