"use client";

import QuestionCard from "@/components/quiz/QuizCard/QuizCard";
import NavButtons from "@/components/quiz/NavButtons/NavButtons";
import QuizSummary from "@/components/quiz/QuizSummary/QuizSummary";
import { useQuizController } from "@/hooks/useQuizController";
import styles from "./page.module.css";

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
    wrongQuestionIds,
    currentQuestionNumber,
    onSelect,
    onPrev,
    onNext,
    onRestart,
  } = useQuizController();

  return (
    <section aria-labelledby="quiz-title">
      <div className={styles.container}>
        <h1 id="quiz-title" className={styles.mainHeading}>
          Test dine frontend-kunnskaper!
        </h1>
      </div>

      {!showSummary ? (
        <>
          <QuestionCard
            questionNumber={currentQuestionNumber}
            title={current.title}
            questionId={current.id}
            options={current.options}
            selectedOptionId={selected}
            onSelect={onSelect}
          />

          <nav aria-label="Spørsmålsnavigasjon">
            <NavButtons
              onPrev={onPrev}
              onNext={onNext}
              onRestart={onRestart}
              isFirst={isFirst}
              isLast={isLast}
              canProceed={canProceed}
            />
          </nav>
        </>
      ) : (
        <QuizSummary
          correctCount={correctCount}
          total={total}
          percent={percent}
          passed={passed}
          onRestart={onRestart}
          wrongQuestionIds={wrongQuestionIds}
        />
      )}
    </section>
  );
}
