import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourData } from '../data/TourData';
import TourDetailForm from './TourDetailForm';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  X,
  Star,
  Calendar,
  Users,
  Mail,
  Phone,
  LayoutGrid,
  ShieldCheck
} from 'lucide-react';

const TourDetailsPage = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  
  // States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDay, setOpenDay] = useState(0); 

  // Dynamic selector from tourData
  const tour = tourData.find(item => item.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-200 max-w-sm">
          <p className="text-slate-800 text-base font-extrabold mb-4">Package Details Not Found!</p>
          <button onClick={() => navigate('/')} className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-black px-5 py-2.5 rounded transition-all cursor-pointer uppercase">
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-20 font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* --- TOP BRANDING MINI HEADER --- */}
      <div className="bg-slate-900 text-white py-3 px-6 border-b-2 border-orange-500 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <span className="text-orange-500 font-black uppercase tracking-wider text-lg">Shree Sai Travels</span>
          <span className="text-sm font-extrabold text-slate-300 hidden sm:inline">Safe • Reliable • Premium Quality Fleet</span>
        </div>
      </div>

      {/* --- WIDER MAIN WRAPPER (max-w-7xl se badhakar max-w-[1400px] kiya) --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* Back Button Layout */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded text-sm font-black hover:bg-orange-500 transition-colors cursor-pointer shadow-md uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" /> Back to Packages
        </button>

        {/* --- MAIN SPLIT INTERFACE BLOCK (Grid columns reshaped to 9:3 for wider Left panel) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTAINER (Chauda kiya gaya h - lg:col-span-9) */}
          <div className="lg:col-span-9 bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Image Preview Window */}
              <div className="md:col-span-6 space-y-3">
                <div className="border border-slate-200 rounded overflow-hidden bg-slate-50 h-72 shadow-xs">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" />
                </div>
                {/* Visual Thumbnails strip */}
                <div className="flex gap-2">
                  <div className="w-20 h-14 border-2 border-orange-500 rounded overflow-hidden cursor-pointer">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  </div>
                  {tour.popularPlaces && tour.popularPlaces[0] && (
                    <div className="w-20 h-14 border border-slate-200 rounded overflow-hidden opacity-60">
                      <img src={tour.popularPlaces[0].image} alt="sub showcase" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info Description Column */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-slate-100 pb-3 tracking-tight uppercase leading-tight">
                    {tour.title} Premium Holiday Package
                  </h1>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p className="text-base"><strong className="text-slate-900 font-extrabold">Duration :</strong> {tour.duration}</p>
                    <p className="text-base"><strong className="text-slate-900 font-extrabold">Destination Covered :</strong> {tour.title} Sector High Points</p>
                    <p className="text-base"><strong className="text-slate-900 font-extrabold">Tour Activities :</strong> <span className="text-sky-600 font-black">{tour.category.toUpperCase()}</span> • Heritage & Exploration</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-dashed border-slate-200">
                  <div className="text-sky-600 text-3xl md:text-4xl font-black mb-3 tracking-tight">
                    {tour.price} <span className="text-xs text-slate-500 font-bold block mt-1">Per Person Base Rate</span>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-slate-900 hover:bg-orange-500 text-white font-black text-sm px-8 py-4 uppercase tracking-wider transition-colors rounded cursor-pointer w-full sm:w-auto shadow-md"
                  >
                    Inquire Now For Best Deals
                  </button>
                </div>
              </div>
            </div>

            <p className="text-xs text-sky-600 font-extrabold italic border-t border-slate-100 pt-3">
              * Mentioned prices may vary depending upon date of travel, hotel availability, surge pricing and seasonal rush.
            </p>
          </div>

          {/* RIGHT SIDEBAR (Ekdum Right me aligned aur compact structure - lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white rounded border border-slate-200 shadow-sm overflow-hidden lg:sticky lg:top-6">
            <div className="bg-sky-600 text-white p-4 font-black text-sm tracking-wider text-center uppercase">
              Fill Enquiry Form Below
            </div>
            <form className="p-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Full Name" className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
              <textarea defaultValue={`I am highly interested in booking the premium ${tour.title} (${tour.duration}). Please revert with active seasonal rates.`} rows="4" className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 bg-slate-50 text-slate-700 leading-relaxed"></textarea>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="relative flex items-center">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input type="text" placeholder="Travel Date" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
                </div>
                <div className="relative flex items-center">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input type="number" placeholder="No of Pax" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
                </div>
              </div>

              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                <input type="email" placeholder="Email Address" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
              </div>

              <div className="flex gap-1.5">
                <select className="text-xs font-bold p-3 border border-slate-300 rounded bg-slate-50 focus:outline-none text-slate-800">
                  <option>+91</option>
                </select>
                <div className="relative flex-1 flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input type="text" placeholder="Mobile Number" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
                </div>
              </div>

              <button className="w-full bg-slate-800 hover:bg-orange-500 text-white text-xs font-black py-3.5 uppercase tracking-widest transition-colors rounded shadow-xs mt-2 cursor-pointer">
                Send Enquiry
              </button>
            </form>
          </div>

        </div>

        {/* --- LOWER CONTENT WORKSPACE STACK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-9 space-y-8">

            {/* 1. EXTENDED OVERVIEW CARD */}
            <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
                {tour.title} Tour Overview
              </div>
              <div className="p-6 text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="font-extrabold text-slate-900 text-base italic border-l-4 border-orange-500 pl-3">"{tour.description}"</p>
                <p className="whitespace-pre-line font-medium tracking-tight text-slate-600">{tour.overview}</p>
              </div>
            </div>

            {/* 2. DYNAMIC DAY WISE ITINERARY ACCORDION */}
            <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
                {tour.duration} Day-Wise Planned Itinerary
              </div>
              <div className="divide-y divide-slate-200">
                {tour.itinerary && tour.itinerary.map((day, idx) => (
                  <div key={idx} className="border-b last:border-0">
                    <button 
                      onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
                      className="w-full flex items-center justify-between p-4 text-sm font-black text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="bg-sky-600 text-white text-xs font-black px-2.5 py-1 rounded font-mono shadow-xs">Day {idx + 1}</span>
                        <span className="uppercase text-slate-800 tracking-tight text-sm font-extrabold">{day.title}</span>
                      </span>
                      {openDay === idx ? <ChevronUp className="w-5 h-5 text-slate-500 stroke-[3]" /> : <ChevronDown className="w-5 h-5 text-slate-500 stroke-[3]" />}
                    </button>
                    {openDay === idx && (
                      <div className="p-5 bg-slate-50/70 text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-4">
                      <p className="text-slate-700 -[13px] md:text-sm">{day.desc}</p>
                        {idx === 0 && (
                          <div className="w-52 border border-slate-200 rounded overflow-hidden bg-white p-1.5 shadow-sm">
                            <img src={tour.image} alt="Route View" className="w-full h-20 object-cover" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. POPULAR PLACES MINI TILES DISPLAY */}
            {tour.popularPlaces && tour.popularPlaces.length > 0 && (
              <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-5">
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-orange-500 stroke-[3]" /> Key Attractions Matrix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {tour.popularPlaces.map((place, index) => (
                    <div key={index} className="bg-slate-50 rounded border border-slate-200 p-4 flex gap-4 hover:border-sky-500 transition-colors shadow-2xs">
                      <img src={place.image} alt={place.name} className="w-24 h-20 object-cover rounded shrink-0 bg-slate-200 border border-slate-200" />
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{place.name}</h4>
                        <p className="text-xs font-extrabold text-slate-500 leading-snug line-clamp-2">{place.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. PRICE RATE MATRIX TABLE */}
            <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
                Price & Rates
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black">
                      <th className="p-3.5 border-r border-slate-200 uppercase">No of pax</th>
                      <th className="p-3.5 border-r border-slate-200 uppercase">Age Limit</th>
                      <th className="p-3.5 uppercase">Price per pax (Rs)</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 font-extrabold">
                    <tr className="border-b border-slate-200">
                      <td className="p-3.5 border-r border-slate-200">Adult Standard</td>
                      <td className="p-3.5 border-r border-slate-200">Above 12 years</td>
                      <td className="p-3.5 font-black text-slate-950 text-base">INR {tour.price.replace('₹','')} / Adult</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. ACCOMMODATION DATA MATRICES */}
            <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
                Accommodation Star Status
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black">
                      <th className="p-3.5 border-r border-slate-200 uppercase">Destination Sector</th>
                      <th className="p-3.5 border-r border-slate-200 uppercase">Hotel Mapping</th>
                      <th className="p-3.5 uppercase">Star Tier</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 font-extrabold">
                    <tr>
                      <td className="p-3.5 border-r border-slate-200 text-slate-900 uppercase font-black">{tour.title} Region</td>
                      <td className="p-3.5 border-r border-slate-200 uppercase">Premium Executive Deluxe / Similar Asset</td>
                      <td className="p-3.5">
                        <span className="inline-flex items-center gap-1 bg-sky-500 text-white text-xs px-2.5 py-1 rounded font-black shadow-xs">
                          3 <Star className="w-3.5 h-3.5 fill-white" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. GUIDELINES & CANCELLATIONS THEMES */}
            <div className="bg-white border border-slate-200 rounded shadow-xs p-6 space-y-5">
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 stroke-[3]" /> Cancellation & Refund Policy
                </h4>
                <p className="text-xs font-extrabold text-slate-600 pl-6">* Refund processing requires 10 working days from the official date of cancellation receipt compliance.</p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Packages By Theme</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-slate-50 border-2 border-orange-300 text-orange-600 font-black px-3 py-1.5 rounded capitalize tracking-wide">
                    Theme: {tour.category}
                  </span>
                  <span className="text-xs bg-slate-50 border-2 border-slate-200 text-slate-700 font-black px-3 py-1.5 rounded tracking-wide">
                    Route Track: {tour.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* ACTION LOWER BUTTON */}
            <div className="text-center pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-slate-950 text-white hover:bg-orange-500 px-12 py-4 text-sm font-black uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md"
              >
                Book Your Tour
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* --- REUSABLE MODAL CONTAINER --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded shadow-xl max-w-md w-full border border-slate-200 relative max-h-[90vh] flex flex-col">
            
            <div className="bg-slate-900 p-4 text-white relative shrink-0 border-b-2 border-orange-500">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-xs font-black uppercase tracking-wide text-orange-500">
                Secure Reservation Core
              </h3>
              <p className="text-base font-black text-white line-clamp-1 mt-0.5">
                {tour.title} (Booking Module)
              </p>
            </div>

            <div className="overflow-y-auto p-4 flex-1">
              <TourDetailForm tourTitle={tour.title} onClose={() => setIsModalOpen(false)} />
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default TourDetailsPage;



// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { tourData } from '../data/TourData';
// import TourDetailForm from './TourDetailForm';
// import { 
//   ArrowLeft, 
//   MapPin, 
//   Clock, 
//   ChevronDown, 
//   ChevronUp,
//   X,
//   Star,
//   Calendar,
//   Users,
//   Mail,
//   Phone,
//   LayoutGrid,
//   Sparkles,
//   ShieldCheck
// } from 'lucide-react';

// const TourDetailsPage = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
  
//   // States
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [openDay, setOpenDay] = useState(0); // Default open Day 1 jaisa image_c9af5f.png me hai

//   // Dynamic selector from tourData
//   const tour = tourData.find(item => item.id === tourId);

//   if (!tour) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-200 max-w-sm">
//           <p className="text-slate-700 font-bold mb-4">Package Details Not Found!</p>
//           <button onClick={() => navigate('/')} className="bg-blue-900 hover:bg-sky-700 text-white text-xs font-bold px-5 py-2.5 rounded transition-all cursor-pointer">
//             Go Back Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 pb-20 font-sans antialiased text-slate-800">
      
//       {/* --- TOP BRANDING MINI HEADER --- */}
      

//       <div className="max-w-7xl mx-auto px-4 py-6">
        
//         {/* Back Button Layout */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="mb-5 inline-flex items-center gap-1.5 bg-slate-800 text-white px-4 py-2 rounded text-xs font-bold hover:bg-orange-500 transition-colors cursor-pointer shadow-xs"
//         >
//           <ArrowLeft className="w-4 h-4" /> Back to Packages
//         </button>

//         {/* --- HERO SPLIT INTERFACE BLOCK (As per image_c9af5f.png) --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* LEFT CONTAINER: Media Grid & Key Specs */}
//           <div className="lg:col-span-8 bg-white p-4 rounded shadow-xs border border-slate-200 space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
//               {/* Image Preview Window */}
//               <div className="md:col-span-6 space-y-2">
//                 <div className="border border-slate-200 rounded overflow-hidden bg-slate-50 h-64 shadow-xs">
//                   <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
//                 </div>
//                 {/* Visual Thumbnails strip matching image layout */}
//                 <div className="flex gap-2">
//                   <div className="w-16 h-12 border-2 border-orange-500 rounded overflow-hidden cursor-pointer">
//                     <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
//                   </div>
//                   {tour.popularPlaces && tour.popularPlaces[0] && (
//                     <div className="w-16 h-12 border border-slate-200 rounded overflow-hidden opacity-60">
//                       <img src={tour.popularPlaces[0].image} alt="sub showcase" className="w-full h-full object-cover" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Product Info Description Column */}
//               <div className="md:col-span-6 flex flex-col justify-between space-y-4">
//                 <div className="space-y-3">
//                   <h1 className="text-xl md:text-2xl font-black text-slate-900 border-b pb-2 tracking-tight uppercase">
//                     {tour.title} Premium Holiday Package
//                   </h1>
//                   <div className="space-y-2 text-xs text-slate-600">
//                     <p><strong className="text-slate-800">Duration :</strong> {tour.duration}</p>
//                     <p><strong className="text-slate-800">Destination Covered :</strong> {tour.title} Sector High Points</p>
//                     <p><strong className="text-slate-800">Tour Activities :</strong> {tour.category.toUpperCase()} • Heritage, Leisure & Exploration</p>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-dashed border-slate-200">
//                   <div className="text-sky-600 text-3xl font-black mb-2 tracking-tight">
//                     {tour.price} <span className="text-[10px] text-slate-400 font-normal block">Per Person Base Rate</span>
//                   </div>
//                   <button 
//                     onClick={() => setIsModalOpen(true)}
//                     className="bg-slate-900 hover:bg-orange-500 text-white font-bold text-xs px-6 py-3 uppercase tracking-wide transition-colors rounded cursor-pointer w-full sm:w-auto shadow-xs"
//                   >
//                     Inquire Now For Best Deals
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <p className="text-[11px] text-sky-600 italic border-t pt-2">
//               * Mentioned prices may vary depending upon date of travel, hotel availability, surge pricing and seasonal rush.
//             </p>
//           </div>

//           {/* RIGHT SIDEBAR: INQUIRY FORM CONSOLE */}
//           <div className="lg:col-span-4 lg:sticky lg:top-4 bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
//             <div className="bg-sky-600 text-white p-3 font-bold text-sm tracking-wide text-center uppercase">
//               Fill Enquiry Form Below
//             </div>
//             <form className="p-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
//               <input type="text" placeholder="Your Full Name" className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500" />
//               <textarea defaultValue={`I am highly interested in booking the premium ${tour.title} (${tour.duration}). Please revert with active seasonal rates.`} rows="3" className="w-full text-xs p-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500 bg-slate-50 text-slate-600"></textarea>
              
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="relative flex items-center">
//                   <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
//                   <input type="text" placeholder="Travel Date" className="w-full text-xs pl-8 pr-2 py-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500" />
//                 </div>
//                 <div className="relative flex items-center">
//                   <Users className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
//                   <input type="number" placeholder="No of Pax" className="w-full text-xs pl-8 pr-2 py-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500" />
//                 </div>
//               </div>

//               <div className="relative flex items-center">
//                 <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
//                 <input type="email" placeholder="Email Address" className="w-full text-xs pl-8 pr-2 py-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500" />
//               </div>

//               <div className="flex gap-1">
//                 <select className="text-xs p-2.5 border border-slate-300 rounded bg-slate-50 focus:outline-none">
//                   <option>+91</option>
//                 </select>
//                 <div className="relative flex-1 flex items-center">
//                   <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5" />
//                   <input type="text" placeholder="Mobile Number" className="w-full text-xs pl-8 pr-2 py-2.5 border border-slate-300 rounded focus:outline-none focus:border-sky-500" />
//                 </div>
//               </div>

//               <button className="w-full bg-slate-800 hover:bg-orange-500 text-white text-xs font-bold py-3 uppercase tracking-wider transition-colors rounded shadow-xs mt-2 cursor-pointer">
//                 Send Enquiry
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* --- LOWER CONTENT WORKSPACE STACK --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
//           <div className="lg:col-span-8 space-y-6">

//             {/* 1. EXTENDED OVERVIEW CARD */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700">
//                 {tour.title} Tour Overview
//               </div>
//               <div className="p-5 text-xs text-slate-600 leading-relaxed space-y-3">
//                 <p className="font-bold text-slate-900 italic border-l-2 border-orange-500 pl-2">"{tour.description}"</p>
//                 <p className="whitespace-pre-line tracking-tight">{tour.overview}</p>
//               </div>
//             </div>

//             {/* 2. DYNAMIC DAY WISE ITINERARY ACCORDION */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700">
//                 {tour.duration} Day-Wise Planned Itinerary
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {tour.itinerary && tour.itinerary.map((day, idx) => (
//                   <div key={idx} className="border-b last:border-0">
//                     <button 
//                       onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
//                       className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
//                     >
//                       <span className="flex items-center gap-2">
//                         <span className="bg-sky-600 text-white text-[10px] px-2 py-0.5 rounded font-mono">Day {idx + 1}</span>
//                         <span className="uppercase text-slate-700 tracking-tight">{day.title}</span>
//                       </span>
//                       {openDay === idx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
//                     </button>
//                     {openDay === idx && (
//                       <div className="p-4 bg-slate-50/70 text-xs text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
//                         <p className="text-slate-600 font-medium">{day.desc}</p>
//                         {idx === 0 && (
//                           <div className="w-44 border border-slate-200 rounded overflow-hidden bg-white p-1 shadow-xs">
//                             <img src={tour.image} alt="Route View" className="w-full h-16 object-cover" />
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* 3. POPULAR PLACES MINI TILES DISPLAY */}
//             {tour.popularPlaces && tour.popularPlaces.length > 0 && (
//               <div className="bg-white border border-slate-200 rounded p-4 shadow-xs space-y-4">
//                 <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
//                   <LayoutGrid className="w-4 h-4 text-orange-500" /> Key Attractions Matrix
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {tour.popularPlaces.map((place, index) => (
//                     <div key={index} className="bg-slate-50 rounded border border-slate-200/80 p-3 flex gap-3 hover:border-sky-500 transition-colors">
//                       <img src={place.image} alt={place.name} className="w-20 h-16 object-cover rounded shrink-0 bg-slate-200" />
//                       <div className="space-y-1">
//                         <h4 className="text-xs font-bold text-slate-900 uppercase tracking-tight line-clamp-1">{place.name}</h4>
//                         <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">{place.details}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* 4. PRICE RATE MATRIX TABLE */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700">
//                 Price & Rates
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse text-xs">
//                   <thead>
//                     <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
//                       <th className="p-3 border-r border-slate-200">No of pax</th>
//                       <th className="p-3 border-r border-slate-200">Age Limit</th>
//                       <th className="p-3">Price per pax (Rs)</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-slate-600">
//                     <tr className="border-b border-slate-200">
//                       <td className="p-3 border-r border-slate-200">Adult Standard</td>
//                       <td className="p-3 border-r border-slate-200">Above 12 years</td>
//                       <td className="p-3 font-black text-slate-900">INR {tour.price.replace('₹','')} / Adult</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* 5. ACCOMMODATION DATA MATRICES */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-700">
//                 Accommodation Star Status
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse text-xs">
//                   <thead>
//                     <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
//                       <th className="p-3 border-r border-slate-200">Destination Sector</th>
//                       <th className="p-3 border-r border-slate-200">Hotel Mapping</th>
//                       <th className="p-3">Star Tier</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-slate-600">
//                     <tr>
//                       <td className="p-3 border-r border-slate-200 font-bold text-slate-700 uppercase">{tour.title} Region</td>
//                       <td className="p-3 border-r border-slate-200 uppercase">Premium Executive Deluxe / Similar Asset</td>
//                       <td className="p-3">
//                         <span className="inline-flex items-center gap-0.5 bg-sky-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
//                           3 <Star className="w-2.5 h-2.5 fill-white" />
//                         </span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* 6. GUIDELINES & CANCELLATIONS THEMES */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs p-5 space-y-4">
//               <div>
//                 <h4 className="text-xs font-bold text-slate-800 uppercase mb-1 flex items-center gap-1">
//                   <ShieldCheck className="w-4 h-4 text-emerald-500" /> Cancellation & Refund Policy
//                 </h4>
//                 <p className="text-[11px] text-slate-500 pl-5">* Refund processing requires 10 working days from the official date of cancellation receipt compliance.</p>
//               </div>
//               <div className="border-t pt-4">
//                 <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">Packages By Theme</h4>
//                 <div className="flex flex-wrap gap-1.5">
//                   <span className="text-[10px] bg-slate-50 border border-orange-300 text-orange-600 font-bold px-2.5 py-1 rounded capitalize">
//                     Theme: {tour.category}
//                   </span>
//                   <span className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded">
//                     Route Track: {tour.duration}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ACTION LOWER BUTTON */}
//             <div className="text-center pt-2">
//               <button 
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-slate-950 text-white hover:bg-orange-500 px-8 py-3 text-xs font-black uppercase tracking-widest rounded transition-colors cursor-pointer shadow"
//               >
//                 Book Your Tour
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* --- REUSABLE BOOTSTRAPPED MODAL CONTAINER --- */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded shadow-xl max-w-md w-full border border-slate-200 relative max-h-[90vh] flex flex-col">
            
//             <div className="bg-slate-900 p-4 text-white relative shrink-0 border-b-2 border-orange-500">
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//               <h3 className="text-xs font-bold uppercase tracking-wide text-orange-500">
//                 Secure Reservation Core
//               </h3>
//               <p className="text-sm font-bold text-white line-clamp-1 mt-0.5">
//                 {tour.title} (Booking Module)
//               </p>
//             </div>

//             <div className="overflow-y-auto p-4 flex-1">
//               <TourDetailForm tourTitle={tour.title} onClose={() => setIsModalOpen(false)} />
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TourDetailsPage;


// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { tourData } from '../data/TourData';
// import TourDetailForm from './TourDetailForm';
// import { 
//   ArrowLeft, 
//   ShieldCheck, 
//   MapPin, 
//   CheckCircle2, 
//   Clock, 
//   Sparkles, 
//   X,
//   Send,
//   Zap
// } from 'lucide-react';

// const TourDetailsPage = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
  
//   // States for Popup Modal Form
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedSubPlace, setSelectedSubPlace] = useState('');

//   const tour = tourData.find(item => item.id === tourId);

//   if (!tour) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-sm">
//           <p className="text-slate-500 font-black mb-4">Package Details Not Found!</p>
//           <button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer">
//             Go Back Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Handle opening the modal
//   const openBookingModal = (subPlaceName = '') => {
//     setSelectedSubPlace(subPlaceName);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 pb-20 selection:bg-purple-500 selection:text-white relative">
      
//       {/* --- TOP BRANDING MINI HEADER --- */}
//       <div className="bg-slate-950 text-white/80 py-3 px-4 text-xs font-medium tracking-wide border-b border-white/5 shadow-sm">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <span className="text-amber-400 font-extrabold uppercase tracking-widest text-[13px]">Shree Sai Travels</span>
//           <span className="flex items-center gap-2 text-slate-300">
//             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             Safe • Reliable • Premium Quality Fleet
//           </span>
//         </div>
//       </div>

//       {/* --- PREMIUM WIDE HERO BANNER (Exactly as per image_8ab901.jpg) --- */}
//       <div className="relative h-[380px] md:h-[440px] bg-slate-950 overflow-hidden">
//         <img 
//           src={tour.image} 
//           alt={tour.title} 
//           className="w-full h-full object-cover opacity-40 object-center" 
//         />
//         {/* Cinematic shadow overlays */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20"></div>
        
//         {/* Back Button with Left Arrow */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="absolute top-6 left-6 md:left-10 bg-white text-slate-900 p-2.5 rounded-xl shadow-xl hover:bg-slate-100 transition-all cursor-pointer z-20 group"
//         >
//           <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
//         </button>

//         {/* Banner Content Infrastructure */}
//         <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 z-10">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            
//             {/* Left Side Content & Tags */}
//             <div className="space-y-3 text-white max-w-2xl">
//               <div className="inline-flex items-center gap-1 bg-purple-600 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md">
//                 <Zap className="w-3 h-3 text-amber-300 fill-amber-300" /> Premium Selected Route
//               </div>
//               <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none drop-shadow-md">
//                 {tour.title} Ultimate Route
//               </h1>
              
//               {/* Pill Outline Meta Badges */}
//               <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-slate-200">
//                 <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
//                   <Clock className="w-3.5 h-3.5 text-purple-400" /> {tour.duration}
//                 </span>
//                 <span className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
//                   <MapPin className="w-3.5 h-3.5 text-emerald-400" /> All Handpicked Transit Points
//                 </span>
//               </div>
//             </div>

//             {/* Right Side Instant Action Button */}
//             <div className="shrink-0 mb-1">
//               <button 
//                 onClick={() => openBookingModal(tour.title)} // <-- Yahan 'handleOpenModal' ko 'openBookingModal' se replace kiya hai
//                 className="w-full md:w-auto bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 tracking-wider uppercase"
//               >
//                 <span>Book This Package Now</span>
//                 <Send className="w-3.5 h-3.5 fill-white" />
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* --- CONTENT WORKSPACE (Exactly as per image_8a5ec8.png) --- */}
//       <div className="max-w-6xl mx-auto px-4 mt-10 relative z-10 space-y-12">
        
//         {/* 1. HORIZONTAL OVERVIEW PANEL CARD */}
//         <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 grid grid-cols-1 lg:grid-cols-12 gap-0">
//           {/* Left Side Image */}
//           <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[320px] bg-slate-100">
//             <img 
//               src={tour.image} 
//               alt={tour.title} 
//               className="w-full h-full object-cover" 
//             />
//             <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1">
//               <Clock className="w-3.5 h-3.5 text-amber-400" /> {tour.duration}
//             </div>
//           </div>

//           {/* Right Side Meta Data Block */}
//           <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
//             <div className="space-y-4">
//               <div className="flex items-center justify-between gap-4 flex-wrap">
//                 <h2 className="text-2xl md:text-3xl font-black text-slate-900">
//                   {tour.title} Tour Package
//                 </h2>
//                 <div className="text-right shrink-0">
//                   <span className="block text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Starting From</span>
//                   <span className="text-xl md:text-2xl font-black text-purple-600">{tour.price}</span>
//                 </div>
//               </div>
//               <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal whitespace-pre-line border-t border-slate-100 pt-4">
//                 {tour.overview || tour.description}
//               </p>
//             </div>

//             <div className="pt-2">
//               <button 
//                 onClick={() => openBookingModal(tour.title)}
//                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer uppercase tracking-wider"
//               >
//                 <span>Book Full {tour.title} Package</span>
//                 <Send className="w-4 h-4 fill-white" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 2. POPULAR SUBS 4-COLUMN GRID LAYOUT */}
//         {tour.popularPlaces && tour.popularPlaces.length > 0 && (
//           <div className="space-y-8">
//             {/* Center Header */}
//             <div className="text-center max-w-xl mx-auto space-y-2">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-tight flex items-center justify-center gap-2">
//                 <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" /> POPULAR {tour.title.toUpperCase()} PACKAGES
//               </h3>
//               <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
//             </div>

//             {/* Premium 4-Column Grid System */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {tour.popularPlaces.map((place, index) => (
//                 <div 
//                   key={index} 
//                   className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
//                 >
//                   {/* Card Thumbnail */}
//                   <div className="relative h-44 bg-slate-100 overflow-hidden">
//                     <img 
//                       src={place.image} 
//                       alt={place.name} 
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
//                     />
//                     <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 border border-slate-100">
//                       <MapPin className="w-3 h-3 text-purple-600" /> Destination
//                     </div>
//                   </div>

//                   {/* Card Content & Action Trigger */}
//                   <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
//                     <div className="space-y-1">
//                       <h4 className="font-extrabold text-slate-800 text-sm tracking-tight line-clamp-1 uppercase">
//                         {place.name}
//                       </h4>
//                       <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 font-medium">
//                         {place.details}
//                       </p>
//                     </div>

//                     <button 
//                       onClick={() => openBookingModal(`${tour.title} (${place.name})`)}
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-xs text-center cursor-pointer"
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* 3. STANDARD GUIDELINES MODULE */}
//         <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/60 shadow-sm space-y-6">
//           <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2.5">
//             <ShieldCheck className="w-7 h-7 text-emerald-500" />
//             Shree Sai Travels Standard Guidelines
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
//               <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
//               <div>
//                 <h5 className="text-sm font-bold text-slate-800">Professional Verified Drivers</h5>
//                 <p className="text-xs text-slate-500 mt-1 font-medium">Highly certified route specialist captains for secure regional transits.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
//               <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
//               <div>
//                 <h5 className="text-sm font-bold text-slate-800">24/7 Roadside Assistance Support</h5>
//                 <p className="text-xs text-slate-500 mt-1 font-medium">Always active live tracking backend communication protocols.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
//               <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
//               <div>
//                 <h5 className="text-sm font-bold text-slate-800">Fully Customizable Itineraries</h5>
//                 <p className="text-xs text-slate-500 mt-1 font-medium">Complete flexibility to include or modify points mid-journey via direct requests.</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
//               <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
//               <div>
//                 <h5 className="text-sm font-bold text-slate-800">Zero Hidden Premium Taxes</h5>
//                 <p className="text-xs text-slate-500 mt-1 font-medium">100% transparent pricing structure provided directly from the onset.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* --- 4. POPUP MODAL DIALOG CONTAINER --- */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-md w-full border border-slate-100 relative max-h-[90vh] flex flex-col">
            
//             {/* Modal Header */}
//             <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-slate-900 p-5 text-white relative shrink-0">
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors cursor-pointer"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//               <span className="text-[9px] text-purple-200 uppercase font-extrabold tracking-widest block mb-0.5">Secure Reservation Panel</span>
//               <h3 className="text-base font-black tracking-tight text-white line-clamp-1">
//                 Booking: {selectedSubPlace || tour.title}
//               </h3>
//             </div>

//             {/* Scrollable Form Body Container */}
//             <div className="overflow-y-auto p-3 flex-1">
//               <TourDetailForm tourTitle={selectedSubPlace || tour.title} onClose={() => setIsModalOpen(false)} />
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TourDetailsPage;