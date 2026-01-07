
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, Shield, Star, CheckCircle } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const RotatingText = () => {
  const words = ["STANDARD.", "ORDINARY.", "CUSTOM.", "ELITE."];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true);
      }, 500); // Duration of fade out
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-electric-blue transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
      {words[index]}
    </span>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Video Background */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 scale-105"
            poster="https://picsum.photos/seed/garage/1920/1080"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-car-headlights-in-the-dark-at-night-4436-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-[#111111]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tighter">
              BEYOND <br/><RotatingText />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium max-w-2xl animate-pulse-slow">
              Gainesville's elite custom shop for paint, performance, and luxury rentals. We don't just fix cars—we build icons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-electric-blue text-white px-10 py-5 rounded-sm font-black text-lg hover:bg-[#0089bd] transition-all text-center flex items-center justify-center group shadow-[0_0_20px_rgba(0,174,239,0.3)] hover:shadow-[0_0_30px_rgba(0,174,239,0.6)]"
              >
                GET A FREE QUOTE <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/5 backdrop-blur-lg text-white border border-white/10 px-10 py-5 rounded-sm font-black text-lg hover:bg-white hover:text-black transition-all text-center"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-500">
          <span className="text-[10px] font-bold tracking-[0.3em] mb-2">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-electric-blue to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-electric-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-white">15+</div>
            <div className="text-xs font-bold text-white/80 tracking-widest">YEARS EXPERIENCE</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white">2.5K+</div>
            <div className="text-xs font-bold text-white/80 tracking-widest">CARS MODIFIED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white">100%</div>
            <div className="text-xs font-bold text-white/80 tracking-widest">INSURANCE APPROVED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white">#1</div>
            <div className="text-xs font-bold text-white/80 tracking-widest">LOCAL RATED SHOP</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-electric-blue font-bold tracking-[0.3em] text-sm mb-4 block uppercase">No Job Too Big Or Too Small</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">PREMIUM CRAFTSMANSHIP</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-gray-800 transition-all hover:border-electric-blue hover:-translate-y-2 duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" 
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-electric-blue transition-colors uppercase italic">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-sm font-bold text-white flex items-center hover:text-electric-blue transition-colors">
                  LEARN MORE <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            className="inline-block border-2 border-electric-blue text-electric-blue px-10 py-4 font-black hover:bg-electric-blue hover:text-white transition-all"
          >
            VIEW ALL 15+ SERVICES
          </Link>
        </div>
      </section>

      {/* Rentals Tease */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none">
              RIDE WITH THE <br/><span className="text-electric-blue">ELITE.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-medium">
              Need a party bus for a Gator tailgate or an Escalade Limo for a wedding? We own the finest fleet in Gainesville. Fully loaded, professionally driven.
            </p>
            <Link 
              to="/rentals" 
              className="bg-white text-black px-12 py-5 font-black text-lg hover:bg-electric-blue hover:text-white transition-all inline-block"
            >
              BOOK A RENTAL
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-4 border-2 border-electric-blue/30 rounded-lg -rotate-3 z-0"></div>
            <img 
              src="https://picsum.photos/seed/limo-home/800/600" 
              alt="Limo Rental" 
              className="relative z-10 rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials / Trust */}
      <section className="py-24 bg-[#111111] border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <Star className="text-electric-blue mb-4" size={40} />
            <h4 className="text-xl font-bold text-white mb-2 italic uppercase tracking-wider">Top Rated</h4>
            <p className="text-gray-400 italic">"The only shop I trust with my interior. These guys are craftsmen."</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="text-electric-blue mb-4" size={40} />
            <h4 className="text-xl font-bold text-white mb-2 italic uppercase tracking-wider">Insured Work</h4>
            <p className="text-gray-400 italic">"Handled my insurance claim perfectly after a collision. Car looks better than new."</p>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="text-electric-blue mb-4" size={40} />
            <h4 className="text-xl font-bold text-white mb-2 italic uppercase tracking-wider">Local Pride</h4>
            <p className="text-gray-400 italic">"Family owned. They treat you like family. Gator fans through and through."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
