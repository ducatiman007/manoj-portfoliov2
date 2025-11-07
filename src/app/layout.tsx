import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoj Kumar — Portfolio",
  description: "Luxury black & gold portfolio by Manoj Kumar S",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-bg" />
        {children}
      </body>
    </html>
  );
}
