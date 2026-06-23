import React, { useState } from 'react';
import { X, Send, User, Phone, MapPin, Calendar } from 'lucide-react';

const NavbarForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aap apna asli WhatsApp number yahan 91 ke sath daal sakte hain
    const whatsappNumber = "919999999999"; 
    
    // WhatsApp Message Format Text
    const message = `*New Travel Enquiry - Sia Travels*%0A%0A` +
                    `👤 *Name:* ${formData.name}%0A` +
                    `📞 *Phone:* ${formData.phone}%0A` +
                    `📍 *Destination:* ${formData.destination}%0A` +
                    `📅 *Travel Date:* ${formData.date}%0A` +
                    `📝 *Message:* ${formData.notes || 'None'}`;
    
    // WhatsApp URL trigger
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
    onClose(); // Form close karne ke liye
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Form Card */}
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duration-200 text-slate-800">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-purple-950 mb-1">Plan Your Dream Trip ✨</h3>
        <p className="text-xs text-slate-500 mb-6">Apni details bharein, hamari team aapse jald hi contact karegi.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input type="text" name="name" required placeholder="Aapka Naam" onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all" />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input type="tel" name="phone" required placeholder="WhatsApp Number" onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all" />
          </div>

          {/* Destination */}
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input type="text" name="destination" required placeholder="Kahan ghumna hai?" onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all" />
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input type="date" name="date" required onChange={handleChange}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all text-slate-600" />
          </div>

          {/* Special Requirements */}
          <div>
            <textarea name="notes" rows="2" placeholder="Koi special request? (Optional)" onChange={handleChange}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all resize-none"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 tracking-wide group text-sm">
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavbarForm;