import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Users, CheckCircle, Code, Lightbulb, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Georges River Libraries - Internal Resource Management Tool | Case Study",
  description: "How I built an internal library resource management tool that unified fragmented operational information and reduced staff search time from 3-5 minutes to under 10 seconds.",
  keywords: [
    "library resource management",
    "internal library tools",
    "staff efficiency tools",
    "library workflow automation",
    "digital tool library",
    "Georges River Libraries case study"
  ],
  openGraph: {
    title: "Georges River Libraries - AI-Powered Knowledge Hub | Case Study",
    description: "How I built an AI-powered knowledge hub that unified fragmented operational information and reduced staff search time from 3-5 minutes to under 10 seconds.",
    url: 'https://urlirl.com.au/case-studies/georges-river-creates',
    siteName: 'URL IRL',
    images: [
      {
        url: '/case-studies/georges-river-creates.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Powered Knowledge Hub for Georges River Libraries',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
};

export default function GeorgesRiverCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Georges River Creates - Internal Library Resource Management Tool
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              How I built an internal tool that consolidated fragmented operational information and empowered staff with quick access to all creative collections and equipment.
            </p>
            
            {/* Project Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full mb-2 mx-auto">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                <p className="font-semibold text-gray-900 dark:text-white">Georges River Libraries</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full mb-2 mx-auto">
                <Code className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                 <p className="font-semibold text-gray-900 dark:text-white">Custom Web App</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full mb-2 mx-auto">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="font-semibold text-gray-900 dark:text-white">4 Months</p>
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
                The Challenge: Information Fragmentation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A daily operational bottleneck that was undermining both staff confidence and patron experience
              </p>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                The Problem
              </h3>
              <p className="text-red-700 dark:text-red-300">
                Georges River Libraries boasts an incredible and diverse range of non-traditional collections, from musical instruments to 3D printers in their Digital Tool Library. However, the operational information for these items—such as borrowing policies, operating procedures, and kit contents—was fragmented across various locations: a shared drive, printed manuals in binders, and different sections of the staff intranet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Daily Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Staff spending precious minutes searching for correct documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Frequent interruptions to senior colleagues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Delayed service to patrons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Inconsistent answers undermining trust</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Collections Affected</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Musical instruments and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">3D printers and digital tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Recording studio equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Specialized borrowing policies</span>
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
                Solving a core library workflow problem through collaborative, user-centric design
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User Research</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conducted informal workshops with staff from different departments to map out their "information-finding" journeys and identify friction points.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Collaborative Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transformed a staff-identified problem into a staff-driven solution, ensuring the final product was perfectly tailored to their unique needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technical Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed with clean, intuitive interface ensuring immediate usability for staff with varying technical comfort levels.
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
                A single-page web app that provides a single source of truth for staff
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                  🎯 Digital Tool Library
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Browse and search through professional photography and video equipment, 3D printers, and digital tools. Staff can quickly access detailed information about each item's specifications, borrowing policies, and operating procedures.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-green-900 dark:text-green-100 mb-3">
                  🎵 Musical Instrument Collection
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Access one of Australia's largest musical instrument collections with comprehensive information about instruments, accessories, and borrowing rules. Staff can instantly answer patron questions about availability and policies.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
                  🎬 Media Lab & Creative Spaces
                </h3>
                <p className="text-purple-800 dark:text-purple-200">
                  Information about creative spaces, recording studios, and booking procedures. Staff can quickly provide details about available equipment, space capacities, and reservation requirements.
                </p>
              </div>
            </div>
            
            {/* Tech Stack */}
            <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Vite</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Tailwind CSS</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Vanilla JavaScript</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">PostCSS</span>
                </div>
                <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Alpine.js</span>
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
                Transforming daily frustration into staff empowerment with measurable benefits
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Drastic Time Reduction
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Staff can now find information in <strong>under 10 seconds</strong>, compared to the <strong>3-5 minutes</strong> it could take previously.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Improved Consistency
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With a single source of truth, patrons receive the same, correct information from every staff member, every time.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Staff Empowerment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The AI assistant empowers staff to confidently handle complex queries without needing to escalate, especially valuable for training new team members.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Benefits Delivered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Eliminated information search delays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Improved patron service speed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Enhanced staff confidence</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Reduced interruptions to senior staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Streamlined training for new staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">Increased public trust and satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Library's Resource Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom software can solve your library's unique challenges and enhance your staff's efficiency in managing diverse collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
