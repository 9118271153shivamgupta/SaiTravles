import React from 'react';
import { Car } from 'lucide-react';

const CabBooking = () => {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-slate-50 py-12 px-4 text-center flex flex-col items-center justify-center">
      <div className="bg-purple-50 p-4 rounded-full text-brand-primary mb-4">
        <Car className="w-10 h-10" />
      </div>
      <h1 className="text-4xl font-extrabold text-purple-950 mb-3">Cab Booking Services 🚕</h1>
      <p className="text-slate-600 max-w-xl leading-relaxed">
        Local sightseeing ho ya outstation trip, hum dete hain safe, clean aur verified drivers ke sath premium cab service. 24/7 hassel-free booking available.
      </p>
    </div>
  );
};

export default CabBooking;