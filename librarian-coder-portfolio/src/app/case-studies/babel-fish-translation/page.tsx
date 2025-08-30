import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Users, CheckCircle, Code, Lightbulb, TrendingUp, Globe, MessageSquare, Headphones, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Babel Fish Translation App - Breaking Down Language Barriers | Case Study",
  description: "How I built a full-stack translation app that empowers library staff to communicate effectively with patrons from diverse linguistic backgrounds, fostering inclusivity and better service.",
  keywords: [
    "library translation app",
    "multilingual library services",
    "language barrier solutions",
    "library inclusivity tools",
    "Georges River Libraries case study",
    "translation technology"
  ],
  openGraph: {
    title: "Babel Fish Translation App - Breaking Down Language Barriers | Case Study",
    description: "How I built a full-stack translation app that empowers library staff to communicate effectively with patrons from diverse linguistic backgrounds, fostering inclusivity and better service.",
    url: 'https://librarianwhocodes.com.au/case-studies/babel-fish-translation',
    siteName: 'The Librarian Who Codes',
    images: [
      {
        url: '/case-studies/babel-fish-translation.jpg',
        width: 1200,
        height: 630,
        alt: 'Babel Fish Translation App for Georges River Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function BabelFishCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Breaking Down Language Barriers: The Babel Fish Translation App
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              How I built a full-stack translation app that empowers library staff to communicate effectively with patrons from diverse linguistic backgrounds, fostering inclusivity and better service.
            </p>
            
            {/* Project Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full mb-2 mx-auto">
                  <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-semibold text-gray-900 dark:text-white">Georges River Libraries</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full mb-2 mx-auto">
                  <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                <p className="font-semibold text-gray-900 dark:text-white">Full-Stack Web App</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full mb-2 mx-auto">
                  <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Languages</p>
                <p className="font-semibold text-gray-900 dark:text-white">5+ Languages</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full mb-2 mx-auto">
                  <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">Sydney, NSW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge: Language Barriers in a Multicultural Community
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A communication gap that was creating unintended barriers to accessing library services
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                The Problem
              </h3>
              <p className="text-red-700 dark:text-red-300">
                In a vibrant and multicultural community like Georges River, the public library is a vital hub for residents from all over the world. However, language barriers can present a significant challenge for staff and patrons alike. Simple interactions—explaining PC booking rules in Mandarin, finding community resources in Arabic, or understanding overdue notices in Greek—can become stressful and difficult when there's no shared language.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Daily Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Staff struggling with basic communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Patrons unable to access full services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Misunderstandings and service delays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Reliance on cumbersome web translators</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages Needed</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Mandarin and Cantonese</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Nepali and Greek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Arabic and other community languages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Library-specific terminology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Process & Approach */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Process & Approach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Solving a communication problem through deep empathy and librarian perspective
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Staff Consultation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collaborated with frontline staff to compile critical library-specific phrases and understand nuanced community needs, including the specific requirement to differentiate between Mandarin and Cantonese.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Purpose-Built Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Created a "digital phrasebook" designed for the reality of a busy library floor—fast, simple, and context-aware, going beyond simple translation to consider community-specific needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Meticulously planned features from dual-user modes to hyper-local Centrelink directions, documented in a comprehensive PRD to ensure the final product was a perfect fit for its environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Solution */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Technical Solution
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A full-stack web application designed for speed, clarity, and cultural sensitivity
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  🎯 Dual-Mode Interface (Staff & Customer)
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  The app features two distinct modes. "For Staff" mode allows librarians to select their own language to see translations alongside English. "For Customers" mode simplifies the interface, showing the patron's selected language next to the English equivalent, creating a seamless two-way communication tool.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  🌍 Context-Aware Communication
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  The app goes beyond literal translation with thoughtful, community-specific logic. For example, a card prompts staff to ask, "Do you prefer to speak Mandarin or Cantonese?". If the staff member's chosen language is Cantonese, the card and its pop-up options dynamically reorder to present Cantonese first, showing exceptional cultural consideration.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  🔊 High-Quality Audio Playback
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Leveraging the browser's native SpeechSynthesis API, every phrase has clear audio playback. This is critical for ensuring patrons with low literacy or those unfamiliar with Roman script can understand the message clearly, fostering a more human interaction.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  🤖 AI-Powered Phrase Suggestion
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  For less common queries, I integrated Google's Gemini API. Staff can type a custom query, and the AI suggests relevant library phrases and their translations, providing a flexible tool for handling a wider range of interactions.
                </p>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
                  🗺️ Hyper-Local Community Assistance
                </h3>
                <p className="text-indigo-800 dark:text-indigo-200">
                  Understanding that library services often connect to broader community needs, I added a feature for patrons asking, "How do I get to Centrelink?". This opens a pop-up with an embedded Google Map and a scannable QR code, providing immediate, actionable directions and demonstrating the library's role as a key community anchor.
                </p>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Vanilla JavaScript (ES6+)</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Tailwind CSS</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Node.js & Express</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Firebase Firestore</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Google Gemini API</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">SpeechSynthesis API</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Google Maps Embed</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Firebase Client SDK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Impact & Results
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Fostering a more welcoming and inclusive environment for the entire community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Faster, More Effective Service
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interactions that were once difficult and time-consuming can now be handled with clarity in seconds. This allows staff to serve more patrons effectively and reduces queues at busy service points.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Enhanced Equity and Inclusion
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The app ensures patrons from all linguistic backgrounds receive the same high standard of service. Features like the Centrelink directions and specific language support demonstrate a profound commitment to equitable access.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Staff Confidence & Satisfaction
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Empowering staff to handle cross-cultural interactions professionally, boosting their confidence and job satisfaction while ensuring every community member receives respectful, effective service.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits Delivered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Eliminated language barriers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Improved patron service speed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Enhanced cultural sensitivity</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Increased community inclusivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Streamlined staff training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Strengthened community connections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 dark:bg-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Break Down Language Barriers in Your Library?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom translation technology can make your library more inclusive and accessible to your entire community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
