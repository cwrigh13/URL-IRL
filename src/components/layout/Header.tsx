'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButtonRef.current?.focus();
    } else if (event.key === 'Tab' && isMenuOpen) {
      // Trap focus within mobile menu
      const menuItems = menuRef.current?.querySelectorAll('a[role="menuitem"]');
      if (menuItems && menuItems.length > 0) {
        const firstItem = menuItems[0] as HTMLElement;
        const lastItem = menuItems[menuItems.length - 1] as HTMLElement;
        
        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      // Handle Enter and Space key activation
      if (event.target === menuButtonRef.current) {
        event.preventDefault();
        toggleMenu();
      }
    }
  };

  // Handle focus management when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Focus first menu item when menu opens
      firstMenuItemRef.current?.focus();
    } else {
      // Return focus to menu button when menu closes
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return undefined;
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        Skip to main content
      </a>
      
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
                URL IRL
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <Link
              href="/about"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50 rounded-md"
            >
              Our Story
            </Link>
            <Link
              href="/services"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50 rounded-md"
            >
              Case Studies
            </Link>
            <Link
              href="/insights"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50 rounded-md"
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50 rounded-md"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              className="text-neutral-700 hover:text-primary-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
          <div className="md:hidden" ref={menuRef}>
            <div 
              id="mobile-menu"
              className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200"
              role="menu"
              aria-label="Main navigation"
              onKeyDown={handleKeyDown}
            >
              <Link
                ref={firstMenuItemRef}
                href="/about"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50"
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50"
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50"
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                Case Studies
              </Link>
              <Link
                href="/insights"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50"
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-neutral-50"
                onClick={closeMenu}
                role="menuitem"
                tabIndex={0}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
