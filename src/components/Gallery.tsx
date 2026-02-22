import React from 'react';
import { GALLERY_IMAGES } from '../constants.ts';

const Gallery: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-20">
        <span className="font-cursive text-6xl text-pink-400 block mb-2">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.3em] text-gray-700">Doll Looks</h2>
        <p className="text-pink-300 font-playful text-xl mt-4">Browse our most stylish creations ✨</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className="relative group overflow-hidden break-inside-avoid shadow-2xl rounded-[2rem] border-4 border-white hover-girlish">
            {img.type === 'video' ? (
              <div className="aspect-[9/16] w-full">
                <iframe
                  src={`${img.url}?autoplay=1&loop=1&background=1&muted=1`}
                  className="w-full h-full object-cover"
                  allow="autoplay; fullscreen"
                  title={img.title}
                ></iframe>
              </div>
            ) : (
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 pointer-events-none">
              <span className="text-xs text-white/90 uppercase tracking-[0.3em] font-bold mb-2">✨ {img.category}</span>
              <h3 className="text-white font-cursive text-4xl drop-shadow-md">{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <button className="bg-white border-2 border-pink-200 px-12 py-5 rounded-full text-pink-500 font-bold uppercase tracking-widest hover:bg-pink-50 transition-all shadow-lg hover-girlish">
          See More Inspo 🎀
        </button>
      </div>
    </section>
  );
};

export default Gallery;