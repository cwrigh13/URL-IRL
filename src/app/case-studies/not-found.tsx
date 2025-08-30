import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <svg className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Case Study Not Found
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Sorry, the case study you're looking for doesn't exist or may have been moved. 
            This could happen if the URL was mistyped or the case study has been archived.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse All Case Studies
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium text-lg rounded-lg transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500"
            >
              Return Home
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Looking for something specific? Try these options:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">
                View Services
              </Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                About Me
              </Link>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
