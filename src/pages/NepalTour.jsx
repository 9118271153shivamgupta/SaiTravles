import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import TourCard from '../components/TourCard';
import { Globe } from 'lucide-react';

const NepalTour = () => {
  const navigate = useNavigate();
  
  // Filters ONLY nepal category tours
  const nepalPackages = tourData.filter(item => item.category === 'nepalTour');

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
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-3xl mx-auto space-y-3 z-10">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <Globe className="w-3.5 h-3.5" /> Himalayan Wonders Await
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Nepal Tour Packages
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Explore sacred shrines, magnificent views of Mt. Everest, and beautiful valleys with our seamless Nepal holiday planning.
          </p>
        </div>
      </div>

      {/* --- DYNAMIC CARD GRID AREA --- */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {nepalPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nepalPackages.map((tour) => (
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
            <p className="text-slate-400 font-bold text-sm">No Nepal packages found at the moment.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default NepalTour;