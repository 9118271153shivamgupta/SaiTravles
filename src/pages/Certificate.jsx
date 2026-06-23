import React from 'react';
import { Award } from 'lucide-react';

const Certificate = () => {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-slate-50 py-12 px-4 text-center flex flex-col items-center justify-center">
      <div className="bg-amber-50 p-4 rounded-full text-amber-500 mb-4">
        <Award className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-extrabold text-purple-950 mb-3">Govt. Approved Certificate 🛡️</h1>
      <p className="text-slate-600 max-w-xl leading-relaxed">
        Sia Travels ek fully government registered aur certified agency hai. Hum safety guidelines aur transparent pricing ke sath 100% legal aur secure tours operate karte hain. Trust and Safety is our priority!
      </p>
    </div>
  );
};

export default Certificate;