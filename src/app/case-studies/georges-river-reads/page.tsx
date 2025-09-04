import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, Users, BookOpen, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Georges River Reads - Multicultural Reading App | Case Study',
  description: 'A bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.',
  keywords: [
    'library software case study',
    'mobile app development',
    'georges river libraries',
    'Australian library technology',
    'custom library software',
    'multicultural reading app',
    'gamified reading platform',
    'community engagement'
  ],
  openGraph: {
    title: 'Georges River Reads - Multicultural Reading App - Georges River Libraries',
    description: 'A bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.',
    url: 'https://librarianwhocodes.com.au/case-studies/georges-river-reads',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/case-studies/georges-river-reads.svg',
        width: 1200,
        height: 630,
        alt: 'Georges River Reads - Multicultural Reading App - Georges River Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georges River Reads - Multicultural Reading App - Georges River Libraries',
    description: 'A bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.',
    images: ['/case-studies/georges-river-reads.svg'],
  },
  alternates: {
    canonical: '/case-studies/georges-river-reads',
  },
};

export default function GeorgesRiverReadsPage() {
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
                  Georges River Reads
                </li>
              </ol>
            </nav>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Fostering Literacy & Connection
            </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 max-w-3xl mx-auto">
              The Georges River Reads Multicultural Reading App
            </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-6">
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Georges River Libraries
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Community Engagement Platform
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                WCAG 2.1 AA Compliant
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
                  While reading challenges are popular, generic, off-the-shelf apps often fail to resonate within a deeply multicultural community like Georges River. Residents faced real barriers to engagement, including a lack of program accessibility in their native language, a shortage of culturally relevant reading recommendations, and a general disconnect between digital tools and physical library services. A one-size-fits-all solution couldn't address these specific local needs. The library required a purpose-built platform that was not only a fun and engaging reading tracker but also a powerful tool for cultural celebration, community connection, and social inclusion.
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
                  Georges River Reads is a comprehensive, native mobile application for iOS and Android that transforms reading into a fun, gamified, and social experience. Built with a "community-first" philosophy, the platform prioritizes multilingual support, cultural relevance, and seamless integration with physical library services.
                </p>
              </div>
            </div>

            {/* Key Results */}
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
                      Increased program participation through gamified engagement
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
                      Bridged language barriers with full multilingual support
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
                      Enabled data-driven strategic planning with analytics dashboard
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
                      Strengthened community bonds through cultural celebration features
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
                  Georges River Reads is more than an app; it's a vibrant digital ecosystem that brings the library's mission of literacy and community connection into the hands of thousands of residents. The platform was built with deep user empathy and strategic planning, guided by a comprehensive PRD shaped by distinct user personas—from the recently-arrived Alameddine family seeking bilingual resources, to established senior Wei Chen looking for books in his native language.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                This "community-first" philosophy dictated every decision. We prioritised a fully multilingual interface not as an afterthought, but as a core requirement for the MVP. Features were designed to do more than just track minutes; they were designed to encourage real-world library visits, celebrate diverse authors, and connect families through shared activities.
              </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By focusing on the specific needs of Georges River residents, we were able to design a platform that feels less like a generic app and more like a digital extension of their local library branch.
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
                  <li>Native mobile applications for iOS and Android ensuring smooth, responsive user experience</li>
                  <li>Fully multilingual interface supporting English, Mandarin, Arabic, Cantonese, and Nepali</li>
                  <li>Advanced gamification system with dynamic challenges and shareable badges</li>
                  <li>Integrated events calendar and culturally-curated book recommendations</li>
                  <li>Secure admin dashboard with real-time analytics and engagement tracking</li>
                  <li>WCAG 2.1 AA accessibility compliance for inclusive access</li>
                  <li>Full compliance with Australian Privacy Act 1988 and child safety standards</li>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Research & User Personas</h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">3 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Deep dive into community demographics, language needs, and existing reading habits to inform platform design and feature prioritization.</p>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Multilingual Interface Design</h3>
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Creating intuitive user flows and design systems that prioritize accessibility and comprehensive multilingual support from day one.</p>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Native App Development</h3>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">8 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Building native iOS and Android applications with gamification features, multilingual support, and robust analytics backend.</p>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Accessibility & Compliance Testing</h3>
                          <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Comprehensive testing for WCAG 2.1 AA compliance, privacy standards, and cross-device functionality across diverse user groups.</p>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Staff Training & Pilot Launch</h3>
                          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">2 weeks</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Training library staff on the admin dashboard and conducting a pilot launch with select community groups for feedback and refinement.</p>
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
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Public Launch & Community Integration</h3>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">Ongoing</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">Public launch with continuous community engagement, feature enhancements, and integration with library programming and events.</p>
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
                        <span className="text-gray-700 dark:text-gray-300">Engaging, gamified reading experience in their preferred language</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Access to culturally relevant book recommendations and events</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Family-friendly features supporting multiple readers per account</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Seamless integration with physical library services and programs</span>
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
                        <span className="text-gray-700 dark:text-gray-300">Real-time analytics dashboard for program effectiveness tracking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Dynamic challenge creation tools for targeted engagement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Data-driven insights for collection development and programming</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Streamlined community engagement across language barriers</span>
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
                        <span className="text-gray-700 dark:text-gray-300">Enhanced community engagement and cultural inclusion</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Increased program participation across diverse demographics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Data-driven approach to literacy programming and resource allocation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 dark:text-gray-300">Strengthened digital presence and modern service delivery</span>
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
                      Creating a Connected Reading Community
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      The platform transforms individual reading experiences into a shared community journey, 
                      creating a virtuous cycle where cultural celebration leads to increased engagement, 
                      which in turn strengthens community bonds and library connections.
                    </p>
                  </div>
                </div>
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
