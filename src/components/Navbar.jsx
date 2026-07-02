import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '../data/menuData';
import NavbarBookingForm from './NavbarBookingForm'; // Lead Form Import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // Form Control State
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-md transition-all duration-300 border-b-2 border-amber-500">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Height set to h-20 for perfect vertical scaling matching image_7c3bdf.png */}
          <div className="flex justify-between h-30 items-center gap-4">
            
            {/* Logo Section - Left Extreme */}
            <Link to="/" className="flex items-center shrink-0 py-1">
              <img 
                src="/logo.png" 
                alt="Shree Sai Travels Logo" 
                className="h-30 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </Link>

            {/* Desktop Navigation Links - Middle Horizontal Flow */}
            <div className="hidden lg:flex items-center gap-x-4 xl:gap-x-7 justify-center flex-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`text-xs xl:text-sm font-black tracking-wide transition-all duration-200 relative py-2 uppercase whitespace-nowrap text-center
                      ${isActive ? 'text-sky-600' : 'text-sky-950 hover:text-amber-500'}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Animated Premium Button - Right Extreme */}
            <div className="hidden lg:block shrink-0">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="relative overflow-hidden group px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-black tracking-wider shadow-md transition-all duration-300 hover:bg-amber-500 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 uppercase whitespace-nowrap"
              >
                {/* Glow Element Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-sky-950 hover:text-sky-600 p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Responsive Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-6 flex flex-col gap-2 transition-all duration-300">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-bold uppercase transition-all tracking-wide
                    ${isActive ? 'bg-slate-950 text-amber-400 font-black' : 'text-white hover:bg-slate-800'}`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Mobile Action Button */}
            <div className="pt-4 border-t border-slate-800 mt-2">
              <button 
                onClick={() => { setIsOpen(false); setIsFormOpen(true); }}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-center flex items-center justify-center gap-2 shadow-lg hover:bg-amber-400 active:scale-95 transition-all uppercase tracking-wider text-sm"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Dynamic Pop-up Lead Form Portal */}
      <NavbarBookingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;