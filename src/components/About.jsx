import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square rounded-3xl glass-card overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-400/5" />
            {/* abstract silhouette using layered gradients */}
            <div className="absolute inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(45,156,219,0.35),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(45,156,219,0.15),transparent_60%)] blur-2xl" />
            <div className="relative h-full w-full grid place-items-center">
              <div className="h-48 w-48 rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-[0_0_60px_rgba(45,156,219,0.35)]" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="section-title">About HADS</h2>
          <p className="text-blue-100/80 leading-relaxed mt-4">
            HADS is a modern agency focused on building intelligent digital products that solve real business problems. Our mission is to bring automation and powerful applications to every company.
          </p>
        </div>
      </div>
    </section>
  );
}
