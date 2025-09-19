import CssSection from "@/components/CssSection";
import Link from "next/link";

export const metadata = {
  title: "CSS - Fagstoff",
  description:
    "CSS beskriver utseendet: layout, typografi, farger og animasjoner.",
};

export default function Css() {
  return (
    <section className="mainFront">
      <article>
        <h2>CSS</h2>
        <Link href="/fagstoff">Tilbake til Fagstoff</Link>
      </article>
      <CssSection />
    </section>
  );
}
