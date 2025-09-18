import Link from "next/link";

export const metadata = {
  title: "Next.js - Fagstoff",
  description: "Next.js er fullstack-rammeverket for React.",
};

export default function Nextjs() {
  return (
    <main className="mainFront">
      <h2>Next.js</h2>
      <Link href="/fagstoff">Tilbake til Fagstoff</Link>
    </main>
  );
}
