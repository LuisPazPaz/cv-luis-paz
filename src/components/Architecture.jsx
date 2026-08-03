import React from 'react';
import { architectureHighlights } from '../data/portfolioData';
import { ShieldCheck, Database, Clock, ArrowRight } from 'lucide-react';

export default function Architecture() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-teal-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            Ingeniería & Soluciones
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Logros Destacados de Arquitectura
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Patrones de diseño complejos aplicados para garantizar seguridad multi-tenant, aislamiento de datos e integraciones fluidas.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {architectureHighlights.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all group"
            >
              <div>
                {/* Header Icon */}
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>

                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {item.techs.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-mono bg-slate-900 text-slate-300 rounded border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Architecture Flow Banner */}
        <div className="mt-12 glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">¿Quieres ver la arquitectura completa?</h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Incluye Single Sign-On (SSO), middleware en Node.js, conexiones a MySQL y pasarela de sincronización con aplicaciones PHP.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors whitespace-nowrap shadow-lg shadow-cyan-400/20"
          >
            Consultar Diagrama Técnico
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
