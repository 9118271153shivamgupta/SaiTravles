// src/components/OurServices.jsx
import React from 'react';
import { servicesData } from '../data/ServicesData';
import OurServicesCard from './OurServicesCard';
import { Sparkles } from 'lucide-react';

const OurServices = () => {
  return (
    <section className="bg-slate-50/60 py-16 px-4 md:px-8 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Section Header Frame (Matches image_1651a2.jpg title hierarchy) */}
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border border-slate-800">
          <Sparkles className="w-3 h-3 fill-amber-400" /> Our Offerings
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
          Services we offer
        </h2>
        <p className="text-slate-500 text-xs md:text-sm font-bold max-w-md mx-auto">
          We are dedicated to provide below services 24x7 with premium standards.
        </p>
        <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mt-2"></div>
      </div>

      {/* Infinite Grid Auto Flow Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {servicesData.map((service) => (
          <OurServicesCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

export default OurServices;