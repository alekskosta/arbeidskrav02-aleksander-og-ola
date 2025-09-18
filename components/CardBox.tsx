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

export default function CardBox(props: CardBoxProps) {
  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={props.isOpen}
      aria-controls={`panel-${props.id}`}
      className={styles.card}
      onClick={() => props.onToggle(props.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          props.onToggle(props.id);
        }
      }}
    >
      <h2>{props.title}</h2>
      {props.isOpen && (
        <div>
          {" "}
          <p>{props.info}</p>
          <Link href={props.href}>Les mer her!</Link>
        </div>
      )}
    </article>
  );
}
