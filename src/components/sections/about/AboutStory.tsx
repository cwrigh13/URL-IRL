import { Lightbulb } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why This Background Matters
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            When you work with me, you're not explaining library concepts to a developer. 
            You're collaborating with someone who already understands your world. 
            I speak your language, I know your challenges, and I can translate your needs 
            into technology solutions that actually work for your library and your community.
          </p>
        </div>
      </div>
    </section>
  );
}
