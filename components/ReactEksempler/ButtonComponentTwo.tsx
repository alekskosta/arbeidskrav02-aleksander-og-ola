"use client";
import { useState } from "react";
import styles from "./Button.module.css";

export default function ButtonComponentTwo() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div className={styles.btnDiv}>
      <button type="button" className={styles.button} onClick={increment}>
        +
      </button>
      <h2>{count}</h2>
      <button type="button" className={styles.button} onClick={decrement}>
        -
      </button>
    </div>
  );
}
