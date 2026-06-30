// src/components/NavbarBookingForm.jsx
import React, { useState, useEffect } from 'react';
import { X, Send, User, Phone, MapPin, Calendar } from 'lucide-react';

const NavbarBookingForm = ({ isOpen, onClose, defaultDestination }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    date: '',
    notes: ''
  });

  // Agar card se koi destination (tour title) aata hai to input field me set ho jaye
  useEffect(() => {
    if (defaultDestination) {
      setFormData((prev) => ({ ...prev, destination: defaultDestination }));
    }
  }, [defaultDestination, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Shree Sai Trip Official Contact Number
    const whatsappNumber = "917068681745"; 
    
    // WhatsApp Message Format Text
    const message = `*New Travel Enquiry - Shree Sai Trip*%0A%0A` +
                    `👤 *Name:* ${formData.name}%0A` +
                    `📞 *Phone:* ${formData.phone}%0A` +
                    `📍 *Destination:* ${formData.destination}%0A` +
                    `📅 *Travel Date:* ${formData.date}%0A` +
                    `📝 *Message:* ${formData.notes || 'None'}`;
    
    // WhatsApp URL trigger
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    onClose(); // Form submit hone ke baad modal close hoga
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark Blur Backdrop Layout */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Main Modern Form Container */}
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200 text-slate-800 border border-slate-100">
        
        {/* Top Header Banner matching your brand style */}
        <div className="bg-[#051A30] text-white px-6 py-5 relative">
          <span className="text-[10px] uppercase font-black text-[#DE6910] tracking-wider block mb-0.5">
            Booking Enquiry
          </span>
          <h3 className="text-lg font-black tracking-tight">
            Plan Your Dream Trip ✨
          </h3>
          
          {/* Close Button Inside Header */}
          <button 
            onClick={onClose} 
            className="absolute top-5 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full cursor-pointer transition-all"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Input Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Full Name Field */}
          <div>
            <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">Your Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900" 
              />
            </div>
          </div>

          {/* WhatsApp Contact Number */}
          <div>
            <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">WhatsApp Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="Enter 10-digit mobile number" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900" 
              />
            </div>
          </div>

          {/* Selected Destination (Autofilled if clicked from a card) */}
          <div>
            <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">Selected Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#DE6910]" />
              <input 
                type="text" 
                name="destination" 
                required 
                placeholder="Where do you want to go?" 
                value={formData.destination}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-black focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-900 uppercase" 
              />
            </div>
          </div>

          {/* Travel Journey Date */}
          <div>
            <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">Travel Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-700" 
              />
            </div>
          </div>

          {/* Special Custom Notes or Requests */}
          <div>
            <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wide mb-1">Special Requirements (Optional)</label>
            <textarea 
              name="notes" 
              rows="2" 
              placeholder="Tell us about total passengers, hotel preferences etc..." 
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-purple-600 focus:bg-white transition-all resize-none text-slate-900"
            ></textarea>
          </div>

          {/* Action Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 tracking-wider group text-xs uppercase cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Send Inquiry to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavbarBookingForm;