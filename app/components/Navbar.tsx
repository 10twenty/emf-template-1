'use client';

import { useState, useEffect, useRef } from 'react';
import { content } from '../../config/content';

interface NavbarProps {
  companyName: string;
}

export default function Navbar({ companyName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset = 80; // Height of the fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const getLinkClassName = (section: string) => {
    return `text-sm font-medium transition-colors hover:text-primary ${
      activeSection === section ? 'text-primary' : 'text-gray-600'
    }`;
  };

  const getMobileLinkClassName = (section: string) => {
    return `block text-base font-medium transition-colors hover:text-primary ${
      activeSection === section ? 'text-primary' : 'text-gray-600'
    }`;
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="text-lg font-serif text-gray-900">
            {companyName}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, 'home')}
              className={getLinkClassName('home')}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className={getLinkClassName('services')}
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={getLinkClassName('about')}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={getLinkClassName('contact')}
            >
              Contact
            </a>
            <a
              href={`mailto:${content.contact.info.email}`}
              className="bg-primary text-white text-sm px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
            >
              Email Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
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
          ref={menuRef}
          className={`md:hidden absolute top-12 left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="py-6 space-y-4">
              <a
                href="#"
                onClick={(e) => scrollToSection(e, 'home')}
                className={getMobileLinkClassName('home')}
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className={getMobileLinkClassName('services')}
              >
                Products
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className={getMobileLinkClassName('about')}
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className={getMobileLinkClassName('contact')}
              >
                Contact
              </a>
              <div className="pt-2">
                <a
                  href={`mailto:${content.contact.info.email}`}
                  className="inline-block bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-colors hover-glow"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 