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
          <div className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-amber-400 text-xs font-black tracking-wider uppercase mb-3 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Tour Planner
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 uppercase">
            Perfect Travel Packages
          </h2>
          {/* Brand Tagline matched to Deep Sky/Blue Accent context */}
          <p className="text-sky-600 font-serif italic text-base md:text-lg font-bold">
            "Journeys That Speak to Your Soul."
          </p>
        </div>

        {/* --- DYNAMIC STICKY TAB NAVIGATOR --- */}
        <div className="flex justify-center mb-16 sticky top-[72px] z-40 drop-shadow-sm">
          <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-slate-200 flex gap-1 max-w-full overflow-x-auto scrollbar-none">
            {tourCategories.map((category) => {
              const isActive = activeCategoryFilter 
                ? activeCategoryFilter === category.id 
                : false;
              return (
                <button
                  key={category.id}
                  onClick={() => handleTabScroll(category.id)}
                  className={`px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 shadow-md' 
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
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
                className="scroll-mt-32 border-b border-slate-200 pb-12 last:border-none"
              >
                {/* Subsection Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 font-black shadow-sm border border-slate-800">
                      <Map className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        {category.name} Packages
                      </h3>
                      <p className="text-xs text-slate-400 font-extrabold">Book handpicked {category.name.toLowerCase()} premium getaways</p>
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
                      className="inline-flex items-center gap-2 text-xs font-black text-slate-900 bg-amber-500 hover:bg-amber-400 border border-amber-500 px-6 py-3.5 rounded-xl transition-all duration-200 group cursor-pointer uppercase tracking-wider"
                    >
                      <LayoutGrid className="w-4 h-4 text-slate-950 stroke-[2.5]" />
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