import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Rocket, Target, Award } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    { title: "Academic Rigor", text: "Integrated MBA Tech (Computer Engineering) dual degree combining software architecture with business strategy.", icon: GraduationCap },
    { title: "Full Stack Engineering", text: "Proficient in MERN Stack (MongoDB, Express, React, Node.js), Python backend tooling, and SQL relational databases.", icon: Rocket },
    { title: "Hardware & IoT Innovation", text: "Hands-on experience building WiFi-controlled robotic vehicles, smoke detection systems, and micro-controller automation.", icon: Target },
    { title: "Problem Solving & ML", text: "Developing predictive analytics models using Python, Scikit-Learn, Streamlit, and interactive Power BI dashboards.", icon: Award }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#090D16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            01. Background & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-accent">Lakshay Agrawal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging software engineering, data analytics, and embedded hardware innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-cyan" /> Engineering + Business Vision
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                I am an <strong className="text-white">MBA Tech (Computer Engineering) student</strong> passionate about becoming a Senior Full Stack Developer and building AI-powered products.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                My project portfolio spans <strong>10 complete engineering systems</strong>: from full-stack MERN platforms (Airbnb Clone, Criminal Record Web System) and ML prediction dashboards (Bank Churn) to core C++ algorithms, Java OOP games, and WiFi-controlled robotics hardware.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Specialization: Full Stack, ML & IoT</span>
                <span>Location: India</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-purple">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
