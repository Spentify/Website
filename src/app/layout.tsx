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
  metadataBase: new URL("https://spentify.app"),
  title: "Spentify",
  description: "A simple, clean expense tracker to manage spending, budgets, and savings.",
  applicationName: "Spentify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Spentify",
              url: "https://spentify.app",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Spentify",
              applicationCategory: "FinanceApplication",
              operatingSystem: "iOS, Android",
              description: "A simple, clean expense tracker to manage spending, budgets, and savings.",
              url: "https://spentify.app",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "1700"
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Download on the App Store",
                  url: "https://apps.apple.com/kh/app/spentify-expense-tracker/id1439556350",
                  price: "0",
                  priceCurrency: "USD"
                },
                {
                  "@type": "Offer",
                  name: "Get it on Google Play",
                  url: "https://play.google.com/store/apps/details?id=com.apppeppers.jamnay",
                  price: "0",
                  priceCurrency: "USD"
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Spentify",
              url: "https://spentify.app",
              logo: "https://spentify.app/logo.png",
              sameAs: [
                "https://www.instagram.com/spentify.app",
                "https://x.com/spentify__app"
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

