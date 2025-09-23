import DesignSection from "@/components/DesignSection";
import Link from "next/link";

export const metadata = {
  title: "Design - Fagstoff",
  description: "Design handler om struktur, hierarki og opplevelse",
};

export default function Design() {
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>Design</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <DesignSection />
    </section>
  );
}
