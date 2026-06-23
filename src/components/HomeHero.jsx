import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroBanners } from '../data/heroData';

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const length = heroBanners.length;

  // Har 5 seconds (5000ms) me banner badalne ka logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer); // Cleanup timer component unmount hone par
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
      
      {/* --- Main Slides Container --- */}
      {heroBanners.map((banner, index) => (
        <div
          key={banner.id}
          /* >>>>>>> READ THIS: SMOOTH SLIDING & FADE ANIMATION <<<<<<< */
          /* Is block me hamne transitions ko smoothly left-to-right animate kiya hai */
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform
            ${index === current 
              ? 'opacity-100 translate-x-0 scale-100 z-10' 
              : index < current 
                ? 'opacity-0 -translate-x-full scale-95 z-0 pointer-events-none' 
                : 'opacity-0 translate-x-full scale-95 z-0 pointer-events-none'
            }`}
        >
          {/* Background Image with Dark Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/60 to-slate-950/85 z-10" />
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover object-center"
          />

          {/* --- Central Content Area --- */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
            {/* Floating Tag */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md text-amber-300 mb-6 border border-white/20 animate-bounce">
              {banner.tag}
            </span>

            {/* >>>>>>> READ THIS: ONLY TEXT NO BACKGROUND NO BOX <<<<<<< */}
            {/* Saari background, blur, shadow aur borders ki classes hata di hain */}
            {/* Ab sirf pure text bada hokar bina kisi box ke screen par float karega */}
            <div className="max-w-3xl transform transition-all duration-700 delay-300">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase mb-3 drop-shadow-lg">
                {banner.title}
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-amber-400 tracking-tight uppercase leading-none mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                {banner.subtitle}
              </h1>
              <p className="text-base md:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                {banner.description}
              </p>
            </div>

            {/* Quick Action Button Over Image */}
            <button className="btn-primary mt-10 px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-purple-900/40 hover:scale-105 transition-all">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Explore This Tour
            </button>
          </div>
        </div>
      ))}

      {/* --- Manual Slide Controllers (Left/Right Arrows) --- */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-purple-600 hover:bg-purple-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all active:scale-90 cursor-pointer border border-white/10 group"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-purple-600/40 hover:bg-purple-600 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all active:scale-90 cursor-pointer border border-white/10 group"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* --- Bottom Navigation Dots/Indicators --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${index === current ? 'w-7 bg-amber-400' : 'w-2.5 bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HomeHero;