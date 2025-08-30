import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Globe, Users, BookOpen, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Georges River Reads - Multicultural Reading App | Case Study',
  description: 'A bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.',
};

export default function GeorgesRiverReadsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Mobile App Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fostering Literacy & Connection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The Georges River Reads Multicultural Reading App
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
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

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link 
              href="/case-studies" 
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* At-a-Glance Summary */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">At-a-Glance Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Client</h3>
                  <p className="text-gray-900">Georges River Libraries (Community Engagement Platform)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Service</h3>
                  <p className="text-gray-900">Custom Mobile App Development (iOS & Android), Gamification, & Community Platform Strategy</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Tech Stack</h3>
                  <p className="text-gray-900">
                    <strong>Platforms:</strong> Native iOS & Android, Web Application (Phase 2)<br/>
                    <strong>Key Focus:</strong> Accessibility (WCAG 2.1 AA), Data Privacy (Australian Privacy Act 1988), Scalability
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Core Outcome</h3>
                  <p className="text-gray-900">Launched a bespoke, gamified reading platform that increases literacy engagement and strengthens community bonds across the diverse Georges River area.</p>
                </div>
              </div>
            </section>

            {/* The Challenge */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge (The "Why")</h2>
              <p className="text-gray-700 mb-4">
                While reading challenges are popular, generic, off-the-shelf apps often fail to resonate within a deeply multicultural community like Georges River. Residents faced real barriers to engagement, including a lack of program accessibility in their native language, a shortage of culturally relevant reading recommendations, and a general disconnect between digital tools and physical library services.
              </p>
              <p className="text-gray-700">
                A one-size-fits-all solution couldn't address these specific local needs. The library required a purpose-built platform that was not only a fun and engaging reading tracker but also a powerful tool for cultural celebration, community connection, and social inclusion.
              </p>
            </section>

            {/* My Process & Approach */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">My Process & Approach (The "How")</h2>
              <p className="text-gray-700 mb-4">
                Understanding that this platform needed to be built for the community, with the community, my process was grounded in deep user empathy and strategic planning. The entire project was guided by a comprehensive PRD shaped by distinct user personas—from the recently-arrived Alameddine family seeking bilingual resources, to established senior Wei Chen looking for books in his native language.
              </p>
              <p className="text-gray-700 mb-4">
                This "community-first" philosophy dictated every decision. We prioritised a fully multilingual interface not as an afterthought, but as a core requirement for the MVP. Features were designed to do more than just track minutes; they were designed to encourage real-world library visits, celebrate diverse authors, and connect families through shared activities.
              </p>
              <p className="text-gray-700">
                By focusing on the specific needs of Georges River residents, we were able to design a platform that feels less like a generic app and more like a digital extension of their local library branch.
              </p>
            </section>

            {/* The Technical Solution */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Technical Solution (The "What")</h2>
              <p className="text-gray-700 mb-6">
                Georges River Reads is a comprehensive, native mobile application for iOS and Android that transforms reading into a fun, gamified, and social experience. It provides a rich feature set for patrons and a powerful analytics backend for library staff.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Platform Features:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">An Inclusive Core Experience</h4>
                  <p className="text-gray-700">
                    The entire app—from onboarding to challenge instructions—is available in English, Mandarin, Arabic, Cantonese, and Nepali. A unified logging system allows users to track reading via a live timer or manual entry, and families can manage multiple readers under a single, easy-to-use account.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Advanced Gamification & Engagement</h4>
                  <p className="text-gray-700">
                    The platform moves beyond simple logging with a robust challenge system. Library staff can create dynamic challenges (e.g., "Read 500 minutes in August") that award virtual, shareable badges upon completion. The system is designed to encourage library use, with "Activity Challenges" that prompt users to visit a branch or attend a bilingual story time.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Community & Cultural Discovery</h4>
                  <p className="text-gray-700">
                    The app serves as a community portal. An integrated, multilingual events calendar keeps residents informed of library programs. To foster discovery, the platform features culturally-curated book recommendations from library staff, with a focus on diverse authors and bilingual titles relevant to the community.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Powerful Admin & Analytics Dashboard</h4>
                  <p className="text-gray-700">
                    A secure, web-based dashboard provides authorised library staff with access to anonymised, aggregated data. This allows them to see real-time engagement trends, track challenge participation, and gather valuable insights to inform future programming and strategic planning, all while respecting user privacy.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Technology & Compliance</h3>
              <p className="text-gray-700 mb-4">
                This platform was built to the highest standards of a modern public service application:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Platform:</strong> Native mobile applications for iOS and Android ensure a smooth, responsive, and reliable user experience.</li>
                <li><strong>Accessibility:</strong> Developed to meet WCAG 2.1 AA standards, the app is fully accessible to users with a wide range of disabilities.</li>
                <li><strong>Data Privacy:</strong> The entire system is fully compliant with the Australian Privacy Act 1988 and global child safety standards, ensuring all user data is secure and managed responsibly.</li>
              </ul>
            </section>

            {/* The Impact & Results */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Impact & Results (The "So What?")</h2>
              <p className="text-gray-700 mb-6">
                Georges River Reads is more than an app; it's a vibrant digital ecosystem that brings the library's mission of literacy and community connection into the hands of thousands of residents.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Increased Program Participation</h4>
                    <p className="text-gray-700">
                      The fun, gamified nature of the app has driven unprecedented engagement in reading challenges, especially among children and young adults.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Bridged Language Barriers</h4>
                    <p className="text-gray-700">
                      By providing a fully translated experience, the library has successfully reached and engaged residents who were previously unable to participate in English-only programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data-Driven Strategic Planning</h4>
                    <p className="text-gray-700">
                      The admin dashboard provides the library with invaluable, real-time insights into community reading habits, allowing them to tailor their services and collection development more effectively.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Platform</span>
                  <span className="font-medium text-gray-900">iOS & Android</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Languages</span>
                  <span className="font-medium text-gray-900">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Accessibility</span>
                  <span className="font-medium text-gray-900">WCAG 2.1 AA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Compliance</span>
                  <span className="font-medium text-gray-900">Privacy Act 1988</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Native iOS</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Native Android</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Web Dashboard</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Multilingual</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Gamification</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Analytics</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">WCAG 2.1 AA</span>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Ready to build something amazing?</h3>
              <p className="text-blue-100 mb-4">
                Let's discuss how we can create a custom solution for your library's unique needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
