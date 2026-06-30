import React from 'react';
import { Car, ShieldCheck } from 'lucide-react'; // SteeringWheel hata kar ShieldCheck add kiya
import TaxiBookingSection from '../components/TaxiBookingSection';

const CabBooking = () => {
  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      
      {/* --- PREMIUM DARK HERO BANNER AREA --- */}
      <div className="relative bg-[#051622] text-white py-16 px-4 text-center overflow-hidden border-t-4 border-[#DE6910]">
        
        {/* Dot Grid Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-3xl mx-auto space-y-3 z-10">
          
          {/* Micro Badge Top */}
          <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Premium & Reliable Rides
          </span>
          
          {/* Main Big Title */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white font-sans">
            Cab & Taxi Bookings
          </h1>
          
          {/* Catchy Subtitle Description */}
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Book local, outstation, or airport cabs instantly. Safe, verified drivers and clean cars for your perfect journey with Shree Sai Trip.
          </p>
        </div>
      </div>

      {/* --- TAXI BOOKING INTERACTION FORM SECTION --- */}
      <div className="max-w-6xl mx-auto px-4 mt-[-20px] relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <TaxiBookingSection />
        </div>
      </div>

    </div>
  );
};

export default CabBooking;