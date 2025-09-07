import type { Metadata } from "next";
import { Hero, WhyMe, CaseStudiesPreview } from "@/components/sections";
import RelatedContent from "@/components/sections/RelatedContent";

export const metadata: Metadata = {
  title: "Custom Software for Australian Libraries | URL IRL",
  description: "Transform your library with custom software solutions built by a librarian who understands your challenges. Book a free consultation for bespoke technology that serves your community.",
  keywords: [
    "Australian library software",
    "library technology solutions",
    "custom library systems",
    "library software development",
    "library IT consulting Australia",
    "public library technology",
    "library digital transformation",
    "library software consulting",
    "library automation Australia",
    "library technology partner"
  ],
  openGraph: {
    title: "Custom Software for Australian Libraries | URL IRL",
    description: "Transform your library with custom software solutions built by a librarian who understands your challenges. Book a free consultation for bespoke technology that serves your community.",
    url: 'https://urlirl.com.au',
    siteName: 'URL IRL',
    images: [
      {
        url: '/homepage-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Software Solutions for Australian Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Custom Software for Australian Libraries | URL IRL",
    description: "Transform your library with custom software solutions built by a librarian who understands your challenges.",
    images: ['/homepage-hero.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyMe />
      <CaseStudiesPreview />
      <RelatedContent />
    </main>
  );
}
