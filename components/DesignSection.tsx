import { showDesignSection } from "@/data/info";

export default function DesignSection() {
  const data = showDesignSection();
  return (
    <section className="section-component">
      {data.map((sec) => (
        <article className="article-component" key={sec.id}>
          <h2>{sec.title}</h2>
          {sec.text.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </article>
      ))}
    </section>
  );
}
