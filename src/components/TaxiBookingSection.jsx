import React from 'react';
import { vehicleCategories } from '../data/VehicleData';
import { Clock, Star, ArrowUpRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

const TaxiBookingSection = () => {
  
  const handleBookingTrigger = (vehicleName) => {
    alert(`Redirecting to reservation form for: ${vehicleName}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-8 selection:bg-purple-600 selection:text-white">
      
      {/* HEADER SECTION (Inspired by image_c05c61.png Premium Layout) */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Perfect Travel Packages & Fleet
        </h1>
        <p className="text-purple-600 font-serif italic text-sm md:text-base">
          "Journeys That Speak to Your Soul — Premium Fleet Management"
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* RENDER DYNAMIC SEGMENTS */}
      <div className="max-w-7xl mx-auto space-y-20">
        {vehicleCategories.map((category) => (
          <div key={category.id} className="space-y-8">
            
            {/* Category Subheading Row */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-2.5 bg-purple-600 rounded-xl text-white shadow-md shadow-purple-200">
                <Sparkles className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight">
                  {category.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-medium">
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Premium Cards Grid Structure (Exactly like image_c05c61.png packages grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.vehicles.map((vehicle, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Thumbnail Canvas */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden shrink-0">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Duration Badge (Top-Left) */}
                    <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                      <Clock className="w-3.5 h-3.5" /> {vehicle.duration}
                    </div>

                    {/* Floating Rating Badge (Top-Right) */}
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {vehicle.rating}
                    </div>
                  </div>

                  {/* Description Meta Block */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-600 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium line-clamp-3">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Pricing & Double Action Button Footer Layout */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-wider">Starting From</span>
                        <div className="text-right">
                          <span className="text-xl md:text-2xl font-black text-purple-600">{vehicle.price}</span>
                          <span className="text-[10px] text-slate-400 block font-semibold">Base Tariff Plan</span>
                        </div>
                      </div>

                      {/* Twin Button Grid (Matches look & feel of image_c05c61.png) */}
                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => alert(`Details view for: ${vehicle.name}`)}
                          className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs py-3 rounded-xl border border-slate-200 transition-colors text-center cursor-pointer"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => handleBookingTrigger(vehicle.name)}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3 rounded-xl transition-all shadow-sm shadow-purple-200 text-center flex items-center justify-center gap-1 group/btn cursor-pointer"
                        >
                          <span>Book Now</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TaxiBookingSection;