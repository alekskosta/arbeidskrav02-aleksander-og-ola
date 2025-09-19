import { showHtmlSection } from "@/data/info";
import styles from "./HtmlSection.module.css";

export default function HtmlSection() {
  const data = showHtmlSection();

  return (
    <section className="section-component">
      {data.map((sec) => (
        <article key={sec.id} className="article-component">
          <h2>{sec.title}</h2>

          {sec.text.map((p) => (
            <p key={p}>{p}</p>
          ))}

          {sec.code && (
            <figure className={styles.figure}>
              {sec.code.caption && (
                <figcaption className={styles.caption}>
                  {sec.code.caption}
                </figcaption>
              )}
              <pre className={styles.pre}>
                <code className={`language-${sec.code.lang}`}>
                  {sec.code.snippet}
                </code>
              </pre>
            </figure>
          )}
        </article>
      ))}
    </section>
  );
}
