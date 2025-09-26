import TopicView from "@/components/fagstoff//TopicComponent/Topic";
import { showJsTsSection } from "@/data/info";
import Link from "next/link";

export const metadata = {
  title: "JavaScript/TypeScript - Fagstoff",
  description:
    "JavaScript gir interaktivitet, mens TypeScript legger til typer og bedre verktøystøtte.",
};

export default function Javascript() {
  const data = showJsTsSection();
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>JavaScript / TypeScript</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <TopicView data={data} />
    </section>
  );
}
