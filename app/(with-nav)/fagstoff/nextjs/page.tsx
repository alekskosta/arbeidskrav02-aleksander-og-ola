import NextJs from "@/components/NextJs";
import Link from "next/link";

export const metadata = {
  title: "Next.js - Fagstoff",
  description: "Next.js er fullstack-rammeverket for React.",
};

export default function Nextjs() {
  return (
    <section className="section-top">
      <article className="mainFront">
        <h2>Next.js</h2>
        <Link href="/fagstoff" className="fagstoff-link-tilbake">
          Tilbake til Fagstoff
        </Link>
      </article>
      <NextJs />
    </section>
  );
}
