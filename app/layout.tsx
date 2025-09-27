import type { ReactNode } from "react";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className={`${inter.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
