import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-10 pb-20 lg:pt-16 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in">
            Bespoke Technology for <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">Australian Libraries</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up">
            As independent software developers, we offer a different approach to your library&apos;s digital experience. We partner with you to build custom solutions that engage multicultural communities, solving the technical challenges you face while respecting the unique needs of library professionals.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Get in touch
            </Link>
            
            {/* Secondary Button */}
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg rounded-lg transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              View Our Work
            </Link>
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
