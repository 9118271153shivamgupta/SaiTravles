import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const TourCard = ({ tour, onViewDetails, onBookNow }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
      {/* Image Block */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-purple-950 px-3 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-purple-600" />
          {tour.duration}
        </div>
      </div>

      {/* Info Block */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-1.5 group-hover:text-purple-600 transition-colors">
            {tour.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {tour.description}
          </p>
        </div>

        <div>
          {/* Price Layout */}
          <div className="flex items-center justify-between border-t border-slate-50 pt-3.5 mb-4">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Starting From</span>
            <div className="flex items-center text-purple-600 font-black text-lg gap-0.5">
              <Tag className="w-4 h-4" />
              {tour.price}
            </div>
          </div>

          {/* Core Navigation Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(tour.id)}
              className="text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center"
            >
              View Details
            </button>
            <button
              onClick={() => onBookNow(tour.title)}
              className="text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 py-2.5 px-3 rounded-xl shadow-md shadow-purple-600/10 transition-colors flex items-center justify-center gap-1 cursor-pointer text-center"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;