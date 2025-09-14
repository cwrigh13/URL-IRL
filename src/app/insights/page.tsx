import type { Metadata } from "next";
import { InsightsHero, InsightsGrid, InsightsNewsletter } from "@/components/sections/insights";

export const metadata: Metadata = {
  title: "Insights | Library Technology Blog | URL IRL",
  description: "Stay updated with the latest insights on library technology, digital transformation, and software solutions. Expert perspectives from a librarian who codes.",
  keywords: [
    "library technology insights",
    "library technology blog",
    "library digital transformation",
    "library software insights",
    "library technology trends",
    "library IT blog",
    "library technology articles",
    "library software blog",
    "library digital services insights",
    "library technology Australia"
  ],
  openGraph: {
    title: "Insights | Library Technology Blog | URL IRL",
    description: "Stay updated with the latest insights on library technology, digital transformation, and software solutions. Expert perspectives from a librarian who codes.",
    url: 'https://urlirl.com.au/insights',
    siteName: 'URL IRL',
    images: [
      {
        url: '/URL-IRL/insights-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Library Technology Insights - URL IRL',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Insights | Library Technology Blog | URL IRL",
    description: "Stay updated with the latest insights on library technology, digital transformation, and software solutions.",
    images: ['/URL-IRL/insights-hero.jpg'],
  },
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <InsightsGrid />
      <InsightsNewsletter />
    </main>
  );
}
