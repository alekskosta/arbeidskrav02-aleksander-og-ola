import { showReactSection } from "@/data/info";

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
