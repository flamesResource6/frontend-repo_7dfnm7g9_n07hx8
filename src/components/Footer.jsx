import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/20 grid place-items-center text-primary font-extrabold">H</div>
          <span className="font-semibold text-blue-50 tracking-wide">HADS</span>
        </div>
        <nav className="flex items-center gap-6 text-blue-100/80">
          <a href="#" className="hover:text-blue-50 transition-colors">Home</a>
          <a href="#services" className="hover:text-blue-50 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-50 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-50 transition-colors">Contact</a>
        </nav>
        <div className="text-xs text-blue-100/60">© {new Date().getFullYear()} HADS Agency. All rights reserved.</div>
      </div>
    </footer>
  );
}
