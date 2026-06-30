import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroBanners } from '../data/heroData';

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const length = heroBanners.length;

  // 5 seconds automatic slide shift interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer); 
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-slate-950">
      
      {/* --- Main Slides Container --- */}
      {heroBanners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform
            ${index === current 
              ? 'opacity-100 translate-x-0 scale-100 z-10' 
              : index < current 
                ? 'opacity-0 -translate-x-full scale-95 z-0 pointer-events-none' 
                : 'opacity-0 translate-x-full scale-95 z-0 pointer-events-none'
            }`}
        >
          {/* Logo Matched Sky Blue/Slate Dark Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-slate-900/60 to-slate-950/90 z-10" />
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover object-center"
          />

          {/* --- Central Content Area --- */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
            
            {/* Floating Tag (Matched to Orange Highlight) */}
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black bg-slate-900/80 backdrop-blur-md text-amber-400 mb-6 border-2 border-amber-500/30 shadow-md animate-bounce uppercase tracking-wider">
              {banner.tag}
            </span>

            {/* Typography Engine (Bigger, Bolder text specs) */}
            <div className="max-w-4xl transform transition-all duration-700 delay-300">
              <h2 className="text-xl md:text-3xl font-black text-white tracking-widest uppercase mb-4 drop-shadow-md">
                {banner.title}
              </h2>
              <h1 className="text-4xl md:text-7xl font-black text-amber-500 tracking-tight uppercase leading-none mb-6 drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)] font-sans">
                {banner.subtitle}
              </h1>
              <p className="text-sm md:text-lg text-slate-100 font-extrabold leading-relaxed max-w-3xl mx-auto drop-shadow-md tracking-wide">
                {banner.description}
              </p>
            </div>

            {/* Action Call Button (Slate Blue Base with Amber Hover states) */}
            <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-black uppercase tracking-widest shadow-xl shadow-black/40 hover:scale-105 transition-all cursor-pointer border border-amber-400">
              <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950 animate-pulse" />
              Explore This Tour
            </button>
          </div>
        </div>
      ))}

      {/* --- Manual Side Controller Arrows (Matched to Theme) --- */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 p-3 rounded-xl backdrop-blur-md transition-all active:scale-90 cursor-pointer border border-white/10 group shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform stroke-[3]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-slate-900/60 hover:bg-amber-500 text-white hover:text-slate-950 p-3 rounded-xl backdrop-blur-md transition-all active:scale-90 cursor-pointer border border-white/10 group shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform stroke-[3]" />
      </button>

      {/* --- Bottom Navigation Dots --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-slate-900/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-700/50 shadow-lg">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${index === current ? 'w-8 bg-amber-500 shadow shadow-amber-500/50' : 'w-2.5 bg-white/40 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HomeHero;