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

  // Form States for Sidebar WhatsApp Action
  const [formData, setFormData] = useState({
    fullName: '',
    travelDate: '',
    noOfPax: '',
    email: '',
    countryCode: '+91',
    mobileNumber: ''
  });

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

  // Handle Input Changes for Sidebar Form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // WhatsApp Submit Handler
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const myWhatsAppNumber = "916307726624"; // Target WhatsApp Number
    
    // Constructing well-formatted text message
    const message = `*New Tour Enquiry*\n` +
                    `---------------------------\n` +
                    `*Package:* ${tour.title}\n` +
                    `*Duration:* ${tour.duration}\n\n` +
                    `*Client Name:* ${formData.fullName || 'Not Provided'}\n` +
                    `*Travel Date:* ${formData.travelDate || 'Not Provided'}\n` +
                    `*Total Pax:* ${formData.noOfPax || 'Not Provided'}\n` +
                    `*Email Address:* ${formData.email || 'Not Provided'}\n` +
                    `*Mobile Number:* ${formData.countryCode} ${formData.mobileNumber || 'Not Provided'}\n` +
                    `---------------------------\n` +
                    `*Note:* Highly interested in booking the premium package. Please revert with active seasonal rates.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${myWhatsAppNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-20 font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* --- TOP BRANDING MINI HEADER --- */}
      <div className="bg-slate-900 text-white py-3 px-6 border-b-2 border-orange-500 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <span className="text-sm font-extrabold text-slate-300 hidden sm:inline">Safe • Reliable • Premium Quality Fleet</span>
        </div>
      </div>

      {/* --- WIDER MAIN WRAPPER --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* Back Button Layout */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded text-sm font-black hover:bg-orange-500 transition-colors cursor-pointer shadow-md uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" /> Back to Packages
        </button>

        {/* --- MAIN SPLIT INTERFACE BLOCK --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTAINER */}
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

          {/* RIGHT SIDEBAR (With Integrated WhatsApp functionality) */}
          <div className="lg:col-span-3 bg-white rounded border border-slate-200 shadow-sm overflow-hidden lg:sticky lg:top-6">
            <div className="bg-sky-600 text-white p-4 font-black text-sm tracking-wider text-center uppercase">
              Fill Enquiry Form Below
            </div>
            <form className="p-4 space-y-4" onSubmit={handleWhatsAppSubmit}>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Full Name" 
                className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" 
                required
              />
              <textarea 
                readOnly
                value={`I am highly interested in booking the premium ${tour.title} (${tour.duration}). Please revert with active seasonal rates.`} 
                rows="4" 
                className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 bg-slate-50 text-slate-700 leading-relaxed"
              ></textarea>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <div className="relative flex items-center">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input 
                    type="text" 
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    placeholder="Travel Date" 
                    className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" 
                  />
                </div>
                <div className="relative flex items-center">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input 
                    type="number" 
                    name="noOfPax"
                    value={formData.noOfPax}
                    onChange={handleInputChange}
                    placeholder="No of Pax" 
                    className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" 
                  />
                </div>
              </div>

              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" 
                />
              </div>

              <div className="flex gap-1.5">
                <select 
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="text-xs font-bold p-3 border border-slate-300 rounded bg-slate-50 focus:outline-none text-slate-800"
                >
                  <option>+91</option>
                </select>
                <div className="relative flex-1 flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3" />
                  <input 
                    type="text" 
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number" 
                    className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" 
                    required
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-slate-800 hover:bg-orange-500 text-white text-xs font-black py-3.5 uppercase tracking-widest transition-colors rounded shadow-xs mt-2 cursor-pointer">
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
                        <p className="text-slate-700 md:text-sm">{day.desc}</p>
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
            {/* <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
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
            </div> */}

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
//   ShieldCheck
// } from 'lucide-react';

// const TourDetailsPage = () => {
//   const { tourId } = useParams();
//   const navigate = useNavigate();
  
//   // States
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [openDay, setOpenDay] = useState(0); 

//   // Dynamic selector from tourData
//   const tour = tourData.find(item => item.id === tourId);

//   if (!tour) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="text-center p-8 bg-white rounded-xl shadow-md border border-slate-200 max-w-sm">
//           <p className="text-slate-800 text-base font-extrabold mb-4">Package Details Not Found!</p>
//           <button onClick={() => navigate('/')} className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-black px-5 py-2.5 rounded transition-all cursor-pointer uppercase">
//             Go Back Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 pb-20 font-sans antialiased text-slate-900 selection:bg-orange-500 selection:text-white">
      
//       {/* --- TOP BRANDING MINI HEADER --- */}
//       <div className="bg-slate-900 text-white py-3 px-6 border-b-2 border-orange-500 shadow-sm">
//         <div className="max-w-[1400px] mx-auto flex justify-between items-center">
//           {/* <span className="text-orange-500 font-black uppercase tracking-wider text-lg">Shree Sai Travels</span> */}
//           <span className="text-sm font-extrabold text-slate-300 hidden sm:inline">Safe • Reliable • Premium Quality Fleet</span>
//         </div>
//       </div>

//       {/* --- WIDER MAIN WRAPPER (max-w-7xl se badhakar max-w-[1400px] kiya) --- */}
//       <div className="max-w-[1400px] mx-auto px-6 py-8">
        
//         {/* Back Button Layout */}
//         <button 
//           onClick={() => navigate(-1)} 
//           className="mb-6 inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded text-sm font-black hover:bg-orange-500 transition-colors cursor-pointer shadow-md uppercase tracking-wider"
//         >
//           <ArrowLeft className="w-4 h-4 stroke-[3]" /> Back to Packages
//         </button>

//         {/* --- MAIN SPLIT INTERFACE BLOCK (Grid columns reshaped to 9:3 for wider Left panel) --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
//           {/* LEFT CONTAINER (Chauda kiya gaya h - lg:col-span-9) */}
//           <div className="lg:col-span-9 bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
//               {/* Image Preview Window */}
//               <div className="md:col-span-6 space-y-3">
//                 <div className="border border-slate-200 rounded overflow-hidden bg-slate-50 h-72 shadow-xs">
//                   <img src={tour.image} alt={tour.title} className="w-full h-full object-cover hover:scale-102 transition-transform duration-300" />
//                 </div>
//                 {/* Visual Thumbnails strip */}
//                 <div className="flex gap-2">
//                   <div className="w-20 h-14 border-2 border-orange-500 rounded overflow-hidden cursor-pointer">
//                     <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
//                   </div>
//                   {tour.popularPlaces && tour.popularPlaces[0] && (
//                     <div className="w-20 h-14 border border-slate-200 rounded overflow-hidden opacity-60">
//                       <img src={tour.popularPlaces[0].image} alt="sub showcase" className="w-full h-full object-cover" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Product Info Description Column */}
//               <div className="md:col-span-6 flex flex-col justify-between space-y-6">
//                 <div className="space-y-4">
//                   <h1 className="text-2xl md:text-3xl font-black text-slate-900 border-b-2 border-slate-100 pb-3 tracking-tight uppercase leading-tight">
//                     {tour.title} Premium Holiday Package
//                   </h1>
//                   <div className="space-y-3 text-sm text-slate-700">
//                     <p className="text-base"><strong className="text-slate-900 font-extrabold">Duration :</strong> {tour.duration}</p>
//                     <p className="text-base"><strong className="text-slate-900 font-extrabold">Destination Covered :</strong> {tour.title} Sector High Points</p>
//                     <p className="text-base"><strong className="text-slate-900 font-extrabold">Tour Activities :</strong> <span className="text-sky-600 font-black">{tour.category.toUpperCase()}</span> • Heritage & Exploration</p>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t border-dashed border-slate-200">
//                   <div className="text-sky-600 text-3xl md:text-4xl font-black mb-3 tracking-tight">
//                     {tour.price} <span className="text-xs text-slate-500 font-bold block mt-1">Per Person Base Rate</span>
//                   </div>
//                   <button 
//                     onClick={() => setIsModalOpen(true)}
//                     className="bg-slate-900 hover:bg-orange-500 text-white font-black text-sm px-8 py-4 uppercase tracking-wider transition-colors rounded cursor-pointer w-full sm:w-auto shadow-md"
//                   >
//                     Inquire Now For Best Deals
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <p className="text-xs text-sky-600 font-extrabold italic border-t border-slate-100 pt-3">
//               * Mentioned prices may vary depending upon date of travel, hotel availability, surge pricing and seasonal rush.
//             </p>
//           </div>

//           {/* RIGHT SIDEBAR (Ekdum Right me aligned aur compact structure - lg:col-span-3) */}
//           <div className="lg:col-span-3 bg-white rounded border border-slate-200 shadow-sm overflow-hidden lg:sticky lg:top-6">
//             <div className="bg-sky-600 text-white p-4 font-black text-sm tracking-wider text-center uppercase">
//               Fill Enquiry Form Below
//             </div>
//             <form className="p-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <input type="text" placeholder="Your Full Name" className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
//               <textarea defaultValue={`I am highly interested in booking the premium ${tour.title} (${tour.duration}). Please revert with active seasonal rates.`} rows="4" className="w-full text-xs font-bold p-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 bg-slate-50 text-slate-700 leading-relaxed"></textarea>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
//                 <div className="relative flex items-center">
//                   <Calendar className="w-4 h-4 text-slate-400 absolute left-3" />
//                   <input type="text" placeholder="Travel Date" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
//                 </div>
//                 <div className="relative flex items-center">
//                   <Users className="w-4 h-4 text-slate-400 absolute left-3" />
//                   <input type="number" placeholder="No of Pax" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
//                 </div>
//               </div>

//               <div className="relative flex items-center">
//                 <Mail className="w-4 h-4 text-slate-400 absolute left-3" />
//                 <input type="email" placeholder="Email Address" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
//               </div>

//               <div className="flex gap-1.5">
//                 <select className="text-xs font-bold p-3 border border-slate-300 rounded bg-slate-50 focus:outline-none text-slate-800">
//                   <option>+91</option>
//                 </select>
//                 <div className="relative flex-1 flex items-center">
//                   <Phone className="w-4 h-4 text-slate-400 absolute left-3" />
//                   <input type="text" placeholder="Mobile Number" className="w-full text-xs font-bold pl-9 pr-2 py-3 border border-slate-300 rounded focus:outline-none focus:border-sky-500 text-slate-800" />
//                 </div>
//               </div>

//               <button className="w-full bg-slate-800 hover:bg-orange-500 text-white text-xs font-black py-3.5 uppercase tracking-widest transition-colors rounded shadow-xs mt-2 cursor-pointer">
//                 Send Enquiry
//               </button>
//             </form>
//           </div>

//         </div>

//         {/* --- LOWER CONTENT WORKSPACE STACK --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
//           <div className="lg:col-span-9 space-y-8">

//             {/* 1. EXTENDED OVERVIEW CARD */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
//                 {tour.title} Tour Overview
//               </div>
//               <div className="p-6 text-sm text-slate-700 leading-relaxed space-y-4">
//                 <p className="font-extrabold text-slate-900 text-base italic border-l-4 border-orange-500 pl-3">"{tour.description}"</p>
//                 <p className="whitespace-pre-line font-medium tracking-tight text-slate-600">{tour.overview}</p>
//               </div>
//             </div>

//             {/* 2. DYNAMIC DAY WISE ITINERARY ACCORDION */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
//                 {tour.duration} Day-Wise Planned Itinerary
//               </div>
//               <div className="divide-y divide-slate-200">
//                 {tour.itinerary && tour.itinerary.map((day, idx) => (
//                   <div key={idx} className="border-b last:border-0">
//                     <button 
//                       onClick={() => setOpenDay(openDay === idx ? -1 : idx)}
//                       className="w-full flex items-center justify-between p-4 text-sm font-black text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
//                     >
//                       <span className="flex items-center gap-3">
//                         <span className="bg-sky-600 text-white text-xs font-black px-2.5 py-1 rounded font-mono shadow-xs">Day {idx + 1}</span>
//                         <span className="uppercase text-slate-800 tracking-tight text-sm font-extrabold">{day.title}</span>
//                       </span>
//                       {openDay === idx ? <ChevronUp className="w-5 h-5 text-slate-500 stroke-[3]" /> : <ChevronDown className="w-5 h-5 text-slate-500 stroke-[3]" />}
//                     </button>
//                     {openDay === idx && (
//                       <div className="p-5 bg-slate-50/70 text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-4">
//                       <p className="text-slate-700 -[13px] md:text-sm">{day.desc}</p>
//                         {idx === 0 && (
//                           <div className="w-52 border border-slate-200 rounded overflow-hidden bg-white p-1.5 shadow-sm">
//                             <img src={tour.image} alt="Route View" className="w-full h-20 object-cover" />
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
//               <div className="bg-white border border-slate-200 rounded p-6 shadow-xs space-y-5">
//                 <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
//                   <LayoutGrid className="w-4 h-4 text-orange-500 stroke-[3]" /> Key Attractions Matrix
//                 </h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   {tour.popularPlaces.map((place, index) => (
//                     <div key={index} className="bg-slate-50 rounded border border-slate-200 p-4 flex gap-4 hover:border-sky-500 transition-colors shadow-2xs">
//                       <img src={place.image} alt={place.name} className="w-24 h-20 object-cover rounded shrink-0 bg-slate-200 border border-slate-200" />
//                       <div className="space-y-1.5">
//                         <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{place.name}</h4>
//                         <p className="text-xs font-extrabold text-slate-500 leading-snug line-clamp-2">{place.details}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* 4. PRICE RATE MATRIX TABLE */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
//                 Price & Rates
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse text-sm">
//                   <thead>
//                     <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black">
//                       <th className="p-3.5 border-r border-slate-200 uppercase">No of pax</th>
//                       <th className="p-3.5 border-r border-slate-200 uppercase">Age Limit</th>
//                       <th className="p-3.5 uppercase">Price per pax (Rs)</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-slate-700 font-extrabold">
//                     <tr className="border-b border-slate-200">
//                       <td className="p-3.5 border-r border-slate-200">Adult Standard</td>
//                       <td className="p-3.5 border-r border-slate-200">Above 12 years</td>
//                       <td className="p-3.5 font-black text-slate-950 text-base">INR {tour.price.replace('₹','')} / Adult</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* 5. ACCOMMODATION DATA MATRICES */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
//               <div className="bg-slate-50 border-b border-slate-200 px-5 py-3.5 text-sm font-black uppercase tracking-wide text-slate-800">
//                 Accommodation Star Status
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse text-sm">
//                   <thead>
//                     <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-black">
//                       <th className="p-3.5 border-r border-slate-200 uppercase">Destination Sector</th>
//                       <th className="p-3.5 border-r border-slate-200 uppercase">Hotel Mapping</th>
//                       <th className="p-3.5 uppercase">Star Tier</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-slate-700 font-extrabold">
//                     <tr>
//                       <td className="p-3.5 border-r border-slate-200 text-slate-900 uppercase font-black">{tour.title} Region</td>
//                       <td className="p-3.5 border-r border-slate-200 uppercase">Premium Executive Deluxe / Similar Asset</td>
//                       <td className="p-3.5">
//                         <span className="inline-flex items-center gap-1 bg-sky-500 text-white text-xs px-2.5 py-1 rounded font-black shadow-xs">
//                           3 <Star className="w-3.5 h-3.5 fill-white" />
//                         </span>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* 6. GUIDELINES & CANCELLATIONS THEMES */}
//             <div className="bg-white border border-slate-200 rounded shadow-xs p-6 space-y-5">
//               <div>
//                 <h4 className="text-sm font-black text-slate-900 uppercase mb-2 flex items-center gap-1">
//                   <ShieldCheck className="w-5 h-5 text-emerald-500 stroke-[3]" /> Cancellation & Refund Policy
//                 </h4>
//                 <p className="text-xs font-extrabold text-slate-600 pl-6">* Refund processing requires 10 working days from the official date of cancellation receipt compliance.</p>
//               </div>
//               <div className="border-t border-slate-200 pt-4">
//                 <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Packages By Theme</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="text-xs bg-slate-50 border-2 border-orange-300 text-orange-600 font-black px-3 py-1.5 rounded capitalize tracking-wide">
//                     Theme: {tour.category}
//                   </span>
//                   <span className="text-xs bg-slate-50 border-2 border-slate-200 text-slate-700 font-black px-3 py-1.5 rounded tracking-wide">
//                     Route Track: {tour.duration}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ACTION LOWER BUTTON */}
//             <div className="text-center pt-4">
//               <button 
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-slate-950 text-white hover:bg-orange-500 px-12 py-4 text-sm font-black uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md"
//               >
//                 Book Your Tour
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* --- REUSABLE MODAL CONTAINER --- */}
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
//               <h3 className="text-xs font-black uppercase tracking-wide text-orange-500">
//                 Secure Reservation Core
//               </h3>
//               <p className="text-base font-black text-white line-clamp-1 mt-0.5">
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

