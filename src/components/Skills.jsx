import React from 'react';
import { skillsData } from '../data/portfolioData';
import { CheckCircle2, Code, Database, Server, Terminal } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Frontend Moderno':
        return <Code className="w-5 h-5 text-teal-400" />;
      case 'Bases de Datos':
        return <Database className="w-5 h-5 text-blue-400" />;
      default:
        return <Terminal className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            Habilidades Técnicas
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dominio Tecnológico & Herramientas
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Stack completo utilizado en la creación de aplicaciones web, pasarelas de autenticación y sistemas ERP de alto rendimiento.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h4 className="font-bold text-white text-base">
                    {group.category}
                  </h4>
                </div>

                {/* Skill List */}
                <ul className="space-y-3">
                  {group.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Especialidad</span>
                <span className="text-cyan-400 font-semibold">100% Producción</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
