import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ['300', '400', '700']
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Coers",
  description: "Solutions Architect and Astrophotographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
