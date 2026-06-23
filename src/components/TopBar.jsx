import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck } from 'lucide-react';
import { topBarLinks } from '../data/menuData';

const TopBar = () => {
  return (
    <div className="bg-purple-950 text-purple-100 text-xs py-2.5 px-4 border-b border-purple-900/50 hidden sm:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Right Side: Direct Call to Action */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:+919118271153" 
            className="bg-purple-900/60 hover:bg-amber-500 hover:text-purple-950 px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1.5 font-semibold text-white tracking-wide border border-purple-800/60"
          >
            <Phone className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>Call Now: +91 9118271153</span>
          </a>
        </div>
        {/* Left Side: Trust Links Menu */}
        <div className="flex items-center gap-5">
          {topBarLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              className="hover:text-amber-300 transition-colors duration-200 flex items-center gap-1 font-medium"
            >
              {link.name === "Certificate" && <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
              {link.name}
            </Link>
          ))}
        </div>

        

      </div>
    </div>
  );
};

export default TopBar;