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
/* HTML */

export type HtmlSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
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
/* DESIGN (ingen code-endring nødvendig) */

export type DesignSection = {
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
/* CSS */

export type CssSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
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
/* JS/TS */

export type JsTsSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
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
/* REACT */

export type ReactSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
    snippet: string;
    caption?: string;
  };
};

const REACT_SECTIONS: ReactSection[] = [
  {
    id: 1,
    title: "Hva er React?",
    text: [
      "React lar deg bygge brukergrensesnitt som små, gjenbrukbare komponenter.",
      "Du beskriver UI med JSX (HTML-lignende syntaks i JavaScript) og React oppdaterer DOM når data endrer seg.",
    ],
    code: {
      caption: "En helt enkel komponent",
      snippet: `export default function Hello() {
  return <h1>Hei fra React!</h1>;
}`,
    },
  },
  {
    id: 2,
    title: "JSX og props",
    text: [
      "JSX lar deg skrive markup i JS. Props er data som sendes inn i komponenter.",
      "Komponenter skal være rene funksjoner av props (samme props ⇒ samme UI).",
    ],
    code: {
      caption: "Komponent med props",
      snippet: `function Hello({ name }) {
  return <h2>Hei, {name}!</h2>;
}

export default function App() {
  return <Hello name="Aleksander" />;
}`,
    },
  },
  {
    id: 3,
    title: "Tilstand med useState",
    text: [
      "useState gir lokal tilstand i funksjonskomponenter.",
      "Oppdater state med funksjonsvariant når neste verdi avhenger av forrige.",
    ],
    code: {
      caption: "Enkel teller",
      snippet: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Klikket {count} ganger
    </button>
  );
}`,
    },
  },
  {
    id: 4,
    title: "Lister og keys",
    text: [
      "Når du renderer lister, må hvert barn ha en stabil key for effektiv oppdatering.",
      "Bruk en unik id eller selve verdien (hvis garantert unik).",
    ],
    code: {
      caption: "Mappe en liste med key",
      snippet: `const topics = ["HTML", "CSS", "JS"];

export default function List() {
  return (
    <ul>
      {topics.map(t => <li key={t}>{t}</li>)}
    </ul>
  );
}`,
    },
  },
  {
    id: 5,
    title: "Hendelser og å løfte state",
    text: [
      "Foreldre kan gi callbacks til barn for å få beskjed om handlinger.",
      "Løft state til nærmeste felles forelder når flere barn trenger samme data.",
    ],
    code: {
      caption: "Barn melder opp et valg",
      snippet: `function Topic({ label, onSelect }) {
  return <button onClick={() => onSelect(label)}>{label}</button>;
}

export default function Picker() {
  function handleSelect(label) {
    alert("Valgt: " + label);
  }
  return (
    <div>
      <Topic label="HTML" onSelect={handleSelect} />
      <Topic label="CSS" onSelect={handleSelect} />
    </div>
  );
}`,
    },
  },
  {
    id: 6,
    title: "useEffect og sideeffekter",
    text: [
      "useEffect brukes til sideeffekter (fetch, abonnement, manipulere tittel osv.).",
      "Tøm opp ressurser i en cleanup-funksjon, og styr når effekten kjører med avhengighetslista.",
    ],
    code: {
      caption: "Hente data ved mount",
      snippet: `import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let active = true;
    fetch("/api/posts")
      .then(r => r.json())
      .then(data => { if (active) setPosts(data); });
    return () => { active = false; };
  }, []);

  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`,
    },
  },
  {
    id: 7,
    title: "Kontrollerte skjemafelt",
    text: [
      "I kontrollerte felt kommer verdien fra state og onChange oppdaterer state.",
      "Dette gjør validering og live-tilbakemelding enkelt.",
    ],
    code: {
      caption: "Kontrollert input",
      snippet: `import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  return (
    <form>
      <label>
        E-post
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="deg@eksempel.no"
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}`,
    },
  },
  {
    id: 8,
    title: "Betinget rendering",
    text: [
      "Render bare det som trengs: bruk && for enkle tilfeller og ?: for alternativer.",
      "Hold JSX liten og lesbar ved å trekke ut delkomponenter.",
    ],
    code: {
      caption: "Toggle innhold",
      snippet: `import { useState } from "react";

