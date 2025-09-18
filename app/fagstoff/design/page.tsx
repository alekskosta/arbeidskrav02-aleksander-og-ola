import Link from "next/link";

export const metadata = {
  title: "Design - Fagstoff",
  description: "Design handler om struktur, hierarki og opplevelse",
};

export default function Design() {
  return (
    <main className="mainFront">
      <h2>Design</h2>
      <Link href="/fagstoff">Tilbake til Fagstoff</Link>
    </main>
  );
}
