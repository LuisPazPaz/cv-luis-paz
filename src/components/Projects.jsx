import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, X } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['Todos', 'SaaS & Cloud', 'Seguridad & APIs', 'ERP & POS', 'Web Applications'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
            Portafolio Realizado
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos & Ecosistema de Software
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            Casos de éxito desarrollados, desde plataformas de administración SaaS hasta sistemas de Punto de Venta (POS) optimizados.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h4>

                {/* Summary */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Features Snippet */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-500 rounded border border-slate-800">
                      +{project.techs.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-cyan-400 bg-slate-900/80 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all"
                >
                  <Layers className="w-3.5 h-3.5" />
                  Ver Detalles Técnicos
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  {activeModalProject.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400">{activeModalProject.badge}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Descripción del Proyecto</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Funcionalidades Principales</h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {activeModalProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tecnologías e Infraestructura</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techs.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl"
              >
                Cerrar Ventana
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
