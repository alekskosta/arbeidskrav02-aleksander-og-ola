import Link from "next/link";
import Quiz from "@/components/Quiz";

export default function Oppgaver() {
  return (
    <main>
      <h2>Oppgaver</h2>
      <Link href="/">Forside</Link>
      <Quiz />
    </main>
  );
}
