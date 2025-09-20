import { showReactSection } from "@/data/info";
import ButtonComponent from "./ReactEksempler/ButtonComponent";
import ButtonComponentTwo from "./ReactEksempler/ButtonComponentTwo";
import ButtonComponentThree from "./ReactEksempler/ButtonComponentThree";

export default function ReactSection() {
  const data = showReactSection();
  return (
    <section className="section-component">
      {data.map((sec) => (
        <article key={sec.id} className="article-component">
          <h2>{sec.title}</h2>

          {sec.text.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {sec.code && (
            <figure className="figure">
              {sec.code.caption && (
                <figcaption className="caption">{sec.code.caption}</figcaption>
              )}
              <pre className="pre">
                <code>{sec.code.snippet}</code>
              </pre>
            </figure>
          )}
        </article>
      ))}
      <hr></hr>
      <h3>Interaktive Eksempler</h3>
      <hr></hr>
      <article className="article-component">
        <h2>Button komponent</h2>
        <p>
          Vi starter med en enkel knappkomponent og ser på noen praktiske måter
          å bruke den på.
        </p>

        <figure className="figure">
          <figcaption className="caption">En button komponent</figcaption>
          <pre className="pre">
            <code>{`import styles from "./Button.module.css";

export default function ButtonComponent() {
  return (
    <button type="button" className={styles.button}>
      Jeg er en knapp!
    </button>
  );
}
`}</code>
          </pre>
        </figure>
        <figure className="figure">
          <p>Vi gir den litt padding og margin med css.</p>
          <pre className="pre">
            <code>{`.button {
  padding: 10px 20px;
  margin: 10px;
}

`}</code>
          </pre>
        </figure>
        <ButtonComponent />
        <hr></hr>
        <p>
          Vi legger til to knapper som styrer én teller: «+» øker verdien med 1,
          «–» senker den med 1. Vi oppretter state med{" "}
          <code>const [count, setCount] = useState(0)</code>, lager funksjonene{" "}
          <code>increment</code> og <code>decrement</code>, og kobler dem til
          knappene via
          <code>onClick</code>. Verdien vises i JSX med <code>{`{count}`}</code>
          .
        </p>

        <figure className="figure">
          <p>
            En React-komponent må returnere ett rot-element. Vi pakker derfor
            innholdet i <code>&lt;div&gt;</code>.
          </p>
          <pre className="pre">
            <code>{`import { useState } from "react";
import styles from "./Button.module.css";

export default function ButtonComponentTwo() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className={styles.btnDiv}>
      <button type="button" className={styles.button} onClick={increment}>
        +
      </button>
      <h2>{count}</h2>
      <button type="button" className={styles.button} onClick={decrement}>
        -
      </button>
    </div>
  );
}
`}</code>
          </pre>
        </figure>
        <ButtonComponentTwo />
        <hr></hr>
        <p>
          Vi lager en knapp med en enkel toggle: <code>useState(false)</code>{" "}
          holder en boolean (<code>box</code>), og når vi klikker (
          <code>onClick</code>) bytter <code>toggleBox</code> verdien mellom{" "}
          <code>true</code> og <code>false</code>. Klassen settes betinget, så
          knappen skifter stil (blå ↔ rød) hver gang du trykker.
        </p>

        <figure className="figure">
          <pre className="pre">
            <code>{`import { useState } from "react";
import styles from "./Button.module.css";

export default function ButtonComponentThree() {
  const [box, setBox] = useState(false);

  function toggleBox() {
    setBox((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={toggleBox}
      className={box ? styles.btnRed : styles.btnBlue}
    >
      Trykk her !
    </button>
  );
}

`}</code>
          </pre>
        </figure>
        <ButtonComponentThree />
      </article>
    </section>
  );
}
