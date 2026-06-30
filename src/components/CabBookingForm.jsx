// src/components/CabBookingForm.jsx
import React, { useState, useEffect } from 'react';
import { X, Send, User, Phone, MapPin, Calendar, Car } from 'lucide-react';

const CabBookingForm = ({ isOpen, onClose, selectedCabName }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cabType: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedCabName) {
      setFormData((prev) => ({ ...prev, cabType: selectedCabName }));
    }
  }, [selectedCabName, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "917068681745"; 
    
    const message = `*🚖 NEW TAXI BOOKING - SHREE SAI TRIP*%0A%0A` +
                    `📦 *Vehicle/Car:* ${formData.cabType.toUpperCase()}%0A` +
                    `👤 *Customer Name:* ${formData.name}%0A` +
                    `📞 *WhatsApp No:* ${formData.phone}%0A` +
                    `📍 *Pickup Location:* ${formData.pickupLocation}%0A` +
                    `🏁 *Drop Location:* ${formData.dropLocation}%0A` +
                    `📅 *Journey Date:* ${formData.date}%0A` +
                    `📝 *Special Notes:* ${formData.notes || 'None'}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 dynamic-modal">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Expanded Width Container (max-w-2xl handles the wider surface area) */}
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 border border-slate-100 flex flex-col my-auto max-h-[95vh] md:max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Block */}
        <div className="bg-[#051A30] text-white px-6 py-4 relative shrink-0">
          <span className="text-[10px] uppercase font-black text-[#DE6910] tracking-wider block mb-0.5">
            Taxi Reservation
          </span>
          <h3 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-2">
            <Car className="w-5 h-5 text-amber-400" /> Book Your Ride ✨
          </h3>
          <button 
            onClick={onClose} 
            className="absolute top-4 sm:top-5 right-4 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full cursor-pointer transition-all"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 2-Column Responsive Layout to Reduce Height */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 text-slate-700 overflow-y-auto">
          
          {/* Top Row: Full-width Selected Cab */}
          <div className="mb-4">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-1">Selected Vehicle / Car</label>
            <input 
              type="text" 
              name="cabType" 
              readOnly
              value={formData.cabType}
              className="w-full px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs font-black text-slate-900 uppercase tracking-wide cursor-not-allowed focus:outline-none" 
            />
          </div>

          {/* Grid Split System (Badi screens par side-by-side ho jayega) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3.5">
            
            {/* Left Side Inputs */}
            <div className="space-y-3.5">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter full name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">WhatsApp Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="10-digit mobile number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Journey Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-700" 
                  />
                </div>
              </div>
            </div>

            {/* Right Side Inputs */}
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Pickup From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-emerald-500" />
                    <input 
                      type="text" 
                      name="pickupLocation" 
                      required 
                      placeholder="City/Station" 
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Drop Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-rose-500" />
                    <input 
                      type="text" 
                      name="dropLocation" 
                      required 
                      placeholder="Destination" 
                      value={formData.dropLocation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-900" 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Notes (Optional)</label>
                <textarea 
                  name="notes" 
                  rows="4" 
                  placeholder="Flight number, return journey or luggage details info..." 
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none text-slate-900 h-[84px]"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Action Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#00A884] hover:bg-[#008F72] text-white font-black py-3 rounded-xl shadow-lg shadow-emerald-600/10 transition-all flex items-center justify-center gap-2 tracking-wider group text-xs uppercase cursor-pointer border border-emerald-600/20"
            >
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Confirm Cab via WhatsApp
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CabBookingForm;