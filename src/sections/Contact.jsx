import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Copy, Github, Linkedin, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-purple px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
            10. Contact & Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-accent">Extraordinary</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for Full Stack Engineering internships, freelance projects, and AI-powered product development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" /> Direct Channels
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Feel free to reach out regarding full-stack internships, AI engineering projects, or technical inquiries.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Email Address</span>
                    <span className="text-xs font-mono text-white font-bold">{personalData.email}</span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                  title="Copy Email"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-brand-cyan" /> GitHub
                  </a>
                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-brand-purple" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-slate-500">
                ⚡ Response time: Within 12 hours
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 border border-white/15 space-y-5 bg-[#0D1322]/90">
              
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent. Lakshay Agrawal will get back to you shortly.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@company.com"
                    className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Inquiry / Project Offer"
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-xl glass-input text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan text-white text-xs font-bold uppercase tracking-wider shadow-glow-purple hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
