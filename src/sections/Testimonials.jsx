import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Code, Coffee, Layers, Zap, BookOpen } from 'lucide-react';
import { testimonialsData, funFacts } from '../data/portfolioData';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const t = testimonialsData[currentIdx];

  const getFactIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Coffee': return Coffee;
      case 'Layers': return Layers;
      case 'Zap': return Zap;
      case 'BookOpen': return BookOpen;
      default: return Code;
    }
  };

  return (
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#090D16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
              09. Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mentor & Peer <span className="text-gradient-accent">Testimonials</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 relative">
            <Quote className="w-12 h-12 text-brand-purple/20 absolute top-6 left-6" />

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed font-sans">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-slate-400 font-mono">{t.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-white font-mono">Fun Developer Facts</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {funFacts.map((fact) => {
              const Icon = getFactIcon(fact.icon);
              return (
                <div key={fact.label} className="glass-panel rounded-2xl p-4 border border-white/10 text-center space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan mx-auto flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold font-mono text-white">{fact.value}</div>
                  <div className="text-[11px] text-slate-400">{fact.label}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
