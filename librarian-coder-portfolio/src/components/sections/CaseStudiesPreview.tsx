import Link from "next/link";
import { ArrowRight, Clock, MapPin, Users } from "lucide-react";
import { getFeaturedCaseStudies } from "@/data/case-studies";

export default function CaseStudiesPreview() {
  // Get featured case studies for homepage preview
  const featuredCaseStudies = getFeaturedCaseStudies();
  
  // Debug logging
  console.log('CaseStudiesPreview - featuredCaseStudies:', featuredCaseStudies);
  console.log('CaseStudiesPreview - featuredCaseStudies length:', featuredCaseStudies?.length);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world examples of how custom software transforms library operations and enhances patron experiences.
          </p>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((study) => (
            <div
              key={study.id}
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600 ${
                study.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Featured Badge */}
              {study.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Category and Duration */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {study.title}
                </h3>

                {/* Library and Location */}
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <span className="font-medium">{study.library}</span>
                  <span className="text-gray-500 dark:text-gray-400"> • {study.location}</span>
                </p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>

                {/* View Details Button */}
                <Link
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold text-lg rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
