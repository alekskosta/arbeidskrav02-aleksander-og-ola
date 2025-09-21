import JsTsSection from "@/components/JsTsSection";
import Link from "next/link";

export const metadata = {
  title: "JavaScript/TypeScript - Fagstoff",
  description:
    "JavaScript gir interaktivitet, mens TypeScript legger til typer og bedre verktøystøtte.",
};

export default function Javascript() {
  return (
    <section className="section-component">
      <article className="mainFront">
        <h2>JavaScript / TypeScript</h2>
        <Link href="/fagstoff">Tilbake til Fagstoff</Link>
      </article>
      <JsTsSection />
    </section>
  );
}
