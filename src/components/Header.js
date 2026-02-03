import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100/50" role="banner">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo and College Name */}
          <Link to="/" className="flex items-center space-x-3 group" data-testid="logo-link">
            <img 
              src="https://svccollege.ac.in/images/logo.png" 
              alt="SVCET Logo" 
              className="w-14 h-14 object-contain group-hover:scale-110 transition-all duration-300 ease-out group-hover:drop-shadow-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-800 transition-colors" style={{display: 'none'}}>
              SVCET
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900 leading-tight tracking-tight">
                S.Veerasamy Chettiar College of
              </h1>
              <h2 className="text-sm text-primary-700 font-semibold tracking-wide">
                Engineering and Technology
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:scale-105 hover:shadow-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-300 ease-out hover:scale-105"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            data-testid="mobile-menu-button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100/50 bg-white/80 backdrop-blur-md" aria-label="Mobile navigation" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-out ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 hover:translate-x-1'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
