import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { GoogleAnalytics } from "@/components/analytics";
import { StructuredData } from "@/components/ui";
import ErrorBoundary from "@/components/ErrorBoundary";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Software for Australian Libraries",
  description: "Expert custom software solutions for Australian public libraries. Built by a librarian who codes, delivering bespoke technology that understands your unique challenges, values, and community needs.",
  keywords: [
    "custom software Australian libraries",
    "library software development",
    "Australian public library technology",
    "library management systems",
    "library software solutions",
    "library IT consulting",
    "library digital services",
    "library automation",
    "library software Australia",
    "library technology partner"
  ],
  authors: [{ name: "URL IRL" }],
  creator: "URL IRL",
  publisher: "URL IRL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://urlirl.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://urlirl.com.au',
    title: 'Custom Software for Australian Libraries',
    description: 'Expert custom software solutions for Australian public libraries. Built by a librarian who codes, delivering bespoke technology that understands your unique challenges, values, and community needs.',
    siteName: 'URL IRL',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Software for Australian Libraries - URL IRL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software for Australian Libraries',
    description: 'Expert custom software solutions for Australian public libraries. Built by a librarian who codes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        <ErrorBoundary>
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
