
import React, { useState } from 'react';
import { CheckCircle, Info, Calendar, Users, MapPin } from 'lucide-react';
import { RENTAL_VEHICLES, RENTAL_PACKAGES } from '../constants';

const Rentals = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    vehicle: 'party-bus',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Rental Inquiry:', formData);
    alert('Thank you for your inquiry! Our rental coordinator will contact you within 24 hours.');
  };

  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/nightlife/1920/1080" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          alt="Nightlife"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 italic uppercase">LUXURY FLEET</h1>
          <p className="text-xl text-electric-blue font-bold tracking-[0.2em] uppercase">Private Events & Elite Transportation</p>
        </div>
      </div>

      {/* Fleet */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="space-y-32">
          {RENTAL_VEHICLES.map((vehicle, idx) => (
            <div key={vehicle.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full lg:w-3/5">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="rounded-lg shadow-2xl border border-gray-800"
                />
              </div>
              <div className="w-full lg:w-2/5">
                <span className="text-electric-blue font-bold mb-2 block tracking-widest uppercase">Gainsville's Finest</span>
                <h2 className="text-4xl font-black text-white mb-6 italic uppercase">{vehicle.name}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {vehicle.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {vehicle.amenities.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="text-electric-blue mr-2 shrink-0" size={18} />
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="#book" 
                  className="inline-block bg-electric-blue text-white px-10 py-4 font-black text-lg hover:bg-white hover:text-black transition-all"
                >
                  RESERVE NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white italic uppercase mb-4">RENTAL PACKAGES</h2>
            <p className="text-gray-500">Transparent pricing for premium service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RENTAL_PACKAGES.map((pkg, i) => (
              <div key={i} className="bg-[#1a1a1a] p-10 border border-gray-800 flex flex-col hover:border-electric-blue transition-all">
                <h3 className="text-2xl font-black text-white mb-2 uppercase">{pkg.name}</h3>
                <div className="text-3xl font-black text-electric-blue mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-electric-blue mr-3 rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#book" className="text-center border-2 border-white/10 py-3 text-white font-bold hover:bg-white hover:text-black transition-all">CHOOSE PLAN</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="book" className="py-24 max-w-4xl mx-auto px-4">
        <div className="bg-[#1a1a1a] p-8 md:p-16 border border-gray-800 rounded-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white italic uppercase mb-4">RESERVE YOUR DATE</h2>
            <p className="text-gray-400">Tell us about your event and we'll get you a custom quote within hours.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">EVENT DATE</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">VEHICLE CHOICE</label>
                <select 
                  className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                  onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                >
                  <option value="party-bus">Gator Party Bus (25 Pax)</option>
                  <option value="escalade-limo">Escalade Limousine (14 Pax)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-2">EVENT DETAILS</label>
              <textarea 
                rows={4}
                placeholder="Where are you going? Any special requests?"
                className="w-full bg-[#111111] border border-gray-800 p-4 text-white focus:outline-none focus:border-electric-blue"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button className="w-full bg-electric-blue text-white py-5 font-black text-xl hover:bg-[#0089bd] transition-all">
              SEND RESERVATION REQUEST
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Rentals;
