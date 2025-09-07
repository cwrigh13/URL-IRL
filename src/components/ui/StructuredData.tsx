export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "URL IRL",
    "description": "Custom software solutions for Australian public libraries, built by a librarian who understands your unique challenges and values.",
    "url": "https://urlirl.com.au",
    "logo": "https://urlirl.com.au/logo.png",
    "image": "https://urlirl.com.au/og-image.jpg",
    "telephone": "+61-XXX-XXX-XXX",
    "email": "hello@urlirl.com.au",
    "taxID": "XX XXX XXX XXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "YOUR STREET ADDRESS",
      "addressLocality": "YOUR CITY",
      "addressRegion": "YOUR STATE",
      "postalCode": "XXXX",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "serviceType": [
      "Custom Software Development",
      "Library Technology Consulting",
      "Library Management Systems",
      "Digital Library Solutions",
      "Library Automation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Library Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tech Roadmap Workshop",
            "description": "Strategic technology planning workshop for Australian libraries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MVP App Development",
            "description": "Minimum viable product development for library applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Custom Solution",
            "description": "Complete custom software development for library needs"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "URL IRL",
      "jobTitle": "Library Technology Consultant & Software Developer",
      "description": "Former librarian turned software developer, specializing in Australian public library technology solutions"
    },
    "knowsAbout": [
      "Australian Public Libraries",
      "Library Management Systems",
      "Library Technology",
      "Custom Software Development",
      "Library Automation",
      "Digital Library Services",
      "Library IT Consulting"
    ],
    "slogan": "Custom Software for Australian Libraries, Built by a Librarian Who Codes",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Credit Card, Bank Transfer, Invoice"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
