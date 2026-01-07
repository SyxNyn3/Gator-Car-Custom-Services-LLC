
import React from 'react';

const Gallery = () => {
  const categories = ["ALL PROJECTS", "CUSTOM PAINT", "INTERIORS", "OFF-ROAD", "RENTALS"];
  
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/custom-${i}/800/800`,
    title: `Project ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1]
  }));

  return (
    <div className="bg-[#111111] min-h-screen">
      <div className="bg-black py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white italic mb-6">WORK SHOWCASE</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat, i) => (
              <button key={i} className={`px-6 py-2 text-xs font-bold tracking-widest rounded-full border transition-all ${i === 0 ? 'bg-electric-blue border-electric-blue text-white' : 'border-gray-800 text-gray-500 hover:text-white hover:border-gray-500'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="group relative aspect-square overflow-hidden bg-gray-900 rounded-sm">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-electric-blue text-xs font-black tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white text-lg font-bold uppercase italic">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-lg mb-8">Want your ride featured here?</p>
          <a href="/#/contact" className="bg-electric-blue text-white px-12 py-5 font-black text-lg hover:bg-white hover:text-black transition-all uppercase">Start Your Build</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
