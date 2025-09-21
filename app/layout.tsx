import type { ReactNode } from "react";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
