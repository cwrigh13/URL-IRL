import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Bespoke Technology for Australian Libraries,{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Built by a Librarian Who Codes
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Transform your library&apos;s digital experience with custom software solutions that understand both the technical challenges and the unique needs of library professionals. From catalog systems to patron engagement tools, I bridge the gap between library science and modern technology.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
            </Link>
            
            {/* Secondary Button */}
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg rounded-lg transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            >
              View My Work
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Trusted by libraries across Australia
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-500 dark:text-gray-400 text-sm">✓ Custom Development</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">✓ Library Expertise</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">✓ Ongoing Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
}
