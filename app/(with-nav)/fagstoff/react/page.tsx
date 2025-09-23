import ReactSection from "@/components/ReactSection";
import Link from "next/link";

export const metadata = {
  title: "React - Fagstoff",
  description: "React bygger UI som komponenter.",
};

export default function React() {
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>React</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <ReactSection />
    </section>
  );
}
