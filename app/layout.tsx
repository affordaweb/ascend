import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Ascend Development Solutions",
  description: "Empowering organizations through ESG and SDG-aligned trainings, seminars, reporting, and consultancy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-[family-name:var(--font-dm-sans)] text-[#1a1a2e]`}>
        {children}
      </body>
    </html>
  );
}
