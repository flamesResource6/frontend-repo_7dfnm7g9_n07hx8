import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container max-w-4xl">
        <div className="section-header">
          <h2 className="section-title">Start a Project</h2>
          <p className="section-sub">Tell us what you want to build — we’ll reply within 24 hours.</p>
        </div>

        <div className="glass-card p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                <div className="col-span-1">
                  <label className="label">Name</label>
                  <input className="input" type="text" required placeholder="Jane Doe" />
                </div>
                <div className="col-span-1">
                  <label className="label">Email</label>
                  <input className="input" type="email" required placeholder="jane@company.com" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="label">Service Needed</label>
                  <select className="input">
                    <option>AI Automation</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                  </select>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="label">Message</label>
                  <textarea className="input min-h-[120px]" placeholder="Tell us about your project" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button type="submit" className="btn-primary w-full md:w-auto">Submit Request</button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-10"
              >
                <div className="text-2xl font-semibold text-blue-50">Request received!</div>
                <p className="text-blue-100/80 mt-2">We’ll be in touch shortly. Thanks for reaching out to HADS.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
