import type { ReactNode } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "../globals.css";

export default function WithNavLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mainBg">{children}</main>
    </>
  );
}
