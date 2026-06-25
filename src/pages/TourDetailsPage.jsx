import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import TourDetailForm from './TourDetailForm';
import { 
  ArrowLeft, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  X,
  Send,
  Zap
} from 'lucide-react';

const TourDetailsPage = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  
  // States for Popup Modal Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubPlace, setSelectedSubPlace] = useState('');

  const tour = tourData.find(item => item.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-sm">
          <p className="text-slate-500 font-black mb-4">Package Details Not Found!</p>
          <button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer">
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Handle opening the modal
  const openBookingModal = (subPlaceName = '') => {
    setSelectedSubPlace(subPlaceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 selection:bg-purple-500 selection:text-white relative">
      
      {/* --- TOP BRANDING MINI HEADER --- */}
      <div className="bg-slate-950 text-white/80 py-3 px-4 text-xs font-medium tracking-wide border-b border-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[13px]">Shree Sai Travels</span>
          <span className="flex items-center gap-2 text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Safe • Reliable • Premium Quality Fleet
          </span>
        </div>
      </div>

      {/* --- PREMIUM WIDE HERO BANNER (Exactly as per image_8ab901.jpg) --- */}
      <div className="relative h-[380px] md:h-[440px] bg-slate-950 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover opacity-40 object-center" 
        />
        {/* Cinematic shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>
        
        {/* Back Button with Left Arrow */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-6 left-6 md:left-10 bg-white text-slate-900 p-2.5 rounded-xl shadow-xl hover:bg-slate-100 transition-all cursor-pointer z-20 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Banner Content Infrastructure */}
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            {/* Left Side Content & Tags */}
            <div className="space-y-3 text-white max-w-2xl">
              <div className="inline-flex items-center gap-1 bg-purple-600 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
                <Zap className="w-3 h-3 text-amber-300 fill-amber-300" /> Premium Selected Route
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none drop-shadow-md">
                {tour.title} Ultimate Route
              </h1>
              
              {/* Pill Outline Meta Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-purple-400" /> {tour.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> All Handpicked Transit Points
                </span>
              </div>
            </div>

            {/* Right Side Instant Action Button */}
            <div className="shrink-0 mb-1">
              <button 
                onClick={() => openBookingModal(tour.title)} // <-- Yahan 'handleOpenModal' ko 'openBookingModal' se replace kiya hai
                className="w-full md:w-auto bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 tracking-wider uppercase"
              >
                <span>Book This Package Now</span>
                <Send className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* --- CONTENT WORKSPACE (Exactly as per image_8a5ec8.png) --- */}
      <div className="max-w-6xl mx-auto px-4 mt-10 relative z-10 space-y-12">
        
        {/* 1. HORIZONTAL OVERVIEW PANEL CARD */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Side Image */}
          <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[320px] bg-slate-100">
            <img 
              src={tour.image} 
              alt={tour.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {tour.duration}
            </div>
          </div>

          {/* Right Side Meta Data Block */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                  {tour.title} Tour Package
                </h2>
                <div className="text-right shrink-0">
                  <span className="block text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Starting From</span>
                  <span className="text-xl md:text-2xl font-black text-purple-600">{tour.price}</span>
                </div>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal whitespace-pre-line border-t border-slate-100 pt-4">
                {tour.overview || tour.description}
              </p>
            </div>

            <div className="pt-2">
              <button 
                onClick={() => openBookingModal(tour.title)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer uppercase tracking-wider"
              >
                <span>Book Full {tour.title} Package</span>
                <Send className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. POPULAR SUBS 4-COLUMN GRID LAYOUT */}
        {tour.popularPlaces && tour.popularPlaces.length > 0 && (
          <div className="space-y-8">
            {/* Center Header */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" /> POPULAR {tour.title.toUpperCase()} PACKAGES
              </h3>
              <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* Premium 4-Column Grid System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tour.popularPlaces.map((place, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-44 bg-slate-100 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 border border-slate-100">
                      <MapPin className="w-3 h-3 text-purple-600" /> Destination
                    </div>
                  </div>

                  {/* Card Content & Action Trigger */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-sm tracking-tight line-clamp-1 uppercase">
                        {place.name}
                      </h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 font-medium">
                        {place.details}
                      </p>
                    </div>

                    <button 
                      onClick={() => openBookingModal(`${tour.title} (${place.name})`)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-xs text-center cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. STANDARD GUIDELINES MODULE */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/60 shadow-sm space-y-6">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2.5">
            <ShieldCheck className="w-7 h-7 text-emerald-500" />
            Shree Sai Travels Standard Guidelines
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-slate-800">Professional Verified Drivers</h5>
                <p className="text-xs text-slate-500 mt-1 font-medium">Highly certified route specialist captains for secure regional transits.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-slate-800">24/7 Roadside Assistance Support</h5>
                <p className="text-xs text-slate-500 mt-1 font-medium">Always active live tracking backend communication protocols.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-slate-800">Fully Customizable Itineraries</h5>
                <p className="text-xs text-slate-500 mt-1 font-medium">Complete flexibility to include or modify points mid-journey via direct requests.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-slate-800">Zero Hidden Premium Taxes</h5>
                <p className="text-xs text-slate-500 mt-1 font-medium">100% transparent pricing structure provided directly from the onset.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- 4. POPUP MODAL DIALOG CONTAINER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full border border-slate-100 relative max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-slate-900 p-5 text-white relative shrink-0">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="text-[9px] text-purple-200 uppercase font-extrabold tracking-widest block mb-0.5">Secure Reservation Panel</span>
              <h3 className="text-base font-black tracking-tight text-white line-clamp-1">
                Booking: {selectedSubPlace || tour.title}
              </h3>
            </div>

            {/* Scrollable Form Body Container */}
            <div className="overflow-y-auto p-3 flex-1">
              <TourDetailForm tourTitle={selectedSubPlace || tour.title} onClose={() => setIsModalOpen(false)} />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default TourDetailsPage;