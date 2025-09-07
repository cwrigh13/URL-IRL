import type { Metadata } from "next";
import { ServicesHero, ServicesPhilosophy, ServicesOverview } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Services | Custom Software for Australian Libraries | URL IRL",
  description: "Discover my approach to library technology: accessible, community-focused, and cost-effective solutions built by a librarian who understands your challenges.",
  keywords: [
    "library software services",
    "library technology consulting",
    "custom library solutions",
    "library software development services",
    "library IT services Australia",
    "library digital services",
    "library software consulting",
    "library technology partner",
    "library software accessibility",
    "library community technology"
  ],
  openGraph: {
    title: "Services | Custom Software for Australian Libraries | URL IRL",
    description: "Discover my approach to library technology: accessible, community-focused, and cost-effective solutions built by a librarian who understands your challenges.",
    url: 'https://urlirl.com.au/services',
    siteName: 'URL IRL',
    images: [
      {
        url: '/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Library Technology Services - URL IRL',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services | Custom Software for Australian Libraries | URL IRL",
    description: "Discover my approach to library technology: accessible, community-focused, and cost-effective solutions.",
    images: ['/services-hero.jpg'],
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesPhilosophy />
      <ServicesOverview />
    </main>
  );
}
