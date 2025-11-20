import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const cards = [
  { title: 'AI Automation', color: 'from-blue-400/30 to-blue-600/10' },
  { title: 'Web Development', color: 'from-cyan-400/30 to-cyan-600/10' },
  { title: 'App Development', color: 'from-sky-400/30 to-sky-600/10' },
];

function TiltCard({ title, color, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, rotate: 1, boxShadow: '0 0 40px rgba(45,156,219,0.35)' }}
      className={`relative rounded-2xl p-5 md:p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br ${color} shadow-[0_0_1px_rgba(255,255,255,0.2)]`}
      style={{
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none glow-ring" />
      <div className="text-sm md:text-base font-semibold tracking-wide text-blue-100">
        {title}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] grid place-items-center bg-navy">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlay to improve contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/60 to-navy/90 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm md:text-base font-medium tracking-wider uppercase mb-4">
              HADS Agency • Next‑Gen Digital Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
              We Build AI-Powered Solutions That Transform Your Business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-blue-100/80 text-base md:text-lg max-w-2xl leading-relaxed">
              HADS delivers automation, apps, and websites that help companies scale intelligently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary">Get Started</a>
              <a href="#services" className="btn-secondary">View Services</a>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-start pt-8 lg:pt-0">
            {cards.map((c, i) => (
              <TiltCard key={c.title} title={c.title} color={c.color} delay={0.15 + i * 0.08} />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
    </section>
  );
}
