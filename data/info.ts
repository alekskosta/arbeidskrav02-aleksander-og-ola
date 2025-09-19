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

/* ---------------------------------------------- */

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

/* ---------------------------------------------- */

type DesignSection = {
  id: number;
  title: string;
  text: string[];
};

const DESIGN_SECTIONS: DesignSection[] = [
  {
    id: 1,
    title: "Hva er design?",
    text: [
      "Design handler om å løse problemer og gjøre innhold forståelig. Det skal hjelpe brukeren å nå målet sitt uten friksjon.",
      "Vi bruker visuelle valg (typografi, farger, layout) for å styre oppmerksomhet og skape en tydelig reise gjennom innholdet.",
    ],
  },
  {
    id: 2,
    title: "Hierarki og fokus",
    text: [
      "Bestem hva som er viktigst på siden og gjør det lett å se først. Bruk størrelse, kontrast og plassering for å skape hierarki.",
      "Hold hvert skjermbilde til ett tydelig hovedfokus. Fjern støy som ikke hjelper brukeren videre.",
    ],
  },
  {
    id: 3,
    title: "Typografi – lett å lese",
    text: [
      "Velg 1–2 skrifttyper og en enkel skala for overskrifter og brødtekst. Tydelig forskjell mellom nivåene gir ro og rytme.",
      "Hold linjelengde moderat (ca. 45–75 tegn) og linjeavstand rundt 1.4–1.6 for god lesbarhet.",
    ],
  },
  {
    id: 4,
    title: "Farger og kontrast",
    text: [
      "Lag en liten palett: primærfarge, nøytraler og én aksent. Bruk farge til å understreke mening, ikke erstatte den.",
      "Sørg for god kontrast mellom tekst og bakgrunn, og ikke basér viktig informasjon kun på farge.",
    ],
  },
  {
    id: 5,
    title: "Layout, grid og luft",
    text: [
      "Bruk et grid for struktur og jevne marger. Justering og gjentakelse skaper orden og profesjonelt uttrykk.",
      "Tenk «luft» som et aktivt verktøy: konsekvent mellomrom (f.eks. 8-pikslers trinn) gjør innholdet lettere å skanne.",
    ],
  },
  {
    id: 6,
    title: "Tilgjengelighet fra start",
    text: [
      "Semantiske elementer, tydelige fokusmarkører og gode lenketekster hjelper alle – også skjermlesere og tastaturbrukere.",
      "Gi treffflater nok størrelse, beskriv bilder med alt-tekst, og sørg for at rekkefølgen i tabbing er logisk.",
    ],
  },
  {
    id: 7,
    title: "Bilder og ikoner",
    text: [
      "Bruk bilder som støtter budskapet og unngå dekor som stjeler fokus. Komprimer og skaler riktig for ytelse.",
      "Hold ikonstilen konsistent (strektykkelse, hjørner) og bruk tekstlabel når betydningen kan misforstås.",
    ],
  },
  {
    id: 8,
    title: "Konsistens og komponenter",
    text: [
      "Gjenbruk mønstre og komponenter for like handlinger. Definér enkle design-tokens (farger, spacing, radius) for konsistens.",
      "Beskriv tilstander (hover, fokus, deaktivert, feil) og hold interaksjoner forutsigbare på tvers av flater.",
    ],
  },
];

export function showDesignSection(): DesignSection[] {
  return DESIGN_SECTIONS;
}

/* ---------------------------------------------- */

type CssSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
    lang: "html" | "css" | "js";
    snippet: string;
    caption?: string;
  };
};

