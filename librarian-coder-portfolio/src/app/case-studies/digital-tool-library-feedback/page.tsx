import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library - Georges River Libraries | The Librarian Who Codes',
  description: 'A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.',
  keywords: [
    'library software case study',
    'patron engagement',
    'georges river libraries',
    'Australian library technology',
    'custom library software',
    'digital tool library',
    'multilingual feedback platform',
    'library of things'
  ],
  openGraph: {
    title: 'Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library - Georges River Libraries',
    description: 'A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.',
    url: 'https://librarianwhocodes.com.au/case-studies/digital-tool-library-feedback',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/case-studies/georges-river-reads.svg',
        width: 1200,
        height: 630,
        alt: 'Digital Tool Library Feedback Platform - Georges River Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library - Georges River Libraries',
    description: 'A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.',
    images: ['/case-studies/georges-river-reads.svg'],
  },
  alternates: {
    canonical: '/case-studies/digital-tool-library-feedback',
  },
};

export default function DigitalToolLibraryFeedbackPage() {
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
                  Digital Tool Library Feedback Platform
                </li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 mb-6">
                Patron Engagement
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Georges River Libraries
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Sydney, NSW
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    3 months
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
                  A "Library of Things" or Digital Tool Library presents unique management challenges - complex items require regular maintenance and their potential constantly evolves. Feedback from patrons was often delivered verbally and ad-hoc, making it difficult to track, prioritize, and act upon. There was no formal channel for patrons, especially those from non-English speaking backgrounds, to share ideas or report issues.
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
                  Built a clean, single-page web application with three core functions: problem reporting, new item suggestions, and creation sharing. The design philosophy was "frictionless feedback" with a multilingual interface ensuring language would not be a barrier to communication.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Key Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Improved collection maintenance through structured problem-reporting
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Enabled data-driven collection development with community suggestions
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Created a positive feedback loop strengthening community connections
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Provided actionable data for library staff decision-making
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  Web Application
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  Multilingual Support
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  Responsive Design
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  Data Collection
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  Form Processing
                </span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The Digital Tool Library Feedback platform is a lightweight, responsive, and multilingual web application that serves as the central point for all community input regarding the collection. It transforms what was once scattered, verbal feedback into structured, actionable data that library staff can use to improve services and make informed decisions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The platform addresses the unique challenges of managing a "Library of Things" - collections that include 3D printers, podcasting equipment, Cricut machines, and other creative tools. Unlike traditional book collections, these items have complex parts, require regular maintenance, and their potential is constantly evolving based on community needs and technological advances.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The solution was built with a "frictionless feedback" philosophy, creating a tool that feels less like a bureaucratic form and more like a helpful, direct conversation with the library.
                </p>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Implementation
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The solution includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Single-page web application with clean, intuitive interface</li>
                  <li>Three core feedback functions: Report a Problem, Suggest a New Item, Share Your Creation</li>
                  <li>Multilingual interface supporting key community languages</li>
                  <li>Responsive design optimized for mobile and desktop use</li>
                  <li>Structured data collection for easy analysis and action</li>
                  <li>Simple form processing with clear user pathways</li>
                  <li>Accessibility features ensuring equal access for all patrons</li>
                </ul>
              </div>
            </div>

            {/* Implementation Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Implementation Process
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The project was implemented using a community-centered approach:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Community research and user needs analysis (2 weeks)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Interface design and user experience planning (2 weeks)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Web application development and testing (4 weeks)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Multilingual content creation and localization (2 weeks)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      5
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Staff training and pilot deployment (1 week)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-4 mt-1 font-semibold">
                      6
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Full launch and ongoing feedback integration (ongoing)</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                  Throughout development, we maintained focus on creating the simplest possible user experience while ensuring the collected data would be valuable and actionable for library staff.
                </p>
              </div>
            </div>

            {/* Measurable Outcomes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Measurable Outcomes
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The feedback platform has created a powerful, positive feedback loop that benefits all stakeholders:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Patrons:</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                  <li>Easy, accessible way to report issues and suggest improvements</li>
                  <li>Direct channel for sharing creative achievements and project outcomes</li>
                  <li>Multilingual support ensuring equal access regardless of language background</li>
                  <li>Sense of partnership in collection development and maintenance</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For Library Staff:</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
                  <li>Structured, actionable data for collection management decisions</li>
                  <li>Faster response to maintenance issues and equipment problems</li>
                  <li>Community-driven insights for budget allocation and purchasing decisions</li>
                  <li>Reduced time spent on informal feedback collection and follow-up</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">For the Library:</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Improved collection quality and maintenance through proactive issue reporting</li>
                  <li>Data-driven approach to collection development aligned with community needs</li>
                  <li>Enhanced community engagement and sense of ownership</li>
                  <li>Better resource allocation based on documented patron feedback</li>
                </ul>
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Lessons Learned
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Key insights from this project include:
                </p>
                <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-3">
                  <li><strong>Simplicity Drives Engagement:</strong> A single-page form with three clear choices eliminated confusion and increased participation rates.</li>
                  <li><strong>Multilingual as Core Requirement:</strong> Making language support fundamental from the start ensured equal access for the entire community.</li>
                  <li><strong>Structured Data Enables Action:</strong> Converting verbal feedback into structured data transformed community input into actionable intelligence.</li>
                  <li><strong>Community Ownership Drives Quality:</strong> When patrons feel they have a direct role in collection development, they become more invested in the library's success.</li>
                  <li><strong>Feedback Loops Create Value:</strong> The platform didn't just collect feedback - it created a system where feedback leads to improvements, which leads to more engagement.</li>
                </ol>
              </div>
            </div>

            {/* Future Opportunities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Future Opportunities
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Future enhancements planned include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Integration with library management systems for automated issue tracking</li>
                  <li>Advanced analytics dashboard for staff to analyze feedback patterns</li>
                  <li>Automated notifications for staff when critical issues are reported</li>
                  <li>Integration with social media for showcasing community creations</li>
                  <li>Mobile app companion for on-the-go feedback submission</li>
                  <li>AI-powered categorization and prioritization of feedback</li>
                  <li>Integration with maintenance scheduling systems for proactive collection care</li>
                </ul>
              </div>
            </div>

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
