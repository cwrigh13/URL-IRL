import Link from 'next/link';
import { ArrowRight, BookOpen, Code, Users } from 'lucide-react';

export default function RelatedContent() {
  const relatedSections = [
    {
      icon: BookOpen,
      title: 'Our Story',
      description: 'Discover how my journey from librarian to developer gives me unique insight into your challenges.',
      href: '/about',
      color: 'blue'
    },
    {
      icon: Code,
      title: 'Services',
      description: 'Explore our comprehensive range of custom software solutions for Australian libraries.',
      href: '/services',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Case Studies',
      description: 'See real examples of how we\'ve helped libraries transform their digital services.',
      href: '/case-studies',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; icon: string; hover: string }> = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600', hover: 'hover:bg-blue-100' },
      green: { bg: 'bg-green-50', icon: 'text-green-600', hover: 'hover:bg-green-100' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600', hover: 'hover:bg-purple-100' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Explore More
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about our approach, services, and success stories that have transformed Australian libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedSections.map((section) => {
            const colors = getColorClasses(section.color);
            const IconComponent = section.icon;
            
            return (
              <Link
                key={section.title}
                href={section.href}
                className={`group block p-8 rounded-xl ${colors.bg} ${colors.hover} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional internal links */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Book a free consultation to discuss your library's specific needs and discover how custom software can transform your digital services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 font-medium rounded-lg transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
              >
                Read Our Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
