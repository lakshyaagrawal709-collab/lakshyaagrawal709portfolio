import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Shell
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import LoadingScreen from './components/layout/LoadingScreen';
import CommandPalette from './components/layout/CommandPalette';
import TerminalWidget from './components/ui/TerminalWidget';
import CaseStudyModal from './components/features/CaseStudyModal';

// Portfolio Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Dashboard from './sections/Dashboard';
import TechStack from './sections/TechStack';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import ResumeSection from './sections/ResumeSection';
import BlogSection from './sections/BlogSection';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

// Custom Hooks
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useKonamiCode } from './hooks/useKonamiCode';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useKonamiCode(() => {
    setEasterEggActive(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
    setTimeout(() => setEasterEggActive(false), 8000);
  });

  useKeyboardShortcuts({
    onOpenCommandPalette: () => setIsCommandPaletteOpen(true)
  });

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans relative selection:bg-brand-purple/30 selection:text-brand-purple">
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <CustomCursor />

          <AnimatePresence>
            {easterEggActive && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-brand-cyan to-brand-purple text-white font-mono text-xs font-bold shadow-2xl border border-white/20 flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
                <span>🎮 KONAMI CODE UNLOCKED! Welcome to Lakshay's Secret Developer Mode!</span>
              </motion.div>
            )}
          </AnimatePresence>

          <Navbar
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <main className="relative">
            <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
            <About />
            <Dashboard />
            <TechStack />
            <Skills />
            <Projects onOpenCaseStudy={(proj) => setActiveCaseStudy(proj)} />
            <Timeline />
            <ResumeSection />
            <BlogSection />
            <Testimonials />
            <Contact />
          </main>

          <Footer />

          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <TerminalWidget
            isOpen={isTerminalOpen}
            onClose={() => setIsTerminalOpen(false)}
          />

          <CaseStudyModal
            project={activeCaseStudy}
            onClose={() => setActiveCaseStudy(null)}
          />
        </>
      )}
    </div>
  );
}
