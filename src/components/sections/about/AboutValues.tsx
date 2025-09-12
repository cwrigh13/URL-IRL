import { BookOpen, Code, Users, Lightbulb } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: BookOpen,
      title: 'Library Experience',
      description: 'At URL IRL we have years of hands-on experience in public libraries. We understand your workflows, challenges and community needs.',
      color: 'blue'
    },
    {
      icon: Code,
      title: 'Technical Expertise',
      description: 'Modern software development skills with a focus on accessibility, performance, and user experience.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Deep understanding of how libraries serve diverse communities and the technology needed to support them.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; icon: string; text: string }> = {
      blue: { 
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100', 
        icon: 'text-blue-600',
        text: 'text-blue-900'
      },
      green: { 
        bg: 'bg-gradient-to-br from-green-50 to-green-100', 
        icon: 'text-green-600',
        text: 'text-green-900'
      },
      purple: { 
        bg: 'bg-gradient-to-br from-purple-50 to-purple-100', 
        icon: 'text-purple-600',
        text: 'text-purple-900'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose URL IRL?
          </h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              const IconComponent = value.icon;
              
              return (
                <div key={index} className="text-center group">
                  <div className={`${colors.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className={`w-10 h-10 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 text-center mb-16">
          <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why This Background Matters
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            When you work with URL IRL, you're not explaining library concepts to a developer. 
            You're collaborating with a team that already understands your world. 
            We speak your language, we know your challenges, and URL IRL can translate your needs 
            into technology solutions that actually work for your library and your community.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With a Team Who Gets It?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@urlirl.com.au"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in touch
              </a>
              <a
                href="https://linkedin.com/in/urlirl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
