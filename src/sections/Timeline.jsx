import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Award, CheckCircle2, Calendar, BookOpen } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Milestones' },
    { id: 'education', label: 'Education' },
    { id: 'internship', label: 'Internships' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'certification', label: 'Certifications' }
  ];

  const filteredItems = activeTab === 'all'
    ? timelineData
    : timelineData.filter(item => item.type === activeTab);

  const getIcon = (type) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'internship': return Briefcase;
      case 'achievement': return Award;
      case 'certification': return CheckCircle2;
      default: return BookOpen;
    }
  };

  return (
    <section id="timeline" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            06. Academic & Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            MBA Tech Computer Engineering degree, engineering workshops, and technical certifications.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white border-transparent shadow-glow-purple scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const Icon = getIcon(item.type);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#090D16] border-2 border-brand-purple flex items-center justify-center text-brand-purple shadow-glow-purple group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="sm:absolute sm:-left-32 sm:top-2 text-xs font-mono text-brand-cyan font-bold mb-1 sm:mb-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.year}
                    </span>
                  </div>

                  <div className="glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">{item.institution}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {item.badges && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.badges.map((b) => (
                          <span key={b} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                            {b}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
