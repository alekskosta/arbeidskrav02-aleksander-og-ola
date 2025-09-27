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
      <button type="button" onClick={onPrev} disabled={isFirst} className="btn btnSec">
        Forrige
      </button>

      <button type="button" onClick={onNext} disabled={!canProceed} className="btn btnMain">
        {isLast ? "Vis resultat" : "Neste"}
      </button>

      <button onClick={onRestart} type="button" className="btn btnTertiary">
        Start på nytt
      </button>
    </div>
  );
}