const CSS_SECTIONS: CssSection[] = [
  {
    id: 1,
    title: "Hva er CSS?",
    text: [
      "CSS beskriver hvordan HTML skal se ut: farger, typografi, avstander og layout.",
      "Du knytter regler (selektorer) til elementer og setter egenskaper som color, padding og display.",
    ],
    code: {
      lang: "css",
      caption: "Enkle regler for tekst og basis",
      snippet: `body { font-family: system-ui, sans-serif; color: #111827; }
p { margin: 0 0 1rem; }
.highlight { color: #2563eb; }`,
    },
  },
  {
    id: 2,
    title: "Selektorer (grunnleggende)",
    text: [
      "Bruk elementselektor (p), klasse (.card), id (#hero) og kombinasjoner (nav a).",
      "Hold selektorer korte og forståelige; bruk helst klasser for styling.",
    ],
    code: {
      lang: "css",
      caption: "Element, klasse, id og kombinator",
      snippet: `p { font-size: 1rem; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; }
#hero { padding: 2rem; }
nav a:hover { text-decoration: underline; }`,
    },
  },
  {
    id: 3,
    title: "Kaskade og spesifisitet",
    text: [
      "Når flere regler treffer samme element, vinner høyest spesifisitet; ellers den som står sist.",
      "Unngå !important og over-spesifikke selektorer – det gjør koden vanskelig å overstyre.",
    ],
    code: {
      lang: "css",
      caption: "Spesifisitet i praksis",
      snippet: `.btn { color: #111; }         /* lav spesifisitet */
nav .btn { color: #1f2937; }  /* høyere (kombinasjon) */
#header .btn { color: #000; } /* id vinner */
.btn--danger { color: #b91c1c; } /* variantklasser er ryddig */`,
    },
  },
  {
    id: 4,
    title: "Boksmodellen",
    text: [
      "Hvert element har innhold, padding, border og margin – alle påvirker størrelsen.",
      "Sett box-sizing: border-box globalt for mer forutsigbare bredder/høyder.",
    ],
    code: {
      lang: "css",
      caption: "Forutsigbar sizing",
      snippet: `*, *::before, *::after { box-sizing: border-box; }
.box {
  width: 240px;
  padding: 16px;
  border: 2px solid #111;
  margin: 16px;
  background: #fff;
}`,
    },
  },
  {
    id: 5,
    title: "Enheter og typografi",
    text: [
      "Bruk rem/em for skalerbar typografi/spacing, px for presisjon, og %/vw/vh for flyt.",
      "Begrens linjelengde og bruk line-height ~1.5 for bedre lesbarhet.",
    ],
    code: {
      lang: "css",
      caption: "Flytende typografi med clamp()",
      snippet: `html { font-size: 100%; } /* 16px i utgangspunktet */
h1 { font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem); }
p  { line-height: 1.6; max-width: 65ch; }`,
    },
  },
  {
    id: 6,
    title: "Layout med Flexbox",
    text: [
      "Flexbox er supert for rader/kolonner og justering av innhold.",
      "Bruk gap for avstand, justify-content for horisontal fordeling og align-items for vertikal justering.",
    ],
    code: {
      lang: "css",
      caption: "En enkel rad med flex",
      snippet: `.row { display: flex; gap: 1rem; align-items: center; }
.row--spread { justify-content: space-between; }
.col { flex: 1; } /* vokser og fyller tilgjengelig plass */`,
    },
  },
  {
    id: 7,
    title: "Layout med CSS Grid",
    text: [
      "Grid passer for todimensjonale layouter og responsive kort-rutenett.",
      "repeat(auto-fit, minmax()) lager flytende kolonner uten media queries.",
    ],
    code: {
      lang: "css",
      caption: "Responsivt rutenett",
      snippet: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}`,
    },
  },
  {
    id: 8,
    title: "Overganger og bevegelse",
    text: [
      "Animer helst transform og opacity for best ytelse; unngå layout-tunge egenskaper.",
      "Respekter prefers-reduced-motion for å gjøre animasjoner snillere.",
    ],
    code: {
      lang: "css",
      caption: "Myk hover + redusert bevegelse",
      snippet: `.card { transition: transform .2s ease, box-shadow .2s ease; }
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.12); }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}`,
    },
  },
];

export function showCssSection(): CssSection[] {
  return CSS_SECTIONS;
}

/* ---------------------------------------------- */

type JsTsSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
    lang: "html" | "css" | "js";
    snippet: string;
    caption?: string;
  };
};

const JS_TS_SECTIONS: JsTsSection[] = [
  {
    id: 1,
    title: "Hva er JavaScript og TypeScript?",
    text: [
      "JavaScript (JS) er språket som kjører i nettleseren (og i Node). Det styrer interaktivitet og logikk.",
      "TypeScript (TS) er JavaScript med typer. Det hjelper deg å oppdage feil tidligere og gir bedre editor-støtte. TS kompileres til vanlig JS.",
    ],
    code: {
      lang: "js",
      caption: "JS vs. TS (enkelt eksempel)",
      snippet: `// JavaScript
