import React from 'react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Proyectos
          </h2>
          <div className="mx-auto w-24 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/30 hover:bg-white/8 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase mb-3">
                  {project.category}
                </p>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-snug pr-4">
                    {project.title}
                  </h3>
                  <span className="text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-1">
                    &lt;/&gt;
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-slate-500 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
