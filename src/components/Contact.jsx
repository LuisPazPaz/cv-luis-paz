import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Phone } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="space-y-4 mb-14">
          <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
            Contacto
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Construyamos algo útil
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Estoy disponible para pasantías profesionales en desarrollo de software. No dudes en escribirme.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-emerald-400/30 transition-all">
            <Mail className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-slate-500 text-xs mb-1">Email</p>
              <a href={`mailto:${personalInfo.email}`} className="text-white text-sm font-medium hover:text-emerald-400 transition-colors break-all">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-emerald-400/30 transition-all">
            <Phone className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-slate-500 text-xs mb-1">Teléfono</p>
              <a href={`tel:${personalInfo.phone}`} className="text-white text-sm font-medium hover:text-emerald-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-emerald-400/30 transition-all">
            <MapPin className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-slate-500 text-xs mb-1">Ubicación</p>
              <p className="text-white text-sm font-medium">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* GitHub link */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-emerald-400/10 hover:border-emerald-400/40 hover:text-emerald-400 transition-all"
        >
          <GithubIcon className="w-5 h-5" />
          Ver proyectos en GitHub
        </a>

      </div>
    </section>
  );
}
