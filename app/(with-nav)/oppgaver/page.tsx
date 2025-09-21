"use client";

import QuestionCard from "@/components/quiz/QuizCard";
import NavButtons from "@/components/quiz/NavButtons";
import QuizSummary from "@/components/quiz/QuizSummary";
import { useQuizController } from "@/hooks/useQuizController";
import styles from "./page.module.css"

export default function Quiz() {
  const {
    showSummary,
    current,
    selected,
    isFirst,
    isLast,
    canProceed,
    correctCount,
    total,
    percent,
    passed,
    onSelect,
    onPrev,
    onNext,
    onRestart,
  } = useQuizController();

  return (
    <main>
      <div className={styles.container}>
      <h1 className={styles.mainHeading}>Test dine frontend-kunnskaper!</h1>
      </div>

      {!showSummary ? (
        <>
          <QuestionCard
            title={current.title}
            questionId={current.id}
            options={current.options}
            selectedOptionId={selected}
            onSelect={onSelect}
          />

          <NavButtons
            onPrev={onPrev}
            onNext={onNext}
            onRestart={onRestart}
            isFirst={isFirst}
            isLast={isLast}
            canProceed={canProceed}
          />
        </>
      ) : (
        <QuizSummary
          correctCount={correctCount}
          total={total}
          percent={percent}
          passed={passed}
          onRestart={onRestart}
        />
      )}
    </main>
  );
}
