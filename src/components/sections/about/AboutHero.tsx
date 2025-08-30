import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          My Story: From{' '}
          <span className="text-green-600">Librarian</span> to{' '}
          <span className="text-blue-600">Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          I've walked in your shoes. I understand the challenges, the constraints, 
          and the incredible potential of libraries to transform communities. 
          Now I'm using technology to help you do what you do best.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300"
          >
            View My Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
