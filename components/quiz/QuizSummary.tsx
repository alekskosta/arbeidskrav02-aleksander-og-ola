"use client";

import Link from "next/link";

type Props = {
  correctCount: number;
  total: number;
  percent: number;
  passed: boolean;
  onRestart: () => void;
};

export default function QuizSummary({
  correctCount,
  total,
  percent,
  passed,
  onRestart,
}: Props) {
  return (
    <section>
      <h2>Resultat</h2>
      <p>
        Du fikk <strong>{correctCount}</strong> av <strong>{total}</strong>{" "}
        riktig (<strong>{percent}%</strong>) — {passed ? "Bestått!" : "Ikke bestått!"}
      </p>

      <div>
        <button onClick={onRestart}>Start på nytt</button>
        <Link href="/">← Til forsiden</Link>
      </div>
    </section>
  );
}