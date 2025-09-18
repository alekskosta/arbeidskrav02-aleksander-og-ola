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
      setAnswer: (qid, oid) =>
        set((s) => ({ answers: { ...s.answers, [qid]: oid } })),
      removeAnswer: (qid) =>
        set((s) => {
          const { [qid]: _gone, ...rest } = s.answers;
          return { answers: rest };
        }),
      reset: () => set({ answers: {} }),
    }),
    { name: "quiz-answers", storage: createJSONStorage(() => localStorage) }
  )
);
