import React from 'react';
import { Mail, MapPin, Send, FileText, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-semibold">
              Contacto Profesional
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ¿Tienes un proyecto o necesitas una consultoría?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Estoy disponible para contrataciones Full-Stack, desarrollo de plataformas SaaS y consultoría en arquitectura de software distribuido.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Correo Electrónico</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Ubicación</div>
                  <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">Perfil GitHub</div>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-cyan-400 hover:underline">
                    github.com/LuisPazPaz
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <div className="pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl shadow-lg shadow-cyan-400/20 hover:scale-105 transition-transform"
              >
                <FileText className="w-4 h-4" />
                Ver Repositorio & Proyectos en GitHub
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 relative shadow-2xl">
              <h4 className="text-xl font-bold text-white mb-2">Enviar Mensaje Directo</h4>
              <p className="text-slate-400 text-xs mb-6">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2">
                  <Check className="w-8 h-8 mx-auto" />
                  <p className="font-bold text-sm">¡Mensaje enviado con éxito!</p>
                  <p className="text-xs text-emerald-300">Gracias por escribir. Te responderé a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Tu Nombre</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Carlos Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Tu Correo Electrónico</label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Asunto / Tipo de Proyecto</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Desarrollo de plataforma SaaS o consultoría ERP"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Mensaje</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe los detalles de tu consulta..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg shadow-cyan-400/20"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
