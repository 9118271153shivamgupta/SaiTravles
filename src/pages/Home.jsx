import React from 'react';
import HomeHero from '../components/HomeHero'; // Naya HomeHero Import Kiya
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import HomeAboutWelcome from '../components/HomeAboutWelcome';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* 1. Dynamic Auto-Playing Banner Slider */}
      <HomeHero />

     <HomeAboutWelcome showReadMore={true} />

      {/* Trust Badges Footer */}
      <div className="bg-white border-t border-slate-100 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around items-center gap-6 text-sm font-medium text-slate-400">
          <div>✔️ 100% Secure Payments</div>
          <div>✔️ 24/7 Customer Support</div>
          <div>✔️ 50k+ Happy Travelers</div>
        </div>
      </div>
      

    </div>
  );
};

export default Home;