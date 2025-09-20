"use client";

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
    <div>
      <button onClick={onPrev} disabled={isFirst}>
        ← Forrige
      </button>
      <button onClick={onNext} disabled={!canProceed}>
        {isLast ? "Vis resultat" : "Neste →"}
      </button>
      <button onClick={onRestart} type="button">
        Start på nytt
      </button>
    </div>
  );
}
