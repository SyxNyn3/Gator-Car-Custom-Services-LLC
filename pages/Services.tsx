
import React from 'react';
import { 
  Paintbrush, 
  ShieldCheck, 
  Settings, 
  Music, 
  Sun, 
  Sparkles, 
  Wrench, 
  Truck, 
  Zap, 
  Speaker,
  Layers,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICE_ITEMS = [
  { title: "Custom Paint & Body", desc: "Full frame-off restorations, color changes, and candy finishes.", icon: Paintbrush },
  { title: "Collision Repair", desc: "Expert dent removal, frame straightening, and paint matching.", icon: ShieldCheck },
  { title: "Suspension Work", desc: "Lift kits for trucks or lowering/bagged setups for street cars.", icon: Settings },
  { title: "Audio & Entertainment", desc: "Custom subwoofer enclosures, head units, and speakers.", icon: Music },
  { title: "Window Tinting", desc: "Heat-rejection ceramic films and charcoal tints for privacy.", icon: Sun },
  { title: "Full Detailing", desc: "Ceramic coatings, clay bar, and engine bay cleaning.", icon: Sparkles },
  { title: "Upholstery", desc: "Custom leather interiors, headliners, and carpet replacement.", icon: Layers },
  { title: "Lighting Systems", desc: "Underglow, interior LEDs, and headlight conversions.", icon: Zap },
  { title: "Rims & Tires", desc: "The largest local inventory of high-end brands.", icon: Truck }
];

const Services = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Header */}
      <div className="bg-black py-20 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic">OUR SERVICES</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From basic maintenance to full-blown custom builds, we handle everything under one roof. No job is too big or too small.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((item, index) => (
            <div key={index} className="bg-[#1a1a1a] p-10 border border-gray-800 hover:border-electric-blue transition-all group">
              <div className="bg-gray-900 w-16 h-16 rounded-sm flex items-center justify-center mb-8 group-hover:bg-electric-blue transition-colors">
                <item.icon className="text-electric-blue group-hover:text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase italic tracking-wider">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {item.desc}
              </p>
              <Link 
                to="/contact" 
                className="text-sm font-bold text-electric-blue border-b-2 border-transparent hover:border-electric-blue transition-all inline-block"
              >
                REQUEST PRICING
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Section */}
      <section className="bg-electric-blue py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-white mb-4">INSURANCE CLAIMS?</h2>
            <p className="text-white/80 text-lg">
              We handle the headache for you. Gator Car Customs works directly with your insurance provider to ensure your vehicle is repaired to the highest safety standards using quality parts.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-black px-12 py-5 font-black text-lg hover:bg-black hover:text-white transition-all whitespace-nowrap"
          >
            START YOUR CLAIM
          </Link>
        </div>
      </section>

      {/* Custom Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase italic mb-4">THE GATOR WAY</h2>
            <div className="w-24 h-1 bg-electric-blue mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULTATION", desc: "We sit down to discuss your vision, budget, and timeline." },
              { step: "02", title: "STRATEGY", desc: "Our technicians blueprint every detail of the custom build." },
              { step: "03", title: "EXECUTION", desc: "The magic happens in our state-of-the-art Gainesville facility." },
              { step: "04", title: "DELIVERY", desc: "The keys are handed over for the final reveal of your dream ride." }
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black text-electric-blue/20 mb-4">{p.step}</div>
                <h4 className="text-xl font-black text-white mb-2">{p.title}</h4>
                <p className="text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
