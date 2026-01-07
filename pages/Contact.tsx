
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'custom-build',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('General Inquiry:', formData);
    alert('Message sent! We will get back to you shortly.');
  };

  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Banner */}
      <div className="bg-black py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white italic mb-4">GET IN TOUCH</h1>
          <p className="text-xl text-gray-500 uppercase tracking-[0.2em] font-bold">No Job Too Big Or Too Small</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-black text-white italic uppercase mb-10">CONTACT INFORMATION</h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <MapPin className="text-electric-blue mr-6 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold text-lg uppercase italic mb-2">SHOP LOCATION</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-electric-blue mr-6 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold text-lg uppercase italic mb-2">DIRECT LINE</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-electric-blue mr-6 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold text-lg uppercase italic mb-2">EMAIL US</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{BUSINESS_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-electric-blue mr-6 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold text-lg uppercase italic mb-2">BUSINESS HOURS</h4>
                  <div className="text-gray-400 text-lg">
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: By Appointment Only</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="mt-12 w-full h-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.8643891461877!2d-82.30590402377317!3d29.680211135760815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8bb333e72084b%3A0xc0051e5066e01237!2s2821%20NE%2020th%20Way%2C%20Gainesville%2C%20FL%2032609!5e0!3m2!1sen!2sus!4v1714850000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1a1a1a] p-10 border border-gray-800 rounded-lg h-fit">
            <h2 className="text-3xl font-black text-white italic uppercase mb-8">REQUEST A QUOTE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest mb-2">NAME</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 tracking-widest mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 tracking-widest mb-2">PHONE</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest mb-2">INTERESTED IN</label>
                <select className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue uppercase font-bold text-sm">
                  <option>Custom Paint & Body</option>
                  <option>Collision / Insurance Repair</option>
                  <option>Audio & Visual Install</option>
                  <option>Wheels & Tires</option>
                  <option>Window Tint / Vinyl Wrap</option>
                  <option>Event Rental (Limo/Bus)</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest mb-2">PROJECT DETAILS</label>
                <textarea 
                  rows={6}
                  placeholder="Describe your vision or the damage..."
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                ></textarea>
              </div>
              <button className="w-full bg-electric-blue text-white py-5 font-black text-xl hover:bg-[#0089bd] transition-all flex items-center justify-center">
                SEND INQUIRY <Send className="ml-3" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
