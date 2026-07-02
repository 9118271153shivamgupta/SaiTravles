import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  Clock
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const targetWhatsApp = "917068681745"; 
    
    const wsText = `*📩 NEW WEBSITE ENQUIRY - SHREE SAI TRIP*%0A%0A` +
                   `👤 *Name:* ${formData.name}%0A` +
                   `📞 *Contact:* ${formData.phone}%0A` +
                   `📋 *Subject:* ${formData.subject}%0A` +
                   `✉️ *Message:* ${formData.message}`;
                   
    window.open(`https://wa.me/${targetWhatsApp}?text=${wsText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-amber-500 selection:text-slate-950">
      
      {/* --- HERO BANNER --- */}
      <div className="relative bg-[#051622] text-white py-20 px-4 text-center overflow-hidden border-t-4 border-[#DE6910]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-3xl mx-auto space-y-3 z-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/25 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5" /> 24/7 Customer Support
          </span>
          <h1 className="text-4xl md:text-5xl font-black  text-white  font-sans">
            Contact Our Team
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Have questions about tour packages or custom cab reservations? Reach out to Shree Sai Trip, and let us plan your dream journey.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: OFFICE ADDRESS & DETAILS (Based on image_13f6e3.png) */}
          <div className="lg:col-span-5 bg-[#051A30] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-8 border border-slate-800">
            
            <div>
              <h2 className="text-2xl font-black tracking-tight uppercase border-b-2 border-[#DE6910] pb-2 inline-block">
                Office Address
              </h2>
            </div>

            <div className="space-y-6 text-slate-300">
              
              {/* Branch */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-amber-500 shrink-0 border border-slate-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-amber-500 uppercase tracking-wider mb-0.5">Main Branch</h4>
                  <p className="text-sm font-bold leading-relaxed text-white">
                    Shree Sai Trip,<br />
                    Manbela khas, F.C.I Road,<br />
                    Gorakhpur U.P – 273013
                  </p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0 border border-slate-700">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-0.5">WhatsApp Contact</h4>
                  <p className="text-base font-black text-emerald-400 tracking-wide">
                    7068681745 <span className="text-slate-500 text-xs font-normal">,</span> 6307726624
                  </p>
                </div>
              </div>

              {/* Call Directly */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-sky-400 shrink-0 border border-slate-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-sky-400 uppercase tracking-wider mb-0.5">Call Us Directly</h4>
                  <a href="tel:7068681745" className="text-base font-black text-sky-400 hover:underline tracking-wide">
                    7068681745
                  </a>
                </div>
              </div>

              {/* Email Support */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-orange-400 shrink-0 border border-slate-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-orange-400 uppercase tracking-wider mb-0.5">Email Support</h4>
                  <a href="mailto:shreesaitrip@gmail.com" className="text-sm font-bold text-white hover:text-amber-400 break-all transition-colors">
                    shreesaitrip@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* --- PREMIUM SOCIAL MEDIA SVG HUB (Fixed Error) --- */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Follow Us Socially</h4>
              <div className="flex flex-wrap gap-3">
                {/* Facebook */}
                <a href="#" className="p-2.5 bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700 transform hover:-translate-y-1">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3l.5-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 00-4 4v2z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="p-2.5 bg-slate-800 hover:bg-[#E1306C] text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700 transform hover:-translate-y-1">
                  <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* Twitter / X */}
                <a href="#" className="p-2.5 bg-slate-800 hover:bg-[#000000] text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700 transform hover:-translate-y-1">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                {/* Youtube */}
                <a href="#" className="p-2.5 bg-slate-800 hover:bg-[#FF0000] text-slate-300 hover:text-white rounded-xl transition-all border border-slate-700 transform hover:-translate-y-1">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
            <div className="space-y-1 mb-6">
              <span className="text-[10px] uppercase font-black text-[#DE6910] tracking-wider block">Quick Query</span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Send Us a Message</h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-slate-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter full name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DE6910] focus:bg-white transition-all text-slate-900" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="10-digit mobile phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DE6910] focus:bg-white transition-all text-slate-900" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Subject / Requirement</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="e.g., Tour Package, Cab Service query" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DE6910] focus:bg-white transition-all text-slate-900" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wide mb-1">Message Description</label>
                <textarea 
                  name="message" 
                  required 
                  rows="5" 
                  placeholder="Write your travel dates, passenger counts or route details..." 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#DE6910] focus:bg-white transition-all resize-none text-slate-900"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#00A884] hover:bg-[#008F72] text-white font-black py-3.5 rounded-xl shadow-lg shadow-emerald-600/10 transition-all flex items-center justify-center gap-2 tracking-wider group text-xs uppercase cursor-pointer border border-emerald-600/20"
              >
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send Query via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUs;