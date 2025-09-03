import Link from 'next/link';
import { Code, Smartphone, Users } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke applications tailored to your library\'s specific needs and workflows.',
      color: 'blue'
    },

    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Responsive web apps and native mobile solutions that keep your community connected.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Digital Services Integration',
      description: 'Seamlessly connect your existing systems and create new digital experiences.',
      color: 'orange'
    },


  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; icon: string }> = {
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every library is unique, and so should be your technology solutions. 
            I work closely with you to understand your challenges and create 
            exactly what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Library?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's discuss how we can work together to create technology solutions 
              that truly serve your community.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
