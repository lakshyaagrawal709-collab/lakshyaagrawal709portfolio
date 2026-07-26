import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, Folder, User, Mail, FileText, Terminal, Moon, Sun, X } from 'lucide-react';
import { personalData, projectsData } from '../../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenTerminal, toggleTheme, theme }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-about',
      title: 'Jump to About Me',
      subtitle: 'Career objective & MBA Tech details',
      icon: User,
      action: () => { window.location.href = '#about'; onClose(); }
    },
    {
      id: 'sec-dashboard',
      title: 'Jump to Developer Dashboard',
      subtitle: 'Live stats, LeetCode & coding metrics',
      icon: Code2,
      action: () => { window.location.href = '#dashboard'; onClose(); }
    },
    {
      id: 'sec-projects',
      title: 'View 10 Featured Projects',
      subtitle: 'Robotics, MERN, ML, C++ DSA, Java & MySQL',
      icon: Folder,
      action: () => { window.location.href = '#projects'; onClose(); }
    },
    {
      id: 'open-terminal',
      title: 'Launch Interactive CLI Terminal',
      subtitle: 'Execute shell commands inside portfolio',
      icon: Terminal,
      action: () => { onClose(); onOpenTerminal(); }
    },
    {
      id: 'download-resume',
      title: 'View / Download CV Resume',
      subtitle: 'Get Lakshay Agrawal\'s verified resume',
      icon: FileText,
      action: () => { window.location.href = '#resume'; onClose(); }
    },
    {
      id: 'toggle-theme',
      title: `Switch Theme to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle dark/light glass aesthetic',
      icon: theme === 'dark' ? Sun : Moon,
      action: () => { toggleTheme(); onClose(); }
    },
    {
      id: 'send-mail',
      title: 'Send Direct Email',
      subtitle: personalData.email,
      icon: Mail,
      action: () => { window.location.href = `mailto:${personalData.email}`; onClose(); }
    }
  ];

  const filteredActions = actions.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl glass-panel rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
        >
          <div className="flex items-center px-4 border-b border-white/10 bg-white/5">
            <Search className="w-5 h-5 text-brand-purple mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects (e.g., 'Robotics', 'Airbnb', 'Python', 'Terminal')..."
              className="w-full py-4 bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none font-sans"
              autoFocus
            />
            <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto p-3 flex flex-col gap-3">
            <div>
              <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Actions & Quick Jump
              </div>
              <div className="flex flex-col gap-1 mt-1">
                {filteredActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-cyan group-hover:text-brand-purple transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400">{item.subtitle}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                        Select
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {filteredProjects.length > 0 && (
              <div>
                <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Matched Projects ({filteredProjects.length})
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  {filteredProjects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => {
                        window.location.href = '#projects';
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                          <Folder className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-brand-purple transition-colors">
                            {proj.title}
                          </div>
                          <div className="text-xs text-slate-400 font-mono">
                            {proj.techStack.slice(0, 3).join(' • ')}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-white">ESC</kbd> to exit</span>
            <span>Lakshay Agrawal Portfolio OS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
