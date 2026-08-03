import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Subtle radial glow — emerald */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">

        {/* Big name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tight">
          Luis Andres<br />
          <span className="text-white">Paz Paz</span>
        </h1>

        {/* Role labels */}
        <div className="space-y-1">
          <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
            Ingeniería en Sistemas
          </p>
          <p className="text-slate-400 tracking-widest uppercase text-xs font-semibold">
            Desarrollador Full Stack & SaaS Architect
          </p>
        </div>

        {/* Quick summary box */}
        <div className="mx-auto max-w-lg border border-emerald-500/20 rounded-xl p-5 bg-emerald-950/20 backdrop-blur-sm text-left space-y-2 mt-6">
          <p className="text-[11px] text-emerald-400 font-mono tracking-widest uppercase mb-3">
            Resumen rápido
          </p>
          {personalInfo.quickSummary.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-slate-300 text-sm">
              <span className="text-emerald-400 font-bold mt-0.5">&gt;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {personalInfo.heroTagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-emerald-400 text-black font-bold text-sm rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 hover:scale-105"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
          >
            Contacto
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
