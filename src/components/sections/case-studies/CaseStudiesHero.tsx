import Link from 'next/link';

export default function CaseStudiesHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Real Solutions for{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Real Library Challenges
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Explore the custom software solutions that URL IRL have built for Australian public libraries. Each case study demonstrates how understanding both library operations and modern technology creates powerful, user-friendly tools that transform how public libraries serve their communities.
          </p>
          
          

        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-200 dark:bg-slate-800 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
}
