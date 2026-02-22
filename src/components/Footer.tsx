import React from 'react';
import { Link } from 'react-router-dom';
import { SALON_PHONE } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-pink-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <h2 className="font-cursive text-6xl glitter-text mb-8 tracking-wider">Dolluxe</h2>
            <p className="max-w-sm font-playful text-xl leading-relaxed text-gray-500 italic">
                A pink paradise dedicated to the art of the perfect manicure. Founded by Emmanuella Okolodo, where every set is a sparkling masterpiece. ✨
            </p>
          </div>
          <div>
            <h4 className="text-pink-500 text-xs uppercase tracking-[0.3em] mb-8 font-bold">The Atelier</h4>
            <ul className="space-y-4 text-sm font-bold tracking-widest text-gray-400">
              <li><Link to="/" className="hover:text-pink-500 transition-colors uppercase">Atelier Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-500 transition-colors uppercase">Meet Emmanuella</Link></li>
              <li><Link to="/gallery" className="hover:text-pink-500 transition-colors uppercase">The Glow Wall</Link></li>
              <li><Link to="/book" className="hover:text-pink-500 transition-colors uppercase">Reservations 🎀</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-pink-500 text-xs uppercase tracking-[0.3em] mb-8 font-bold">Social Glow</h4>
            <ul className="space-y-4 text-sm font-bold tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-pink-500 transition-colors uppercase">Instagram ✨</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors uppercase">TikTok 💅</a></li>
              <li><a href={`https://wa.me/${SALON_PHONE}`} className="hover:text-pink-500 transition-colors uppercase">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t-2 border-pink-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-pink-300 font-bold">© 2024 DOLLUXE NAIL SALON. Be Your Own Kind Of Sparkle. 💖</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.4em] text-pink-300">
            <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;