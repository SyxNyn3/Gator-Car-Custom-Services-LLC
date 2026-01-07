
import React from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white italic uppercase mb-8 leading-none">
              A LEGACY OF <br/><span className="text-electric-blue">CRAFTSMANSHIP.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              Family-owned and operated in the heart of Gainesville, Gator Car Custom Services was born out of a pure passion for automotive excellence. We aren't just a shop; we're a community of enthusiasts dedicated to pushing the boundaries of what a vehicle can be.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-electric-blue/10 p-3 rounded-lg mr-4">
                  <Award className="text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg italic uppercase">Precision First</h4>
                  <p className="text-gray-500">We obsess over the details that others ignore.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-electric-blue/10 p-3 rounded-lg mr-4">
                  <Heart className="text-electric-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg italic uppercase">Community Driven</h4>
                  <p className="text-gray-500">Supporting local businesses and Gator nation since day one.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/shop-team/800/1000" 
              alt="The Team" 
              className="rounded-lg border border-gray-800"
            />
            <div className="absolute -bottom-8 -left-8 bg-electric-blue p-8 rounded-sm shadow-xl hidden md:block">
              <span className="block text-4xl font-black text-white italic">15+</span>
              <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">YEARS IN GAINESVILLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black py-24 border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white italic uppercase mb-16">THE GATOR PROMISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-electric-blue mb-6 flex justify-center"><Users size={48} /></div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic">Family Ownership</h3>
              <p className="text-gray-400">When you bring your car to us, you're not just a client—you're family. We stand behind every weld, every spray, and every stitch.</p>
            </div>
            <div>
              <div className="text-electric-blue mb-6 flex justify-center"><MapPin size={48} /></div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic">Gainesville Roots</h3>
              <p className="text-gray-400">Deeply embedded in the 352. We hire local talent and give back to our Florida community through events and sponsorships.</p>
            </div>
            <div>
              <div className="text-electric-blue mb-6 flex justify-center"><Award size={48} /></div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase italic">Quality Guarantee</h3>
              <p className="text-gray-400">We work with the best suppliers and the latest technology to ensure your investment is protected and perfected.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team CTA */}
      <section className="py-24 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase">READY TO START YOUR BUILD?</h2>
          <a href="/#/contact" className="bg-black text-white px-16 py-6 font-black text-xl hover:bg-white hover:text-black transition-all inline-block shadow-2xl uppercase">Talk To An Expert</a>
        </div>
      </section>
    </div>
  );
};

export default About;
