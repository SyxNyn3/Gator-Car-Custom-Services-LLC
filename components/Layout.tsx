
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#111111]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tighter text-white">GATOR CAR</span>
              <span className="text-xs font-bold text-electric-blue -mt-1 tracking-[0.2em]">CUSTOM SERVICES</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path 
                      ? 'text-electric-blue' 
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 text-sm font-semibold transition-colors`}
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-electric-blue text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#0089bd] transition-all transform hover:scale-105"
              >
                CALL NOW
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-white border-b border-gray-900"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="block w-full text-center bg-electric-blue text-white px-5 py-4 mt-4 font-bold"
            >
              CALL {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-black text-white mb-6">GATOR CAR CUSTOMS</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Gainesville's premier destination for high-end automotive modification, professional paint, and luxury event rentals. Family owned and operated since day one.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_INFO.socials.facebook} className="text-gray-400 hover:text-electric-blue transition-colors">
                <Facebook />
              </a>
              <a href={BUSINESS_INFO.socials.instagram} className="text-gray-400 hover:text-electric-blue transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-electric-blue mb-6 tracking-widest">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/rentals" className="text-gray-400 hover:text-white transition-colors">Event Rentals</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Get A Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-electric-blue mb-6 tracking-widest">VISIT US</h4>
            <div className="space-y-4">
              <div className="flex items-start text-gray-400">
                <MapPin className="mr-3 text-electric-blue shrink-0" size={20} />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="mr-3 text-electric-blue shrink-0" size={20} />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="mr-3 text-electric-blue shrink-0" size={20} />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
