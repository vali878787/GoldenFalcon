import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.goldenfalconenergy.com"
  ),

  title: "Golden Falcon Energy",

  description:
    "International commodity trading and service provider specializing in energy, mining and petrochemical markets.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Golden Falcon Energy",
    description:
      "International commodity trading and service provider.",
    url: "https://www.goldenfalconenergy.com",
    siteName: "Golden Falcon Energy",

    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Golden Falcon Energy Logo",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Golden Falcon Energy",
    description:
      "International commodity trading and service provider.",
    images: ["/LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">

        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Golden Falcon Energy",
              url: "https://www.goldenfalconenergy.com",
              logo: "https://www.goldenfalconenergy.com/LOGO.png",
              description:
                "International commodity trading and service provider specializing in energy, mining and petrochemical markets.",
            }),
          }}
        />

        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}