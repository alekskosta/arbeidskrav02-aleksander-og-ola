"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";
import QuestionCard from "@/components/QuestionCard";

export default function Quiz() {
  const [index, setIndex] = useState(0);

  const answers = useQuizStore((s) => s.answers);
  const setAnswer = useQuizStore((s) => s.setAnswer);

  const current = questions[index];
  const selected = answers[current.id];

  function handleSelect(optionId: string) {
    setAnswer(current.id, optionId);
  }

  return (
    <main>
      <h2>Oppgaver</h2>

      <QuestionCard
        title={current.title}
        questionId={current.id}
        options={current.options}
        onSelect={handleSelect}
        selectedOptionId={selected}
      />

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          ← Forrige
        </button>
        <button
          onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
          style={{ marginLeft: ".5rem" }}
        >
          Neste →
        </button>
      </div>

      {/* Sjekker at det funker i UI, denne skal fjernes */}
      <p style={{ marginTop: ".5rem" }}>
        Valgt for {current.id}: <strong>{selected ?? "(ingen)"}</strong>
      </p>
    </main>
  );
}
