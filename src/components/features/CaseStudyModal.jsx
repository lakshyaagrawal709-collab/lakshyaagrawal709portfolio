import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, Zap, Layers } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-3xl glass-panel rounded-3xl border border-white/15 overflow-hidden my-8 shadow-2xl bg-[#0D1322]/95"
        >
          <div className="relative h-56 sm:h-72 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-[#0D1322]/60 to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-brand-purple/30 border border-brand-purple/40 text-brand-purple text-xs font-mono font-semibold">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 font-medium">
                {project.tagline}
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-cyan mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Overview & Engineering Details
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {project.metrics && (
              <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-blue">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-bold">Key Performance Outcome:</span>
                </div>
                <span className="text-xs font-bold text-white font-mono">{project.metrics}</span>
              </div>
            )}

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-brand-purple" /> Technologies Employed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.challenges && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Technical Challenges Solved
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-amber-400 font-bold font-mono">0{i+1}.</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.features && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Feature Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200 p-2.5 rounded-lg bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" /> View Repository
              </a>
              
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-semibold flex items-center gap-2 shadow-glow-purple hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Launch Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
