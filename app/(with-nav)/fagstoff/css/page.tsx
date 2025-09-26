import TopicView from "@/components/fagstoff//TopicComponent/Topic";
import { showCssSection } from "@/data/info";
import Link from "next/link";

export const metadata = {
  title: "CSS - Fagstoff",
  description:
    "CSS beskriver utseendet: layout, typografi, farger og animasjoner.",
};

export default function Css() {
  const data = showCssSection();
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>CSS</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <TopicView data={data} />
    </section>
  );
}
