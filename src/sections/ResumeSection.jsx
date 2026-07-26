import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Printer } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const resumeHighlights = [
    "Degree: MBA Tech (Computer Engineering) — Integrated Software & Management Degree",
    "Career Goal: Full Stack Developer & AI-Powered Product Engineer",
    "10 Production Projects: WiFi Robotics, Airbnb Clone, Churn ML, Criminal Record Web/DB, C++ DSA",
    "Programming Mastery: C++, Java, Python, JavaScript, SQL, React.js, Node.js, Express, MongoDB, MySQL",
    "Certifications: React Web Development, Python ML & Data Science, Relational SQL Design"
  ];

  return (
    <section id="resume" className="py-24 relative z-10 border-t border-white/5 bg-[#090D16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            07. Verified Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curriculum <span className="text-gradient-accent">Vitae & Resume</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Preview or download Lakshay Agrawal's official developer resume.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-cyan">LAKSHAY_AGRAWAL_RESUME_2026.PDF</span>
                <h3 className="text-2xl font-extrabold text-white">Full Stack Developer & Engineering Intern</h3>
                <p className="text-xs text-slate-300">
                  MBA Tech (Computer Engineering) Student seeking Full Stack & AI Engineering roles.
                </p>
              </div>

              <div className="space-y-2">
                {resumeHighlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowPreviewModal(true)}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-semibold flex items-center gap-2 shadow-glow-purple hover:scale-105 transition-all"
                >
                  <Eye className="w-4 h-4" /> Interactive Resume Preview
                </button>

                <button
                  onClick={() => {
                    alert("Downloading Lakshay Agrawal's Portfolio Resume PDF!");
                  }}
                  className="px-5 py-3 rounded-xl glass-panel hover:bg-white/10 text-white text-xs font-semibold border border-white/10 flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-brand-cyan" /> Download PDF
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs glass-panel rounded-2xl p-6 border border-white/20 bg-[#070A12] space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono font-bold text-white">RESUME PREVIEW</span>
                  <FileText className="w-4 h-4 text-brand-purple" />
                </div>
                
                <div className="space-y-2.5">
                  <div className="h-3 bg-brand-purple/40 rounded w-3/4"></div>
                  <div className="h-2 bg-white/20 rounded w-full"></div>
                  <div className="h-2 bg-white/15 rounded w-5/6"></div>
                  <div className="h-2 bg-white/10 rounded w-2/3"></div>
                  
                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    <div className="h-2.5 bg-brand-cyan/40 rounded w-1/2"></div>
                    <div className="h-2 bg-white/15 rounded w-full"></div>
                    <div className="h-2 bg-white/15 rounded w-4/5"></div>
                  </div>

                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    <div className="h-2.5 bg-emerald-400/40 rounded w-2/3"></div>
                    <div className="h-2 bg-white/15 rounded w-full"></div>
                    <div className="h-2 bg-white/15 rounded w-3/4"></div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[10px] font-mono text-slate-500">Verified Document • 2026 Edition</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 bg-[#0D1322] space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-purple" /> Lakshay Agrawal — Resume Document
                </h3>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-slate-300 hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-6 bg-[#070A12] rounded-2xl border border-white/10 space-y-6 text-slate-200 text-xs font-sans">
                <div className="border-b border-white/10 pb-4 text-center space-y-1">
                  <h2 className="text-2xl font-extrabold text-white">LAKSHAY AGRAWAL</h2>
                  <p className="text-brand-purple font-mono text-xs">MBA Tech (Computer Engineering) Student • Full Stack Developer</p>
                  <p className="text-slate-400 text-[11px]">{personalData.email} • {personalData.github} • {personalData.location}</p>
                </div>

                <div>
                  <h4 className="font-bold font-mono text-brand-cyan uppercase tracking-wider mb-2">Education & Degree</h4>
                  <p className="font-semibold text-white">MBA Tech (Computer Engineering)</p>
                  <p className="text-slate-400">Mukesh Patel School of Technology Management & Engineering (2022 - Present)</p>
                </div>

                <div>
                  <h4 className="font-bold font-mono text-brand-cyan uppercase tracking-wider mb-2">Technical Skills</h4>
                  <p><strong className="text-white">Languages:</strong> C++, Java, Python, JavaScript, SQL</p>
                  <p><strong className="text-white">Frontend:</strong> HTML5, CSS3, React.js, Tailwind CSS</p>
                  <p><strong className="text-white">Backend & DB:</strong> Node.js, Express.js, MongoDB, MySQL</p>
                  <p><strong className="text-white">Analytics & Hardware:</strong> Python, Streamlit, Power BI, Embedded Systems, Robotics</p>
                </div>

                <div>
                  <h4 className="font-bold font-mono text-brand-cyan uppercase tracking-wider mb-2">10 Featured Projects Summary</h4>
                  <p><strong className="text-white">WiFi Controlled Robotic Car:</strong> Embedded microcontroller vehicle with sub-50ms signal response.</p>
                  <p><strong className="text-white">Airbnb Clone:</strong> MERN stack vacation property search & booking platform.</p>
                  <p><strong className="text-white">Bank Customer Churn Predictor:</strong> Python ML model & Streamlit dashboard (94% accuracy).</p>
                  <p><strong className="text-white">Criminal Record System (Web & DB):</strong> Administrative web interface + normalized 3NF MySQL relational database.</p>
                  <p><strong className="text-white">Java OOP Betting Game & C++ DSA Calculator:</strong> Java OOP design patterns and C++ expression evaluation stack algorithms.</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="px-5 py-2 rounded-xl bg-brand-purple text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
