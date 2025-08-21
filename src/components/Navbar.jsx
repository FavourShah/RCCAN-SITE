import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Settings, Image, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: Info },
    { to: '/services', label: 'Services', icon: Settings },
    { to: '/gallery', label: 'Gallery', icon: Image },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
          : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Church Name */}
            <div className="flex items-center w-full justify-between md:justify-start">
              <div className="flex items-center flex-shrink-0 w-1/3 md:w-24">
                <div className="w-24 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-md border-2 border-blue-100 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                  Resurrection Church of Christ of All Nations
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 relative group"
                  >
                    <span>{item.label}</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex-shrink-0 w-1/3 flex justify-end p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-slate-700 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-slate-700 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    className={`block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50/70 transition-all duration-200 transform ${
                      isMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                    }}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            
            {/* Mobile Menu Footer - Optional */}
            <div className="px-4 py-3 border-t border-slate-200/50 bg-slate-50/50">
              <p className="text-xs text-center text-slate-600">
                Welcome to our community of faith
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Demo Content to Show Scroll Effect */}
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Enhanced Navbar Demo
            </h2>
            <p className="text-slate-600 mb-8">
              Scroll down to see the navbar background change and try the mobile menu!
            </p>
          </div>
        </div>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="py-16 px-4 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4">
              Section {i + 1}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              This is demo content to showcase the navbar functionality. The navbar will change its appearance as you scroll, and the mobile menu includes smooth animations and a backdrop overlay. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;