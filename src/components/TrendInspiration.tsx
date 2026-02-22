
import React, { useEffect, useState } from 'react';
import { getModernNailTrends } from '../services/geminiService.ts';
import { TrendSuggestion } from '../types.ts';

const TrendInspiration: React.FC = () => {
  const [trends, setTrends] = useState<TrendSuggestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrends = async () => {
      const data = await getModernNailTrends();
      setTrends(data);
      setLoading(false);
    };
    fetchTrends();
  }, []);

  if (loading) return (
    <div className="container mx-auto px-6 py-24 flex justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-pink-100 border-t-pink-500 rounded-full animate-spin"></div>
        <p className="mt-4 font-playful text-pink-400 text-xl">Loading trends...</p>
      </div>
    </div>
  );

  if (trends.length === 0) return null;

  return (
    <section className="bg-pink-50/30 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-pink-400 text-6xl font-cursive block mb-2">Trend Report</span>
            <h2 className="text-3xl uppercase tracking-widest font-bold text-gray-700">The Perfection List</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-medium">
            Discover the most stylish, modern trends analyzed by AI for the ultimate Dolluxe experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trends.map((trend, index) => (
            <div key={index} className="bg-white p-10 shadow-lg rounded-3xl border-2 border-pink-50 hover-girlish group relative overflow-hidden">
              <div className="absolute -top-4 -right-4 text-pink-50 text-8xl font-cursive -rotate-12 group-hover:text-pink-100 transition-colors">0{index + 1}</div>
              <h3 className="text-3xl font-cursive mb-4 text-pink-500 relative z-10">{trend.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-playful text-lg relative z-10">{trend.description}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {trend.elements.map((el, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider bg-pink-50 px-4 py-2 rounded-full text-pink-400 font-bold border border-pink-100">
                    {el}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendInspiration;
