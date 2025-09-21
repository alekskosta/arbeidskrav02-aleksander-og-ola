import type { ReactNode } from "react";
import Footer from "@/components/common/Footer";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-inter",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
