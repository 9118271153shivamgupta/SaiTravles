import React from 'react';
import { 
  ShieldAlert, 
  UserCheck, 
  Car, 
  Clock, 
  Coins, 
  Heart, 
  Globe,
  Sparkles,
  PhoneCall
} from 'lucide-react';

const WhyChooseUs = () => {
  // Real content data directly mapped from the image source
  const features = [
    {
      id: 1,
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      bgIcon: "bg-orange-50",
      borderHover: "hover:border-amber-500/40",
      title: "Safety First",
      description: "Passenger safety is our top priority. Every journey is tracked and monitored for maximum security."
    },
    {
      id: 2,
      icon: <UserCheck className="w-6 h-6 text-sky-600" />,
      bgIcon: "bg-sky-50",
      borderHover: "hover:border-sky-500/40",
      title: "Experienced Drivers",
      description: "Experienced and knowledgeable professional drivers who know the routes inside out."
    },
    {
      id: 3,
      icon: <Car className="w-6 h-6 text-slate-700" />,
      bgIcon: "bg-slate-100",
      borderHover: "hover:border-slate-400/40",
      title: "Well-Maintained Vehicles",
      description: "Clean and regularly serviced vehicles to ensure zero breakdowns and maximum luxury comfort."
    },
    {
      id: 4,
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      bgIcon: "bg-emerald-50",
      borderHover: "hover:border-emerald-500/40",
      title: "On-Time & Reliable Service",
      description: "Timely and reliable service. Punctuality is embedded deep within our core operations."
    },
    {
      id: 5,
      icon: <Coins className="w-6 h-6 text-amber-600" />,
      bgIcon: "bg-amber-50",
      borderHover: "hover:border-amber-500/40",
      title: "Transparent Pricing",
      description: "No hidden charges, complete transparency in billing from the moment you book."
    },
    {
      id: 6,
      icon: <Heart className="w-6 h-6 text-red-500" />,
      bgIcon: "bg-red-50",
      borderHover: "hover:border-red-500/40",
      title: "Family & Senior Citizen Friendly",
      description: "Specially designed family and senior citizen friendly custom ground handling services."
    },
    {
      id: 7,
      icon: <Globe className="w-6 h-6 text-sky-700" />,
      bgIcon: "bg-sky-50",
      borderHover: "hover:border-sky-500/40",
      title: "Wide Coverage",
      description: "Gorakhpur service available to entire India and Nepal routes effortlessly."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 md:px-8 selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden">
      
      {/* Background Decorative Gradient Blurs (Logo matched sky/amber tones) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-slate-900 text-amber-400 text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full border border-slate-800 shadow-xs">
            <Sparkles className="w-3 h-3 fill-amber-400 text-amber-400" /> Shree Sai Travels Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Why Choose Sri Sai Trips?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-bold max-w-xl mx-auto leading-relaxed">
            There are many strong reasons behind choosing Sri Sai Trips, which make us different from other Travel Services.
          </p>
          <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mt-3"></div>
        </div>

        {/* --- DYNAMIC AUTOMATIC GRID LAYOUT --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item) => (
            <div 
              key={item.id}
              className={`bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs ${item.borderHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start space-y-4 group`}
            >
              {/* Icon Container with Custom Colors */}
              <div className={`p-3.5 ${item.bgIcon} rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>

              {/* Text Meta Content */}
              <div className="space-y-1.5">
                <h4 className="font-black text-slate-900 text-base tracking-tight group-hover:text-sky-600 transition-colors uppercase">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- INTERACTIVE ACTION STRIP WITH INSTANT CALL TRIGGER --- */}
        <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 rounded-2xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="space-y-1">
            <h4 className="text-white font-black text-base md:text-lg tracking-tight uppercase">
              Ready to explore your customized premium route?
            </h4>
            <p className="text-slate-300 text-xs font-semibold">
              Get an instant quotation for multi-city travel plans or luxury fleets.
            </p>
          </div>
          
          {/* Direct call anchor functionality matching brand banner */}
          <a 
            href="tel:7068681745"
            className="w-full md:w-auto bg-amber-500 text-slate-950 font-black text-xs px-6 py-3.5 rounded-xl hover:bg-amber-400 transition-all shadow-md active:scale-98 uppercase tracking-widest whitespace-nowrap inline-flex items-center justify-center gap-2 text-center cursor-pointer border border-amber-400"
          >
            <PhoneCall className="w-4 h-4 text-slate-950 animate-pulse stroke-[2.5]" />
            <span>Call Us: +91 7068681745</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;