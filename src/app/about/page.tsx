import type { Metadata } from "next";
import { AboutHero, AboutStory, AboutValues } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "My Story | The Librarian Who Codes | Custom Software for Australian Libraries",
  description: "Discover my journey from librarian to developer, and how my unique background helps me create technology solutions that truly understand library needs.",
  keywords: [
    "librarian developer",
    "library technology background",
    "library software developer story",
    "Australian library technology",
    "library professional developer",
    "library IT consultant background",
    "library software expertise",
    "library technology experience",
    "library professional turned developer",
    "library software consultant story"
  ],
  openGraph: {
    title: "My Story | The Librarian Who Codes | Custom Software for Australian Libraries",
    description: "Discover my journey from librarian to developer, and how my unique background helps me create technology solutions that truly understand library needs.",
    url: 'https://librarianwhocodes.com.au/about',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'My Story - The Librarian Who Codes',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "My Story | The Librarian Who Codes | Custom Software for Australian Libraries",
    description: "Discover my journey from librarian to developer, and how my unique background helps me create technology solutions.",
    images: ['/about-hero.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
    </main>
  );
}
