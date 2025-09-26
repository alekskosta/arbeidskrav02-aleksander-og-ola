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
  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`panel-${id}`}
      className={`${styles.card} ${isOpen ? styles.active : ""}`}
      onClick={() => onToggle(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(id);
        }
      }}
    >
      <h2 className={styles.title}>{title}</h2>

      <div
        id={`panel-${id}`}
        className={`${styles.popover} ${isOpen ? styles.popoverOpen : ""}`}
      >
        <p className={styles.info}>{info}</p>
        <Link className={styles.cta} href={href}>
          Les mer her!
        </Link>
      </div>
    </article>
  );
}
