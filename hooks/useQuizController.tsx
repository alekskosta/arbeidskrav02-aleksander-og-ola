"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { useQuizStore } from "@/store/quizStore";

export function useQuizController() {
  const [index, setIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const answers = useQuizStore((s) => s.answers);
  const setAnswer = useQuizStore((s) => s.setAnswer);
  const reset = useQuizStore((s) => s.reset);

  const total = questions.length;
  const lastIndex = total - 1;

  const current = questions[index];
  const selected = answers[current.id];

  const isFirst = index === 0;
  const isLast = index === lastIndex;
  const canProceed = Boolean(selected);

  function onSelect(optionId: string) {
    setAnswer(current.id, optionId);
  }

  function onNext() {
    if (!selected) return;
    if (!isLast) {
      setIndex((i) => i + 1);
    } else {
      setShowSummary(true);
    }
  }

  function onPrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function onRestart() {
    reset();
    setIndex(0);
    setShowSummary(false);
  }

  let correctCount = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correctOptionId) correctCount++;
  }
  const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = percent >= 80;

  return {
    // state
    showSummary,
    current,
    selected,
    isFirst,
    isLast,
    canProceed,
    // resultater
    correctCount,
    total,
    percent,
    passed,
    // handlers
    onSelect,
    onPrev,
    onNext,
    onRestart,
  };
}