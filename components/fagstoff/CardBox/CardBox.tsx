import Link from "next/link";
import styles from "./CardBox.module.css";

type CardBoxProps = {
  id: number;
  title: string;
  info: string;
  href: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

export default function CardBox({
  id,
  title,
  info,
  href,
  isOpen,
  onToggle,
}: CardBoxProps) {
  const panelId = `panel-${id}`;
  const headingId = `heading-${id}`;
  return (
    <article
      role="button"
      tabIndex={0}
      aria-labelledby={headingId}
      aria-expanded={isOpen}
      aria-controls={panelId}
      className={`${styles.card} ${isOpen ? styles.active : ""}`}
      onClick={() => onToggle(id)}
      onKeyDown={(e) => {
        if (e.currentTarget !== e.target) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(id);
        }
      }}
    >
      <h2 className={styles.title} id={headingId}>
        {title}
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        className={`${styles.popover} ${isOpen ? styles.popoverOpen : ""}`}
      >
        <p className={styles.info}>{info}</p>
        <Link
          className={styles.cta}
          href={href}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          Les mer her!
        </Link>
      </div>
    </article>
  );
}
