"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Answers = Record<string, string>;

type QuizState = {
  answers: Answers;
  setAnswer: (qid: string, oid: string) => void;
  removeAnswer: (qid: string) => void;
  reset: () => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: {},

      setAnswer: (questionId, optionId) =>
        set((s) => {
          const next = { ...s.answers };
          next[questionId] = optionId;
          return { answers: next };
        }),

      removeAnswer: (questionId) =>
        set((s) => {
          const next = { ...s.answers };
          delete next[questionId];
          return { answers: next };
        }),

      reset: () => set({ answers: {} }),
    }),
    { name: "quiz-answers", storage: createJSONStorage(() => localStorage) }
  )
);
