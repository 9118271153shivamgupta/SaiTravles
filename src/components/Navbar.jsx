import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '../data/menuData';
import NavbarForm from './NavbarForm'; // Lead Form Import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // Form Control State
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-28 items-center">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img 
                src="/logo.jpeg" 
                alt="Sia Travels Logo" 
                className="h-18 w-28 object-cover rounded-full border-2 border-purple-100 shadow-inner"
                // FIX: e.target ki jagah e.currentTarget use kiya taaki reliable ho
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="text-xl font-black text-purple-900 tracking-wider hidden sm:block">
                SIA TRAVELS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide transition-all duration-200 relative py-2
                      ${isActive ? 'text-purple-600 font-bold' : 'text-purple-900 hover:text-black'}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Animated Premium Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="relative overflow-hidden group px-6 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-bold tracking-wide shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                {/* Glow Element Effect (Make sure 'shimmer' is configured in tailwind.config.js) */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-purple-900 hover:text-purple-600 p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Responsive Menu */}
        {isOpen && (
          <div className="lg:hidden bg-purple-800 border-t border-purple-900 px-4 pt-2 pb-6 flex flex-col gap-2 transition-all duration-300">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all
                    ${isActive ? 'bg-purple-950 text-amber-300 font-bold' : 'text-white hover:bg-purple-700'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Mobile Action Button */}
            <div className="pt-4 border-t border-purple-700 mt-2">
              <button 
                onClick={() => { setIsOpen(false); setIsFormOpen(true); }}
                className="w-full py-3 rounded-xl bg-white text-purple-900 font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:bg-purple-50 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Dynamic Pop-up Lead Form Portal */}
      <NavbarForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;