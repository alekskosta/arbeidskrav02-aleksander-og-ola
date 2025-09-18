import Link from "next/link";

export const metadata = {
  title: "React - Fagstoff",
  description: "React bygger UI som komponenter.",
};

export default function React() {
  return (
    <main className="mainFront">
      <h2>React</h2>
      <Link href="/fagstoff">Tilbake til Fagstoff</Link>
    </main>
  );
}
