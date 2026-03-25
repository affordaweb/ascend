import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AskAivanWidget from "./components/AskAivanWidget";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Ascend Development Solutions",
  description: "Empowering organizations through ESG and SDG-aligned trainings, seminars, reporting, and consultancy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${fraunces.variable} font-[family-name:var(--font-jakarta)] text-[#1a1a2e]`}>
        {children}
        <AskAivanWidget />
      </body>
    </html>
  );
}
