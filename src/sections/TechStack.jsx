import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Terminal, LineChart, Cpu } from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      title: "Core Programming Languages",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      skills: ["C++", "Java", "Python", "JavaScript (ES6+)", "SQL"]
    },
    {
      title: "Frontend Engineering",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-emerald-500 to-teal-500",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Security", "Middleware"]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      skills: ["MongoDB", "Mongoose", "MySQL", "Relational Schemas", "3NF Normalization"]
    },
    {
      title: "Data Analytics & ML",
      icon: LineChart,
      color: "from-indigo-500 to-purple-500",
      skills: ["Python", "Streamlit", "Power BI", "Pandas", "Scikit-Learn"]
    },
    {
      title: "Tools & Embedded Systems",
      icon: Terminal,
      color: "from-rose-500 to-red-500",
      skills: ["Git & GitHub", "VS Code", "Embedded Electronics", "Wireless Sensors", "Vercel"]
    }
  ];

  return (
    <section id="tech" className="py-24 relative z-10 border-t border-white/5 bg-[#090D16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            03. Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Primary <span className="text-gradient-accent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, frameworks, database architectures, and hardware tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${cat.color} text-white shadow-lg`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:border-brand-purple hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Proficiency Verified</span>
                  <span className="text-emerald-400">● Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
