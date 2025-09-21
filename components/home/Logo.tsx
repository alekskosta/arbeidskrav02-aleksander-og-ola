import Image from "next/image";

export default function Logo() {
  return (
    <header className="logo">
    <Image
      src="/web-wizard-logo.svg"
      alt="The Web Wizard logo"
      width={400}
      height={130}
    />
    </header>
  );
}
