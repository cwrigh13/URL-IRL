import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library - Georges River Libraries | URL IRL',
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
    url: 'https://urlirl.com.au/case-studies/digital-tool-library-feedback',
    siteName: 'URL IRL',
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Closing the Loop: A Multilingual Feedback Platform for the Digital Tool Library
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 max-w-3xl mx-auto">
                A lightweight, multilingual web application that creates a direct channel for community feedback, enabling data-driven collection management and faster maintenance for a high-value library collection.
              </p>
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
                The Problem
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Georges River Libraries innovative collections (Musical Instrument Collection and Digital Tool Library) presented distinct operational challenges. The complexity of these items requires significant ongoing maintenance, and the potential applications of digital items were constantly evolving. Furthermore, their system for gathering community feedback was informal and largely verbal, which made it difficult to effectively track, prioritise and act on feedback and suggestions. This created a significant barrier for customers wishing to share ideas or report issues, particularly for community members from non-English speaking backgrounds.
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
              
              {/* Live App Preview */}
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Live Application Preview
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://cwrigh13.github.io/Digital-Tool-Library-Feedback/"
                    className="w-full h-[1000px] border-0"
                    title="Digital Tool Library Feedback Platform"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
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
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The project was implemented using a community-centered approach:
                </p>
                
                {/* Timeline Container */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-green-200 dark:from-blue-800 dark:via-blue-700 dark:to-green-800"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8">
                    {/* Phase 1 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Research & Analysis</h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Deep dive into user needs, community demographics, and existing feedback channels to inform the solution design.</p>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-indigo-100 dark:ring-indigo-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Interface Design & UX Planning</h3>
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Creating intuitive user flows, wireframes, and design systems that prioritize accessibility and multilingual support.</p>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-purple-100 dark:ring-purple-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development & Testing</h3>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">4 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Building the web application with iterative testing, ensuring robust functionality and cross-device compatibility.</p>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-pink-100 dark:ring-pink-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multilingual Content & Localization</h3>
                          <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Translating interface elements and creating culturally appropriate content for diverse community languages.</p>
                      </div>
                    </div>

                    {/* Phase 5 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-orange-100 dark:ring-orange-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Training & Pilot Deployment</h3>
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">1 week</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Training library staff on the new system and conducting a pilot launch with select user groups.</p>
                      </div>
                    </div>

                    {/* Phase 6 */}
                    <div className="relative flex items-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mr-6 shadow-lg ring-4 ring-green-100 dark:ring-green-900/30">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Launch & Ongoing Integration</h3>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">Ongoing</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Public launch with continuous feedback collection, system improvements and community engagement optimisation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Measurable Outcomes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Measurable Outcomes
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Stakeholder Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* For Patrons Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">For Patrons</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Easy, accessible way to report issues and suggest improvements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Direct channel for sharing creative achievements and project outcomes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Multilingual support ensuring equal access regardless of language background</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Sense of partnership in collection development and maintenance</span>
                      </li>
                    </ul>
                  </div>

                  {/* For Library Staff Card */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">For Library Staff</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Structured, actionable data for collection management decisions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Faster response to maintenance issues and equipment problems</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Community-driven insights for budget allocation and purchasing decisions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Reduced time spent on informal feedback collection and follow-up</span>
                      </li>
                    </ul>
                  </div>

                  {/* For the Library Card */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">For the Library</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Improved collection quality and maintenance through proactive issue reporting</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Data-driven approach to collection development aligned with community needs</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Enhanced community engagement and sense of ownership</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Better resource allocation based on documented patron feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Impact Summary */}
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      Creating a Positive Feedback Loop
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      The platform transforms scattered, verbal feedback into structured, actionable data that drives continuous improvement, 
                      creating a virtuous cycle where community input leads to better services, which in turn generates more engagement and feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Lessons Learned
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {/* Lessons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Lesson 1 */}
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          Simplicity Drives Engagement
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          A single-page form with three clear choices eliminated confusion and increased participation rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          Multilingual as Core Requirement
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Making language support fundamental from the start ensured equal access for the entire community.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 3 */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          Structured Data Enables Action
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Converting verbal feedback into structured data transformed community input into actionable intelligence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 4 */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          Community Ownership Drives Quality
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          When patrons feel they have a direct role in collection development, they become more invested in the library's success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Insight - Full Width */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-6 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Feedback Loops Create Value
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        The platform didn't just collect feedback - it created a system where feedback leads to improvements, 
                        which leads to more engagement, creating a virtuous cycle of continuous enhancement.
                      </p>
                    </div>
                  </div>
                </div>
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
