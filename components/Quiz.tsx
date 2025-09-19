"use client";

import QuestionCard from "@/components/QuestionCard";
import QuizSummary from "@/components/QuizSummary";
import { questions } from "@/data/questions";

export default function Quiz() {
  const first = questions[0];

  function handleSelect(optionId: string) {
    console.log("Valgt alternativ:", optionId, "for spørsmål:", first.id);
  }

  return (
    <main>
      <h2>Oppgaver</h2>

      <QuestionCard
        title={first.title}
        questionId={first.id}
        options={first.options}
        onSelect={handleSelect}
      />

      <QuizSummary />
    </main>
  );
}
