import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Data & ML', 'Embedded & IoT', 'Software & DB'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5 bg-[#090D16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            05. Complete Work Portfolio (10 Projects)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-accent">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            MERN stack web apps, ML prediction models, embedded robotics, C++ algorithms, Java OOP, and MySQL databases.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all border ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white border-transparent shadow-glow-purple scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-brand-purple/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-brand-cyan border border-white/10">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-brand-purple/80 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-blue">{project.tagline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-brand-purple" /> Case Study
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-brand-purple/20 hover:bg-brand-purple text-brand-purple hover:text-white border border-brand-purple/30 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
