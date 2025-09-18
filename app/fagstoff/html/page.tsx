import Link from "next/link";

export const metadata = {
  title: "HTML - Fagstoff",
  description: "HTML er skjelettet på weben.",
};

export default function Html() {
  return (
    <main className="mainFront">
      <h2>HTML</h2>
      <Link href="/fagstoff">Tilbake til Fagstoff</Link>
    </main>
  );
}
