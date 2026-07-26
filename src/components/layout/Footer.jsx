import React, { useState } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Copy, Check, Eye } from 'lucide-react';
import { personalData } from '../../data/portfolioData';
import { useVisitorCount } from '../../hooks/useVisitorCount';

export default function Footer() {
  const visitorCount = useVisitorCount();
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#070A12] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold text-white">Lakshay Agrawal</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue border border-brand-blue/30 font-mono">
                MBA Tech CE
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Full Stack Web Developer & Data Analytics Enthusiast. Building high-performance SaaS applications, ML dashboards, embedded robotics, and AI-assisted tools.
            </p>

            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-brand-purple" />}
                <span>{personalData.email}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Navigation</h4>
            <a href="#about" className="text-sm text-slate-300 hover:text-brand-purple transition-colors">About Story</a>
            <a href="#dashboard" className="text-sm text-slate-300 hover:text-brand-purple transition-colors">Developer Stats</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-brand-purple transition-colors">10 Featured Projects</a>
            <a href="#skills" className="text-sm text-slate-300 hover:text-brand-purple transition-colors">Skills & Tech Stack</a>
            <a href="#resume" className="text-sm text-slate-300 hover:text-brand-purple transition-colors">Resume Preview</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Social Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Eye className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Total Portfolio Views</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {visitorCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Lakshay Agrawal. Built with React, Tailwind & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> in India
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
