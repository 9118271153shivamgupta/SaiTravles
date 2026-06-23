import React from 'react';
import { Mountain } from 'lucide-react';

const HillStationTour = () => {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-slate-50 py-12 px-4 text-center flex flex-col items-center justify-center">
      <div className="bg-purple-50 p-4 rounded-full text-brand-primary mb-4">
        <Mountain className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold text-purple-950 mb-3">Hill Station Tours 🏔️</h1>
      <p className="text-slate-600 max-w-xl leading-relaxed">
        Garmiyon se rahat aur thandak ka maza! Shimla, Manali, Ooty, ya Darjeeling ke haseen pahadon me apna perfect holiday plain karein hamare budget-friendly packages ke sath.
      </p>
    </div>
  );
};

export default HillStationTour;