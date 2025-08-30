import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudyById } from "@/data/case-studies";

// Get the case study data for this specific page
const caseStudy = getCaseStudyById('library-kiosk-interface');

if (!caseStudy) {
  throw new Error('Case study not found');
}

// TypeScript guard - this ensures caseStudy is never undefined
const study = caseStudy;

export const metadata: Metadata = {
  title: `${study.title} - ${study.library} | The Librarian Who Codes`,
  description: study.description,
  keywords: [
    'library software case study',
    study.category.toLowerCase(),
    study.library.toLowerCase(),
    'Australian library technology',
    'custom library software',
    'kiosk interface',
    'multifunction device',
    'printing copying scanning'
  ],
  openGraph: {
    title: `${study.title} - ${study.library}`,
    description: study.description,
    url: `https://librarianwhocodes.com.au/case-studies/${study.id}`,
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: study.image,
        width: 1200,
        height: 630,
        alt: `${study.title} - ${study.library}`,
      },
    ],
    locale: 'en_AU',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${study.title} - ${study.library}`,
    description: study.description,
    images: [study.image],
  },
  alternates: {
    canonical: `/case-studies/${study.id}`,
  },
};

export default function CaseStudyPage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 dark:text-white font-medium">
                  {study.title}
                </li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mb-6">
                {study.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {study.title}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                {study.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {study.library}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{study.location}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {study.duration}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {study.challenge}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.results.map((result, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Description */}
            {study.fullDescription && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.fullDescription.replace(/'/g, '&apos;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Technical Details */}
            {study.technicalDetails && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Implementation
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.technicalDetails.replace(/'/g, '&apos;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Implementation */}
            {study.implementation && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Implementation Process
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.implementation.replace(/'/g, '&quot;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Outcomes */}
            {study.outcomes && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Outcomes & Impact
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.outcomes.replace(/'/g, '&apos;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Lessons Learned */}
            {study.lessonsLearned && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Lessons Learned
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.lessonsLearned.replace(/'/g, '&apos;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Next Steps */}
            {study.nextSteps && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Future Enhancements
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: study.nextSteps.replace(/'/g, '&apos;').replace(/"/g, '&quot;') }}
                  />
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Library?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how custom software can solve your library&apos;s unique challenges and enhance your community&apos;s experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold text-lg rounded-lg transition-all duration-200"
                >
                  View All Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
