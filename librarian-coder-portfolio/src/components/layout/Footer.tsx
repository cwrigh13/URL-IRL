'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hello@librariancoder.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                >
                  hello@librariancoder.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a
                  href="https://linkedin.com/in/librariancoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Mission Statement */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              My Mission
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Empowering libraries with innovative technology solutions that enhance 
              user experiences and streamline operations. I bridge the gap between 
              traditional library services and modern digital capabilities.
            </p>
          </div>

          {/* Column 3: Business Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">
              Business Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-neutral-300">
                  ABN: 12 345 678 901
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Librarian Coder. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link
                href="/terms"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
