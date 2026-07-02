// src/components/TaxiBookingSection.jsx
import React, { useState } from 'react';
import { vehicleCategories } from '../data/VehicleData';
import { Clock, Star, ArrowUpRight, Sparkles } from 'lucide-react';
import CabBookingForm from './CabBookingForm';

const TaxiBookingSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeCab, setActiveCab] = useState('');
  
  const handleBookingTrigger = (vehicleName) => {
    setActiveCab(vehicleName);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-8 selection:bg-amber-500 selection:text-slate-950">
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
          Taxi-Booking
        </h1>
        <p className="text-sky-600 font-serif italic text-base font-bold">
          "Journeys That Speak to Your Soul — Premium Fleet Management"
        </p>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
      </div>

      {/* RENDER DYNAMIC SEGMENTS */}
      <div className="max-w-7xl mx-auto space-y-20">
        {vehicleCategories.map((category) => (
          <div key={category.id} className="space-y-8">
            
            {/* Category Subheading Row */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="p-2.5 bg-slate-900 rounded-xl text-amber-400 shadow-sm border border-slate-800">
                <Sparkles className="w-5 h-5 fill-amber-400/20 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                  {category.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-extrabold">
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Premium Cards Grid Structure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.vehicles.map((vehicle, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Thumbnail Canvas */}
                  <div className="relative h-56 bg-slate-100 overflow-hidden shrink-0">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Duration Badge */}
                    <div className="absolute top-4 left-4 bg-sky-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> {vehicle.duration}
                    </div>

                    {/* Floating Rating Badge */}
                    <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {vehicle.rating}
                    </div>
                  </div>

                  {/* Description Meta Block */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors uppercase">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold line-clamp-3">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Footer Action Buttons */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="grid grid-cols-2 gap-3">
                        {/* <button 
                          onClick={() => alert(`Details view for: ${vehicle.name}`)}
                          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs py-3 rounded-xl transition-colors text-center cursor-pointer uppercase tracking-wider"
                        >
                          View Details
                        </button> */}
                        
                        <button 
                          onClick={() => handleBookingTrigger(vehicle.name)}
                          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-3 rounded-xl transition-all shadow-sm text-center flex items-center justify-center gap-1 group/btn cursor-pointer uppercase tracking-wider border border-amber-400"
                        >
                          <span>Book Now</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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

      {/* MODAL LINKEDED PERFECTLY WITH Z-9999 PROPS */}
      <CabBookingForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        selectedCabName={activeCab} 
      />

    </div>
  );
};

export default TaxiBookingSection;