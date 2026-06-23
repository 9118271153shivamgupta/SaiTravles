import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HomeAboutWelcome = ({ showReadMore = true }) => {
  const navigate = useNavigate();

  const services = [
    "Safe and comfortable taxi services in and out of the city, with special arrangements for long distance journeys.",
    "Timely pick-up and drop facility so that passengers do not face any kind of trouble.",
    "Custom tour plans for families and groups, with comfortable travel and safe environment.",
    "Specially designed tour packages for religious journeys, with experienced drivers and route knowledge.",
    "Safe and organized travel services to major religious and tourist destinations in Nepal.",
    "Reliable transport facility for weddings, events and corporate requirements.",
    "Domestic and international flight ticket booking facility, with proper guidance and assistance."
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight mb-4">
          Welcome To  Shree Sai Travels ✨
        </h2>
        
        {/* Intro Paragraph */}
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
          Sia Travels is a professional and reliable travel service company, established with the aim of providing safe, comfortable and timely travel facilities to the travelers. We provide our services from Gorakhpur all over India and Nepal and provide a reliable solution for all types of travel needs.
        </p>

        {/* Key Services Subheading */}
        <div className="border-t border-slate-100 pt-8">
          <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-6">
            Our Key Services
          </h3>
          
          {/* Services List with Icons */}
          <ul className="space-y-4 max-w-4xl">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conditional "Read More" Button (Home par dikhega, About par nahi) */}
        {showReadMore && (
          <div className="mt-10 pt-4">
            <button
              onClick={() => {
                navigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Page top par smooth scroll karega
              }}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-purple-600/20 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer text-sm"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default HomeAboutWelcome;