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
  const setSingle = useQuizStore((s) => s.setSingle);
  const toggle = useQuizStore((s) => s.toggle);
  const reset = useQuizStore((s) => s.reset);

  const current = questions[index];
  const isMultipleChoice = current.multipleChoice ? true : false;
  const selectedIds = answers[current.id] ?? [];

  function handleSelect(optionId: string) {
    if (isMultipleChoice) toggle(current.id, optionId);
    else setSingle(current.id, optionId);
  }

  function handleNext() {
    if (selectedIds.length === 0) return;
    const last = questions.length - 1;
    if (index < last) setIndex((i) => i + 1);
    else setShowSummary(true);
  }

  function handlePrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function handleRestart() {
    reset();
    setIndex(0);
    setShowSummary(false);
  }

  if (showSummary) return <QuizSummary onRestart={handleRestart} />;

  return (
    <main>
      <h2>Oppgaver</h2>

      <QuestionCard
        title={current.title}
        questionId={current.id}
        options={current.options}
        multipleChoice={isMultipleChoice}
        selectedOptionId={selectedIds}
        onSelect={handleSelect}
      />

      <div style={{ marginTop: "1rem", display: "flex", gap: ".5rem" }}>
        <button onClick={handlePrev} disabled={index === 0}>← Forrige</button>
        <button onClick={handleNext} disabled={selectedIds.length === 0}>
          {index < questions.length - 1 ? "Neste →" : "Vis resultat"}
        </button>
        <button onClick={handleRestart} type="button">Start på nytt</button>
      </div>
    </main>
  );
}