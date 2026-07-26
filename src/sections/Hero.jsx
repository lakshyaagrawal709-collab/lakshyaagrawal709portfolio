import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Sparkles, Code2, Database, ShieldCheck, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const [typedRoleIndex, setTypedRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full Stack Web Developer',
    'MBA Tech Computer Engineer',
    'Data Analytics Enthusiast',
    'Machine Learning Learner'
  ];

  useEffect(() => {
    const targetText = roles[typedRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === targetText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(targetText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTypedRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono text-slate-300">{personalData.status}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan">{personalData.name}</span>
          </h1>

          <div className="h-10 text-xl sm:text-2xl font-mono text-brand-cyan font-bold flex items-center justify-center lg:justify-start gap-1">
            <span>{currentText}</span>
            <span className="w-2.5 h-6 bg-brand-purple animate-pulse"></span>
          </div>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
            {personalData.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-semibold shadow-glow-purple hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore 10 Projects <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenTerminal}
              className="px-5 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-slate-200 text-sm font-mono border border-white/10 flex items-center gap-2.5 transition-all hover:border-brand-cyan"
            >
              <Terminal className="w-4 h-4 text-brand-cyan" /> Launch CLI Terminal
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" /> {personalData.location}
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-brand-purple" /> Full Stack + ML + IoT
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> MBA Tech CE Graduate
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500"></div>

            <div className="relative glass-panel rounded-3xl p-6 border border-white/20 bg-[#0D1322]/90 shadow-2xl flex flex-col items-center text-center space-y-5">
              
              <div className="relative w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-brand-blue to-brand-purple shadow-glow-purple">
                <div className="w-full h-full rounded-[14px] bg-[#090D16] flex items-center justify-center font-extrabold text-3xl text-white tracking-widest font-mono">
                  LA
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-emerald-500 border-2 border-[#090D16]" title="Online for opportunities">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{personalData.name}</h3>
                <p className="text-xs text-brand-purple font-mono font-medium mt-0.5">{personalData.subRole}</p>
              </div>

              <div className="w-full grid grid-cols-2 gap-2 pt-2 text-left">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono">Completed</span>
                  <p className="text-base font-bold text-white font-mono">10 Projects</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-slate-400 font-mono">GitHub</span>
                  <p className="text-base font-bold text-brand-cyan font-mono">520+ Commits</p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/10 transition-all text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
