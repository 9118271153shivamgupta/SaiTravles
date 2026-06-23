import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-[calc(100vh-113px)] bg-slate-50 py-12 px-4 text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-purple-950 mb-4">Contact Us 📞</h1>
      <p className="text-slate-600 max-w-xl mb-4">
        Humein aapki madad karke khushi hogi! Aap humse kabhi bhi sampark kar sakte hain.
      </p>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 font-semibold text-purple-950 space-y-2">
        <p>📍 Office: New Delhi, India</p>
        <p>📞 Helpline: +91 9118271153</p>
        <p>✉️ Email: support@siatravels.com</p>
      </div>
    </div>
  );
};

export default ContactUs;