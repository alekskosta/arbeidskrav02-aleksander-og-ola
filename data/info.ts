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

export function showInfo(): Tema[] {
  return TEMAER;
}

type HtmlSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
    lang: "html" | "css" | "js";
    snippet: string;
    caption?: string;
  };
};

const HTML_SECTIONS: HtmlSection[] = [
  {
    id: 1,
    title: "Hva er HTML?",
    text: [
      "HTML beskriver innholdet på en nettside ved hjelp av tagger (elementer).",
      "Vanlige elementer er for eksempel <h1> for overskrift og <p> for avsnitt.",
    ],
    code: {
      lang: "html",
      caption: "En helt enkel HTML-bit",
      snippet: `<h1>Hei!</h1>
<p>Dette er min første side.</p>`,
    },
  },
  {
    id: 2,
    title: "Grunnskjelettet til en side",
    text: [
      "Hver side starter med en doctype, og <html> bør ha språk.",
      "<head> inneholder metadata (tittel m.m.), mens <body> inneholder innholdet som vises.",
    ],
    code: {
      lang: "html",
      caption: "Minimal, korrekt HTML-side",
      snippet: `<!doctype html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <title>Min første side</title>
  </head>
  <body>
    <h1>Hei, verden!</h1>
    <p>Dette er innholdet.</p>
  </body>
</html>`,
    },
  },
  {
    id: 3,
    title: "Overskrifter og avsnitt",
    text: [
      "<h1>–<h6> uttrykker dokumentets struktur, ikke visuell størrelse.",
      "<p> brukes for avsnitt av tekst.",
    ],
    code: {
      lang: "html",
      caption: "Riktig bruk av overskrifter",
      snippet: `<h1>Fagstoff</h1>
<h2>HTML</h2>
<p>HTML beskriver innhold.</p>
<h3>Hvorfor?</h3>
<p>Fordi nettlesere og hjelpemidler forstår struktur.</p>`,
    },
  },
  {
    id: 4,
    title: "Lenker og bilder",
    text: [
      'Bruk <a href="…"> for lenker med beskrivende lenketekst.',
      "<img> viser bilder. Gi alltid meningsfull alt-tekst (eller tom alt når bildet er dekorativt).",
    ],
    code: {
      lang: "html",
      caption: "Semantiske lenker og bilder",
      snippet: `<p>Les mer på <a href="/fagstoff/html">HTML-siden</a>.</p>

<figure>
  <img src="/images/struktur.png" alt="Illustrasjon av dokumentstruktur" />
  <figcaption>Figur: Eksempel på semantisk struktur.</figcaption>
</figure>`,
    },
  },
  {
    id: 5,
    title: "Lister",
    text: [
      "<ul> er uordnet liste (punkter), <ol> er nummerert liste.",
      "Hver oppføring ligger i et <li>-element. For begrep/definisjon kan du bruke <dl>/<dt>/<dd>.",
    ],
    code: {
      lang: "html",
      caption: "Tre listetyper",
      snippet: `<ul>
  <li>Semantikk</li>
  <li>Struktur</li>
  <li>Tilgjengelighet</li>
</ul>

<ol>
  <li>Planlegg</li>
  <li>Design</li>
  <li>Bygg</li>
</ol>

<dl>
  <dt>Semantikk</dt>
  <dd>Riktige tagger som uttrykker mening.</dd>
</dl>`,
    },
  },
  {
    id: 6,
    title: "Semantisk layout: header, main, footer",
    text: [
      "Semantiske landemerker gjør siden enklere å forstå for både mennesker og hjelpemidler.",
      "<header> for toppen, <main> for hovedinnholdet (normalt én per side), <footer> for bunn.",
    ],
    code: {
      lang: "html",
      caption: "Liten, ryddig mal",
      snippet: `<!doctype html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <title>Eksempelside</title>
  </head>
  <body>
    <header>
      <h1>Min side</h1>
      <nav aria-label="Hovedmeny">
        <a href="/">Hjem</a>
        <a href="/fagstoff">Fagstoff</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Artikkeltittel</h2>
        <p>Dette er innholdet i artikkelen.</p>
      </article>
    </main>

    <footer>© 2025 Ditt Navn</footer>
  </body>
</html>`,
    },
  },
  {
    id: 7,
    title: "Skjema – helt basic",
    text: [
      "<label> bør kobles til <input> via for/id for bedre tilgjengelighet og klikkflate.",
      'Bruk korrekte input-typer (f.eks. type="email").',
    ],
    code: {
      lang: "html",
      caption: "Et lite skjema",
      snippet: `<form>
  <label for="email">E-post</label>
  <input id="email" name="email" type="email" placeholder="deg@eksempel.no" required />
  <button type="submit">Send</button>
</form>`,
    },
  },
  {
    id: 8,
    title: "<head>: språk, tittel og meta",
    text: [
      'Sett riktig språk på <html> (f.eks. lang="no").',
      "<title> og meta description beskriver siden og brukes i søk/deling.",
    ],
    code: {
      lang: "html",
      caption: "Nyttige meta-tags",
      snippet: `<!doctype html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HTML – Fagstoff</title>
    <meta name="description" content="Grunnleggende HTML: semantikk, struktur og a11y." />
    <meta property="og:title" content="HTML – Fagstoff" />
    <meta property="og:description" content="Lær grunnleggende HTML med enkle eksempler." />
  </head>
  <body>…</body>
</html>`,
    },
  },
];

export function showHtmlSection(): HtmlSection[] {
  return HTML_SECTIONS;
}
