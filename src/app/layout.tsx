import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import OrganizationSchema from "./components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.newwavetherapy.com"),
  title: {
    default: "New Wave Therapy | Virtual Therapy Services",
    template: "%s | New Wave Therapy",
  },
  description:
    "Professional virtual therapy services with a collaborative team approach. Experienced therapists providing online counseling and mental health support.",
  keywords: [
    "virtual therapy",
    "online therapy",
    "teletherapy",
    "online counseling",
    "mental health services",
    "virtual therapist",
    "online mental health",
  ],
  authors: [{ name: "New Wave Therapy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.newwavetherapy.com",
    siteName: "New Wave Therapy",
    title: "New Wave Therapy | Virtual Therapy Services",
    description:
      "Professional virtual therapy services with a collaborative team approach. Experienced therapists providing online counseling and mental health support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "New Wave Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Wave Therapy | Virtual Therapy Services",
    description:
      "Professional virtual therapy services with a collaborative team approach.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <OrganizationSchema />
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}