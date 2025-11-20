import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'AI Lead Automation System', desc: 'Autonomous lead capture + nurture flows', tags: ['Python', 'RAG', 'Zapier'] },
  { title: 'Real Estate Website Design', desc: 'High-converting property showcase', tags: ['Next.js', 'Tailwind'] },
  { title: 'E-Commerce Mobile App', desc: 'Seamless shopping experience', tags: ['React Native', 'Stripe'] },
  { title: 'Custom CRM Dashboard', desc: 'Insights and workflows in one view', tags: ['React', 'Node', 'MongoDB'] },
  { title: 'AI Support Chatbot', desc: '24/7 customer service assistant', tags: ['LLM', 'LangChain'] },
  { title: 'Analytics Portal', desc: 'Data visualization and reporting', tags: ['D3', 'FastAPI'] },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">A snapshot of projects across automation, web, and apps.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="glass-card group overflow-hidden"
            >
              <div className="h-36 bg-gradient-to-br from-primary/20 to-transparent group-hover:from-primary/30 transition-colors" />
              <div className="p-5">
                <h3 className="card-title">{p.title}</h3>
                <p className="text-blue-100/80 text-sm mt-2">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-blue-100/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
