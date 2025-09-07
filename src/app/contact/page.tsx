import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ContactHero, ContactInfo } from "@/components/sections/contact";
import { ContactFormSkeleton } from "@/components/ui/LoadingSkeleton";

// Dynamically import ContactForm to reduce initial bundle size
const ContactForm = dynamic(() => import("@/components/sections/contact/ContactForm"), {
  loading: () => <ContactFormSkeleton />
});

export const metadata: Metadata = {
  title: "Contact | Book a Consultation | URL IRL",
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
    title: "Contact | Book a Consultation | URL IRL",
    description: "Ready to transform your library? Book a free consultation to discuss your technology needs. Let's build something great together.",
    url: 'https://urlirl.com.au/contact',
    siteName: 'URL IRL',
    images: [
      {
        url: '/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact - Book a Consultation - URL IRL',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact | Book a Consultation | URL IRL",
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
