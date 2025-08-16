import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="Resurrection Church of Christ of All Nations Logo"
            className="h-20 w-auto max-w-[200px] object-contain"
          />
        
          {/* Copyright with better spacing */}
          <div className="text-center">
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              &copy; {new Date().getFullYear()} Resurrection Church of Christ of All Nations.
            </p>
            <p className="text-slate-400 text-sm mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;