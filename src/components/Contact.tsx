import React from 'react';
import { SALON_PHONE } from '../constants.ts';

const Contact: React.FC = () => {
  const displayPhone = "+234 905 196 9721";

  return (
    <section className="pt-32 pb-24 bg-[#FFF5F7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <span className="font-cursive text-7xl text-pink-400 block mb-2">Visit Us</span>
            <h2 className="text-4xl font-bold uppercase tracking-[0.3em] text-gray-700">The Sparkle Station</h2>
            <p className="text-pink-300 font-playful text-xl mt-4">Your luxury escape is just around the corner 🎀</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
            <div className="text-center p-12 bg-white rounded-[2rem] shadow-xl hover-girlish border-2 border-pink-50 group">
                <div className="mb-6 text-pink-400 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">📍</div>
                <h3 className="font-cursive text-3xl mb-4 text-gray-800">Atelier Location</h3>
                <p className="text-gray-500 text-lg font-playful leading-relaxed">Luxury Arts Center<br />Lagos, Nigeria</p>
            </div>
            <div className="text-center p-12 bg-white rounded-[2rem] shadow-xl hover-girlish border-2 border-pink-50 group">
                <div className="mb-6 text-pink-400 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">📱</div>
                <h3 className="font-cursive text-3xl mb-4 text-gray-800">Direct Line</h3>
                <p className="text-gray-500 text-lg font-playful leading-relaxed">WhatsApp: {displayPhone}<br />hello@dolluxe.com</p>
            </div>
            <div className="text-center p-12 bg-white rounded-[2rem] shadow-xl hover-girlish border-2 border-pink-50 group">
                <div className="mb-6 text-pink-400 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse">⏰</div>
                <h3 className="font-cursive text-3xl mb-4 text-gray-800">Doll Hours</h3>
                <p className="text-gray-500 text-lg font-playful leading-relaxed">Tue - Sat: 10am - 8pm<br />Sun - Mon: VIP Only ✨</p>
            </div>
        </div>

        <div className="h-[500px] w-full bg-white p-4 rounded-[3rem] shadow-2xl border-4 border-white overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.54516757132!2d3.313438843359375!3d6.454740700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a3da577a90!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '2.5rem', filter: 'sepia(30%) hue-rotate(-20deg) saturate(120%)' }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;