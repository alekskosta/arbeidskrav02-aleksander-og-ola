import HtmlSection from "@/components/HtmlSection";
import Link from "next/link";

export const metadata = {
  title: "HTML – Fagstoff",
  description: "Grunnleggende HTML forklart med korte eksempler.",
};

export default function HtmlPage() {
  return (
    <main>
      <article className="mainFront">
        <h2>HTML</h2>
        <Link href="/fagstoff">Tilbake til Fagstoff</Link>
      </article>
      <HtmlSection />
    </main>
  );
}
