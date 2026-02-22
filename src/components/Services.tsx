import React from 'react';
import { PRICE_LIST } from '../constants.ts';

const Services: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-20">
        <span className="font-cursive text-6xl text-pink-400 block mb-2">The Menu</span>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.3em] text-gray-700">Price List</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
        {PRICE_LIST.map((category, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-pink-400">✦</span>
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between items-center group">
                  <span className="text-gray-600 group-hover:text-pink-500 transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-pink-100 mx-4 h-4"></div>
                  <span className="font-bold text-pink-500 font-playful text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto text-center space-y-6">
        <div className="bg-pink-50 p-6 rounded-2xl border-2 border-dashed border-pink-200">
          <p className="text-pink-600 font-medium text-lg italic">
            "All sets come with a free manicure service 😍😍😍. Courtesy of Dolluxe."
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          Please note: All prices are fixed and will not be changed except a discount has been offered 🥰
        </p>
      </div>
    </section>
  );
};

export default Services;
