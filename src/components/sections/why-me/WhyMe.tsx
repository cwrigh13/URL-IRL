import React from 'react';
import { Brain, Settings, Handshake } from 'lucide-react';

export default function WhyMe() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Me?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I bring a unique combination of library expertise and technical skills that no other developer can offer.
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Insider Knowledge */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Insider Knowledge
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Skip the learning curve. I speak your language, from MARC records to ICIP protocols.
            </p>
          </div>

          {/* Column 2: Bespoke Solutions */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                <Settings className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Bespoke Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Move beyond one-size-fits-all systems with apps tailored to your community&apos;s unique needs.
            </p>
          </div>

          {/* Column 3: Cost-Effective Partnership */}
          <div className="text-center group">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-300">
                <Handshake className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cost-Effective Partnership
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Get a high-impact, custom solution without the enterprise price tag.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to see how this combination can transform your library?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
