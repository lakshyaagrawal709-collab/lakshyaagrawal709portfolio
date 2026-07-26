import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Command, Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

export default function Navbar({ onOpenCommandPalette, theme, toggleTheme, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 glass-panel border-b border-white/10 shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-glow-purple group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5.5 h-5.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-brand-blue transition-colors">
              Lakshay<span className="text-brand-purple">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Stack & ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            title="Open Command Palette (Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 text-brand-purple" />
            <span>Cmd+K</span>
          </button>

          <button
            onClick={onOpenTerminal}
            className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-4 h-4 text-brand-cyan" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-purple" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090D16]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-white/10 hover:text-brand-purple transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
