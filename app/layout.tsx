import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Questionnaire — Swell Realty",
  description: "Tell us everything we need to build your perfect vintage real estate website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
