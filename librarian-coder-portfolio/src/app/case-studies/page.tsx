import type { Metadata } from "next";
import { CaseStudiesHero, CaseStudyGrid } from "@/components/sections/case-studies";

export const metadata: Metadata = {
  title: "Case Studies - Custom Library Software Solutions | The Librarian Who Codes",
  description: "Explore real-world examples of custom software solutions I've built for Australian libraries. See how bespoke technology transforms library operations and enhances patron experiences.",
  keywords: [
    "library software case studies",
    "Australian library technology examples",
    "custom library software projects",
    "library software development portfolio",
    "library technology case studies",
    "library automation examples",
    "library software success stories",
    "library digital transformation cases",
    "library IT project examples",
    "library software portfolio"
  ],
  openGraph: {
    title: "Case Studies - Custom Library Software Solutions | The Librarian Who Codes",
    description: "Explore real-world examples of custom software solutions I've built for Australian libraries. See how bespoke technology transforms library operations and enhances patron experiences.",
    url: 'https://librarianwhocodes.com.au/case-studies',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/case-studies-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Library Software Case Studies - The Librarian Who Codes',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Case Studies - Custom Library Software Solutions | The Librarian Who Codes",
    description: "Explore real-world examples of custom software solutions I've built for Australian libraries.",
    images: ['/case-studies-hero.jpg'],
  },
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesHero />
      <CaseStudyGrid />
    </main>
  );
}
