"use client";
import { useState } from "react";
import styles from "./Button.module.css";

export default function ButtonComponentThree() {
  const [box, setBox] = useState(false);

  function toggleBox() {
    setBox((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={toggleBox}
      className={box ? styles.btnRed : styles.btnBlue}
    >
      Trykk her !
    </button>
  );
}
