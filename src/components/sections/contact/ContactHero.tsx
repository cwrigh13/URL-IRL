import { Calendar, MessageCircle } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Let's Build Something{' '}
          <span className="text-blue-600">Great Together</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
          Ready to transform your library with technology that truly understands your needs? 
          Let's have a conversation about your challenges and how we can solve them together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <Calendar className="w-5 h-5" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <MessageCircle className="w-5 h-5" />
            <span>No Obligation</span>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you have a specific project in mind or just want to explore possibilities, 
          I'm here to help. Let's discuss how technology can better serve your community.
        </p>
      </div>
    </section>
  );
}
