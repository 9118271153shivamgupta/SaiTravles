import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import TourCard from '../components/TourCard';
import { Mountain } from 'lucide-react';

const HillStationTour = () => {
  const navigate = useNavigate();
  
  // Filters ONLY hill station category tours
  const hillStationPackages = tourData.filter(item => item.category === 'hillstation');

  const handleViewDetails = (id) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (title) => {
    navigate(`/contact?package=${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* --- HERO BANNER AREA --- */}
      <div className="relative bg-slate-900 text-white py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-3xl mx-auto space-y-3 z-10">
          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <Mountain className="w-3.5 h-3.5" /> Serene Mountain Escapes
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Hill Station Packages
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Escape to cooler climates, panoramic misty peaks, and peaceful valleys with our premium mountain getaways.
          </p>
        </div>
      </div>

      {/* --- DYNAMIC CARD GRID AREA --- */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {hillStationPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {hillStationPackages.map((tour) => (
              <TourCard 
                key={tour.id} 
                tour={tour} 
                onViewDetails={handleViewDetails} 
                onBookNow={handleBookNow} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 p-8">
            <p className="text-slate-400 font-bold text-sm">No hill station packages found at the moment.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default HillStationTour;