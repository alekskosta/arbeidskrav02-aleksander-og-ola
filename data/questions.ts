export type Option = { id: string; text: string };

export type Question = {
  id: string;
  title: string;
  options: Option[]; 
  correctOptionId: string; 
};

export const questions: Question[] = [
    {
    id: "q1",
    title: "Hva er hovedrollen til HTML?",
    options: [
      { id: "a", text: "Å beskrive struktur og innhold på en nettside" },
      { id: "b", text: "Å bestemme farger og layout" },
      { id: "c", text: "Å legge til interaktivitet" },
      { id: "d", text: "Å håndtere databaser" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q2",
    title: "Hvilken semantisk tagg brukes for hovedinnholdet på en side?",
    options: [
      { id: "a", text: "<header>" },
      { id: "b", text: "<main>" },
      { id: "c", text: "<section>" },
      { id: "d", text: "<article>" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q3",
    title: "Hva beskriver CSS?",
    options: [
      { id: "a", text: "Hvordan innhold ser ut (farger, layout, typografi)" },
      { id: "b", text: "Hvordan data lagres i databasen" },
      { id: "c", text: "Hvordan nettleseren kjører JavaScript" },
      { id: "d", text: "Hvordan metadata sendes til søkemotorer" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q4",
    title: "Hva er Flexbox spesielt godt egnet til?",
    options: [
      { id: "a", text: "Å style tekst" },
      { id: "b", text: "Å lage todimensjonale grid-oppsett" },
      { id: "c", text: "Å lage enkle rader og kolonner" },
      { id: "d", text: "Å definere meta-tags" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q5",
    title: "Hva tilfører TypeScript til JavaScript?",
    options: [
      { id: "a", text: "Mer avanserte CSS-funksjoner" },
      { id: "b", text: "Støtte for databaser" },
      { id: "c", text: "Typer og bedre verktøystøtte" },
      { id: "d", text: "Automatisk SEO-optimalisering" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q6",
    title: "Hva er props i React?",
    options: [
      { id: "a", text: "State som lagres globalt" },
      { id: "b", text: "Funksjoner som kjøres automatisk" },
      { id: "c", text: "Data som sendes inn i en komponent" },
      { id: "d", text: "Stiler for en komponent" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q7",
    title: "Hva er Next.js?",
    options: [
      { id: "a", text: "Et rammeverk som utvider React med server-side funksjoner" },
      { id: "b", text: "Et bibliotek for CSS-animasjoner" },
      { id: "c", text: "Et verktøy for å lage databaser" },
      { id: "d", text: "En samling ferdige ikoner" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q8",
    title: "Hva brukes useState til i React?",
    options: [
      { id: "a", text: "Å hente data fra API-er" },
      { id: "b", text: "Å håndtere lokal tilstand i en komponent" },
      { id: "c", text: "Å dele state mellom mange komponenter" },
      { id: "d", text: "Å kjøre sideeffekter" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q9",
    title: "Hva menes med semantiske HTML-elementer?",
    options: [
      { id: "a", text: "Elementer som beskriver mening og struktur" },
      { id: "b", text: "Elementer som kun styrer utseende" },
      { id: "c", text: "Elementer som er laget for CSS Grid" },
      { id: "d", text: "Elementer som alltid har en id" },
    ],
    correctOptionId: "a",
  },
  {
    id: "q10",
    title: "Hva er en fordel med å bruke komponenter i React?",
    options: [
      { id: "a", text: "Komponenter kan gjøres gjenbrukbare og enkle å teste" },
      { id: "b", text: "Komponenter lagrer data i databasen" },
      { id: "c", text: "Komponenter gjør CSS unødvendig" },
      { id: "d", text: "Komponenter kompileres til TypeScript automatisk" },
    ],
    correctOptionId: "a",
  },
];
