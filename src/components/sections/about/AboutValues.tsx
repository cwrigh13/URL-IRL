import { Heart, Shield, Zap, Users } from 'lucide-react';

export default function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Libraries',
      description: 'I genuinely care about libraries and their mission to serve communities. This isn\'t just a job—it\'s a calling.',
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'I build long-term partnerships based on trust, transparency, and delivering on my promises.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Innovation & Efficiency',
      description: 'I stay current with technology trends to bring you the best, most efficient solutions available.',
      color: 'yellow'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Every solution I build prioritizes the needs of your community and the people who use your library.',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; icon: string }> = {
      red: { bg: 'bg-red-100', icon: 'text-red-600' },
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
      yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' },
      green: { bg: 'bg-green-100', icon: 'text-green-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            const IconComponent = value.icon;
            
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work With Someone Who Gets It?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's have a conversation about your library's technology needs. 
              I promise you'll be talking to someone who understands your world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@librarianwhocodes.com.au"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Send Me an Email
              </a>
              <a
                href="https://linkedin.com/in/librarianwhocodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300"
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
