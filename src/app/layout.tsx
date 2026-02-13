import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from '@/components/header';
import Footer from "@/components/footer";

import "./globals.css";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Spentify",
  description: "Expense Tracker & Budgeting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

