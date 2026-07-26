import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [techStep, setTechStep] = useState(0);

  const techList = ['C++', 'Java', 'Python', 'React.js', 'Node.js', 'MongoDB', 'Streamlit', 'Robotics'];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    const techTimer = setInterval(() => {
      setTechStep((prev) => (prev + 1) % techList.length);
    }, 250);

    return () => {
      clearInterval(timer);
      clearInterval(techTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-[#090D16] flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-purple p-0.5 shadow-glow-purple mb-6"
        >
          <div className="w-full h-full bg-[#0D1322] rounded-[14px] flex items-center justify-center text-white">
            <Code2 className="w-8 h-8 text-brand-blue animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold text-white tracking-tight"
        >
          Lakshay Agrawal
        </motion.h1>
        
        <p className="text-xs text-slate-400 mt-1 mb-6 font-mono flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-brand-cyan" /> Initializing portfolio system...
        </p>

        <div className="h-8 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={techList[techStep]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-purple"
            >
              loading module: {techList[techStep]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="w-full bg-white/5 h-2 rounded-full border border-white/10 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="w-full flex justify-between items-center text-[11px] font-mono text-slate-400 mt-2">
          <span>SYSTEM_READY</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
