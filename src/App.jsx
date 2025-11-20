import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy text-blue-50">
      {/* global background accents */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,156,219,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(45,156,219,0.05),transparent_35%)]" />
      </div>

      {/* Simple nav */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="container py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary/20 grid place-items-center text-primary font-extrabold">H</div>
            <span className="font-semibold">HADS</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
            <a href="#services" className="hover:text-blue-50">Services</a>
            <a href="#about" className="hover:text-blue-50">About</a>
            <a href="#portfolio" className="hover:text-blue-50">Work</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App