// src/components/Footer.jsx
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronRight,
  Send
} from 'lucide-react';
import { servicesData } from '../data/ServicesData'; 

const Footer = () => {
  
  // Custom Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Cab Booking", path: "/cab-booking" },
    { name: "Domestic Tour", path: "/domestic-tour" },
    { name: "International Tour", path: "/international-tour" },
    { name: "Religious Tour", path: "/religious-tour" }
  ];

  // Tour Packages Links from image_bc96fe.png
  const tourPackages = [
    { name: "Kedarnath Tour", path: "/packages/kedarnath" },
    { name: "Thailand Tour", path: "/packages/thailand" },
    { name: "Nepal Delight Package", path: "/packages/nepal" },
    { name: "Dubai Tour", path: "/packages/dubai" },
    { name: "Singapore Tour", path: "/packages/singapore" },
    { name: "Bhutan Tour", path: "/packages/bhutan" },
    { name: "Sri Lanka Tour", path: "/packages/srilanka" },
    { name: "Contact for Booking", path: "/contact" }
  ];

  return (
    <footer className="bg-[#051A30] text-slate-300 pt-16 pb-6 px-4 md:px-8 border-t-4 border-[#DE6910] selection:bg-[#DE6910] selection:text-white">
      {/* 5 Columns Grid Responsive Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 mb-12">
        
        {/* --- GRID 1: LOGO, NAME & SOCIALS --- */}
        <div className="space-y-5">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white uppercase flex items-center gap-1">
              Shree Sai <span className="text-[#DE6910]">Travels</span>
            </span>
            <p className="text-[10px] text-[#4D9FE4] font-bold tracking-widest uppercase mt-0.5">
              Safe • Reliable • Comfortable
            </p>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Your trusted travel partner for domestic, international, and custom tailored pilgrim tour packages.
          </p>
          
          {/* Social Media Row with SVGs */}
          <div className="flex items-center gap-2.5 pt-1">
            <a href="#" className="w-7 h-7 rounded-lg bg-slate-800/80 text-white hover:bg-[#DE6910] transition-colors flex items-center justify-center cursor-pointer" aria-label="Facebook">
              <svg className="w-3.c5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-lg bg-slate-800/80 text-white hover:bg-[#DE6910] transition-colors flex items-center justify-center cursor-pointer" aria-label="Twitter">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-lg bg-slate-800/80 text-white hover:bg-[#DE6910] transition-colors flex items-center justify-center cursor-pointer" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 text-white stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="w-7 h-7 rounded-lg bg-slate-800/80 text-white hover:bg-[#DE6910] transition-colors flex items-center justify-center cursor-pointer" aria-label="Telegram">
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* --- GRID 2: QUICK NAVIGATION --- */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-base tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#DE6910]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs font-semibold">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.path} className="hover:text-[#4D9FE4] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DE6910] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- GRID 3: OUR SERVICES --- */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-base tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#DE6910]">
            Our Services
          </h4>
          <ul className="space-y-2 text-xs font-semibold">
            {servicesData && servicesData.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a href="/services" className="hover:text-[#4D9FE4] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#4D9FE4] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span className="truncate max-w-[150px]">{service.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- GRID 4: NEW TOUR PACKAGES (image_bc96fe.png) --- */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-base tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#DE6910]">
            Tour Packages
          </h4>
          <ul className="space-y-2 text-xs font-semibold">
            {tourPackages.map((pkg, idx) => (
              <li key={idx}>
                <a href={pkg.path} className="hover:text-[#4D9FE4] transition-colors flex items-center gap-1 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#DE6910] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  <span className={`${pkg.name === "Contact for Booking" ? "text-[#DE6910] font-bold" : ""}`}>{pkg.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- GRID 5: OFFICE ADDRESS & CONTACT DETAILS (image_bc93a2.png) --- */}
        <div className="space-y-4">
          <h4 className="text-white font-extrabold text-base tracking-tight relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#DE6910]">
            Office Address
          </h4>
          <div className="space-y-3.5 text-xs font-medium">
            
            {/* Real Accurate Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#DE6910] shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed font-semibold">
                Shree Sai Trip,<br />
                Manbela khas, F.C.I Road,<br />
                Gorakhpur U.P - 273013
              </span>
            </div>

            {/* WhatsApp Direct API Link with Multiple Numbers */}
            <div className="flex items-start gap-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 fill-emerald-500/10 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <span className="text-slate-400 block font-bold text-[11px] uppercase tracking-wider">WhatsApp Contact:</span>
                <div className="flex flex-wrap gap-x-2 text-emerald-400 font-bold">
                  <a href="https://wa.me/917068681745" target="_blank" rel="noreferrer" className="hover:underline">7068681745</a>
                  <span className="text-slate-600">,</span>
                  <a href="https://wa.me/916307726624" target="_blank" rel="noreferrer" className="hover:underline">6307726624</a>
                </div>
              </div>
            </div>

            {/* Exact Direct Calling Number */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#4D9FE4] shrink-0" />
              <a href="tel:7068681745" className="hover:text-white font-black text-sm text-[#4D9FE4] tracking-wide transition-colors">
                7068681745
              </a>
            </div>

            {/* Real Updated Gmail Address */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#DE6910] shrink-0" />
              <a href="mailto:shreesaitrip@gmail.com" className="hover:text-[#4D9FE4] font-semibold transition-colors break-all">
                shreesaitrip@gmail.com
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* --- SUB-FOOTER BOTTOM STRIP --- */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-semibold">
        <p>© {new Date().getFullYear()} Shree Sai Trip. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Designed with Premium Code by <span className="text-[#4D9FE4]">I-Xen Techonologies.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;