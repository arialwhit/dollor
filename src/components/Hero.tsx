
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Pink Nails" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 via-pink-400/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFF5F7]/80"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-playful tracking-[0.2em] mb-4 text-pink-500 font-bold bg-white/80 px-4 py-1 rounded-full shadow-sm">
            ✨ Welcome to Dolluxe
          </span>
          <h1 className="text-7xl md:text-9xl font-cursive leading-tight mb-6 text-white drop-shadow-2xl">
            Sparkle <br />
            <span className="glitter-text italic">Brightly</span>
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-pink-950/80 tracking-wide max-w-lg font-playful">
            Every set is a masterpiece. Treat yourself to the luxury, pink, and glitter you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/book" 
              className="bg-pink-500 hover:bg-pink-400 text-white px-12 py-5 text-xs uppercase tracking-[0.4em] transition-all text-center shadow-2xl rounded-full font-bold hover-girlish"
            >
              Book My Glow ✨
            </Link>
            <Link 
              to="/gallery" 
              className="bg-white/40 backdrop-blur-md border-2 border-white hover:bg-white text-pink-600 px-12 py-5 text-xs uppercase tracking-[0.4em] transition-all text-center rounded-full font-bold shadow-lg"
            >
              View Designs
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="animate-bounce">
            <div className="w-10 h-10 border-2 border-pink-300 rounded-full flex items-center justify-center">
                <span className="text-pink-400">↓</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
