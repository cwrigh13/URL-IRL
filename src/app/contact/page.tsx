import type { Metadata } from "next";
import { ContactHero, ContactForm, ContactInfo } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | Book a Consultation | The Librarian Who Codes",
  description: "Ready to transform your library? Book a free consultation to discuss your technology needs. Let's build something great together.",
  keywords: [
    "library technology consultation",
    "library software consultation",
    "library IT consulting Australia",
    "library technology partner",
    "library software developer contact",
    "library technology consultation booking",
    "library software development consultation",
    "library IT services consultation",
    "library technology free consultation",
    "library software development Australia"
  ],
  openGraph: {
    title: "Contact | Book a Consultation | The Librarian Who Codes",
    description: "Ready to transform your library? Book a free consultation to discuss your technology needs. Let's build something great together.",
    url: 'https://librarianwhocodes.com.au/contact',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact - Book a Consultation - The Librarian Who Codes',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact | Book a Consultation | The Librarian Who Codes",
    description: "Ready to transform your library? Book a free consultation to discuss your technology needs.",
    images: ['/contact-hero.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
