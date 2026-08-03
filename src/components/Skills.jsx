import React from 'react';
import { skillsData } from '../data/portfolioData';

const dotColors = ['bg-cyan-400', 'bg-purple-400', 'bg-teal-400', 'bg-blue-400', 'bg-pink-400'];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — exactly like Angel's */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Habilidades Tecnológicas
          </h2>
          {/* Gradient underline */}
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Un desglose completo de las herramientas y metodologías que domino para construir
            soluciones de software de alta calidad.
          </p>
        </div>

        {/* Skills grid — dark cards like Angel's */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-3 h-3 rounded-full ${dotColors[index % dotColors.length]}`} />
                <h3 className="text-white font-bold text-base">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="text-slate-400 text-sm py-1 border-b border-white/5 last:border-0">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
