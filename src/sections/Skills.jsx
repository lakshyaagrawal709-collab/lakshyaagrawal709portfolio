import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsCategories, skillsData } from '../data/portfolioData';
import { Code2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            04. Interactive Skills & Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Filter competencies across programming, web development, data analytics, and embedded systems.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white border-transparent shadow-glow-purple scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{skill.name}</h4>
                      <span className="text-[11px] text-slate-400 font-mono uppercase">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
                    {skill.level}%
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-mono text-right">{skill.highlight}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
