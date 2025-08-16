import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Resurrection Church of Christ of All Nations Logo"
            className="h-20 w-auto max-w-[200px] object-contain"
          />
        
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Resurrection Church of Christ of All Nations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;