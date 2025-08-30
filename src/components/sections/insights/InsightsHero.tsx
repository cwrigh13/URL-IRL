import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

export default function InsightsHero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Library Technology{' '}
          <span className="text-purple-600">Insights</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Stay ahead of the curve with expert perspectives on library technology, 
          digital transformation, and software solutions. Written by someone who 
          understands both libraries and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-purple-600 font-semibold">
            <BookOpen className="w-5 h-5" />
            <span>Expert Knowledge</span>
          </div>
          <div className="flex items-center gap-2 text-indigo-600 font-semibold">
            <TrendingUp className="w-5 h-5" />
            <span>Latest Trends</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <Lightbulb className="w-5 h-5" />
            <span>Practical Insights</span>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From accessibility best practices to emerging technologies, discover insights 
          that can help transform your library's digital services.
        </p>
      </div>
    </section>
  );
}
