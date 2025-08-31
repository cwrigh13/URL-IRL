'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">LC</span>
              </div>
              <span className="ml-2 text-xl font-heading font-semibold text-neutral-900 hidden sm:block">
                Librarian Coder
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Case Studies
            </Link>
            <Link
              href="/insights"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Insights
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-700 hover:text-primary-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                onClick={closeMenu}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200"
                onClick={closeMenu}
              >
                Insights
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
