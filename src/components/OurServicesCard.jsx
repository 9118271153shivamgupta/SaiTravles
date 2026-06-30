// src/components/OurServicesCard.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const OurServicesCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Visual Canvas Image Wrapper */}
      <div className="relative h-52 bg-slate-100 overflow-hidden shrink-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Banner Overlay Label Text (Inspired by red/bold text on image_1651a2.jpg images) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 flex items-end p-4">
          <span className="text-white font-black tracking-wide text-sm md:text-base uppercase drop-shadow-md">
            {service.tagline}
          </span>
        </div>
      </div>

      {/* Content Meta Space */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1">
          {/* Card Main Title */}
          <h4 className="font-black text-slate-900 text-sm tracking-tight group-hover:text-sky-600 transition-colors uppercase">
            {service.title}
          </h4>
          {/* Short dynamic service descriptions */}
          <p className="text-slate-500 text-xs leading-relaxed font-semibold line-clamp-2">
            {service.description}
          </p>
        </div>

        {/* Action Call to Button */}
        {/* <button 
          onClick={() => alert(`Inquiry triggered for: ${service.title}`)}
          className="w-full bg-slate-50 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-700 font-bold text-xs py-2.5 rounded-xl border border-slate-200 group-hover:border-amber-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <span>Enquire Service</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity stroke-[3]" />
        </button> */}
      </div>

    </div>
  );
};

export default OurServicesCard;