export default function Toggle() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(o => !o)}>
        {open ? "Skjul" : "Vis"}
      </button>
      {open && <p>Innholdet er synlig</p>}
    </div>
  );
}`,
    },
  },
];

export function showReactSection(): ReactSection[] {
  return REACT_SECTIONS;
}

/* ---------------------------------------------- */
/* NEXT.JS */

export type NextSection = {
  id: number;
  title: string;
  text: string[];
  code?: {
    snippet: string;
    caption?: string;
  };
};

const NEXT_SECTIONS: NextSection[] = [
  {
    id: 1,
    title: "Hva er Next.js?",
    text: [
      "Next.js er et fullstack-rammeverk for React med filbasert ruting, serverkomponenter, rendering på server/klient og innebygd optimalisering.",
      "Du får raskere sider, god DX og ferdige løsninger for bilder, fonter, metadata, API-endepunkter m.m.",
    ],
    code: {
      caption: "Minimal side i app-router",
      snippet: `// app/page.tsx
export default function Page() {
  return <h1>Hei Next.js</h1>;
}`,
    },
  },
  {
    id: 2,
    title: "App Router og filbasert ruting",
    text: [
      "Mapper og filnavn i /app definerer URL-er: /app/om/page.tsx ⇒ /om.",
      "Dynamiske segmenter bruker klammeparenteser, f.eks. [slug] for /blogg/[slug].",
    ],
    code: {
      caption: "Dynamisk rute med params",
      snippet: `// app/blogg/[slug]/page.tsx
export default function Page({ params }) {
  return <h1>Innlegg: {params.slug}</h1>;
}`,
    },
  },
  {
    id: 3,
    title: "Server- vs. Client-komponenter",
    text: [
      "Som standard er komponenter server-komponenter (ingen hooks, kjører på server).",
      'Trenger du state, effekter eller event-handlers, merk fila med "use client".',
    ],
    code: {
      caption: "Client-komponent med state",
      snippet: `"use client";
import { useState } from "react";

export default function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>Klikk: {n}</button>;
}`,
    },
  },
  {
    id: 4,
    title: "Layouts og metadata",
    text: [
      "layout.tsx definerer HTML-skjelett og deles av ruter under samme mappe.",
      "Metadata konfigureres med export const metadata og gir god SEO/deling.",
    ],
    code: {
      caption: "Global layout + metadata",
      snippet: `// app/layout.tsx
export const metadata = {
  title: "Mitt nettsted",
  description: "Kort beskrivelse av siden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}`,
    },
  },
  {
    id: 5,
    title: "Datahenting på serveren",
    text: [
      "I app-router kan sider være async og gjøre fetch direkte (på server).",
      "Bruk revalidate for ISR (Incremental Static Regeneration) og sjekk res.ok for feil.",
    ],
    code: {
      caption: "Async side med caching",
      snippet: `export const revalidate = 60; // re-generer hver 60. sekund

async function getData() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Kunne ikke hente data");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
    },
  },
  {
    id: 6,
    title: "Statisk vs. dynamisk rendering",
    text: [
      "Bruk generateStaticParams for å forhåndsgenerere dynamiske ruter.",
      'Sett export const dynamic = "force-dynamic" for å tvinge dynamisk rendering ved behov.',
    ],
    code: {
      caption: "Pre-render dynamiske sider",
      snippet: `// app/blogg/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: "intro" }, { slug: "css" }];
}

export default function Page({ params }) {
  return <h1>{params.slug}</h1>;
}

// Alternativt:
// export const dynamic = "force-dynamic";`,
    },
  },
  {
    id: 7,
    title: "Navigasjon og lenker",
    text: [
      "Bruk <Link> for klientnavigasjon med prefetching.",
      "For programmatisk navigasjon i client-komponenter: useRouter().push().",
    ],
    code: {
      caption: "Link og programmatisk navigasjon",
      snippet: `import Link from "next/link";

export function Nav() {
  return <Link href="/fagstoff">Fagstoff</Link>;
}

// Client:
"use client";
import { useRouter } from "next/navigation";
export function GoButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/kontakt")}>Kontakt</button>;
}`,
    },
  },
  {
    id: 8,
    title: "Bilder og assets",
    text: [
      "next/image optimaliserer bilder automatisk (størrelse, format, lazy-loading).",
      "Oppgi alltid width, height og beskrivende alt-tekst.",
    ],
    code: {
      caption: "Optimalt bilde med next/image",
      snippet: `import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/images/hero.jpg"
      alt="Konsert i mørkt lokale"
      width={1200}
      height={600}
      priority
    />
  );
}`,
    },
  },
  {
    id: 9,
    title: "API-endepunkter (Route Handlers)",
    text: [
      "Lag backend-endepunkter i /app/api/.../route.ts. Du kan håndtere GET, POST m.fl.",
      "Response.json() gjør det enkelt å returnere JSON fra server.",
    ],
    code: {
      caption: "Enkel GET-route",
      snippet: `// app/api/hello/route.ts
export async function GET() {
  return Response.json({ hello: "world" });
}`,
    },
  },
];

export function showNextSection(): NextSection[] {
  return NEXT_SECTIONS;
}
