import React from 'react';
import { 
  Car, ShieldCheck, Heart, Plane, MapPin, 
  Target, Award, Users, Compass, CheckCircle2 
} from 'lucide-react';

const AboutUs = () => {
  // Key Services Grid Data (from image_2570c8.png)
  const keyServices = [
    {
      title: "Local & Outstation Taxi Services",
      desc: "Safe and comfortable taxi services in and out of the city, with special arrangements for long distance journeys.",
      icon: <Car className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Airport & Railway Station Pickup and Drop",
      desc: "Timely pick-up and drop facility so that passengers do not face any kind of trouble.",
      icon: <Compass className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Family & Group Tours",
      desc: "Custom tour plans for families and groups, with comfortable travel and safe environment.",
      icon: <Users className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Religious & Pilgrimage Tours",
      desc: "Specially designed tour packages for religious journeys, with experienced drivers and route knowledge.",
      icon: <Heart className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Nepal Tour Services",
      desc: "Safe and organized travel services to major religious and tourist destinations in Nepal.",
      icon: <MapPin className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Wedding & Corporate Transportation",
      desc: "Reliable transport facility for weddings, events and corporate requirements.",
      icon: <Award className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Domestic & International Flight Booking",
      desc: "Domestic and international flight ticket booking facility, with proper guidance and assistance.",
      icon: <Plane className="w-6 h-6 text-purple-600" />
    }
  ];

  // Religious Places Data
  const religiousPlaces = [
    "Ayodhya – Shri Ram Mandir", "Varanasi – Kashi Vishwanath", 
    "Prayagraj – Triveni Sangam", "Mathura – Vrindavan", 
    "Chitrakoot", "Vindhyachal", "Haridwar – Rishikesh", 
    "Vaishno Devi", "Bodh Gaya", "Pashupatinath Temple – Nepal", 
    "Lumbini – Nepal"
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
    <div className="min-h-screen bg-slate-50/50 text-slate-800">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800 text-white text-center py-20 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="bg-amber-400/20 text-amber-300 font-bold tracking-widest text-xs px-4 py-1.5 rounded-full uppercase border border-amber-400/30">
            Know Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mt-4 mb-3">
            About Sia Travels
          </h1>
          <p className="text-purple-200 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Your Trusted Partner for Safe, Comfortable, and Memorable Journeys Across India & Nepal.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {/* --- INTRODUCTION PARAGRAPH SECTION --- */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col gap-6 animate-in fade-in duration-700">
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-950 tracking-tight flex items-center gap-2">
            <span className="w-2 h-8 bg-purple-600 rounded-full inline-block"></span>
            Who We Are
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            <p>
              Sia Travels is a professional and trusted travel service company, established with the aim of providing safe, comfortable and timely travel facilities to the travelers. We provide our services from Gorakhpur all over India and Nepal and provide a reliable solution for all types of travel needs.
            </p>
            <p>
              We believe that travel is not just a means of getting from one place to another, but it is an experience. Therefore Sia Travels gives individual attention to every customer and tailors the travel plan as per his need, budget and time. Our priority is customer safety, convenience and satisfaction.
            </p>
            <p className="border-l-4 border-amber-400 bg-amber-50/50 p-4 rounded-r-xl font-semibold text-purple-950">
              Clean and well-maintained vehicles, experienced and courteous drivers, and transparent fare policy—this is what defines us. Sia Travels aims to make every trip stress-free, safe and memorable.
            </p>
          </div>
        </section>

        {/* --- OUR KEY SERVICES GRID --- */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-950 tracking-tight uppercase">Our Key Services</h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">World-class travel facilities tailored perfectly for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100/80 hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-purple-50 group-hover:bg-purple-600 group-hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 mb-5 shadow-sm">
                  {React.cloneElement(service.icon, { className: "w-5 h-5 group-hover:text-white text-purple-600 transition-colors" })}
                </div>
                <h3 className="text-base font-bold text-purple-950 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- RELIGIOUS TOUR PACKAGES SECTION --- */}
        <section className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-300 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-amber-300" />
              Religious Tour Packages
            </h2>
            <p className="text-purple-100 text-sm md:text-base font-medium leading-relaxed max-w-4xl">
              Sia Travels is especially known for religious trips. We strive to provide devotees with a serene, safe and streamlined travel experience, so that they can fully concentrate on their faith and devotion. Major religious places we provide services for include:
            </p>

            {/* Badges Layout */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              {religiousPlaces.map((place, idx) => (
                <span 
                  key={idx} 
                  className="bg-white/10 hover:bg-white hover:text-purple-950 border border-white/10 text-slate-100 text-xs font-bold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm cursor-default"
                >
                  ✨ {place}
                </span>
              ))}
            </div>

            <p className="text-xs md:text-sm text-amber-200/90 font-medium italic pt-4 border-t border-white/10">
              "During religious tours we ensure safe vehicles, experienced drivers, comfortable travel and punctuality, making the journey simple and enjoyable."
            </p>
          </div>
        </section>

        {/* --- MISSION & WHY CHOOSE US SIDE-BY-SIDE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Mission Block */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-purple-950 tracking-tight mb-4 flex items-center gap-2">
                <Target className="w-5 h-8 text-purple-600 shrink-0" />
                Our Mission
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                Sia Travels's mission is to provide high quality, safe and reliable travel services to travelers. We believe in completing each journey with full responsibility and honesty. Our mission is based on the following points:
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 group">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-600 text-xs md:text-sm font-semibold leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us Block */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-purple-950 tracking-tight mb-4 flex items-center gap-2">
                <Award className="w-5 h-8 text-purple-600 shrink-0" />
                Why Choose Sia Travels?
              </h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium mb-6 leading-relaxed">
                There are many strong reasons behind choosing Sia Travels, which make us different from other travel services:
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100/80 hover:bg-purple-50/40 transition-colors">
                    <h4 className="text-xs md:text-sm font-bold text-purple-950 mb-0.5">⭐ {item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.text}</p>
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