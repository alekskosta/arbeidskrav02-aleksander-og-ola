"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Answers = Record<string, string[]>;

type QuizState = {
  answers: Answers;
  setSingle: (questionId: string, optionId: string) => void;
  toggle: (questionId: string, optionId: string) => void;
  removeAnswer: (questionId: string) => void;
  reset: () => void;
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: {},

      setSingle: (questionId, optionId) =>
        set((s) => {
          const next = { ...s.answers };
          next[questionId] = [optionId];
          return { answers: next };
        }),

      toggle: (questionId, optionId) =>
        set((s) => {
          const next = { ...s.answers };
          const current = next[questionId] ?? [];
          next[questionId] = current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId];
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
