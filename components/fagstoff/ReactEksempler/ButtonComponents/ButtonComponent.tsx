import styles from "./Button.module.css";

export default function ButtonComponent() {
  return (
    <button type="button" className={styles.button}>
      Jeg er en knapp!
    </button>
  );
}
