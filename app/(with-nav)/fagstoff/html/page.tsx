import HtmlSection from "@/components/fagstoff/HtmlSection";
import Link from "next/link";

export const metadata = {
  title: "HTML – Fagstoff",
  description: "Grunnleggende HTML forklart med korte eksempler.",
};

export default function HtmlPage() {
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>HTML</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <HtmlSection />
    </section>
  );
}