const name = "Aleksander";
console.log(\`Hei, \${name}!\`);

// TypeScript (kompileres til JS)
type User = { id: number; name: string };
function greet(user: User): string {
  return \`Hei, \${user.name}\`;
}`,
    },
  },
  {
    id: 2,
    title: "Variabler og typer",
    text: [
      "Bruk const for verdier som ikke skal endres, og let når du må reassign’e. Unngå var.",
      "Grunntyper i TS: string, number, boolean, null, undefined, unknown, any (bruk any minst mulig).",
    ],
    code: {
      lang: "js",
      caption: "let/const og enkle typer",
      snippet: `const PI = 3.14159;
let counter = 0;

type Point = { x: number; y: number };
const p: Point = { x: 10, y: 5 };`,
    },
  },
  {
    id: 3,
    title: "Funksjoner",
    text: [
      "Funksjoner kapsler logikk. Bruk beskrivende navn og få, tydelige parametere.",
      "I TS kan du type både parametere og returverdi. Type inference fanger ofte returtypen automatisk.",
    ],
    code: {
      lang: "js",
      caption: "Deklarasjon, arrow, default-param",
      snippet: `function sum(a: number, b: number): number {
  return a + b;
}

const mul = (a: number, b: number): number => a * b;

function hello(name = "verden") {
  return \`Hei, \${name}!\`;
}`,
    },
  },
  {
    id: 4,
    title: "Objekter og arrayer",
    text: [
      "Objekter er nøkkel/verdi-par; arrayer er ordnede lister. map/filter/reduce er nyttige for transformasjoner.",
      "Definér typer for datastrukturer i TS for tryggere kode og bedre autocomplete.",
    ],
    code: {
      lang: "js",
      caption: "Arbeid med objekter og arrayer",
      snippet: `type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: "Amina" },
  { id: 2, name: "Jonas" }
];

const names = users.map(u => u.name);     // ["Amina","Jonas"]
const found = users.find(u => u.id === 2); // { id: 2, name: "Jonas" }`,
    },
  },
  {
    id: 5,
    title: "Kontrollflyt",
    text: [
      "Bruk if/else for valg, og switch når du har mange grener på samme uttrykk.",
      "Foretrekk for…of eller array-metoder fremfor klassisk for-løkkesyntaks for lesbarhet.",
    ],
    code: {
      lang: "js",
      caption: "If/else, switch og løkker",
      snippet: `const score = 74;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else console.log("C eller lavere");

const tag = "info";
switch (tag) {
  case "error": console.log("Feil"); break;
  case "info":  console.log("Info"); break;
  default:      console.log("Ukjent");
}

for (const n of [1,2,3]) {
  console.log(n);
}`,
    },
  },
  {
    id: 6,
    title: "DOM og hendelser (i nettleser)",
    text: [
      "I ren JS kan du finne elementer med querySelector og lytte på hendelser med addEventListener.",
      "Unngå inline-hendelser i HTML. Skill struktur (HTML), stil (CSS) og logikk (JS).",
    ],
    code: {
      lang: "js",
      caption: "Klikk-hendelse på en knapp",
      snippet: `const btn = document.querySelector("button");
btn?.addEventListener("click", () => {
  alert("Du klikket!");
});`,
    },
  },
  {
    id: 7,
    title: "Asynkron kode: fetch og async/await",
    text: [
      "Nettverk og I/O er asynkront. async/await gjør løfting av data enklere å lese enn rå promises.",
      "Bruk try/catch og sjekk res.ok for å håndtere feil ryddig.",
    ],
    code: {
      lang: "js",
      caption: "Hente JSON med feilhandtering",
      snippet: `type Post = { id: number; title: string };

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Kunne ikke hente poster");
  return res.json();
}

fetchPosts()
  .then(posts => console.log(posts))
  .catch(err => console.error(err));`,
    },
  },
  {
    id: 8,
    title: "Moduler og organisering",
    text: [
      "ES-moduler bruker import/export. Del opp i små filer etter ansvar.",
      "I TS kan du bruke path-aliases (tsconfig) og strenge innstillinger for bedre kvalitet.",
    ],
    code: {
      lang: "js",
      caption: "Named export/import",
      snippet: `// math.ts
export function sum(a: number, b: number) { return a + b; }

// app.ts
import { sum } from "./math";
console.log(sum(2, 3)); // 5`,
    },
  },
];

export function showJsTsSection(): JsTsSection[] {
  return JS_TS_SECTIONS;
}

/* ---------------------------------------------- */
