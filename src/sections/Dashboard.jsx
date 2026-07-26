import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, GitCommit, Coffee, Clock, Keyboard, Zap, Cpu } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Dashboard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
  const [typingScore, setTypingScore] = useState(82);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="dashboard" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            02. Live Metrics & Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="text-gradient-accent">Dashboard</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-time coding metrics, 10 completed projects, GitHub commits, and LeetCode activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Engineering Projects</span>
              <div className="p-2 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                <Code className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold font-mono text-white">10</div>
              <p className="text-xs text-slate-400 mt-1">Full Stack, ML, C++ & IoT</p>
            </div>
            <div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-blue h-full w-[100%] rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">GitHub Activity</span>
              <div className="p-2 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                <GitCommit className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold font-mono text-white">520+</div>
              <p className="text-xs text-slate-400 mt-1">Commits Across Repositories</p>
            </div>
            <div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-purple h-full w-[90%] rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">LeetCode Solved</span>
              <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold font-mono text-white">180+</div>
              <p className="text-xs text-slate-400 mt-1">DSA Problems in C++ & Java</p>
            </div>
            <div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-cyan h-full w-[85%] rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Coding Hours</span>
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Coffee className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold font-mono text-white">1,400+</div>
              <p className="text-xs text-slate-400 mt-1">Hours in VS Code & PyCharm</p>
            </div>
            <div className="mt-4 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-amber-400 h-full w-[95%] rounded-full"></div>
            </div>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-purple" /> Current Time (IST)
              </span>
              <div className="text-2xl font-bold font-mono text-white">{time}</div>
              <div className="text-xs text-slate-400">Mumbai / Indore, India (UTC+5:30)</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-brand-purple font-mono font-bold text-xs">
              LIVE
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Keyboard className="w-3.5 h-3.5 text-brand-cyan" /> Typing Speed Test
              </span>
              <div className="text-2xl font-bold font-mono text-white">{typingScore} WPM</div>
              <div className="text-xs text-emerald-400 font-mono">98.5% Accuracy Rating</div>
            </div>
            <button
              onClick={() => setTypingScore(prev => prev >= 95 ? 70 : prev + 4)}
              className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 border border-white/10 transition-all"
            >
              Test Speed
            </button>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div className="space-y-0.5 overflow-hidden">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                Primary Stack Focus
              </span>
              <p className="text-xs font-bold text-white truncate">React + Node.js + C++ / Python</p>
              <p className="text-[11px] text-slate-400 truncate">MERN, ML & Embedded IoT</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
