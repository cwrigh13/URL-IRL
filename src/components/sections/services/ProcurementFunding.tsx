import { DollarSign, FileText, CheckCircle, Users, Award } from 'lucide-react';

export default function ProcurementFunding() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Helping You Secure Funding
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We understand the financial realities of local government and the importance of demonstrating clear value. 
            Let us help you navigate procurement processes and secure the funding you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Procurement Support */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Procurement Support</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide detailed project briefs, technical specifications, and cost breakdowns that meet council procurement requirements.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                SME threshold compliance
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Clear ROI documentation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Transparent pricing
              </li>
            </ul>
          </div>

          {/* Grant Applications */}
          <div className="bg-green-50 rounded-xl p-8 border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Grant Applications</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We partner with you to develop compelling grant applications that clearly articulate the community value and technical feasibility.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Community impact statements
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Technical project briefs
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Budget justification
              </li>
            </ul>
          </div>

          {/* Value Demonstration */}
          <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Value Demonstration</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide clear metrics and case studies that demonstrate the return on investment for your library and community.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Usage analytics
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cost savings documentation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Community engagement metrics
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Transparency */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing for Procurement
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We understand that procurement officers need clear, upfront pricing to make informed decisions. 
              All our services include detailed cost breakdowns and no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Tech Roadmap Workshop</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">$2,500 - $4,000</p>
              <p className="text-sm text-gray-600">One-day strategic planning session</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">MVP Development</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">$15,000 - $35,000</p>
              <p className="text-sm text-gray-600">Minimum viable product</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Full Custom Solution</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">$50,000 - $150,000</p>
              <p className="text-sm text-gray-600">Complete application development</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Annual Support</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">$5,000 - $15,000</p>
              <p className="text-sm text-gray-600">Ongoing maintenance & updates</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              All prices in AUD. No hidden fees. Payment terms available for council budgets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                SME compliant
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                Australian owned
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Award className="w-4 h-4 mr-2" />
                ALIA member
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
