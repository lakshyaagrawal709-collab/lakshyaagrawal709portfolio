import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            08. Engineering Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-cyan">Writing & Insights</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Articles on robotics hardware, machine learning dashboards, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 text-brand-cyan">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-purple transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-purple font-semibold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
