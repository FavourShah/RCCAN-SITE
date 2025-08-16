import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center w-full justify-between md:justify-start">
            <div className="flex items-center flex-shrink-0 w-1/3 md:w-24">
              <img
                src="/images/logo.png"
                alt="Church Logo"
                className="w-16 h-16 p-1 object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-800">
                Resurrection Church of Christ of All Nations
              </span>
            </div>
            <button
              className="md:hidden flex-shrink-0 w-1/3 flex justify-end"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium"
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-slate-700 hover:text-blue-600 font-medium"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;