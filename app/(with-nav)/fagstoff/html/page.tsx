import TopicView from "@/components/fagstoff//TopicComponent/Topic";
import { showHtmlSection } from "@/data/info";
import Link from "next/link";

export const metadata = {
  title: "HTML – Fagstoff",
  description: "Grunnleggende HTML forklart med korte eksempler.",
};

export default function HtmlPage() {
  const data = showHtmlSection();
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>HTML</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <TopicView data={data} />
    </section>
  );
}
