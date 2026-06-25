import React, { useRef } from 'react';
import { tourCategories, tourData } from '../data/TourData';
import TourCard from './TourCard';
import { Sparkles, Map, LayoutGrid } from 'lucide-react';

const TourPlanner = ({ activeCategoryFilter = null, showViewMoreButton = true, onViewCategory, onViewDetails, onBookNow }) => {
  // References map to scroll directly into the sub-section
  const sectionRefs = {
    domestic: useRef(null),
    international: useRef(null),
    religious: useRef(null),
    hillstation: useRef(null)
  };

 const handleTabScroll = (sectionId) => {
  if (activeCategoryFilter) {
    // Agar direct page par hain (jaise /domestic-tour) aur doosre tab par click kiya toh redirect karega
    onViewCategory(sectionId);
  } else {
    // Home page par hain toh usi section par smooth scroll karega
    const targetRef = sectionRefs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

  // Logic to determine which modules to render
  const activeCategories = activeCategoryFilter 
    ? tourCategories.filter(cat => cat.id === activeCategoryFilter)
    : tourCategories;

  return (
    <section className="py-16 bg-slate-50/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-full px-4 py-1 text-purple-700 text-xs font-bold tracking-wide uppercase mb-3 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Tour Planner
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
            Perfect Travel Packages
          </h2>
          {/* Requested tagline implemented */}
          <p className="text-purple-600 font-serif italic text-base md:text-lg">
            "Journeys That Speak to Your Soul."
          </p>
        </div>

        {/* --- DYNAMIC STICKY TAB NAVIGATOR --- */}
        <div className="flex justify-center mb-16 sticky top-[72px] z-40 drop-shadow-sm">
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-100 flex gap-1 max-w-full overflow-x-auto scrollbar-none">
            {tourCategories.map((category) => {
              const isActive = activeCategoryFilter 
                ? activeCategoryFilter === category.id 
                : false;
              return (
                <button
                  key={category.id}
                  onClick={() => handleTabScroll(category.id)}
                  className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20' 
                      : 'text-slate-500 hover:text-purple-600 hover:bg-slate-50'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- RENDER TARGET CATEGORIES SECTIONS --- */}
        <div className="space-y-24">
          {activeCategories.map((category) => {
            // Filters dynamic matching node array
            const filteredTours = tourData.filter(tour => tour.category === category.id);
            // If viewing home panel overview, slice up to 6 item cards maximum
            const itemsToRender = activeCategoryFilter ? filteredTours : filteredTours.slice(0, 6);

            return (
              <div 
                key={category.id} 
                ref={sectionRefs[category.id]}
                className="scroll-mt-32 border-b border-slate-100/80 pb-12 last:border-none"
              >
                {/* Subsection Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-purple-600/20">
                      <Map className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase">
                        {category.name} Packages
                      </h3>
                      <p className="text-xs text-slate-400 font-semibold">Book handpicked {category.name.toLowerCase()} premium getaways</p>
                    </div>
                  </div>
                </div>

                {/* Cards Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itemsToRender.map((tour) => (
                    <TourCard 
                      key={tour.id} 
                      tour={tour} 
                      onViewDetails={onViewDetails} 
                      onBookNow={onBookNow} 
                    />
                  ))}
                </div>

                {/* Conditional View More Section Button */}
                {showViewMoreButton && !activeCategoryFilter && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={() => onViewCategory(category.id)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 px-6 py-3 rounded-xl transition-all duration-200 group cursor-pointer"
                    >
                      <LayoutGrid className="w-4 h-4" />
                      View All {category.name} Trips
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TourPlanner;