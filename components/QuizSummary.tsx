"use client";

import Link from "next/link";
import { useQuizStore } from "@/store/quizStore";
import { questions } from "@/data/questions";

function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const A = new Set(a), B = new Set(b);
  for (const x of A) if (!B.has(x)) return false;
  return true;
}

export default function QuizSummary({ onRestart }: { onRestart: () => void }) {
  const answers = useQuizStore((s) => s.answers);

  let correctCount = 0;
  for (const q of questions) {
    const chosen = answers[q.id] ?? [];
    const isCorrect = q.multipleChoice ? sameSet(chosen, q.correctOptionId) : chosen.length === 1 && chosen[0] === q.correctOptionId[0];
    if (isCorrect) correctCount++;
  }

  const total = questions.length;
  const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  const passed = percent >= 80;

  return (
    <main>
      <h2>Resultat</h2>
      <p>
        Du fikk <strong>{correctCount}</strong> av <strong>{total}</strong>{" "}
        riktig (<strong>{percent}%</strong>) —{" "}
        {passed ? "Bestått!" : "Ikke bestått!"}
      </p>

      <div>
        <button onClick={onRestart}>Start på nytt</button>
        <Link href="/">← Til forsiden</Link>
      </div>
    </main>
  );
}
