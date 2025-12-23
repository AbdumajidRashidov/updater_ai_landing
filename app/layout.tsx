import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Updater AI - Automate Your Trucking Updates 24/7",
  description: "Reduce costs by 77% with AI-powered voice agents that track loads and communicate with drivers and brokers 24/7. Save $31,000-55,000 annually.",
  keywords: "logistics automation, trucking updates, Updater AI, trucking software, load tracking, voice AI, fleet management",
  authors: [{ name: "Updater AI Team" }],
  openGraph: {
    title: "Updater AI - Automate Your Trucking Updates 24/7",
    description: "Reduce costs by 77% with AI-powered voice agents. Save $31,000-55,000 annually.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
