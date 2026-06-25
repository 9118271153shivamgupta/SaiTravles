import React, { useState } from 'react';

const TourDetailForm = ({ tourTitle }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "916307726624"; 

    const message = `*Shree Sai Travels - New Booking Inquiry*\n` +
                    `----------------------------------------\n` +
                    `📦 *Package:* ${tourTitle}\n` +
                    `👤 *Client Name:* ${formData.name}\n` +
                    `📞 *Phone Number:* ${formData.phone}\n` +
                    `📅 *Journey Date:* ${formData.date}\n` +
                    `----------------------------------------\n` +
                    `_Sent via Website Callback Request Form_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    alert(`Thank you! Redirecting you to WhatsApp to confirm your booking for ${tourTitle}.`);
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', date: '' });
  };

  return (
    // Fixed Width Issue: min-w hatakar pure width layout automatically adjust kra diya h
    <div className="bg-white rounded-b-3xl w-full max-w-full transition-all">
      <form onSubmit={handleFormSubmit} className="p-5 space-y-4">
        <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide text-center">
          Plan Your Perfect Trip
        </h4>
        
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Your Name
          </label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter Full Name" 
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Phone Number
          </label>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter Mobile Number" 
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Tentative Journey Date
          </label>
          <input 
            type="date" 
            name="date"
            required
            value={formData.date}
            onChange={handleInputChange}
            className="w-full text-xs font-semibold bg-slate-50 border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-purple-600 transition-colors text-slate-600 cursor-pointer"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md shadow-purple-600/10 transition-colors uppercase tracking-wider mt-2 cursor-pointer text-center flex items-center justify-center gap-2"
        >
          <span>Request via WhatsApp</span>
        </button>
      </form>
    </div>
  );
};

export default TourDetailForm;