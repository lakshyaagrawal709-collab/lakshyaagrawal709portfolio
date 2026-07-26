import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Send } from 'lucide-react';
import { personalData, projectsData, skillsData } from '../../data/portfolioData';

export default function TerminalWidget({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Lakshay Agrawal Portfolio OS v3.0 (x86_64-pc-linux-gnu)' },
    { type: 'system', text: 'Type "help" to list available commands.' }
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available CLI Commands:
  • help      - Display this help manual
  • about     - Learn about Lakshay Agrawal
  • projects  - List all 10 projects across Full Stack, ML & IoT
  • skills    - Display primary skills & level ratings
  • contact   - Display email and profile handles
  • resume    - Jump to resume viewer section
  • clear     - Clear terminal buffer history
  • matrix    - Toggle secret matrix stream
  • sudo      - Execute administrative commands`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `${personalData.name} — ${personalData.role}
Degree: ${personalData.subRole}
Location: ${personalData.location}
Objective: ${personalData.careerGoal}`
        });
        break;

      case 'projects':
        const projList = projectsData.map(p => `  • [${p.category}] ${p.title} (${p.techStack.slice(0, 3).join(', ')})`).join('\n');
        newHistory.push({
          type: 'output',
          text: `10 Featured Projects:\n${projList}`
        });
        break;

      case 'skills':
        const topSkills = skillsData.slice(0, 8).map(s => `  • ${s.name.padEnd(18)} [${'█'.repeat(Math.floor(s.level/10))}${'░'.repeat(10-Math.floor(s.level/10))}] ${s.level}%`).join('\n');
        newHistory.push({
          type: 'output',
          text: `Skill Matrix:\n${topSkills}`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${personalData.email}
GitHub:   ${personalData.github}
LinkedIn: ${personalData.linkedin}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'matrix':
        newHistory.push({
          type: 'success',
          text: `[SYSTEM] Matrix stream initialized. Green phosphor telemetry online.`
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'error',
          text: `Access denied: User is not in the sudoers file. Incident reported.`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`w-full ${isExpanded ? 'max-w-5xl h-[80vh]' : 'max-w-2xl h-[480px]'} glass-panel rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl transition-all duration-300 font-mono`}
        >
          <div className="px-4 py-3 bg-[#0D1322] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs text-slate-300 ml-2 font-semibold flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-brand-cyan" /> lakshay@portfolio-os:~
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400">
              <button onClick={() => setIsExpanded(!isExpanded)} className="hover:text-white p-1">
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button onClick={onClose} className="hover:text-white p-1">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-[#070A12]/90 text-xs leading-relaxed space-y-2">
            {history.map((item, idx) => (
              <div key={idx} className={`whitespace-pre-wrap ${
                item.type === 'user' ? 'text-brand-cyan font-bold' :
                item.type === 'error' ? 'text-rose-400' :
                item.type === 'success' ? 'text-emerald-400 font-semibold' :
                'text-slate-300'
              }`}>
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={handleCommand} className="p-3 bg-[#0D1322] border-t border-white/10 flex items-center gap-2">
            <span className="text-brand-purple font-bold text-sm">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'projects', 'skills')..."
              className="flex-1 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
              autoFocus
            />
            <button type="submit" className="p-1.5 rounded bg-brand-purple/20 text-brand-purple hover:bg-brand-purple hover:text-white transition-colors">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
