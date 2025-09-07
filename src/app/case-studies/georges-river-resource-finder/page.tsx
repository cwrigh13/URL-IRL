import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, CheckCircle, Code, TrendingUp, Globe, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Connecting Communities: A Multilingual, Accessible Resource Finder for Georges River | Case Study",
  description: "How I built a high-performance, WCAG-compliant Progressive Web App that makes vital community services accessible to all residents, regardless of language or internet connectivity.",
  keywords: [
    "community resource finder",
    "multilingual library app",
    "accessible PWA",
    "community services directory",
    "Georges River Libraries case study",
    "progressive web app library",
    "WCAG compliant library app",
    "offline library services"
  ],
  openGraph: {
    title: "Connecting Communities: A Multilingual, Accessible Resource Finder for Georges River | Case Study",
    description: "How I built a high-performance, WCAG-compliant Progressive Web App that makes vital community services accessible to all residents, regardless of language or internet connectivity.",
    url: 'https://urlirl.com.au/case-studies/georges-river-resource-finder',
    siteName: 'URL IRL',
    images: [
      {
        url: '/case-studies/georges-river-resource-finder.jpg',
        width: 1200,
        height: 630,
        alt: 'Multilingual, Accessible Resource Finder for Georges River Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function GeorgesRiverResourceFinderCaseStudy() {
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
              Connecting Communities: A Multilingual, Accessible Resource Finder for Georges River
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              How I built a high-performance, WCAG-compliant Progressive Web App that makes vital community services accessible to all residents, regardless of language or internet connectivity.
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
                <p className="font-semibold text-gray-900 dark:text-white">PWA Development, Accessibility & Performance Optimisation</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full mb-2 mx-auto">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Performance</div>
                <p className="font-semibold text-gray-900 dark:text-white">Lighthouse Score 90+</p>
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

      {/* At-a-Glance Summary */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                At-a-Glance Summary
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg border border-green-200 dark:border-green-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Outcome</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Delivered a high-performance, WCAG-compliant Progressive Web App that makes vital community services accessible to all residents, regardless of language or internet connectivity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Code className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Frontend: Vanilla JavaScript (ES6+), PWA (Service Worker), Leaflet.js</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Security: Content Security Policy (CSP), Subresource Integrity (SRI)</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Performance: Lighthouse Score 90+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge: The "Why"
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Public libraries are the trusted front door to the community
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                The Problem
              </h3>
              <p className="text-red-700 dark:text-red-300">
                Patrons frequently turn to library staff for recommendations on local support services, from health and wellbeing resources to legal aid and First Nations organisations. However, this critical information was often fragmented across pamphlets, binders, and various websites, making it difficult for staff to provide quick, comprehensive referrals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Barriers Created</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Difficulty finding specific services (e.g., health services in Nepali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Challenges for non-English speaking backgrounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Accessibility needs not met</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Fragmented information sources</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Library's Need</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Centralised digital tool</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Democratised information access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Easy service discovery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Community connection hub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Process & Approach */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Process & Approach: The "How"
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Grounded in the principles of public service: equity, accessibility, and performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Strategic PWA Choice</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built as a Progressive Web App using Vanilla JavaScript to ensure incredible speed and reliability, even on older devices or with poor internet connections.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accessibility First</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every feature was designed and tested to be WCAG compliant, ensuring usability by patrons with screen readers, keyboard-only navigation, and other assistive technologies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rigorous optimisation resulted in a Lighthouse performance score of over 90+ across all categories, guaranteeing a fast experience for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Solution */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Technical Solution: The "What"
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A lightweight yet powerful PWA that puts comprehensive local services at users' fingertips
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  🌐 Progressive Web App for All
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  The application is installable directly from the browser onto any desktop or mobile device. A service worker intelligently caches the application's data, meaning once it's loaded, the entire directory is available offline. This is a crucial feature for ensuring equitable access for patrons who may have limited mobile data.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  🗺️ Intuitive & Interactive Mapping
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Using the Leaflet.js library, the app displays all 18+ community organisations on a dynamic map with custom markers. Users can visually explore services near them, and a filterable list directory provides an alternative way to browse the information.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  🌍 Multilingual by Design
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  The app is fully translated into 6 key community languages (including Mandarin, Cantonese, Nepali, Italian, and Greek). A simple toggle allows users to instantly switch the entire interface and all content into their preferred language, displaying native scripts correctly.
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
                  ♿ Accessibility and Performance at the Core
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  This application was engineered for excellence in public service delivery. It is fully WCAG compliant, supporting screen readers and keyboard navigation. Rigorous optimisation resulted in a Lighthouse performance score of over 90+ across all categories, guaranteeing a fast experience for everyone. Robust security features, including a strict Content Security Policy (CSP), protect users and ensure data integrity.
                </p>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-12 bg-white dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Vanilla JavaScript (ES6+)</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">PWA (Service Worker)</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Leaflet.js</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Content Security Policy</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Subresource Integrity</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">WCAG Compliance</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-600 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Lighthouse 90+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Impact & Results: The "So What?"
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                This tool has transformed how Georges River Libraries connects its community to vital support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
                  Bridged the Information Gap
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Patrons can now self-serve 24/7 to find the help they need, from housing support to health services. This empowers residents and frees up staff time to handle more in-depth inquiries.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  Enhanced Digital Inclusion
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  The offline PWA functionality means that access to this vital information is not dependent on a persistent or high-speed internet connection, making it truly accessible for all.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  Strengthened Community Connections
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  By centralising and simplifying access to local organisations, the library has strengthened its referral network and solidified its position as the primary information hub for the entire community.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits Delivered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">24/7 self-service access to community resources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Offline functionality for equitable access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Multilingual support for diverse communities</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">WCAG compliance for accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">High-performance Lighthouse score 90+</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Strengthened library-community partnerships</span>
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
            Ready to Connect Your Community with Accessible Digital Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how a multilingual, accessible Progressive Web App can bridge information gaps and strengthen your library's role as a community hub.
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
