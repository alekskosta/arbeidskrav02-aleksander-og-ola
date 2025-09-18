import Link from "next/link";

export const metadata = {
  title: "CSS - Fagstoff",
  description:
    "CSS beskriver utseendet: layout, typografi, farger og animasjoner.",
};

export default function Css() {
  return (
    <main className="mainFront">
      <h2>CSS</h2>
      <Link href="/fagstoff">Tilbake til Fagstoff</Link>
    </main>
  );
}
