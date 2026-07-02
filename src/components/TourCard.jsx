// src/components/TourCard.jsx
import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import NavbarBookingForm from './NavbarBookingForm'; 

const TourCard = ({ tour, onViewDetails }) => {
  // State to manage modal popup status
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
        {/* Image Area Block */}
        <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-lg text-xs font-black shadow-sm flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-sky-600 stroke-[2.5]" />
            {tour.duration}
          </div>
        </div>

        {/* Text Info Area Block */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors  ">
              {tour.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4 font-medium">
              {tour.description}
            </p>
          </div>

          <div>
            {/* Core Action Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onViewDetails(tour.id)}
                className="text-xs font-black text-slate-700 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center uppercase tracking-wider"
              >
                View Details
              </button>
              
              {/* Clean Direct Book Now Toggle */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="text-xs font-black text-slate-950 bg-amber-500 hover:bg-amber-400 py-2.5 px-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1 cursor-pointer text-center uppercase tracking-wider border border-amber-400"
              >
                Book Now
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTEGRATED BOOKING FORM MODAL CALL --- */}
      <NavbarBookingForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        defaultDestination={tour.title} // Autofill destination field with package title
      />
    </>
  );
};

export default TourCard;