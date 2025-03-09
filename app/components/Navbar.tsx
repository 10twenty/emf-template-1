'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Reduced height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="text-lg font-serif text-gray-900">
            Beauty Service HK
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="mailto:info@beautyservice.hk"
              className="bg-primary text-white text-sm px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
            >
              Email Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'max-h-48' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-2 space-y-2">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="block text-gray-600 hover:text-primary transition-colors py-1"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="block text-gray-600 hover:text-primary transition-colors py-1"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block text-gray-600 hover:text-primary transition-colors py-1"
            >
              Contact
            </a>
            <a
              href="mailto:info@beautyservice.hk"
              className="inline-block bg-primary text-white px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 