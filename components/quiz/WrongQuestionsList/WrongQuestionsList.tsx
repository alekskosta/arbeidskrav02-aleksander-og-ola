import styles from "./WrongQuestionsList.module.css";

type Props = { ids: string[]; className?: string };

export default function WrongQuestionsList({ ids, className }: Props) {
  if (!ids || ids.length === 0) return null;

  return (
    <section className={styles.details}>
      <h2 >Vil du prøve igjen? Se nærmere på:</h2>
      <ul>
        {ids.map((id) => (
          <li key={id}>Spørsmål {id.replace("q", "")}</li>
        ))}
      </ul>
    </section>
  );
}
