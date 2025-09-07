import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { generateBlogSlug } from '@/utils/slug';

export default function InsightsGrid() {
  const insights = [
    {
      id: 1,
      title: 'The Future of Library Technology: What Australian Libraries Need to Know',
      excerpt: 'Explore emerging trends in library technology and how they can benefit Australian public libraries. From AI-powered search to enhanced accessibility features.',
      category: 'Technology Trends',
      readTime: '8 min read',
      date: '2024-01-15',
      featured: true,
      slug: 'future-library-technology-australian-libraries'
    },
    {
      id: 2,
      title: 'Building Accessible Library Software: WCAG Compliance Made Simple',
      excerpt: 'A practical guide to creating library software that serves all members of your community, including those with disabilities.',
      category: 'Accessibility',
      readTime: '6 min read',
      date: '2024-01-10',
      slug: 'building-accessible-library-software-wcag-compliance'
    },
    {
      id: 3,
      title: 'Cost-Effective Technology Solutions for Small Libraries',
      excerpt: 'Discover how small and regional libraries can leverage technology to provide big-city services on a local government budget.',
      category: 'Budget & Planning',
      readTime: '7 min read',
      date: '2024-01-05',
      slug: 'cost-effective-technology-solutions-small-libraries'
    },
    {
      id: 4,
      title: 'Integrating Legacy Systems: A Step-by-Step Approach',
      excerpt: 'Learn how to modernize your existing library systems without disrupting services or breaking the budget.',
      category: 'System Integration',
      readTime: '10 min read',
      date: '2023-12-28',
      slug: 'integrating-legacy-systems-step-by-step-approach'
    },
    {
      id: 5,
      title: 'Mobile-First Design for Library Applications',
      excerpt: 'Why mobile-first design is crucial for library software and how to implement it effectively for your community.',
      category: 'User Experience',
      readTime: '5 min read',
      date: '2023-12-20',
      slug: 'mobile-first-design-library-applications'
    },
    {
      id: 6,
      title: 'Data Security in Library Software: Protecting Patron Privacy',
      excerpt: 'Essential security practices for library software, ensuring your patrons\' data remains safe and compliant with Australian privacy laws.',
      category: 'Security & Privacy',
      readTime: '9 min read',
      date: '2023-12-15',
      slug: 'data-security-library-software-protecting-patron-privacy'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Technology Trends': 'bg-blue-100 text-blue-800',
      'Accessibility': 'bg-green-100 text-green-800',
      'Budget & Planning': 'bg-purple-100 text-purple-800',
      'System Integration': 'bg-orange-100 text-orange-800',
      'User Experience': 'bg-pink-100 text-pink-800',
      'Security & Privacy': 'bg-red-100 text-red-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Featured Article */}
        {insights.filter(insight => insight.featured).map(insight => (
          <div key={insight.id} className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(insight.category)}`}>
                  {insight.category}
                </span>
                <span className="text-sm text-gray-500">Featured</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {insight.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {insight.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(insight.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.filter(insight => !insight.featured).map(insight => (
            <article key={insight.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(insight.category)}`}>
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(insight.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
