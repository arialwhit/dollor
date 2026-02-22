import React, { useState } from 'react';
import { SERVICES, SALON_PHONE } from '../constants.ts';
import { BookingFormData } from '../types.ts';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    service: SERVICES[0].name,
    date: '',
    time: '',
    notes: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*NEW DOLLUXE BOOKING* ✨%0A%0A` +
      `*Doll Name:* ${formData.name}%0A` +
      `*Glow Service:* ${formData.service}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}%0A` +
      `*Inspo:* ${formData.notes || 'Surprise me!'}`;
    
    const whatsappUrl = `https://wa.me/${SALON_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-[#FFF5F7] to-white py-24 relative overflow-hidden">
      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float-heart opacity-30">💖</div>
      <div className="absolute bottom-20 right-20 text-4xl animate-float-heart opacity-20 delay-700">✨</div>
      <div className="absolute top-1/2 left-1/4 text-2xl animate-pulse opacity-20">🎀</div>

      <div className="container mx-auto px-6 max-w-4xl bg-white p-12 shadow-[0_30px_70px_rgba(255,105,180,0.15)] rounded-[3.5rem] border-8 border-pink-50 relative z-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-br-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-rose-100 rounded-tl-full opacity-30"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-7xl font-cursive mb-4 text-pink-500 drop-shadow-sm">Book Your Glow</h2>
          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase font-bold flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-pink-200"></span>
            Time for some magic
            <span className="w-8 h-[1px] bg-pink-200"></span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10 relative z-10">
          <div className="col-span-2 md:col-span-1 space-y-8">
            <div className="relative">
              <label className={`block text-[11px] uppercase tracking-widest font-bold mb-3 transition-colors ${focusedField === 'name' ? 'text-pink-500' : 'text-pink-300'}`}>
                Doll Name {focusedField === 'name' && '✨'}
              </label>
              <input 
                required
                type="text" 
                name="name"
                value={formData.name}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                className="w-full border-b-2 border-pink-100 outline-none py-4 text-gray-700 bg-transparent placeholder-pink-100 font-playful text-2xl focus-girlish"
                placeholder="Charlotte V."
              />
            </div>
            <div className="relative">
              <label className={`block text-[11px] uppercase tracking-widest font-bold mb-3 transition-colors ${focusedField === 'service' ? 'text-pink-500' : 'text-pink-300'}`}>
                Treat Yourself To... {focusedField === 'service' && '💅'}
              </label>
              <select 
                name="service"
                value={formData.service}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                className="w-full border-b-2 border-pink-100 outline-none py-4 text-gray-700 bg-white font-playful text-2xl focus-girlish appearance-none"
              >
                {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name} — {s.price}</option>)}
              </select>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <label className={`block text-[11px] uppercase tracking-widest font-bold mb-3 transition-colors ${focusedField === 'date' ? 'text-pink-500' : 'text-pink-300'}`}>
                  Date {focusedField === 'date' && '📅'}
                </label>
                <input 
                  required
                  type="date" 
                  name="date"
                  value={formData.date}
                  onFocus={() => setFocusedField('date')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  className="w-full border-b-2 border-pink-100 outline-none py-4 text-gray-700 bg-transparent font-playful text-lg focus-girlish"
                />
              </div>
              <div className="relative">
                <label className={`block text-[11px] uppercase tracking-widest font-bold mb-3 transition-colors ${focusedField === 'time' ? 'text-pink-500' : 'text-pink-300'}`}>
                  Time {focusedField === 'time' && '⏰'}
                </label>
                <input 
                  required
                  type="time" 
                  name="time"
                  value={formData.time}
                  onFocus={() => setFocusedField('time')}
                  onBlur={() => setFocusedField(null)}
                  onChange={handleChange}
                  className="w-full border-b-2 border-pink-100 outline-none py-4 text-gray-700 bg-transparent font-playful text-lg focus-girlish"
                />
              </div>
            </div>
            <div className="relative">
              <label className={`block text-[11px] uppercase tracking-widest font-bold mb-3 transition-colors ${focusedField === 'notes' ? 'text-pink-500' : 'text-pink-300'}`}>
                Inspo / Notes {focusedField === 'notes' && '🎀'}
              </label>
              <textarea 
                name="notes"
                value={formData.notes}
                onFocus={() => setFocusedField('notes')}
                onBlur={() => setFocusedField(null)}
                onChange={handleChange}
                rows={1}
                className="w-full border-b-2 border-pink-100 outline-none py-4 text-gray-700 resize-none bg-transparent font-playful text-2xl focus-girlish"
                placeholder="Describe your dream set..."
              />
            </div>
          </div>

          <div className="col-span-2 mt-12">
            <button 
              type="submit" 
              className="w-full bg-pink-500 text-white py-8 text-sm uppercase tracking-[0.5em] shadow-[0_15px_30px_rgba(255,105,180,0.4)] active:scale-[0.97] rounded-full font-bold hover-girlish relative overflow-hidden group"
            >
              <span className="relative z-10">Get Your Glow ✨ WhatsApp</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <div className="flex items-center justify-center gap-4 mt-8">
                <span className="text-pink-200">💖</span>
                <p className="text-[11px] text-pink-400 uppercase tracking-[0.2em] font-bold">
                  We'll respond with a heart in seconds
                </p>
                <span className="text-pink-200">💖</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;