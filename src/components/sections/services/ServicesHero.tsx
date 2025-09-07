import Link from 'next/link';
import { Calendar, ArrowRight, Globe, Users, DollarSign } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          A Different Approach to{' '}
          <span className="text-blue-600">Library Technology</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Our work is guided by the same core values that guided us as librarians. 
          For us, technology is not just about code; it's a tool to advance the 
          fundamental mission of public libraries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Three Value Sections */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Access & Equity */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Access & Equity</h3>
              <p className="text-gray-700 leading-relaxed">
                I believe technology should break down barriers, not create new ones. That's why I build multilingual, accessible (WCAG compliant), and intuitive applications that everyone in your community can use.
              </p>
            </div>
          </div>

          {/* Community Service */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Service</h3>
              <p className="text-gray-700 leading-relaxed">
                I don't see myself as a vendor; I see myself as a partner. I build with you to solve your specific challenges, creating solutions that are perfectly tailored to your community's unique needs.
              </p>
            </div>
          </div>

          {/* Pragmatism & Value */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pragmatism & Value</h3>
              <p className="text-gray-700 leading-relaxed">
                I understand the financial realities of local government. I focus on building high-impact, sustainable, and cost-effective tools that provide a clear return on investment for your library and your community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}