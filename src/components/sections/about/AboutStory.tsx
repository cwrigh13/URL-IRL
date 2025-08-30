import { BookOpen, Code, Users, Lightbulb } from 'lucide-react';

export default function AboutStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Journey That Changed Everything
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My story begins in the heart of a public library, where I spent years 
              helping patrons find information, managing collections, and witnessing 
              firsthand how technology could either enhance or hinder the library experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I saw the frustration when systems were too complex for staff to use efficiently. 
              I experienced the disappointment when digital services weren't accessible to 
              all members of our community. And I realized that the gap between what 
              libraries needed and what was available was growing wider.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's when I decided to bridge that gap myself. I learned to code, 
              studied software development, and now I'm building the solutions that 
              libraries actually need.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Library Experience</h3>
                  <p className="text-gray-700">Years of hands-on experience in public libraries, understanding workflows, challenges, and community needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Expertise</h3>
                  <p className="text-gray-700">Modern software development skills with a focus on accessibility, performance, and user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                  <p className="text-gray-700">Deep understanding of how libraries serve diverse communities and the technology needed to support them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
