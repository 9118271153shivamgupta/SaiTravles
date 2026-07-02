import React from 'react';
import { 
  Car, ShieldCheck, Heart, Plane, MapPin, 
  Target, Award, Users, Compass, CheckCircle2 
} from 'lucide-react';

const AboutUs = () => {
  // Key Services Grid Data (Updated Icons to maintain aesthetic symmetry)
  const keyServices = [
    {
      title: "Local & Outstation Taxi Services",
      desc: "Safe and comfortable taxi services in and out of the city, with special arrangements for long distance journeys.",
      icon: <Car className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Airport & Railway Station Pickup and Drop",
      desc: "Timely pick-up and drop facility so that passengers do not face any kind of trouble.",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Family & Group Tours",
      desc: "Custom tour plans for families and groups, with comfortable travel and safe environment.",
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Religious & Pilgrimage Tours",
      desc: "Specially designed tour packages for religious journeys, with experienced drivers and route knowledge.",
      icon: <Heart className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Nepal Tour Services",
      desc: "Safe and organized travel services to major religious and tourist destinations in Nepal.",
      icon: <MapPin className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Wedding & Corporate Transportation",
      desc: "Reliable transport facility for weddings, events and corporate requirements.",
      icon: <Award className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Domestic & International Flight Booking",
      desc: "Domestic and international flight ticket booking facility, with proper guidance and assistance.",
      icon: <Plane className="w-6 h-6 text-indigo-600" />
    }
  ];

  // Our Mission Data
  const missionPoints = [
    "To provide safe and comfortable travel experience to every passenger.",
    "Ensuring punctuality and professional service.",
    "Providing experienced, responsible and courteous drivers.",
    "Maintaining complete transparency in fares and services.",
    "Establishing trust and long-term relationships with customers.",
    "We believe that satisfied customers are our greatest success."
  ];

  // Why Choose Us Data
  const whyChooseUs = [
    { title: "Safety First", text: "Passenger safety is our top priority." },
    { title: "Experienced Drivers", text: "Experienced and knowledgeable drivers." },
    { title: "Well-Maintained Vehicles", text: "Clean and regularly serviced vehicles." },
    { title: "Transparent Pricing", text: "No hidden charges, completely honest and clear billing." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 text-slate-800 selection:bg-indigo-500 selection:text-white">
      
      {/* --- HERO HEADER (Updated to Premium Dark Slate & White Layout) --- */}
      <div className="bg-slate-950 text-white text-center py-24 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="bg-indigo-600/30 text-indigo-300 font-extrabold tracking-widest text-xs px-4 py-1.5 rounded-full uppercase border border-indigo-500/30">
            Know Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-5 mb-4">
            About Shree Sai Travels
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto font-semibold leading-relaxed">
            Your Trusted Partner for Safe, Comfortable, and Memorable Journeys Across India & Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24">

        {/* --- INTRODUCTION PARAGRAPH SECTION --- */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-md border border-slate-100/60 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
            <span className="w-2.5 h-8 bg-indigo-600 rounded-full inline-block"></span>
            Who We Are
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Shree Sai Travels is a professional and trusted travel service company, established with the aim of providing safe, comfortable and timely travel facilities to the travelers. We provide our services from Gorakhpur all over India and Nepal and provide a reliable solution for all types of travel needs.
            </p>
            <p>
              We believe that travel is not just a means of getting from one place to another, but it is an experience. Therefore, Shree Sai Travels gives individual attention to every customer and tailors the travel plan as per his need, budget and time. Our priority is customer safety, convenience and satisfaction.
            </p>
            <p className="border-l-4 border-amber-500 bg-amber-50/40 p-4 rounded-r-xl font-bold text-slate-900">
              Clean and well-maintained vehicles, experienced and courteous drivers, and transparent fare policy—this is what defines us. Shree Sai Travels aims to make every trip stress-free, safe and memorable.
            </p>
          </div>
        </section>

        {/* --- OUR KEY SERVICES GRID --- */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Our Key Services</h2>
            <p className="text-slate-400 text-sm mt-1 font-bold tracking-wide uppercase">World-class travel facilities tailored perfectly for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6 shadow-inner">
                  {React.cloneElement(service.icon, { className: "w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-base font-black text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- MISSION & WHY CHOOSE US SIDE-BY-SIDE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Block */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2.5">
                <Target className="w-6 h-6 text-indigo-600 shrink-0" />
                Our Mission
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-bold mb-6 leading-relaxed uppercase tracking-wider">
                Shree Sai Travels's mission is to provide high quality, safe and reliable travel services to travelers. We believe in completing each journey with full responsibility and honesty.
              </p>
              <ul className="space-y-3.5">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us Block */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2.5">
                <Award className="w-6 h-6 text-indigo-600 shrink-0" />
                Why Choose Shree Sai Travels?
              </h2>
              <p className="text-xs md:text-sm text-slate-400 font-bold mb-6 leading-relaxed uppercase tracking-wider">
                There are many strong reasons behind choosing Shree Sai Travels, which make us different from other travel services:
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50/60 rounded-2xl border border-slate-100/80 hover:bg-indigo-50/20 hover:border-indigo-100/50 transition-all">
                    <h4 className="text-xs md:text-sm font-black text-slate-800 mb-1 flex items-center gap-1.5">
                      <span className="text-amber-500">★</span> {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium pl-4">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;