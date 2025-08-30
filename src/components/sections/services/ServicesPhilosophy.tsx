import { Globe, Users, DollarSign } from 'lucide-react';

export default function ServicesPhilosophy() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Access & Equity</h3>
            <p className="text-gray-700 leading-relaxed">
              I believe technology should break down barriers, not create new ones. 
              That's why I build multilingual, accessible (WCAG compliant), and 
              intuitive applications that everyone in your community can use.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Service</h3>
            <p className="text-gray-700 leading-relaxed">
              I don't see myself as a vendor; I see myself as a partner. I build 
              with you to solve your specific challenges, creating solutions that 
              are perfectly tailored to your community's unique needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pragmatism & Value</h3>
            <p className="text-gray-700 leading-relaxed">
              I understand the financial realities of local government. I focus on 
              building high-impact, sustainable, and cost-effective tools that 
              provide a clear return on investment for your library and your community.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Partner With Me?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you work with me, you're not just hiring a developer. You're partnering 
              with a fellow library professional who speaks your language. There's no need 
              to explain the importance of ICIP protocols, the nuances of consortium borrowing, 
              or why a simple, clean interface is so critical for your senior patrons. 
              I get it, because I've been there.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center font-semibold">
              My goal is to empower your library with the tools you need to do what you do best: serve your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
