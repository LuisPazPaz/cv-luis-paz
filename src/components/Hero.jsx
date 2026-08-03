import React from 'react';
import { ShieldCheck, Cpu, Terminal, ArrowRight, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Disponible para proyectos & arquitectura SaaS
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">{personalInfo.name}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              {personalInfo.role}
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            {/* Badges / Tech Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {["Node.js", "React", "PHP Legacy Bridge", "MySQL Dual-Pool", "JWT SSO", "Tailwind CSS"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono bg-slate-900/80 text-slate-300 border border-slate-800 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                Ver Proyectos Destacados
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                Perfil GitHub
              </a>
            </div>

            {/* Location & Details */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Arquitectura SaaS & Enterprise
              </span>
            </div>

          </div>

          {/* Right Column: Code Showcase Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 relative shadow-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">Architecture.config.js</span>
              </div>

              {/* Code Content */}
              <div className="py-4 font-mono text-xs text-slate-300 leading-relaxed space-y-2">
                <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-400">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">specialization:</span> <span className="text-emerald-400">"SaaS Architecture & SSO"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">stack:</span> [</p>
                <p className="pl-8"><span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"PHP MVC"</span>, <span className="text-emerald-400">"MySQL"</span></p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-400">highlights:</span> &#123;</p>
                <p className="pl-8"><span className="text-slate-400">ssoBridge:</span> <span className="text-cyan-400">true</span>,</p>
                <p className="pl-8"><span className="text-slate-400">dualDbPool:</span> <span className="text-cyan-400">true</span>,</p>
                <p className="pl-8"><span className="text-slate-400">cronAutomations:</span> <span className="text-cyan-400">true</span></p>
                <p className="pl-4">&#125;</p>
                <p>&#125;;</p>
              </div>

              {/* Stat Badges Inside Card */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    SSO JWT Bridge
                  </div>
                  <p className="text-[11px] text-slate-400">Autenticación Cross-Domain</p>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/60">
                  <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                    <Cpu className="w-4 h-4" />
                    Cron Jobs
                  </div>
                  <p className="text-[11px] text-slate-400">Procesamiento diario 00:00</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
