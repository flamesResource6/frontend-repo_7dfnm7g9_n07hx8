import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'AI Automation',
    items: ['Workflow automation', 'Chatbots', 'CRM integrations', 'Business process automation'],
    cta: 'Explore AI Automation',
  },
  {
    title: 'Web Development',
    items: ['Landing pages', 'Business websites', 'Custom dashboards'],
    cta: 'Explore Web Development',
  },
  {
    title: 'App Development',
    items: ['Android + iOS', 'Cross-platform apps', 'UI/UX design'],
    cta: 'Explore App Development',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-sub">Premium craft with automation at the core.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="card-title">{card.title}</h3>
                <span className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(45,156,219,0.9)]"></span>
              </div>
              <ul className="space-y-2 text-blue-100/80">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-300/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center btn-ghost group-hover:translate-x-0.5 transition-transform">
                {card.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
