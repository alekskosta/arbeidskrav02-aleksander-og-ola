import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="/web-wizard-logo.svg"
        alt="The Web Wizard logo"
        className={styles.logoImage}
        width={400}
        height={130}
      />
    </div>
  );
}
