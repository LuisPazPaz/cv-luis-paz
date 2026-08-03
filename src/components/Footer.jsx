import React from 'react';
import { Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center sm:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-mono text-slate-400">
            © {new Date().getFullYear()} <span className="text-white font-semibold">{personalInfo.name}</span>. Todos los derechos reservados.
          </span>
        </div>

        <div className="text-xs font-mono text-slate-500">
          Construido con <span className="text-cyan-400 font-semibold">React.js</span> & <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}
