import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TORSTUDIO — Motion, Brand & Ad Design Studio",
  description:
    "TORSTUDIO is a motion-first design studio crafting brand identities, kinetic stories, and scroll-stopping ad creatives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="min-h-screen bg-neutral-950 font-sans text-neutral-100">
        {children}
      </body>
    </html>
  );
}
