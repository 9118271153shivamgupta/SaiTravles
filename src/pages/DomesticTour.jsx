import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import TourCard from '../components/TourCard'; // Importing your card component
import { Compass } from 'lucide-react';

const DomesticTour = () => {
  const navigate = useNavigate();
  
  // Filters ONLY domestic category tours
  const domesticPackages = tourData.filter(item => item.category === 'domestic');

  const handleViewDetails = (id) => {
    navigate(`/tour/${id}`);
  };

  const handleBookNow = (title) => {
    // Dynamic redirection to booking or direct enquiry action
    navigate(`/contact?package=${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* --- HERO BANNER AREA --- */}
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
            Discover breathtaking landscapes, magical heritage, and timeless cultural destinations across India with Shree Sai Travels.
          </p>
        </div>
      </div>

      {/* --- DYNAMIC CARD GRID AREA --- */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        {domesticPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {domesticPackages.map((tour) => (
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
            <p className="text-slate-400 font-bold text-sm">No domestic packages found at the moment.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default DomesticTour;