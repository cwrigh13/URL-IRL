import { Mail, Linkedin, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Ways to Connect
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Prefer to reach out directly? Here are the best ways to get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
            <p className="text-gray-600 mb-4">
              The fastest way to get in touch. I typically respond within 24 hours.
            </p>
            <a
              href="mailto:hello@librarianwhocodes.com.au"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              hello@librarianwhocodes.com.au
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Linkedin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">LinkedIn</h3>
            <p className="text-gray-600 mb-4">
              Connect professionally and stay updated with library technology insights.
            </p>
            <a
              href="https://linkedin.com/in/librarianwhocodes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
            <p className="text-gray-600 mb-4">
              Based in Australia, serving libraries across the country and internationally.
            </p>
            <span className="text-purple-600 font-semibold">
              Australia (Remote/On-site)
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Response Time & Availability
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Email Responses</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Initial response: Within 24 hours</li>
                <li>• Detailed consultation: Within 48 hours</li>
                <li>• Project proposals: Within 1 week</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Consultation Availability</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Free initial consultation: 30-45 minutes</li>
                <li>• Available: Monday-Friday, 9 AM - 6 PM AEST</li>
                <li>• Weekend consultations: By arrangement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
