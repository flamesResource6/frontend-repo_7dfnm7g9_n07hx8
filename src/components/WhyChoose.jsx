import React from 'react';

const features = [
  { title: 'High Quality', desc: 'We obsess over details to ship polished work.' },
  { title: 'Fast Delivery', desc: 'Move from idea to impact with speed.' },
  { title: 'Scalable Tech', desc: 'Modern stacks built for growth.' },
  { title: 'Proven Expertise', desc: 'Experienced team across AI, web, and apps.' },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose HADS</h2>
          <p className="section-sub">HADS blends creativity with deep technical expertise to deliver future-ready digital solutions.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-6">
              <h3 className="card-title mb-2">{f.title}</h3>
              <p className="text-blue-100/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
