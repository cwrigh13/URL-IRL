import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

interface CaseStudyPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find(study => study.id === params.id);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
      description: 'The requested case study could not be found.'
    };
  }

  return {
    title: `${caseStudy.title} - ${caseStudy.library} | The Librarian Who Codes`,
    description: caseStudy.description,
    keywords: [
      'library software case study',
      caseStudy.category.toLowerCase(),
      caseStudy.library.toLowerCase(),
      'Australian library technology',
      'custom library software'
    ],
    openGraph: {
      title: `${caseStudy.title} - ${caseStudy.library}`,
      description: caseStudy.description,
      url: `https://librarianwhocodes.com.au/case-studies/${caseStudy.id}`,
      siteName: 'The Librarian Who Codes',
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - ${caseStudy.library}`,
        },
      ],
      locale: 'en_AU',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - ${caseStudy.library}`,
      description: caseStudy.description,
      images: [caseStudy.image],
    },
    alternates: {
      canonical: `/case-studies/${caseStudy.id}`,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find(study => study.id === params.id);

  if (!caseStudy) {
    notFound();
  }

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
                  {caseStudy.title}
                </li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mb-6">
                {caseStudy.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                {caseStudy.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {caseStudy.library}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {caseStudy.location}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {caseStudy.duration}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Project Duration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {result}
                      </p>
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
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Description */}
            {caseStudy.fullDescription && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.fullDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Details */}
            {caseStudy.technicalDetails && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Implementation
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.technicalDetails}
                  </p>
                </div>
              </div>
            )}

            {/* Implementation Process */}
            {caseStudy.implementation && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Implementation Process
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.implementation}
                  </p>
                </div>
              </div>
            )}

            {/* Outcomes */}
            {caseStudy.outcomes && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Measurable Outcomes
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.outcomes}
                  </p>
                </div>
              </div>
            )}

            {/* Lessons Learned */}
            {caseStudy.lessonsLearned && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Lessons Learned
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.lessonsLearned}
                  </p>
                </div>
              </div>
            )}

            {/* Next Steps */}
            {caseStudy.nextSteps && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Future Opportunities
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {caseStudy.nextSteps}
                  </p>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center py-12 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how custom software can solve your library's unique challenges and transform your community's experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg rounded-lg transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
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
