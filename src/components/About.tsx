import React from 'react';
import { ABOUT_VIDEO_URL } from '../constants.ts';

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Literally the most magical set I've ever had! Emmanuella is a pink & glitter wizard. My nails are pure perfection! 💖",
    stars: 5
  },
  {
    name: "Michelle Okoro",
    text: "I feel like a total doll every time I leave DOLLUXE. The vibe is so chic and girlish. Best nail experience ever! ✨",
    stars: 5
  },
  {
    name: "Elena Kostas",
    text: "Sparkly, sanitary, and so stylish. She created the most beautiful custom design for my birthday. I'm obsessed! 🎀",
    stars: 5
  }
];

const About: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-[#FFF5F7]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20 mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-pink-200 rounded-[3rem] rotate-3 -z-10 opacity-30 animate-pulse"></div>
            <div className="w-full h-[650px] shadow-[0_20px_60px_rgba(255,105,180,0.3)] rounded-[2.5rem] border-8 border-white overflow-hidden">
              <iframe
                src={`${ABOUT_VIDEO_URL}?autoplay=1&loop=1&background=1&muted=1`}
                className="w-full h-full object-cover"
                allow="autoplay; fullscreen"
                title="Emmanuella Okolodo - Nail Artist"
              ></iframe>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white border-2 border-pink-100 p-8 hidden md:block rounded-3xl shadow-2xl hover-girlish">
              <p className="font-cursive text-5xl text-pink-500">"Every doll deserves to sparkle."</p>
            </div>
          </div>
          
          <div className="max-w-2xl order-1 lg:order-2">
            <span className="text-sm uppercase tracking-[0.5em] text-pink-400 mb-6 block font-bold">Meet Your Artist ✨</span>
            <h2 className="text-7xl md:text-8xl font-cursive mb-10 leading-tight text-gray-800">
              Hello Sweetie — <br />
              <span className="glitter-text italic">I'm Emmanuella</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-xl font-playful">
              <p>
                Welcome to my world of magic! At <span className="font-bold text-pink-500 underline decoration-pink-200 decoration-4">DOLLUXE NAIL SALON</span>, I believe your nails are the crowning glory of your style.
              </p>
              
              <p>
                For over 3 years, I've obsessed over every glitter flake and pink shade to bring you the most trendy, stylish, and perfect designs. My mission is to make sure every doll leaves feeling like royalty.
              </p>
              
              <p className="font-bold text-pink-500 text-2xl drop-shadow-sm">
                Ready to glow up? Let's make some magic! 💅✨
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-white text-[10px] shadow-lg group-hover:scale-125 transition-all">💖</div>
                <p className="text-sm uppercase tracking-widest font-bold text-gray-500 group-hover:text-pink-500 transition-colors">Premium Glitter & Pink Gels</p>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-white text-[10px] shadow-lg group-hover:scale-125 transition-all">🎀</div>
                <p className="text-sm uppercase tracking-widest font-bold text-gray-500 group-hover:text-pink-500 transition-colors">Stylish & Girlish Artistry</p>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-white text-[10px] shadow-lg group-hover:scale-125 transition-all">✨</div>
                <p className="text-sm uppercase tracking-widest font-bold text-gray-500 group-hover:text-pink-500 transition-colors">Your Sanctuary of Sparkle</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 border-t-4 border-dashed border-pink-100">
          <div className="text-center mb-16">
            <span className="text-pink-400 text-7xl font-cursive block mb-4">Glow Talk</span>
            <h2 className="text-2xl uppercase tracking-[0.4em] font-bold text-gray-600">The Doll Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-12 shadow-[0_15px_40px_rgba(255,192,203,0.2)] border-2 border-pink-50 rounded-[2.5rem] relative group hover-girlish overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-pink-50 rounded-bl-[2.5rem] -mr-10 -mt-10 group-hover:mr-0 group-hover:mt-0 transition-all duration-500"></div>
                <div className="flex gap-2 mb-6">
                  {[...Array(t.stars)].map((_, starIdx) => (
                    <span key={starIdx} className="text-pink-400 text-2xl drop-shadow-sm">⭐</span>
                  ))}
                </div>
                <p className="font-playful text-2xl text-gray-700 leading-relaxed mb-8 italic relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-0.5 bg-pink-300"></div>
                  <span className="text-xs uppercase tracking-widest font-bold text-pink-500">Doll: {t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;