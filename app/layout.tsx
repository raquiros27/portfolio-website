import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Raquel Quiros Delgado | Portfolio & CV",
  description:
    "Portfolio and CV of Raquel Quiros Delgado — brand identity, illustration, campaigns, and visual systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} bg-cream`}
    >
      <body className="relative z-[1] antialiased font-sans text-ink bg-cream">
        {children}
      </body>
    </html>
  );
}
