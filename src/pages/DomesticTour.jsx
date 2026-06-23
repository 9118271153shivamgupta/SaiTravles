import React from 'react';
import { MapPin } from 'lucide-react';

const DomesticTour = () => {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-slate-50 py-12 px-4 text-center flex flex-col items-center justify-center">
      <div className="bg-purple-50 p-4 rounded-full text-brand-primary mb-4">
        <MapPin className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold text-purple-950 mb-3">Domestic Tours 🇮🇳</h1>
      <p className="text-slate-600 max-w-xl leading-relaxed">
        Explore karein India ke sabse khubsoorat kone! Kashmir ke pahad, Goa ke beaches, ya Kerala ke backwaters—Sia Travels ke sath har safar hoga aasan aur sasta.
      </p>
    </div>
  );
};

export default DomesticTour;