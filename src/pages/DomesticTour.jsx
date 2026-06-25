import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import { MapPin, Clock, ArrowRight, Compass, Sparkles, PhoneCall } from 'lucide-react';

const DomesticTour = () => {
  const navigate = useNavigate();
  
  // 1. Filter only domestic tours from TourData.jsx
  const domesticPackages = tourData.filter(item => item.category === 'domestic');
  
  // 2. State to manage currently active state tab display
  const [activeStateId, setActiveStateId] = useState('');

  useEffect(() => {
    if (domesticPackages.length > 0) {
      setActiveStateId(domesticPackages[0].id);
    }
  }, []);

  const activeTour = domesticPackages.find(t => t.id === activeStateId);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* --- HERO BANNER BANNER AREA --- */}
      <div className="relative bg-slate-900 text-white py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-3xl mx-auto space-y-3 z-10">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" /> Incredible India Exploration
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Domestic Tour Packages
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Discover breathtaking landscapes, magical heritage, and timeless spiritual destinations with Shree Sai Travels.
          </p>
        </div>
      </div>

      {/* --- STATE TAB NAVIGATION BAR --- */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-slate-200">
          {domesticPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setActiveStateId(pkg.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer shadow-sm ${
                activeStateId === pkg.id
                  ? 'bg-purple-600 text-white shadow-purple-600/20 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {pkg.title} Packages
            </button>
          ))}
        </div>
      </div>

      {/* --- MAIN INTERACTIVE CONTAINER CONTENT --- */}
      {activeTour && (
        <div className="max-w-6xl mx-auto px-4 mt-10 space-y-12">
          
          {/* Main Showcase Hero Block */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image Section */}
            <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-slate-100">
              <img 
                src={activeTour.image} 
                alt={activeTour.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-black px-3 py-1.5 rounded-xl flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> {activeTour.duration}
              </div>
            </div>

            {/* Right Meta Description Info Block */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                    {activeTour.title} Tour Package
                  </h2>
                  <div className="text-right shrink-0">
                    <span className="block text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Starting From</span>
                    <span className="text-xl md:text-2xl font-black text-purple-600">{activeTour.price}</span>
                  </div>
                </div>
                <hr className="border-slate-100" />
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                  {activeTour.overview || activeTour.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-50">
                <button 
                  onClick={() => navigate(`/tour/${activeTour.id}`)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  Book Full {activeTour.title} Package <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* --- POPULAR SUB-PACKAGES / PLACES TO VISIT GRID --- */}
          <div className="space-y-6">
            <div className="text-center max-w-sm mx-auto space-y-1">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center justify-center gap-1.5">
                <Sparkles className="w-5 h-5 text-amber-500" /> POPULAR {activeTour.title.toUpperCase()} PACKAGES
              </h3>
              <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeTour.popularPlaces?.map((place, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col group"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-purple-600" /> Destination
                    </div>
                  </div>

                  {/* Card Body Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-800 text-sm tracking-tight line-clamp-1">
                        {place.name}
                      </h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                        {place.details}
                      </p>
                    </div>

                    {/* Instant Action Book Button */}
                    <button 
                      onClick={() => navigate(`/tour/${activeTour.id}`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 rounded-lg transition-colors shadow-xs text-center cursor-pointer mt-1"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default DomesticTour;