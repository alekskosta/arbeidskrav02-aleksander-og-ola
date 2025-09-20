"use client";

import type { Option } from "@/data/questions";

type Props = {
  title: string;
  questionId: string;
  options: Option[];
  multipleChoice?: boolean;
  onSelect: (optionId: string) => void;
  selectedOptionId: string[];
};

export default function QuestionCard({ title, questionId, options, multipleChoice, onSelect, selectedOptionId, }: Props) {
  const inputType = multipleChoice ? "checkbox" : "radio";
  return (
    <section>
      <h3>{title}</h3>
      <div>
        {options.map((opt) => (
          <label key={opt.id} style={{ display: "block", marginBottom: ".5rem" }}>
            <input
              type={inputType}
              name={questionId}
              value={opt.id}
              checked={selectedOptionId.includes(opt.id)}
              onChange={() => onSelect(opt.id)}
            />
            {" "}
            {opt.text}
          </label>
        ))}
      </div>
    </section>
  );
}