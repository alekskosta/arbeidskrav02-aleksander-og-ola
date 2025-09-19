"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";
import QuestionCard from "@/components/QuestionCard";
import QuizSummary from "@/components/QuizSummary";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const answers = useQuizStore((s) => s.answers);
  const setAnswer = useQuizStore((s) => s.setAnswer);
  const reset = useQuizStore((s) => s.reset);

  const current = questions[index];
  const selected = answers[current.id];

  function handleSelect(optionId: string) {
    setAnswer(current.id, optionId);
  }

  function handleNext() {
    if (!selected) return;
    const lastIndex = questions.length - 1;
    if (index < lastIndex) {
      setIndex((i) => i + 1);
    } else {
      setShowSummary(true);
    }
  }

  function handlePrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function handleRestart() {
    reset();
    setIndex(0);
    setShowSummary(false);
  }

  if (showSummary) {
    return <QuizSummary onRestart={handleRestart} />;
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

      <div>
        <button onClick={handlePrev} disabled={index === 0}>
          ← Forrige
        </button>
        <button onClick={handleNext} disabled={!selected}>
          {index < questions.length - 1 ? "Neste →" : "Vis resultat"}
        </button>
        <button onClick={handleRestart} type="button">
          Start på nytt
        </button>
      </div>
    </main>
  );
}
