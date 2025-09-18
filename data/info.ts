type Tema = {
  id: number;
  title: string;
  info: string;
  href: string;
};

const TEMAER: Tema[] = [
  {
    id: 1,
    title: "Design",
    info: "Design handler om å strukturere innhold, forme brukeropplevelser og skape visuell hierarki. Gode designvalg gir klarhet, flyt og emosjonell resonans i møte med produktet.",
    href: "/fagstoff/design",
  },
  {
    id: 2,
    title: "HTML",
    info: "HTML er skjelettet på weben. Semantiske tagger som <header>, <main> og <article> hjelper både brukere og søkemotorer å forstå innholdets struktur.",
    href: "/fagstoff/html",
  },
  {
    id: 3,
    title: "CSS",
    info: "CSS beskriver utseendet: layout, typografi, farger og animasjoner. Moderne verktøy som Flexbox og Grid gjør det enkelt å bygge responsive, presise grensesnitt.",
    href: "/fagstoff/css",
  },
  {
    id: 4,
    title: "JavaScript/TypeScript",
    info: "JavaScript gir interaktivitet, mens TypeScript legger til typer og bedre verktøystøtte. Sammen gjør de komplekse UI-er tryggere, mer robuste og lettere å vedlikeholde.",
    href: "/fagstoff/javascript-typescript",
  },
  {
    id: 5,
    title: "React",
    info: "React bygger UI som komponenter. Med enveis dataflyt, hooks og et stort økosystem kan du lage raske, modulære grensesnitt som er enkle å teste og gjenbruke.",
    href: "/fagstoff/react",
  },
  {
    id: 6,
    title: "Next.js",
    info: "Next.js er fullstack-rammeverket for React: filbasert routing, serverkomponenter, rendering på server/klient og innebygd optimalisering for ytelse og SEO.",
    href: "/fagstoff/nextjs",
  },
];

export default function showInfo(): Tema[] {
  return TEMAER;
}
