"use client";

import styles from "./NavButtons.module.css";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
  isFirst: boolean;
  isLast: boolean;
  canProceed: boolean;
};

export default function NavButtons({
  onPrev,
  onNext,
  onRestart,
  isFirst,
  isLast,
  canProceed,
}: Props) {
  return (
    <div className={styles.container}>
      <button
        onClick={onPrev}
        disabled={isFirst}
        className={`${styles.button} ${styles.prev}`}
      >
        Forrige
      </button>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`${styles.button} ${styles.next}`}
      >
        {isLast ? "Vis resultat" : "Neste"}
      </button>

      <button
        onClick={onRestart}
        type="button"
        className={`${styles.button} ${styles.restart}`}
      >
        Start på nytt
      </button>
    </div>
  );
}
