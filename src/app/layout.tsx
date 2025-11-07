// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Deco from "@/components/Deco";

export const metadata: Metadata = {
  title: "Manoj Kumar — Portfolio",
  description: "Luxury black & gold portfolio by Manoj Kumar S",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-bg" />
        <Deco />  {/* ✅ Decorative gold gradient lines remain */}
        {children}
      </body>
    </html>
  );
}
