import type { Answers } from "@/store/quizStore";
import type { Question } from "@/data/questions";

export function getWrongQuestionIds(answers: Answers, questions: Question[]) {
  return questions
    .filter((q) => answers[q.id] !== q.correctOptionId)
    .map((q) => q.id);
}